import { setBlackboardText } from "./studentAI.js";

export const Blackboard = {

    open:false
};

export function initializeBlackboard(){

    const ui =
        document.getElementById(
            "blackboardUI"
        );

    const textBox =
        document.getElementById(
            "boardText"
        );

    const closeButton =
        document.getElementById(
            "closeBoard"
        );

    document.addEventListener(
        "keydown",
        event=>{

            if(
                event.code ===
                "KeyB"
            ){

                toggleBlackboard();
            }
        }
    );

    closeButton.addEventListener(
        "click",
        ()=>{

            Blackboard.open =
                false;

            ui.style.display =
                "none";

            setBlackboardText(
                textBox.value
            );

            if(
                document.body
                .requestPointerLock
            ){

                document.body
                .requestPointerLock();
            }
        }
    );
}

export function toggleBlackboard(){

    const ui =
        document.getElementById(
            "blackboardUI"
        );

    if(
        Blackboard.open
    ){

        Blackboard.open =
            false;

        ui.style.display =
            "none";

        document.body
        .requestPointerLock();

    }else{

        Blackboard.open =
            true;

        ui.style.display =
            "block";

        document.exitPointerLock();
    }
}