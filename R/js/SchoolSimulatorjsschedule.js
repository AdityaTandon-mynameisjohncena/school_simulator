export const ScheduleSystem = {

    currentPeriod:0,

    periods:[

        "Mathematics",
        "Science",
        "English",
        "History",
        "Break",
        "Geography",
        "Computer",
        "Sports"
    ]
};

export function initializeSchedule(){

    updateScheduleUI();
}

export function nextPeriod(){

    ScheduleSystem.currentPeriod++;

    if(
        ScheduleSystem.currentPeriod >=
        ScheduleSystem.periods.length
    ){

        ScheduleSystem.currentPeriod = 0;
    }

    updateScheduleUI();
}

export function getCurrentPeriod(){

    return ScheduleSystem.periods[
        ScheduleSystem.currentPeriod
    ];
}

function updateScheduleUI(){

    let periodElement =

        document.getElementById(
            "currentPeriod"
        );

    if(
        !periodElement
    ){

        periodElement =
            document.createElement(
                "div"
            );

        periodElement.id =
            "currentPeriod";

        periodElement.style.position =
            "fixed";

        periodElement.style.top =
            "10px";

        periodElement.style.left =
            "260px";

        periodElement.style.padding =
            "10px";

        periodElement.style.background =
            "rgba(0,0,0,0.75)";

        periodElement.style.color =
            "white";

        periodElement.style.borderRadius =
            "8px";

        periodElement.style.zIndex =
            "999";

        document.body.appendChild(
            periodElement
        );
    }

    periodElement.innerHTML =

        "Period: " +
        getCurrentPeriod();
}