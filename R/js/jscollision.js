import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";
import { Classroom } from "./classroom.js";

export const CollisionSystem = {

    boxes: []
};

export function buildCollisionBoxes(){

    CollisionSystem.boxes = [];

    Classroom.objects.forEach(obj => {

        const box =
            new THREE.Box3()
            .setFromObject(obj);

        CollisionSystem.boxes.push({
            object: obj,
            box: box
        });
    });
}

export function canMoveTo(position){

    const playerBox =
        new THREE.Box3(
            new THREE.Vector3(
                position.x - 0.4,
                position.y - 1.8,
                position.z - 0.4
            ),

            new THREE.Vector3(
                position.x + 0.4,
                position.y + 0.2,
                position.z + 0.4
            )
        );

    for(
        let i=0;
        i<CollisionSystem.boxes.length;
        i++
    ){

        if(
            playerBox.intersectsBox(
                CollisionSystem.boxes[i].box
            )
        ){
            return false;
        }
    }

    return true;
}