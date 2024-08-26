export function convertTo12HourTime(time) {
    if (time === 0) {
        return '12 AM';
    }
    else if (time <= 11) {
        return `${time} AM`;
    }
    else if (time === 12) {
        return '12 PM';
    }
    else {
        return `${time - 12} PM`
    }
}

export function parseDate(dateString) {
    const dateArray = dateString.split('-');
    const year = dateArray[0];
    const month = dateArray[1] - 1;
    const day = dateArray[2];
    const parsedDate = new Date(year, month, day);

    return parsedDate;
}

export function parseDay(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

export function parseMonth(date) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[date.getMonth()];
}

export function tempScale(temp, scale) {
    if (scale === 'F') {
        return Math.round(temp);
    }
    else return Math.round((temp - 32) / 1.8);
}