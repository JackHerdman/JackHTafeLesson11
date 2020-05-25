//Make a dereferenced copy of the array below. (Hint: You will need to dereference each object in the array, not just the array itself)
let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
let newPeople = myPeople.map(person => ({ ...person }));

//1. Make a postman call that uses the 5-day forecast from OWM (hint: use the documentation here - https://openweathermap.org/forecast5)
//2. Create a function that takes an argument that is a string representing a City and returns the OWN forecast5 result for that city.
//3. Make a console app that asks the user to enter a city and returns the 5 day forecast for that city. Make sure the temperature is in degrees celsius (Hint: don't log everything, try to keep it to the most relevant data).