import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";
import { Game } from "./main.js";

export const Player = {

    object: null,

    yaw: 0,
    pitch: 0,

    speed: 6,

    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,

    enabled: false
};

export function createPlayer(){

    Player.object = new THREE.Object3D();

    Player.object.position.set(
        0,
        2,
        8
    );

    Game.scene.add(
        Player.object
    );

    Player.object.add(
        Game.camera
    );

    Game.camera.position.set(
        0,
        0,
        0
    );
}

function onMouseMove(event){

    if(
        !Player.enabled ||
        document.pointerLockElement !== document.body
    ){
        return;
    }

    const sensitivity = 0.002;

    Player.yaw -=
        event.movementX *
        sensitivity;

    Player.pitch -=
        event.movementY *
        sensitivity;

    const limit =
        Math.PI / 2 - 0.05;

    Player.pitch =
        Math.max(
            -limit,
            Math.min(
                limit,
                Player.pitch
            )
        );

    Player.object.rotation.y =
        Player.yaw;

    Game.camera.rotation.x =
        Player.pitch;
}

function onKeyDown(event){

    switch(
        event.code
    ){

        case "KeyW":
            Player.moveForward = true;
            break;

        case "KeyS":
            Player.moveBackward = true;
            break;

        case "KeyA":
            Player.moveLeft = true;
            break;

        case "KeyD":
            Player.moveRight = true;
            break;
    }
}

function onKeyUp(event){

    switch(
        event.code
    ){

        case "KeyW":
            Player.moveForward = false;
            break;

        case "KeyS":
            Player.moveBackward = false;
            break;

        case "KeyA":
            Player.moveLeft = false;
            break;

        case "KeyD":
            Player.moveRight = false;
            break;
    }
}

export function updatePlayer(delta){

    if(!Player.enabled)
        return;

    const moveSpeed =
        Player.speed *
        delta;

    const forward =
        new THREE.Vector3();

    Player.object.getWorldDirection(
        forward
    );

    forward.y = 0;
    forward.normalize();

    const right =
        new THREE.Vector3();

    right.crossVectors(
        forward,
        new THREE.Vector3(
            0,
            1,
            0
        )
    );

    if(
        Player.moveForward
    ){
        Player.object.position.add(
            forward
            .clone()
            .multiplyScalar(
                moveSpeed
            )
        );
    }

    if(
        Player.moveBackward
    ){
        Player.object.position.add(
            forward
            .clone()
            .multiplyScalar(
                -moveSpeed
            )
        );
    }

    if(
        Player.moveLeft
    ){
        Player.object.position.add(
            right
            .clone()
            .multiplyScalar(
                moveSpeed
            )
        );
    }

    if(
        Player.moveRight
    ){
        Player.object.position.add(
            right
            .clone()
            .multiplyScalar(
                -moveSpeed
            )
        );
    }
}

export function enablePlayer(){

    Player.enabled = true;

    document.body.requestPointerLock();
}

export function setupPlayerControls(){

    document.addEventListener(
        "mousemove",
        onMouseMove
    );

    document.addEventListener(
        "keydown",
        onKeyDown
    );

    document.addEventListener(
        "keyup",
        onKeyUp
    );
}