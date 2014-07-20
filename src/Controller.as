/**
 * Created by Saqoosha on 2014/07/15.
 */
package {
import com.adobe.images.PNGEncoder;
import com.greensock.plugins.ColorTransformPlugin;
import com.greensock.plugins.TweenPlugin;

import flash.display.BitmapData;
import flash.display.Graphics;
import flash.display.Shape;

import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.external.ExternalInterface;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.net.FileReference;
import flash.system.Capabilities;
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

    private var _interval:int;
    private var _radius:int;
    private var _color:uint;
    private var _rotation:int;
    private var _shear:int;
    private var _bgcolor:uint;

    public function Controller() {
        Hoge.install();

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
    }

    private function _handleClick(event:MouseEvent):void {
//        if (ExternalInterface.available) {
//            ExternalInterface.call('function(){' +
//                    'document.body.webkitRequestFullscreen();' +
//                    '}');
//        }

        var size:Rectangle;
        switch (event.target.name) {
            case 'dlpc':
                size = new Rectangle(0, 0, Capabilities.screenResolutionX, Capabilities.screenResolutionY);
                break;
            case 'dlip':
                size = new Rectangle(0, 0, 744, 1392);
                break;
            case 'dlad':
                size = new Rectangle(0, 0, 1440, 1280);
                break;

            default:
                return;
        }
        var img:BitmapData = new BitmapData(size.width, size.height, false, _bgcolor);
        var info:Vector.<DotInfo> = Generator.generate(new Point(size.width / 2, size.height / 2), size, _radius, _color, _interval, _rotation, _shear);
        var s:Shape = new Shape();
        var g:Graphics = s.graphics;
        g.clear();
        for each (var d:DotInfo in info) {
            g.beginFill(d.color);
            g.drawCircle(d.x, d.y, d.r);
            g.endFill();
        }
        img.draw(s);
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
        _interval = Math.max(area.width, area.height) / range(10, 20);
        _radius = Math.max(5, _interval * 0.5 * range(0.1, 0.9));
        _color = Math.random() * 0xffffff;
        _rotation = Math.floor(Math.random() * 18) * 5;
        _shear = Math.floor(Math.random() * 4) * 15;
        var info:Vector.<DotInfo> = Generator.generate(origin, area, _radius, _color, _interval, _rotation, _shear);
        var delay:Number = _animator.transition(info, colorTint(_color, 0xffffff, 0.75));

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
