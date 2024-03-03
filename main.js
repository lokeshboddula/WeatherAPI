
const button = document.getElementById("search");
const input = document.getElementById("input");


async function getData(locationName) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=92582a7ccede4ea392084505240303&q=${locationName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click", async () => {
    const enteredData = input.value;
    const result = await getData(enteredData);

    var locationData = result.location;
    var currentWeather = result.current;

    //var size = Object.keys(locationData).length;

    for (var prop in locationData) {
        addRow(prop, locationData[prop])
    }

    for (var prop in currentWeather) {
        addRow(prop, currentWeather[prop])
    }

});

function addRow(key, value) {
    let table = document.getElementById("table-body");

    let row = document.createElement("tr")

    let c1 = document.createElement("td")
    let c2 = document.createElement("td")

    c1.innerText = key
    c2.innerText = value

    row.appendChild(c1);
    row.appendChild(c2);

    table.appendChild(row)
}