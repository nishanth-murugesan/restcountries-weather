// Second API- OpenWeather Fetching Temperature By Providing LAtitude & Longitude
async function opendata(lat, lon) {
    try {
        let openweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e204737dbf2596c83fb69ade3183645`);
        let result1 = await openweather.json();
        //weather();
        //console.log(result1);
        alert(`Temperature: ${result1.main.temp}`);
        if (lat === undefined) {
            throw new Error("NO Co-Ordinates Available")
        }
    } catch (error) {
        console.log("Error")
    }

}
// First API - Rest Countries 
async function data1() {
    let result = await fetch("https://restcountries.com/v2/all");
    let data = await result.json();
    //console.log(data);
    var div = document.createElement("div");
    div.setAttribute("class", "container");

    var divr = document.createElement("div");
    divr.setAttribute("class", "row");

    for (var i = 0; i < data.length; i++) {
        var divc1 = document.createElement("div");
        divc1.setAttribute("class", "col-lg-4");
        divc1.innerHTML =
            `<div class="card">
            <div class="card-body">
                <div class="card-header">
                    <h6>${data[i].name}</h6>
                </div><br>
                <img src=${data[i].flags.png} alt="Country Flag" style="width: 180px; height: 150px;"><br>
                <br>
                <p>Capital:${data[i].capital}</p>
                <p>Region:${data[i].region}</p>
                <p>Country Code:${data[i].alpha3Code}</p>
                <button class="btn btn-primary" onclick="opendata(${data[i].latlng[0]},${data[i].latlng[1]})">Click for Weather</button>
            </div>
        </div>`
        div.append(divr);
        divr.append(divc1);
        document.body.append(div);
    }
}
data1();