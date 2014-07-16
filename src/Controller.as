/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import com.greensock.plugins.ColorTransformPlugin;
import com.greensock.plugins.TweenPlugin;

import flash.display.Sprite;
import flash.events.Event;
import flash.external.ExternalInterface;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.utils.setTimeout;

import jp.dotby.dotgen.Animator;
import jp.dotby.dotgen.DotInfo;
import jp.dotby.dotgen.Generator;

public class Controller extends Sprite {


    [Embed(source='../js/out/main.js', mimeType='application/octet-stream')]
    private static const JSSRC:Class;


    private var _animator:Animator;


    public function Controller() {
        TweenPlugin.activate([ColorTransformPlugin]);

        addEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);

        _animator = new Animator();
        _animator.x = 600;
        _animator.scaleX = _animator.scaleY = 0.4;
        addChild(_animator);
//        addChild(new Stats());

//        setInterval(nextDots, 2000);
        nextDots();
    }

    public function open():void {
        _animator.x = 0;
        _animator.scaleX = _animator.scaleY = 1.0;
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){}');
        }
    }


    public function close():void {
        _animator.x = 600;
        _animator.scaleX = _animator.scaleY = 0.4;
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){}');
        }
    }


    private function _handleAddedToStage(event:Event):void {
        graphics.beginFill(0xffffff);
        graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        graphics.endFill();
    }


    private function nextDots():void {
        var origin:Point = new Point(stage.stageWidth / 2 + Math.random() * 200, stage.stageHeight / 2 + Math.random() * 200);
        var area:Rectangle = new Rectangle(0, 0, stage.stageWidth, stage.stageHeight);
        var r:Number = 5 + Math.random() * 50;
        var color:uint = Math.random() * 0xffffff;
        var interval:Number = r * 2 + 5 + Math.random() * 50;
        var rotation:Number = Math.floor(Math.random() * 18) * 5;
        var shear:Number = Math.floor(Math.random() * 4) * 15;
        var info:Vector.<DotInfo> = Generator.generate(origin, area, r, color, interval, rotation, shear);
        _animator.transition(info);
        setTimeout(nextDots, 2000);
    }
}
}
