//1. Make a postman call that uses the 5-day forecast from OWM (hint: use the documentation here - https://openweathermap.org/forecast5)
//DONE

const readline = require('readline');
const axios = require("axios");
const { weatherApiKey } = require("../../config/Keys")

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
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`)
    let focusedResponse = response.data.list
    // console.log(focusedResponse);
    class Forecast {
        constructor( city, maxTemperature, date) {
            this.city = city
                this.maxTemperature = maxTemperature,
                this.date = date
        };
    }
    let forecast = []
    for (i = 0; i < focusedResponse.length; i = i + 8) {
        let forecastWeather = new Forecast(city,
            focusedResponse[i].main.temp_max-273.15,
            focusedResponse[i].dt_txt,
        );
        forecast.push(forecastWeather);
    }
    console.table(forecast)
}



Program().then(() => {
    process.exit(0);
});

//2. Create a function that takes an argument that is a string representing a City and returns the OWN forecast5 result for that city.

//3. Make a console app that asks the user to enter a city and returns the 5 day forecast for that city. Make sure the temperature is in degrees celsius (Hint: don't log everything, try to keep it to the most relevant data).