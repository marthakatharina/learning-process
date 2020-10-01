const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function playGame(storyObj) {
    rl.question(storyObj.q, (answer) => {
        // console.log("storyObj.answers[answer]: ", storyObj.answers[answer]);
        if (storyObj.answers[answer]) {
            if (typeof storyObj.answers[answer] == "object") {
                playGame(storyObj.answers[answer]);
            } else {
                console.log(storyObj.answers[answer]);
                rl.close();
            }
        } else {
            console.log("try again");
            playGame(storyObj);
        }
    });
}

playGame(story);
