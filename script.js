function OpeningCeremony() {
    console.log("Let the games begin");

    const score = { red: 0, blue: 0, green: 0, yellow: 0 };

    setTimeout(() => {
        Race100M(score, (newScore) => {
            console.log("Race100M completed, new score:", newScore);

            HighJump(newScore, (newScore) => {
                console.log("HighJump completed, new score:", newScore);
                AwardCeremony(newScore);
            });
        });
    },1000);
}




function Race100M(score, callbackFnc) {
    console.log("Race100M started, score:", score);

    const times = {};
    const colors = Object.keys(score);

    colors.forEach((color) => {
        times[color] = Math.floor(Math.random() * 6 + 10);

    });

    const sortedColors = colors.sort((a, b) => times[a] - times[b]);

    score[sortedColors[0]] += 50;
    score[sortedColors[1]] += 25;

    setTimeout(() => {
        callbackFnc(score);
    }, 3000);
}



function HighJump(score, callbackFnc) {
    console.log("HighJump started, score:", score);

    const colors = Object.keys(score);
    const answer = prompt("Which colour secured the highest jump?");

    if (colors.includes(answer)) {
        score[answer] += 100;
    } else {
        console.log("Wrong colour entered")

    }

    callbackFnc(score);

}

function AwardCeremony(score) {
    console.log("AwardCeremony started, score:", score);

    const colors = Object.keys(score);
    const sortedColors = colors.sort((a, b) => score[b] - score[a]);

    console.log(
        "1st place:",
        sortedColors[0],
        "with",
        score[sortedColors[0]],
        "points"
    );
    console.log(
        "2nd place:",
        sortedColors[1],
        "with",
        score[sortedColors[1]],
        "points"
    );
    console.log(
        "3rd place:",
        sortedColors[2],
        "with",
        score[sortedColors[2]],
        "points"
    );
}

OpeningCeremony();