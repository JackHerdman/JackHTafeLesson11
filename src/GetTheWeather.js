const readline = require('readline');
const axios = require("axios");
const { weatherApiKey } = require("../config/Keys")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Goes Here...
    let city = await askQuestion("Which City do you want the current weather for: ");
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`)
    console.log(response.data)
    console.log(`the Maximum temperature in ${response.data.name} is ${response.data.main.temp_max - 273.15}`)
}


Program().then(() => {
    process.exit(0);
});
