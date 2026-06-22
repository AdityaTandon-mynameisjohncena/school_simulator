export const PromotionSystem = {

    xp:0,

    reputation:50,

    salary:25000,

    rank:"Assistant Teacher",

    ranks:[

        {
            xp:0,
            name:"Assistant Teacher",
            salary:25000
        },

        {
            xp:100,
            name:"Teacher",
            salary:35000
        },

        {
            xp:300,
            name:"Senior Teacher",
            salary:50000
        },

        {
            xp:700,
            name:"Head Teacher",
            salary:80000
        },

        {
            xp:1500,
            name:"Vice Principal",
            salary:120000
        },

        {
            xp:3000,
            name:"Principal",
            salary:200000
        }
    ]
};

export function addXP(amount){

    PromotionSystem.xp += amount;

    updateRank();

    updatePromotionUI();
}

export function addReputation(amount){

    PromotionSystem.reputation += amount;

    PromotionSystem.reputation =

        Math.max(
            0,
            Math.min(
                100,
                PromotionSystem.reputation
            )
        );

    updatePromotionUI();
}

function updateRank(){

    let bestRank =

        PromotionSystem.ranks[0];

    PromotionSystem.ranks
    .forEach(rank=>{

        if(
            PromotionSystem.xp >=
            rank.xp
        ){

            bestRank = rank;
        }
    });

    PromotionSystem.rank =
        bestRank.name;

    PromotionSystem.salary =
        bestRank.salary;
}

export function updatePromotionUI(){

    const xpElement =
        document.getElementById(
            "xp"
        );

    const reputationElement =
        document.getElementById(
            "reputation"
        );

    const salaryElement =
        document.getElementById(
            "salary"
        );

    const rankElement =
        document.getElementById(
            "rank"
        );

    if(
        xpElement
    ){
        xpElement.textContent =
            PromotionSystem.xp;
    }

    if(
        reputationElement
    ){
        reputationElement.textContent =
            Math.floor(
                PromotionSystem.reputation
            );
    }

    if(
        salaryElement
    ){
        salaryElement.textContent =
            PromotionSystem.salary;
    }

    if(
        rankElement
    ){
        rankElement.textContent =
            PromotionSystem.rank;
    }
}

export function initializePromotions(){

    updatePromotionUI();
}