import {
createStudents
}
from "./student.js";import {
createPlayer,
setupPlayerControls,
updatePlayer,
enablePlayer
}
from "./player.js";import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";

export const Game = {

    scene: null,
    camera: null,
    renderer: null,

    clock: null,

    started: false
};

function createRenderer(){

    Game.renderer = new THREE.WebGLRenderer({
        antialias:true
    });

    Game.renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    Game.renderer.shadowMap.enabled = true;

    document.body.appendChild(
        Game.renderer.domElement
    );
}

function createScene(){

    Game.scene = new THREE.Scene();

    Game.scene.background =
        new THREE.Color(0xaad4ff);
}

function createCamera(){

    Game.camera =
        new THREE.PerspectiveCamera(
            75,
            window.innerWidth /
            window.innerHeight,
            0.1,
            1000
        );

    Game.camera.position.set(
        0,
        2,
        8
    );
}

function createLights(){

    const ambient =
        new THREE.AmbientLight(
            0xffffff,
            0.7
        );

    Game.scene.add(
        ambient
    );

    const sun =
        new THREE.DirectionalLight(
            0xffffff,
            1
        );

    sun.position.set(
        20,
        30,
        20
    );

    sun.castShadow = true;

    Game.scene.add(
        sun
    );
}

function createGround(){

    const ground =
        new THREE.Mesh(

            new THREE.PlaneGeometry(
                200,
                200
            ),

            new THREE.MeshStandardMaterial({
                color:0xbfbfbf
            })
        );

    ground.rotation.x =
        -Math.PI / 2;

    ground.receiveShadow = true;

    Game.scene.add(
        ground
    );
}

function resize(){

    Game.camera.aspect =
        window.innerWidth /
        window.innerHeight;

    Game.camera.updateProjectionMatrix();

    Game.renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
}

function animate(){

    requestAnimationFrame(
        animate
    );

    const delta =
        Game.clock.getDelta();

    updatePlayer(
        delta
    );

    Game.renderer.render(
        Game.scene,
        Game.camera
    );
}{

    requestAnimationFrame(
        animate
    );

    const delta =
        Game.clock.getDelta();

    updatePlayer(
        delta
    );

    Game.renderer.render(
        Game.scene,
        Game.camera
    );
}){

    requestAnimationFrame(
        animate
    );

    Game.renderer.render(
        Game.scene,
        Game.camera
    );
}

function startGame(enablePlayer();){

    if(Game.started)
        return;

    Game.started = true;

    document
    .getElementById(
        "loadingScreen"
    )
    .style.display = "none";

    document.body.requestPointerLock();

    animate();
}

function setupUI(){

    document
    .getElementById(
        "startButton"
    )
    .addEventListener(
        "click",
        startGame
    );
}

function init(createPlayer();
createStudents();

setupPlayerControls();){

    createRenderer();

    createScene();

    createCamera();

    createLights();

    createGround();

    setupUI();

    window.addEventListener(
        "resize",
        resize
    );

    Game.clock =
        new THREE.Clock();
}

init();