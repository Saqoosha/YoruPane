/**
 * Created by Saqoosha on 2014/07/17.
 */
package {

import flash.display.LoaderInfo;
import flash.display.MovieClip;
import flash.display.SimpleButton;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.external.ExternalInterface;
import flash.net.URLRequest;
import flash.net.navigateToURL;
import flash.system.Capabilities;
import flash.system.Security;
import flash.utils.clearTimeout;
import flash.utils.getDefinitionByName;
import flash.utils.setTimeout;

public class Main extends MovieClip {


    private static const FLASH_PLAYER_VERSION:String = "11.1";


    public function Main() {
        addFrameScript(1, Frame2, 2, Frame3, 3, Frame4);
    }

    private var monclose:Boolean = false;
    private var pressclose:Boolean = false;
    private var DelayTime:Number;
    private var fixedExpandTime:Number;
    private var fixedExpandTimeId:uint = 0;
    private var DelayTimeoutID:uint = 0;
    private var fixed:Boolean = false;
    private var logoX:Number = 0;

    public var openUrlButton:SimpleButton;
    public var closebtn:SimpleButton;
    public var logo:MovieClip;
    public var dotgen:*;


    public function Frame2():void {
        this.stop();

        //書き出しバージョンを指定
        var limitVersion:String = FLASH_PLAYER_VERSION;

        if (limitVersion == "10.0") {
            gotoAndStop("version_ok");
        } else {
            var ver0:String = Capabilities.version.split(" ")[1].split(",")[0];
            var ver1:String = Capabilities.version.split(" ")[1].split(",")[1];

            var num0:int = parseInt(ver0);
            var num1:int = parseInt(ver1);

            var limitMejor:int = limitVersion.split(",")[0];
            var limitMinor:int = limitVersion.split(",")[1];

            if (num0 > limitMejor) {
                gotoAndStop("version_ok");
            } else if (num0 == limitMejor && num1 >= limitMinor) {
                gotoAndStop("version_ok");
            } else {
                gotoAndStop("version_fail");
            }
        }
    }


    public function Frame3():void {
        var paramList0:Object = LoaderInfo(this.root.loaderInfo).parameters;

        openUrlButton.addEventListener(MouseEvent.CLICK, openURL(paramList0["clickTAG"], paramList0["targetTAG"]));

        function openURL(clickTag:String, targetTag:String):Function {
            return function (evtObj:MouseEvent):void {
                if ((clickTag.substr(0, 5) == "http:") || (clickTag.substr(0, 6) == "https:")) {
                    navigateToURL(new URLRequest(clickTag), targetTag);
                }
            }
        }
    }


    public function Frame4():void {
        import flash.events.MouseEvent;

        Security.allowDomain("*");

        if (!(totalFrames <= framesLoaded)) gotoAndPlay(1);

        var paramList:Object = LoaderInfo(this.root.loaderInfo).parameters;

        monclose = false;
        pressclose = false;
        //マウスオンしてエキスパンドするまでのディレイ
        DelayTime = (paramList["DelayTime"] == undefined) ? 500 : paramList["DelayTime"];
        DelayTimeoutID = 0;
        //エキスパンドして固定されるまでの時間
        fixedExpandTime = (paramList["fixedExpandTime"] == undefined) ? 2000 : paramList["fixedExpandTime"];
        fixedExpandTimeId = 0;
        fixed = false;
        ExternalInterface.addCallback("Clipswf", Clipswf);

        //クローズボタン(JSで呼ぶ画像部分)の透過
        closebtn.alpha = 0;

        // ClickTag 用リスナ登録
        logo.addEventListener(MouseEvent.CLICK, openURL2(paramList["clickTAG"], paramList["targetTAG"]));

        var clazz:Class = getDefinitionByName('Controller') as Class;
        dotgen = new clazz();
        addChild(dotgen);
        // ロールオーバー（エキスパンド）用のリスナ登録
        dotgen.addEventListener(MouseEvent.ROLL_OVER, RollOverListener);
        // ロールアウト（エキスパンドクローズ）用のリスナ登録
        dotgen.addEventListener(MouseEvent.ROLL_OUT, RollOutListener);

        Init();
        stop();
    }


    //エキスパンドじゃない状態の初期化
    private function Init():void {
        this.closebtn.visible = false; //closebtn消し
        logoX = logo.x;
    }

    private function DelayTask():void {
        DelayTimeoutID = setTimeout(Expandswf, DelayTime);
    }

    private function fixedExpand():void {
        fixed = true;
        ExternalInterface.call("fixedExpand_js");
    }


    /**
     * エキスパンドを閉じる
     * @param from "CloseButton"(閉じるボタン) OR　"Clip"（マウスオフ）
     */
    private function Clipswf(from:String):void {
        (fixedExpandTimeId != 0) ? clearTimeout(fixedExpandTimeId) : 0;
        if (pressclose) pressclose = false;
        if (fixed) fixed = false;
        dotgen.close();
        this.closebtn.visible = false; //ボタンも消す　巻き戻しはエキスパンドの時にやっている
        logo.x = logoX
        ExternalInterface.call("ClipRectSpecify", from);
    }


    /**
     * エキスパンドを開く
     *
     */
    private function Expandswf():void {
        if (fixed) return;
        dotgen.open();
        this.closebtn.visible = true; //closebtnの表示
        logo.x = 14.4;
        fixedExpandTimeId = setTimeout(fixedExpand, fixedExpandTime);
        // clicktagアクションend

        ExternalInterface.call("ClipRectAuto", "Expand");
    }


    /** クリックタグ用EventHandler */
    private function openURL2(clickTag:String, targetTag:String):Function {
        return function (evtObj:MouseEvent):void {
            if (((clickTag.substr(0, 5) == "http:") || (clickTag.substr(0, 6) == "https:"))) {
                navigateToURL(new URLRequest(clickTag), targetTag);
            }
        }
    }


    /** ロールオーバー（エキスパンド）用のイベントハンドラ */
    private function RollOverListener(mevt:MouseEvent):void {
        var margin:int = 0;

        if (((root.mouseX >= (closebtn.x + margin) && root.mouseX <= ((closebtn.x + closebtn.width) - margin) ) &&
                (root.mouseY >= (closebtn.y + margin) && root.mouseY <= ((closebtn.y + closebtn.height) - margin)))) {
            monclose = true;
        } else {
            if (monclose) {
                monclose = false;
            } else {
                DelayTask();
            }
        }
    }


    /** ロールアウト（エキスパンドクローズ）用のイベントハンドラ */
    private function RollOutListener(mevt:MouseEvent):void {
        var margin:int = 1;

        if (((root.mouseX >= (closebtn.x - margin) && root.mouseX <= ((closebtn.x + closebtn.width) + margin)  ) &&
                (root.mouseY >= (closebtn.y) && root.mouseY <= ((closebtn.y + closebtn.height) + margin) ))) {
            monclose = true;
        }
        else {
            monclose = false;
            (DelayTimeoutID != 0) ? clearTimeout(DelayTimeoutID) : 0;
            setTimeout(function ():void {
                if (pressclose) {
                    return;
                } else {
                    if (!fixed) {
                        Clipswf("Clip");
                    }
                }
            }, 10);
        }
    }
}
}
