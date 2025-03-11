import { Config } from './config/config.js';
import { proxyList } from './config/proxy_list.js';
import { Fintopio } from './src/core/fintopio.js';
import { Telegram } from './src/core/telegram.js';
import { Helper } from './src/utils/helper.js';
import a0_0x2382d4 from './src/utils/logger.js';
import a0_0x248f8c from './src/utils/twist.js';
async function operation(_0x16ac3a, _0x3cfe34, _0x114c94, _0x341035) {
  try {
    const _0x9ed08e = new Fintopio(_0x16ac3a, _0x3cfe34, _0x114c94, _0x341035);
    await _0x9ed08e.login();
    await _0x9ed08e.getUser(true);
    await _0x9ed08e.getDiamondState();
    await _0x9ed08e.checkIn();
    await _0x9ed08e.startFarming();
    if (_0x9ed08e.diamond.state == "available") {
      await _0x9ed08e.claimDiamondReward();
    } else {
      await Helper.delay(0xbb8, _0x16ac3a, "Diamond Breaking is currently unavailable...", _0x9ed08e);
    }
    await _0x9ed08e.playSpaceTapper();
    await _0x9ed08e.getTasks(true);
    for (const _0x418425 of _0x9ed08e.tasks) {
      if (_0x418425.status == "available") {
        await _0x9ed08e.startTask(_0x418425);
      } else {
        if (_0x418425.status == "verified") {
          await _0x9ed08e.claimTask(_0x418425);
        } else {
          continue;
        }
      }
    }
    const _0x4b8d0f = _0x9ed08e.farming.timings.finish;
    const _0x484ecd = _0x9ed08e.diamond.timings.availableTo;
    const _0x2f4fbc = Date.now() + 7200000;
    const _0x1785be = _0x4b8d0f - Date.now();
    const _0x10cb95 = _0x484ecd - Date.now();
    const _0x4f7c17 = _0x2f4fbc - Date.now();
    const _0x4d3080 = Math.min(_0x1785be, _0x10cb95, _0x4f7c17);
    await Helper.delay(_0x4d3080, _0x16ac3a, "Delaying for " + Helper.msToTime(_0x4d3080) + " before restarting", _0x9ed08e);
    if (_0x1785be <= 0x0) {
      await Helper.delay(Helper.random(0xbb8, 0x2710), _0x16ac3a, "Its time to claim farming reward!!!", _0x9ed08e);
      await _0x9ed08e.claimFarming();
    }
    await Helper.delay(0x1388, _0x16ac3a, "Account " + _0x16ac3a.id + " Processing Complete, Restarting in 5 seconds", _0x9ed08e);
    await operation(_0x16ac3a, _0x3cfe34, _0x114c94, _0x341035);
  } catch (_0x59361d) {
    if (_0x59361d.message.includes("401")) {
      if (_0x16ac3a.type == "query") {
        await Helper.delay(0x3e8, _0x16ac3a, "Error : " + _0x59361d.message + ", Query Is Expired, Please Get New Query");
      } else {
        await Helper.delay(0x1388, _0x16ac3a, "Error : " + _0x59361d.message + ", Query Is Expired, Getting New Query in 5 Seconds");
        const _0x4433f5 = new Telegram();
        await _0x4433f5.useSession(_0x16ac3a.accounts, _0x341035);
        const _0x25cac7 = await _0x4433f5.client.getMe();
        _0x25cac7.type = 'sessions';
        _0x25cac7.accounts = _0x16ac3a.accounts;
        _0x25cac7.id = _0x25cac7.id.value;
        const _0x3b38cb = await _0x4433f5.resolvePeer().then(async () => {
          return await _0x4433f5.initWebView();
        })["catch"](_0x5d351c => {
          throw _0x5d351c;
        });
        const _0x29e1d2 = Helper.queryToJSON(_0x3b38cb);
        await _0x4433f5.disconnect();
        await Helper.delay(0x1388, _0x25cac7, "Successfully get new query");
        await operation(_0x25cac7, _0x3b38cb, _0x29e1d2, _0x341035);
      }
    } else if (_0x59361d.message.includes("429")) {
      await Helper.delay(300000, _0x16ac3a, "Error : " + _0x59361d.message + ", Retrying after 5 Minutes");
      await operation(_0x16ac3a, _0x3cfe34, _0x114c94, _0x341035);
    } else {
      await Helper.delay(0x1388, _0x16ac3a, "Error : " + _0x59361d.message + ", Retrying after 5 Seconds");
      await operation(_0x16ac3a, _0x3cfe34, _0x114c94, _0x341035);
    }
  }
}
let init = false;
async function startBot() {
  return new Promise(async (_0x24b6c8, _0x25d6c9) => {
    try {
      a0_0x2382d4.info("BOT STARTED");
      const _0x3dd8b = await new Telegram();
      if (init == false) {
        await _0x3dd8b.init();
        init = true;
      }
      const _0x4dcd76 = Helper.getSession('accounts');
      const _0x1829d5 = [];
      if (proxyList.length > 0x0) {
        if (_0x4dcd76.length != proxyList.length) {
          _0x25d6c9("You have " + _0x4dcd76.length + " Session but you provide " + proxyList.length + " Proxy");
        }
      }
      for (const _0x2fe3f9 of _0x4dcd76) {
        const _0x538467 = _0x4dcd76.indexOf(_0x2fe3f9);
        const _0x47bef2 = proxyList.length > 0x0 ? proxyList[_0x538467] : undefined;
        if (!_0x2fe3f9.includes("query")) {
          await _0x3dd8b.useSession("accounts/" + _0x2fe3f9, _0x47bef2);
          _0x3dd8b.session = _0x2fe3f9;
          const _0x280f26 = await _0x3dd8b.client.getMe();
          _0x280f26.type = "sessions";
          _0x280f26.accounts = "accounts/" + _0x2fe3f9;
          _0x280f26.id = _0x280f26.id.value;
          const _0xe88757 = await _0x3dd8b.resolvePeer().then(async () => {
            return await _0x3dd8b.initWebView();
          })['catch'](_0x2b8a18 => {
            throw _0x2b8a18;
          });
          const _0x2691f6 = Helper.queryToJSON(_0xe88757);
          await _0x3dd8b.disconnect();
          _0x1829d5.push([_0x280f26, _0xe88757, _0x2691f6, _0x47bef2]);
        } else {
          let _0x3b6f8e = Helper.readQueryFile('accounts/' + _0x2fe3f9 + "/query.txt");
          let _0x364f41 = Helper.queryToJSON(_0x3b6f8e);
          if (!_0x364f41.user) {
            _0x364f41 = await Helper.queryToJSON(await Helper.launchParamToQuery(_0x3b6f8e));
            _0x3b6f8e = await Helper.launchParamToQuery(_0x3b6f8e);
          }
          const _0x46e119 = _0x364f41.user;
          _0x46e119.type = "query";
          _0x46e119.accounts = "accounts/" + _0x2fe3f9;
          _0x46e119.firstName = _0x46e119.first_name;
          _0x46e119.lastName = _0x46e119.last_name;
          _0x1829d5.push([_0x46e119, _0x3b6f8e, _0x364f41, _0x47bef2]);
        }
      }
      const _0x24978e = _0x1829d5.map(async _0x5c6307 => {
        await operation(_0x5c6307[0x0], _0x5c6307[0x1], _0x5c6307[0x2], _0x5c6307[0x3]);
      });
      await Promise.all(_0x24978e);
      _0x24b6c8();
    } catch (_0xa19891) {
      a0_0x2382d4.info("BOT STOPPED");
      a0_0x2382d4.error(JSON.stringify(_0xa19891));
      _0x25d6c9(_0xa19891);
    }
  });
}
(async () => {
  try {
    a0_0x2382d4.clear();
    a0_0x2382d4.info();
    a0_0x2382d4.info("Application Started");
    console.log("FINTOPIO MINING BOT");
    console.log("AUTHOR : NOFAN RAMBE");
    console.log("WELCOME & ENJOY SIR!");
    await startBot();
  } catch (_0x500a84) {
    a0_0x248f8c.clear();
    a0_0x248f8c.clearInfo();
    console.log("Error During executing bot", _0x500a84);
    await startBot();
  }
})();
