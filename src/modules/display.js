import getWeatherIconName from "./weatherIcon";
import { convertTo12HourTime, parseDate, parseDay, parseMonth, tempScale } from "./dataProcessing";
import { temperatureScale } from "./inputHandler";

export function displayCurrentConditions(current) {
  const container = document.querySelector(".current-container");
  resetContainer(container);

  //Title
  const title = document.createElement('h3');
  title.textContent = 'Current Conditions';

  //Left Side
  const leftDiv = document.createElement('div');
  leftDiv.classList.add("flex-left");

  const temp = document.createElement('span');
  temp.classList.add("temp");
  temp.textContent = `${tempScale(current.temperature, temperatureScale)}°${temperatureScale}`; //MAKE IT DYNAMIC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const icon = document.createElement('i');
  icon.classList.add("wi", getWeatherIconName(current.icon), "weather-icon");

  leftDiv.appendChild(temp);
  leftDiv.appendChild(icon);

  //Right Side
  const rightDiv = document.createElement('div');
  rightDiv.classList.add("flex-right");

  const conditions = document.createElement('p');
  conditions.classList.add("conditions");
  conditions.textContent = current.conditions;

  const feelslike = document.createElement('p');
  feelslike.classList.add("feelslike");
  feelslike.textContent = `Feels like ${tempScale(current.feels, temperatureScale)}`;

  const highlow = document.createElement('p');
  highlow.classList.add("high-low");
  highlow.textContent = `H: ${tempScale(current.high, temperatureScale)}° L: ${tempScale(current.low, temperatureScale)}°`;

  rightDiv.appendChild(conditions);
  rightDiv.appendChild(feelslike);
  rightDiv.appendChild(highlow);
  
  //Display Elements
  container.appendChild(title);
  container.appendChild(leftDiv);
  container.appendChild(rightDiv);
}

export function displayHourlyConditions(hourly) {
    const container = document.querySelector('.hourly-container');
    resetContainer(container);

    //Title
    const title = document.createElement('h3');
    title.textContent = 'Hourly Forecast';
    container.appendChild(title);


    for(let i = 0; i < hourly.length; i++) {
        const hour = document.createElement('div');
        hour.classList.add('hour');
    
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `${convertTo12HourTime(hourly[i].hour)}`; //MIGHT NEED TO CONVERT TIME INTO AM/PM

        const icon = document.createElement('i');
        icon.classList.add("wi", getWeatherIconName(hourly[i].icon), "weather-icon");

        const temp = document.createElement('p');
        temp.classList.add('temp');
        temp.textContent = `${tempScale(hourly[i].temperature, temperatureScale)}°`;

        const feelslike = document.createElement('p');
        feelslike.classList.add('feelslike');
        feelslike.textContent = `Feels ${tempScale(hourly[i].feels, temperatureScale)}`

        //Precipitation
        const precipContainer = document.createElement('div');
        precipContainer.classList.add('precip');

        const precipIcon = document.createElement('i');
        precipIcon.classList.add('wi', 'wi-rain', 'precip-icon');
        
        const precipChance = document.createElement('p');
        precipChance.classList.add('precip-chance');
        precipChance.textContent= `${hourly[i].precip}%`

        precipContainer.appendChild(precipIcon);
        precipContainer.appendChild(precipChance);

        hour.appendChild(time);
        hour.appendChild(icon);
        hour.appendChild(temp);
        hour.appendChild(feelslike);
        hour.appendChild(precipContainer);

        //Display Elements
        container.appendChild(hour);
    }
}

export function displayDailyConditions(daily) {
    const container = document.querySelector('.daily-container');
    resetContainer(container);

    //Title
    const title = document.createElement('h3');
    title.textContent = 'Daily Forecast';
    container.appendChild(title);

    for(let i = 0; i < daily.length; i++) {
        const dateObject = parseDate(daily[i].day);

        const day = document.createElement('div');
        day.classList.add('day');
        
        const weekday = document.createElement('p');
        weekday.classList.add('day');
        weekday.textContent = parseDay(dateObject);

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = `${parseMonth(dateObject)} ${dateObject.getDate()}`;

        const icon = document.createElement('i');
        icon.classList.add('wi', getWeatherIconName(daily[i].icon), 'weather-icon');

        const temp = document.createElement('p');
        temp.classList.add('temp');
        temp.textContent = `${tempScale(daily[i].temperature, temperatureScale)}°`;

        const precipContainer = document.createElement('div');
        precipContainer.classList.add('precip');

        const precipIcon = document.createElement('i');
        precipIcon.classList.add('wi', 'wi-rain', 'precip-icon');

        const precipChance = document.createElement('p');
        precipChance.classList.add('precip-chance');
        precipChance.textContent = `${daily[i].precip}%`;

        precipContainer.appendChild(precipIcon);
        precipContainer.appendChild(precipChance);

        day.appendChild(weekday);
        day.appendChild(date);
        day.appendChild(icon);
        day.appendChild(temp);
        day.appendChild(precipContainer);

        //Display Contents
        container.appendChild(day);
    }
}

function resetContainer(container) {
    container.textContent = '';
}

export function displayLocation(location) {
    const locationContainer = document.querySelector('.location');
    locationContainer.textContent = location;
}
