import { CurrentConditions, HourlyConditions, DailyConditions } from '../classes/Conditions'

export async function getWeatherData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=M4R3P2FDZV8FCPUD7GH2RFGAB`);
    const data = await response.json();
    return data;
}

export function createCurrentConditions(data) {
    return new CurrentConditions(data);
}

export function createHourlyArray(data, startHour) {
    const hourlyArray = [];
    let day = 0;
    let hour = startHour;

    for (let i = 0; i < 5; i++) {
        if (hour === 24) {
            day += 1;
            hour = 0;
        }
        const conditions = new HourlyConditions(data, day, hour);
        hourlyArray.push(conditions);
        hour += 1;
    }

    return hourlyArray;
}

export function createDailyArray(data) {
    const dailyArray = [];

    for (let i = 0; i < 7; i++) {
        const conditions = new DailyConditions(data, i);
        dailyArray.push(conditions);
    }

    return dailyArray;
}

export function getNextHour(data) {
    return Number(data.currentConditions.datetime.substring(0,2)) + 1;
}