class Robot {
  static generatedNames = []

  name() {
    if (this.robotName) {
      return this.robotName;
    }

    let name = '';

    for (let i = 1; i <= 2; i+= 1) {
      let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let randomIndex = Math.floor(Math.random() * 26);
      name += letters[randomIndex];
    }

    for (let i = 1; i <= 3; i += 1) {
      let randomNumber = Math.floor(Math.random() * 10);
      name += randomNumber;
    }

    if (!Robot.generatedNames.includes(name)) {
      Robot.generatedNames.push(name);
      this.robotName = name;
      return name;
    } else {
      this.name();
    }
  }

  reset() {
    this.robotName = undefined;
  }
}

module.exports = Robot;

console.log(new Robot().name());