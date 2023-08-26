export default class Math {
  constructor(name, distance) {
    this.name = name;
    this.attackValue = 10;
    this.distance = distance;
    this.stonedStatus = false;
  }

  get attack() {
    return (() => {
      let attack = this.attackValue * (1 - 0.1 * (this.distance - 1));
      if (this.stoned) {
        attack -= Math.log2(this.distance) * 5;
      }
      return attack;
    });
  }

  set attack(value) {
    this.attackValue = value;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(state) {
    this.stonedStatus = state;
  }
}
