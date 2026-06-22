import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";
import { Game } from "./main.js";

export const Students = [];

const FIRST_NAMES = [
    "Alex",
    "Sam",
    "Aarav",
    "Priya",
    "Rohan",
    "Mia",
    "Kabir",
    "Emma",
    "Noah",
    "Anaya",
    "Vihaan",
    "Ryan"
];

function randomName(){

    return FIRST_NAMES[
        Math.floor(
            Math.random() *
            FIRST_NAMES.length
        )
    ];
}

function createEye(x){

    const eye =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                0.08,
                0.08,
                0.02
            ),

            new THREE.MeshStandardMaterial({
                color:0x000000
            })
        );

    eye.position.set(
        x,
        0.05,
        0.26
    );

    return eye;
}

function createStudentMesh(){

    const group =
        new THREE.Group();

    const shirtColor =
        new THREE.Color(
            Math.random(),
            Math.random(),
            Math.random()
        );

    const body =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                0.6,
                0.8,
                0.3
            ),

            new THREE.MeshStandardMaterial({
                color:shirtColor
            })
        );

    body.position.y =
        0.9;

    group.add(body);

    const head =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                0.45,
                0.45,
                0.45
            ),

            new THREE.MeshStandardMaterial({
                color:0xffd7b5
            })
        );

    head.position.y =
        1.55;

    head.add(
        createEye(-0.1)
    );

    head.add(
        createEye(0.1)
    );

    group.add(head);

    const leftLeg =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                0.18,
                0.7,
                0.18
            ),

            new THREE.MeshStandardMaterial({
                color:0x222244
            })
        );

    leftLeg.position.set(
        -0.12,
        0.35,
        0
    );

    group.add(
        leftLeg
    );

    const rightLeg =
        leftLeg.clone();

    rightLeg.position.x =
        0.12;

    group.add(
        rightLeg
    );

    return group;
}

export function createStudents(){

    let studentIndex = 0;

    for(
        let row = 0;
        row < 4;
        row++
    ){

        for(
            let col = 0;
            col < 5;
            col++
        ){

            const mesh =
                createStudentMesh();

            const x =
                -8 + col * 4;

            const z =
                -3 + row * 4;

            mesh.position.set(
                x,
                0,
                z
            );

            Game.scene.add(
                mesh
            );

            Students.push({

                id:
                    studentIndex++,

                name:
                    randomName(),

                mesh,

                seated:true,

                understanding:0,

                grade:50,

                attention:100,

                question:null
            });
        }
    }

    console.log(
        "Students created:",
        Students.length
    );
}

export function standStudent(student){

    if(!student)
        return;

    student.seated = false;

    student.mesh.position.y =
        0;
}

export function sitStudent(student){

    if(!student)
        return;

    student.seated = true;

    student.mesh.position.y =
        -0.35;
}