/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import flash.display.Sprite;
import flash.display.StageAlign;
import flash.display.StageQuality;
import flash.display.StageScaleMode;
import flash.events.Event;

import jp.dotby.dotgen.DotGen;

import net.hires.debug.Stats;

[SWF(width=950, height=600, frameRate=60, backgroundColor=0xffffff)]
public class YoruPaneTest extends Sprite {
    private var _dotgen:DotGen;

    public function YoruPaneTest() {
        stage.scaleMode = StageScaleMode.NO_SCALE;
        stage.align = StageAlign.TOP_LEFT;
        stage.quality = StageQuality.BEST;

        _dotgen = new DotGen();
        addChild(_dotgen);
        _dotgen.fill();

//        addEventListener(Event.ENTER_FRAME, _handleEnterFrame);

//        stage.addChild(new Stats());
    }

    private function _handleEnterFrame(event:Event):void {
        _dotgen.fill();
    }
}
}
