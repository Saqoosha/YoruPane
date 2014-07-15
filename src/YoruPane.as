/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import flash.display.Sprite;
import flash.events.Event;

import jp.dotby.dotgen.DotGen;

import net.hires.debug.Stats;

public class YoruPane extends Sprite {

    [Embed(source='../js/out/main.js', mimeType='application/octet-stream')]
    private static const JSSRC:Class;

    private var _dotgen:DotGen;

    public function YoruPane() {
        _dotgen = new DotGen();
        addChild(_dotgen);
        addEventListener(Event.ENTER_FRAME, _handleEnterFrame);
        addChild(new Stats());
    }

    private function _handleEnterFrame(event:Event):void {
        _dotgen.fill();
    }
}
}
