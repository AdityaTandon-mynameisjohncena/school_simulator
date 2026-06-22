import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";

import { Game } from "./main.js";

import {
Students,
standStudent,
sitStudent
}
from "./student.js";

export const Interaction = {

    raycaster:
        new THREE.Raycaster(),

    targetStudent:null
};

function findTargetStudent(){

    Interaction.raycaster
    .setFromCamera(

        new THREE.Vector2(
            0,
            0
        ),

        Game.camera
    );

    let bestStudent =
        null;

    let bestDistance =
        Infinity;

    Students.forEach(student=>{

        const intersects =

            Interaction.raycaster
            .intersectObject(
                student.mesh,
                true
            );

        if(
            intersects.length > 0
        ){

            const distance =

                intersects[0]
                .distance;

            if(
                distance <
                bestDistance
            ){

                bestDistance =
                    distance;

                bestStudent =
                    student;
            }
        }
    });

    Interaction.targetStudent =
        bestStudent;
}

function setupKeyboard(){

    document.addEventListener(
        "keydown",
        event=>{

            if(
                !Interaction
                .targetStudent
            ){
                return;
            }

            if(
                event.code ===
                "Space"
            ){

                standStudent(
                    Interaction
                    .targetStudent
                );
            }
        }
    );
}

function setupMouse(){

    document.addEventListener(
        "mousedown",
        event=>{

            if(
                event.button !== 0
            ){
                return;
            }

            if(
                !Interaction
                .targetStudent
            ){
                return;
            }

            sitStudent(
                Interaction
                .targetStudent
            );
        }
    );
}

export function initializeInteraction(){

    setupKeyboard();

    setupMouse();
}

export function updateInteraction(){

    findTargetStudent();

    Students.forEach(student=>{

        const meshes =
            student.mesh.children;

        meshes.forEach(mesh=>{

            if(
                mesh.material
            ){

                mesh.material
                .emissive?.setHex(
                    0x000000
                );
            }
        });
    });

    if(
        !Interaction.targetStudent
    ){
        return;
    }

    Interaction
    .targetStudent
    .mesh
    .traverse(obj=>{

        if(
            obj.material &&
            obj.material.emissive
        ){

            obj.material
            .emissive
            .setHex(
                0x222222
            );
        }
    });
}