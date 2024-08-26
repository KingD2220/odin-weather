import { getWeatherData, createCurrentConditions, createHourlyArray, createDailyArray, getNextHour } from "./locationConditions";
import { displayLocation, displayCurrentConditions, displayHourlyConditions, displayDailyConditions} from "./display";

export default async function createAndDisplayLocationConditions(location) {

    //Get weather data
    const data = await getWeatherData(location);
    const current = createCurrentConditions(data);
    const hourly = createHourlyArray(data, getNextHour(data));
    const daily = createDailyArray(data);

    //Display weather data
    displayLocation(data.resolvedAddress);
    displayCurrentConditions(current);
    displayHourlyConditions(hourly);
    displayDailyConditions(daily);
}

