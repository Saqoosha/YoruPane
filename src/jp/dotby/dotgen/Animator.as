/**
 * Created by Saqoosha on 2014/07/17.
 */
package jp.dotby.dotgen {

import flash.display.Sprite;
import flash.utils.Dictionary;
import flash.utils.getTimer;

public class Animator extends Sprite {


    public function Animator() {
    }


    private var _current:Vector.<DotInfo> = new <DotInfo>[];
    private var _dots:Dictionary = new Dictionary();


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

//        trace(getTimer() - t);
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
