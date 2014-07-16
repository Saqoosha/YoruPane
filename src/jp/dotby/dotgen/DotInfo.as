/**
 * Created by Saqoosha on 2014/07/16.
 */
package jp.dotby.dotgen {

import com.strix.collision.Agent;
import com.strix.collision.Mask;

public class DotInfo extends Agent {

    public function DotInfo(id:uint, x:Number, y:Number, r:Number, color:uint) {
        super(id, Mask.ALL, x, y, r);

        this.color = color;
    }

    public var color:uint;

    public function get r():Number {
        return rx;
    }
}
}
