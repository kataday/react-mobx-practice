import {
  observable,
  computed,
  action
} from 'mobx';

export default class AppState {
  @observable timer1 = 0;
  @observable timer2 = 0;
  sleep = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({result: 'test'});
      }, ms);
    });
  }

  constructor() {
    setInterval(this.tickTimer, 2000);
  }

  // mobx.useStrict(true) の場合、@observableな値の変更は、action~()を通して行う。関心の分離。
  @action.bound
  tickTimer() {
    this.timer2 += 2;
  }

  @action.bound
  resetTimer() {
    this.timer1 = 0;
    this.timer2 = 0;
  }

  @action.bound
  async resetTimerAsync() {
    const result = await this.sleep(5000);
    console.log(result);
    this.resetTimer();
  }
}
