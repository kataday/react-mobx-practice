import {
  observable,
  computed,
  action
} from 'mobx';

export default class AppState {
  @observable timer1 = 0;
  @observable timer2 = 0;

  constructor() {
    // mobx.useStrict(true) の場合、@observableな値の変更は、action~()を通して行う。
    setInterval(action.bound(() => {
      this.timer2 += 2;
    }), 2000);
  }

  // mobx.useStrict(true) の場合、@observableな値の変更は、action~()を通して行う。
  @action.bound
  resetTimer() {
    this.timer1 = 0;
    this.timer2 = 0;
  }
}
