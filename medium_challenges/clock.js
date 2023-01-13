class Clock {
  static at(hour, minute) {
    let clock = new Clock();
    clock.hour = hour;
    clock.minute = (minute === undefined) ? 0 : minute;

    return clock;
  }

  toString() {
    let hour = String(this.hour);
    let minute = String(this.minute);

    if (hour.length === 1) hour = '0' + hour;
    if (minute.length === 1) minute = '0' + minute;

    return `${hour}:${minute}`;
  }

  add(minutes) {
    let newClock = Clock.at(this.hour, this.minute);

    while (minutes >= 60) {
      newClock.hour += 1;
      minutes -= 60;
      if (newClock.hour === 24) newClock.hour = 0;
    }

    if (newClock.minute + minutes >= 60) {
      newClock.minute = newClock.minute + minutes - 60;
      newClock.hour === 23 ? newClock.hour = 0 : newClock.hour + 1;
    } else {
      newClock.minute += minutes;
    }

    return newClock;
  }

  subtract(minutes) {
    let newClock = Clock.at(this.hour, this.minute);

    while (minutes >= 60) {
      if (newClock.hour === 0) newClock.hour = 24;
      newClock.hour -= 1;
      minutes -= 60;
    }

    if (newClock.minute - minutes < 0) {
      newClock.minute = newClock.minute - minutes + 60;
      newClock.hour === 0 ? newClock.hour = 23 : newClock.hour -= 1;
    } else {
      newClock.minute -= minutes;
    }
  
    return newClock;
  }

  isEqual(otherClock) {
    return (this.hour === otherClock.hour && this.minute === otherClock.minute);
  }
}

module.exports = Clock;