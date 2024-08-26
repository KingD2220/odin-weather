export default class Conditions {
    constructor(data) {
        this.conditions = data.conditions;
        this.icon = data.icon;
        this.temperature = data.temp;
        this.feels = data.feelslike;
        this.precip = Math.round(data.precipprob);
    }
}

export class CurrentConditions extends Conditions {
    constructor(data) {
        super(data.currentConditions);
        this.high = Math.round(data.days[0].tempmax);
        this.low = Math.round(data.days[0].tempmin);
    }
}

export class HourlyConditions extends Conditions {
    constructor(data, day, hour) {
        super(data.days[day].hours[hour]);
        this.hour = hour;
    }
}

export class DailyConditions extends Conditions {
    constructor (data, day) {
        super(data.days[day]);
        this.day = data.days[day].datetime;
    }
}