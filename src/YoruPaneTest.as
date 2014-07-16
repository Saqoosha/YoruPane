/**
 * Created by Saqoosha on 2014/07/15.
 */
package {

import com.greensock.plugins.ColorTransformPlugin;
import com.greensock.plugins.TweenPlugin;

import flash.display.Sprite;
import flash.display.StageAlign;
import flash.display.StageQuality;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.utils.setInterval;
import flash.utils.setTimeout;

import jp.dotby.dotgen.DotGen;
import jp.dotby.dotgen.DotInfo;

[SWF(width=950, height=600, frameRate=120, backgroundColor=0xffffff)]
public class YoruPaneTest extends Sprite {


    public function YoruPaneTest() {
        addEventListener(Event.ADDED_TO_STAGE, _handleAddedStage);
    }


    private var _dotgen:DotGen;


    private function _handleAddedStage(event:Event):void {
        stage.scaleMode = StageScaleMode.NO_SCALE;
        stage.align = StageAlign.TOP_LEFT;
        stage.quality = StageQuality.BEST;

        TweenPlugin.activate([ColorTransformPlugin]);

        _dotgen = new DotGen();
        addChild(_dotgen);
//        _dotgen.fill();

        setInterval(function ():void {
            var origin:Point = new Point(stage.stageWidth / 2 + Math.random() * 200, stage.stageHeight / 2 + Math.random() * 200);
            var area:Rectangle = new Rectangle(0, 0, stage.stageWidth, stage.stageHeight);
            var r:Number = 5 + Math.random() * 50;
            var color:uint = Math.random() * 0xffffff;
            var interval:Number = r * 2 + 10 + Math.random() * 70;
            var rotation:Number = Math.floor(Math.random() * 10) * 5;
            var shear:Number = Math.floor(Math.random() * 4) * 15;
            var info:Vector.<DotInfo> = DotGen.generate(origin, area, r, color, interval, rotation, shear);
            _dotgen.transition(info);
        }, 2000);

//        var origin:Point = new Point(stage.stageWidth / 2, stage.stageHeight / 2);
//        var area:Rectangle = new Rectangle(0, 0, stage.stageWidth, stage.stageHeight);
//        var info:Vector.<DotInfo> = DotGen.generate(origin, area);
//        var info2:Vector.<DotInfo> = DotGen.generate(origin, area, 15, 0x00ff00, 80, 10, 0);
////        _dotgen.draw(info);
////        _dotgen.draw(info2);
//
//        _dotgen.transition(info2);
//        setTimeout(function ():void {
//            _dotgen.transition(info);
//        }, 2000);
//        _dotgen.transition(info2);

//        stage.addEventListener(MouseEvent.CLICK, _handleClick);

//        graphics.beginFill(0xff0000, 0.1);
//        graphics.drawRect(area.x, area.y, area.width, area.height);
//        graphics.endFill();

//        addEventListener(Event.ENTER_FRAME, _handleEnterFrame);

//        stage.addChild(new Stats());
    }

    private function _handleClick(event:MouseEvent):void {
//        _dotgen.hoge(event.stageX, event.stageY);
    }


    private function _handleEnterFrame(event:Event):void {
//        _dotgen.fill();
    }
}
}
