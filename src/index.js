export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.errors.set(400, 'bad request');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknow error';
  }
}
