import { Students } from "./student.js";

import {
addReputation,
addXP
}
from "./promotions.js";

export const ParentSystem = {

    lastMeetingDay:0
};

export function initializeParents(){

    console.log(
        "Parent system loaded"
    );
}

export function runParentMeeting(day){

    if(
        ParentSystem.lastMeetingDay === day
    ){
        return;
    }

    ParentSystem.lastMeetingDay =
        day;

    let happyParents = 0;

    let unhappyParents = 0;

    Students.forEach(student=>{

        const score =

            (
                student.grade +
                student.understanding
            ) / 2;

        if(
            score >= 60
        ){

            happyParents++;

        }else{

            unhappyParents++;
        }
    });

    if(
        happyParents >
        unhappyParents
    ){

        addXP(50);

        addReputation(3);

        alert(
            "Parent Meeting Success! Parents are happy."
        );
    }

    else{

        addReputation(-3);

        alert(
            "Parents are unhappy with class performance."
        );
    }
}