/**
 * Created by Saqoosha on 2014/07/17.
 */
package jp.dotby.dotgen {

import flash.display.Sprite;
import flash.external.ExternalInterface;
import flash.utils.Dictionary;
import flash.utils.getTimer;

public class Animator extends Sprite {


    public function Animator() {
    }


    private var _current:Vector.<DotInfo> = new <DotInfo>[];
    private var _dots:Dictionary = new Dictionary();


    public function transition(next:Vector.<DotInfo>, color2:uint):Number {
        var t:int = getTimer();

        var info:DotInfo;
        var nearest:DotInfo;
        var dot:Dot;
        var delay:Number;
        var maxDelay:Number = 0;
        var toJS:Array = [];

        function calcDelay(info:DotInfo):Number {
            var dx:Number = info.x - 475;
            var dy:Number = info.y - 300;
            var d:Number = Math.sqrt(dx * dx + dy * dy) / 2000;
            if (d > maxDelay) {
                maxDelay = d;
            }
            return d + 0.011;
        }

        for each (info in _current) {
            dot = _dots[info];
            nearest = findNearest(next, info, 100);
            if (nearest) {
                delay = calcDelay(nearest);
                // transition to next pos
                var arg:Object = nearest.toJS();
                arg.color = color2;
                arg.from = info.id;
                arg.delay = delay;
                if (_dots[nearest]) {
                    dot.transitionTo(nearest, delay, true);
                    arg.destroy = true;
                } else {
                    dot.transitionTo(nearest, delay, false);
                    _dots[nearest] = dot;
                    arg.destroy = false;
                }
                toJS.push({op: 'move', arg: arg});
            } else {
                // no move, delete
                dot.destroy(calcDelay(info));
                toJS.push({op: 'del', arg: info.id});
            }
            delete _dots[info];
        }

        for each (info in next) {
            if (_dots[info]) {
                continue;
            }
            nearest = findNearest(_current, info, 100);
            delay = calcDelay(info);
            arg = info.toJS();
            arg.color = color2;
            arg.delay = delay;
            if (nearest) {
                dot = new Dot(nearest);
                arg.from = nearest.toJS();
                toJS.push({op: 'new', arg: arg});
            } else {
                dot = new Dot(info);
                toJS.push({op: 'new', arg: arg});
            }
            dot.transitionTo(info, delay);
            addChild(dot);
            _dots[info] = dot;
        }

        _current = next;

        trace('transition', getTimer() - t, 'ms');

        ExternalInterface.call('function(data) {' +
                '   window.dotgen.update(data);' +
                '}', toJS);

        trace('transition', getTimer() - t, 'ms');
        return maxDelay;
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
