/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import com.greensock.plugins.ColorTransformPlugin;
import com.greensock.plugins.TweenPlugin;

import flash.display.Sprite;
import flash.events.Event;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.utils.setInterval;
import flash.utils.setTimeout;

import jp.dotby.dotgen.DotGen;
import jp.dotby.dotgen.DotInfo;

import net.hires.debug.Stats;

public class YoruPane extends Sprite {

    [Embed(source='../js/out/main.js', mimeType='application/octet-stream')]
    private static const JSSRC:Class;

    public function YoruPane() {
        TweenPlugin.activate([ColorTransformPlugin]);

        addEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);

        _dotgen = new DotGen();
        _dotgen.x = 600;
        _dotgen.scaleX = _dotgen.scaleY = 0.4;
        addChild(_dotgen);
//        addChild(new Stats());

//        setInterval(nextDots, 2000);
        nextDots();
    }

    public function open():void {
        _dotgen.x = 0;
        _dotgen.scaleX = _dotgen.scaleY = 1.0;
    }


    public function close():void {
        _dotgen.x = 600;
        _dotgen.scaleX = _dotgen.scaleY = 0.4;
    }


    private function _handleAddedToStage(event:Event):void {
        graphics.beginFill(0xffffff);
        graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        graphics.endFill();
    }

    private var _dotgen:DotGen;

    private function nextDots():void {
        var origin:Point = new Point(stage.stageWidth / 2 + Math.random() * 200, stage.stageHeight / 2 + Math.random() * 200);
        var area:Rectangle = new Rectangle(0, 0, stage.stageWidth, stage.stageHeight);
        var r:Number = 5 + Math.random() * 50;
        var color:uint = Math.random() * 0xffffff;
        var interval:Number = r * 2 + 5 + Math.random() * 50;
        var rotation:Number = Math.floor(Math.random() * 18) * 5;
        var shear:Number = Math.floor(Math.random() * 4) * 15;
        var info:Vector.<DotInfo> = DotGen.generate(origin, area, r, color, interval, rotation, shear);
        _dotgen.transition(info);
        setTimeout(nextDots, 2000);
    }
}
}
