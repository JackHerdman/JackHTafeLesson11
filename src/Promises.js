//synchronous code runs line by line
//asynchronous runs out of order

// a Promise says i will give you a result later, either with await or with .then()

function wait(waitTime) {
    return new Promise((resolve, reject) => {
        if (isNaN(waitTime)) {
            reject(new Error("Wait Time must be a number"));
        } else {
            setTimeout(() => {
                resolve(`You have waited ${waitTime / 1000} seconds`);
            }, waitTime)
        }
    });
}
wait(3000).then(response => {
    console.log(response);
}).catch(err => {
    console.log("There was an error");
    console.log(err.message);
});

async function Program() {
    let myResult = await wait(6000);
    console.log(myResult);
}

//an ASYNC function is automatically a promise and will automatically wait with await

async function asyncWait(waitTime) {
    if (isNaN(waitTime)) {
        throw new Error("not a number")
    } else {
        return await new Promise(resolve => setTimeout(() => resolve(`You have waited ${waitTime} milliseconds`), waitTime));
    }
}



const axios = require("axios");
const { weatherApiKey } = require("../config/Keys")

async function getTheWeather(city) {
   return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`)
}

async function Program(){
    let sydneyWeather = await getTheWeather("Sydney");
    console.log(sydneyWeather.data.main.temp - 273.1);
}

Program().then(() => {
    process.exit(0);
});