const _0x23eb08=_0x4b19;function _0x4b19(_0xe45e74,_0x564a80){const _0x3444b1=_0x3444();return _0x4b19=function(_0x4b1970,_0x163cfe){_0x4b1970=_0x4b1970-0x13a;let _0x41157a=_0x3444b1[_0x4b1970];return _0x41157a;},_0x4b19(_0xe45e74,_0x564a80);}(function(_0xd05239,_0x4cdc72){const _0x52b695=_0x4b19,_0xe80c5c=_0xd05239();while(!![]){try{const _0x240065=parseInt(_0x52b695(0x13d))/0x1+-parseInt(_0x52b695(0x15d))/0x2+parseInt(_0x52b695(0x158))/0x3*(-parseInt(_0x52b695(0x147))/0x4)+parseInt(_0x52b695(0x15a))/0x5*(parseInt(_0x52b695(0x149))/0x6)+parseInt(_0x52b695(0x15f))/0x7+-parseInt(_0x52b695(0x14a))/0x8+-parseInt(_0x52b695(0x152))/0x9*(parseInt(_0x52b695(0x15c))/0xa);if(_0x240065===_0x4cdc72)break;else _0xe80c5c['push'](_0xe80c5c['shift']());}catch(_0x4e6492){_0xe80c5c['push'](_0xe80c5c['shift']());}}}(_0x3444,0x65970));import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import _0x222682 from'../utils/logger.js';export class API{constructor(_0x5875b8,_0x5d44ef,_0x432a3a){const _0x1cc0cb=_0x4b19;this[_0x1cc0cb(0x14f)]=_0x5d44ef,this[_0x1cc0cb(0x14c)]=_0x5d44ef,this['ua']=Helper[_0x1cc0cb(0x155)](),this[_0x1cc0cb(0x13a)]=_0x5875b8,this['proxy']=_0x432a3a;}[_0x23eb08(0x15e)](_0x56cc1f){const _0xfc2b0e=_0x23eb08,_0x19851a={'Accept':_0xfc2b0e(0x14e),'Accept-Language':_0xfc2b0e(0x160),'Content-Type':_0xfc2b0e(0x161),'Sec-Fetch-Dest':_0xfc2b0e(0x146),'Sec-Fetch-Site':_0xfc2b0e(0x13e),'Sec-Fetch-Mode':_0xfc2b0e(0x148),'Host':this[_0xfc2b0e(0x13b)],'Origin':this[_0xfc2b0e(0x14c)],'Referer':this[_0xfc2b0e(0x14c)]+'/'};return _0x56cc1f&&(_0x19851a['Authorization']=_0xfc2b0e(0x14d)+_0x56cc1f),_0x19851a;}async[_0x23eb08(0x13f)](_0x3432ba,_0x30dc19,_0x495bf3,_0x550034={},_0x50090d={}){const _0x156f09=_0x23eb08;try{const _0x3b78c8=''+this[_0x156f09(0x14f)]+_0x3432ba,_0x4368e7={..._0x50090d,...this['generateHeaders'](_0x495bf3)},_0x2008fc={'headers':_0x4368e7,'method':_0x30dc19};this[_0x156f09(0x150)]&&(_0x2008fc[_0x156f09(0x157)]=new HttpsProxyAgent(this[_0x156f09(0x150)]));_0x222682[_0x156f09(0x15b)](_0x30dc19+'\x20:\x20'+_0x3b78c8+'\x20'+(this['proxy']?this[_0x156f09(0x150)]:'')),_0x222682[_0x156f09(0x15b)](_0x156f09(0x142)+JSON['stringify'](_0x4368e7));_0x30dc19!=='GET'&&(_0x2008fc[_0x156f09(0x13c)]=''+JSON[_0x156f09(0x153)](_0x550034),_0x222682['info']('Request\x20Body\x20:\x20'+_0x2008fc[_0x156f09(0x13c)]));const _0x5e7e70=await fetch(_0x3b78c8,_0x2008fc);_0x222682[_0x156f09(0x15b)](_0x156f09(0x144)+_0x5e7e70[_0x156f09(0x151)]+'\x20'+_0x5e7e70[_0x156f09(0x154)]);if(_0x5e7e70['ok']||_0x5e7e70[_0x156f09(0x151)]==0x190||_0x5e7e70[_0x156f09(0x151)]==0x193){const _0x10be51=_0x5e7e70[_0x156f09(0x14b)][_0x156f09(0x141)]('content-type');let _0x4754da;return _0x10be51&&_0x10be51[_0x156f09(0x156)]('application/json')?_0x4754da={...await _0x5e7e70[_0x156f09(0x143)](),'status':_0x5e7e70['status']}:_0x4754da={'status':_0x5e7e70['status'],'message':await _0x5e7e70[_0x156f09(0x159)]()},_0x5e7e70['ok']&&(_0x4754da[_0x156f09(0x151)]=0xc8),_0x222682['info']('Response\x20Data\x20:\x20'+JSON[_0x156f09(0x153)](_0x4754da)),_0x4754da;}else throw new Error(_0x5e7e70[_0x156f09(0x151)]+_0x156f09(0x145)+_0x5e7e70[_0x156f09(0x154)]);}catch(_0x438349){_0x222682['error']('Error\x20:\x20'+_0x438349[_0x156f09(0x140)]);throw _0x438349;}}}function _0x3444(){const _0x10a575=['4RPVeYy','cors','40908XVEOBS','524896HWAdGN','headers','origin','Bearer\x20','application/json,\x20text/plain,\x20*/*','url','proxy','status','2007tURhLn','stringify','statusText','randomUserAgent','includes','agent','919839jyiUhZ','text','565edIsaN','info','35870rcfTmf','553048zRNQkT','generateHeaders','3034528NOkBfJ','en-US,en;q=0.9,id;q=0.8','application/json','query','host','body','660824zMPgJJ','same-site','fetch','message','get','Request\x20Header\x20:\x20','json','Response\x20:\x20','\x20-\x20','empty'];_0x3444=function(){return _0x10a575;};return _0x3444();}