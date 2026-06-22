import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";
import { Game } from "./main.js";

export const Classroom = {
    objects: []
};

function addObject(mesh){

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    Game.scene.add(mesh);

    Classroom.objects.push(mesh);
}

function createWall(x,y,z,w,h,d,color=0xe8e8e8){

    const wall = new THREE.Mesh(

        new THREE.BoxGeometry(
            w,h,d
        ),

        new THREE.MeshStandardMaterial({
            color
        })

    );

    wall.position.set(
        x,y,z
    );

    addObject(wall);
}

function createDesk(x,y,z){

    const desk = new THREE.Mesh(

        new THREE.BoxGeometry(
            2,
            1,
            1.2
        ),

        new THREE.MeshStandardMaterial({
            color:0x8b5a2b
        })

    );

    desk.position.set(
        x,y,z
    );

    addObject(desk);
}

export function createClassroom(){

    createWall(
        0,
        3,
        -15,
        30,
        6,
        1
    );

    createWall(
        0,
        3,
        15,
        30,
        6,
        1
    );

    createWall(
        -15,
        3,
        0,
        1,
        6,
        30
    );

    createWall(
        15,
        3,
        0,
        1,
        6,
        30
    );

    const ceiling =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                30,
                1,
                30
            ),

            new THREE.MeshStandardMaterial({
                color:0xffffff
            })
        );

    ceiling.position.set(
        0,
        6.5,
        0
    );

    addObject(
        ceiling
    );

    const board =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                8,
                3,
                0.2
            ),

            new THREE.MeshStandardMaterial({
                color:0x222222
            })
        );

    board.position.set(
        0,
        3,
        -14.4
    );

    board.name =
        "blackboard";

    addObject(
        board
    );

    const teacherDesk =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                4,
                1.5,
                2
            ),

            new THREE.MeshStandardMaterial({
                color:0x704214
            })
        );

    teacherDesk.position.set(
        0,
        0.75,
        -10
    );

    addObject(
        teacherDesk
    );

    for(
        let row=0;
        row<4;
        row++
    ){

        for(
            let col=0;
            col<5;
            col++
        ){

            createDesk(

                -8 + col*4,

                0.5,

                -3 + row*4

            );
        }
    }

    for(
        let i=0;
        i<4;
        i++
    ){

        const windowMesh =
            new THREE.Mesh(

                new THREE.BoxGeometry(
                    3,
                    2,
                    0.1
                ),

                new THREE.MeshStandardMaterial({
                    color:0x88ccff,
                    transparent:true,
                    opacity:0.7
                })
            );

        windowMesh.position.set(
            -14.4,
            3,
            -10 + i*6
        );

        addObject(
            windowMesh
        );
    }

    const door =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                2,
                4,
                0.2
            ),

            new THREE.MeshStandardMaterial({
                color:0x5a3b1f
            })
        );

    door.position.set(
        13.8,
        2,
        10
    );

    addObject(
        door
    );
}