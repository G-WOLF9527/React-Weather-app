import React, { useState } from "react";

const api = {
  key: '907c96f1fc2631a57c96b682557e406c',
  url: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
const [call, setCall] = useState('');
const [weather, setWeather] = useState({});

const search = e => {
  if (e.key === "Enter"){
    fetch(`${api.url}weather?q=${call}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setCall('');
    });
  }
}

const currentDate = (d) => {
  let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = m[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

  return (
    <div className="App">
      <main>
        <div className="search">
          <input
          type="text"
          className="searchBar"
          placeholder="Search for a place..."
          onChange={e => setCall(e.target.value)}
          value={call}
          onKeyDown={search}>
          </input>
        </div>
          {(typeof weather.main != "undefined")? (
            <div>
          <div className="locationContainer">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{currentDate(new Date())}</div>
          </div>
          <div className="weather">
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weatherType"><br></br>{weather.weather[0].main}</div>
          </div>
          </div>
          ): ('')}
      </main>
    </div>
  );
}

export default App;
