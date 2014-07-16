/**
 * Created by Saqoosha on 2014/07/15.
 */
package jp.dotby.dotgen {

import flash.display.Sprite;
import flash.geom.Matrix;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.utils.Dictionary;
import flash.utils.getTimer;

public class DotGen extends Sprite {


    private static var ID:int = 0;


    public static function generate(origin:Point, area:Rectangle, radius:Number = 10, color:uint = 0xff0000, interval:Number = 50, rotation:Number = 0, shear:Number = 30):Vector.<DotInfo> {
        var info:Vector.<DotInfo> = new <DotInfo>[];

        var mtx:Matrix = new Matrix();
        mtx.translate(-origin.x, -origin.y);
//        mtx.rotate(10 * Math.PI / 180);
        mtx.rotate(rotation * Math.PI / 180);
        if (shear > 0) {
            var m2:Matrix = new Matrix();
            var a:Number = shear * Math.PI / 180;
            m2.b = Math.sin(a);
            m2.d = Math.cos(a);
            mtx.concat(m2);
        }

        var tl:Point = mtx.transformPoint(area.topLeft);
        var tr:Point = mtx.transformPoint(new Point(area.right, area.top));
        var bl:Point = mtx.transformPoint(new Point(area.left, area.bottom));
        var br:Point = mtx.transformPoint(area.bottomRight);
        var x0:Number = Math.min(tl.x, tr.x, bl.x, br.x);
        var x1:Number = Math.max(tl.x, tr.x, bl.x, br.x);
        var y0:Number = Math.min(tl.y, tr.y, bl.y, br.y);
        var y1:Number = Math.max(tl.y, tr.y, bl.y, br.y);

        var hit:Rectangle = area.clone();
        hit.inflate(radius, radius);

        mtx.invert();
        var sy:Number = Math.ceil((y0 - radius) / interval) * interval;
        var ey:Number = Math.ceil((y1 + radius) / interval) * interval;
        var sx:Number = Math.ceil((x0 - radius) / interval) * interval;
        var ex:Number = Math.ceil((x1 + radius) / interval) * interval;
        var id:int = 0;
        for (var y:int = sy; y < ey; y += interval) {
            for (var x:int = sx; x < ex; x += interval) {
                var p:Point = mtx.transformPoint(new Point(x, y));
                if (hit.containsPoint(p)) {
                    info.push(new DotInfo(ID++, p.x, p.y, radius, color));
                }
            }
        }

        return info;
    }


    public function DotGen() {
    }


    private var _current:Vector.<DotInfo> = new <DotInfo>[];
    private var _dots:Dictionary = new Dictionary();


    public function draw(data:Vector.<DotInfo>):void {
//        graphics.clear();
        for each (var info:DotInfo in data) {
            graphics.beginFill(info.color, 0.5);
            graphics.drawCircle(info.x, info.y, info.r);
            graphics.endFill();
        }
    }


    public function transition(next:Vector.<DotInfo>):void {

        var t:int = getTimer();

        var info:DotInfo;
        var nearest:DotInfo;
        var dot:Dot;
        var delay:Number;

        function calcDelay(info:DotInfo):Number {
            var dx:Number = info.x - 475;
            var dy:Number = info.y - 300;
            return Math.sqrt(dx * dx + dy * dy) / 2000;
        }

        for each (info in _current) {
            dot = _dots[info];
            nearest = findNearest(next, info, 100);
            delay = calcDelay(info);
            if (nearest) {
                // transition to next pos
                if (_dots[nearest]) {
                    dot.transitionTo(nearest, delay, true);
                } else {
                    dot.transitionTo(nearest, delay, false);
                    _dots[nearest] = dot;
                }
            } else {
                // no move, delete
                dot.destroy(delay);
            }
            delete _dots[info];
        }

        for each (info in next) {
            if (_dots[info]) {
                continue;
            }
            nearest = findNearest(_current, info, 100);
            if (nearest) {
                dot = new Dot(nearest);
            } else {
                dot = new Dot(info);
            }
            dot.transitionTo(info, calcDelay(info));
            addChild(dot);
            _dots[info] = dot;
        }

        _current = next;

        trace(getTimer() - t);
    }


    private function findNearest(all:Vector.<DotInfo>, target:DotInfo, maxDist:Number):DotInfo {
        maxDist *= maxDist;
        var dist:Number = Number.MAX_VALUE;
        var nearest:DotInfo = null;
        for each (var info:DotInfo in all) {
            var dx:Number = info.x - target.x;
            var dy:Number = info.y - target.y;
            var d:Number = dx * dx + dy * dy;
            if (d < dist) {
                dist = d;
                nearest = info;
            }
        }
        return dist < maxDist ? nearest : null;
    }
}
}
