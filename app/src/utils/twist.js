import { Twisters } from 'twisters';
import { Helper } from './helper.js';
import _0x43ef6a from './logger.js';
import { Fintopio } from '../core/fintopio.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x30765e = '', _0x14ba26 = '', _0x4548b6 = new Fintopio(), _0x2f8c39) {
    if (_0x2f8c39 == undefined) {
      _0x43ef6a.info(_0x14ba26.id + " - " + _0x30765e);
      _0x2f8c39 = '-';
    }
    const _0x44ef18 = _0x4548b6.user ?? {};
    const _0xeb1deb = _0x44ef18.balance ?? '-';
    const _0x242108 = _0x4548b6.farming ?? {};
    const _0x5d64c0 = _0x242108.timings ?? {};
    const _0x2399ba = _0x5d64c0.finish ?? '-';
    this.twisters.put(_0x14ba26.id, {
      'text': "\n============= Account " + _0x14ba26.id + " =============\nName         : " + (_0x14ba26.firstName ?? 'Unamed') + " " + _0x14ba26.lastName + "\nHold Balance : " + _0xeb1deb + "\nFarming      : " + (_0x2399ba != '-' ? Helper.msToTime(_0x2399ba - Date.now()) : _0x2399ba) + "\n\nStatus : " + _0x30765e + "\nDelay  : " + _0x2f8c39 + "\n=============================================="
    });
  }
  ["info"](_0x12ff23 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x12ff23 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ["clear"](_0x1117d2) {
    this.twisters.remove(_0x1117d2);
  }
}
export default new Twist();
