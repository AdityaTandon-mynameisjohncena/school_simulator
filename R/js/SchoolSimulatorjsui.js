import { Students } from "./student.js";

export const UISystem = {

    panel:null,

    initialized:false
};

export function initializeUI(){

    if(
        UISystem.initialized
    ){
        return;
    }

    UISystem.initialized = true;

    const panel =
        document.createElement(
            "div"
        );

    panel.id =
        "studentInfoPanel";

    panel.style.position =
        "fixed";

    panel.style.right =
        "10px";

    panel.style.top =
        "10px";

    panel.style.width =
        "250px";

    panel.style.background =
        "rgba(0,0,0,0.75)";

    panel.style.color =
        "white";

    panel.style.padding =
        "12px";

    panel.style.borderRadius =
        "8px";

    panel.style.fontFamily =
        "Arial";

    panel.style.zIndex =
        "999";

    panel.innerHTML =
        "Look at a student";

    document.body.appendChild(
        panel
    );

    UISystem.panel =
        panel;
}

export function updateStudentPanel(student){

    if(
        !UISystem.panel
    ){
        return;
    }

    if(
        !student
    ){

        UISystem.panel.innerHTML =
            "Look at a student";

        return;
    }

    UISystem.panel.innerHTML =

        `
        <b>${student.name}</b>
        <hr>
        Grade: ${Math.floor(student.grade)}
        <br>
        Understanding: ${Math.floor(student.understanding)}
        <br>
        Attention: ${Math.floor(student.attention)}
        <br>
        Personality: ${student.personality}
        <br>
        Status:
        ${
            student.seated
            ?
            "Seated"
            :
            "Standing"
        }
        `;
}