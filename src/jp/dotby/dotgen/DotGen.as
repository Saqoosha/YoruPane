/**
 * Created by Saqoosha on 2014/07/15.
 */
package jp.dotby.dotgen {

import flash.display.Sprite;
import flash.external.ExternalInterface;
import flash.geom.Matrix;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.utils.getTimer;

public class DotGen extends Sprite {


    public function DotGen() {
    }


    public function fill():void {
        graphics.clear();

        var w:Number = 950;
        var h:Number = 600;

        var mtx:Matrix = new Matrix();
        mtx.translate(-w / 2, -h / 2);
//        var rot:Number = 10 * Math.PI / 180;
        var rot:Number = getTimer() / 10000;
        if (ExternalInterface.available) {
            ExternalInterface.call('function (rot) {' +
                    'window.dotgen.rotation = rot;' +
                    '}', rot);
        }
        mtx.rotate(rot);
        var m2:Matrix = new Matrix();
        var a:Number = 30 * Math.PI / 180;
        m2.b = Math.sin(a);
        m2.d = Math.cos(a);
        mtx.concat(m2);

        var tl:Point = mtx.transformPoint(new Point(0, 0));
        var tr:Point = mtx.transformPoint(new Point(w, 0));
        var bl:Point = mtx.transformPoint(new Point(0, h));
        var br:Point = mtx.transformPoint(new Point(w, h));
        var x0:Number = Math.min(tl.x, tr.x, bl.x, br.x);
        var x1:Number = Math.max(tl.x, tr.x, bl.x, br.x);
        var y0:Number = Math.min(tl.y, tr.y, bl.y, br.y);
        var y1:Number = Math.max(tl.y, tr.y, bl.y, br.y);

        var radius:Number = 10;
        var interval:Number = 50;
        var hit:Rectangle = new Rectangle(0, 0, w, h);
        hit.inflate(radius, radius);

        mtx.invert();
        var sy:Number = Math.floor((y0 - radius) / interval) * interval;
        var ey:Number = Math.ceil((y1 + radius) / interval) * interval;
        var sx:Number = Math.floor((x0 - radius) / interval) * interval;
        var ex:Number = Math.ceil((x1 + radius) / interval) * interval;
        for (var y:int = sy; y < ey; y += interval) {
            for (var x:int = sx; x < ex; x += interval) {
                var p:Point = mtx.transformPoint(new Point(x, y));
                if (hit.containsPoint(p)) {
                    graphics.beginFill(0x0, 0.1);
                    graphics.drawCircle(p.x, p.y, radius);
                    graphics.endFill();
                }
            }
        }
    }
}
}
