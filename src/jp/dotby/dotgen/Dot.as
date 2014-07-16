/**
 * Created by Saqoosha on 2014/07/16.
 */
package jp.dotby.dotgen {

import com.greensock.TweenLite;
import com.greensock.easing.Expo;

import flash.display.Shape;

public class Dot extends Shape {


    private static const DRAW_R:Number = 100;


    public function Dot(info:DotInfo) {
        graphics.beginFill(0xff0000);
        graphics.drawCircle(0, 0, DRAW_R);
        graphics.endFill();

        x = info.x;
        y = info.y;
        scaleX = scaleY = 0;

        TweenLite.to(this, 0, {colorTransform: {tint: info.color, tintAmount: 1}});
    }


    public function destroy(delay:Number = 0):void {
        if (parent) {
            var self:Dot = this;
            TweenLite.to(this, 1, {
                scaleX: 0,
                scaleY: 0,
                ease: Expo.easeOut,
                delay: delay,
                onComplete: function ():void {
                    self.parent.removeChild(self);
                }});
        }
    }


    public function transitionTo(info:DotInfo, delay:Number = 0, destroyOnComplete:Boolean = false):void {
        var scale:Number = info.r / 100;
        var params:Object = {
            x: info.x,
            y: info.y,
            scaleX: scale,
            scaleY: scale,
            colorTransform: {
                tint: info.color,
                tintAmount: 1
            },
            ease: Expo.easeOut,
            delay: delay
        };
        if (destroyOnComplete) {
            var self:Dot = this;
            params.onComplete = function ():void {
                self.parent.removeChild(self);
            };
        }
        TweenLite.to(this, 1, params);
    }


}
}
