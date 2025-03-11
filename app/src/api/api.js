import { HttpsProxyAgent } from 'https-proxy-agent';
import { Helper } from '../utils/helper.js';
import a1_0x3a76de from '../utils/logger.js';
import a1_0x7f1521 from 'https';
import a1_0x14dc75 from 'node-fetch';
export class API {
  constructor(_0x41787b, _0x4dd892, _0x57ecfa) {
    this.url = _0x4dd892;
    this.ua = Helper.randomUserAgent();
    this.query = _0x41787b;
    this.proxy = _0x57ecfa;
  }
  async ['generateHeaders'](_0xde19d9) {
    const _0x16e172 = {
      'Accept': "application/json, text/plain, */*",
      'Accept-Language': "en-US,en;q=0.9,id;q=0.8",
      'Content-Type': "application/json",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Site': "same-site",
      'Sec-Fetch-Mode': "cors",
      'User-Agent': this.ua
    };
    if (_0xde19d9) {
      _0x16e172.Authorization = "Bearer " + _0xde19d9;
    }
    return _0x16e172;
  }
  async ["fetch"](_0xf35eb, _0x41fef9 = "GET", _0x498a28, _0x10c4ab = {}, _0x4e4d55 = {}, _0x5e3079 = false) {
    try {
      const _0x4275ee = _0x5e3079 ? _0xf35eb : '' + this.url + _0xf35eb;
      const _0x4f8c2c = {
        ...(await this.generateHeaders(_0x498a28)),
        ..._0x4e4d55
      };
      a1_0x3a76de.info(_0x41fef9 + " : " + _0x4275ee + " " + (this.proxy ? this.proxy : ''));
      a1_0x3a76de.info("Request Header : " + JSON.stringify(_0x4f8c2c));
      a1_0x3a76de.info("Request Body : " + JSON.stringify(_0x10c4ab));
      const _0x42e635 = {
        'method': _0x41fef9,
        'headers': _0x4f8c2c,
        'agent': this.proxy ? new HttpsProxyAgent(this.proxy) : new a1_0x7f1521.Agent({
          'rejectUnauthorized': false
        }),
        'body': _0x41fef9 !== "GET" ? JSON.stringify(_0x10c4ab) : undefined
      };
      const _0x41f958 = await a1_0x14dc75(_0x4275ee, _0x42e635);
      if (_0x41f958.ok) {
        const _0x5c7642 = _0x41f958.headers.get("Content-Type");
        let _0x5d2456;
        if (_0x5c7642 && _0x5c7642.includes("application/json")) {
          _0x5d2456 = await _0x41f958.json();
        } else {
          _0x5d2456 = {
            'message': await _0x41f958.text()
          };
        }
        a1_0x3a76de.info("Response : " + _0x41f958.status + " " + _0x41f958.statusText);
        a1_0x3a76de.info("Response Data : " + JSON.stringify(_0x5d2456).substring(0x0, 0x96) + '...');
        const _0x2b0690 = {
          'status': _0x41f958.ok ? 0xc8 : _0x41f958.status,
          ..._0x5d2456
        };
        return _0x2b0690;
      } else {
        throw _0x41f958;
      }
    } catch (_0x41cbfd) {
      if (_0x41cbfd.status) {
        const _0x33615f = _0x41cbfd.status;
        const _0x235eab = _0x41cbfd.headers.get('Content-Type');
        let _0x39458c;
        if (_0x235eab && _0x235eab.includes("application/json")) {
          _0x39458c = await _0x41cbfd.json();
        } else {
          _0x39458c = {
            'message': await _0x41cbfd.text()
          };
        }
        if (_0x33615f == 0x190 || _0x33615f == 0x193) {
          const _0x5d24e5 = {
            'status': _0x33615f,
            ..._0x39458c
          };
          return _0x5d24e5;
        } else {
          if (_0x33615f === 0x1f8 || _0x33615f === 0x194) {
            console.error("DETECT API CHANGE.. EXIT");
            await process.exit();
          } else {
            throw Error(_0x33615f + " - " + _0x41cbfd.message);
          }
        }
      } else {
        throw _0x41cbfd;
      }
    }
  }
}
