class Meetup {
  static WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    weekday = Meetup.WEEKDAYS.indexOf(weekday.toLowerCase());
    schedule = schedule.toLowerCase();
    let possibleDates = [];

    for (let date = 1; date <= 31; date += 1) {
      let month = this.month - 1;
      let dateObj = new Date(this.year, month, date);

      if (dateObj.getDay() === weekday && dateObj.getMonth() === month) possibleDates.push(dateObj);
    }

    switch (schedule) {
      case 'first':
        return possibleDates[0];
      case 'second':
        return possibleDates[1];
      case 'third':
        return possibleDates[2];
      case 'fourth':
        return possibleDates[3];
      case 'fifth':
        return possibleDates[4] || null;
      case 'last':
        return possibleDates.at(-1);
      case 'teenth':
        return this.getTeenthDate(possibleDates);
    }
  }

  getTeenthDate(possibleDates) {
    let teenths = [13, 14, 15, 16, 17, 18, 18, 19];
    return possibleDates.filter(date => teenths.includes(date.getDate()))[0];
  }
}

module.exports = Meetup;