const _0xe8e8f0=_0x1d34;(function(_0x1b57c5,_0x5ccb08){const _0xac98a6=_0x1d34,_0x2ee0bb=_0x1b57c5();while(!![]){try{const _0x23e52b=-parseInt(_0xac98a6(0x14f))/0x1*(-parseInt(_0xac98a6(0x158))/0x2)+parseInt(_0xac98a6(0x157))/0x3*(-parseInt(_0xac98a6(0x159))/0x4)+parseInt(_0xac98a6(0x160))/0x5*(parseInt(_0xac98a6(0x14d))/0x6)+parseInt(_0xac98a6(0x15f))/0x7+parseInt(_0xac98a6(0x153))/0x8+-parseInt(_0xac98a6(0x14e))/0x9+-parseInt(_0xac98a6(0x15b))/0xa;if(_0x23e52b===_0x5ccb08)break;else _0x2ee0bb['push'](_0x2ee0bb['shift']());}catch(_0x20c331){_0x2ee0bb['push'](_0x2ee0bb['shift']());}}}(_0x2766,0x7120c));function _0x2766(){const _0x45ee67=['1857324LWYnQe','setLevel','6733430fNKcQA','truncate','error','info','104265WWwxxk','5pxHnyf','YYYY-MM-DD\x20HH:mm:ss','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','logger','4853094kzctNk','5969988peOPJi','3139RxXPrT','log/app.log','debug','message','6578008oTLskP','warn','level','File','3uUesmw','394hLKldh'];_0x2766=function(){return _0x45ee67;};return _0x2766();}import{createLogger,format,transports}from'winston';import _0x5a50b9 from'fs';function _0x1d34(_0x12315e,_0xa1d766){const _0x2766ff=_0x2766();return _0x1d34=function(_0x1d3452,_0x484478){_0x1d3452=_0x1d3452-0x14c;let _0x320031=_0x2766ff[_0x1d3452];return _0x320031;},_0x1d34(_0x12315e,_0xa1d766);}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x5d1a1f,message:_0xc19e21,timestamp:_0x4ef042})=>{return _0x4ef042+'\x20['+_0x5d1a1f+']:\x20'+_0xc19e21;});class Logger{constructor(){const _0x21c950=_0x1d34;this[_0x21c950(0x14c)]=createLogger({'level':_0x21c950(0x151),'format':combine(timestamp({'format':_0x21c950(0x161)}),colorize(),customFormat),'transports':[new transports[(_0x21c950(0x156))]({'filename':_0x21c950(0x150)})],'exceptionHandlers':[new transports['File']({'filename':_0x21c950(0x150)})],'rejectionHandlers':[new transports[(_0x21c950(0x156))]({'filename':'log/app.log'})]});}[_0xe8e8f0(0x15e)](_0x3c0806){const _0x1a7904=_0xe8e8f0;this[_0x1a7904(0x14c)][_0x1a7904(0x15e)](_0x3c0806);}[_0xe8e8f0(0x154)](_0x2f179a){const _0x187c5a=_0xe8e8f0;this[_0x187c5a(0x14c)]['warn'](_0x2f179a);}[_0xe8e8f0(0x15d)](_0x248513){const _0xc8a227=_0xe8e8f0;this[_0xc8a227(0x14c)][_0xc8a227(0x15d)](_0x248513);}[_0xe8e8f0(0x151)](_0x58f3da){const _0x2b757f=_0xe8e8f0;this['logger'][_0x2b757f(0x151)](_0x58f3da);}[_0xe8e8f0(0x15a)](_0x50aeae){const _0x4e1c1f=_0xe8e8f0;this[_0x4e1c1f(0x14c)][_0x4e1c1f(0x155)]=_0x50aeae;}['clear'](){const _0x533bf4=_0xe8e8f0;_0x5a50b9[_0x533bf4(0x15c)](_0x533bf4(0x150),0x0,_0x46e58a=>{const _0xe56c13=_0x533bf4;_0x46e58a?this[_0xe56c13(0x14c)][_0xe56c13(0x15d)](_0xe56c13(0x162)+_0x46e58a[_0xe56c13(0x152)]):this[_0xe56c13(0x14c)]['info']('Log\x20file\x20cleared');});}}export default new Logger();