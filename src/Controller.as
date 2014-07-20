/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import com.adobe.images.PNGEncoder;
import com.greensock.plugins.ColorTransformPlugin;
import com.greensock.plugins.TweenPlugin;

import flash.display.BitmapData;

import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.external.ExternalInterface;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.net.FileReference;
import flash.utils.ByteArray;
import flash.utils.setTimeout;

import jp.dotby.dotgen.Animator;
import jp.dotby.dotgen.DotInfo;
import jp.dotby.dotgen.Generator;

public class Controller extends Sprite {


    public var dlpc:Sprite;
    public var dlip:Sprite;
    public var dlad:Sprite;

    private var _opening:Boolean = false;
    private var _animator:Animator;
    private var _bgcolor:uint;


    public function Controller() {
        Hoge.install();

        TweenPlugin.activate([ColorTransformPlugin]);

        addEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);

        _animator = new Animator();
        _animator.x = 600;
        _animator.scaleX = _animator.scaleY = 0.4;
        addChildAt(_animator, 0);

        addEventListener(MouseEvent.CLICK, _handleClick);
        dlpc.mouseChildren = false;
        dlpc.addEventListener(MouseEvent.CLICK, _handleClick);
        dlip.mouseChildren = false;
        dlip.addEventListener(MouseEvent.CLICK, _handleClick);
        dlad.mouseChildren = false;
        dlad.addEventListener(MouseEvent.CLICK, _handleClick);
    }

    private function _handleClick(event:MouseEvent):void {
//        if (ExternalInterface.available) {
//            ExternalInterface.call('function(){' +
////                    'document.getElementsByClassName("aas")[0].webkitRequestFullscreen();' +
//                    'document.body.webkitRequestFullscreen();' +
//                    '}');
//        }

        var img:BitmapData = new BitmapData(950, 600, false, _bgcolor);
        img.draw(_animator);
        var png:ByteArray = PNGEncoder.encode(img);
        new FileReference().save(png, 'dot.png');
    }

    public function open():void {
        _opening = true;
        _animator.x = 0;
        _animator.scaleX = _animator.scaleY = 1.0;
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){' +
                    'window.dotgen.show();' +
                    '}');
        }
    }


    public function close():void {
        _opening = false;
        _animator.x = 600;
        _animator.scaleX = _animator.scaleY = 0.4;
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){' +
                    'window.dotgen.hide();' +
                    '}');
        }
    }


    private function _handleAddedToStage(event:Event):void {
        graphics.beginFill(_bgcolor = 0xffffff);
        graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        graphics.endFill();

        nextDots();
    }


    private function range(low:Number, high:Number):Number {
        return Math.random() * (high - low) + low;
    }


    private function nextDots():void {
        var origin:Point = new Point(~~(stage.stageWidth / 2 + Math.random() * 200), ~~(stage.stageHeight / 2 + Math.random() * 200));
        var area:Rectangle = new Rectangle(0, 0, stage.stageWidth, stage.stageHeight);
        if (ExternalInterface.available) {
            var size:Array = ExternalInterface.call('function(){' +
                    '   return window.dotgen.getInfo();' +
                    '}');
            if (size) {
                area = area.union(new Rectangle(-size[0], -size[1], size[2], size[3]));
            }
        }
        var interval:int = Math.max(area.width, area.height) / range(10, 20);
        var radius:int = Math.max(5, interval * 0.5 * range(0.1, 0.9));
        var color:uint = Math.random() * 0xffffff;
        var rotation:int = Math.floor(Math.random() * 18) * 5;
        var shear:int = Math.floor(Math.random() * 4) * 15;
        var info:Vector.<DotInfo> = Generator.generate(origin, area, radius, color, interval, rotation, shear);
        var delay:Number = _animator.transition(info, colorTint(color, 0xffffff, 0.75));

        _bgcolor = Math.random() * 0xffffff;
        graphics.clear();
        graphics.beginFill(_bgcolor);
        graphics.drawRect(0, 0, 950, 600);
        graphics.endFill();

        ExternalInterface.call('function(data){' +
                '   window.dotgen.update(data)' +
                '}', [{op: 'bg', arg: colorTint(_bgcolor, 0xffffff, 0.75)}]);

        setTimeout(nextDots, (delay + (_opening ? 1 : 1)) * 1000);
    }


    public function colorTint(base:uint, target:uint, ratio:Number):uint {
        var ra:int = base >> 16 & 0xff;
        var ga:int = base >> 8 & 0xff;
        var ba:int = base & 0xff;
        var rb:int = target >> 16 & 0xff;
        var gb:int = target >> 8 & 0xff;
        var bb:int = target & 0xff;
        var p:Number = 1.0 - ratio;
        var r:int = ra * ratio + rb * p;
        var g:int = ga * ratio + gb * p;
        var b:int = ba * ratio + bb * p;
        return r << 16 | g << 8 | b;
    }
}
}
