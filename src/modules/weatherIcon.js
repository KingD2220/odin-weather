export default function getWeatherIconName(icon) {
    if (icon === 'snow') {
        return 'wi-snow';
    }
    if (icon === 'rain') {
        return 'wi-rain';
    }
    if (icon === 'fog') {
        return 'wi-fog';
    }
    if (icon === 'wind') {
        return 'wi-windy';
    }
    if (icon === 'cloudy') {
        return 'wi-cloudy';
    }
    if (icon === 'partly-cloudy-day') {
        return 'wi-day-cloudy';
    }
    if (icon === 'partly-cloudy-night') {
        return 'wi-night-alt-cloudy';
    }
    if (icon === 'clear-day') {
        return 'wi-day-sunny';
    }
    if (icon === 'clear-night') {
        return 'wi-night-clear';
    }
}