import { Students } from "./student.js";

export const StudentAI = {

    questions: [

        {
            question:"What is 2 + 2?",
            answer:"4"
        },

        {
            question:"What is 5 x 5?",
            answer:"25"
        },

        {
            question:"What is gravity?",
            answer:"gravity"
        },

        {
            question:"What is photosynthesis?",
            answer:"photosynthesis"
        },

        {
            question:"What is a noun?",
            answer:"noun"
        },

        {
            question:"What planet do we live on?",
            answer:"earth"
        }

    ],

    personalities:[
        "Hardworking",
        "Talkative",
        "Quiet",
        "Sleepy",
        "Curious"
    ],

    blackboardText:""
};

export function initializeStudentAI(){

    Students.forEach(student=>{

        student.personality =

            StudentAI.personalities[
                Math.floor(
                    Math.random() *
                    StudentAI.personalities.length
                )
            ];

        student.question = null;
    });
}

export function updateStudentAI(){

    Students.forEach(student=>{

        if(
            Math.random() < 0.0007
        ){

            const randomQuestion =

                StudentAI.questions[
                    Math.floor(
                        Math.random() *
                        StudentAI.questions.length
                    )
                ];

            student.question =
                randomQuestion;

            console.log(
                student.name +
                " asks: " +
                randomQuestion.question
            );
        }

        if(
            student.personality ===
            "Sleepy"
        ){

            student.attention -=
                0.01;
        }

        if(
            student.personality ===
            "Hardworking"
        ){

            student.attention +=
                0.01;
        }

        student.attention =

            Math.max(
                0,
                Math.min(
                    100,
                    student.attention
                )
            );
    });
}

export function setBlackboardText(text){

    StudentAI.blackboardText =
        text.toLowerCase();

    Students.forEach(student=>{

        if(
            !student.question
        ){
            return;
        }

        const answer =

            student.question.answer
            .toLowerCase();

        if(
            StudentAI.blackboardText
            .includes(answer)
        ){

            student.understanding += 10;

            student.grade += 1;

            student.question = null;

            console.log(
                student.name +
                " understood the lesson."
            );
        }
    });
}