import {Actor, Color, Vector, Keys, CollisionType  } from 'excalibur'
import {Resources} from "../resources.js";

export class Background_Morning extends Actor {
    constructor(){
        super({
            pos: new Vector(400, 300),
            width : 1000,
            height : 1000,
            body: CollisionType.PreventCollision,

        })
        this.z = -1
                }

                onInitialize() {
                    const backgroundMorning = Resources.Background_Morning.toSprite()
                    this.graphics.use(backgroundMorning)
                }
}