import { PromotionSystem } from "./promotions.js";
import { Students } from "./student.js";

export const SaveSystem = {};

export function saveGame(day){

    const saveData = {

        day:day,

        xp:
            PromotionSystem.xp,

        reputation:
            PromotionSystem.reputation,

        salary:
            PromotionSystem.salary,

        rank:
            PromotionSystem.rank,

        students:

            Students.map(
                student=>({

                    name:
                        student.name,

                    grade:
                        student.grade,

                    understanding:
                        student.understanding,

                    attention:
                        student.attention
                })
            )
    };

    localStorage.setItem(
        "schoolSimulatorSave",
        JSON.stringify(
            saveData
        )
    );

    console.log(
        "Game Saved"
    );
}

export function loadGame(){

    const rawData =

        localStorage.getItem(
            "schoolSimulatorSave"
        );

    if(
        !rawData
    ){
        return null;
    }

    try{

        return JSON.parse(
            rawData
        );
    }

    catch(error){

        console.error(
            error
        );

        return null;
    }
}