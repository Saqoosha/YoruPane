/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import com.adobe.images.PNGEncoder;
import com.greensock.plugins.ColorTransformPlugin;
import com.greensock.plugins.TweenPlugin;

import flash.display.BitmapData;

import flash.display.Sprite;
import flash.display.StageDisplayState;
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


    [Embed(source='../js/out/main.js', mimeType='application/octet-stream')]
    private static const JSSRC:Class;


    public var dlpc:Sprite;
    public var dlip:Sprite;
    public var dlad:Sprite;

    private var _animator:Animator;


    public function Controller() {
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){' + new JSSRC() + '}');
        }

        TweenPlugin.activate([ColorTransformPlugin]);

        addEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);

        _animator = new Animator();
        _animator.x = 600;
        _animator.scaleX = _animator.scaleY = 0.4;
        addChildAt(_animator, 0);

//        addEventListener(MouseEvent.CLICK, _handleClick);
        dlpc.mouseChildren = false;
        dlpc.addEventListener(MouseEvent.CLICK, _handleClick);
        dlip.mouseChildren = false;
        dlip.addEventListener(MouseEvent.CLICK, _handleClick);
        dlad.mouseChildren = false;
        dlad.addEventListener(MouseEvent.CLICK, _handleClick);

        nextDots();
    }

    private function _handleClick(event:MouseEvent):void {
//        if (ExternalInterface.available) {
//            ExternalInterface.call('function(){' +
//                    'document.getElementsByClassName("aas")[0].webkitRequestFullscreen();' +
//                    '}');
//        }

        var img:BitmapData = new BitmapData(950, 600, false, 0xffffff);
        img.draw(_animator);
        var png:ByteArray = PNGEncoder.encode(img);
        new FileReference().save(png, 'dot.png');
    }

    public function open():void {
        _animator.x = 0;
        _animator.scaleX = _animator.scaleY = 1.0;
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){' +
                    'window.dotgen.show();' +
                    '}');
        }
    }


    public function close():void {
        _animator.x = 600;
        _animator.scaleX = _animator.scaleY = 0.4;
        if (ExternalInterface.available) {
            ExternalInterface.call('function(){' +
                    'window.dotgen.hide();' +
                    '}');
        }
    }


    private function _handleAddedToStage(event:Event):void {
        graphics.beginFill(0xffffff);
        graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        graphics.endFill();
    }


    private function nextDots():void {
        var origin:Point = new Point(~~(stage.stageWidth / 2 + Math.random() * 200), ~~(stage.stageHeight / 2 + Math.random() * 200));
        var area:Rectangle = new Rectangle(0, 0, stage.stageWidth, stage.stageHeight);
        var radius:int = 5 + Math.random() * 50;
        var color:uint = Math.random() * 0xffffff;
        var interval:int = radius * 2 + 5 + Math.random() * 50;
        if (radius + interval < 30) {
            var s:Number = 30 / (radius + interval) * 2;
            radius *= s;
            interval *= s;
        }
        var rotation:int = Math.floor(Math.random() * 18) * 5;
        var shear:int = Math.floor(Math.random() * 4) * 15;
        var info:Vector.<DotInfo> = Generator.generate(origin, area, radius, color, interval, rotation, shear);
        var delay:Number = _animator.transition(info);

        var bgcolor:uint = Math.random() * 0xffffff;
        graphics.clear();
        graphics.beginFill(bgcolor);
        graphics.drawRect(0, 0, 950, 600);
        graphics.endFill();

        if (ExternalInterface.available) {
            color = colorTint(color, 0xffffff, 0.5);
            bgcolor = colorTint(bgcolor, 0xffffff, 0.5);
            setTimeout(function():void {
                ExternalInterface.call('function(params){' +
                        'window.dotgen.draw(params);' +
                        '}', {
                    origin: {x: origin.x, y: origin.y},
                    radius: radius,
                    color: '#' + ('00000' + color.toString(16)).substr(-6),
                    bgcolor: '#' + ('00000' + bgcolor.toString(16)).substr(-6),
                    interval: interval,
                    rotation: rotation,
                    shear: shear
                });
            }, (delay + 0.5) * 1000);
        }
        setTimeout(nextDots, (delay + 1) * 1000);
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
