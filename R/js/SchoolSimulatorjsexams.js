import { Students } from "./student.js";

import {
addXP,
addReputation
}
from "./promotions.js";

export const ExamSystem = {

    examDay:5,

    lastExamDay:0
};

export function initializeExams(){

    console.log(
        "Exam system loaded"
    );
}

export function runExam(day){

    if(
        day ===
        ExamSystem.lastExamDay
    ){
        return;
    }

    ExamSystem.lastExamDay =
        day;

    let classTotal = 0;

    Students.forEach(student=>{

        const score =

            Math.floor(

                student.grade +

                (
                    student.understanding *
                    0.5
                )

            );

        student.examScore =
            Math.min(
                score,
                100
            );

        classTotal +=
            student.examScore;
    });

    const average =

        classTotal /
        Students.length;

    console.log(
        "Class Average:",
        average
    );

    if(
        average >= 70
    ){

        addXP(100);

        addReputation(5);

        alert(
            "Excellent exam results! +100 XP"
        );
    }

    else if(
        average >= 50
    ){

        addXP(50);

        addReputation(2);

        alert(
            "Average exam results."
        );
    }

    else{

        addReputation(-5);

        alert(
            "Poor exam results."
        );
    }
}