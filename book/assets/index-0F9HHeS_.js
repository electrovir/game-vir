var mp=Object.defineProperty;var o=(e,t)=>mp(e,"name",{value:t,configurable:!0});o(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}o(n,"getFetchOpts");function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}o(r,"processPreload")},"polyfill")();var ke;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ke||(ke={}));function ne(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}o(ne,"getObjectTypedKeys");function pp(e){return ne(e).filter(t=>isNaN(Number(t)))}o(pp,"getEnumKeys");function xt(e){return pp(e).map(n=>e[n])}o(xt,"getEnumValues");var gp=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,yp=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,wp=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ao={Space_Separator:gp,ID_Start:yp,ID_Continue:wp},be={isSpaceSeparator(e){return typeof e=="string"&&Ao.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ao.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ao.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let fa,_e,Wt,fs,mn,Ct,Me,eu,Jr;var bp=o(function(t,n){fa=String(t),_e="start",Wt=[],fs=0,mn=1,Ct=0,Me=void 0,eu=void 0,Jr=void 0;do Me=vp(),Ap[_e]();while(Me.type!=="eof");return typeof n=="function"?ha({"":Jr},"",n):Jr},"parse");function ha(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=String(i),a=ha(r,s,n);a===void 0?delete r[s]:Object.defineProperty(r,s,{value:a,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const s=ha(r,i,n);s===void 0?delete r[i]:Object.defineProperty(r,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}o(ha,"internalize");let j,V,Wr,Ot,G;function vp(){for(j="default",V="",Wr=!1,Ot=1;;){G=Kt();const e=lf[j]();if(e)return e}}o(vp,"lex");function Kt(){if(fa[fs])return String.fromCodePoint(fa.codePointAt(fs))}o(Kt,"peek");function A(){const e=Kt();return e===`
`?(mn++,Ct=0):e?Ct+=e.length:Ct++,e&&(fs+=e.length),e}o(A,"read");const lf={default(){switch(G){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":A();return;case"/":A(),j="comment";return;case void 0:return A(),oe("eof")}if(be.isSpaceSeparator(G)){A();return}return lf[_e]()},comment(){switch(G){case"*":A(),j="multiLineComment";return;case"/":A(),j="singleLineComment";return}throw ae(A())},multiLineComment(){switch(G){case"*":A(),j="multiLineCommentAsterisk";return;case void 0:throw ae(A())}A()},multiLineCommentAsterisk(){switch(G){case"*":A();return;case"/":A(),j="default";return;case void 0:throw ae(A())}A(),j="multiLineComment"},singleLineComment(){switch(G){case`
`:case"\r":case"\u2028":case"\u2029":A(),j="default";return;case void 0:return A(),oe("eof")}A()},value(){switch(G){case"{":case"[":return oe("punctuator",A());case"n":return A(),An("ull"),oe("null",null);case"t":return A(),An("rue"),oe("boolean",!0);case"f":return A(),An("alse"),oe("boolean",!1);case"-":case"+":A()==="-"&&(Ot=-1),j="sign";return;case".":V=A(),j="decimalPointLeading";return;case"0":V=A(),j="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":V=A(),j="decimalInteger";return;case"I":return A(),An("nfinity"),oe("numeric",1/0);case"N":return A(),An("aN"),oe("numeric",NaN);case'"':case"'":Wr=A()==='"',V="",j="string";return}throw ae(A())},identifierNameStartEscape(){if(G!=="u")throw ae(A());A();const e=ma();switch(e){case"$":case"_":break;default:if(!be.isIdStartChar(e))throw tl();break}V+=e,j="identifierName"},identifierName(){switch(G){case"$":case"_":case"‌":case"‍":V+=A();return;case"\\":A(),j="identifierNameEscape";return}if(be.isIdContinueChar(G)){V+=A();return}return oe("identifier",V)},identifierNameEscape(){if(G!=="u")throw ae(A());A();const e=ma();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!be.isIdContinueChar(e))throw tl();break}V+=e,j="identifierName"},sign(){switch(G){case".":V=A(),j="decimalPointLeading";return;case"0":V=A(),j="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":V=A(),j="decimalInteger";return;case"I":return A(),An("nfinity"),oe("numeric",Ot*(1/0));case"N":return A(),An("aN"),oe("numeric",NaN)}throw ae(A())},zero(){switch(G){case".":V+=A(),j="decimalPoint";return;case"e":case"E":V+=A(),j="decimalExponent";return;case"x":case"X":V+=A(),j="hexadecimal";return}return oe("numeric",Ot*0)},decimalInteger(){switch(G){case".":V+=A(),j="decimalPoint";return;case"e":case"E":V+=A(),j="decimalExponent";return}if(be.isDigit(G)){V+=A();return}return oe("numeric",Ot*Number(V))},decimalPointLeading(){if(be.isDigit(G)){V+=A(),j="decimalFraction";return}throw ae(A())},decimalPoint(){switch(G){case"e":case"E":V+=A(),j="decimalExponent";return}if(be.isDigit(G)){V+=A(),j="decimalFraction";return}return oe("numeric",Ot*Number(V))},decimalFraction(){switch(G){case"e":case"E":V+=A(),j="decimalExponent";return}if(be.isDigit(G)){V+=A();return}return oe("numeric",Ot*Number(V))},decimalExponent(){switch(G){case"+":case"-":V+=A(),j="decimalExponentSign";return}if(be.isDigit(G)){V+=A(),j="decimalExponentInteger";return}throw ae(A())},decimalExponentSign(){if(be.isDigit(G)){V+=A(),j="decimalExponentInteger";return}throw ae(A())},decimalExponentInteger(){if(be.isDigit(G)){V+=A();return}return oe("numeric",Ot*Number(V))},hexadecimal(){if(be.isHexDigit(G)){V+=A(),j="hexadecimalInteger";return}throw ae(A())},hexadecimalInteger(){if(be.isHexDigit(G)){V+=A();return}return oe("numeric",Ot*Number(V))},string(){switch(G){case"\\":A(),V+=Dp();return;case'"':if(Wr)return A(),oe("string",V);V+=A();return;case"'":if(!Wr)return A(),oe("string",V);V+=A();return;case`
`:case"\r":throw ae(A());case"\u2028":case"\u2029":Cp(G);break;case void 0:throw ae(A())}V+=A()},start(){switch(G){case"{":case"[":return oe("punctuator",A())}j="value"},beforePropertyName(){switch(G){case"$":case"_":V=A(),j="identifierName";return;case"\\":A(),j="identifierNameStartEscape";return;case"}":return oe("punctuator",A());case'"':case"'":Wr=A()==='"',j="string";return}if(be.isIdStartChar(G)){V+=A(),j="identifierName";return}throw ae(A())},afterPropertyName(){if(G===":")return oe("punctuator",A());throw ae(A())},beforePropertyValue(){j="value"},afterPropertyValue(){switch(G){case",":case"}":return oe("punctuator",A())}throw ae(A())},beforeArrayValue(){if(G==="]")return oe("punctuator",A());j="value"},afterArrayValue(){switch(G){case",":case"]":return oe("punctuator",A())}throw ae(A())},end(){throw ae(A())}};function oe(e,t){return{type:e,value:t,line:mn,column:Ct}}o(oe,"newToken");function An(e){for(const t of e){if(Kt()!==t)throw ae(A());A()}}o(An,"literal");function Dp(){switch(Kt()){case"b":return A(),"\b";case"f":return A(),"\f";case"n":return A(),`
`;case"r":return A(),"\r";case"t":return A(),"	";case"v":return A(),"\v";case"0":if(A(),be.isDigit(Kt()))throw ae(A());return"\0";case"x":return A(),Ep();case"u":return A(),ma();case`
`:case"\u2028":case"\u2029":return A(),"";case"\r":return A(),Kt()===`
`&&A(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ae(A());case void 0:throw ae(A())}return A()}o(Dp,"escape");function Ep(){let e="",t=Kt();if(!be.isHexDigit(t)||(e+=A(),t=Kt(),!be.isHexDigit(t)))throw ae(A());return e+=A(),String.fromCodePoint(parseInt(e,16))}o(Ep,"hexEscape");function ma(){let e="",t=4;for(;t-- >0;){const n=Kt();if(!be.isHexDigit(n))throw ae(A());e+=A()}return String.fromCodePoint(parseInt(e,16))}o(ma,"unicodeEscape");const Ap={start(){if(Me.type==="eof")throw Cn();Co()},beforePropertyName(){switch(Me.type){case"identifier":case"string":eu=Me.value,_e="afterPropertyName";return;case"punctuator":Ni();return;case"eof":throw Cn()}},afterPropertyName(){if(Me.type==="eof")throw Cn();_e="beforePropertyValue"},beforePropertyValue(){if(Me.type==="eof")throw Cn();Co()},beforeArrayValue(){if(Me.type==="eof")throw Cn();if(Me.type==="punctuator"&&Me.value==="]"){Ni();return}Co()},afterPropertyValue(){if(Me.type==="eof")throw Cn();switch(Me.value){case",":_e="beforePropertyName";return;case"}":Ni()}},afterArrayValue(){if(Me.type==="eof")throw Cn();switch(Me.value){case",":_e="beforeArrayValue";return;case"]":Ni()}},end(){}};function Co(){let e;switch(Me.type){case"punctuator":switch(Me.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Me.value;break}if(Jr===void 0)Jr=e;else{const t=Wt[Wt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,eu,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Wt.push(e),Array.isArray(e)?_e="beforeArrayValue":_e="beforePropertyName";else{const t=Wt[Wt.length-1];t==null?_e="end":Array.isArray(t)?_e="afterArrayValue":_e="afterPropertyValue"}}o(Co,"push");function Ni(){Wt.pop();const e=Wt[Wt.length-1];e==null?_e="end":Array.isArray(e)?_e="afterArrayValue":_e="afterPropertyValue"}o(Ni,"pop");function ae(e){return hs(e===void 0?`JSON5: invalid end of input at ${mn}:${Ct}`:`JSON5: invalid character '${cf(e)}' at ${mn}:${Ct}`)}o(ae,"invalidChar");function Cn(){return hs(`JSON5: invalid end of input at ${mn}:${Ct}`)}o(Cn,"invalidEOF");function tl(){return Ct-=5,hs(`JSON5: invalid identifier character at ${mn}:${Ct}`)}o(tl,"invalidIdentifier");function Cp(e){console.warn(`JSON5: '${cf(e)}' in strings is not valid ECMAScript; consider escaping`)}o(Cp,"separatorChar");function cf(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}o(cf,"formatChar");function hs(e){const t=new SyntaxError(e);return t.lineNumber=mn,t.columnNumber=Ct,t}o(hs,"syntaxError");var $p=o(function(t,n,r){const i=[];let s="",a,u,l="",c;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,c=n.quote,n=n.replacer),typeof n=="function")u=n;else if(Array.isArray(n)){a=[];for(const v of n){let $;typeof v=="string"?$=v:(typeof v=="number"||v instanceof String||v instanceof Number)&&($=String(v)),$!==void 0&&a.indexOf($)<0&&a.push($)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),l="          ".substr(0,r)):typeof r=="string"&&(l=r.substr(0,10)),d("",{"":t});function d(v,$){let E=$[v];switch(E!=null&&(typeof E.toJSON5=="function"?E=E.toJSON5(v):typeof E.toJSON=="function"&&(E=E.toJSON(v))),u&&(E=u.call($,v,E)),E instanceof Number?E=Number(E):E instanceof String?E=String(E):E instanceof Boolean&&(E=E.valueOf()),E){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof E=="string")return f(E);if(typeof E=="number")return String(E);if(typeof E=="object")return Array.isArray(E)?y(E):p(E)}o(d,"serializeProperty");function f(v){const $={"'":.1,'"':.2},E={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let k="";for(let R=0;R<v.length;R++){const H=v[R];switch(H){case"'":case'"':$[H]++,k+=H;continue;case"\0":if(be.isDigit(v[R+1])){k+="\\x00";continue}}if(E[H]){k+=E[H];continue}if(H<" "){let Ie=H.charCodeAt(0).toString(16);k+="\\x"+("00"+Ie).substring(Ie.length);continue}k+=H}const B=c||Object.keys($).reduce((R,H)=>$[R]<$[H]?R:H);return k=k.replace(new RegExp(B,"g"),E[B]),B+k+B}o(f,"quoteString");function p(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let $=s;s=s+l;let E=a||Object.keys(v),k=[];for(const R of E){const H=d(R,v);if(H!==void 0){let Ie=g(R)+":";l!==""&&(Ie+=" "),Ie+=H,k.push(Ie)}}let B;if(k.length===0)B="{}";else{let R;if(l==="")R=k.join(","),B="{"+R+"}";else{let H=`,
`+s;R=k.join(H),B=`{
`+s+R+`,
`+$+"}"}}return i.pop(),s=$,B}o(p,"serializeObject");function g(v){if(v.length===0)return f(v);const $=String.fromCodePoint(v.codePointAt(0));if(!be.isIdStartChar($))return f(v);for(let E=$.length;E<v.length;E++)if(!be.isIdContinueChar(String.fromCodePoint(v.codePointAt(E))))return f(v);return v}o(g,"serializeKey");function y(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let $=s;s=s+l;let E=[];for(let B=0;B<v.length;B++){const R=d(String(B),v);E.push(R!==void 0?R:"null")}let k;if(E.length===0)k="[]";else if(l==="")k="["+E.join(",")+"]";else{let B=`,
`+s,R=E.join(B);k=`[
`+s+R+`,
`+$+"]"}return i.pop(),s=$,k}o(y,"serializeArray")},"stringify");const Sp={parse:bp,stringify:$p};var Mp=Sp;function m(e){try{return Mp.stringify(e)}catch{return String(e)}}o(m,"stringify");const kp=[".",":",";",",","?","!"],xp=new RegExp(`[${kp.join("")}]+$`);function nl(e){return e.replace(xp,"")}o(nl,"removeEndingPunctuation");function je(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}o(je,"extractErrorMessage");function js(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&nl(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:nl(r)).join(": "):""}o(js,"combineErrorMessages");function Be(e){return e instanceof Error?e:new Error(je(e))}o(Be,"ensureError");function fr(e,t){const n=Be(e),r=js(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}o(fr,"ensureErrorAndPrependMessage");var rl;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})(rl||(rl={}));var b;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(b||(b={}));var F;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(F||(F={}));F.ClientError,F.ServerError;b.Continue+"",F.Information,b.SwitchingProtocols+"",F.Information,b.Processing+"",F.Information,b.EarlyHints+"",F.Information,b.Ok+"",F.Success,b.Created+"",F.Success,b.Accepted+"",F.Success,b.NonAuthoritativeInformation+"",F.Success,b.NoContent+"",F.Success,b.ResetContent+"",F.Success,b.PartialContent+"",F.Success,b.MultiStatus+"",F.Success,b.AlreadyReported+"",F.Success,b.ImUsed+"",F.Success,b.MultipleChoices+"",F.Redirect,b.MovedPermanently+"",F.Redirect,b.Found+"",F.Redirect,b.SeeOther+"",F.Redirect,b.NotModified+"",F.Redirect,b.UseProxy+"",F.Redirect,b.Unused+"",F.Redirect,b.TemporaryRedirect+"",F.Redirect,b.PermanentRedirect+"",F.Redirect,b.BadRequest+"",F.ClientError,b.Unauthorized+"",F.ClientError,b.PaymentRequired+"",F.ClientError,b.Forbidden+"",F.ClientError,b.NotFound+"",F.ClientError,b.MethodNotAllowed+"",F.ClientError,b.NotAcceptable+"",F.ClientError,b.ProxyAuthenticationRequired+"",F.ClientError,b.RequestTimeout+"",F.ClientError,b.Conflict+"",F.ClientError,b.Gone+"",F.ClientError,b.LengthRequired+"",F.ClientError,b.PreconditionFailed+"",F.ClientError,b.PayloadTooLarge+"",F.ClientError,b.UriTooLong+"",F.ClientError,b.UnsupportedMediaType+"",F.ClientError,b.RangeNotSatisfiable+"",F.ClientError,b.ExpectationFailed+"",F.ClientError,b.ImATeapot+"",F.ClientError,b.MisdirectedRequest+"",F.ClientError,b.UnprocessableContent+"",F.ClientError,b.Locked+"",F.ClientError,b.FailedDependency+"",F.ClientError,b.TooEarly+"",F.ClientError,b.UpgradeRequired+"",F.ClientError,b.PreconditionRequired+"",F.ClientError,b.TooManyRequests+"",F.ClientError,b.RequestHeaderFieldsTooLarge+"",F.ClientError,b.UnavailableForLegalReasons+"",F.ClientError,b.InternalServerError+"",F.ServerError,b.NotImplemented+"",F.ServerError,b.BadGateway+"",F.ServerError,b.ServiceUnavailable+"",F.ServerError,b.GatewayTimeout+"",F.ServerError,b.HttpVersionNotSupported+"",F.ServerError,b.VariantAlsoNegotiates+"",F.ServerError,b.InsufficientStorage+"",F.ServerError,b.LoopDetected+"",F.ServerError,b.NotExtended+"",F.ServerError,b.NetworkAuthenticationRequired+"",F.ServerError;const rs={[F.Information]:[b.Continue,b.SwitchingProtocols,b.Processing,b.EarlyHints],[F.Success]:[b.Ok,b.Created,b.Accepted,b.NonAuthoritativeInformation,b.NoContent,b.ResetContent,b.PartialContent,b.MultiStatus,b.AlreadyReported,b.ImUsed],[F.Redirect]:[b.MultipleChoices,b.MovedPermanently,b.Found,b.SeeOther,b.NotModified,b.UseProxy,b.Unused,b.TemporaryRedirect,b.PermanentRedirect],[F.ClientError]:[b.BadRequest,b.Unauthorized,b.PaymentRequired,b.Forbidden,b.NotFound,b.MethodNotAllowed,b.NotAcceptable,b.ProxyAuthenticationRequired,b.RequestTimeout,b.Conflict,b.Gone,b.LengthRequired,b.PreconditionFailed,b.PayloadTooLarge,b.UriTooLong,b.UnsupportedMediaType,b.RangeNotSatisfiable,b.ExpectationFailed,b.ImATeapot,b.MisdirectedRequest,b.UnprocessableContent,b.Locked,b.FailedDependency,b.TooEarly,b.UpgradeRequired,b.PreconditionRequired,b.TooManyRequests,b.RequestHeaderFieldsTooLarge,b.UnavailableForLegalReasons],[F.ServerError]:[b.InternalServerError,b.NotImplemented,b.BadGateway,b.ServiceUnavailable,b.GatewayTimeout,b.HttpVersionNotSupported,b.VariantAlsoNegotiates,b.InsufficientStorage,b.LoopDetected,b.NotExtended,b.NetworkAuthenticationRequired]};function df({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}o(df,"ensureMinMax");class tu{static{o(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Be(r))}})}}class jn extends Error{static{o(this,"LuxonError")}}class Fp extends jn{static{o(this,"InvalidDateTimeError")}constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Tp extends jn{static{o(this,"InvalidIntervalError")}constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Np extends jn{static{o(this,"InvalidDurationError")}constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class rr extends jn{static{o(this,"ConflictingSpecificationError")}}class ff extends jn{static{o(this,"InvalidUnitError")}constructor(t){super(`Invalid unit ${t}`)}}class Fe extends jn{static{o(this,"InvalidArgumentError")}}class nn extends jn{static{o(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const x="numeric",$t="short",st="long",ms={year:x,month:x,day:x},hf={year:x,month:$t,day:x},Bp={year:x,month:$t,day:x,weekday:$t},mf={year:x,month:st,day:x},pf={year:x,month:st,day:x,weekday:st},gf={hour:x,minute:x},yf={hour:x,minute:x,second:x},wf={hour:x,minute:x,second:x,timeZoneName:$t},bf={hour:x,minute:x,second:x,timeZoneName:st},vf={hour:x,minute:x,hourCycle:"h23"},Df={hour:x,minute:x,second:x,hourCycle:"h23"},Ef={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:$t},Af={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:st},Cf={year:x,month:x,day:x,hour:x,minute:x},$f={year:x,month:x,day:x,hour:x,minute:x,second:x},Sf={year:x,month:$t,day:x,hour:x,minute:x},Mf={year:x,month:$t,day:x,hour:x,minute:x,second:x},Pp={year:x,month:$t,day:x,weekday:$t,hour:x,minute:x},kf={year:x,month:st,day:x,hour:x,minute:x,timeZoneName:$t},xf={year:x,month:st,day:x,hour:x,minute:x,second:x,timeZoneName:$t},Ff={year:x,month:st,day:x,weekday:st,hour:x,minute:x,timeZoneName:st},Tf={year:x,month:st,day:x,weekday:st,hour:x,minute:x,second:x,timeZoneName:st};class yi{static{o(this,"Zone")}get type(){throw new nn}get name(){throw new nn}get ianaName(){return this.name}get isUniversal(){throw new nn}offsetName(t,n){throw new nn}formatOffset(t,n){throw new nn}offset(t){throw new nn}equals(t){throw new nn}get isValid(){throw new nn}}let $o=null;class qs extends yi{static{o(this,"SystemZone")}static get instance(){return $o===null&&($o=new qs),$o}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Wf(t,n,r)}formatOffset(t,n){return Xr(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const pa=new Map;function Lp(e){let t=pa.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),pa.set(e,t)),t}o(Lp,"makeDTF");const Ip={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Rp(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,a,u,l,c,d]=r;return[a,i,s,u,l,c,d]}o(Rp,"hackyOffset");function Op(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:a}=n[i],u=Ip[s];s==="era"?r[u]=a:O(u)||(r[u]=parseInt(a,10))}return r}o(Op,"partsOffset");const So=new Map;class Zt extends yi{static{o(this,"IANAZone")}static create(t){let n=So.get(t);return n===void 0&&So.set(t,n=new Zt(t)),n}static resetCache(){So.clear(),pa.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Zt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Wf(t,n,r,this.name)}formatOffset(t,n){return Xr(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=Lp(this.name);let[i,s,a,u,l,c,d]=r.formatToParts?Op(r,n):Rp(r,n);u==="BC"&&(i=-Math.abs(i)+1);const p=Gs({year:i,month:s,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let g=+n;const y=g%1e3;return g-=y>=0?y:1e3+y,(p-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let il={};function Vp(e,t={}){const n=JSON.stringify([e,t]);let r=il[n];return r||(r=new Intl.ListFormat(e,t),il[n]=r),r}o(Vp,"getCachedLF");const ga=new Map;function ya(e,t={}){const n=JSON.stringify([e,t]);let r=ga.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),ga.set(n,r)),r}o(ya,"getCachedDTF");const wa=new Map;function _p(e,t={}){const n=JSON.stringify([e,t]);let r=wa.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),wa.set(n,r)),r}o(_p,"getCachedINF");const ba=new Map;function Up(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=ba.get(i);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,t),ba.set(i,s)),s}o(Up,"getCachedRTF");let jr=null;function Wp(){return jr||(jr=new Intl.DateTimeFormat().resolvedOptions().locale,jr)}o(Wp,"systemLocale");const va=new Map;function Nf(e){let t=va.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),va.set(e,t)),t}o(Nf,"getCachedIntResolvedOptions");const Da=new Map;function jp(e){let t=Da.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...Bf,...t}),Da.set(e,t)}return t}o(jp,"getCachedWeekInfo");function qp(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=ya(e).resolvedOptions(),i=e}catch{const l=e.substring(0,n);r=ya(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:a}=r;return[i,s,a]}}o(qp,"parseLocaleString");function zp(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}o(zp,"intlConfigString");function Gp(e){const t=[];for(let n=1;n<=12;n++){const r=L.utc(2009,n,1);t.push(e(r))}return t}o(Gp,"mapMonths");function Kp(e){const t=[];for(let n=1;n<=7;n++){const r=L.utc(2016,11,13+n);t.push(e(r))}return t}o(Kp,"mapWeekdays");function Bi(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}o(Bi,"listStuff");function Hp(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Nf(e.locale).numberingSystem==="latn"}o(Hp,"supportsFastNumbers");class Zp{static{o(this,"PolyNumberFormatter")}constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...a}=r;if(!n||Object.keys(a).length>0){const u={useGrouping:!1,...r};r.padTo>0&&(u.minimumIntegerDigits=r.padTo),this.inf=_p(t,u)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):ou(t,3);return ve(n,this.padTo)}}}class Yp{static{o(this,"PolyDateFormatter")}constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),u=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&Zt.create(u).valid?(i=u,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=ya(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Jp{static{o(this,"PolyRelFormatter")}constructor(t,n,r){this.opts={style:"long",...r},!n&&_f()&&(this.rtf=Up(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):bg(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Bf={firstDay:1,minimalDays:4,weekend:[6,7]};class te{static{o(this,"Locale")}static fromOpts(t){return te.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const a=t||le.defaultLocale,u=a||(s?"en-US":Wp()),l=n||le.defaultNumberingSystem,c=r||le.defaultOutputCalendar,d=Aa(i)||le.defaultWeekSettings;return new te(u,l,c,d,a)}static resetCache(){jr=null,ga.clear(),wa.clear(),ba.clear(),va.clear(),Da.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return te.create(t,n,r,i)}constructor(t,n,r,i,s){const[a,u,l]=qp(t);this.locale=a,this.numberingSystem=n||u||null,this.outputCalendar=r||l||null,this.weekSettings=i,this.intl=zp(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Hp(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:te.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Aa(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Bi(this,t,zf,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Gp(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return Bi(this,t,Hf,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Kp(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Bi(this,void 0,()=>Zf,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[L.utc(2016,11,13,9),L.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Bi(this,t,Yf,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[L.utc(-40,1,1),L.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),a=s.find(u=>u.type.toLowerCase()===r);return a?a.value:null}numberFormatter(t={}){return new Zp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Yp(t,this.intl,n)}relFormatter(t={}){return new Jp(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Vp(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Nf(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Uf()?jp(this.locale):Bf}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Mo=null;class Ue extends yi{static{o(this,"FixedOffsetZone")}static get utcInstance(){return Mo===null&&(Mo=new Ue(0)),Mo}static instance(t){return t===0?Ue.utcInstance:new Ue(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ue(Ks(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Xr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Xr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return Xr(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Xp extends yi{static{o(this,"InvalidZone")}constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ln(e,t){if(O(e)||e===null)return t;if(e instanceof yi)return e;if(ig(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?qs.instance:n==="utc"||n==="gmt"?Ue.utcInstance:Ue.parseSpecifier(n)||Zt.create(e)}else return fn(e)?Ue.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Xp(e)}o(ln,"normalizeZone");const nu={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},sl={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Qp=nu.hanidec.replace(/[\[|\]]/g,"").split("");function eg(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(nu.hanidec)!==-1)t+=Qp.indexOf(e[n]);else for(const i in sl){const[s,a]=sl[i];r>=s&&r<=a&&(t+=r-s)}}return parseInt(t,10)}else return t}o(eg,"parseDigits");const Ea=new Map;function tg(){Ea.clear()}o(tg,"resetDigitRegexCache");function bt({numberingSystem:e},t=""){const n=e||"latn";let r=Ea.get(n);r===void 0&&(r=new Map,Ea.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${nu[n]}${t}`),r.set(t,i)),i}o(bt,"digitRegex");let ol=o(()=>Date.now(),"now"),al="system",ul=null,ll=null,cl=null,dl=60,fl,hl=null;class le{static{o(this,"Settings")}static get now(){return ol}static set now(t){ol=t}static set defaultZone(t){al=t}static get defaultZone(){return ln(al,qs.instance)}static get defaultLocale(){return ul}static set defaultLocale(t){ul=t}static get defaultNumberingSystem(){return ll}static set defaultNumberingSystem(t){ll=t}static get defaultOutputCalendar(){return cl}static set defaultOutputCalendar(t){cl=t}static get defaultWeekSettings(){return hl}static set defaultWeekSettings(t){hl=Aa(t)}static get twoDigitCutoffYear(){return dl}static set twoDigitCutoffYear(t){dl=t%100}static get throwOnInvalid(){return fl}static set throwOnInvalid(t){fl=t}static resetCaches(){te.resetCache(),Zt.resetCache(),L.resetCache(),tg()}}class At{static{o(this,"Invalid")}constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Pf=[0,31,59,90,120,151,181,212,243,273,304,334],Lf=[0,31,60,91,121,152,182,213,244,274,305,335];function ft(e,t){return new At("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}o(ft,"unitOutOfRange");function ru(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}o(ru,"dayOfWeek");function If(e,t,n){return n+(wi(e)?Lf:Pf)[t-1]}o(If,"computeOrdinal");function Rf(e,t){const n=wi(e)?Lf:Pf,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}o(Rf,"uncomputeOrdinal");function iu(e,t){return(e-t+7)%7+1}o(iu,"isoWeekdayToLocal");function ps(e,t=4,n=1){const{year:r,month:i,day:s}=e,a=If(r,i,s),u=iu(ru(r,i,s),n);let l=Math.floor((a-u+14-t)/7),c;return l<1?(c=r-1,l=ri(c,t,n)):l>ri(r,t,n)?(c=r+1,l=1):c=r,{weekYear:c,weekNumber:l,weekday:u,...Hs(e)}}o(ps,"gregorianToWeek");function ml(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,a=iu(ru(r,1,t),n),u=or(r);let l=i*7+s-a-7+t,c;l<1?(c=r-1,l+=or(c)):l>u?(c=r+1,l-=or(r)):c=r;const{month:d,day:f}=Rf(c,l);return{year:c,month:d,day:f,...Hs(e)}}o(ml,"weekToGregorian");function ko(e){const{year:t,month:n,day:r}=e,i=If(t,n,r);return{year:t,ordinal:i,...Hs(e)}}o(ko,"gregorianToOrdinal");function pl(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Rf(t,n);return{year:t,month:r,day:i,...Hs(e)}}o(pl,"ordinalToGregorian");function gl(e,t){if(!O(e.localWeekday)||!O(e.localWeekNumber)||!O(e.localWeekYear)){if(!O(e.weekday)||!O(e.weekNumber)||!O(e.weekYear))throw new rr("Cannot mix locale-based week fields with ISO-based week fields");return O(e.localWeekday)||(e.weekday=e.localWeekday),O(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),O(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}o(gl,"usesLocalWeekValues");function ng(e,t=4,n=1){const r=zs(e.weekYear),i=ht(e.weekNumber,1,ri(e.weekYear,t,n)),s=ht(e.weekday,1,7);return r?i?s?!1:ft("weekday",e.weekday):ft("week",e.weekNumber):ft("weekYear",e.weekYear)}o(ng,"hasInvalidWeekData");function rg(e){const t=zs(e.year),n=ht(e.ordinal,1,or(e.year));return t?n?!1:ft("ordinal",e.ordinal):ft("year",e.year)}o(rg,"hasInvalidOrdinalData");function Of(e){const t=zs(e.year),n=ht(e.month,1,12),r=ht(e.day,1,gs(e.year,e.month));return t?n?r?!1:ft("day",e.day):ft("month",e.month):ft("year",e.year)}o(Of,"hasInvalidGregorianData");function Vf(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=ht(t,0,23)||t===24&&n===0&&r===0&&i===0,a=ht(n,0,59),u=ht(r,0,59),l=ht(i,0,999);return s?a?u?l?!1:ft("millisecond",i):ft("second",r):ft("minute",n):ft("hour",t)}o(Vf,"hasInvalidTimeData");function O(e){return typeof e>"u"}o(O,"isUndefined");function fn(e){return typeof e=="number"}o(fn,"isNumber");function zs(e){return typeof e=="number"&&e%1===0}o(zs,"isInteger");function ig(e){return typeof e=="string"}o(ig,"isString$1");function sg(e){return Object.prototype.toString.call(e)==="[object Date]"}o(sg,"isDate$1");function _f(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}o(_f,"hasRelative");function Uf(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}o(Uf,"hasLocaleWeekInfo");function og(e){return Array.isArray(e)?e:[e]}o(og,"maybeArray");function yl(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}o(yl,"bestBy");function ag(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}o(ag,"pick");function hr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}o(hr,"hasOwnProperty");function Aa(e){if(e==null)return null;if(typeof e!="object")throw new Fe("Week settings must be an object");if(!ht(e.firstDay,1,7)||!ht(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!ht(t,1,7)))throw new Fe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}o(Aa,"validateWeekSettings");function ht(e,t,n){return zs(e)&&e>=t&&e<=n}o(ht,"integerBetween");function ug(e,t){return e-t*Math.floor(e/t)}o(ug,"floorMod");function ve(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}o(ve,"padStart");function an(e){if(!(O(e)||e===null||e===""))return parseInt(e,10)}o(an,"parseInteger");function $n(e){if(!(O(e)||e===null||e===""))return parseFloat(e)}o($n,"parseFloating");function su(e){if(!(O(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}o(su,"parseMillis");function ou(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}o(ou,"roundTo");function wi(e){return e%4===0&&(e%100!==0||e%400===0)}o(wi,"isLeapYear");function or(e){return wi(e)?366:365}o(or,"daysInYear");function gs(e,t){const n=ug(t-1,12)+1,r=e+(t-n)/12;return n===2?wi(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}o(gs,"daysInMonth");function Gs(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}o(Gs,"objToLocalTS");function wl(e,t,n){return-iu(ru(e,1,t),n)+t-1}o(wl,"firstWeekOffset");function ri(e,t=4,n=1){const r=wl(e,t,n),i=wl(e+1,t,n);return(or(e)-r+i)/7}o(ri,"weeksInWeekYear");function Ca(e){return e>99?e:e>le.twoDigitCutoffYear?1900+e:2e3+e}o(Ca,"untruncateYear");function Wf(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const a={timeZoneName:t,...s},u=new Intl.DateTimeFormat(n,a).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return u?u.value:null}o(Wf,"parseZoneInfo");function Ks(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}o(Ks,"signedOffset");function jf(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Fe(`Invalid unit value ${e}`);return t}o(jf,"asNumber");function ys(e,t){const n={};for(const r in e)if(hr(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=jf(i)}return n}o(ys,"normalizeObject");function Xr(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ve(n,2)}:${ve(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${ve(n,2)}${ve(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}o(Xr,"formatOffset");function Hs(e){return ag(e,["hour","minute","second","millisecond"])}o(Hs,"timeObject");const lg=["January","February","March","April","May","June","July","August","September","October","November","December"],qf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cg=["J","F","M","A","M","J","J","A","S","O","N","D"];function zf(e){switch(e){case"narrow":return[...cg];case"short":return[...qf];case"long":return[...lg];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}o(zf,"months");const Gf=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Kf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],dg=["M","T","W","T","F","S","S"];function Hf(e){switch(e){case"narrow":return[...dg];case"short":return[...Kf];case"long":return[...Gf];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}o(Hf,"weekdays");const Zf=["AM","PM"],fg=["Before Christ","Anno Domini"],hg=["BC","AD"],mg=["B","A"];function Yf(e){switch(e){case"narrow":return[...mg];case"short":return[...hg];case"long":return[...fg];default:return null}}o(Yf,"eras");function pg(e){return Zf[e.hour<12?0:1]}o(pg,"meridiemForDateTime");function gg(e,t){return Hf(t)[e.weekday-1]}o(gg,"weekdayForDateTime");function yg(e,t){return zf(t)[e.month-1]}o(yg,"monthForDateTime");function wg(e,t){return Yf(t)[e.year<0?0:1]}o(wg,"eraForDateTime");function bg(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const a=Object.is(t,-0)||t<0,u=Math.abs(t),l=u===1,c=i[e],d=r?l?c[1]:c[2]||c[1]:l?i[e][0]:e;return a?`${u} ${d} ago`:`in ${u} ${d}`}o(bg,"formatRelativeTime");function bl(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}o(bl,"stringifyTokens");const vg={D:ms,DD:hf,DDD:mf,DDDD:pf,t:gf,tt:yf,ttt:wf,tttt:bf,T:vf,TT:Df,TTT:Ef,TTTT:Af,f:Cf,ff:Sf,fff:kf,ffff:Ff,F:$f,FF:Mf,FFF:xf,FFFF:Tf};class Ne{static{o(this,"Formatter")}static create(t,n={}){return new Ne(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let a=0;a<t.length;a++){const u=t.charAt(a);u==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||u===n?r+=u:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=u,n=u)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return vg[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return ve(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=o((g,y)=>this.loc.extract(t,g,y),"string"),a=o(g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"","formatOffset"),u=o(()=>r?pg(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),l=o((g,y)=>r?yg(t,g):s(y?{month:g}:{month:g,day:"numeric"},"month"),"month"),c=o((g,y)=>r?gg(t,g):s(y?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),"weekday"),d=o(g=>{const y=Ne.macroTokenToFormatOpts(g);return y?this.formatWithSystemDefault(t,y):g},"maybeMacro"),f=o(g=>r?wg(t,g):s({era:g},"era"),"era"),p=o(g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return u();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}},"tokenToString");return bl(Ne.parseFormat(n),p)}formatDurationFromString(t,n){const r=o(l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},"tokenToField"),i=o(l=>c=>{const d=r(c);return d?this.num(l.get(d),c.length):c},"tokenToString"),s=Ne.parseFormat(n),a=s.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),u=t.shiftTo(...a.map(r).filter(l=>l));return bl(s,i(u))}}const Jf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Sr(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}o(Sr,"combineRegexes");function Mr(...e){return t=>e.reduce(([n,r,i],s)=>{const[a,u,l]=s(t,i);return[{...n,...a},u||r,l]},[{},null,1]).slice(0,2)}o(Mr,"combineExtractors");function kr(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}o(kr,"parse$1");function Xf(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=an(t[n+i]);return[r,null,n+i]}}o(Xf,"simpleParse");const Qf=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Dg=`(?:${Qf.source}?(?:\\[(${Jf.source})\\])?)?`,au=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,eh=RegExp(`${au.source}${Dg}`),uu=RegExp(`(?:T${eh.source})?`),Eg=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ag=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Cg=/(\d{4})-?(\d{3})/,$g=Xf("weekYear","weekNumber","weekDay"),Sg=Xf("year","ordinal"),Mg=/(\d{4})-(\d\d)-(\d\d)/,th=RegExp(`${au.source} ?(?:${Qf.source}|(${Jf.source}))?`),kg=RegExp(`(?: ${th.source})?`);function ar(e,t,n){const r=e[t];return O(r)?n:an(r)}o(ar,"int");function xg(e,t){return[{year:ar(e,t),month:ar(e,t+1,1),day:ar(e,t+2,1)},null,t+3]}o(xg,"extractISOYmd");function xr(e,t){return[{hours:ar(e,t,0),minutes:ar(e,t+1,0),seconds:ar(e,t+2,0),milliseconds:su(e[t+3])},null,t+4]}o(xr,"extractISOTime");function bi(e,t){const n=!e[t]&&!e[t+1],r=Ks(e[t+1],e[t+2]),i=n?null:Ue.instance(r);return[{},i,t+3]}o(bi,"extractISOOffset");function vi(e,t){const n=e[t]?Zt.create(e[t]):null;return[{},n,t+1]}o(vi,"extractIANAZone");const Fg=RegExp(`^T?${au.source}$`),Tg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Ng(e){const[t,n,r,i,s,a,u,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",p=o((g,y=!1)=>g!==void 0&&(y||g&&d)?-g:g,"maybeNegate");return[{years:p($n(n)),months:p($n(r)),weeks:p($n(i)),days:p($n(s)),hours:p($n(a)),minutes:p($n(u)),seconds:p($n(l),l==="-0"),milliseconds:p(su(c),f)}]}o(Ng,"extractISODuration");const Bg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function lu(e,t,n,r,i,s,a){const u={year:t.length===2?Ca(an(t)):an(t),month:qf.indexOf(n)+1,day:an(r),hour:an(i),minute:an(s)};return a&&(u.second=an(a)),e&&(u.weekday=e.length>3?Gf.indexOf(e)+1:Kf.indexOf(e)+1),u}o(lu,"fromStrings");const Pg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Lg(e){const[,t,n,r,i,s,a,u,l,c,d,f]=e,p=lu(t,i,r,n,s,a,u);let g;return l?g=Bg[l]:c?g=0:g=Ks(d,f),[p,new Ue(g)]}o(Lg,"extractRFC2822");function Ig(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}o(Ig,"preprocessRFC2822");const Rg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Og=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Vg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function vl(e){const[,t,n,r,i,s,a,u]=e;return[lu(t,i,r,n,s,a,u),Ue.utcInstance]}o(vl,"extractRFC1123Or850");function _g(e){const[,t,n,r,i,s,a,u]=e;return[lu(t,u,n,r,i,s,a),Ue.utcInstance]}o(_g,"extractASCII");const Ug=Sr(Eg,uu),Wg=Sr(Ag,uu),jg=Sr(Cg,uu),qg=Sr(eh),nh=Mr(xg,xr,bi,vi),zg=Mr($g,xr,bi,vi),Gg=Mr(Sg,xr,bi,vi),Kg=Mr(xr,bi,vi);function Hg(e){return kr(e,[Ug,nh],[Wg,zg],[jg,Gg],[qg,Kg])}o(Hg,"parseISODate");function Zg(e){return kr(Ig(e),[Pg,Lg])}o(Zg,"parseRFC2822Date");function Yg(e){return kr(e,[Rg,vl],[Og,vl],[Vg,_g])}o(Yg,"parseHTTPDate");function Jg(e){return kr(e,[Tg,Ng])}o(Jg,"parseISODuration");const Xg=Mr(xr);function Qg(e){return kr(e,[Fg,Xg])}o(Qg,"parseISOTimeOnly");const ey=Sr(Mg,kg),ty=Sr(th),ny=Mr(xr,bi,vi);function ry(e){return kr(e,[ey,nh],[ty,ny])}o(ry,"parseSQL");const Dl="Invalid Duration",rh={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},iy={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...rh},lt=146097/400,Gn=146097/4800,sy={years:{quarters:4,months:12,weeks:lt/7,days:lt,hours:lt*24,minutes:lt*24*60,seconds:lt*24*60*60,milliseconds:lt*24*60*60*1e3},quarters:{months:3,weeks:lt/28,days:lt/4,hours:lt*24/4,minutes:lt*24*60/4,seconds:lt*24*60*60/4,milliseconds:lt*24*60*60*1e3/4},months:{weeks:Gn/7,days:Gn,hours:Gn*24,minutes:Gn*24*60,seconds:Gn*24*60*60,milliseconds:Gn*24*60*60*1e3},...rh},Bn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],oy=Bn.slice(0).reverse();function rn(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new K(r)}o(rn,"clone$2");function ih(e,t){let n=t.milliseconds??0;for(const r of oy.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}o(ih,"durationToMillis");function El(e,t){const n=ih(e,t)<0?-1:1;Bn.reduceRight((r,i)=>{if(O(t[i]))return r;if(r){const s=t[r]*n,a=e[i][r],u=Math.floor(s/a);t[i]+=u*n,t[r]-=u*a*n}return i},null),Bn.reduce((r,i)=>{if(O(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}o(El,"normalizeValues");function ay(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}o(ay,"removeZeroes");class K{static{o(this,"Duration")}constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?sy:iy;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||te.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return K.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Fe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new K({values:ys(t,K.normalizeUnit),loc:te.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(fn(t))return K.fromMillis(t);if(K.isDuration(t))return t;if(typeof t=="object")return K.fromObject(t);throw new Fe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Jg(t);return r?K.fromObject(r,n):K.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Qg(t);return r?K.fromObject(r,n):K.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Fe("need to specify a reason the Duration is invalid");const r=t instanceof At?t:new At(t,n);if(le.throwOnInvalid)throw new Np(r);return new K({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new ff(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Ne.create(this.loc,r).formatDurationFromString(this,t):Dl}toHuman(t={}){if(!this.isValid)return Dl;const n=Bn.map(r=>{const i=this.values[r];return O(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ou(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},L.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ih(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=K.fromDurationLike(t),r={};for(const i of Bn)(hr(n.values,i)||hr(this.values,i))&&(r[i]=n.get(i)+this.get(i));return rn(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=K.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=jf(t(this.values[r],r));return rn(this,{values:n},!0)}get(t){return this[K.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...ys(t,K.normalizeUnit)};return rn(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return rn(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return El(this.matrix,t),rn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=ay(this.normalize().shiftToAll().toObject());return rn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>K.normalizeUnit(a));const n={},r={},i=this.toObject();let s;for(const a of Bn)if(t.indexOf(a)>=0){s=a;let u=0;for(const c in r)u+=this.matrix[c][a]*r[c],r[c]=0;fn(i[a])&&(u+=i[a]);const l=Math.trunc(u);n[a]=l,r[a]=(u*1e3-l*1e3)/1e3}else fn(i[a])&&(r[a]=i[a]);for(const a in r)r[a]!==0&&(n[s]+=a===s?r[a]:r[a]/this.matrix[s][a]);return El(this.matrix,n),rn(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return rn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}o(n,"eq");for(const r of Bn)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Kn="Invalid Interval";function uy(e,t){return!e||!e.isValid?ge.invalid("missing or invalid start"):!t||!t.isValid?ge.invalid("missing or invalid end"):t<e?ge.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}o(uy,"validateStartEnd");class ge{static{o(this,"Interval")}constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Fe("need to specify a reason the Interval is invalid");const r=t instanceof At?t:new At(t,n);if(le.throwOnInvalid)throw new Tp(r);return new ge({invalid:r})}static fromDateTimes(t,n){const r=Br(t),i=Br(n),s=uy(r,i);return s??new ge({start:r,end:i})}static after(t,n){const r=K.fromDurationLike(n),i=Br(t);return ge.fromDateTimes(i,i.plus(r))}static before(t,n){const r=K.fromDurationLike(n),i=Br(t);return ge.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,a;try{s=L.fromISO(r,n),a=s.isValid}catch{a=!1}let u,l;try{u=L.fromISO(i,n),l=u.isValid}catch{l=!1}if(a&&l)return ge.fromDateTimes(s,u);if(a){const c=K.fromISO(i,n);if(c.isValid)return ge.after(s,c)}else if(l){const c=K.fromISO(r,n);if(c.isValid)return ge.before(u,c)}}return ge.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?ge.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Br).filter(a=>this.contains(a)).sort((a,u)=>a.toMillis()-u.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const a=n[s]||this.e,u=+a>+this.e?this.e:a;r.push(ge.fromDateTimes(i,u)),i=u,s+=1}return r}splitBy(t){const n=K.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const a=[];for(;r<this.e;){const u=this.start.plus(n.mapUnits(l=>l*i));s=+u>+this.e?this.e:u,a.push(ge.fromDateTimes(r,s)),r=s,i+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:ge.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return ge.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[i,s.union(a)]:[i.concat([s]),a]:[i,a],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...s),u=a.sort((l,c)=>l.time-c.time);for(const l of u)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&i.push(ge.fromDateTimes(n,l.time)),n=null);return ge.merge(i)}difference(...t){return ge.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Kn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ms,n={}){return this.isValid?Ne.create(this.s.loc.clone(n),t).formatInterval(this):Kn}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Kn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Kn}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Kn}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Kn}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):K.invalid(this.invalidReason)}mapEndpoints(t){return ge.fromDateTimes(t(this.s),t(this.e))}}class qr{static{o(this,"Info")}static hasDST(t=le.defaultZone){const n=L.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Zt.isValidZone(t)}static normalizeZone(t){return ln(t,le.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||te.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||te.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||te.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||te.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||te.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||te.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||te.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return te.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return te.create(n,null,"gregory").eras(t)}static features(){return{relative:_f(),localeWeek:Uf()}}}function Al(e,t){const n=o(i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),r=n(t)-n(e);return Math.floor(K.fromMillis(r).as("days"))}o(Al,"dayDiff");function ly(e,t,n){const r=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=Al(l,c);return(d-d%7)/7}],["days",Al]],i={},s=e;let a,u;for(const[l,c]of r)n.indexOf(l)>=0&&(a=l,i[l]=c(e,t),u=s.plus(i),u>t?(i[l]--,e=s.plus(i),e>t&&(u=e,i[l]--,e=s.plus(i))):e=u);return[e,i,u,a]}o(ly,"highOrderDiffs");function cy(e,t,n,r){let[i,s,a,u]=ly(e,t,n);const l=t-i,c=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=i.plus({[u]:1})),a!==i&&(s[u]=(s[u]||0)+l/(a-i)));const d=K.fromObject(s,r);return c.length>0?K.fromMillis(l,r).shiftTo(...c).plus(d):d}o(cy,"diff");const dy="missing Intl.DateTimeFormat.formatToParts support";function X(e,t=n=>n){return{regex:e,deser:o(([n])=>t(eg(n)),"deser")}}o(X,"intUnit");const fy=" ",sh=`[ ${fy}]`,oh=new RegExp(sh,"g");function hy(e){return e.replace(/\./g,"\\.?").replace(oh,sh)}o(hy,"fixListRegex");function Cl(e){return e.replace(/\./g,"").replace(oh," ").toLowerCase()}o(Cl,"stripInsensitivities");function vt(e,t){return e===null?null:{regex:RegExp(e.map(hy).join("|")),deser:o(([n])=>e.findIndex(r=>Cl(n)===Cl(r))+t,"deser")}}o(vt,"oneOf");function $l(e,t){return{regex:e,deser:o(([,n,r])=>Ks(n,r),"deser"),groups:t}}o($l,"offset");function Pi(e){return{regex:e,deser:o(([t])=>t,"deser")}}o(Pi,"simple");function my(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}o(my,"escapeToken");function py(e,t){const n=bt(t),r=bt(t,"{2}"),i=bt(t,"{3}"),s=bt(t,"{4}"),a=bt(t,"{6}"),u=bt(t,"{1,2}"),l=bt(t,"{1,3}"),c=bt(t,"{1,6}"),d=bt(t,"{1,9}"),f=bt(t,"{2,4}"),p=bt(t,"{4,6}"),g=o($=>({regex:RegExp(my($.val)),deser:o(([E])=>E,"deser"),literal:!0}),"literal"),v=o($=>{if(e.literal)return g($);switch($.val){case"G":return vt(t.eras("short"),0);case"GG":return vt(t.eras("long"),0);case"y":return X(c);case"yy":return X(f,Ca);case"yyyy":return X(s);case"yyyyy":return X(p);case"yyyyyy":return X(a);case"M":return X(u);case"MM":return X(r);case"MMM":return vt(t.months("short",!0),1);case"MMMM":return vt(t.months("long",!0),1);case"L":return X(u);case"LL":return X(r);case"LLL":return vt(t.months("short",!1),1);case"LLLL":return vt(t.months("long",!1),1);case"d":return X(u);case"dd":return X(r);case"o":return X(l);case"ooo":return X(i);case"HH":return X(r);case"H":return X(u);case"hh":return X(r);case"h":return X(u);case"mm":return X(r);case"m":return X(u);case"q":return X(u);case"qq":return X(r);case"s":return X(u);case"ss":return X(r);case"S":return X(l);case"SSS":return X(i);case"u":return Pi(d);case"uu":return Pi(u);case"uuu":return X(n);case"a":return vt(t.meridiems(),0);case"kkkk":return X(s);case"kk":return X(f,Ca);case"W":return X(u);case"WW":return X(r);case"E":case"c":return X(n);case"EEE":return vt(t.weekdays("short",!1),1);case"EEEE":return vt(t.weekdays("long",!1),1);case"ccc":return vt(t.weekdays("short",!0),1);case"cccc":return vt(t.weekdays("long",!0),1);case"Z":case"ZZ":return $l(new RegExp(`([+-]${u.source})(?::(${r.source}))?`),2);case"ZZZ":return $l(new RegExp(`([+-]${u.source})(${r.source})?`),2);case"z":return Pi(/[a-z_+-/]{1,256}?/i);case" ":return Pi(/[^\S\n\r]/);default:return g($)}},"unitate")(e)||{invalidReason:dy};return v.token=e,v}o(py,"unitForToken");const gy={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function yy(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=t[r];let a=r;r==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=n.hour12?"hour12":"hour24");let u=gy[a];if(typeof u=="object"&&(u=u[s]),u)return{literal:!1,val:u}}o(yy,"tokenForPart");function wy(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}o(wy,"buildRegex");function by(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const a in n)if(hr(n,a)){const u=n[a],l=u.groups?u.groups+1:1;!u.literal&&u.token&&(i[u.token.val[0]]=u.deser(r.slice(s,s+l))),s+=l}return[r,i]}else return[r,{}]}o(by,"match");function vy(e){const t=o(s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let n=null,r;return O(e.z)||(n=Zt.create(e.z)),O(e.Z)||(n||(n=new Ue(e.Z)),r=e.Z),O(e.q)||(e.M=(e.q-1)*3+1),O(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),O(e.u)||(e.S=su(e.u)),[Object.keys(e).reduce((s,a)=>{const u=t(a);return u&&(s[u]=e[a]),s},{}),n,r]}o(vy,"dateTimeFromMatches");let xo=null;function Dy(){return xo||(xo=L.fromMillis(1555555555555)),xo}o(Dy,"getDummyDateTime");function Ey(e,t){if(e.literal)return e;const n=Ne.macroTokenToFormatOpts(e.val),r=ch(n,t);return r==null||r.includes(void 0)?e:r}o(Ey,"maybeExpandMacroToken");function ah(e,t){return Array.prototype.concat(...e.map(n=>Ey(n,t)))}o(ah,"expandMacroTokens");class uh{static{o(this,"TokenParser")}constructor(t,n){if(this.locale=t,this.format=n,this.tokens=ah(Ne.parseFormat(n),t),this.units=this.tokens.map(r=>py(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=wy(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=by(t,this.regex,this.handlers),[i,s,a]=r?vy(r):[null,null,void 0];if(hr(r,"a")&&hr(r,"H"))throw new rr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:a}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function lh(e,t,n){return new uh(e,n).explainFromTokens(t)}o(lh,"explainFromTokens");function Ay(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:a}=lh(e,t,n);return[r,i,s,a]}o(Ay,"parseFromTokens");function ch(e,t){if(!e)return null;const r=Ne.create(t,e).dtFormatter(Dy()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(a=>yy(a,e,s))}o(ch,"formatOptsToTokens");const Fo="Invalid DateTime",Cy=864e13;function zr(e){return new At("unsupported zone",`the zone "${e.name}" is not supported`)}o(zr,"unsupportedZone");function To(e){return e.weekData===null&&(e.weekData=ps(e.c)),e.weekData}o(To,"possiblyCachedWeekData");function No(e){return e.localWeekData===null&&(e.localWeekData=ps(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}o(No,"possiblyCachedLocalWeekData");function Sn(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new L({...n,...t,old:n})}o(Sn,"clone$1");function dh(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}o(dh,"fixOffset");function Li(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}o(Li,"tsToObj");function is(e,t,n){return dh(Gs(e),t,n)}o(is,"objToTS");function Sl(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,gs(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=K.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),u=Gs(s);let[l,c]=dh(u,n,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}o(Sl,"adjustTime");function Hn(e,t,n,r,i,s){const{setZone:a,zone:u}=n;if(e&&Object.keys(e).length!==0||t){const l=t||u,c=L.fromObject(e,{...n,zone:l,specificOffset:s});return a?c:c.setZone(u)}else return L.invalid(new At("unparsable",`the input "${i}" can't be parsed as ${r}`))}o(Hn,"parseDataToDateTime");function Ii(e,t,n=!0){return e.isValid?Ne.create(te.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}o(Ii,"toTechFormat");function Bo(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=ve(e.c.year,n?6:4),t?(r+="-",r+=ve(e.c.month),r+="-",r+=ve(e.c.day)):(r+=ve(e.c.month),r+=ve(e.c.day)),r}o(Bo,"toISODate");function Ml(e,t,n,r,i,s){let a=ve(e.c.hour);return t?(a+=":",a+=ve(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=":")):a+=ve(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=ve(e.c.second),(e.c.millisecond!==0||!r)&&(a+=".",a+=ve(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?a+="Z":e.o<0?(a+="-",a+=ve(Math.trunc(-e.o/60)),a+=":",a+=ve(Math.trunc(-e.o%60))):(a+="+",a+=ve(Math.trunc(e.o/60)),a+=":",a+=ve(Math.trunc(e.o%60)))),s&&(a+="["+e.zone.ianaName+"]"),a}o(Ml,"toISOTime");const fh={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},$y={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Sy={ordinal:1,hour:0,minute:0,second:0,millisecond:0},hh=["year","month","day","hour","minute","second","millisecond"],My=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],ky=["year","ordinal","hour","minute","second","millisecond"];function xy(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new ff(e);return t}o(xy,"normalizeUnit");function kl(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return xy(e)}}o(kl,"normalizeUnitWithLocalWeeks");function Fy(e){if(Gr===void 0&&(Gr=le.now()),e.type!=="iana")return e.offset(Gr);const t=e.name;let n=$a.get(t);return n===void 0&&(n=e.offset(Gr),$a.set(t,n)),n}o(Fy,"guessOffsetForZone");function xl(e,t){const n=ln(t.zone,le.defaultZone);if(!n.isValid)return L.invalid(zr(n));const r=te.fromObject(t);let i,s;if(O(e.year))i=le.now();else{for(const l of hh)O(e[l])&&(e[l]=fh[l]);const a=Of(e)||Vf(e);if(a)return L.invalid(a);const u=Fy(n);[i,s]=is(e,u,n)}return new L({ts:i,zone:n,loc:r,o:s})}o(xl,"quickDT");function Fl(e,t,n){const r=O(n.round)?!0:n.round,i=o((a,u)=>(a=ou(a,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(a,u)),"format"),s=o(a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a),"differ");if(n.unit)return i(s(n.unit),n.unit);for(const a of n.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,n.units[n.units.length-1])}o(Fl,"diffRelative");function Tl(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}o(Tl,"lastOpts");let Gr;const $a=new Map;class L{static{o(this,"DateTime")}constructor(t){const n=t.zone||le.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new At("invalid input"):null)||(n.isValid?null:zr(n));this.ts=O(t.ts)?le.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const u=fn(t.o)&&!t.old?t.o:n.offset(this.ts);i=Li(this.ts,u),r=Number.isNaN(i.year)?new At("invalid input"):null,i=r?null:i,s=r?null:u}this._zone=n,this.loc=t.loc||te.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new L({})}static local(){const[t,n]=Tl(arguments),[r,i,s,a,u,l,c]=n;return xl({year:r,month:i,day:s,hour:a,minute:u,second:l,millisecond:c},t)}static utc(){const[t,n]=Tl(arguments),[r,i,s,a,u,l,c]=n;return t.zone=Ue.utcInstance,xl({year:r,month:i,day:s,hour:a,minute:u,second:l,millisecond:c},t)}static fromJSDate(t,n={}){const r=sg(t)?t.valueOf():NaN;if(Number.isNaN(r))return L.invalid("invalid input");const i=ln(n.zone,le.defaultZone);return i.isValid?new L({ts:r,zone:i,loc:te.fromObject(n)}):L.invalid(zr(i))}static fromMillis(t,n={}){if(fn(t))return t<-864e13||t>Cy?L.invalid("Timestamp out of range"):new L({ts:t,zone:ln(n.zone,le.defaultZone),loc:te.fromObject(n)});throw new Fe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(fn(t))return new L({ts:t*1e3,zone:ln(n.zone,le.defaultZone),loc:te.fromObject(n)});throw new Fe("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=ln(n.zone,le.defaultZone);if(!r.isValid)return L.invalid(zr(r));const i=te.fromObject(n),s=ys(t,kl),{minDaysInFirstWeek:a,startOfWeek:u}=gl(s,i),l=le.now(),c=O(n.specificOffset)?r.offset(l):n.specificOffset,d=!O(s.ordinal),f=!O(s.year),p=!O(s.month)||!O(s.day),g=f||p,y=s.weekYear||s.weekNumber;if((g||d)&&y)throw new rr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&d)throw new rr("Can't mix ordinal dates with month/day");const v=y||s.weekday&&!g;let $,E,k=Li(l,c);v?($=My,E=$y,k=ps(k,a,u)):d?($=ky,E=Sy,k=ko(k)):($=hh,E=fh);let B=!1;for(const kt of $){const Lt=s[kt];O(Lt)?B?s[kt]=E[kt]:s[kt]=k[kt]:B=!0}const R=v?ng(s,a,u):d?rg(s):Of(s),H=R||Vf(s);if(H)return L.invalid(H);const Ie=v?ml(s,a,u):d?pl(s):s,[wt,qe]=is(Ie,c,r),et=new L({ts:wt,zone:r,o:qe,loc:i});return s.weekday&&g&&t.weekday!==et.weekday?L.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${et.toISO()}`):et.isValid?et:L.invalid(et.invalid)}static fromISO(t,n={}){const[r,i]=Hg(t);return Hn(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Zg(t);return Hn(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Yg(t);return Hn(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(O(t)||O(n))throw new Fe("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,a=te.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[u,l,c,d]=Ay(a,t,n);return d?L.invalid(d):Hn(u,l,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return L.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=ry(t);return Hn(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Fe("need to specify a reason the DateTime is invalid");const r=t instanceof At?t:new At(t,n);if(le.throwOnInvalid)throw new Fp(r);return new L({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=ch(t,te.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return ah(Ne.parseFormat(t),te.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Gr=void 0,$a.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?To(this).weekYear:NaN}get weekNumber(){return this.isValid?To(this).weekNumber:NaN}get weekday(){return this.isValid?To(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?No(this).weekday:NaN}get localWeekNumber(){return this.isValid?No(this).weekNumber:NaN}get localWeekYear(){return this.isValid?No(this).weekYear:NaN}get ordinal(){return this.isValid?ko(this.c).ordinal:NaN}get monthShort(){return this.isValid?qr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Gs(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),a=this.zone.offset(r-i*n),u=this.zone.offset(r-s*n);if(a===u)return[this];const l=r-a*n,c=r-u*n,d=Li(l,a),f=Li(c,u);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Sn(this,{ts:l}),Sn(this,{ts:c})]:[this]}get isInLeapYear(){return wi(this.year)}get daysInMonth(){return gs(this.year,this.month)}get daysInYear(){return this.isValid?or(this.year):NaN}get weeksInWeekYear(){return this.isValid?ri(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ri(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Ne.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ue.instance(t),n)}toLocal(){return this.setZone(le.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=ln(t,le.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),a=this.toObject();[i]=is(a,s,t)}return Sn(this,{ts:i,zone:t})}else return L.invalid(zr(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Sn(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=ys(t,kl),{minDaysInFirstWeek:r,startOfWeek:i}=gl(n,this.loc),s=!O(n.weekYear)||!O(n.weekNumber)||!O(n.weekday),a=!O(n.ordinal),u=!O(n.year),l=!O(n.month)||!O(n.day),c=u||l,d=n.weekYear||n.weekNumber;if((c||a)&&d)throw new rr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new rr("Can't mix ordinal dates with month/day");let f;s?f=ml({...ps(this.c,r,i),...n},r,i):O(n.ordinal)?(f={...this.toObject(),...n},O(n.day)&&(f.day=Math.min(gs(f.year,f.month),f.day))):f=pl({...ko(this.c),...n});const[p,g]=is(f,this.o,this.zone);return Sn(this,{ts:p,o:g})}plus(t){if(!this.isValid)return this;const n=K.fromDurationLike(t);return Sn(this,Sl(this,n))}minus(t){if(!this.isValid)return this;const n=K.fromDurationLike(t).negate();return Sn(this,Sl(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=K.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Ne.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Fo}toLocaleString(t=ms,n={}){return this.isValid?Ne.create(this.loc.clone(n),t).formatDateTime(this):Fo}toLocaleParts(t={}){return this.isValid?Ne.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const a=t==="extended";let u=Bo(this,a);return u+="T",u+=Ml(this,a,n,r,i,s),u}toISODate({format:t="extended"}={}){return this.isValid?Bo(this,t==="extended"):null}toISOWeekDate(){return Ii(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:a="extended"}={}){return this.isValid?(i?"T":"")+Ml(this,a==="extended",n,t,r,s):null}toRFC2822(){return Ii(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ii(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Bo(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Ii(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Fo}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return K.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=og(n).map(K.normalizeUnit),a=t.valueOf()>this.valueOf(),u=a?this:t,l=a?t:this,c=cy(u,l,s,i);return a?c.negate():c}diffNow(t="milliseconds",n={}){return this.diff(L.now(),t,n)}until(t){return this.isValid?ge.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||L.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Fl(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Fl(t.base||L.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(L.isDateTime))throw new Fe("min requires all arguments be DateTimes");return yl(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(L.isDateTime))throw new Fe("max requires all arguments be DateTimes");return yl(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,a=te.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return lh(a,t,n)}static fromStringExplain(t,n,r={}){return L.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=te.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new uh(s,t)}static fromFormatParser(t,n,r={}){if(O(t)||O(n))throw new Fe("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,a=te.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!a.equals(n.locale))throw new Fe(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`);const{result:u,zone:l,specificOffset:c,invalidReason:d}=n.explainFromTokens(t);return d?L.invalid(d):Hn(u,l,r,`format ${n.format}`,t,c)}static get DATE_SHORT(){return ms}static get DATE_MED(){return hf}static get DATE_MED_WITH_WEEKDAY(){return Bp}static get DATE_FULL(){return mf}static get DATE_HUGE(){return pf}static get TIME_SIMPLE(){return gf}static get TIME_WITH_SECONDS(){return yf}static get TIME_WITH_SHORT_OFFSET(){return wf}static get TIME_WITH_LONG_OFFSET(){return bf}static get TIME_24_SIMPLE(){return vf}static get TIME_24_WITH_SECONDS(){return Df}static get TIME_24_WITH_SHORT_OFFSET(){return Ef}static get TIME_24_WITH_LONG_OFFSET(){return Af}static get DATETIME_SHORT(){return Cf}static get DATETIME_SHORT_WITH_SECONDS(){return $f}static get DATETIME_MED(){return Sf}static get DATETIME_MED_WITH_SECONDS(){return Mf}static get DATETIME_MED_WITH_WEEKDAY(){return Pp}static get DATETIME_FULL(){return kf}static get DATETIME_FULL_WITH_SECONDS(){return xf}static get DATETIME_HUGE(){return Ff}static get DATETIME_HUGE_WITH_SECONDS(){return Tf}}function Br(e){if(L.isDateTime(e))return e;if(e&&e.valueOf&&fn(e.valueOf()))return L.fromJSDate(e);if(e&&typeof e=="object")return L.fromObject(e);throw new Fe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}o(Br,"friendlyDateTime");var I;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(I||(I={}));I.Years+"",I.Quarters+"",I.Months+"",I.Weeks+"",I.Days+"",I.Hours+"",I.Minutes+"",I.Seconds+"",I.Milliseconds+"";I.Years+"",I.Quarters+"",I.Months+"",I.Weeks+"",I.Days+"",I.Hours+"",I.Minutes+"",I.Seconds+"",I.Milliseconds+"";const mh=[I.Milliseconds,I.Seconds,I.Minutes,I.Hours,I.Days,I.Weeks,I.Months,I.Quarters,I.Years];I.Milliseconds+"",I.Seconds+"",I.Minutes+"",I.Hours+"",I.Days+"",I.Weeks+"",I.Months+"",I.Quarters+"",I.Years+"";function Ty(e){return mh.filter(t=>e[t])}o(Ty,"flattenUnitSelection");function Sa(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}o(Sa,"round");function Ny(e){return Sa(Math.max(e-.4,0),{roundToDigits:0})}o(Ny,"roundNarrow");function Nl(e){return e===0?0:Math.sign(e)}o(Nl,"getSign");function St(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),a=Object.values(e).includes(-1/0);let u=K.fromObject(e).as(I.Milliseconds);const l=Ty(t).reverse(),c=Nl(u);l.forEach((g,y)=>{const v=y===l.length-1;if(s&&a||s)r[g]=1/0;else if(a)r[g]=-1/0;else if(g===I.Milliseconds)r.milliseconds=Sa(u,i);else{const $=K.fromObject({milliseconds:u}).as(g),E=Math.sign($),k=Math.abs($),B=v?Sa(k,i):Math.floor(i.roundToDigits==null?k:Ny(k)),R=B===0?0:B*E;r[g]=R,u-=K.fromObject({[g]:R}).as(I.Milliseconds),c!==Nl(u)&&(u=0)}});let d=!1;const f=[],p=mh.toReversed().filter(g=>r[g]?(d=!0,!0):d?(f.push(g),!1):!0);if(p.length<l.length){const g={};p.forEach(v=>g[v]=!0);const y=St(e,g,i);return f.forEach(v=>y[v]=0),y}return r}o(St,"convertDuration");var N;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(N||(N={}));N.Year,N.Hour,N.Minute,N.Second,N.Millisecond;N.Quarter,N.Month,N.Week,N.Day;N.Millisecond,N.Second,N.Minute,N.Hour,N.Day,N.Week,N.Month,N.Quarter,N.Year;var Te;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Te||(Te={}));Te.Sunday+"",Te.Monday+"",Te.Tuesday+"",Te.Wednesday+"",Te.Thursday+"",Te.Friday+"",Te.Saturday+"";Te.Sunday,Te.Monday,Te.Tuesday,Te.Wednesday,Te.Thursday,Te.Friday,Te.Saturday;var Ge;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Ge||(Ge={}));Ge.January,Ge.February,Ge.March,Ge.April,Ge.May,Ge.June,Ge.July,Ge.August,Ge.September,Ge.October,Ge.November,Ge.December;const ws={min:1,max:12},bs={min:1,max:31},vs={min:0,max:23},Ds={min:0,max:59},Es={min:0,max:59},As={min:0,max:999};function By(e){return Number.isInteger(e)&&ws.min<=e&&e<=ws.max}o(By,"isValidMonthNumber");function Py(e){return Number.isInteger(e)&&bs.min<=e&&e<=bs.max}o(Py,"isValidDayOfMonth");function Ly(e){return Number.isInteger(e)&&vs.min<=e&&e<=vs.max}o(Ly,"isValidHour");function Iy(e){return Number.isInteger(e)&&Ds.min<=e&&e<=Ds.max}o(Iy,"isValidMinute");function Ry(e){return Number.isInteger(e)&&Es.min<=e&&e<=Es.max}o(Ry,"isValidSecond");function Oy(e){return Number.isInteger(e)&&As.min<=e&&e<=As.max}o(Oy,"isValidMillisecond");function Vy(e,t){if(!By(e))throw new h(`${e} is not a valid month number.`,t);return e}o(Vy,"assertWrapMonthNumber");function _y(e,t){if(!Py(e))throw new h(`${e} is not a valid day of month.`,t);return e}o(_y,"assertWrapDayOfMonth");function Uy(e,t){if(!Ly(e))throw new h(`${e} is not a valid hour.`,t);return e}o(Uy,"assertWrapHour");function Wy(e,t){if(!Iy(e))throw new h(`${e} is not a valid minute.`,t);return e}o(Wy,"assertWrapMinute");function jy(e,t){if(!Ry(e))throw new h(`${e} is not a valid second.`,t);return e}o(jy,"assertWrapSecond");function qy(e,t){if(!Oy(e))throw new h(`${e} is not a valid millisecond.`,t);return e}o(qy,"assertWrapMillisecond");function ii(e){const t=new tu,n=St(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}o(ii,"wait");var zy=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Yt;(function(e){e.Node="node",e.Web="web"})(Yt||(Yt={}));function Gy(){return zy?Yt.Node:Yt.Web}o(Gy,"determineRuntimeEnv");const ph=Gy();function Ky(e){return ph===e}o(Ky,"isRuntimeEnv");function gh(e){return e[ph]()}o(gh,"perEnv");class h extends Error{static{o(this,"AssertionError")}name="AssertionError";constructor(t,n){super(js(n,t)||"Assertion failed.")}}const Bl={interval:{milliseconds:100},timeout:{seconds:10}},Po=Symbol("not set");async function yh(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:a}=Hy(t),u=St(a.timeout,{milliseconds:!0}).milliseconds,l=St(a.interval,{milliseconds:!0});let c=Po,d;async function f(){try{c=n?r():await r(),e(c,...i)}catch(g){c=Po,d=Be(g)}}o(f,"checkCondition");const p=Date.now();for(;c===Po;)if(await f(),await ii(l),Date.now()-p>=u){const y=`${s?`${s}: `:""}Timeout of '${u}' milliseconds exceeded waiting for callback value to match expectations`;throw fr(d,y)}return c}o(yh,"executeWaitUntil");function M(e,t=!1){return(...n)=>yh(e,n,t)}o(M,"createWaitUntil");function Hy(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:wh(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}o(Hy,"parseWaitUntilArgs");function wh(e){return{interval:e?.interval||Bl.interval,timeout:e?.timeout||Bl.timeout}}o(wh,"parseWaitUntilOptions");const Pr={isFalse(e,t){if(e!==!1)throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new h(`'${m(e)}' is not truthy.`,t)}},bh={assert:Pr,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new h(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:M(Pr.isFalse),isFalsy:M(Pr.isFalsy),isTrue:M(Pr.isTrue),isTruthy:M(Pr.isTruthy)}};function Zy(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n)}o(Zy,"endsWith");function Yy(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n)}o(Yy,"endsWithout");function Jy(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n)}o(Jy,"startsWith");function Xy(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n)}o(Xy,"startsWithout");const Lr={endsWith:Zy,endsWithout:Yy,startsWith:Jy,startsWithout:Xy},vh={assert:Lr,check:{endsWith:o((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,"endsWith"),endsWithout:o((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,"endsWithout"),startsWith:o((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,"startsWith"),startsWithout:o((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t,"startsWithout")},assertWrap:{endsWith:o((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n);return e},"endsWith"),endsWithout:o((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n);return e},"endsWithout"),startsWith:o((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n);return e},"startsWith"),startsWithout:o((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n);return e},"startsWithout")},checkWrap:{endsWith:o((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},"endsWith"),endsWithout:o((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},"endsWithout"),startsWith:o((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},"startsWith"),startsWithout:o((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e},"startsWithout")},waitUntil:{endsWith:M(Lr.endsWith),endsWithout:M(Lr.endsWithout),startsWith:M(Lr.startsWith),startsWithout:M(Lr.startsWithout)}};function Qy(e,t,n){const r=xt(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}o(Qy,"assertIsEnumValue");function _t(e,t){return xt(t).includes(e)}o(_t,"isEnumValue");const Lo={isEnumValue(e,t,n){Qy(e,t,n)},isNotEnumValue(e,t,n){const r=xt(t);if(r.includes(e))throw new h(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Dh={assert:Lo,check:{isEnumValue:_t,isNotEnumValue(e,t){return!xt(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=xt(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=xt(t);if(r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(xt(t).includes(e))return e},isNotEnumValue(e,t){if(!xt(t).includes(e))return e}},waitUntil:{isEnumValue:M(Lo.isEnumValue),isNotEnumValue:M(Lo.isNotEnumValue)}},Io={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],a=t[i];if(s!==a)throw new h(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const a=e[s],u=t[s];return a!==u}))throw new h("Entries are equal.",n)}},Eh={assert:Io,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],a=t[i];if(s!==a)throw new h(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const a=e[s],u=t[s];return a!==u}))return e;throw new h("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],a=t[i];return s===a}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e}},waitUntil:{entriesEqual:M(Io.entriesEqual),notEntriesEqual:M(Io.notEntriesEqual)}};function Cs(e,t){return JSON.stringify(e)===JSON.stringify(t)}o(Cs,"baseJsonEquals");function si(e,t){if(!(e===t||Cs(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!Cs(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{si(e[s],t[s])}catch(a){throw new Error(`JSON objects are not equal at key '${s}': ${je(a)}`)}})}throw new Error("Values are not JSON equal.")}}o(si,"recursiveAssertJsonEquals");function Kr(e,t){if(e===t||Cs(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Cs(n,r)?!1:Object.keys(e).every(s=>Kr(e[s],t[s]))}return!1}o(Kr,"recursiveCheckJsonEquals");const Ro={jsonEquals(e,t,n){try{si(e,t)}catch(r){throw new h(je(r),n)}},notJsonEquals(e,t,n){try{si(e,t)}catch{return}throw new h("Values are JSON equal.",n)}},Ah={assert:Ro,check:{jsonEquals(e,t){return Kr(e,t)},notJsonEquals(e,t){return!Kr(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return si(e,t),e}catch(r){throw new h(je(r),n)}},notJsonEquals(e,t,n){try{si(e,t)}catch{return e}throw new h("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Kr(e,t))return e},notJsonEquals(e,t){if(!Kr(e,t))return e}},waitUntil:{jsonEquals:M(Ro.jsonEquals),notJsonEquals:M(Ro.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Pl(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}o(Pl,"type$1");function Ch(){this._key="chai/deep-eql__"+Math.random()+Date.now()}o(Ch,"FakeMap");Ch.prototype={get:o(function(t){return t[this._key]},"get"),set:o(function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})},"set")};var $h=typeof WeakMap=="function"?WeakMap:Ch;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Ll(e,t,n){if(!n||mr(e)||mr(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}o(Ll,"memoizeCompare");/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Ri(e,t,n,r){if(!(!n||mr(e)||mr(t))){var i=n.get(e);i?i.set(t,r):(i=new $h,i.set(t,r),n.set(e,i))}}o(Ri,"memoizeSet");function Et(e,t,n){if(n&&n.comparator)return Il(e,t,n);var r=Sh(e,t);return r!==null?r:Il(e,t,n)}o(Et,"deepEqual");function Sh(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:mr(e)||mr(t)?!1:null}o(Sh,"simpleEqual");/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Il(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new $h;var r=n&&n.comparator,i=Ll(e,t,n.memoize);if(i!==null)return i;var s=Ll(t,e,n.memoize);if(s!==null)return s;if(r){var a=r(e,t);if(a===!1||a===!0)return Ri(e,t,n.memoize,a),a;var u=Sh(e,t);if(u!==null)return u}var l=Pl(e);if(l!==Pl(t))return Ri(e,t,n.memoize,!1),!1;Ri(e,t,n.memoize,!0);var c=ew(e,t,l,n);return Ri(e,t,n.memoize,c),c}o(Il,"extensiveDeepEqual");function ew(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Et(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Mh(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ln(e,t,r);case"RegExp":return tw(e,t);case"Generator":return nw(e,t,r);case"DataView":return Ln(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ln(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Rl(e,t,r);case"Map":return Rl(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return iw(e,t,r)}}o(ew,"extensiveDeepEqualByType");/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function tw(e,t){return e.toString()===t.toString()}o(tw,"regexpEqual");/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Rl(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(o(function(a,u){r.push([a,u])},"gatherEntries")),t.forEach(o(function(a,u){i.push([a,u])},"gatherEntries")),Ln(r.sort(),i.sort(),n)}o(Rl,"entriesEqual");/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ln(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Et(e[i],t[i],n)===!1)return!1;return!0}o(Ln,"iterableEqual");/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function nw(e,t,n){return Ln(Ma(e),Ma(t),n)}o(nw,"generatorEqual");/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function rw(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}o(rw,"hasIteratorFunction");/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Ol(e){if(rw(e))try{return Ma(e[Symbol.iterator]())}catch{return[]}return[]}o(Ol,"getIteratorEntries");/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ma(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}o(Ma,"getGeneratorEntries");/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Vl(e){var t=[];for(var n in e)t.push(n);return t}o(Vl,"getEnumerableKeys");function _l(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}o(_l,"getEnumerableSymbols");/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Mh(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Et(e[n[s]],t[n[s]],r)===!1)return!1;return!0}o(Mh,"keysEqual");/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function iw(e,t,n){var r=Vl(e),i=Vl(t),s=_l(e),a=_l(t);if(r=r.concat(s),i=i.concat(a),r.length&&r.length===i.length)return Ln(Ul(r).sort(),Ul(i).sort())===!1?!1:Mh(e,t,r,n);var u=Ol(e),l=Ol(t);return u.length&&u.length===l.length?(u.sort(),l.sort(),Ln(u,l,n)):r.length===0&&u.length===0&&i.length===0&&l.length===0}o(iw,"objectEqual");/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function mr(e){return e===null||typeof e!="object"}o(mr,"isPrimitive");function Ul(e){return e.map(o(function(n){return typeof n=="symbol"?n.toString():n},"mapSymbol"))}o(Ul,"mapSymbols");const sn={strictEquals(e,t,n){if(e!==t)throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n)},deepEquals(e,t,n){if(!Et(e,t))throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Et(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n)}},kh=sn.deepEquals,xh={assert:sn,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Et(e,t)},notDeepEquals(e,t){return!Et(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n);return e},deepEquals(e,t,n){if(Et(e,t))return e;throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Et(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Et(e,t))return e},notDeepEquals(e,t){if(!Et(e,t))return e}},waitUntil:{strictEquals:M(sn.strictEquals),notStrictEquals:M(sn.notStrictEquals),looseEquals:M(sn.looseEquals),notLooseEquals:M(sn.notLooseEquals),deepEquals:M(sn.deepEquals),notDeepEquals:M(sn.notDeepEquals)}};function nt(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}o(nt,"hasValue");function ct(e,t){return typeof t=="string"?t.includes(e):nt(t,e)}o(ct,"isIn");const Rt={hasValue(e,t,n){if(!nt(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n)},lacksValue(e,t,n){if(nt(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n)},isIn(e,t,n){if(!ct(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n)},isNotIn(e,t,n){if(ct(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is not empty.`,t)}}},Fh={assert:Rt,check:{hasValue(e,t){return nt(e,t)},lacksValue(e,t){return!nt(e,t)},hasValues(e,t){return t.every(n=>nt(e,n))},lacksValues(e,t){return t.every(n=>!nt(e,n))},isIn(e,t){return ct(e,t)},isNotIn(e,t){return!ct(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!nt(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n);return e},lacksValue(e,t,n){if(nt(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n);return e},isIn(e,t,n){if(!ct(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n);return e},isNotIn(e,t,n){if(ct(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(nt(e,t))return e},lacksValue(e,t){if(!nt(e,t))return e},hasValues(e,t){if(t.every(n=>nt(e,n)))return e},lacksValues(e,t){if(!t.every(n=>nt(e,n)))return e},isIn(e,t){if(ct(e,t))return e},isNotIn(e,t){if(!ct(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:M(Rt.hasValue),lacksValue:M(Rt.lacksValue),hasValues:M(Rt.hasValues),lacksValues:M(Rt.lacksValues),isIn:M(Rt.isIn),isNotIn:M(Rt.isNotIn),isEmpty:M(Rt.isEmpty),isNotEmpty:M(Rt.isNotEmpty)}},Oo={isHttpStatus(e,t){if(!_t(e,b))throw new h(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(_t(e,b)){if(!ct(e,rs[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n)}},Th={assert:Oo,check:{isHttpStatus(e){return _t(e,b)},isHttpStatusCategory(e,t){return _t(e,b)&&ct(e,rs[t])}},assertWrap:{isHttpStatus(e,t){if(!_t(e,b))throw new h(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(_t(e,b)){if(!ct(e,rs[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(_t(e,b))return e},isHttpStatusCategory(e,t){if(_t(e,b)&&ct(e,rs[t]))return e}},waitUntil:{isHttpStatus:M(Oo.isHttpStatus),isHttpStatusCategory:M(Oo.isHttpStatusCategory)}},Vo={instanceOf(e,t,n){if(!(e instanceof t))throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n)}},Nh={assert:Vo,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:M(Vo.instanceOf),notInstanceOf:M(Vo.notInstanceOf)}},sw=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ue(e,t){return sw.some(n=>{try{return n(e,t)}catch{return!1}})}o(ue,"hasKey");const Mn={isKeyOf(e,t,n){if(!ue(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n)},isNotKeyOf(e,t,n){if(ue(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n)},hasKey(e,t,n){if(!ue(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ue(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ue(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ue(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n)}},Bh={assert:Mn,check:{isKeyOf(e,t){return ue(t,e)},isNotKeyOf(e,t){return!ue(t,e)},hasKey:ue,lacksKey(e,t){return!ue(e,t)},hasKeys(e,t){return t.every(n=>ue(e,n))},lacksKeys(e,t){return t.every(n=>!ue(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ue(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ue(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n);return e},hasKey(e,t,n){if(!ue(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ue(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ue(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ue(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ue(t,e))return e},isNotKeyOf(e,t){if(!ue(t,e))return e},hasKey(e,t){if(ue(e,t))return e},lacksKey(e,t){if(!ue(e,t))return e},hasKeys(e,t){if(t.every(n=>ue(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ue(e,n)))return e}},waitUntil:{isKeyOf:M(Mn.isKeyOf),isNotKeyOf:M(Mn.isNotKeyOf),hasKey:M(Mn.hasKey),lacksKey:M(Mn.lacksKey),hasKeys:M(Mn.hasKeys),lacksKeys:M(Mn.lacksKeys)}};function ow(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n)}o(ow,"isLengthAtLeast");function aw(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n)}o(aw,"isLengthExactly");const _o={isLengthAtLeast:ow,isLengthExactly:aw},Ph={assert:_o,check:{isLengthAtLeast:o((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)>=t,"isLengthAtLeast"),isLengthExactly:o((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)===t,"isLengthExactly")},assertWrap:{isLengthAtLeast:o((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n);return e},"isLengthAtLeast"),isLengthExactly:o((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n);return e},"isLengthExactly")},checkWrap:{isLengthAtLeast:o((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)>=t)return e},"isLengthAtLeast"),isLengthExactly:o((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ne(e).length)===t)return e},"isLengthExactly")},waitUntil:{isLengthAtLeast:M(_o.isLengthAtLeast),isLengthExactly:M(_o.isLengthExactly)}},Uo={isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new h(`'${m(e)}' is not a nullish.`,t)}},Lh={assert:Uo,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new h(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:M(Uo.isDefined),isNullish:M(Uo.isNullish)}},ze={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r)}},Ih={assert:ze,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:M(ze.isInBounds),isOutBounds:M(ze.isOutBounds),isInteger:M(ze.isInteger),isNotInteger:M(ze.isNotInteger),isAbove:M(ze.isAbove),isAtLeast:M(ze.isAtLeast),isBelow:M(ze.isBelow),isAtMost:M(ze.isAtMost),isNaN:M(ze.isNaN),isFinite:M(ze.isFinite),isInfinite:M(ze.isInfinite),isApproximately:M(ze.isApproximately),isNotApproximately:M(ze.isNotApproximately)}};function uw(e,t,n,r,i){return Di(...Zs(e,t,n,r,i),!1)}o(uw,"assertOutput");function Zs(e,t,n,r,i){const s=Array.isArray(n);return[s?e:kh,s?t:e,s?n:t,s?r:n,s?i:r]}o(Zs,"extractOutputArgs");function Di(e,t,n,r,i,s){const a=t(...n);if(a instanceof Promise)return new Promise(async(u,l)=>{try{const c=await a;e(c,r),s?u(c):u()}catch(c){l(new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${je(c)}`,i))}});try{return e(a,r),s?a:void 0}catch(u){throw new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${je(u)}`,i)}}o(Di,"innerAssertOutput");function lw(e,t,n,r,i){try{const s=Di(...Zs(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async a=>{try{await s,a(!0)}catch{a(!1)}}):!0}catch{return!1}}o(lw,"checkOutput");function cw(e,t,n,r,i){return Di(...Zs(e,t,n,r,i),!0)}o(cw,"assertWrapOutput");function dw(e,t,n,r,i){try{const s=Di(...Zs(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async a=>{try{a(await s)}catch{a(void 0)}}):s}catch{return}}o(dw,"checkWrapOutput");const Wo=Symbol("not set");async function fw(e,t,n,r,i,s){const a=Array.isArray(n),u=a?e:kh,l=a?t:e,c=a?n:t,d=a?r:n,f=wh(a?i:r),p=a?s:i,g=St(f.timeout,{milliseconds:!0}).milliseconds,y=St(f.interval,{milliseconds:!0});let v=Wo,$;async function E(){try{v=await Di(u,l,c,d,void 0,!0)}catch(B){v=Wo,$=Be(B)}}o(E,"checkCondition");const k=Date.now();for(;v===Wo;)if(await E(),await ii(y),Date.now()-k>=g)throw fr($,js(p,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return v}o(fw,"waitUntilOutput");const hw={output:uw},Rh={assert:hw,check:{output:lw},assertWrap:{output:cw},checkWrap:{output:dw},waitUntil:{output:fw}},Ir={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t)}},Oh={assert:Ir,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:M(Ir.isNotPrimitive),isNotPropertyKey:M(Ir.isNotPropertyKey),isPrimitive:M(Ir.isPrimitive),isPropertyKey:M(Ir.isPropertyKey)}},Rr={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t)}},Vh={assert:Rr,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:M(Rr.isPromiseLike,!0),isNotPromiseLike:M(Rr.isNotPromiseLike,!0),isPromise:M(Rr.isPromise,!0),isNotPromise:M(Rr.isNotPromise,!0)}},jo={matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n)}},_h={assert:jo,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:M(jo.matches,!0),mismatches:M(jo.mismatches,!0)}},ye={isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t)}},Uh={assert:ye,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:M(ye.isArray),isBigInt:M(ye.isBigInt),isBoolean:M(ye.isBoolean),isFunction:M(ye.isFunction),isNull:M(ye.isNull),isNumber:M(ye.isNumber),isObject:M(ye.isObject),isString:M(ye.isString),isSymbol:M(ye.isSymbol),isUndefined:M(ye.isUndefined),isNotArray:M(ye.isNotArray),isNotBigInt:M(ye.isNotBigInt),isNotBoolean:M(ye.isNotBoolean),isNotFunction:M(ye.isNotFunction),isNotNull:M(ye.isNotNull),isNotNumber:M(ye.isNotNumber),isNotObject:M(ye.isNotObject),isNotString:M(ye.isNotString),isNotSymbol:M(ye.isNotSymbol),isNotUndefined:M(ye.isNotUndefined)}};var Ze;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ze||(Ze={}));function cu(e,t,n){du(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n)}o(cu,"isError$1");function Wl(e,t,n){du(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,n)}o(Wl,"assertThrownError");function du(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new h(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=je(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new h(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new h(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new h(t.notInstance,r);else throw new h(t.noError,r)}o(du,"internalAssertError");function jl(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=je(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}o(jl,"internalCheckError");function Ys(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(a,u)=>{try{await s}catch(l){i=Be(l)}try{Wl(i,n,r),e===Ze.Assert?a():e===Ze.Check?a(!0):a(i)}catch(l){e===Ze.CheckWrap?a(void 0):e===Ze.Check?a(!1):u(Be(l))}})}catch(s){i=Be(s)}try{return Wl(i,n,r),e===Ze.Check?!0:e!==Ze.Assert?i:void 0}catch(s){if(e===Ze.CheckWrap)return;if(e===Ze.Check)return!1;throw s}}o(Ys,"internalThrowsCheck");function mw(e,t,n){return Ys(Ze.Assert,e,t,n)}o(mw,"throws");function pw(e,t){return Ys(Ze.Check,e,t)}o(pw,"throwsCheck");function gw(e,t,n){return Ys(Ze.AssertWrap,e,t,n)}o(gw,"throwsAssertWrap");function yw(e,t,n){return Ys(Ze.CheckWrap,e,t,n)}o(yw,"throwsCheckWrap");const ww=M(cu);function bw(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,a=typeof n=="object"?r:n,u=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${m(s)}'`);return ww(i,async()=>{try{await s();return}catch(l){return Be(l)}},u,a)}o(bw,"throwsWaitUntil");const vw={throws:mw,isError:cu},Wh={assert:vw,check:{throws:pw,isError(e,t){return jl(e,t)}},assertWrap:{throws:gw,isError(e,t,n){return du(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:yw,isError(e,t){if(jl(e,t))return e}},waitUntil:{throws:bw,isError:M(cu)}},un=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,qo={isUuid(e,t){if(!String(e).match(un))throw new h(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(un))throw new h(`'${String(e)}' is a UUID.`,t)}},jh={assert:qo,check:{isUuid(e){return!!String(e).match(un)},isNotUuid(e){return!String(e).match(un)}},assertWrap:{isUuid(e,t){if(!String(e).match(un))throw new h(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(un))throw new h(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(un))return e},isNotUuid(e){if(!String(e).match(un))return e}},waitUntil:{isUuid:M(qo.isUuid),isNotUuid:M(qo.isNotUuid)}},Dw={...bh.assert,...vh.assert,...Eh.assert,...Dh.assert,...Nh.assert,...Ah.assert,...Bh.assert,...Ph.assert,...Lh.assert,...Ih.assert,...Oh.assert,...Vh.assert,..._h.assert,...Uh.assert,...xh.assert,...Wh.assert,...jh.assert,...Fh.assert,...Th.assert,...Rh.assert},Js=[bh,vh,Eh,Dh,Nh,Ah,Bh,Ph,Lh,Ih,Oh,Vh,_h,Uh,xh,Wh,jh,Fh,Th,Rh],Ew=Object.assign({},...Js.map(e=>e.check)),w=Object.assign(o(function(t){return!!t},"check"),Ew);function Aw(e,t,n){return ss(e,t,n,new Set)}o(Aw,"checkCustomDeepQuality");function ss(e,t,n,r){if(e=ql(e),t=ql(t),w.isObject(e)&&w.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!ss(ne(e).sort(),ne(t).sort(),n,r))return!1;let i=!1;const s=ne(e).map(a=>{const u=ss(e[a],t[a],n,r);return w.isPromise(u)&&(i=!0),u});return zl(i,s)}else if(w.isArray(e)&&w.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((a,u)=>{const l=ss(a,t[u],n,r);return w.isPromise(l)&&(i=!0),l});return zl(i,s)}else return n(e,t)}o(ss,"recursiveCheckCustomDeepQuality");function ql(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}o(ql,"flattenComplexObject");function zl(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(w.isTrue))}catch(i){r(Be(i))}}):t.every(w.isTrue)}o(zl,"handleMaybePromise");const Cw=Object.assign({},...Js.map(e=>e.assertWrap)),qh=Object.assign(o(function(t,n){if(!t)throw new h("Assertion failed.",n);return t},"assertWrap"),Cw);function $w(e){return{equals:o(()=>{},"equals"),notEquals:o(()=>{},"notEquals"),matches:o(()=>{},"matches"),notMatches:o(()=>{},"notMatches"),slowEquals:o(()=>{},"slowEquals")}}o($w,"tsType");const Sw={tsType:$w},Mw={assert:Sw},kw={fail:o(e=>{throw new h("Failure triggered.",e)},"fail")},xw={...Mw.assert,...Dw,...kw},Jt=Object.assign(o(function(t,n){if(!t)throw new h("Assertion failed.",n)},"assert"),xw),Fw=Object.assign({},...Js.map(e=>e.checkWrap)),zh=Object.assign(o(function(t){if(t)return t},"checkWrap"),Fw),Tw=Object.assign({},...Js.map(e=>e.waitUntil));Object.assign(o(function(t,n){return yh((r,i)=>{if(!r)throw new h("Assertion failed.",i)},[t,n],!1)},"waitUntil"),Tw);function Nw(e,t){return w.hasKey(e,"entryType")&&e.entryType===t}o(Nw,"isBookEntry");function Zn(e,t){return e.controlType===t}o(Zn,"isControlInitType");var Ve;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Ve||(Ve={}));const Gh=Symbol("any-type"),Bw={[Ve.Checkbox]:!1,[Ve.Color]:"",[Ve.Dropdown]:"",[Ve.Hidden]:Gh,[Ve.Number]:0,[Ve.Text]:""};function Pw(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const s=Bw[i.controlType];s!==Gh&&(typeof s!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}o(Pw,"checkControls");function Lw(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return w.isPromise(i)?new Promise(async(s,a)=>{try{const u=await i;e.set(r,u),s(u)}catch(u){a(Be(u))}}):(e.set(r,i),i)}}o(Lw,"getOrSetFromMap");function fu(e,t,n){if(t in e)return e[t];{const r=n();return w.isPromise(r)?new Promise(async(i,s)=>{try{const a=await r;e[t]=a,i(a)}catch(a){s(Be(a))}}):(e[t]=r,r)}}o(fu,"getOrSet");function Qt(e){return ne(e).map(t=>[t,e[t]])}o(Qt,"getObjectTypedEntries");function pr(e){return Object.fromEntries(e)}o(pr,"typedObjectFromEntries");function Kh(e,t){return e.filter((n,r)=>!t.includes(r))}o(Kh,"filterOutIndexes");function qn(e,t,n){return e.reduce((r,i,s,a)=>{const u=t(i,s,a);return n(u,i,s,a)&&r.push(u),r},[])}o(qn,"filterMap");function Hh(e,t){try{let n=!1;const r=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(w.isTruthy);return n?new Promise(async(i,s)=>{try{const a=qn(await Promise.all(r),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},w.isTruthy);i(pr(a))}catch(a){s(Be(a))}}):pr(r)}catch(n){throw Be(n)}}o(Hh,"arrayToObject");async function Iw(e,t){return await e.reduce(async(n,r,i,s)=>{const a=await n,u=await t(r,i,s);return a.push(u),a},Promise.resolve([]))}o(Iw,"awaitedBlockingMap");async function Rw(e,t){await Iw(e,t)}o(Rw,"awaitedForEach");function Ow(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}o(Ow,"removeDuplicates");function Vw({min:e,max:t}){const{min:n,max:r}=df({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),a=Math.ceil(s/8);if(a>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const u=Math.floor(256**a/i)*i,l=new Uint8Array(a);let c;do crypto.getRandomValues(l),c=l.reduce((d,f,p)=>d+f*256**p,0);while(c>=u);return n+c%i}o(Vw,"randomInteger");const Gl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Zh(e=16){let t="";for(let n=0;n<e;n++){const r=Vw({min:0,max:Gl.length-1});t+=Gl[r]}return t}o(Zh,"randomString");function _w(e){return e.map(t=>({value:t,sort:Zh()})).sort((t,n)=>t.sort.localeCompare(n.sort)).map(({value:t})=>t)}o(_w,"shuffleArray");function Yh(e){if(w.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>je(t).trim()).join(`
`))}o(Yh,"combineErrors");async function Kl(e){const t=new tu;return setTimeout(async()=>{t.resolve(await e())}),t.promise}o(Kl,"callAsynchronously");var Hl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Hl||(Hl={}));function Jh(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}o(Jh,"copyThroughJson");const Uw="modulepreload",Ww=o(function(e){return"/game-vir/book/"+e},"assetsURL"),Zl={},Xh=o(function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(n.map(l=>{if(l=Ww(l),l in Zl)return;Zl[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Uw,c||(f.as="script"),f.crossOrigin="",f.href=l,u&&f.setAttribute("nonce",u),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return o(s,"handlePreloadError"),i.then(a=>{for(const u of a||[])u.status==="rejected"&&s(u.reason);return t().catch(s)})},"preload");var Ce;(function(e){e.Standard="stdout",e.Error="stderr"})(Ce||(Ce={}));var z;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(z||(z={}));async function jw(){return await gh({async[Yt.Node](){const e=(await Xh(async()=>{const{default:t}=await import("./index-CvnWDNVq.js");return{default:t}},[])).default;return{[z.Bold]:e.bold.open,[z.Debug]:e.blueBright.open,[z.Error]:e.red.open,[z.Faint]:e.gray.open,[z.Info]:e.cyan.open,[z.Mutate]:e.magenta.open,[z.NormalWeight]:"\x1B[22m",[z.Plain]:"",[z.Reset]:e.reset.open,[z.Success]:e.green.open,[z.Warning]:e.yellow.open}},[Yt.Web](){return Promise.resolve({[z.Bold]:"font-weight: bold",[z.Debug]:"color: blue",[z.Error]:"color: red",[z.Faint]:"color: grey",[z.Info]:"color: teal",[z.Mutate]:"color: magenta",[z.NormalWeight]:"",[z.Plain]:"",[z.Reset]:"",[z.Success]:"color: green",[z.Warning]:"color: orange"})}})}o(jw,"determineDefaultLogColors");const tt=await jw(),qw={[z.Bold]:{colors:[tt.bold],logType:Ce.Standard},[z.Debug]:{colors:[tt.debug],logType:Ce.Standard},[z.Faint]:{colors:[tt.faint],logType:Ce.Standard},[z.Info]:{colors:[tt.info],logType:Ce.Standard},[z.Mutate]:{colors:[tt.mutate,tt.bold],logType:Ce.Standard},[z.NormalWeight]:{colors:[tt.normalWeight],logType:Ce.Standard},[z.Plain]:{colors:[],logType:Ce.Standard},[z.Reset]:{colors:[tt.reset],logType:Ce.Standard},[z.Success]:{colors:[tt.success,tt.bold],logType:Ce.Standard},[z.Error]:{colors:[tt.error,tt.bold],logType:Ce.Error},[z.Warning]:{colors:[tt.warning],logType:Ce.Error}};function zw(e){return e.replace(/,/g,"")}o(zw,"removeCommas");function Gw(e){return typeof e=="number"?e:Number(typeof e=="string"?zw(e):e)}o(Gw,"toNumber");function Yl(e){const t=Kw(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}o(Yl,"toEnsuredNumber");function Kw(e){const t=Gw(e);if(!isNaN(t))return t}o(Kw,"toMaybeNumber");const Hw="px";function Zw(e){return Qh({value:e,suffix:Hw})}o(Zw,"addPx");function Qh({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}o(Qh,"addSuffix");function Yw({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}o(Yw,"removeSuffix");async function Jw(){return await gh({async[Yt.Node](){const{inspect:e}=await Xh(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(u=>typeof u=="string"?u:e(u));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[z.Reset].colors.join("")].join(""),css:void 0}}},[Yt.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:qn(n.colorConfig[t].colors,a=>Yw({value:a,suffix:";"}),w.isTruthy).join("; ");return{text:[e.map(a=>typeof a=="string"?a:a instanceof Error?je(a):m(a)).join(`
`),n.omitColors?"":n.colorConfig[z.Reset].colors.join("")].join(""),css:r}}}})}o(Jw,"createToLogString");const Xw=await Jw();function Xe({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}o(Xe,"addPrefix");function ur({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}o(ur,"removePrefix");function hu(e,t){try{let n=!1;const r=Qt(e).map(([i,s])=>{const a=t(i,s,e);return a instanceof Promise?(n=!0,a):a?[a.key,a.value]:void 0}).filter(w.isTruthy);return n?new Promise(async(i,s)=>{try{const a=qn(await Promise.all(r),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},w.isTruthy);i(pr(a))}catch(a){s(Be(a))}}):pr(r)}catch(n){throw Be(n)}}o(hu,"mapObject");function Qw(e,t){return hu(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(a=>({key:i,value:a})):{key:i,value:s}})}o(Qw,"mapEnumToObject");function em(e,...t){const n={...e};return t.forEach(r=>{r&&Qt(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}o(em,"mergeDefinedProperties");const e1={colorConfig:qw,omitColors:!1},t1=tm({[Ce.Error](){},[Ce.Standard](){}});function tm(e,t){const n=em(e1,t);function r(s){e[n.colorConfig[s.colorKey].logType](Xw({...s,options:n}))}o(r,"writeLog");const i=Qw(z,s=>(...a)=>r({args:a,colorKey:s}));return{...i,if(s){return s?i:t1}}}o(tm,"createLogger");const n1=Ky(Yt.Node)?{[Ce.Error]({text:e}){process.stderr.write(e+`
`)},[Ce.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Ce.Error]({text:e,css:t}){console.error(Xe({value:e,prefix:"%c"}),t)},[Ce.Standard]({text:e,css:t}){console.log(Xe({value:e,prefix:"%c"}),t)}};tm(n1);function nm(...e){const t=e.join(""),n=Ow(Array.from(t));return Array.from(n).join("")}o(nm,"removeDuplicateCharacters");function r1(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}o(r1,"escapeStringForRegExp");function rm(e,t){const n=nm([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return i1(e,n)}o(rm,"addRegExpFlags");function i1(e,t){const n=nm(t);return typeof e=="string"?new RegExp(r1(e),n):new RegExp(e.source,n)}o(i1,"setRegExpFlags");function im(e,{caseSensitive:t}){return rm(e,"")}o(im,"setRegExpCaseSensitivity");function s1({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=rm(im(t,{caseSensitive:n}),"g"),s=[];return e.replace(i,(...a)=>{const u=a[a.length-2];if(typeof u!="number")throw new TypeError(`Match index "${u}" is not a number. Searching for "${t}" in "${e}".`);const l=a[0];if(typeof l!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof l}!`);s.push({index:u,length:l.length});const c=a[0];if(typeof c!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${u} is not a string.`);return c}),s}o(s1,"findSubstringIndexes");function o1(e,t,{caseSensitive:n}){const r=s1({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=im(t,{caseSensitive:n});return e.split(i).reduce((a,u,l)=>{const c=r[l],d=a.concat(u);if(c){const f=e.slice(c.index,c.index+c.length);return d.concat(f)}else return d},[])}o(o1,"splitIncludeSplit");function sm(e,t){return e.split(t)}o(sm,"safeSplit");function Qr(e,t){const{min:n,max:r}=df(t);return e>r?n:e<n?r:e}o(Qr,"wrapNumber");function me(e,t){let n=!1;const r=ne(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(n=!0),i[s]=a,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(ne(r).map(async a=>{const u=await r[a];r[a]=u})),i(r)}catch(a){s(Be(a))}}):r}o(me,"mapObjectValues");function om(...e){if(!w.isLengthAtLeast(e,1))return{};if(e.length===1)return e[0];let t;const n={};return e.forEach(r=>{if(w.isObject(r))w.isObject(t)||(t={...r});else{t=r;return}Object.entries(r).forEach(([i,s])=>{n[i]||(n[i]=[]),n[i].push(s)})}),w.isObject(t)&&Object.entries(n).forEach(([r,i])=>{const s=om(...i);s===void 0&&r in t?delete t[r]:s!==void 0&&(t[r]=s)}),t}o(om,"mergeDeep");function Xs(e,t){const n=Qt(e).filter(([r,i])=>t(r,i,e));return pr(n)}o(Xs,"filterObject");function mu(e,t){return Xs(e,n=>!t.includes(n))}o(mu,"omitObjectKeys");function a1(e,t){return Xs(e,n=>t.includes(n))}o(a1,"pickObjectKeys");function Vn(e){return ne(e).map(t=>e[t])}o(Vn,"getObjectTypedValues");function am(e){return w.isPrimitive(e)||e instanceof RegExp||e instanceof Promise}o(am,"shouldPreserveInSelectionSet");function ka(e,t){if(Array.isArray(e))return e.map(r=>ka(r,t));const n=[];return mu(me(e,(r,i)=>{const s=t[r];if(s===!0)return i;if(s)return am(i)?i:ka(i,s);n.push(r)}),n)}o(ka,"selectFrom");function Jl(e,t){const n=ka(e,t);return xa(n,t)}o(Jl,"selectCollapsedFrom");function xa(e,t){if(am(e))return e;const n=Object.keys(e);return Array.isArray(e)?e.map(r=>xa(r,t)):w.isLengthAtLeast(n,2)?e:w.isLengthAtLeast(n,1)&&w.isObject(t)?xa(e[n[0]],t[n[0]]):e}o(xa,"collapseObject");function u1(e,t){return t.capitalizeFirstLetter?l1(e):e}o(u1,"maybeCapitalize");function l1(e){return e.length?e[0].toUpperCase()+e.slice(1):""}o(l1,"capitalizeFirstLetter");const c1={capitalizeFirstLetter:!1};var gr;(function(e){e.Upper="upper",e.Lower="lower"})(gr||(gr={}));function d1(e){return e.toLowerCase()!==e.toUpperCase()}o(d1,"hasCase");function Xl(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(d1(r)){if(t===gr.Upper&&r!==r.toUpperCase()||t===gr.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}o(Xl,"isCase");function um(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return u1(r,em(c1,t))}o(um,"kebabCaseToCamelCase");function f1(e){return e.split("").reduce((n,r,i,s)=>{const a=i>0&&s[i-1]||"",u=i<s.length-1&&s[i+1]||"",l=Xl(a,gr.Lower,{rejectNoCaseCharacters:!0})||Xl(u,gr.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}o(f1,"camelCaseToKebabCase");function h1(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}o(h1,"joinWithFinalConjunction");function m1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}o(m1,"collapseWhiteSpace");function p1({value:e,wrapper:t}){return Xe({value:Qh({value:e,suffix:t}),prefix:t})}o(p1,"wrapString");function Mt(){function e(t){return class extends CustomEvent{static{o(this,"TypedEventConstructor")}static type=t;constructor(r){super(t,r)}}}return o(e,"defineEventTypeString"),e}o(Mt,"defineTypedCustomEvent");function Qs(e){return class extends Event{static{o(this,"TypedEventConstructor")}static type=e;constructor(n){super(e,n)}}}o(Qs,"defineTypedEvent$1");class lm{static{o(this,"TypedListenTarget")}listeners={};getListenerCount(){return Vn(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=w.isString(t)?t:t.type;function a(){return i[s]?.delete(n)||!1}o(a,"removeListener");function u(l,c){r.once&&a(),n(l,c)}return o(u,"wrappedCallback"),fu(i,s,()=>new Map).set(n,{listener:u,removeListener:a}),a}removeListener(t,n){const r=w.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=Vn(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class eo extends lm{static{o(this,"ListenTarget")}}function cm(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}o(cm,"listenTo");function Tn(e,t,n){return cm(globalThis,e,t,n)}o(Tn,"listenToGlobal");function pu(e,t){return $s(e.title),e.parent?[...pu(e.parent),$s(e.parent.title)].concat([]):[]}o(pu,"listUrlBreadcrumbs");function $s(e){return m1(e).toLowerCase().replaceAll(/\s/g,"-")}o($s,"titleToUrlBreadcrumb");function g1({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}o(g1,"doBreadcrumbsStartWith");const y1={[ke.ElementExample]:()=>[],[ke.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Pw(e.controls,e.title)].filter(w.isTruthy),[ke.Root]:()=>[]},Ss="_isBookTreeNode",dm=new Map;function w1(e){return dm.get(e)}o(w1,"getTreeFromCache");function b1(e,t){Lw(dm,e,()=>t)}o(b1,"addTreeToCache");function lr(e,t){return!!(fm(e)&&e.entry.entryType===t)}o(lr,"isBookTreeNode");function fm(e){return!!(w.hasKeys(e,[Ss,"entry"])&&e[Ss])}o(fm,"isAnyBookTreeNode");function v1(){return{[Ss]:!0,entry:{entryType:ke.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}o(v1,"createEmptyBookTreeRoot");function D1({entries:e,debug:t}){const n=w1(e);if(n)return n;const r=v1();e.forEach(a=>gu({tree:r,newEntry:a,debug:t,manuallyAdded:!0}));const i=hm(r),s={tree:r,flattenedNodes:i};return b1(e,s),t&&console.info("element-book tree:",r),s}o(D1,"createBookTreeFromEntries");function E1(e,t,n){if(!t.parent)return e;const r=Fa(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),gu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Fa(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${pu(t).join(" > ")}`);return i}o(E1,"getOrAddImmediateParent");function gu({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=y1[t.entryType](t);t.errors.push(...i);const s=E1(e,t,n),a=$s(t.title),u=s.children[a];if(u){if(r){if(u.manuallyAdded){u.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}u.manuallyAdded=!0}return}const l={[Ss]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:r};s.children[a]=l,Nw(t,ke.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(c=>gu({tree:e,newEntry:c,debug:n,manuallyAdded:r}))}o(gu,"addEntryToTree");function Fa(e,t){const n=fm(e)?e.fullUrlBreadcrumbs.slice(0,-1):pu(e);return n.length?n.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}o(Fa,"traverseToImmediateParent");function hm(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>hm(i));return[e,...n].flat()}o(hm,"flattenTree");function yu(e,t){return wu(e,["",...t],void 0)}o(yu,"traverseControls");function wu(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const s=e.children[i||""],a=s&&wu(s,r,n);return{...e.controls,...a}}o(wu,"traverseAndInsertNewControls");function A1(e,t,n){const r={...e};return wu(r,["",...t],n),r}o(A1,"createNewControls");function mm(e,t){const n=t?.controls||(lr(e,ke.Page)?me(e.entry.controls,(i,s)=>s.initValue):{});return{children:me(e.children,(i,s)=>mm(s,t?.children?.[s.urlBreadcrumb])),controls:n}}o(mm,"updateTreeControls");function Nt(e){const t={...e,entryType:ke.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,entryType:ke.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(w.isTruthy)};n.add(r.title),t.elementExamples[$s(i.title)]=i}}),t}o(Nt,"defineBookPage");var Je;(function(e){e.Search="search",e.Book="book"})(Je||(Je={}));function Ta(e){return e[0]===Je.Book?"":e[1]?decodeURIComponent(e[1]):""}o(Ta,"extractSearchQuery");const yr={hash:void 0,paths:[Je.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=globalThis,bu=os.ShadowRoot&&(os.ShadyCSS===void 0||os.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vu=Symbol(),Ql=new WeakMap;let pm=class{static{o(this,"n")}constructor(t,n,r){if(this._$cssResult$=!0,r!==vu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(bu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ql.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ql.set(n,t))}return t}toString(){return this.cssText}};const mt=o(e=>new pm(typeof e=="string"?e:e+"",void 0,vu),"r$5"),as=o((e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new pm(n,e,vu)},"i$4"),C1=o((e,t)=>{if(bu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=os.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},"S$1"),ec=bu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return mt(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$1,defineProperty:S1,getOwnPropertyDescriptor:M1,getOwnPropertyNames:k1,getOwnPropertySymbols:x1,getPrototypeOf:F1}=Object,to=globalThis,tc=to.trustedTypes,T1=tc?tc.emptyScript:"",N1=to.reactiveElementPolyfillSupport,ei=o((e,t)=>e,"d$2"),Ms={toAttribute(e,t){switch(t){case Boolean:e=e?T1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Du=o((e,t)=>!$1(e,t),"f$1"),nc={attribute:!0,type:String,converter:Ms,reflect:!1,hasChanged:Du};Symbol.metadata??=Symbol("metadata"),to.litPropertyMetadata??=new WeakMap;let tr=class extends HTMLElement{static{o(this,"b")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=nc){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&S1(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=M1(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return i?.call(this)},set(a){const u=i?.call(this);s.call(this,a),this.requestUpdate(t,u,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nc}static _$Ei(){if(this.hasOwnProperty(ei("elementProperties")))return;const t=F1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ei("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ei("properties"))){const n=this.properties,r=[...k1(n),...x1(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(ec(i))}else t!==void 0&&n.push(ec(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Ms).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ms;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Du)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[ei("elementProperties")]=new Map,tr[ei("finalized")]=new Map,N1?.({ReactiveElement:tr}),(to.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eu=globalThis,ks=Eu.trustedTypes,rc=ks?ks.createPolicy("lit-html",{createHTML:o(e=>e,"createHTML")}):void 0,gm="$lit$",cn=`lit$${Math.random().toFixed(9).slice(2)}$`,ym="?"+cn,B1=`<${ym}>`,_n=document,oi=o(()=>_n.createComment(""),"l"),ai=o(e=>e===null||typeof e!="object"&&typeof e!="function","c$2"),Au=Array.isArray,P1=o(e=>Au(e)||typeof e?.[Symbol.iterator]=="function","u$2"),zo=`[ 	
\f\r]`,Or=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ic=/-->/g,sc=/>/g,kn=RegExp(`>|${zo}(?:([^\\s"'>=/]+)(${zo}*=${zo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oc=/'/g,ac=/"/g,wm=/^(?:script|style|textarea|title)$/i,L1=o(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),"y"),I1=L1(1),ot=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),uc=new WeakMap,Pn=_n.createTreeWalker(_n,129);function bm(e,t){if(!Au(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rc!==void 0?rc.createHTML(t):t}o(bm,"P");const R1=o((e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=Or;for(let u=0;u<n;u++){const l=e[u];let c,d,f=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===Or?d[1]==="!--"?a=ic:d[1]!==void 0?a=sc:d[2]!==void 0?(wm.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=kn):d[3]!==void 0&&(a=kn):a===kn?d[0]===">"?(a=i??Or,f=-1):d[1]===void 0?f=-2:(f=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?kn:d[3]==='"'?ac:oc):a===ac||a===oc?a=kn:a===ic||a===sc?a=Or:(a=kn,i=void 0);const g=a===kn&&e[u+1].startsWith("/>")?" ":"";s+=a===Or?l+B1:f>=0?(r.push(c),l.slice(0,f)+gm+l.slice(f)+cn+g):l+cn+(f===-2?u:g)}return[bm(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},"V");class ui{static{o(this,"N")}constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,a=0;const u=t.length-1,l=this.parts,[c,d]=R1(t,n);if(this.el=ui.createElement(c,r),Pn.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Pn.nextNode())!==null&&l.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(gm)){const p=d[a++],g=i.getAttribute(f).split(cn),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?V1:y[1]==="?"?_1:y[1]==="@"?U1:no}),i.removeAttribute(f)}else f.startsWith(cn)&&(l.push({type:6,index:s}),i.removeAttribute(f));if(wm.test(i.tagName)){const f=i.textContent.split(cn),p=f.length-1;if(p>0){i.textContent=ks?ks.emptyScript:"";for(let g=0;g<p;g++)i.append(f[g],oi()),Pn.nextNode(),l.push({type:2,index:++s});i.append(f[p],oi())}}}else if(i.nodeType===8)if(i.data===ym)l.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(cn,f+1))!==-1;)l.push({type:7,index:s}),f+=cn.length-1}s++}}static createElement(t,n){const r=_n.createElement("template");return r.innerHTML=t,r}}function wr(e,t,n=e,r){if(t===ot)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=ai(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=wr(e,i._$AS(e,t.values),i,r)),t}o(wr,"S");let O1=class{static{o(this,"M")}constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??_n).importNode(n,!0);Pn.currentNode=i;let s=Pn.nextNode(),a=0,u=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Fr(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new W1(s,this,t)),this._$AV.push(c),l=r[++u]}a!==l?.index&&(s=Pn.nextNode(),a++)}return Pn.currentNode=_n,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Fr{static{o(this,"R")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=wr(this,t,n),ai(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):P1(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&ai(this._$AH)?this._$AA.nextSibling.data=t:this.T(_n.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ui.createElement(bm(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new O1(i,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=uc.get(t.strings);return n===void 0&&uc.set(t.strings,n=new ui(t)),n}k(t){Au(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new Fr(this.O(oi()),this.O(oi()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class no{static{o(this,"k")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(t,n=this,r,i){const s=this.strings;let a=!1;if(s===void 0)t=wr(this,t,n,0),a=!ai(t)||t!==this._$AH&&t!==ot,a&&(this._$AH=t);else{const u=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=wr(this,u[r+l],n,l),c===ot&&(c=this._$AH[l]),a||=!ai(c)||c!==this._$AH[l],c===Y?t=Y:t!==Y&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class V1 extends no{static{o(this,"H")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class _1 extends no{static{o(this,"I")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class U1 extends no{static{o(this,"L")}constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=wr(this,t,n,0)??Y)===ot)return;const r=this._$AH,i=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==Y&&(r===Y||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class W1{static{o(this,"z")}constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){wr(this,t)}}const j1={I:Fr},q1=Eu.litHtmlPolyfillSupport;q1?.(ui,Fr),(Eu.litHtmlVersions??=[]).push("3.2.1");const z1=o((e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new Fr(t.insertBefore(oi(),s),s,void 0,n??{})}return i._$AI(e),i},"B");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ti=class extends tr{static{o(this,"r")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=z1(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ot}};ti._$litElement$=!0,ti.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ti});const G1=globalThis.litElementPolyfillSupport;G1?.({LitElement:ti});(globalThis.litElementVersions??=[]).push("4.1.1");function vn(e){if(w.isObject(e))return me(e,(n,r)=>{if(!w.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(f1(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,a=n.startsWith("--")?mt(n):n.startsWith("-")?as`-${mt(n)}`:as`--${mt(n)}`;return{name:a,value:as`var(${a}, ${mt(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${vn.name}' function.`)}o(vn,"defineCssVars");function K1({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}o(K1,"setCssVarValue");const Q=vn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),H1={nav:{hover:{background:Q["element-book-nav-hover-background-color"],foreground:Q["element-book-nav-hover-foreground-color"]},active:{background:Q["element-book-nav-active-background-color"],foreground:Q["element-book-nav-active-foreground-color"]},selected:{background:Q["element-book-nav-selected-background-color"],foreground:Q["element-book-nav-selected-foreground-color"]}},accent:{icon:Q["element-book-accent-icon-color"]},page:{background:Q["element-book-page-background-color"],backgroundFaint1:Q["element-book-page-background-faint-level-1-color"],backgroundFaint2:Q["element-book-page-background-faint-level-2-color"],foreground:Q["element-book-page-foreground-color"],foregroundFaint1:Q["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Q["element-book-page-foreground-faint-level-2-color"]}};function Z1(e,t){vm(e,t,H1)}o(Z1,"setThemeCssVars");function Na(e){return w.hasKey(e,"_$cssResult$")}o(Na,"isCssResult");function lc(e){return w.hasKeys(e,["name","value","default"])&&w.isString(e.default)&&Na(e.name)&&Na(e.value)}o(lc,"isCssVarDefinition");function vm(e,t,n){Object.entries(t).forEach(([r,i])=>{const s=n[r];if(!s)throw new Error(`no nestedCssVar at key '${r}'`);if(Na(i)){if(!lc(s))throw new Error(`got a CSS result at '${r}' but no CSS var`);K1({forCssVar:s,onElement:e,toValue:String(i)})}else{if(lc(s))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);vm(e,i,s)}})}o(vm,"recursiveSetThemeCssVars");function de(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let r=t[0].length,i=t[0].map((a,u)=>t.map(l=>l[u])),s=e.map(a=>i.map(u=>{let l=0;if(!Array.isArray(a)){for(let c of u)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(u[c]||0);return l}));return n===1&&(s=s[0]),r===1?s.map(a=>a[0]):s}o(de,"multiplyMatrices");function Ei(e){return hn(e)==="string"}o(Ei,"isString");function hn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}o(hn,"type");function xs(e,{precision:t,unit:n}){return pn(e)?"none":Dm(e,t)+(n??"")}o(xs,"serializeNumber");function pn(e){return Number.isNaN(e)||e instanceof Number&&e?.none}o(pn,"isNone");function De(e){return pn(e)?0:e}o(De,"skipNone");function Dm(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}o(Dm,"toPrecision");const Y1={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Em(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let a=[];return s[2].replace(i,(u,l)=>{let c=l.match(r),d=l;if(c){let f=c[0],p=d.slice(0,-f.length);f==="%"?(d=new Number(p/100),d.type="<percentage>"):(d=new Number(p*Y1[f]),d.type="<angle>",d.unit=f)}else n.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);u.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),a.push(d)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:a}}}o(Em,"parseFunction");function Am(e){return e[e.length-1]}o(Am,"last");function li(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}o(li,"interpolate");function Cm(e,t,n){return(n-e)/(t-e)}o(Cm,"interpolateInv");function Cu(e,t,n){return li(t[0],t[1],Cm(e[0],e[1],n))}o(Cu,"mapRange");function $m(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}o($m,"parseCoordGrammar");function Sm(e,t,n){return Math.max(Math.min(n,t),e)}o(Sm,"clamp");function ro(e,t){return Math.sign(e)===Math.sign(t)?e:-e}o(ro,"copySign");function Ft(e,t){return ro(Math.abs(e)**t,e)}o(Ft,"spow");function $u(e,t){return t===0?0:e/t}o($u,"zdiv");function Mm(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}o(Mm,"bisectLeft");var J1=Object.freeze({__proto__:null,bisectLeft:Mm,clamp:Sm,copySign:ro,interpolate:li,interpolateInv:Cm,isNone:pn,isString:Ei,last:Am,mapRange:Cu,multiplyMatrices:de,parseCoordGrammar:$m,parseFunction:Em,serializeNumber:xs,skipNone:De,spow:Ft,toPrecision:Dm,type:hn,zdiv:$u});class X1{static{o(this,"Hooks")}add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const gn=new X1;var at={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:o(function(t){this.verbose&&globalThis?.console?.warn?.(t)},"warn")};const We={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ba(e){return Array.isArray(e)?e:We[e]}o(Ba,"getWhite");function Fs(e,t,n,r={}){if(e=Ba(e),t=Ba(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(gn.run("chromatic-adaptation-start",i),i.M||(i.W1===We.D65&&i.W2===We.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===We.D50&&i.W2===We.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),gn.run("chromatic-adaptation-end",i),i.M)return de(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}o(Fs,"adapt$2");const Q1=new Set(["<number>","<percentage>","<angle>"]);function cc(e,t,n,r){return Object.entries(e.coords).map(([s,a],u)=>{let l=t.coordGrammar[u],c=r[u],d=c?.type,f;if(c.none?f=l.find(y=>Q1.has(y)):f=l.find(y=>y==d),!f){let y=a.name||s;throw new TypeError(`${d??c.raw} not allowed for ${y} in ${n}()`)}let p=f.range;d==="<percentage>"&&(p||=[0,1]);let g=a.range||a.refRange;return p&&g&&(r[u]=Cu(p,g,r[u])),f})}o(cc,"coerceCoords");function km(e,{meta:t}={}){let n={str:String(e)?.trim()};if(gn.run("parse-start",n),n.color)return n.color;if(n.parsed=Em(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,a=[i,s],u=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let d of T.all){let f=d.getFormat("color");if(f&&(a.includes(f.id)||f.ids?.filter(p=>a.includes(p)).length)){const p=Object.keys(d.coords).map((y,v)=>n.parsed.args[v]||0);let g;return f.coordGrammar&&(g=cc(d,f,"color",p)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!i.startsWith("--")&&at.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&at.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:d.id,coords:p,alpha:u}}}let l="",c=i in T.registry?i:s;if(c in T.registry){let d=T.registry[c].formats?.color?.id;d&&(l=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${i}). `+(l||"Missing a plugin?"))}else for(let i of T.all){let s=i.getFormat(r);if(s&&s.type==="function"){let a=1;(s.lastAlpha||Am(n.parsed.args).alpha)&&(a=n.parsed.args.pop());let u=n.parsed.args,l;return s.coordGrammar&&(l=cc(i,s,r,u)),t&&Object.assign(t,{formatId:s.name,types:l}),{spaceId:i.id,coords:u,alpha:a}}}}else for(let r of T.all)for(let i in r.formats){let s=r.formats[i];if(s.type!=="custom"||s.test&&!s.test(n.str))continue;let a=s.parse(n.str);if(a)return a.alpha??=1,t&&(t.formatId=i),a}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}o(km,"parse");function W(e){if(Array.isArray(e))return e.map(W);if(!e)throw new TypeError("Empty color reference");Ei(e)&&(e=km(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}o(W,"getColor");const eb=75e-6;class T{static{o(this,"ColorSpace")}constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?T.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Ba(r),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:T.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:tb(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),gn.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=eb}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,s)=>{let a=r[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(i))return!0;let[u,l]=a.range;return(u===void 0||i>=u-n)&&(l===void 0||i<=l+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=dc(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=dc(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const u=W(t);[t,n]=[u.space,u.coords]}if(t=T.get(t),this.equals(t))return n;n=n.map(u=>Number.isNaN(u)?0:u);let r=this.path,i=t.path,s,a;for(let u=0;u<r.length&&r[u].equals(i[u]);u++)s=r[u],a=u;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=r.length-1;u>a;u--)n=r[u].toBase(n);for(let u=a+1;u<i.length;u++)n=i[u].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=W(t);[t,n]=[r.space,r.coords]}return t=T.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(T.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof T)return t;if(hn(t)==="string"){let i=T.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return T.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=hn(t),i,s;if(r==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=T.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=hn(s),r==="number"||r==="string"&&s>=0){let l=Object.entries(i.coords)[s];if(l)return{space:i,id:l[0],index:s,...l[1]}}i=T.get(i);let a=s.toLowerCase(),u=0;for(let l in i.coords){let c=i.coords[l];if(l.toLowerCase()===a||c.name?.toLowerCase()===a)return{space:i,id:l,index:u,...c};u++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function tb(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}o(tb,"getPath");function dc(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=$m(e.coords);let n=Object.entries(t).map(([r,i],s)=>{let a=e.coordGrammar[s][0],u=i.range||i.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:u,toRange:l,suffix:c}});e.serializeCoords=(r,i)=>r.map((s,a)=>{let{fromRange:u,toRange:l,suffix:c}=n[a];return u&&l&&(s=Cu(u,l,s)),s=xs(s,{precision:i,unit:c}),s})}return e}o(dc,"processFormat");var xe=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Qe extends T{static{o(this,"RGBColorSpace")}constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=xe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=de(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Fs(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Fs(this.base.white,this.white,n),de(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function Ai(e,t){return e=W(e),!t||e.space.equals(t)?e.coords.slice():(t=T.get(t),t.from(e))}o(Ai,"getAll");function rt(e,t){e=W(e);let{space:n,index:r}=T.resolveCoord(t,e.space);return Ai(e,n)[r]}o(rt,"get");function Su(e,t,n){return e=W(e),t=T.get(t),e.coords=t.to(e.space,n),e}o(Su,"setAll");Su.returns="color";function Xt(e,t,n){if(e=W(e),arguments.length===2&&hn(arguments[1])==="object"){let r=arguments[1];for(let i in r)Xt(e,i,r[i])}else{typeof n=="function"&&(n=n(rt(e,t)));let{space:r,index:i}=T.resolveCoord(t,e.space),s=Ai(e,r);s[i]=n,Su(e,r,s)}return e}o(Xt,"set");Xt.returns="color";var Mu=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:xe,fromBase:o(e=>Fs(xe.white,"D50",e),"fromBase"),toBase:o(e=>Fs("D50",xe.white,e),"toBase")});const nb=216/24389,fc=24/116,Oi=24389/27;let Go=We.D50;var it=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Go,base:Mu,fromBase(e){let n=e.map((r,i)=>r/Go[i]).map(r=>r>nb?Math.cbrt(r):(Oi*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fc?Math.pow(t[0],3):(116*t[0]-16)/Oi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Oi,t[2]>fc?Math.pow(t[2],3):(116*t[2]-16)/Oi].map((r,i)=>r*Go[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Bt(e){return(e%360+360)%360}o(Bt,"constrain");function rb(e,t){if(e==="raw")return t;let[n,r]=t.map(Bt),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}o(rb,"adjust");var ci=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:it,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Bt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const hc=25**7,Ts=Math.PI,mc=180/Ts,Yn=Ts/180;function pc(e){const t=e*e;return t*t*t*e}o(pc,"pow7");function xm(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=W([e,t]);let[s,a,u]=it.from(e),l=ci.from(it,[s,a,u])[1],[c,d,f]=it.from(t),p=ci.from(it,[c,d,f])[1];l<0&&(l=0),p<0&&(p=0);let g=(l+p)/2,y=pc(g),v=.5*(1-Math.sqrt(y/(y+hc))),$=(1+v)*a,E=(1+v)*d,k=Math.sqrt($**2+u**2),B=Math.sqrt(E**2+f**2),R=$===0&&u===0?0:Math.atan2(u,$),H=E===0&&f===0?0:Math.atan2(f,E);R<0&&(R+=2*Ts),H<0&&(H+=2*Ts),R*=mc,H*=mc;let Ie=c-s,wt=B-k,qe=H-R,et=R+H,kt=Math.abs(qe),Lt;k*B===0?Lt=0:kt<=180?Lt=qe:qe>180?Lt=qe-360:qe<-180?Lt=qe+360:at.warn("the unthinkable has happened");let Fi=2*Math.sqrt(B*k)*Math.sin(Lt*Yn/2),lp=(s+c)/2,Eo=(k+B)/2,Ju=pc(Eo),It;k*B===0?It=et:kt<=180?It=et/2:et<360?It=(et+360)/2:It=(et-360)/2;let Xu=(lp-50)**2,cp=1+.015*Xu/Math.sqrt(20+Xu),Qu=1+.045*Eo,Nr=1;Nr-=.17*Math.cos((It-30)*Yn),Nr+=.24*Math.cos(2*It*Yn),Nr+=.32*Math.cos((3*It+6)*Yn),Nr-=.2*Math.cos((4*It-63)*Yn);let el=1+.015*Eo*Nr,dp=30*Math.exp(-1*((It-275)/25)**2),fp=2*Math.sqrt(Ju/(Ju+hc)),hp=-1*Math.sin(2*dp*Yn)*fp,Ti=(Ie/(n*cp))**2;return Ti+=(wt/(r*Qu))**2,Ti+=(Fi/(i*el))**2,Ti+=hp*(wt/(r*Qu))*(Fi/(i*el)),Math.sqrt(Ti)}o(xm,"deltaE2000");const ib=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],sb=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],ob=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],ab=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var br=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:xe,fromBase(e){let n=de(ib,e).map(r=>Math.cbrt(r));return de(ob,n)},toBase(e){let n=de(ab,e).map(r=>r**3);return de(sb,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Pa(e,t){[e,t]=W([e,t]);let[n,r,i]=br.from(e),[s,a,u]=br.from(t),l=n-s,c=r-a,d=i-u;return Math.sqrt(l**2+c**2+d**2)}o(Pa,"deltaEOK");const ub=75e-6;function In(e,t,{epsilon:n=ub}={}){e=W(e),t||(t=e.space),t=T.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}o(In,"inGamut");function vr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}o(vr,"clone");function Fm(e,t,n="lab"){n=T.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((s,a,u)=>{let l=i[u];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}o(Fm,"distance");function lb(e,t){return Fm(e,t,"lab")}o(lb,"deltaE76");const cb=Math.PI,gc=cb/180;function db(e,t,{l:n=2,c:r=1}={}){[e,t]=W([e,t]);let[i,s,a]=it.from(e),[,u,l]=ci.from(it,[i,s,a]),[c,d,f]=it.from(t),p=ci.from(it,[c,d,f])[1];u<0&&(u=0),p<0&&(p=0);let g=i-c,y=u-p,v=s-d,$=a-f,E=v**2+$**2-y**2,k=.511;i>=16&&(k=.040975*i/(1+.01765*i));let B=.0638*u/(1+.0131*u)+.638,R;Number.isNaN(l)&&(l=0),l>=164&&l<=345?R=.56+Math.abs(.2*Math.cos((l+168)*gc)):R=.36+Math.abs(.4*Math.cos((l+35)*gc));let H=Math.pow(u,4),Ie=Math.sqrt(H/(H+1900)),wt=B*(Ie*R+1-Ie),qe=(g/(n*k))**2;return qe+=(y/(r*B))**2,qe+=E/wt**2,Math.sqrt(qe)}o(db,"deltaECMC");const yc=203;var ku=new T({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:xe,fromBase(e){return e.map(t=>Math.max(t*yc,0))},toBase(e){return e.map(t=>Math.max(t/yc,0))}});const Vi=1.15,_i=.66,wc=2610/2**14,fb=2**14/2610,bc=3424/2**12,vc=2413/2**7,Dc=2392/2**7,hb=1.7*2523/2**5,Ec=2**5/(1.7*2523),Ui=-.56,Ko=16295499532821565e-27,mb=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],pb=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],gb=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],yb=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Tm=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ku,fromBase(e){let[t,n,r]=e,i=Vi*t-(Vi-1)*r,s=_i*n-(_i-1)*t,u=de(mb,[i,s,r]).map(function(p){let g=bc+vc*(p/1e4)**wc,y=1+Dc*(p/1e4)**wc;return(g/y)**hb}),[l,c,d]=de(gb,u);return[(1+Ui)*l/(1+Ui*l)-Ko,c,d]},toBase(e){let[t,n,r]=e,i=(t+Ko)/(1+Ui-Ui*(t+Ko)),a=de(yb,[i,n,r]).map(function(p){let g=bc-p**Ec,y=Dc*p**Ec-vc;return 1e4*(g/y)**fb}),[u,l,c]=de(pb,a),d=(u+(Vi-1)*c)/Vi,f=(l+(_i-1)*d)/_i;return[d,f,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),La=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Tm,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Bt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function wb(e,t){[e,t]=W([e,t]);let[n,r,i]=La.from(e),[s,a,u]=La.from(t),l=n-s,c=r-a;Number.isNaN(i)&&Number.isNaN(u)?(i=0,u=0):Number.isNaN(i)?i=u:Number.isNaN(u)&&(u=i);let d=i-u,f=2*Math.sqrt(r*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}o(wb,"deltaEJz");const Nm=3424/4096,Bm=2413/128,Pm=2392/128,Ac=2610/16384,bb=2523/32,vb=16384/2610,Cc=32/2523,Db=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Eb=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ab=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Cb=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Ia=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ku,fromBase(e){let t=de(Db,e);return $b(t)},toBase(e){let t=Sb(e);return de(Cb,t)}});function $b(e){let t=e.map(function(n){let r=Nm+Bm*(n/1e4)**Ac,i=1+Pm*(n/1e4)**Ac;return(r/i)**bb});return de(Eb,t)}o($b,"LMStoICtCp");function Sb(e){return de(Ab,e).map(function(r){let i=Math.max(r**Cc-Nm,0),s=Bm-Pm*r**Cc;return 1e4*(i/s)**vb})}o(Sb,"ICtCptoLMS");function Mb(e,t){[e,t]=W([e,t]);let[n,r,i]=Ia.from(e),[s,a,u]=Ia.from(t);return 720*Math.sqrt((n-s)**2+.25*(r-a)**2+(i-u)**2)}o(Mb,"deltaEITP");const kb=We.D65,Lm=.42,$c=1/Lm,Ho=2*Math.PI,Im=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],xb=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Fb=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Tb={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Nn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Nb=180/Math.PI,Sc=Math.PI/180;function Rm(e,t){return e.map(r=>{const i=Ft(t*Math.abs(r)*.01,Lm);return 400*ro(i,r)/(i+27.13)})}o(Rm,"adapt$1");function Bb(e,t){const n=100/t*27.13**$c;return e.map(r=>{const i=Math.abs(r);return ro(n*Ft(i/(400-i),$c),r)})}o(Bb,"unadapt");function Pb(e){let t=Bt(e);t<=Nn.h[0]&&(t+=360);const n=Mm(Nn.h,t)-1,[r,i]=Nn.h.slice(n,n+2),[s,a]=Nn.e.slice(n,n+2),u=Nn.H[n],l=(t-r)/s;return u+100*l/(l+(i-t)/a)}o(Pb,"hueQuadrature");function Lb(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=Nn.h.slice(n,n+2),[s,a]=Nn.e.slice(n,n+2);return Bt((t*(a*r-s*i)-100*r*a)/(t*(a-s)-100*a))}o(Lb,"invHueQuadrature");function Om(e,t,n,r,i){const s={};s.discounting=i,s.refWhite=e,s.surround=r;const a=e.map(v=>v*100);s.la=t,s.yb=n;const u=a[1],l=de(Im,a);r=Tb[s.surround];const c=r[0];s.c=r[1],s.nc=r[2];const f=(1/(5*s.la+1))**4;s.fl=f*s.la+.1*(1-f)*(1-f)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/u,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const p=Math.max(Math.min(c*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=l.map(v=>li(1,u/v,p)),s.dRgbInv=s.dRgb.map(v=>1/v);const g=l.map((v,$)=>v*s.dRgb[$]),y=Rm(g,s.fl);return s.aW=s.nbb*(2*y[0]+y[1]+.05*y[2]),s}o(Om,"environment");const Mc=Om(kb,64/Math.PI*.2,20,"average",!1);function Ra(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=Bt(e.h)*Sc:n=Lb(e.H)*Sc;const r=Math.cos(n),i=Math.sin(n);let s=0;e.J!==void 0?s=Ft(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let a=0;e.C!==void 0?a=e.C/s:e.M!==void 0?a=e.M/t.flRoot/s:e.s!==void 0&&(a=4e-4*e.s**2*(t.aW+4)/t.c);const u=Ft(a*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(n+2)+3.8),c=t.aW*Ft(s,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,f=c/t.nbb,p=23*(f+.305)*$u(u,23*d+u*(11*r+108*i)),g=p*r,y=p*i,v=Bb(de(Fb,[f,g,y]).map($=>$*1/1403),t.fl);return de(xb,v.map(($,E)=>$*t.dRgbInv[E])).map($=>$/100)}o(Ra,"fromCam16");function Vm(e,t){const n=e.map(B=>B*100),r=Rm(de(Im,n).map((B,R)=>B*t.dRgb[R]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,s=(r[0]+r[1]-2*r[2])/9,a=(Math.atan2(s,i)%Ho+Ho)%Ho,u=.25*(Math.cos(a+2)+3.8),l=5e4/13*t.nc*t.ncb*$u(u*Math.sqrt(i**2+s**2),r[0]+r[1]+1.05*r[2]+.305),c=Ft(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=Ft(d/t.aW,.5*t.c*t.z),p=100*Ft(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,y=c*f,v=y*t.flRoot,$=Bt(a*Nb),E=Pb($),k=50*Ft(t.c*c/(t.aW+4),1/2);return{J:p,C:y,h:$,s:k,Q:g,M:v,H:E}}o(Vm,"toCam16");var Ib=new T({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xe,fromBase(e){const t=Vm(e,Mc);return[t.J,t.M,t.h]},toBase(e){return Ra({J:e[0],M:e[1],h:e[2]},Mc)}});const Rb=We.D65,Ob=216/24389,_m=24389/27;function Vb(e){return 116*(e>Ob?Math.cbrt(e):(_m*e+16)/116)-16}o(Vb,"toLstar");function Oa(e){return e>8?Math.pow((e+16)/116,3):e/_m}o(Oa,"fromLstar");function _b(e,t){let[n,r,i]=e,s=[],a=0;if(i===0)return[0,0,0];let u=Oa(i);i>0?a=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:a=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,f=1/0;for(;d<=c;){s=Ra({J:a,C:r,h:n},t);const p=Math.abs(s[1]-u);if(p<f){if(p<=l)return s;f=p}a=a-(s[1]-u)*a/(2*s[1]),d+=1}return Ra({J:a,C:r,h:n},t)}o(_b,"fromHct");function Ub(e,t){const n=Vb(e[1]);if(n===0)return[0,0,0];const r=Vm(e,xu);return[Bt(r.h),r.C,n]}o(Ub,"toHct");const xu=Om(Rb,200/Math.PI*Oa(50),Oa(50)*100,"average",!1);var di=new T({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:xe,fromBase(e){return Ub(e)},toBase(e){return _b(e,xu)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Wb=Math.PI/180,kc=[1,.007,.0228];function xc(e){e[1]<0&&(e=di.fromBase(di.toBase(e)));const t=Math.log(Math.max(1+kc[2]*e[1]*xu.flRoot,1))/kc[2],n=e[0]*Wb,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}o(xc,"convertUcsAb");function jb(e,t){[e,t]=W([e,t]);let[n,r,i]=xc(di.from(e)),[s,a,u]=xc(di.from(t));return Math.sqrt((n-s)**2+(r-a)**2+(i-u)**2)}o(jb,"deltaEHCT");var Dr={deltaE76:lb,deltaECMC:db,deltaE2000:xm,deltaEJz:wb,deltaEITP:Mb,deltaEOK:Pa,deltaEHCT:jb};function qb(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}o(qb,"calcEpsilon");const Fc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function yn(e,{method:t=at.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=W(e),Ei(arguments[1])?n=arguments[1]:n||(n=e.space),n=T.get(n),In(e,n,{epsilon:0}))return e;let a;if(t==="css")a=zb(e,{space:n});else{if(t!=="clip"&&!In(e,n)){Object.prototype.hasOwnProperty.call(Fc,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:s}=Fc[t]);let u=xm;if(r!==""){for(let c in Dr)if("deltae"+r.toLowerCase()===c.toLowerCase()){u=Dr[c];break}}let l=yn(ce(e,n),{method:"clip",space:n});if(u(e,l)>i){if(Object.keys(s).length===3){let k=T.resolveCoord(s.channel),B=rt(ce(e,k.space),k.id);if(pn(B)&&(B=0),B>=s.max)return ce({space:"xyz-d65",coords:We.D65},e.space);if(B<=s.min)return ce({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=T.resolveCoord(t),d=c.space,f=c.id,p=ce(e,d);p.coords.forEach((k,B)=>{pn(k)&&(p.coords[B]=0)});let y=(c.range||c.refRange)[0],v=qb(i),$=y,E=rt(p,f);for(;E-$>v;){let k=vr(p);k=yn(k,{space:n,method:"clip"}),u(p,k)-i<v?$=rt(p,f):E=rt(p,f),Xt(p,f,($+E)/2)}a=ce(p,n)}else a=l}else a=ce(e,n);if(t==="clip"||!In(a,n,{epsilon:0})){let u=Object.values(n.coords).map(l=>l.range||[]);a.coords=a.coords.map((l,c)=>{let[d,f]=u[c];return d!==void 0&&(l=Math.max(d,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return n!==e.space&&(a=ce(a,e.space)),e.coords=a.coords,e}o(yn,"toGamut");yn.returns="color";const Tc={WHITE:{space:br,coords:[1,0,0]},BLACK:{space:br,coords:[0,0,0]}};function zb(e,{space:t}={}){e=W(e),t||(t=e.space),t=T.get(t);const i=T.get("oklch");if(t.isUnbounded)return ce(e,t);const s=ce(e,i);let a=s.coords[0];if(a>=1){const y=ce(Tc.WHITE,t);return y.alpha=e.alpha,ce(y,t)}if(a<=0){const y=ce(Tc.BLACK,t);return y.alpha=e.alpha,ce(y,t)}if(In(s,t,{epsilon:0}))return ce(s,t);function u(y){const v=ce(y,t),$=Object.values(t.coords);return v.coords=v.coords.map((E,k)=>{if("range"in $[k]){const[B,R]=$[k].range;return Sm(B,E,R)}return E}),v}o(u,"clip");let l=0,c=s.coords[1],d=!0,f=vr(s),p=u(f),g=Pa(p,f);if(g<.02)return p;for(;c-l>1e-4;){const y=(l+c)/2;if(f.coords[1]=y,d&&In(f,t,{epsilon:0}))l=y;else if(p=u(f),g=Pa(p,f),g<.02){if(.02-g<1e-4)break;d=!1,l=y}else c=y}return p}o(zb,"toGamutCSS");function ce(e,t,{inGamut:n}={}){e=W(e),t=T.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=yn(i,n===!0?void 0:n)),i}o(ce,"to");ce.returns="color";function ni(e,{precision:t=at.precision,format:n="default",inGamut:r=!0,...i}={}){let s;e=W(e);let a=n;n=e.space.getFormat(n)??e.space.getFormat("default")??T.DEFAULT_FORMAT;let u=e.coords.slice();if(r||=n.toGamut,r&&!In(e)&&(u=yn(vr(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)s=n.serialize(u,e.alpha,i);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let l=n.name||"color";n.serializeCoords?u=n.serializeCoords(u,t):t!==null&&(u=u.map(p=>xs(p,{precision:t})));let c=[...u];if(l==="color"){let p=n.id||n.ids?.[0]||e.space.id;c.unshift(p)}let d=e.alpha;t!==null&&(d=xs(d,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${d}`;s=`${l}(${c.join(n.commas?", ":" ")}${f})`}return s}o(ni,"serialize");const Gb=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Kb=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var io=new Qe({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Gb,fromXYZ_M:Kb});const Wi=1.09929682680944,Nc=.018053968510807;var Um=new Qe({id:"rec2020",name:"REC.2020",base:io,toBase(e){return e.map(function(t){return t<Nc*4.5?t/4.5:Math.pow((t+Wi-1)/Wi,1/.45)})},fromBase(e){return e.map(function(t){return t>=Nc?Wi*Math.pow(t,.45)-(Wi-1):4.5*t})}});const Hb=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Zb=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Wm=new Qe({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Hb,fromXYZ_M:Zb});const Yb=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Se=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var jm=new Qe({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Yb,fromXYZ_M:Se}),Bc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Pc=Array(3).fill("<percentage> | <number>[0, 255]"),Lc=Array(3).fill("<number>[0, 255]");var Er=new Qe({id:"srgb",name:"sRGB",base:jm,fromBase:o(e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),"fromBase"),toBase:o(e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:Pc},rgb_number:{name:"rgb",commas:!0,coords:Lc,noAlpha:!0},color:{},rgba:{coords:Pc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Lc},hex:{type:"custom",toGamut:!0,test:o(e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:o((e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let r=n&&e.every(s=>s%17===0);return"#"+e.map(s=>r?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:o(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Bc.black,t.alpha=0):t.coords=Bc[e],t.coords)return t}}}}),qm=new Qe({id:"p3",cssId:"display-p3",name:"P3",base:Wm,fromBase:Er.fromBase,toBase:Er.toBase});at.display_space=Er;let Jb;if(typeof CSS<"u"&&CSS.supports)for(let e of[it,Um,qm]){let t=e.getMinCoords(),r=ni({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){at.display_space=e;break}}function Xb(e,{space:t=at.display_space,...n}={}){let r=ni(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!at.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(pn)||pn(e.alpha))&&!(Jb??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=vr(e),i.coords=i.coords.map(De),i.alpha=De(i.alpha),r=ni(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=ce(i,t),r=new String(ni(i,n)),r.color=i}return r}o(Xb,"display");function Qb(e,t){return e=W(e),t=W(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}o(Qb,"equals");function wn(e){return rt(e,[xe,"y"])}o(wn,"getLuminance");function zm(e,t){Xt(e,[xe,"y"],t)}o(zm,"setLuminance");function e2(e){Object.defineProperty(e.prototype,"luminance",{get(){return wn(this)},set(t){zm(this,t)}})}o(e2,"register$2");var t2=Object.freeze({__proto__:null,getLuminance:wn,register:e2,setLuminance:zm});function n2(e,t){e=W(e),t=W(t);let n=Math.max(wn(e),0),r=Math.max(wn(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}o(n2,"contrastWCAG21");const r2=.56,i2=.57,s2=.62,o2=.65,Ic=.022,a2=1.414,u2=.1,l2=5e-4,c2=1.14,Rc=.027,d2=1.14;function Oc(e){return e>=Ic?e:e+(Ic-e)**a2}o(Oc,"fclamp");function Jn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}o(Jn,"linearize");function f2(e,t){t=W(t),e=W(e);let n,r,i,s,a,u;t=ce(t,"srgb"),[s,a,u]=t.coords;let l=Jn(s)*.2126729+Jn(a)*.7151522+Jn(u)*.072175;e=ce(e,"srgb"),[s,a,u]=e.coords;let c=Jn(s)*.2126729+Jn(a)*.7151522+Jn(u)*.072175,d=Oc(l),f=Oc(c),p=f>d;return Math.abs(f-d)<l2?r=0:p?(n=f**r2-d**i2,r=n*c2):(n=f**o2-d**s2,r=n*d2),Math.abs(r)<u2?i=0:r>0?i=r-Rc:i=r+Rc,i*100}o(f2,"contrastAPCA");function h2(e,t){e=W(e),t=W(t);let n=Math.max(wn(e),0),r=Math.max(wn(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}o(h2,"contrastMichelson");const m2=5e4;function p2(e,t){e=W(e),t=W(t);let n=Math.max(wn(e),0),r=Math.max(wn(t),0);return r>n&&([n,r]=[r,n]),r===0?m2:(n-r)/r}o(p2,"contrastWeber");function g2(e,t){e=W(e),t=W(t);let n=rt(e,[it,"l"]),r=rt(t,[it,"l"]);return Math.abs(n-r)}o(g2,"contrastLstar");const y2=216/24389,Vc=24/116,ji=24389/27;let Zo=We.D65;var Va=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zo,base:xe,fromBase(e){let n=e.map((r,i)=>r/Zo[i]).map(r=>r>y2?Math.cbrt(r):(ji*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Vc?Math.pow(t[0],3):(116*t[0]-16)/ji,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ji,t[2]>Vc?Math.pow(t[2],3):(116*t[2]-16)/ji].map((r,i)=>r*Zo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Yo=Math.pow(5,.5)*.5+.5;function w2(e,t){e=W(e),t=W(t);let n=rt(e,[Va,"l"]),r=rt(t,[Va,"l"]),i=Math.abs(Math.pow(n,Yo)-Math.pow(r,Yo)),s=Math.pow(i,1/Yo)*Math.SQRT2-40;return s<7.5?0:s}o(w2,"contrastDeltaPhi");var us=Object.freeze({__proto__:null,contrastAPCA:f2,contrastDeltaPhi:w2,contrastLstar:g2,contrastMichelson:h2,contrastWCAG21:n2,contrastWeber:p2});function b2(e,t,n={}){Ei(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let s=Object.keys(us).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=W(e),t=W(t);for(let s in us)if("contrast"+r.toLowerCase()===s.toLowerCase())return us[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}o(b2,"contrast");function so(e){let[t,n,r]=Ai(e,xe),i=t+15*n+3*r;return[4*t/i,9*n/i]}o(so,"uv");function Gm(e){let[t,n,r]=Ai(e,xe),i=t+n+r;return[t/i,n/i]}o(Gm,"xy");function v2(e){Object.defineProperty(e.prototype,"uv",{get(){return so(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Gm(this)}})}o(v2,"register$1");var D2=Object.freeze({__proto__:null,register:v2,uv:so,xy:Gm});function Hr(e,t,n={}){Ei(n)&&(n={method:n});let{method:r=at.deltaE,...i}=n;for(let s in Dr)if("deltae"+r.toLowerCase()===s.toLowerCase())return Dr[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}o(Hr,"deltaE");function E2(e,t=.25){let r=[T.get("oklch","lch"),"l"];return Xt(e,r,i=>i*(1+t))}o(E2,"lighten");function A2(e,t=.25){let r=[T.get("oklch","lch"),"l"];return Xt(e,r,i=>i*(1-t))}o(A2,"darken");var C2=Object.freeze({__proto__:null,darken:A2,lighten:E2});function Km(e,t,n=.5,r={}){return[e,t]=[W(e),W(t)],hn(n)==="object"&&([n,r]=[.5,n]),Ci(e,t,r)(n)}o(Km,"mix");function Hm(e,t,n={}){let r;Fu(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:a=2,maxSteps:u=1e3,...l}=n;r||([e,t]=[W(e),W(t)],r=Ci(e,t,l));let c=Hr(e,t),d=i>0?Math.max(a,Math.ceil(c/i)+1):a,f=[];if(u!==void 0&&(d=Math.min(d,u)),d===1)f=[{p:.5,color:r(.5)}];else{let p=1/(d-1);f=Array.from({length:d},(g,y)=>{let v=y*p;return{p:v,color:r(v)}})}if(i>0){let p=f.reduce((g,y,v)=>{if(v===0)return 0;let $=Hr(y.color,f[v-1].color,s);return Math.max(g,$)},0);for(;p>i;){p=0;for(let g=1;g<f.length&&f.length<u;g++){let y=f[g-1],v=f[g],$=(v.p+y.p)/2,E=r($);p=Math.max(p,Hr(E,y.color),Hr(E,v.color)),f.splice(g,0,{p:$,color:r($)}),g++}}}return f=f.map(p=>p.color),f}o(Hm,"steps");function Ci(e,t,n={}){if(Fu(e)){let[l,c]=[e,t];return Ci(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:r,outputSpace:i,progression:s,premultiplied:a}=n;e=W(e),t=W(t),e=vr(e),t=vr(t);let u={colors:[e,t],options:n};if(r?r=T.get(r):r=T.registry[at.interpolationSpace]||e.space,i=i?T.get(i):r,e=ce(e,r),t=ce(t,r),e=yn(e),t=yn(t),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",c=[r,"h"],[d,f]=[rt(e,c),rt(t,c)];isNaN(d)&&!isNaN(f)?d=f:isNaN(f)&&!isNaN(d)&&(f=d),[d,f]=rb(l,[d,f]),Xt(e,c,d),Xt(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((p,g)=>{let y=t.coords[g];return li(p,y,l)}),d=li(e.alpha,t.alpha,l),f={space:r,coords:c,alpha:d};return a&&(f.coords=f.coords.map(p=>p/d)),i!==r&&(f=ce(f,i)),f},{rangeArgs:u})}o(Ci,"range");function Fu(e){return hn(e)==="function"&&!!e.rangeArgs}o(Fu,"isRange");at.interpolationSpace="lab";function $2(e){e.defineFunction("mix",Km,{returns:"color"}),e.defineFunction("range",Ci,{returns:"function<color>"}),e.defineFunction("steps",Hm,{returns:"array<color>"})}o($2,"register");var S2=Object.freeze({__proto__:null,isRange:Fu,mix:Km,range:Ci,register:$2,steps:Hm}),Zm=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Er,fromBase:o(e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,s]=e,[a,u,l]=[NaN,0,(n+t)/2],c=t-n;if(c!==0){switch(u=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case r:a=(i-s)/c+(i<s?6:0);break;case i:a=(s-r)/c+2;break;case s:a=(r-i)/c+4}a=a*60}return u<0&&(a+=180,u=Math.abs(u)),a>=360&&(a-=360),[a,u*100,l*100]},"fromBase"),toBase:o(e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(s){let a=(s+t/30)%12,u=n*Math.min(r,1-r);return r-u*Math.max(-1,Math.min(a-3,9-a,1))}return o(i,"f"),[i(0),i(8),i(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ym=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Zm,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),M2=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ym,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let u=n/i;return[t,0,u*100]}let s=1-r,a=s===0?0:1-n/s;return[t,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const k2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],x2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Jm=new Qe({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:k2,fromXYZ_M:x2}),F2=new Qe({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Jm,toBase:o(e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),"toBase"),fromBase:o(e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),"fromBase")});const T2=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],N2=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Xm=new Qe({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Mu,toXYZ_M:T2,fromXYZ_M:N2});const B2=1/512,P2=16/512;var L2=new Qe({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Xm,toBase(e){return e.map(t=>t<P2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=B2?t**(1/1.8):16*t)}}),I2=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:br,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Bt(i)]},toBase(e){let[t,n,r]=e,i,s;return isNaN(r)?(i=0,s=0):(i=n*Math.cos(r*Math.PI/180),s=n*Math.sin(r*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Qm=We.D65;const R2=216/24389,_c=24389/27,[Uc,Wc]=so({space:xe,coords:Qm});var e0=new T({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Qm,base:xe,fromBase(e){let t=[De(e[0]),De(e[1]),De(e[2])],n=t[1],[r,i]=so({space:xe,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let s=n<=R2?_c*n:116*Math.cbrt(n)-16;return[s,13*s*(r-Uc),13*s*(i-Wc)]},toBase(e){let[t,n,r]=e;if(t===0||pn(t))return[0,0,0];n=De(n),r=De(r);let i=n/(13*t)+Uc,s=r/(13*t)+Wc,a=t<=8?t/_c:Math.pow((t+16)/116,3);return[a*(9*i/(4*s)),a,a*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Tu=new T({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:e0,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Bt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const O2=216/24389,V2=24389/27,jc=Se[0][0],qc=Se[0][1],Jo=Se[0][2],zc=Se[1][0],Gc=Se[1][1],Xo=Se[1][2],Kc=Se[2][0],Hc=Se[2][1],Qo=Se[2][2];function Xn(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}o(Xn,"distanceFromOriginAngle");function Ns(e){const t=Math.pow(e+16,3)/1560896,n=t>O2?t:e/V2,r=n*(284517*jc-94839*Jo),i=n*(838422*Jo+769860*qc+731718*jc),s=n*(632260*Jo-126452*qc),a=n*(284517*zc-94839*Xo),u=n*(838422*Xo+769860*Gc+731718*zc),l=n*(632260*Xo-126452*Gc),c=n*(284517*Kc-94839*Qo),d=n*(838422*Qo+769860*Hc+731718*Kc),f=n*(632260*Qo-126452*Hc);return{r0s:r/s,r0i:i*e/s,r1s:r/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:a/l,g0i:u*e/l,g1s:a/(l+126452),g1i:(u-769860)*e/(l+126452),b0s:c/f,b0i:d*e/f,b1s:c/(f+126452),b1i:(d-769860)*e/(f+126452)}}o(Ns,"calculateBoundingLines");function Zc(e,t){const n=t/360*Math.PI*2,r=Xn(e.r0s,e.r0i,n),i=Xn(e.r1s,e.r1i,n),s=Xn(e.g0s,e.g0i,n),a=Xn(e.g1s,e.g1i,n),u=Xn(e.b0s,e.b0i,n),l=Xn(e.b1s,e.b1i,n);return Math.min(r,i,s,a,u,l)}o(Zc,"calcMaxChromaHsluv");var _2=new T({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Tu,gamutSpace:Er,fromBase(e){let[t,n,r]=[De(e[0]),De(e[1]),De(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Ns(t),a=Zc(s,r);i=n/a*100}return[r,i,t]},toBase(e){let[t,n,r]=[De(e[0]),De(e[1]),De(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=Ns(r);i=Zc(s,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Se[0][0];Se[0][1];Se[0][2];Se[1][0];Se[1][1];Se[1][2];Se[2][0];Se[2][1];Se[2][2];function Qn(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}o(Qn,"distanceFromOrigin");function Yc(e){let t=Qn(e.r0s,e.r0i),n=Qn(e.r1s,e.r1i),r=Qn(e.g0s,e.g0i),i=Qn(e.g1s,e.g1i),s=Qn(e.b0s,e.b0i),a=Qn(e.b1s,e.b1i);return Math.min(t,n,r,i,s,a)}o(Yc,"calcMaxChromaHpluv");var U2=new T({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Tu,gamutSpace:"self",fromBase(e){let[t,n,r]=[De(e[0]),De(e[1]),De(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Ns(t),a=Yc(s);i=n/a*100}return[r,i,t]},toBase(e){let[t,n,r]=[De(e[0]),De(e[1]),De(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=Ns(r);i=Yc(s)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Jc=203,Xc=2610/2**14,W2=2**14/2610,j2=2523/2**5,Qc=2**5/2523,ed=3424/2**12,td=2413/2**7,nd=2392/2**7;var q2=new Qe({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:io,toBase(e){return e.map(function(t){return(Math.max(t**Qc-ed,0)/(td-nd*t**Qc))**W2*1e4/Jc})},fromBase(e){return e.map(function(t){let n=Math.max(t*Jc/1e4,0),r=ed+td*n**Xc,i=1+nd*n**Xc;return(r/i)**j2})}});const rd=.17883277,id=.28466892,sd=.55991073,ea=3.7743;var z2=new Qe({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:io,toBase(e){return e.map(function(t){return t<=.5?t**2/3*ea:(Math.exp((t-sd)/rd)+id)/12*ea})},fromBase(e){return e.map(function(t){return t/=ea,t<=1/12?Math.sqrt(3*t):rd*Math.log(12*t-id)+sd})}});const t0={};gn.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=n0(e.W1,e.W2,e.options.method))});gn.add("chromatic-adaptation-end",e=>{e.M||(e.M=n0(e.W1,e.W2,e.options.method))});function oo({id:e,toCone_M:t,fromCone_M:n}){t0[e]=arguments[0]}o(oo,"defineCAT");function n0(e,t,n="Bradford"){let r=t0[n],[i,s,a]=de(r.toCone_M,e),[u,l,c]=de(r.toCone_M,t),d=[[u/i,0,0],[0,l/s,0],[0,0,c/a]],f=de(d,r.toCone_M);return de(r.fromCone_M,f)}o(n0,"adapt");oo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});oo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});oo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});oo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(We,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});We.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const G2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],K2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var r0=new Qe({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:We.ACES,toXYZ_M:G2,fromXYZ_M:K2});const qi=2**-16,ta=-.35828683,zi=(Math.log2(65504)+9.72)/17.52;var H2=new Qe({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[ta,zi],name:"Red"},g:{range:[ta,zi],name:"Green"},b:{range:[ta,zi],name:"Blue"}},referred:"scene",base:r0,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-qi)*2:n<zi?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(qi)+9.72)/17.52:t<qi?(Math.log2(qi+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),od=Object.freeze({__proto__:null,A98RGB:F2,A98RGB_Linear:Jm,ACEScc:H2,ACEScg:r0,CAM16_JMh:Ib,HCT:di,HPLuv:U2,HSL:Zm,HSLuv:_2,HSV:Ym,HWB:M2,ICTCP:Ia,JzCzHz:La,Jzazbz:Tm,LCH:ci,LCHuv:Tu,Lab:it,Lab_D65:Va,Luv:e0,OKLCH:I2,OKLab:br,P3:qm,P3_Linear:Wm,ProPhoto:L2,ProPhoto_Linear:Xm,REC_2020:Um,REC_2020_Linear:io,REC_2100_HLG:z2,REC_2100_PQ:q2,XYZ_ABS_D65:ku,XYZ_D50:Mu,XYZ_D65:xe,sRGB:Er,sRGB_Linear:jm});class q{static{o(this,"Color")}constructor(...t){let n;t.length===1&&(n=W(t[0]));let r,i,s;n?(r=n.space||n.spaceId,i=n.coords,s=n.alpha):[r,i,s]=t,Object.defineProperty(this,"space",{value:T.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:o(()=>this.get(a),"get"),set:o(u=>this.set(a,u),"set")})}get spaceId(){return this.space.id}clone(){return new q(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Xb(this,...t);return n.color=new q(n.color),n}static get(t,...n){return t instanceof q?t:new q(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:s}=r,a=o(function(...u){let l=n(...u);if(s==="color")l=q.get(l);else if(s==="function<color>"){let c=l;l=o(function(...d){let f=c(...d);return q.get(f)},"ret"),Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>q.get(c)));return l},"func");t in q||(q[t]=a),i&&(q.prototype[t]=function(...u){return a(this,...u)})}static defineFunctions(t){for(let n in t)q.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(q);else for(let n in t)q.defineFunction(n,t[n])}}q.defineFunctions({get:rt,getAll:Ai,set:Xt,setAll:Su,to:ce,equals:Qb,inGamut:In,toGamut:yn,distance:Fm,toString:ni});Object.assign(q,{util:J1,hooks:gn,WHITES:We,Space:T,spaces:T.registry,parse:km,defaults:at});for(let e of Object.keys(od))T.register(od[e]);for(let e in T.registry)_a(e,T.registry[e]);gn.add("colorspace-init-end",e=>{_a(e.id,e),e.aliases?.forEach(t=>{_a(t,e)})});function _a(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(q.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:o((i,s)=>{try{return T.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},"has"),get:o((i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:u}=T.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},"get"),set:o((i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:l}=T.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)},"set")})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}o(_a,"addSpaceAccessors");q.extend(Dr);q.extend({deltaE:Hr});Object.assign(q,{deltaEMethods:Dr});q.extend(C2);q.extend({contrast:b2});q.extend(D2);q.extend(t2);q.extend(S2);q.extend(us);const Z2=Symbol("no update");class na extends Mt()("observable-value-update"){static{o(this,"ObservableValueUpdateEvent")}}class Y2 extends Qs("observable-destroy"){static{o(this,"ObservableDestroyEvent")}}class J2{static{o(this,"AnyObservable")}listenTarget=new eo;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===Z2||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new na({detail:n})),!0)}listen(t,n){const r=o(i=>n(i.detail),"mapped");return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(na,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(na,n)}destroy(){this.listenTarget.dispatch(new Y2),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function X2(e,t){return Aw(e,t,(n,r)=>w.isFunction(n)&&w.isFunction(r)?!0:w.strictEquals(n,r))}o(X2,"observableEqualityCheck");function i0(e){const t=L.fromObject(mu(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}o(i0,"toLuxonDateTime");function Q2(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:_y(e.day),month:Vy(e.month),year:e.year,hour:Uy(e.hour),minute:Wy(e.minute),second:jy(e.second),millisecond:qy(e.millisecond),timezone:t??e.zoneName}}o(Q2,"parseLuxonDateTime");const s0="__vir__shape__definition__key__do__not__use__in__actual__objects",Nu="__vir__shape__specifier__key__do__not__use__in__actual__objects",o0="__vir__custom__specifier__key__do__not__use__in__actual__objects";function Bu(e){return w.hasKey(e,o0)}o(Bu,"isCustomSpecifier");function a0({customName:e,defaultValue:t,checker:n}){return{customName:e,checker:n,defaultValue:t,[o0]:!0,[Nu]:!0}}o(a0,"customShape");a0({customName:"UUID",defaultValue:qh.isUuid("00000000-0000-1000-0000-000000000000"),checker:w.isUuid});function Pu(e){return w.hasKey(e,s0)}o(Pu,"isShapeDefinition");var Ae;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(Ae||(Ae={}));function ev(...e){return Dn(e,Ae.And)}o(ev,"and");function fi(...e){return Dn(e,Ae.Enum)}o(fi,"enumShape");function U(...e){return Dn(e,Ae.Exact)}o(U,"exact");function ao(...e){return Dn(e,Ae.IndexedKeys)}o(ao,"indexedKeys");function se(...e){return Dn(e,Ae.Or)}o(se,"or");function tv(e){return Dn([e],Ae.Unknown)}o(tv,"unknownShape");function ir(e,t){return Dn([e,t],Ae.NumericRange)}o(ir,"numericRange");function He(e){return Dn([e],Ae.Optional)}o(He,"optional");function uo(e){return Pt(e,Ae.And)}o(uo,"isAndShapeSpecifier");function lo(e){return Pt(e,Ae.Class)}o(lo,"isClassShapeSpecifier");function co(e){return Pt(e,Ae.Enum)}o(co,"isEnumShapeSpecifier");function fo(e){return Pt(e,Ae.Exact)}o(fo,"isExactShapeSpecifier");function ho(e){return Pt(e,Ae.IndexedKeys)}o(ho,"isIndexedKeysSpecifier");function u0(e){return Pt(e,Ae.Tuple)}o(u0,"isTupleShapeSpecifier");function $i(e){return Pt(e,Ae.Or)}o($i,"isOrShapeSpecifier");function mo(e){return Pt(e,Ae.Unknown)}o(mo,"isUnknownShapeSpecifier");function l0(e){return Pt(e,Ae.NumericRange)}o(l0,"isNumericRangeShapeSpecifier");function Bs(e){return Pt(e,Ae.Optional)}o(Bs,"isOptionalShapeSpecifier");function Pt(e,t){const n=Si(e);return!!n&&n.specifierType===t}o(Pt,"specifierHasSymbol");function Dn(e,t){return{[Nu]:!0,specifierType:t,parts:e}}o(Dn,"specifier");function Si(e){if(!(!w.isObject(e)||!w.hasKey(e,Nu)))return e}o(Si,"getShapeSpecifier");class ad extends TypeError{static{o(this,"DefaultValueConstructionError")}name="DefaultValueConstructionError"}function nv(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}o(nv,"haveEqualTypes");class Ke extends TypeError{static{o(this,"ShapeMismatchError")}name="ShapeMismatchError"}function c0(e,t,n={}){try{return Lu(e,t,n),!0}catch{return!1}}o(c0,"isValidShape");function Lu(e,t,n={},r=""){try{Oe({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?fr(i,r):i}}o(Lu,"assertValidShape");function Ua(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}o(Ua,"createKeyString");function Oe({subject:e,shape:t,keys:n,options:r}){if(mo(t))return!0;if(Pu(t))return Oe({subject:e,shape:t.shape,keys:n,options:r});if(Bu(t)){if(!t.checker(e))throw new Ke(`Subject ${m(e)} does not match ${t.customName} shape.`);return!0}const i=Ua(n);if(Si(e))throw new Ke(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(u0(t)){if(!w.isArray(e))throw new Ke(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((a,u)=>{const l=e[u];return Oe({keys:[...n,u],options:r,shape:a,subject:l})})}else{if(Bs(t))return Oe({keys:n,options:r,shape:t.parts[0],subject:e});if(ls(e,t,n,r)){if(w.isFunction(t))return w.isFunction(e);if(lo(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const a=e,u=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(d=>[d,!1])),l=[];let c=!1;if($i(t)){const d=[];c=t.parts.some(f=>{try{const p=Oe({subject:e,shape:f,keys:n,options:r});return Object.assign(u,p),!0}catch(p){if(p instanceof Ke)return d.push(p.message),!1;throw p}}),!c&&w.isLengthAtLeast(d,1)&&l.push(d[0])}else if(uo(t))c=t.parts.every(d=>{try{const f=Oe({subject:e,shape:d,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(u,f),!0}catch(f){if(f instanceof Ke)return l.push(f.message),!1;throw f}});else if(fo(t)){const d=Oe({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(u,d),c=!0}else{if(co(t))throw new Ke(`Cannot compare an enum specifier to an object at ${i}`);if(w.isArray(t)&&w.isArray(a))c=a.every((d,f)=>{const p=t.some(g=>{try{return Oe({subject:d,shape:g,keys:[...n,f],options:r}),!0}catch(y){if(y instanceof Ke)return l.push(y.message),!1;throw y}});return u[f]=p,p});else if(ho(t)){const d=me(e,(f,p)=>(r.ignoreExtraKeys||Oe({shape:t.parts[0].keys,subject:f,keys:[...n,f],options:r}),Oe({shape:t.parts[0].values,subject:p,keys:[...n,f],options:r}),!0));Object.assign(u,d),c=!0}else{const d=rv({keys:n,options:r,shape:t,subject:e});Object.assign(u,d),c=!0}}if(l.length)throw new Ke(js(l));if(!c){const f=`Failed on key(s): ${Object.keys(u).filter(p=>!u[p]).map(p=>Ua([...n,p])).join(",")}`;throw new Ke(f)}return r.ignoreExtraKeys||Object.entries(u).forEach(([d,f])=>{if(!f)throw new Ke(`subject as extra key '${d}' in ${i}.`)}),u}else if(r.exactValues)return e===t}else throw new Ke(`Subject does not match shape definition at key ${i}`)}return!0}o(Oe,"internalAssertValidShape");function rv({keys:e,options:t,shape:n,subject:r}){const i=Ua(e),s={};if(w.isObject(n)){const a=new Set(ne(n)),u=new Set(ne(r));a.forEach(l=>{(l in r||Bs(n[l]))&&u.add(l)}),t.ignoreExtraKeys||u.forEach(l=>{if(!a.has(l))throw new Ke(`Subject has extra key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=n[l],d=$i(c)?c.parts.includes(void 0):!1,f=c?.includes?.(void 0)||c===void 0;if(!u.has(l)&&!d&&!f)throw new Ke(`Subject missing key '${String(l)}' in ${i}`)}),u.forEach(l=>{if(!(l in r)&&Bs(n[l])){s[l]=!0;return}const c=r[l];if(t.ignoreExtraKeys&&!a.has(l))return;const d=n[l];Oe({subject:c,shape:d,keys:[...e,l],options:t}),s[l]=!0})}else throw new Ke(`Shape definition at ${i} was not an object.`);return s}o(rv,"isValidRawObjectShape");function ls(e,t,n,r,i){const s=Si(t);if(s){if(Bu(s))return s.checker(e);if(l0(s))return w.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(lo(s))return e instanceof s.parts[0];if(uo(s))return s.parts.every(a=>{try{return Oe({subject:e,shape:a,keys:n,options:{...r,ignoreExtraKeys:!0}}),!0}catch{return!1}});if($i(s))return s.parts.some(a=>{try{return Oe({subject:e,shape:a,keys:n,options:r}),!0}catch{return!1}});if(fo(s))return w.isObject(e)?(Oe({subject:e,shape:s.parts[0],keys:n,options:{...r,exactValues:!0}}),!0):e===s.parts[0];if(co(s))return w.hasValue(Object.values(s.parts[0]),e);if(ho(s)){if(!w.isObject(e))return!1;const a=iv(e,s,!!r.ignoreExtraKeys),u=Vn(e).every(l=>{try{return Oe({subject:l,shape:s.parts[0].values,keys:n,options:r}),!0}catch{return!1}});return a&&u}else if(mo(s))return!0}return i?t===e:nv(e,t)}o(ls,"matchesShape");function iv(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys,s=Iu(t);if(w.isBoolean(s))return ne(e).every(l=>ls(l,i,[],{exactValues:!1,ignoreExtraKeys:n}));const a=r?s.every(l=>ne(e).some(c=>ls(c,l,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return ne(e).every(l=>s.includes(l)?ls(l,i,[],{exactValues:!1,ignoreExtraKeys:!1}):n)&&a}o(iv,"matchesIndexedKeysSpecifierKeys");function Iu(e){const t=e.parts[0].keys,n=Si(t);if(w.isPropertyKey(t))return!0;if(n){if(lo(n))return!1;if(uo(n))return!1;if($i(n)){const r=n.parts.map(i=>Iu(ao({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(w.isPropertyKey)}else if(fo(n)){const r=n.parts.filter(w.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(co(n))return Object.values(n.parts[0]);if(ho(n))return!1;if(mo(n))return!0}}return!1}o(Iu,"expandIndexedKeysKeys");function Wa(e){return Fn(e)}o(Wa,"shapeToDefaultValue");function Fn(e){const t=Si(e);if(Bu(e))return e.defaultValue;if(t){if(u0(t))return t.parts.map(n=>Fn(n));if(Bs(t))return Fn(t.parts[0]);if(l0(t))return t.parts[0];if(lo(t)){const n=t.parts[0];try{return new n}catch(r){throw new ad(`Failed to create default value for classShape for class '${n.name}': ${je(r)}`)}}else{if($i(t)||fo(t))return Fn(t.parts[0]);if(uo(t))return t.parts.reduce((n,r)=>Object.assign(n,Fn(r)),{});if(co(t))return t.parts[1]||Object.values(t.parts[0])[0];if(ho(t)){const n=Iu(t);return!t.parts[0].required||w.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Fn(t.parts[0].values)]))}else{if(mo(t))return t.parts[0]??{};throw new ad(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Pu(e)?Wa(e.shape):e instanceof RegExp?e:w.isArray(e)?e.map(Fn):w.isObject(e)?me(e,(n,r)=>Wa(r)):e}o(Fn,"innerShapeToDefaultValue");function ut(e,t=!1){if(Pu(e))return e;const n={shape:e,isReadonly:t,get defaultValue(){return Wa(e)},[s0]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}o(ut,"defineShape");const sv=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],d0=sv.reduce((e,t)=>(e[t]=t,e),{}),ov=le.defaultZone.name,Ru=d0.UTC,av=ut({hour:ir(vs.min,vs.max),minute:ir(Ds.min,Ds.max),second:ir(Es.min,Es.max),millisecond:ir(As.min,As.max),timezone:fi(d0,Ru)}),uv=ut({year:2023,month:ir(ws.min,ws.max),day:ir(bs.min,bs.max),timezone:Ru}),lv=ut(ev(uv,av));function cv(e,t){if(!qr.isValidIANAZone(e))throw new h(`'${e}' is not a valid time zone`,t)}o(cv,"assertValidTimezone");function dv(e){Lu(e,lv),cv(e.timezone),i0(e)}o(dv,"assertValidFullDate");function fv(e){try{return dv(e),!0}catch{return!1}}o(fv,"isValidFullDate");const hv=["L-y","LLL-y","LLLL-y"];function mv(e,t){const n=L.fromISO(e,{zone:t});if(n.isValid)return n;let r;return hv.some(i=>{const s=L.fromFormat(e,i,{zone:t});return s.isValid?(r=s,!0):!1}),r}o(mv,"parseDateString");function pv(e,t){const n=yv(e,t);if(!n?.isValid)throw new Error(`Failed to parse date input ${m(e)}`);return Q2(n,t)}o(pv,"createFullDate");function gv(e){const t=L.fromJSDate(new Date(e));if(t.isValid)return t}o(gv,"lastDitchConversion");function yv(e,t){if(fv(e)&&(e=i0(e).toMillis()),L.isDateTime(e))return e.setZone(t);if(w.isNumber(e))return L.fromMillis(e,{zone:Ru}).setZone(t);if(w.isString(e)){const n=mv(e,t);if(n)return n}else if(e instanceof Date)return L.fromJSDate(e).setZone(t);return gv(e)}o(yv,"convertDateLikeToLuxonDateTime");I.Years+"",I.Quarters+"",I.Months+"",I.Weeks+"",I.Days+"",I.Hours+"",I.Minutes+"",I.Seconds+"",I.Milliseconds+"";ut(se({get:U(N.Month),in:se(U(N.Year),U(N.Quarter))},{get:U(N.Week),in:se(U(N.Year),U(N.Quarter),U(N.Month))},{get:U(N.Day),in:se(U(N.Year),U(N.Quarter),U(N.Month),U(N.Week))},{get:U(N.Hour),in:se(U(N.Year),U(N.Quarter),U(N.Month),U(N.Week),U(N.Day))},{get:U(N.Minute),in:se(U(N.Year),U(N.Quarter),U(N.Month),U(N.Week),U(N.Day),U(N.Hour))},{get:U(N.Second),in:se(U(N.Year),U(N.Quarter),U(N.Month),U(N.Week),U(N.Day),U(N.Hour),U(N.Minute))},{get:U(N.Millisecond),in:se(U(N.Year),U(N.Quarter),U(N.Month),U(N.Week),U(N.Day),U(N.Hour),U(N.Minute),U(N.Second))}));var ud;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(ud||(ud={}));var ja;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ja||(ja={}));var ld;(function(e){e.Year="year",e.Month="month",e.Day="day"})(ld||(ld={}));const wv={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};a1(wv,xt(ja));le.defaultLocale;ut(a0({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return bv(e)}}));function bv(e){return L.fromISO(e).toUTC().toISO()===e}o(bv,"isValidIsoString");const vv=ut({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:tv()});function ra(e){return c0(e,vv,{allowExtraKeys:!0})}o(ra,"isObservableBase");class f0 extends J2{static{o(this,"Observable")}value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||X2}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Dv}=j1,cd=o(()=>document.createComment(""),"s"),Vr=o((e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(cd(),i),a=r.insertBefore(cd(),i);n=new Dv(s,a,e,e.options)}else{const s=n._$AB.nextSibling,a=n._$AM,u=a!==e;if(u){let l;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(l=e._$AU)!==a._$AU&&n._$AP(l)}if(s!==i||u){let l=n._$AA;for(;l!==s;){const c=l.nextSibling;r.insertBefore(l,i),l=c}}}return n},"r$1"),xn=o((e,t,n=e)=>(e._$AI(t,n),e),"v"),Ev={},Av=o((e,t=Ev)=>e._$AH=t,"m"),Cv=o(e=>e._$AH,"p"),ia=o(e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const r=t.nextSibling;t.remove(),t=r}},"M");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po={ATTRIBUTE:1,CHILD:2,ELEMENT:6},En=o(e=>(...t)=>({_$litDirective$:e,values:t}),"e$2");class en{static{o(this,"i")}constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $v={attribute:!0,type:String,converter:Ms,reflect:!1,hasChanged:Du},Sv=o((e=$v,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(u){const l=t.get.call(this);t.set.call(this,u),this.requestUpdate(a,l,e)},init(u){return u!==void 0&&this.P(a,void 0,e),u}}}if(r==="setter"){const{name:a}=n;return function(u){const l=this[a];t.call(this,u),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)},"r");function Mv(e){return(t,n)=>typeof n=="object"?Sv(e,t,n):((r,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}o(Mv,"n$1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=En(class extends en{constructor(e){if(super(e),e.type!==po.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return ot}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=o(e=>e??Y,"o");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qa extends en{static{o(this,"e")}constructor(t){if(super(t),this.it=Y,t.type!==po.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Y||t==null)return this._t=void 0,this.it=t;if(t===ot)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}qa.directiveName="unsafeHTML",qa.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class dd extends qa{static{o(this,"t")}}dd.directiveName="unsafeSVG",dd.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kv(e,t,n){return e?t(e):n?.(e)}o(kv,"n");class xv extends ti{static{o(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function Fv(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(u=>!!u.index).length;if(r||i)return[...e];const s=e.map(u=>[u]);return s.length||(s[0]=[]),n.forEach(u=>{u>=0&&u<e.length&&(s[u]=[])}),t.forEach(u=>{const l=s[u.index];l&&l.splice(0,0,...u.values)}),s.flat()}o(Fv,"insertAndRemoveValues");function za(e){return w.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}o(za,"isMinimalDefinitionWithInputs");function Ou(e){return w.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}o(Ou,"hasTagName");function h0(e){return qn(e,t=>{if(za(t))return t.definition;if(Ou(t))return t.tagInterpolationKey||t},w.isTruthy)}o(h0,"extractElementKeys");const m0=new WeakMap;function Tv(e,t){const n=h0(t);return p0(m0,[e,...n]).value?.template}o(Tv,"getAlreadyMappedTemplate");function Nv(e,t,n){const r=h0(t);return y0(m0,[e,...r],n)}o(Nv,"setMappedTemplate");function p0(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=g0(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?p0(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}o(p0,"getNestedValues");function g0(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}o(g0,"getCurrentKeyAndValue");function y0(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:a}=g0(e,t,r);if(!s)return{result:!1,reason:a};const u=i??{nested:void 0,template:void 0};if(i||e.set(s,u),r===t.length-1)return u.template=n,{result:!0,reason:"set value at end of keys array"};const l=u.nested??new WeakMap;return u.nested||(u.nested=l),y0(l,t,n,r+1)}o(y0,"setNestedValues");function w0(e,t,n){const r=Tv(e,t),i=r??n();if(!r){const u=Nv(e,t,i);if(!u.result)throw new Error(`Failed to set template transform: ${u.reason}`)}const s=i.valuesTransform(t),a=Fv(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:a}}o(w0,"getTransformedTemplate");function b0(e,t,n,r){const i=[],s=[],a=[],u=[];return e.forEach((c,d)=>{const f=i.length-1,p=i[f],g=d-1,y=t[g];r&&r(c);let v,$=[];if(typeof p=="string"&&(v=n(p,c,y),v)){i[f]=[p,v.replacement].join(""),a.push(g);const k=v.getExtraValues;$=k?k(y):[],$.length&&k?(i[f]+=" ",$.forEach((B,R)=>{R&&i.push(" ")}),u.push(B=>{const R=B[g],H=k(R);return{index:g,values:H}}),i.push(c)):i[f]+=c}v||i.push(c);const E=e.raw[d];v?(s[f]=[s[f],v.replacement,E].join(""),$.length&&$.forEach(()=>{s.push("")})):s.push(E)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const d=u.flatMap(f=>f(c));return{valueIndexDeletions:a,valueInsertions:d}}}}o(b0,"transformTemplate");function Bv(...[e,t,n]){if(Ou(n))return{replacement:n.tagName,getExtraValues:void 0}}o(Bv,"transformCss");function Pv(e,t){return b0(e,t,Bv)}o(Pv,"transformCssTemplate");function P(e,...t){const n=w0(e,t,()=>Pv(e,t));return as(n.strings,...n.values)}o(P,"css");const Lv={allowPolymorphicState:!1};function v0(e,t){const n=e.instanceState;ne(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&ne(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}o(v0,"assignInputs");function fd(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}o(fd,"assertValidCssProperties");class Iv extends CustomEvent{static{o(this,"TypedEvent")}_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Vu(){return e=>class extends Iv{static type=e;_type=e;constructor(t){super(e,t)}}}o(Vu,"defineTypedEvent");function Pe(){return Vu()}o(Pe,"defineElementEvent");function Rv(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Vu()([e,r].join("-"));return n[r]=i,n},{}):{}}o(Rv,"createEventDescriptorMap");function Ov(e){return e?me(e,t=>t):{}}o(Ov,"createHostClassNamesMap");function D0(e,t){t in e||Mv()(e,t)}o(D0,"bindReactiveProperty");function Vv(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}o(Vv,"assertValidPropertyName");function hd(e,t){const n=e;function r(a){t?Vv(a,e,e.tagName):D0(e,a)}o(r,"verifyProperty");function i(a,u){return r(u),n[u]}return o(i,"valueGetter"),new Proxy({},{get:i,set(a,u,l){r(u);const c=n[u];function d(p){a[u]=p,n[u]=p}o(d,"setValueOnElement");const f=e.observablePropertyListenerMap[u];if(c!==l&&ra(c)&&f&&c.removeListener(f),ra(l))if(f)l.listen(!1,f);else{let p=function(){e.requestUpdate()};o(p,"newListener"),e.observablePropertyListenerMap[u]=p,l.listen(!1,p)}else ra(c)&&(e.observablePropertyListenerMap[u]=void 0);return d(l),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,u){if(u in a)return{get value(){return i(a,u)},configurable:!0,enumerable:!0}},has(a,u){return Reflect.has(a,u)}})}o(hd,"createElementPropertyProxy");function _v({hostClassNames:e,cssVars:t}){return{hostClasses:me(e,(n,r)=>({name:mt(r),selector:mt(`:host(.${r})`)})),cssVars:t}}o(_v,"createStylesCallbackInput");function Uv({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&ne(t).forEach(s=>{const a=t[s],u=n[s];typeof a=="function"&&(a({state:r,inputs:i})?e.classList.add(u):e.classList.remove(u))})}o(Uv,"applyHostClasses");function Wv({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(a){ne(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return o(i,"updateState"),{cssVars:n,slotNames:r,dispatch:o(a=>e.dispatchEvent(a),"dispatch"),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}o(Wv,"createRenderParams");function jv(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}o(jv,"createSlotNamesMap");function go(e){if(!w.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!w.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...Lv,...e.options},n=Rv(e.tagName,e.events),r=Ov(e.hostClasses);e.hostClasses&&fd(e.tagName,e.hostClasses),e.cssVars&&fd(e.tagName,e.cssVars);const i=e.cssVars?vn(e.cssVars):{},s=jv(e.slotNames),a=typeof e.styles=="function"?e.styles(_v({hostClassNames:r,cssVars:i})):e.styles||P``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}o(l,"typedAssignCallback");const c=class extends xv{static{o(this,"anonymousClass")}static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return Wv({element:this,eventsMap:n,cssVars:i,slotNamesMap:s})}static assign=l;static events=n;static render=u;static hostClasses=r;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const p=e.state(d);if(p instanceof Promise)throw new TypeError("init cannot be asynchronous");ne(p).forEach(g=>{D0(this,g),this.instanceState[g]=p[g]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return Uv({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=fr(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,je(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{w.hasKey(d,"destroy")&&w.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(d){v0(this,d)}observablePropertyListenerMap={};instanceInputs=hd(this,!1);instanceState=hd(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:um(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}o(go,"defineElementNoInputs");function Le(...e){return Jt.isEmpty(e),t=>{const n=t;if(!w.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return go({...n,options:{...n.options}})}}o(Le,"defineElement$1");var md;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(md||(md={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pd=o((e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},"u"),qv=En(class extends en{constructor(e){if(super(e),e.type!==po.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],s=[];let a=0;for(const u of e)i[a]=r?r(u,a):a,s[a]=n(u,a),a++;return{values:s,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=Cv(e),{values:s,keys:a}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=a,s;const u=this.ut??=[],l=[];let c,d,f=0,p=i.length-1,g=0,y=s.length-1;for(;f<=p&&g<=y;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(u[f]===a[g])l[g]=xn(i[f],s[g]),f++,g++;else if(u[p]===a[y])l[y]=xn(i[p],s[y]),p--,y--;else if(u[f]===a[y])l[y]=xn(i[f],s[y]),Vr(e,l[y+1],i[f]),f++,y--;else if(u[p]===a[g])l[g]=xn(i[p],s[g]),Vr(e,i[f],i[p]),p--,g++;else if(c===void 0&&(c=pd(a,g,y),d=pd(u,f,p)),c.has(u[f]))if(c.has(u[p])){const v=d.get(a[g]),$=v!==void 0?i[v]:null;if($===null){const E=Vr(e,i[f]);xn(E,s[g]),l[g]=E}else l[g]=xn($,s[g]),Vr(e,i[f],$),i[v]=null;g++}else ia(i[p]),p--;else ia(i[f]),f++;for(;g<=y;){const v=Vr(e,l[y+1]);xn(v,s[g]),l[g++]=v}for(;f<=p;){const v=i[f++];v!==null&&ia(v)}return this.ut=a,Av(e,l),ot}}),zv=qv;function yo(e,t){return hi(e,t),e.element}o(yo,"extractElement");function Gv(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}o(Gv,"getPartHostTagName");function hi(e,t){const n=Gv(e),r=n?`: in ${n}`:"";if(e.type!==po.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}o(hi,"assertIsElementPartInfo");function Kv(e){const t=En(class extends en{element;constructor(n){super(n),this.element=yo(n,e)}render(n){return this.element.setAttribute(e,n),ot}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}o(Kv,"createAttributeDirective");function J(e,t){return Hv(e,t)}o(J,"listen");const Hv=En(class extends en{element;lastListenerMetaData;constructor(e){super(e),this.element=yo(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:o(n=>this.lastListenerMetaData?.callback(n),"listener")}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ot}}),gd="onDomCreated",yd=En(class extends en{element;constructor(e){super(e),hi(e,gd)}update(e,[t]){hi(e,gd);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),sa="onResize",E0=En(class extends en{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),hi(e,sa)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${sa} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){hi(e,sa),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function pt(e,t,n){return kv(e,()=>t,()=>n)}o(pt,"renderIf");const{attributeDirective:Zv}=Kv("data-test-id"),sr=Zv;ne({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function A0(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:o((...r)=>i=>(t(i),Le(...r)(n(i))),"defineElement"),defineElementNoInputs:o(r=>(t(r),go(n(r))),"defineElementNoInputs")}}o(A0,"wrapDefineElement");function Yv(e,t){return Jv(void 0,e)}o(Yv,"assign");const Jv=En(class extends en{element;constructor(e){super(e),this.element=yo(e,"assign")}render(e,t){return v0(this.element,t),ot}}),Xv={};function Qv(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:a}=C0(i,s);if(a&&w.isString(n))return{tagName:n,tagInterpolationKey:fu(Xv,n,()=>({tagName:n}))}}return n})}o(Qv,"mapHtmlValues");function C0(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}o(C0,"classifyValue");function eD(...[e,t,n]){const r=za(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=C0(e,t),a=Ou(r);if(a&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!s||!a?void 0:{replacement:r.tagName,getExtraValues(l){const c=za(l)?l.inputs:void 0;return[i&&c?Yv(c):void 0].filter(w.isTruthy)}}}o(eD,"transformHtml");function tD(e){}o(tD,"stringValidator");function nD(e){return b0(e.strings,e.values,eD,tD)}o(nD,"transformHtmlTemplate");function D(e,...t){const n=Qv(e,t),r=I1(e,...n),i=w0(e,n,()=>nD(r));return{...r,strings:i.strings,values:i.values}}o(D,"html");function $0(e){return me(e,(t,n)=>n instanceof q?mt(n.toString({format:"hex"})):$0(n))}o($0,"colorsObjectToCssResult");const rD="dodgerblue";function Ga(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}o(Ga,"calculateTextColorString");function oa({background:e,foreground:t}){return{background:e??new q(Ga(t)),foreground:t??new q(Ga(e))}}o(oa,"createColorPair");var Ls;(function(e){e.Dark="dark",e.Light="light"})(Ls||(Ls={}));function iD(e){return e==="black"?"white":"black"}o(iD,"flipBackForeground");const sD={black:{foregroundFaint1:new q("#ccc"),foregroundFaint2:new q("#eee")},white:{foregroundFaint1:new q("#ccc"),foregroundFaint2:new q("#eee")}},oD={black:{backgroundFaint1:new q("#666"),backgroundFaint2:new q("#444")},white:{backgroundFaint1:new q("#ccc"),backgroundFaint2:new q("#fafafa")}};function wd({themeColor:e=rD,themeStyle:t=Ls.Light}={}){const n=new q(e),r=new q(t===Ls.Dark?"black":"white"),i=Ga(r),s=new q(i),a={nav:{hover:oa({background:n.clone().set({"hsl.l":93})}),active:oa({background:n.clone().set({"hsl.l":90})}),selected:oa({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...oD[iD(i)],foreground:s,...sD[i]}};return $0(a)}o(wd,"createTheme");var Gt;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Gt||(Gt={}));async function Is(e=1){const t=new tu;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return o(n,"requestNextFrame"),n(),t.promise}o(Is,"waitForAnimationFrame");function aD(e){return[...e.children,...e.shadowRoot?.children??[]]}o(aD,"getDirectChildren");function uD(e){return e.matches(":focus")}o(uD,"isElementFocused");function Rs(e){if(e instanceof ShadowRoot)return Rs(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:Rs(t)}o(Rs,"getParentElement");function S0(e,t){if(t(e))return e;const n=Rs(e);if(n)return S0(n,t)}o(S0,"findMatchingAncestor");async function lD(e){return cD(e,1)}o(lD,"checkIfEntirelyInScrollView");async function cD(e,t){return new Promise(n=>{new IntersectionObserver((i,s)=>{Jt.isLengthAtLeast(i,1),s.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}o(cD,"checkIfInScrollView");function Zr(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,a=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(a)}return r}o(Zr,"extractEventTarget");function dD(e){const t=Rs(e);return t&&S0(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}o(dD,"findOverflowAncestor");const fD={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},hD=Object.keys(fD),mD={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},pD=Object.keys(mD),gD={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},yD=Object.keys(gD);Array.from(new Set([...hD,...yD,...pD].sort()));function wD({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let a=0,u=0;a<r;a++){const l=s.codePointAt(a);for(;u<n;)if(i.codePointAt(u++)===l)continue e;return!1}return!0}o(wD,"fuzzySearch");const bD=Zh(32);function cs(e){return e.join(bD)}o(cs,"createBreadcrumbsSearchKey");function M0(e){if(!e.length)return[];const t=cs(e),n=M0(e.slice(0,-1));return[t,...n]}o(M0,"getFullTreeKeysToInclude");const vD=["error","errors"];function DD(e){return vD.includes(e)}o(DD,"isSearchingForErrors");function ED({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(a=>(r(a),cs(a.fullUrlBreadcrumbs))).forEach(a=>n[a]=!0)}return o(r,"addChildren"),e.forEach(i=>{const s=i.entry.errors.length&&DD(t),a=cs(i.fullUrlBreadcrumbs);if(wD({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||n[a]){const l=M0(i.fullUrlBreadcrumbs);r(i),l.forEach(c=>n[c]=!0)}else n[a]=!1}),e.filter(i=>{const s=cs(i.fullUrlBreadcrumbs),a=n[s];if(!w.isBoolean(a))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}o(ED,"searchFlattenedNodes");class _u extends Error{static{o(this,"SpaRouterError")}name="SpaRouterError"}class bd extends _u{static{o(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class AD extends _u{static{o(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}ut({paths:[""],search:He(se(void 0,ao({keys:"",values:[""],required:!1}))),hash:He(se(void 0,""))});const CD=ut({basePath:se("",void 0),sanitizeRoute:o(e=>e,"sanitizeRoute"),maxListenerCount:se(1,void 0),disableWarnings:se(void 0,!1),isPaused:se(!1,void 0)}),aa="://";function Uu(...e){const t=e.join("/"),[n,r=""]=t.includes(aa)?t.split(aa):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((a,u,l,c)=>{if(i)return a;const d=c[l+1];let f=u;const p=d?.startsWith("?"),g=!u.includes("?")&&p,y=d==="?";if(p||g){i=!0;let v=!1;const $=c.slice(l+2).reduce((E,k)=>(k.includes("#")&&(v=!0),v?E.concat(k):[E,k].join("&")),"");f=[u,d,y?ur({value:$,prefix:"&"}):$].join("")}return a.concat(f)},[]);return[n,n?aa:"",s.join("/")].join("")}o(Uu,"joinUrlPaths");var Ar;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Ar||(Ar={}));var Cr;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Cr||(Cr={}));const $D=ut({encoding:He(se(void 0,fi(Ar))),searchParamStrategy:He(se(void 0,fi(Cr)))});function Gi(e,t){return e.map(n=>{if(n!=null)return cr(String(n),t)}).filter(n=>n!=null)}o(Gi,"codeValues");function cr(e,t){return t?.encoding===Ar.Decode?decodeURIComponent(e):t?.encoding===Ar.Encode?encodeURIComponent(e):e}o(cr,"codeValue");const SD=ut(ao({keys:"",values:[""],required:!0}));function MD(e,t,n){const r=n?.searchParamStrategy===Cr.Clear?{}:me(e,(a,u)=>w.isString(u)?[u]:u),i=me(t,(a,u)=>{if(n?.searchParamStrategy===Cr.Append){const l=r[a],c=w.isArray(l)?l:[l];if(u){const d=w.isArray(u)?u:[u];return Gi([...c,...d],n)}else return Gi(c,n)}else return w.isArray(u)?Gi(u,n):u?Gi([u],n):void 0});return Xs({...r,...i},(a,u)=>!!u)}o(MD,"combineSearchParams");function k0(e,t){return w.isString(e)&&!e.includes("?")?{}:(w.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[a,...u]=sm(s,"=");return[a,u.length?u.join("="):void 0]}).reduce((s,[a,u])=>{const l=x0({options:t,key:a,value:u}),c=fu(s,l.key,()=>[]);return u!=null&&c.push(l.value),s},{})}o(k0,"searchParamsToObject");function kD(e){if(e!=null)return w.isArray(e)?[...e]:e===""?[]:[e]}o(kD,"wrapParamValue");function xD(e,t){const n=qn(Object.entries(e),([r,i])=>{const s=kD(i);return s?.length?s.map(a=>{const u=x0({options:t,key:r,value:a});return[u.key,u.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Xe({value:n.join("&"),prefix:"?"}):""}o(xD,"searchParamsToString");function x0({options:e,key:t,value:n}){return{key:cr(t,e),value:cr(String(n),e)}}o(x0,"codeParamKeyValue");function F0({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:s,search:a,username:u}){return[s?s+"://":"",u?u+":":"",n?n+"@":"",wo({hostname:t,port:i}),Wu({hash:e,pathname:r,search:a})].join("")}o(F0,"createHref");function T0({pathname:e}){const t=ur({value:e,prefix:"/"});return t?t.split("/"):[]}o(T0,"createPaths");function Wu({hash:e,pathname:t,search:n}){return[Xe({value:t,prefix:"/"}),n?Xe({value:n,prefix:"?"}):"",e?Xe({value:e,prefix:"#"}):""].join("")}o(Wu,"createFullPath");function wo({hostname:e,port:t}){return[e,t?":"+t:""].join("")}o(wo,"createHost");function N0({hostname:e,port:t,protocol:n}){return[n,wo({hostname:e,port:t})].filter(w.isTruthy).join("://")}o(N0,"createOrigin");function dr(e,t){const n=w.isString(e)?ur({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Xe({value:cr(r,t),prefix:"#"}):"",s=n.replace(/#[^#]*$/,""),a=s.replace(/^[^?]*(?:\?|$)/,""),u=a?Xe({value:cr(a,t),prefix:"?"}):"",l=s.replace(/\?[^?]*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),p=d.replace(/^[^@]*@/,""),g=f!==p,[y,...v]=g?f.split(":").reverse():[],$=v.toReversed().join("").replace(/[/:]/g,"")||"",E=y?.replace(/[/:]/g,"")||"",k=o1(p.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),B=k[0]?.endsWith("]")?"":k[1]===":"&&k[0]||"",H=p.replace(new RegExp(`:${B}($|/)`),"$1").replace(/\/.*/,""),Ie=p.replace(/^[^/]*(\/|$)/,"$1"),wt=cr(Ie.replace(/^[^/]*(?:\/|$)/,"/"),t),qe=wo({hostname:H,port:B}),et=N0({hostname:H,port:B,protocol:c}),kt=F0({hash:i,hostname:H,password:E,pathname:wt,port:B,protocol:c,search:u,username:$}),Lt=k0(u),Fi=T0({pathname:wt});return{fullPath:Wu({hash:i,pathname:wt,search:u}),hash:i,host:qe,hostname:H,href:kt,origin:et,password:E,pathname:wt,paths:Fi,port:B,protocol:c,search:u,searchParams:Lt,username:$}}o(dr,"parseUrl");ut({hash:He(se(void 0,"")),search:He(se(void 0,"",ao({keys:"",required:!1,values:se(null,void 0,"",-1,!1,0n)}))),hostname:He(se(void 0,"")),pathname:He(se(void 0,"")),paths:He(se(void 0,[""])),protocol:He(se(void 0,"")),username:He(se(void 0,"")),password:He(se(void 0,"")),port:He(se(void 0,"",-1))});function FD(e,t,n){const r=!!n,i=t==null||c0(t,$D),s=i?dr(""):w.instanceOf(e,URL)||w.isString(e)?dr(e):e,a=i?e:t,u=w.isString(a)&&a.startsWith("."),l=w.isString(a)||w.instanceOf(a,URL)?Xs(dr(a),(v,$)=>w.isTruthy($)):a,c=r?n:i?t:void 0,d=me(s,(v,$)=>{if(!w.hasKey(l,v))return $;const E=l[v];return w.isNumber(E)?String(E):w.isString(E)?v==="hash"&&E?Xe({value:E,prefix:"#"}):v==="pathname"?Xe({value:E,prefix:"/"}):E:$});w.hasKey(l,"paths")&&l.paths&&(d.pathname=Uu(u?s.pathname:"",...l.paths));const f=w.isString(l.search)?k0(Xe({value:l.search,prefix:"?"})):Jh(l.search||{}),p=MD(d.searchParams,f,{...c,encoding:Ar.None}),g=xD(p,c);return{...d,searchParams:p,search:g,paths:T0(d),fullPath:Wu(d),host:wo(d),origin:N0(d),href:F0({...d,search:g})}}o(FD,"buildUrl");const TD=ut({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:SD,hash:"",fullPath:"/",href:"/"},!0);({...TD.defaultValue});const ND=0;function B0(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ND)}o(B0,"shouldClickEventTriggerRouteChange");const bo="locationchange",jt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const vd=jt?.pushState;function Dd(...e){if(!vd)return;const t=vd.apply(jt,e);return globalThis.dispatchEvent(new Event(bo)),t}o(Dd,"newPushState");const Ed=jt?.replaceState;function Ad(...e){if(!Ed)return;const t=Ed.apply(jt,e);return globalThis.dispatchEvent(new Event(bo)),t}o(Ad,"newReplaceState");function BD(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!jt)){{if(jt.pushState===Dd)throw new bd("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(jt.replaceState===Ad)throw new bd("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,jt.pushState=Dd,jt.replaceState=Ad,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(bo))})}}o(BD,"consolidateGlobalUrlEvents");function Ki(e,t){const n=dr(e),r=ur({value:ur({value:n.pathname,prefix:Xe({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],s=Object.keys(n.searchParams).length?n.searchParams:void 0,a=n.hash?ur({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:a}}o(Ki,"parseUrlIntoRawRoute");class PD{static{o(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Lu(t,CD),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new f0({defaultValue:n,equalityCheck:o(()=>!1,"equalityCheck")}),BD(),this.removeGlobalListener=cm(globalThis,bo,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new AD("Looping route sanitization detected; aborting window URL change listener.");const r=Ki(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);w.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Uu(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Ki(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Ki(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),s=this.routeIncludesBasePath(Ki(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return FD(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?Xe({value:s.hash,prefix:"#"}):""},{searchParamStrategy:Cr.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=dr(r);return this.params.isPaused||!n.force&&w.jsonEquals(dr(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return B0(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new _u(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function LD(e){return new PD({basePath:e,sanitizeRoute(t){return{paths:ID(t.paths),hash:void 0,search:void 0}}})}o(LD,"createBookRouter");function ID(e){const t=e[0];if(w.isEnumValue(t,Je)){if(t===Je.Book)return[Je.Book,...e.slice(1)];if(t===Je.Search)return e[1]?[t,e[1]]:[Je.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return yr.paths}o(ID,"sanitizePaths");const Os=Vu()("element-book-change-route"),Cd="vira-",{defineElement:RD}=A0({assertInputs:o(e=>{if(!e.tagName.startsWith(Cd))throw new Error(`Tag name should start with '${Cd}' but got '${e.tagName}'`)},"assertInputs")}),tn=RD,S=vn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function pe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}o(pe,"defineIcon");const OD=pe({name:"Check24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Tt=vn({"vira-form-input-radius":"8px"}),Mi=P`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,gt=vn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Un=vn({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":P`calc(${Tt["vira-form-input-radius"].value} + 4px)`});function ju({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=mt(Zw(r+n+t));return P`
        ${mt(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Un["vira-focus-outline-color"].value};
            border-radius: ${Un["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}o(ju,"createFocusStyles");const dn=vn({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Un["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),P0=P`
    padding: 0;
    margin: 0;
`,qt=P`
    ${P0};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,$d=P`#e2e2e2`,L0={menuShadow:P`
        filter: drop-shadow(0px 5px 5px ${$d});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:P`
        filter: drop-shadow(0px -5px 5px ${$d});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Ht=P`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,re=tn()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":o(({inputs:e})=>!!e.fitContainer,"vira-icon-fit-container")},styles:o(({hostClasses:e})=>P`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,"styles"),render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ua=tn()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":o(({inputs:e})=>e.selected,"vira-dropdown-item-selected")},styles:o(({hostClasses:e})=>P`
        :host {
            display: flex;
            ${Ht};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${re} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${re} {
            transition: opacity
                ${gt["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Tt["vira-form-input-radius"].value}
                ${Tt["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Tt["vira-form-input-radius"].value}
                ${Tt["vira-form-input-radius"].value} 0 0;
        }
    `,"styles"),render({inputs:e}){return D`
            <div class="option">
                <${re.assign({icon:OD})}></${re}>
                <slot>${e.label}</slot>
            </div>
        `}}),Wn="group";function VD(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}o(VD,"createNavValueString");function _D(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:Yl(t),yCord:Yl(n),isGroup:r===Wn}:{type:"1d",isGroup:t===Wn}}o(_D,"parseNavValueString");function UD(e,t){Object.entries(t).forEach(([n,r])=>{w.isBoolean(r)&&r?e.setAttribute(n,""):w.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}o(UD,"applyAttributes");const WD=En(class extends en{element;lastKey;constructor(e){super(e),this.element=yo(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),ot}}),Ka={name:"data-nav"},nr="nav-activated",Ha={js:{click(e){return`${e}.${nr}`},selected(e){return`${e}:focus`}},css:{click(e){return P`
                ${mt(Ha.js.click(e))}
            `},selected(e){return P`
                ${mt(Ha.js.selected(e))}
            `}}},jD={activateKeys:["Space","Return","Enter"]};function qD(){I0=Jh(jD)}o(qD,"resetGlobalNavSettings");let I0;qD();function Sd(e){return I0.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}o(Sd,"isActivateKey");function Dt(e,t){const n=VD(e,t);return WD(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===Wn?{}:{tabindex:0},s={[Ka.name]:n,...i};Jt.instanceOf(r,HTMLElement),UD(r,s),e!==Wn&&(r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",a=>{a.target===r&&r.focus()},!0),r.addEventListener("mouseleave",a=>{a.target===r&&r.blur()},!0),r.addEventListener("mousedown",a=>{a.target===r&&r.classList.add(nr)},!0),r.addEventListener("mouseup",a=>{a.target===r&&r.classList.remove(nr)},!0),r.addEventListener("blur",()=>{r.classList.remove(nr)},!0),r.addEventListener("keydown",a=>{a.target===r&&Sd(a)&&r.classList.add(nr)},!0),r.addEventListener("keyup",a=>{a.target===r&&Sd(a)&&r.classList.remove(nr)},!0))})}o(Dt,"nav");function zD(e,t){return R0([],e,t)}o(zD,"walkNavTree");function R0(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?Md(t.children,t,0,e,n):t.children.some((r,i)=>Md(r,t,i,e,n))}o(R0,"walkRecursively");function Md(e,t,n,r,i){return e.some((s,a)=>{const u=w.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(u,s,{x:a,y:n})?!0:R0(u,s,i)})}o(Md,"walk1d");function GD(e){return e.toReversed().find(t=>!t.isGroup)}o(GD,"getNonGroupParent");function mi(e){if(!e)return;let t,n,r;zD(e,(a,u,l)=>uD(u.element)?(t=a,n=u,r=l,!0):!1);const i=t?t[0]||e:void 0,s=t?GD(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}o(mi,"getCurrentlyFocused");function pi(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}o(pi,"focusElement");function kd(e,t){return e>t}o(kd,"greaterThan");function xd(e,t){return e<t}o(xd,"lessThan");var Ee;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Ee||(Ee={}));var fe;(function(e){e.Enter="enter",e.Exit="exit",e.Navigate="navigate",e.Pibling="pibling"})(fe||(fe={}));function qu(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?qu(t):t}o(qu,"findDefaultChild");function Fd(e,t,n){if(!e)return{success:!1,reason:"no nav tree",direction:t,navAction:fe.Navigate};const r=mi(e);if(!r){const u=qu(e);return u?(pi(u.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.element,direction:t,navAction:fe.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:fe.Navigate}}const{nextNode:i,requiresWrapping:s}=O0(r.parent,t,r.node),a=n?!0:!s;return i&&a?(pi(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:t,navAction:fe.Navigate}):i?a?{success:!1,reason:"no conditions matched",direction:t,navAction:fe.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:fe.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:fe.Navigate}}o(Fd,"navigate");function O0(e,t,n){if(t===Ee.Down||t===Ee.Up){const i=t===Ee.Down?xd:kd,s=t===Ee.Down?1:-1,a=e.type==="1d"?0:Qr(n.coords.y+s,{min:0,max:e.children.length-1}),u=e.type==="2d"?e.children[a]:void 0,l={x:e.type==="1d"?Qr(n.coords.x+s,{min:0,max:e.children.length-1}):u&&n.coords.x>=u.length?u.length-1:n.coords.x,y:a},c=e.type==="1d"?e.children[l.x]:e.children[l.y]?.[l.x],d=e.type==="1d"?i(l.x,n.coords.x):i(l.y,n.coords.y);return{nextNode:c?.element===n.element?void 0:c,requiresWrapping:d}}else{const i=t===Ee.Right?xd:kd,s=t===Ee.Right?1:-1,a=e.type==="1d"?e.children:e.children[n.coords.y];Jt.isDefined(a,`No current row found at y index: '${n.coords.y}'`);const u={x:Qr(n.coords.x+s,{min:0,max:a.length-1}),y:n.coords.y},l=i(u.x,n.coords.x),c=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x];return{nextNode:c?.element===n.element?void 0:c,requiresWrapping:l}}}o(O0,"calculateNextNode");function KD(e,t,n,r){const i=w.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from",direction:n,navAction:fe.Pibling};const{nextNode:a,requiresWrapping:u}=O0(i,n,s),l=a?.isGroup?qu(a):a,c=r?!0:!u;return l?c?(pi(l.element),{success:!0,defaulted:!1,newElement:l.element,wrapped:u,direction:n,navAction:fe.Pibling}):{success:!1,reason:"wrapping blocked",direction:n,navAction:fe.Pibling}:{success:!1,reason:"no node to navigate to",direction:n,navAction:fe.Pibling}}o(KD,"navigatePibling");function HD(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:fe.Enter};const t=mi(e);if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:fe.Enter};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:fe.Enter};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(pi(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:fe.Enter}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:fe.Enter}}o(HD,"enterInto");function ZD(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:fe.Exit};const t=mi(e);if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:fe.Exit};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to",direction:void 0,navAction:fe.Exit}:(pi(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:fe.Exit})}o(ZD,"exitOutOf");class YD extends Mt()("nav-exit-event"){static{o(this,"NavExitEvent")}}class V0 extends Mt()("nav-exit-event"){static{o(this,"NavEnterEvent")}}class JD extends Mt()("navigate-event"){static{o(this,"NavigateEvent")}}class _0 extends Mt()("navigate-pibling-event"){static{o(this,"NavPiblingEvent")}}function U0(e){const t=[];return aD(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=U0(n),i=n.hasAttribute(Ka.name)?_D(n.getAttribute(Ka.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}o(U0,"getNavChildren");function XD(e){const t=U0(e);return W0(t)}o(XD,"buildNavTree");function W0(e){if(!w.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?W0(n.children):void 0;if(n.navValue.isGroup&&!r){const a=new Error("group nav has no children");throw console.error(a,n),a}const i=QD(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const a=t.children[i.y];if(Jt.isDefined(a),a[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);a[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const a=new Error("inconsistent nav dimensionality");throw console.error(a,n),a}}),t}o(W0,"convertTree");function QD(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}o(QD,"calculateChildCoords");class zu extends eo{static{o(this,"NavController")}rootElement;constructor(t){super(),this.rootElement=t}getCurrentlyFocused(){return mi(this.buildNavTree())}buildNavTree(){return XD(this.rootElement)}navigate({direction:t,allowWrapping:n}){const r=Fd(this.buildNavTree(),t,n);return this.dispatch(new JD({detail:r})),r}enterInto(){const t=HD(this.buildNavTree());return this.dispatch(new V0({detail:t})),t}exitOutOf(){const t=ZD(this.buildNavTree());return this.dispatch(new YD({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=mi(r),a={...!i||!r?Fd(r,n,t):KD(r,i,n,t),navAction:fe.Pibling};return this.dispatch(new _0({detail:a})),a}}const eE={option:"dropdown-option"},Hi=tn()({tagName:"vira-dropdown-options",events:{selectionChange:Pe()},styles:P`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Tt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${dn["vira-form-background-color"].value};
            border: 1px solid ${dn["vira-form-border-color"].value};
            color: ${dn["vira-form-foreground-color"].value};
            ${L0.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Ha.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${dn["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${ua} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Mi};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||D`
                    <${ua.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${ua}>
                `;return D`
                <div
                    class="dropdown-item ${zt({disabled:!!i.disabled})}"
                    ${sr(eE.option)}
                    title=${Ps(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?Y:Dt()}
                    ${J("mousedown",a=>{a.stopPropagation()})}
                    ${J("mouseup",a=>{a.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return D`
            <slot>${r}</slot>
        `}});pe({name:"Chat24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});const tE=pe({name:"ChevronUp24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${S["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),nE=pe({name:"CloseX24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});pe({name:"Commit24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});pe({name:"Document24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});const rE=pe({name:"Element16Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});pe({name:"Element24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const iE=pe({name:"EyeClosed24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${S["vira-icon-fill-color"].value}
            stroke=${S["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),sE=pe({name:"EyeOpen24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${S["vira-icon-fill-color"].value}
            stroke=${S["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),oE=pe({name:"Loader24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),aE=P`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${gt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,j0=pe({name:"LoaderAnimated24Icon",svgTemplate:D`
        <style>
            ${aE}
        </style>
        ${oE.svgTemplate}
    `}),uE=pe({name:"Options24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});pe({name:"Pencil24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});pe({name:"Shield24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});pe({name:"SpeakerLoud24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});pe({name:"SpeakerMedium24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});pe({name:"SpeakerMuted24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});pe({name:"SpeakerQuiet24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});pe({name:"Star24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
                fill=${S["vira-icon-fill-color"].value}
            />
        </svg>
    `});const lE=pe({name:"StatusFailure24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});pe({name:"StatusInProgress24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});pe({name:"StatusSuccess24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});class cE extends f0{static{o(this,"PageActiveObservable")}constructor(){super({defaultValue:document.hidden,equalityCheck:w.strictEquals}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=o(n=>this.updateVisibility(n),"visibilityHandler");globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=fE.includes(t.type),r=dE.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const dE=["blur","focusout","pagehide"],fE=["focus","focusin","pageshow"],hE=new cE;function mE(e,t){return hE.listen(e,t)}o(mE,"listenToPageActivation");const Td={top:0,left:0,right:0,bottom:0};class q0 extends Qs("hide-pop-up"){static{o(this,"HidePopUpEvent")}}class z0 extends Mt()("nav-select"){static{o(this,"NavSelectEvent")}}class pE{static{o(this,"PopUpManager")}listenTarget=new eo;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new zu(t);this.cleanupCallbacks=[mE(!1,r=>{r||this.removePopUp()}),Tn("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Tn("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ee.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ee.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ee.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ee.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new z0({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new q0)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=dD(t);Jt.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),a=i.getBoundingClientRect(),u=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:a.top,left:a.left,right:a.right-u,bottom:a.bottom-l},d=me(Td,g=>s[g]),f=me(Td,g=>{const y=c[g],v=d[g];return Math.abs(y-v)}),p=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!p,positions:{container:c,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function gE({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}o(gE,"filterToSelectedOptions");function yE(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${h1(n)}`)}o(yE,"assertUniqueIdProps");function Nd(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}o(Nd,"createNewSelection");function Bd({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}o(Bd,"triggerPopUpState");const Zi={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"};tn()({tagName:"vira-dropdown",state(){return{showPopUpResult:void 0,popUpManager:new pE,navController:void 0}},hostClasses:{"vira-dropdown-disabled":o(({inputs:e})=>!!e.isDisabled,"vira-dropdown-disabled")},styles:o(({hostClasses:e})=>P`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Un["vira-focus-outline-color"].name}: ${dn["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${qt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Tt["vira-form-input-radius"].value};
            transition: border-radius
                ${gt["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${ju({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${gt["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${dn["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${Ht};
            border-radius: inherit;
            background-color: ${dn["vira-form-background-color"].value};
            color: ${dn["vira-form-foreground-color"].value};
        }

        .open-upwards ${Hi} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${L0.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Mi}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,"styles"),events:{selectedChange:Pe(),openChange:Pe()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen(q0,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const a=n.shadowRoot.querySelector(".dropdown-wrapper");Jt.instanceOf(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),e.popUpManager.listen(z0,a=>{const u=a.detail.x,l=r.options[u];if(!l)throw new Error(`Found no dropdown option at index '${u}'`);r.isMultiSelect||Bd({emitEvent:!0,open:!1},{dispatch:o(c=>{i(new s.openChange(c))},"dispatch"),host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Nd(l.id,r.selected,!!r.isMultiSelect)))}),t({navController:new zu(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){yE(r.options);function a(y){Bd(y,{dispatch:o(v=>{e(new t.openChange(v))},"dispatch"),host:s,popUpManager:n.popUpManager,updateState:i})}o(a,"triggerPopUp"),r.isDisabled?a({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?a({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&a({emitEvent:!1,open:!0}));const u=gE(r),l=r.icon?D`
                  <${re.assign({icon:r.icon})}
                      ${sr(Zi.icon)}
                  ></${re}>
              `:"",c=n.showPopUpResult?n.showPopUpResult.popDown?P`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:P`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function d(){a({emitEvent:!0,open:!n.showPopUpResult})}o(d,"respondToClick");const f=!u.length,p=r.selectionPrefix&&!f?D`
                      <span class="selected-label-prefix" ${sr(Zi.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",g=f?r.placeholder||"":u.map(y=>y.label).join(", ");return D`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${zt({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${sr(Zi.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${J("keydown",y=>{!n.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0})})}
                ${J("click",y=>{y.detail===0&&d()})}
                ${J("mousedown",y=>{y.button===0&&d()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${zt({"using-placeholder":f})}"
                        title=${Ps(f?g:void 0)}
                    >
                        ${p} ${g}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${re.assign({icon:tE})}
                            class="trigger-icon"
                        ></${re}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${pt(!!n.showPopUpResult,D`
                            <${Hi.assign({options:r.options,selectedOptions:u})}
                                ${J(Hi.events.selectionChange,y=>{r.isMultiSelect||a({emitEvent:!0,open:!1}),e(new t.selectedChange(Nd(y.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${sr(Zi.options)}
                            ></${Hi}>
                        `)}
                </div>
            </button>
        `}});Le()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":o(({inputs:e})=>e.bold,"vira-bold-bold")},styles:o(({hostClasses:e,cssVars:t})=>P`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,"styles"),render({inputs:e}){return D`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var Za;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Za||(Za={}));const Pd=tn()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":o(({inputs:e})=>e.buttonStyle===Za.Outline,"vira-button-outline-style"),"vira-button-disabled":o(({inputs:e})=>!!e.disabled,"vira-button-disabled")},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:o(({hostClasses:e,cssVars:t})=>P`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ht};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Un["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Mi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${qt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Tt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${gt["vira-interaction-animation-duration"].value},
                background-color
                    ${gt["vira-interaction-animation-duration"].value},
                border-color ${gt["vira-interaction-animation-duration"].value};
        }

        ${ju({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${re} + .text-template {
            margin-left: 8px;
        }
    `,"styles"),render:o(({inputs:e})=>{const t=e.icon?D`
                  <${re.assign({icon:e.icon})}></${re}>
              `:"",n=e.text?D`
                  <span class="text-template">${e.text}</span>
              `:"";return D`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `},"render")});tn()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":o(({inputs:e})=>e.expanded,"vira-collapsible-wrapper-expanded")},slotNames:["header"],styles:o(({hostClasses:e})=>P`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${qt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${gt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,"styles"),events:{expandChange:Pe()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const a=s.expanded?P`
                  height: ${e.contentHeight}px;
              `:P`
                  height: 0;
              `;return D`
            <button
                class="header-wrapper"
                ${J("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${E0(({contentRect:u})=>{n({contentHeight:u.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});tn()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":o(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:Pe(),imageError:Pe()},styles:o(({hostClasses:e})=>P`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,"styles"),render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const a=e.imageUrl,u=t.erroredUrls[a]?D`
                  <slot class="status-wrapper" name=${s.error}>
                      <${re.assign({icon:lE})} class="error"></${re}>
                  </slot>
              `:t.loadedUrls[a]?void 0:D`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${re.assign({icon:j0})}></${re}>
                    </slot>
                `;return D`
            ${pt(!!u,u)}
            <img
                class=${zt({hidden:!!u})}
                ${J("load",async()=>{e._debugLoadDelay&&await ii(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[a]:!0}}),r(new i.imageLoad)})}
                ${J("error",async l=>{e._debugLoadDelay&&await ii(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[a]:!0}}),r(new i.imageError(l.error))})}
                src=${a}
            />
        `}});function Ya({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Ya({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}o(Ya,"doesMatch");function wE({value:e,allowed:t,blocked:n}){const r=t?Ya({input:e,matcher:t}):!0,i=n?Ya({input:e,matcher:n}):!1;return r&&!i}o(wE,"isAllowed");function Ja(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(wE({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}o(Ja,"filterTextInputValue");function bE({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const s=Zr(n,HTMLInputElement),a=w.hasKey(n,"data")&&zh.isString(n.data)||"";if(a){const{blocked:l}=Ja({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l.length&&r(l)}const u=Ja({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==u&&(s.value=u),t!==u&&i(u)}o(bE,"textInputListener");var Rn;(function(e){e.Default="text",e.Password="password",e.Email="email"})(Rn||(Rn={}));const ds=tn()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Un["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:o(({hostClasses:e,cssVars:t})=>P`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Un["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Mi};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${qt};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Ht};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${qt};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Tt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${gt["vira-interaction-animation-duration"].value};
            }

            label {
                ${qt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Tt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ju({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${qt};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ht};
            }

            button {
                ${qt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${gt["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,"styles"),events:{valueChange:Pe(),inputBlocked:Pe()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":o(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":o(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":o(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown")},render:o(({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Ja({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?D`
                  <${re.assign({icon:e.icon})} class="left-side-icon"></${re}>
              `:"",u=e.fitText?P`
                  width: ${n.forcedInputWidth}px;
              `:"",l=e.disableBrowserHelps||e.type===Rn.Password;return D`
            <label>
                ${a}
                ${pt(!!e.fitText,D`
                        <span
                            class="size-span"
                            ${E0(({contentRect:c})=>{r({forcedInputWidth:c.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${vE(e.type,n.showPassword)}
                    style=${u}
                    autocomplete=${l?"off":""}
                    autocorrect=${l?"off":""}
                    autocapitalize=${l?"off":""}
                    spellcheck=${l?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${J("input",c=>{bE({inputs:e,previousValue:s,event:c,inputBlockedCallback(d){t(new i.inputBlocked(d))},newValueCallback(d){t(new i.valueChange(d))}})})}
                    placeholder=${e.placeholder}
                />
                ${pt(!!(e.showClearButton&&e.value),D`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${J("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${re.assign({icon:nE})}></${re}>
                        </button>
                    `)}
                ${pt(e.type===Rn.Password,D`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${J("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${re.assign({icon:n.showPassword?sE:iE})}></${re}>
                        </button>
                    `)}
                ${pt(!!e.suffix,D`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `},"render")});function vE(e,t){return e===Rn.Password&&t?Rn.Default:e||Rn.Default}o(vE,"calculateEffectiveInputType");tn()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:o(({cssVars:e})=>P`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,"styles"),render({inputs:e}){function t(n){if(!e.route)return;const r=e.route.router.setRouteOnDirectNavigation(e.route.route,n);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:r?"instant":"smooth"})}if(o(t,"clickCallback"),e.link?.newTab)return D`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label=${Ps(e.aria?.label||void 0)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return D`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    aria-label=${Ps(e.aria?.label||void 0)}
                    ${J("click",t)}
                >
                    <slot></slot>
                </a>
            `}}});const{defineElement:yt}=A0(),dt=yt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:o(({cssVars:e})=>P`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:o(({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return D`
            <a
                href=${n}
                ${J("click",r=>{(!e.router||B0(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Os(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function DE(e,t){return e.entry.entryType===ke.Root?!1:e.entry.entryType===ke.Page||w.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:w.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}o(DE,"shouldShowTreeNodeInNav");const Ut=yt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:o(({cssVars:e})=>P`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Q["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Q["element-book-nav-hover-background-color"].value};
            color: ${Q["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Q["element-book-nav-active-background-color"].value};
            color: ${Q["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${dt.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Q["element-book-nav-selected-background-color"].value};
            color: ${Q["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${re} {
            display: inline-flex;
            color: ${Q["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!DE(n,e.selectedPath))return;const r=P`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return D`
                <li style=${r}>
                    <${dt.assign({router:e.router,route:{paths:[Je.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${zt({"title-row":!0,selected:e.selectedPath?w.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${pt(lr(n,ke.ElementExample),D`
                                    <${re.assign({icon:rE})}></${re}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${dt}>
                </li>
            `});return D`
            <${dt.assign({route:yr,router:e.router})}>
                <slot name=${Gt.NavHeader}>Book</slot>
            </${dt}>
            <ul>
                ${t}
            </ul>
        `}});async function EE(e){await Is(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await lD(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}o(EE,"scrollSelectedNavElementIntoView");const bn=yt()({tagName:"book-error",styles:P`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(w.isArray(e.message)?e.message:[e.message]).map(n=>D`
                <p>${n}</p>
            `)}}),gi=yt()({tagName:"book-page-controls",events:{controlValueChange:Pe()},hostClasses:{"book-page-controls-has-controls":o(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:o(({hostClasses:e})=>P`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${ds} {
            height: 24px;
            max-width: 128px;
        }

        ${re}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],s)=>{if(i.controlType===Ve.Hidden)return"";const a=AE(e.currentValues[r],i,u=>{const l=w.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[r]:u}}))});return D`
                    <div class="control-wrapper">
                        ${pt(s===0,D`
                                <${re.assign({icon:uE})}
                                    class="options-icon"
                                ></${re}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function AE(e,t,n){return Zn(t,Ve.Hidden)?"":Zn(t,Ve.Checkbox)?D`
            <input
                type="checkbox"
                ?checked=${e}
                ${J("input",r=>{const i=Zr(r,HTMLInputElement);n(i.checked)})}
            />
        `:Zn(t,Ve.Color)?D`
            <input
                type="color"
                .value=${e}
                ${J("input",r=>{const i=Zr(r,HTMLInputElement);n(i.value)})}
            />
        `:Zn(t,Ve.Text)?D`
            <${ds.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${J(ds.events.valueChange,r=>{n(r.detail)})}
            ></${ds}>
        `:Zn(t,Ve.Number)?D`
            <input
                type="number"
                .value=${e}
                ${J("input",r=>{const i=Zr(r,HTMLInputElement);n(i.value)})}
            />
        `:Zn(t,Ve.Dropdown)?D`
            <select
                .value=${e}
                ${J("input",r=>{const i=Zr(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>D`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:D`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}o(AE,"createControlInput");const Ld=yt()({tagName:"book-breadcrumbs",styles:P`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:o(({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const s=r>=i.length-1,a=i.slice(0,r+1),u=s?"":D`
                      <span class="spacer">&gt;</span>
                  `;return D`
                <${dt.assign({route:{hash:void 0,search:void 0,paths:[Je.Book,...a]},router:e.router})}>
                    ${n}
                </${dt}>
                ${u}
            `}):D`
                &nbsp;
            `},"render")}),la=yt()({tagName:"book-breadcrumbs-bar",styles:P`
        :host {
            border-bottom: 1px solid
                ${Q["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Q["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return D`
            ${pt(!!e.currentSearch,D`
                    &nbsp;
                `,D`
                    <${Ld.assign({currentRoute:e.currentRoute,router:e.router})}></${Ld}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${J("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await ii({milliseconds:200}),r.value===i&&(r.value?t(new Os({paths:[Je.Search,encodeURIComponent(r.value)]})):t(new Os(yr)))})}
            />
        `}}),Id=yt()({tagName:"book-entry-description",styles:P`
        :host {
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Q["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>D`
                <p>${t}</p>
            `)}}),Rd=yt()({tagName:"book-page-wrapper",styles:P`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${dt} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?D`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:D`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Je.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Yh(e.pageNode.entry.errors):void 0;return r&&console.error(r),D`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${dt.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${dt}>
                    ${r?D`
                              <${bn.assign({message:r.message})}></${bn}>
                          `:D`
                              <${Id.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Id}>
                              <${gi.assign({config:e.pageNode.entry.controls,currentValues:yu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${gi}>
                          `}
                </div>
            </div>
        `}}),Yi=yt()({tagName:"book-element-example-controls",styles:P`
        :host {
            display: flex;
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Je.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return D`
            <${dt.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${dt}>
        `}}),Od=Symbol("unset-internal-state"),Vd=yt()({tagName:"book-element-example-viewer",state(){return{isUnset:Od}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Yh(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Od&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return D`
                ${pt(!!t.elementExampleNode.entry.styles,D`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",je(r)),console.error(r),D`
                <${bn.assign({message:`${t.elementExampleNode.entry.title} failed: ${je(r)}`})}></${bn}>
            `}},options:{allowPolymorphicState:!0}}),_d=yt()({tagName:"book-element-example-wrapper",styles:P`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Yi} {
            color: ${Q["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Yi} {
            color: ${Q["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return D`
            <div class="individual-example-wrapper">
                <${Yi.assign(mu(e,["currentPageControls"]))}></${Yi}>
                <${Vd.assign(e)}></${Vd}>
            </div>
        `}});function G0(e,t,n,r){const i=Fa(n,r),s=[];if(i){const a=G0(e,t,i,r);a&&s.push(a)}if(lr(n,ke.Page)&&!e.includes(n)){const a=yu(t,n.fullUrlBreadcrumbs);s.push({config:n.entry.controls,current:a,breadcrumbs:me(a,()=>n.fullUrlBreadcrumbs)})}return s.reduce((a,u)=>({config:{...a.config,...u.config},current:{...a.current,...u.current},breadcrumbs:{...a.breadcrumbs,...u.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}o(G0,"getFlattenedControlsFromHiddenParents");function CE({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:s}){if(!e.length&&r)return[D`
                No results
            `];const a=w.isLengthAtLeast(e,1)?G0(e,i,e[0],s):void 0,u=a&&Object.values(a.config).length&&w.isLengthAtLeast(e,1)?D`
                  <${gi.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${gi}>
              `:Y,l=zv(e,c=>c.fullUrlBreadcrumbs.join(">"),c=>{if(lr(c,ke.Page))return D`
                    <${Rd.assign({isTopLevel:t,pageNode:c,controls:i,router:n})}
                        class="block-entry"
                    ></${Rd}>
                `;if(lr(c,ke.ElementExample)){const d=yu(i,c.fullUrlBreadcrumbs.slice(0,-1));return D`
                    <${_d.assign({elementExampleNode:c,currentPageControls:d,router:n})}
                        class="inline-entry"
                    ></${_d}>
                `}else return lr(c,ke.Root)?Y:D`
                    <${bn.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${bn}>
                `});return[u,l]}o(CE,"createNodeTemplates");const er=yt()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:P`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${la} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${gt["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:Pe()},render:o(({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const s=Ta(e.currentRoute.paths),a=CE({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return D`
            <${la.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${la}>

            ${pt(e.showLoading,D`
                    <div
                        ${yd(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${re.assign({icon:j0})}></${re}>
                    </div>
                    ${pt(!!r.lastElement,D`
                            ${r.lastElement}
                            <slot name=${Gt.Footer}></slot>
                        `)}
                `,D`
                    <div
                        ${yd(u=>{i({lastElement:u})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${Gt.Footer}></slot>
                `)}
        `},"render")});function $E(e,t,n){const r=Ud(e,t);return r.length?r:(n(yr),Ud(e,yr.paths))}o($E,"getCurrentNodes");function Ud(e,t){return e.filter(n=>g1({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}o(Ud,"filterNodes");const Wd=Le()({tagName:"element-book-app",state(){return{currentRoute:yr,router:void 0,loading:!0,colors:{config:void 0,theme:wd(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Pe()},styles:P`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Q["element-book-page-background-color"].value};
            color: ${Q["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${er} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Ut} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await jd(e,Ta(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:o(({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function a(d){return{...e.currentRoute,...d}}o(a,"mergeRoutes");function u(d){const f=a(d);return!w.jsonEquals(e.currentRoute,f)}o(u,"areRoutesNew");function l(d){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,d].filter(w.isTruthy).join(" - "))}o(l,"updateWindowTitle");function c(d){if(!u(d))return;const f=a(d);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!w.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(f.paths))}o(c,"updateRoutes");try{if(t.elementBookRoutePaths&&!w.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const E=LD(t.internalRouterConfig.basePath);r({router:E}),E.listen(!0,k=>{r({currentRoute:k})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const d={themeColor:t.themeColor};if(!w.jsonEquals(d,e.colors.config)){const E=wd(d);r({colors:{config:d,theme:E}}),Z1(n,E)}const f=t._debug??!1,p=D1({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:mm(p.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=Ta(e.currentRoute.paths),v=(g?ED({flattenedNodes:p.flattenedNodes,searchQuery:g}):void 0)??$E(p.flattenedNodes,e.currentRoute.paths,c);l(v[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),D`
                <div
                    class="root"
                    ${J(Os,async E=>{const k=E.detail;if(!u(k))return;if(r({loading:!0}),c(k),!(n.shadowRoot.querySelector(Ut.tagName)instanceof Ut))throw new TypeError(`Failed to find child '${Ut.tagName}'`);await jd(n,g,e.currentRoute)})}
                    ${J(gi.events.controlValueChange,E=>{if(!e.treeBasedControls)return;const k=A1($,E.detail.fullUrlBreadcrumbs,E.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:k}})})}
                >
                    <${Ut.assign({flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Gt.NavHeader}
                            slot=${Gt.NavHeader}
                        ></slot>
                    </${Ut}>
                    <${er.assign({controls:$,currentNodes:v,currentRoute:e.currentRoute,debug:f,originalTree:p.tree,router:e.router,showLoading:e.loading})}
                        ${J(er.events.loadingRender,async E=>{await Is();const k=n.shadowRoot.querySelector(er.tagName);k?k.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${er.tagName}' for scrolling.`),await Is(),r({loading:!E.detail})})}
                    >
                        <slot
                            name=${Gt.Footer}
                            slot=${Gt.Footer}
                        ></slot>
                    </${er}>
                </div>
            `):D`
                    <${bn.assign({message:"Failed to generate page controls."})}></${bn}>
                `}catch(d){return console.error(d),D`
                <p class="error">${je(d)}</p>
            `}},"render")});async function jd(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(Ut.tagName);if(!(r instanceof Ut))throw new TypeError(`Failed to find child '${Ut.tagName}'`);await EE(r)}o(jd,"scrollNav");var he;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(he||(he={}));const Ji=window.navigator;function Gu(){return Hh(Array.from(w.hasKey(Ji,"webkitGetGamepads")?Ji.webkitGetGamepads():w.hasKey(Ji,"getGamepads")?Ji.getGamepads():[]),e=>{if(e)return{key:e.index,value:e}})}o(Gu,"getGamepads");const $e={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function Vs(e){return w.hasValue($e,e)}o(Vs,"isGamepadDeviceKey");const SE={Mouse:"mouse",Keyboard:"keyboard"},ee={...SE,...$e};var $r;(function(e){e.Button="button",e.Axe="axe"})($r||($r={}));function Yr(e){return`button-${e}`}o(Yr,"createButtonName");function Xa(e){return`axe-${e}`}o(Xa,"createAxeName");function ME(e){const[t]=sm(e,"-");if(w.isEnumValue(t,$r))return t;throw new Error(`Failed to parse input type from input named '${e}'`)}o(ME,"parseInputTypeFromInputName");const kE=.01;function xE({value:e,gamepadDeadZone:t,globalDeadZone:n}){const r=t??(n||kE);return Math.abs(e)>r?e:0}o(xE,"applyDeadZone");function qd({gamepadInput:e,inputIndex:t,deadZones:n,globalDeadZone:r}){const i=w.isNumber(e),s=i?Xa(t):Yr(t),a=i?e:e.value;return{inputName:s,value:xE({value:a,gamepadDeadZone:n[s],globalDeadZone:r}),inputType:i?$r.Axe:$r.Button}}o(qd,"serializeGamepadInput");function FE({gamepad:e,deadZoneSettings:t,globalDeadZone:n}){const r=String(e.index);if(!Vs(r))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const i=t[e.id]||{},s=e.axes.map((l,c)=>qd({gamepadInput:l,inputIndex:c,deadZones:i,globalDeadZone:n})),a=e.buttons.map((l,c)=>qd({deadZones:i,gamepadInput:l,globalDeadZone:n,inputIndex:c})),u=pr([...a,...s].map(l=>[l.inputName,l]));return{axes:s,buttons:a,isConnected:e.connected,gamepadName:e.id,deviceKey:r,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:u}}o(FE,"serializeGamepad");function TE(e){return me(Gu(),(t,n)=>FE({gamepad:n,...e}))}o(TE,"readCurrentGamepads");function NE(e){const t={},n={deviceKey:e.deviceKey,deviceName:e.gamepadName,deviceType:he.Gamepad};return Object.values(e.inputsByName).forEach(r=>{r.value&&(t[r.inputName]={...n,details:r,inputName:r.inputName,inputValue:r.value})}),t}o(NE,"gamepadToCurrentInputs");function BE(e){return me(e,(t,n)=>({currentInputs:NE(n),deviceDetails:n,deviceName:n.gamepadName,deviceKey:n.deviceKey,deviceType:he.Gamepad}))}o(BE,"gamepadMapToInputDevices");function zd(e){return Vn(e).map(r=>r.currentInputs).filter(w.isTruthy).map(r=>Vn(r)).flat()}o(zd,"allInputDevicesToAllInputs");const Gd={deviceDetails:void 0,deviceKey:ee.Keyboard,deviceName:"keyboard",deviceType:he.Keyboard},Xi={deviceDetails:void 0,deviceKey:ee.Mouse,deviceName:"mouse",deviceType:he.Mouse},K0={[ee.Gamepad1]:he.Gamepad,[ee.Gamepad2]:he.Gamepad,[ee.Gamepad3]:he.Gamepad,[ee.Gamepad4]:he.Gamepad,[ee.Keyboard]:he.Keyboard,[ee.Mouse]:he.Mouse};function vo(){return(e,t)=>{const n=um(e,{capitalizeFirstLetter:!0}),r=class extends Mt()(e){static{o(this,"TimedEventConstructor")}eventType=e;static getNewData=t;static constructIfDataIsNew(i,...s){const a=r.getNewData(...s);if(a)return new r({detail:{timestamp:i,inputs:a}})}};return Object.defineProperty(r,"name",{value:n,writable:!0}),r}}o(vo,"defineTimedEvent");function PE(...[e,t]){return t}o(PE,"allDevicesUpdatedDataCheckCallback");const LE=vo()("all-devices-updated",PE);function Kd(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}o(Kd,"areInputsEqual");function IE(...[e,t]){const n=zd(t),r=e?zd(e):[];if(!w.jsonEquals(r,n)){const i=n.filter(a=>!r.some(u=>Kd(u,a))),s=r.filter(a=>!n.some(u=>Kd(u,a)));return{newInputs:i,removedInputs:s,allCurrentInputs:n}}}o(IE,"didCurrentInputsChange");const Do=vo()("current-inputs-changed",IE);function RE(...[e,t]){if(!e)return[];const n=ne(e).filter(r=>!w.hasKey(t,r));if(n.length)return n.map(r=>e[r]).filter(w.isTruthy)}o(RE,"wereDevicesRemoved");const H0=vo()("devices-removed",RE);function OE(...[e,t]){if(!e)return Vn(t).filter(w.isTruthy);const n=ne(t).filter(r=>!w.hasKey(e,r));if(n.length)return n.map(r=>t[r]).filter(w.isTruthy)}o(OE,"areThereNewDevices");const Z0=vo()("new-devices-added",OE),Y0=[LE,Z0,H0,Do];Object.fromEntries(Y0.map(e=>[e.type,e]));const Hd="code";class Tr extends lm{static{o(this,"InputDeviceHandler")}currentKeyboardInputs={};currentMouseInputs={};gamepadDeadZoneSettings={};lastReadInputDevices;loopIsRunning=!1;globalDeadZone=0;removeGlobalListeners=o(()=>{},"removeGlobalListeners");currentLoopIndex=-1;lastEventDetails={};constructor(t={}){super(),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){const n=[Tn("keydown",r=>{const i=Yr(r[Hd]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:he.Keyboard,details:{keyboardEvent:r},deviceKey:ee.Keyboard,deviceName:Gd.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),Tn("keyup",r=>{delete this.currentKeyboardInputs[Yr(r[Hd])]}),Tn("mousedown",r=>{const i=Yr(r.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:he.Mouse,details:{mouseEvent:r},deviceName:Xi.deviceName,deviceKey:ee.Mouse,inputName:i,inputValue:1})}),Tn("mouseup",r=>{delete this.currentMouseInputs[Yr(r.button)]}),t.disableMouseMovement?void 0:Tn("mousemove",r=>{const i=Xa("x"),s=Xa("y");this.currentMouseInputs[i]={deviceType:he.Mouse,details:{mouseEvent:r},deviceName:Xi.deviceName,deviceKey:ee.Mouse,inputName:i,inputValue:r.clientX},this.currentMouseInputs[s]={deviceType:he.Mouse,details:{mouseEvent:r},deviceName:Xi.deviceName,deviceKey:ee.Mouse,inputName:s,inputValue:r.clientY}})];this.removeGlobalListeners=()=>{n.forEach(r=>r?.())}}runPollingLoop(t,n){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,n),requestAnimationFrame(r=>{this.runPollingLoop(t,r)}))}fireEvents(t,n,r){Y0.forEach(i=>{const s=i.constructIfDataIsNew(t,n,r);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[t,n,r]},this.dispatch(s))})}getCurrentDeviceValues(t,n){const r=TE({deadZoneSettings:t,globalDeadZone:n}),i=BE(r);return{[ee.Keyboard]:{...Gd,currentInputs:{...this.currentKeyboardInputs}},[ee.Mouse]:{...Xi,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,n=performance.now(),r=this.globalDeadZone){const i=this.getCurrentDeviceValues(t,r),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(n,s,i),i}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}const Zd=Le()({tagName:"vir-players-bindings-debug",styles:P`
        h3 {
            margin: 4px;
        }
    `,render({inputs:e}){return Qt(e.playersBindingsMap).map(([t,n])=>D`
                    <h3>Player ${t}</h3>
                    <${Yd.assign({bindingsMap:n})}></${Yd}>
                `)}}),Yd=Le()({tagName:"vir-bindings-debug",styles:P`
        h4 {
            margin: 4px;
        }
    `,render({inputs:e}){return Qt(e.bindingsMap).map(([t,n])=>{const r=n.map(i=>{const s=Vs(i.deviceKey)?`gamepad ${i.deviceKey}`:i.deviceKey;return D`
                        <tr>
                            <td>${s}:</td>
                            <td>${i.inputName}</td>
                        </tr>
                    `});return D`
                    <section class="binding">
                        <h4>${t}</h4>
                        <table><tbody>${r}</tbody></table>
                    </section>
                `})}});class Jd extends Mt()("vir-line-pause"){static{o(this,"VirLinePauseEvent")}}class J0 extends Mt()("vir-line-state-rate-calculated"){static{o(this,"VirLineUpdateRateEvent")}}class VE extends Mt()("vir-line-state-change"){static{o(this,"VirLineStateUpdateEvent")}}class Xd extends Mt()("vir-line-error"){static{o(this,"VirLineErrorEvent")}}class _E extends Qs("vir-line-update-skipped"){static{o(this,"VirLineUpdateSkippedEvent")}}class UE extends Qs("vir-line-destroy"){static{o(this,"VirLineDestroyEvent")}}const X0="animation frames",WE={enableLogging:!1,targetUpdateRate:void 0,init:{startUpdateLoopImmediately:!1},minUpdateRateCalculationInterval:{milliseconds:500},updateLoopInterval:X0};function jE(e){const t=[],n=new Set;if(e.forEach(r=>{const i=r.stageId.name;n.has(i)?t.push(i):n.add(i)}),t.length)throw new Error(`Duplicate stage names provided to VirLine: ${t.join(", ")}`)}o(jE,"assertValidStages");function qE(e){return[e.name,e.version==null?void 0:String(e.version)].filter(w.isTruthy).join("@")}o(qE,"stageIdToString");class Q0{static{o(this,"VirLineStage")}stageId;executor;constructor(t,n){this.stageId=t,this.executor=n}}const zE=Object.prototype.toString;function ep(e){if(e===void 0)return"undefined";if(e===null)return"null";const t=typeof e;if(t==="boolean")return"boolean";if(t==="string")return"string";if(t==="number")return"number";if(t==="symbol")return"symbol";if(t==="function")return YE(e)?"generatorfunction":"function";if(GE(e))return"array";if(QE(e))return"buffer";if(XE(e))return"arguments";if(HE(e))return"date";if(KE(e))return"error";if(ZE(e))return"regexp";switch(tp(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(JE(e))return"generator";switch(zE.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}o(ep,"kindOf");function tp(e){return typeof e.constructor=="function"?e.constructor.name:null}o(tp,"ctorName");function GE(e){return Array.isArray,Array.isArray(e)}o(GE,"isArray");function KE(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}o(KE,"isError");function HE(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}o(HE,"isDate");function ZE(e){return e instanceof RegExp?!0:typeof e.flags=="string"&&typeof e.ignoreCase=="boolean"&&typeof e.multiline=="boolean"&&typeof e.global=="boolean"}o(ZE,"isRegexp");function YE(e){return tp(e)==="GeneratorFunction"}o(YE,"isGeneratorFn");function JE(e){return typeof e.throw=="function"&&typeof e.return=="function"&&typeof e.next=="function"}o(JE,"isGeneratorObj");function XE(e){try{if(typeof e.length=="number"&&typeof e.callee=="function")return!0}catch(t){if(t.message.includes("callee"))return!0}return!1}o(XE,"isArguments");function QE(e){return e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}o(QE,"isBuffer");const Qd=Symbol.prototype.valueOf;function e5(e){switch(ep(e)){case"array":return e.slice();case"object":return Object.assign({},e);case"date":return new e.constructor(Number(e));case"map":return new Map(e);case"set":return new Set(e);case"buffer":return i5(e);case"symbol":return s5(e);case"arraybuffer":return n5(e);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return r5(e);case"regexp":return t5(e);case"error":return Object.create(e);default:return e}}o(e5,"cloneShallow");function t5(e){const t=e.flags===void 0?/\w+$/.exec(e)||void 0:e.flags,n=new e.constructor(e.source,t);return n.lastIndex=e.lastIndex,n}o(t5,"cloneRegExp");function n5(e){const t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}o(n5,"cloneArrayBuffer");function r5(e){return new e.constructor(e.buffer,e.byteOffset,e.length)}o(r5,"cloneTypedArray");function i5(e){const t=e.length,n=Buffer.allocUnsafe?Buffer.allocUnsafe(t):Buffer.from(t);return e.copy(n),n}o(i5,"cloneBuffer");function s5(e){return Qd?new Object(Qd.call(e)):{}}o(s5,"cloneSymbol");function _s(e,t){switch(ep(e)){case"object":return o5(e);case"array":return a5(e);default:return e5(e)}}o(_s,"cloneDeep");function o5(e,t){if(w.isObject(e)){const n=new e.constructor;for(const r in e)n[r]=_s(e[r]);return n}return e}o(o5,"cloneObjectDeep");function a5(e,t){const n=new e.constructor(e.length);for(const[r,i]of e.entries())n[r]=_s(i);return n}o(a5,"cloneArrayDeep");class ki extends eo{static{o(this,"VirLine")}stages;constructor(t,n,r){super(),this.stages=t,this.currentState={...n},r&&this.updateOptions(r),jE(t),this.options.init.startUpdateLoopImmediately&&this.startUpdateLoop()}options=WE;isUpdateLoopPaused=!0;currentState;get stateType(){throw new Error("Access to 'stateType' is only allowed as a type.")}lastStateUpdateHighResTimestamp=0;updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0};isCurrentlyUpdating=!1;stateListeners=[];updateOptions(t){this.options=om(this.options,t)}startUpdateLoop(){return this.isUpdateLoopPaused?(this.isUpdateLoopPaused=!1,this.dispatch(new Jd({detail:!1})),this.updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0},this.runUpdateLoop(),!0):!1}pauseUpdateLoop(){return this.isUpdateLoopPaused?!1:(this.isUpdateLoopPaused=!0,this.dispatch(new Jd({detail:!0})),!0)}destroy(){this.pauseUpdateLoop(),this.removeAllStateListeners(),this.dispatch(new UE),super.destroy()}listenToState(t,n,r){const i=this.stateListeners.find(a=>w.jsonEquals(a.selection,n)),s=Jl(this.currentState,n);return i?i.listeners.add(r):this.stateListeners.push({selection:n,lastValue:_s(s),listeners:new Set([r])}),t&&r(s),()=>this.removeStateListener(n,r)}removeAllStateListeners(){this.stateListeners=[]}removeStateListener(t,n){const r=this.stateListeners.findIndex(s=>w.jsonEquals(s.selection,t)),i=this.stateListeners[r];return!i||!i.listeners.delete(n)?!1:(i.listeners.size||this.stateListeners.splice(r,1),!0)}async triggerUpdate(){if(this.isCurrentlyUpdating)return this.dispatch(new _E),this.options.enableLogging&&console.warn("Update skipped: another is still in progress."),!1;this.isCurrentlyUpdating=!0;const t=performance.now(),n={milliseconds:t-this.lastStateUpdateHighResTimestamp};this.lastStateUpdateHighResTimestamp=t,this.updateRateCounters.updateCount++;const r=await this.runStateUpdate(t,n);if(this.isCurrentlyUpdating=!1,r)throw r;return await this.fireStateListeners(),!0}runUpdateLoop(){Kl(()=>this.triggerUpdate());const t=o(()=>{this.isUpdateLoopPaused||this.runUpdateLoop()},"executeAgain");if(this.options.updateLoopInterval===X0)window.requestAnimationFrame(t);else{const n=St(this.options.updateLoopInterval,{milliseconds:!0});setTimeout(t,n.milliseconds)}}async fireStateListeners(){this.dispatch(new VE({detail:this.currentState}));const t=[];this.stateListeners.forEach(n=>{const r=Jl(this.currentState,n.selection);w.deepEquals(r,n.lastValue)||(n.lastValue=_s(r),n.listeners.forEach(i=>{t.push(Kl(async()=>await i(r)))}))}),await Promise.all(t)}async runStateUpdate(t,n){try{const r={timeSinceLastUpdate:n,updateStartTime:{milliseconds:t}};await Rw(this.stages,async i=>{const s={...r,state:this.currentState};try{await i.executor(s)}catch(a){const u=fr(a,`Stage ${p1({value:qE(i.stageId),wrapper:"'"})} failed`);console.error(u),this.dispatch(new Xd({detail:u}))}}),this.calculateUpdateRate(t);return}catch(r){const i=fr(r,"Failed to update state");return console.error(i),this.dispatch(new Xd({detail:i})),i}}calculateUpdateRate(t){if(this.options.minUpdateRateCalculationInterval==null)return;const n=St(this.options.minUpdateRateCalculationInterval,{milliseconds:!0}).milliseconds,r=t-this.updateRateCounters.calculatedAtHighResTimestamp;if(r>n){const i=this.updateRateCounters.updateCount;this.updateRateCounters={calculatedAtHighResTimestamp:t,updateCount:0},this.dispatch(new J0({detail:{calculatedAt:pv(t+performance.timeOrigin,ov),durationSinceLastCalculation:{milliseconds:r},updateCount:i,updatesPerSecond:i/r*1e3}}))}}}var _;(function(e){e.SwitchPro="switch-pro",e.PlaystationDualShock="playstation-dual-shock",e.PlaystationDualShock4="playstation-dual-shock-4",e.PlaystationDualSense="playstation-dual-sense",e.SteamDeck="steam-deck",e.Xbox360="xbox-360",e.XboxWireless="xbox-wireless"})(_||(_={}));const ef={[_.SwitchPro]:"Switch Pro Controller",[_.PlaystationDualShock]:"PlayStation DualShock",[_.PlaystationDualShock4]:"PlayStation DualShock 4",[_.PlaystationDualSense]:"PlayStation DualSense",[_.SteamDeck]:"Steam Deck",[_.Xbox360]:"Xbox 360",[_.XboxWireless]:"Xbox Wireless"};var Vt;(function(e){e.Microsoft="microsoft",e.Nintendo="nintendo",e.Sony="sony",e.Valve="valve"})(Vt||(Vt={}));const u5={[_.SwitchPro]:"Nintendo Switch Pro gamepad for the Nintendo Switch console.",[_.PlaystationDualSense]:"Sony PlayStation DualSense gamepad for the Sony PlayStation 5 console.",[_.PlaystationDualShock]:"Sony PlayStation DualShock gamepad for the Sony PlayStation 1 through Sony PlayStation 3 consoles.",[_.PlaystationDualShock4]:"Sony PlayStation DualShock 4 gamepad for the Sony PlayStation 4 console.",[_.SteamDeck]:"Gamepad for the Valve Steam Deck handheld console.",[_.Xbox360]:"Microsoft Xbox 360 gamepad for the Microsoft Xbox 360 console. Can be wired or wireless.",[_.XboxWireless]:"Microsoft Xbox Wireless gamepad for Microsoft Xbox One through Xbox Series X/S consoles."},np=[{gamepadModels:[_.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The capture / screenshot button is not detected by this browser."}},{gamepadModels:[_.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The share button is not detected by this browser."}},{gamepadModels:[_.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"B","button-1":"A","button-2":"Y","button-3":"X","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home","button-17":"capture"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[_.PlaystationDualSense],systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation"},gamepadModels:[_.PlaystationDualSense],systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation, the touch pad button, and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"L2-axe","axe-5":"R2-axe","axe-6":"d-pad","button-0":"square","button-1":"X","button-2":"O","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"playstation","button-13":"touch-pad","button-14":"mute","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[_.PlaystationDualSense],systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[_.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"d-pad","button-0":"A","button-1":"B","button-2":"unknown","button-3":"X","button-4":"Y","button-5":"unknown","button-6":"LB","button-7":"RB","button-8":"unknown","button-9":"unknown","button-10":"view","button-11":"menu","button-12":"guide","button-13":"L3","button-14":"R3","button-15":"LT","button-16":"RT"},systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[_.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-17":"share"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0}],Ku={"Pro Controller Extended Gamepad":_.SwitchPro,"Xbox Wireless Controller Extended Gamepad":_.XboxWireless,"DualSense Wireless Controller Extended Gamepad":_.PlaystationDualSense,"Wireless Controller Extended Gamepad":_.PlaystationDualSense,"54c-ce6-Wireless Controller":_.PlaystationDualSense,"45e-b13-Xbox Wireless Controller":_.XboxWireless,"Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)":_.SwitchPro,"Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)":_.PlaystationDualSense,"Xbox Series X Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b12)":_.XboxWireless,"DUALSHOCK 4 Wireless Controller Extended Gamepad":_.PlaystationDualShock4,"DUALSHOCK 4 Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)":_.PlaystationDualShock4,"54c-9cc-DUALSHOCK 4 Wireless Controller":_.PlaystationDualShock4},l5={[_.SwitchPro]:Vt.Nintendo,[_.Xbox360]:Vt.Microsoft,[_.XboxWireless]:Vt.Microsoft,[_.PlaystationDualSense]:Vt.Sony,[_.PlaystationDualShock]:Vt.Sony,[_.PlaystationDualShock4]:Vt.Sony,[_.SteamDeck]:Vt.Valve},c5={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},rp={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},we={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Re={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},on={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class C{static{o(this,"Utils")}static getFirstMatch(t,n){const r=n.match(t);return r&&r.length>0&&r[1]||""}static getSecondMatch(t,n){const r=n.match(t);return r&&r.length>1&&r[2]||""}static matchAndReturnConst(t,n,r){if(t.test(n))return r}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const n=t.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const n=t.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5)){if(n[0]===1&&n[1]<6)return"Cupcake";if(n[0]===1&&n[1]>=6)return"Donut";if(n[0]===2&&n[1]<2)return"Eclair";if(n[0]===2&&n[1]===2)return"Froyo";if(n[0]===2&&n[1]>2)return"Gingerbread";if(n[0]===3)return"Honeycomb";if(n[0]===4&&n[1]<1)return"Ice Cream Sandwich";if(n[0]===4&&n[1]<4)return"Jelly Bean";if(n[0]===4&&n[1]>=4)return"KitKat";if(n[0]===5)return"Lollipop";if(n[0]===6)return"Marshmallow";if(n[0]===7)return"Nougat";if(n[0]===8)return"Oreo";if(n[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,n,r=!1){const i=C.getVersionPrecision(t),s=C.getVersionPrecision(n);let a=Math.max(i,s),u=0;const l=C.map([t,n],c=>{const d=a-C.getVersionPrecision(c),f=c+new Array(d+1).join(".0");return C.map(f.split("."),p=>new Array(20-p.length).join("0")+p).reverse()});for(r&&(u=a-Math.min(i,s)),a-=1;a>=u;){if(l[0][a]>l[1][a])return 1;if(l[0][a]===l[1][a]){if(a===u)return 0;a-=1}else if(l[0][a]<l[1][a])return-1}}static map(t,n){const r=[];let i;if(Array.prototype.map)return Array.prototype.map.call(t,n);for(i=0;i<t.length;i+=1)r.push(n(t[i]));return r}static find(t,n){let r,i;if(Array.prototype.find)return Array.prototype.find.call(t,n);for(r=0,i=t.length;r<i;r+=1){const s=t[r];if(n(s,r))return s}}static assign(t,...n){const r=t;let i,s;if(Object.assign)return Object.assign(t,...n);for(i=0,s=n.length;i<s;i+=1){const a=n[i];typeof a=="object"&&a!==null&&Object.keys(a).forEach(l=>{r[l]=a[l]})}return t}static getBrowserAlias(t){return c5[t]}static getBrowserTypeByAlias(t){return rp[t]||""}}const ie=/version\/(\d+(\.?_?\d+)+)/i,d5=[{test:[/googlebot/i],describe(e){const t={name:"Googlebot"},n=C.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/opera/i],describe(e){const t={name:"Opera"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe(e){const t={name:"Opera"},n=C.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe(e){const t={name:"Samsung Internet for Android"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe(e){const t={name:"NAVER Whale Browser"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe(e){const t={name:"MZ Browser"},n=C.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/focus/i],describe(e){const t={name:"Focus"},n=C.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/swing/i],describe(e){const t={name:"Swing"},n=C.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/coast/i],describe(e){const t={name:"Opera Coast"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){const t={name:"Opera Touch"},n=C.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe(e){const t={name:"Yandex Browser"},n=C.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe(e){const t={name:"UC Browser"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe(e){const t={name:"Maxthon"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe(e){const t={name:"Epiphany"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe(e){const t={name:"Puffin"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe(e){const t={name:"Sleipnir"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe(e){const t={name:"K-Meleon"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe(e){const t={name:"WeChat"},n=C.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe(e){const t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=C.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe(e){const t={name:"Internet Explorer"},n=C.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe(e){const t={name:"Microsoft Edge"},n=C.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe(e){const t={name:"Microsoft Edge"},n=C.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe(e){const t={name:"Vivaldi"},n=C.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe(e){const t={name:"SeaMonkey"},n=C.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe(e){const t={name:"Sailfish"},n=C.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe(e){const t={name:"Amazon Silk"},n=C.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe(e){const t={name:"PhantomJS"},n=C.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe(e){const t={name:"SlimerJS"},n=C.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t={name:"BlackBerry"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe(e){const t={name:"WebOS Browser"},n=C.getFirstMatch(ie,e)||C.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe(e){const t={name:"Bada"},n=C.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe(e){const t={name:"Tizen"},n=C.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe(e){const t={name:"QupZilla"},n=C.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){const t={name:"Firefox"},n=C.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe(e){const t={name:"Electron"},n=C.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe(e){const t={name:"Miui"},n=C.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe(e){const t={name:"Chromium"},n=C.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe(e){const t={name:"Chrome"},n=C.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe(e){const t={name:"Google Search"},n=C.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){const t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){const t={name:"Android Browser"},n=C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe(e){const t={name:"PlayStation 4"},n=C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe(e){const t={name:"Safari"},n=C.getFirstMatch(ie,e);return n&&(t.version=n),t}},{test:[/.*/i],describe(e){const t=/^(.*)\/(.*) /,n=/^(.*)\/(.*)[ \t]\((.*)/,i=e.search("\\(")!==-1?n:t;return{name:C.getFirstMatch(i,e),version:C.getSecondMatch(i,e)}}}],f5=[{test:[/Roku\/DVP/],describe(e){const t=C.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:Re.Roku,version:t}}},{test:[/windows phone/i],describe(e){const t=C.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:Re.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){const t=C.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=C.getWindowsVersionName(t);return{name:Re.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){const t={name:Re.iOS},n=C.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe(e){const t=C.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=C.getMacOSVersionName(t),r={name:Re.MacOS,version:t};return n&&(r.versionName=n),r}},{test:[/(ipod|iphone|ipad)/i],describe(e){const t=C.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:Re.iOS,version:t}}},{test(e){const t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){const t=C.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=C.getAndroidVersionName(t),r={name:Re.Android,version:t};return n&&(r.versionName=n),r}},{test:[/(web|hpw)[o0]s/i],describe(e){const t=C.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:Re.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t=C.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||C.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||C.getFirstMatch(/\bbb(\d+)/i,e);return{name:Re.BlackBerry,version:t}}},{test:[/bada/i],describe(e){const t=C.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:Re.Bada,version:t}}},{test:[/tizen/i],describe(e){const t=C.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:Re.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:Re.Linux}}},{test:[/CrOS/],describe(){return{name:Re.ChromeOS}}},{test:[/PlayStation 4/],describe(e){const t=C.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:Re.PlayStation4,version:t}}}],h5=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){const t=C.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:we.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:we.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:we.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:we.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:we.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:we.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:we.tablet}}},{test(e){const t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe(e){const t=C.getFirstMatch(/(ipod|iphone)/i,e);return{type:we.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:we.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:we.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:we.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:we.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:we.mobile,vendor:"Microsoft"}}},{test(e){const t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:we.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:we.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:we.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:we.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:we.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:we.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:we.tv}}}],m5=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:on.Blink};const n=C.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:on.EdgeHTML,version:n}}},{test:[/trident/i],describe(e){const t={name:on.Trident},n=C.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){return e.test(/presto/i)},describe(e){const t={name:on.Presto},n=C.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){const t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe(e){const t={name:on.Gecko},n=C.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:on.Blink}}},{test:[/(apple)?webkit/i],describe(e){const t={name:on.WebKit},n=C.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}];class tf{static{o(this,"Parser")}constructor(t,n=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=C.find(d5,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=C.find(f5,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:n}=this.getOS();return t?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:n}=this.getPlatform();return t?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const t=C.find(h5,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=C.find(m5,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return C.assign({},this.parsedResult)}satisfies(t){const n={};let r=0;const i={};let s=0;if(Object.keys(t).forEach(u=>{const l=t[u];typeof l=="string"?(i[u]=l,s+=1):typeof l=="object"&&(n[u]=l,r+=1)}),r>0){const u=Object.keys(n),l=C.find(u,d=>this.isOS(d));if(l){const d=this.satisfies(n[l]);if(d!==void 0)return d}const c=C.find(u,d=>this.isPlatform(d));if(c){const d=this.satisfies(n[c]);if(d!==void 0)return d}}if(s>0){const u=Object.keys(i),l=C.find(u,c=>this.isBrowser(c,!0));if(l!==void 0)return this.compareVersion(i[l])}}isBrowser(t,n=!1){const r=this.getBrowserName().toLowerCase();let i=t.toLowerCase();const s=C.getBrowserTypeByAlias(i);return n&&s&&(i=s.toLowerCase()),i===r}compareVersion(t){let n=[0],r=t,i=!1;const s=this.getBrowserVersion();if(typeof s=="string")return t[0]===">"||t[0]==="<"?(r=t.substr(1),t[1]==="="?(i=!0,r=t.substr(2)):n=[],t[0]===">"?n.push(1):n.push(-1)):t[0]==="="?r=t.substr(1):t[0]==="~"&&(i=!0,r=t.substr(1)),n.indexOf(C.compareVersions(s,r,i))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,n=!1){return this.isBrowser(t,n)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(n=>this.is(n))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class p5{static{o(this,"Bowser")}static getParser(t,n=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new tf(t,n)}static parse(t){return new tf(t).getResult()}static get BROWSER_MAP(){return rp}static get ENGINE_MAP(){return on}static get OS_MAP(){return Re}static get PLATFORMS_MAP(){return we}}const Qi=p5.getParser(navigator.userAgent);function g5(){return{browserVersion:Qi.getBrowserVersion(),browserName:Qi.getBrowserName(),osName:Qi.getOSName(),osVersion:Qi.getOSVersion()}}o(g5,"getSystemVersions");function nf(e){return hu(e,(t,n)=>({key:w.isString(t)?t.toLowerCase():t,value:n}))}o(nf,"makeObjectKeysLowercase");function y5({gamepad:e,layouts:t=np,gamepadModelMap:n=Ku,systemVersions:r=g5()}){const i=(w.isString(e)?e:e?.deviceName)||"",{gamepadModel:s}=Hu({gamepad:i,gamepadModelMap:n}),a=s?t.filter(l=>l.gamepadModels.includes(s)):[];return a.length<=1?a[0]:a.reduce((l,c)=>{const d=w5(r,c);return d>l.score?{score:d,layout:c}:l},{layout:void 0,score:-1}).layout}o(y5,"findMatchingGamepadLayout");function w5(e,t){const n=t.systemVersions.map(r=>Object.values(me(e,(s,a)=>r[s].toLowerCase()===a.toLowerCase())).reduce((s,a)=>s+(a?1:0),0));return Math.max(...n)}o(w5,"scoreLayoutSystemVersions");function Hu({gamepad:e,gamepadModelMap:t=Ku,gamepadBrandMap:n=l5}){const r=(typeof e=="string"?e:e?.deviceName)||void 0,i=r&&nf(t)[r.toLowerCase()]||void 0;return{gamepadModel:i,gamepadBrand:i&&nf(n)[i]||void 0,gamepadModelDescription:i&&u5[i]||void 0}}o(Hu,"findMatchingGamepadModel");var Z=(e=>(e.Positive="positive",e.Flat="flat",e.Negative="negative",e))(Z||{});function ip(e){return e===0?"flat":e<0?"negative":"positive"}o(ip,"calculateInputDirection");function b5(e){return me(e,(t,n)=>({deviceKey:t,deviceName:n.deviceName,deviceType:n.deviceType}))}o(b5,"mapToSimpleDevicesMap");const sp={[$e.Gamepad1]:$e.Gamepad1,[$e.Gamepad2]:$e.Gamepad2,[$e.Gamepad3]:$e.Gamepad3,[$e.Gamepad4]:$e.Gamepad4},xi=new Q0({name:"read raw input"},({state:e,timeSinceLastUpdate:t})=>{const n=e.deviceHandler.readAllDevices(),r=hu(n,(s,a)=>{const u=a,l=e.gamepadKeyMap&&w.hasKey(e.gamepadKeyMap,s)?e.gamepadKeyMap[s]:s,c={};return Object.values(u.currentInputs).forEach(d=>{const f=ip(d.inputValue),p=e.rawInputs?.[s]?.[d.inputName],g=p?.direction===f?{milliseconds:Math.round(p.duration.milliseconds+t.milliseconds)}:{milliseconds:0},y=Vs(s)?y5({layouts:e.gamepadLayouts||np,gamepad:{deviceName:u.deviceName},gamepadModelMap:e.gamepadModelMap||Ku}):void 0,v=Vs(s)?Hu({gamepad:{deviceName:u.deviceName},gamepadBrandMap:e.gamepadBrandMap,gamepadModelMap:e.gamepadModelMap}):void 0,$=y?.inputMappings[d.inputName],E={mapped:{deviceKey:l,deviceName:v?.gamepadModel||u.deviceName,gamepadBrand:v?.gamepadBrand,inputName:$||d.inputName},deviceKey:s,deviceName:u.deviceName,deviceType:u.deviceType,direction:f,duration:g,inputName:d.inputName,inputValue:d.inputValue};$&&(c[$]=E),c[d.inputName]=E}),{key:l,value:c}}),i=b5(n);e.rawInputs=r,e.currentInputDevices=i});ut({deviceKey:fi(ee),inputName:"",mappedInputName:He(se(void 0,"")),direction:fi(Z)});function op(){return Zu}o(op,"createTypedReadBindingsStage");const Zu=new Q0({name:"read bindings"},({state:e,timeSinceLastUpdate:t})=>{if(!e.playersBindings||!Object.keys(e.playersBindings).length||!e.rawInputs||!Object.keys(e.rawInputs).length){e.playersActiveBindings={};return}const n=me(e.playersBindings,(r,i)=>v5({bindingsMap:i,activeBindingsMap:e.playersActiveBindings?.[r],rawInputs:e.rawInputs,timeSinceLastUpdate:t}));e.playersActiveBindings=n});function v5({bindingsMap:e,activeBindingsMap:t,rawInputs:n,timeSinceLastUpdate:r}){return Qt(e).reduce((i,[s,a])=>{const u=qn(a,l=>{const c=n?.[l.deviceKey]?.[l.inputName];if(c?.direction===l.direction)return c},w.isTruthy);if(u.length){const l=u.reduce((g,y)=>g+y.inputValue,0),c=t?.[s],d=c?.holdDuration,f=d?d.milliseconds+r.milliseconds:0,p={holdDuration:{milliseconds:Math.round(f)},value:l,actCount:c?.actCount||0,lastActDuration:c?.lastActDuration||{milliseconds:0}};i[s]=p}return i},{})}o(v5,"readPlayerBindings");const D5={1:{jump:[{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-Space"},{deviceKey:$e.Gamepad1,direction:Z.Positive,inputName:"X"},{deviceKey:$e.Gamepad1,direction:Z.Positive,inputName:"A"}],left:[{deviceKey:$e.Gamepad1,direction:Z.Positive,inputName:"d-pad-left"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyA"},{deviceKey:$e.Gamepad1,direction:Z.Positive,inputName:"button-KeyA"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyJ"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-ArrowLeft"}],right:[{deviceKey:$e.Gamepad1,direction:Z.Positive,inputName:"d-pad-right"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyD"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyL"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-ArrowRight"}]}},rf=Le()({tagName:"vir-read-bindings-stage-debug",styles:P`
        :host {
            display: flex;
            gap: 16px;
            flex-direction: column;
        }

        h2 {
            margin: 4px;
        }

        .no-bindings {
            opacity: 0.3;
            font-weight: bold;
        }
    `,state(){return{deviceHandler:void 0,pipeline:void 0,activeBindings:{}}},init({state:e,updateState:t,inputs:n}){const r=e.deviceHandler||n.inputDeviceHandler||new Tr;e.deviceHandler||t({deviceHandler:r});const i=e.pipeline||new ki([xi,Zu],{deviceHandler:r,playersBindings:n.bindingsMap||D5},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{playersActiveBindings:!0},s=>{t({activeBindings:s||{}})})},cleanup({inputs:e,state:t,updateState:n}){e.inputDeviceHandler||t.deviceHandler?.destroy(),t.pipeline?.destroy(),n({deviceHandler:void 0,pipeline:void 0})},render({state:e}){if(!e.deviceHandler||!e.pipeline)return Y;const t=Object.entries(e.activeBindings).map(([i,s])=>D`
                    <section class="binding">
                        <h3>${i}</h3>
                        <pre>${JSON.stringify(s,null,4)}</pre>
                    </section>
                `),n=!t.length,r=e.pipeline.currentState.playersBindings||{};return D`
            <h2>Bindings</h2>
            <${Zd.assign({playersBindingsMap:r})}></${Zd}>
            <h2>Active Bindings</h2>
            ${n?D`
                      <p class="no-bindings">No inputs</p>
                  `:t}
        `}}),sf=Le()({tagName:"vir-read-raw-input-stage-debug",styles:P`
        :host {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .device {
            min-width: 500px;
        }

        .no-inputs {
            opacity: 0.3;
            font-weight: bold;
        }
    `,state(){return{deviceHandler:void 0,pipeline:void 0,rawInputs:{}}},init({state:e,updateState:t,inputs:n}){const r=e.deviceHandler||n.inputDeviceHandler||new Tr;e.deviceHandler||t({deviceHandler:r});const i=e.pipeline||new ki([xi],{deviceHandler:r},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{rawInputs:!0},s=>{t({rawInputs:s||{}})})},cleanup({inputs:e,state:t,updateState:n}){e.inputDeviceHandler||t.deviceHandler?.destroy(),t.pipeline?.destroy(),n({deviceHandler:void 0,pipeline:void 0})},render({state:e}){return!e.deviceHandler||!e.pipeline?Y:Object.entries(e.rawInputs).map(([t,n])=>{const i=Object.keys(n).length===0?D`
                          <p class="no-inputs">No inputs</p>
                      `:D`
                          <pre>${JSON.stringify(n,null,4)}</pre>
                      `;return D`
                    <section class="device">
                        <b>${t}</b>
                        ${i}
                    </section>
                `})}}),ap={[he.Gamepad]:"🎮",[he.Keyboard]:"⌨️",[he.Mouse]:"🖱"},E5={[Z.Flat]:"",[Z.Negative]:"➖",[Z.Positive]:"➕"};var Ye=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Enter="enter",e.Exit="exit",e.SectionNext="section-next",e.SectionPrevious="section-previous",e))(Ye||{});class Us extends zu{static{o(this,"MenuNavController")}constructor(t,n,r={}){super(t),this.virLine=n,this.options={...this.options,...r},this.listenToVirLineState()}lastUnlisten;paused=!1;options={repeatThreshold:{milliseconds:500},repeatInterval:{milliseconds:60},allowWrapping:!0};pause(){this.paused=!0}resume(){this.paused=!1}destroy(){this.lastUnlisten?.(),super.destroy()}listenToVirLineState(){this.lastUnlisten&&this.lastUnlisten(),this.lastUnlisten=this.virLine.listenToState(!1,{playersActiveBindings:!0},t=>{if(!t||this.paused)return;const n=St(this.options.repeatThreshold,{milliseconds:!0}).milliseconds,r=St(this.options.repeatInterval,{milliseconds:!0}).milliseconds,i={};if(Vn(t).forEach(l=>{Qt(l).forEach(([c,d])=>{d.holdDuration.milliseconds>=n?d.holdDuration.milliseconds-d.lastActDuration.milliseconds>r&&(i[c]=!0,d.actCount++,d.lastActDuration=d.holdDuration):!d.holdDuration.milliseconds&&!d.actCount&&(i[c]=!0,d.actCount++)})}),i.enter){this.enterInto();return}if(i.exit){this.exitOutOf();return}const s=i["section-next"]&&!i["section-previous"]?Ee.Right:!i["section-next"]&&i["section-previous"]?Ee.Left:void 0;if(s){this.navigatePibling({allowWrapping:this.options.allowWrapping,direction:s});return}const a=i.up&&!i.down?Ee.Up:!i.up&&i.down?Ee.Down:void 0,u=i.right&&!i.left?Ee.Right:!i.right&&i.left?Ee.Left:void 0;a&&this.navigate({allowWrapping:this.options.allowWrapping,direction:a}),u&&this.navigate({allowWrapping:this.options.allowWrapping,direction:u})})}}const A5=_w(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),On=Le()({tagName:"vir-glow-pulse",styles:P`
        :host {
            display: inline-flex;
        }
    `,state(){return{lastTimestamp:0,colorIndex:0}},render({inputs:e,host:t,state:n,updateState:r}){const i=e.glowColors&&e.glowColors.length?e.glowColors:A5,s=e.animationDuration?St(e.animationDuration,{milliseconds:!0}):{milliseconds:350},a=n.lastTimestamp+s.milliseconds/2,u=e.pulse&&e.pulse.timestamp>a?e.pulse:void 0;u&&r({colorIndex:Qr(n.colorIndex+1,{min:0,max:i.length-1})});const l=i[n.colorIndex];if(!l)throw new Error("Exceeded colors array size somehow.");return u&&u.timestamp!==n.lastTimestamp&&(t.getAnimations().forEach(c=>c.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l})`},{filter:`drop-shadow(0 0 0 ${l}) drop-shadow(0 0 0 ${l})`}],{duration:s.milliseconds,iterations:1}),r({lastTimestamp:u.timestamp})),D`
            <slot></slot>
        `}}),Ws=Le()({tagName:"vir-device-chip",hostClasses:{"vir-device-chip-plain":o(({inputs:e})=>!!e.plainStyles,"vir-device-chip-plain")},styles:o(({hostClasses:e})=>P`
        :host {
            height: 80px;
            box-sizing: border-box;
            border: 1px solid #eee;
            border-radius: 16px;
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .device-emoji {
            font-size: 2em;
        }

        ${e["vir-device-chip-plain"].selector} {
            height: unset;
            box-sizing: border-box;
            border: none;
            border-radius: unset;
            padding: 0;
        }
    `,"styles"),render({inputs:e,host:t}){const n=K0[e.deviceKey],r=ap[n],i=Number(e.deviceKey)+1,s=n===he.Gamepad&&!e.hideGamepadPort&&!e.plainStyles?D`
                      <span>${i}</span>
                  `:Y,a=n===he.Gamepad?`gamepad ${i}`:n;t.getAttribute("title")!==a&&t.setAttribute("title",a);const u=D`
            <span class="device-emoji">${r}</span>
        `;return e.lastInputTime?D`
                <${On.assign({pulse:e.lastInputTime,glowColors:e.activityColors})}>
                    ${u}
                </${On}>
                ${s}
            `:D`
                ${u} ${s}
            `}});function up(e){return e.deviceKey===ee.Mouse&&(e.inputName==="axe-x"||e.inputName==="axe-y")}o(up,"isMouseMovement");const ca=Le()({tagName:"vir-device-list",styles:P`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }
    `,state(){return{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0}},init({inputs:e,state:t,updateState:n}){const r=e.inputDeviceHandler||new Tr({startLoopImmediately:!0});t.deviceHandler||n({deviceHandler:r});function i(){return me(r.getLastPollResults(),a=>t.deviceTimestamps[a]||{timestamp:0})}o(i,"readDeviceTimestamps");const s=e.disableGlowPulses?void 0:r.listen(Do,a=>{const u=i();a.detail.inputs.newInputs.forEach(l=>{!e.showMouseMovement&&up(l)||(u[l.deviceKey]={timestamp:Date.now()})}),n({deviceTimestamps:u})});n({cleanup:s,deviceTimestamps:i()})},cleanup({inputs:e,state:t,updateState:n}){t.cleanup?.(),e.inputDeviceHandler||t.deviceHandler?.destroy(),n({cleanup:void 0,deviceHandler:void 0})},render({state:e}){return Qt(e.deviceTimestamps).map(([n,r])=>D`
                    <${Ws.assign({deviceKey:n,lastInputTime:r})}></${Ws}>
                `)}}),Qa=52,_r=Le()({tagName:"vir-simple-player-assign-bindings",styles:P`
        :host {
            display: flex;
            flex-direction: column;
        }

        th {
            text-align: right;
            height: ${Qa}px;
            padding: 8px 0;
            padding-right: 16px;
        }

        .bindings {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            border: 1px solid #eee;
            min-height: ${Qa+18}px;
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            position: relative;
        }

        td:last-of-type {
            width: 100%;
        }

        table {
            max-width: 100%;
        }

        .add {
            margin-right: 32px;
        }

        .fade .fadable {
            pointer-events: none;
            opacity: 0.3;
        }

        .listening-overlay {
            z-index: 100;
            opacity: 1;
            position: absolute;
            height: 100%;
            width: 100%;
            top: -1px;
            left: -1px;
            background-color: rgba(249, 252, 255, 0.9);
            border: 2px solid #ccc;
            border-radius: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p.empty-bindings {
            ${Mi};
        }
        .empty-bindings {
            display: flex;
            justify-content: center;
        }
    `,events:{inputListen:Pe(),bindingsUpdate:Pe()},state(){return{listeningForBinding:void 0}},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){const s=e.bindingNames.map(a=>{const u=e.playersBindings?.[`${e.playerPosition}`]||{},l=u[a]||[],c=l.length?l.map((p,g)=>D`
                          <${da.assign({...p})}
                              ${J(da.events.removeBinding,()=>{const y={...u,[a]:Kh(l,[g])};t(new n.bindingsUpdate(y))})}
                          ></${da}>
                      `):D`
                      <p class="empty-bindings">Empty</p>
                  `,d=r.listeningForBinding===a,f=d&&e.listeningToInput?D`
                          <div class="listening-overlay"><span>Listening for input...</span></div>
                      `:Y;return D`
                <tr
                    class=${zt({fade:e.listeningToInput})}
                >
                    <td class="fadable">
                        <${Pd.assign({text:"+",disabled:e.listeningToInput})}
                            class="add"
                            ${J("click",()=>{t(new n.inputListen(!0)),i({listeningForBinding:a}),e.deviceHandler.listen(Do,(p,g)=>{const y=p.detail.inputs.newInputs[0];if(!y)return;const v={deviceKey:y.deviceKey,direction:ip(y.inputValue),inputName:y.inputName};if(!e.allowMouseMovement&&up(y))return;if(!l.some(k=>w.jsonEquals(v,k))){const k={...u,[a]:[...l,v]};t(new n.bindingsUpdate(k))}g(),t(new n.inputListen(!1)),i({listeningForBinding:void 0})})})}
                        ></${Pd}>
                    </td>
                    <th class=${zt({fadable:!d})}>
                        ${a}:
                    </th>
                    <td class=${zt({fadable:!d})}>
                        <div
                            class="bindings ${zt({"empty-bindings":!l.length})}"
                        >
                            ${f}${c}
                        </div>
                    </td>
                </tr>
            `});return D`
            <table><tbody>${s}</tbody></table>
        `}}),da=Le()({tagName:"vir-binding-chip",styles:P`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 8px;
            font-size: 0.8em;
            height: ${Qa}px;
            box-sizing: border-box;
            position: relative;
        }

        .remove-overlay {
            position: absolute;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            border: 3px solid #aa0000;
            background-color: rgba(255, 0, 0, 0.6);
            border-radius: inherit;
            display: flex;
            -webkit-text-stroke: 1px black;
            color: white;
            font-weight: bold;
            justify-content: center;
            align-items: flex-end;
            font-weight: bold;
            padding-bottom: 4px;
            opacity: 0;
            cursor: pointer;
            font-size: 1.9em;
            ${Ht};
            transition: opacity
                ${gt["vira-interaction-animation-duration"].value};
        }
        :host(:hover) .remove-overlay {
            opacity: 1;
        }
    `,events:{removeBinding:Pe()},render({inputs:e,dispatch:t,events:n}){const r=K0[e.deviceKey],i=ap[r],s=Number(e.deviceKey)+1,a=r===he.Gamepad?D`
                      <span>${s}</span>
                  `:Y,u=ME(e.inputName)===$r.Axe?D`
                      <span>${E5[e.direction]}</span>
                  `:Y,l=r===he.Gamepad?`controller in slot ${s}`:e.deviceKey;return D`
            <div
                class="remove-overlay"
                ${J("click",()=>{t(new n.removeBinding)})}
            >
                <span>×</span>
            </div>
            <div>${e.inputName} ${u}</div>
            <div title=${l}>${i} ${a}</div>
        `}}),es=Le()({tagName:"vir-simple-assign-bindings",styles:P`
        :host {
            display: flex;
            gap: 32px;
        }

        ${_r} {
            min-width: 300px;
        }

        .player-assignment {
            flex-grow: 1;
        }
    `,events:{playersBindingsUpdate:Pe()},state(){return{deviceHandler:void 0,cleanup:void 0,currentDevices:{},listeningToInput:!1}},init({inputs:e,state:t,updateState:n}){const r=t.deviceHandler||e.inputDeviceHandler||new Tr({startLoopImmediately:!0,...e.globalDeadZone?{globalDeadZone:e.globalDeadZone}:{},...e.gamepadDeadZoneSettings?{gamepadDeadZoneSettings:e.gamepadDeadZoneSettings}:{}});t.deviceHandler||n({deviceHandler:r});function i(){const u=me(r.readAllDevices(),(l,c)=>({deviceKey:l,deviceName:c.deviceName,deviceType:c.deviceType}));n({currentDevices:u})}o(i,"updateDevices");const s=r.listen(Z0,i),a=r.listen(H0,i);n({cleanup(){s(),a()}}),i()},cleanup({inputs:e,state:t,updateState:n}){e.inputDeviceHandler||t.deviceHandler?.destroy(),t.cleanup?.(),n({deviceHandler:void 0,cleanup:void 0})},render({state:e,inputs:t,updateState:n,dispatch:r,events:i}){const s=e.deviceHandler;if(s){if(t.supportedPlayerCount<1)throw new Error("Cannot support < 1 players.")}else return Y;const a=t.supportedPlayerCount>1;return new Array(t.supportedPlayerCount).fill(0).map((u,l)=>{const c=l+1,d=a?D`
                      <h3>Player ${c}</h3>
                  `:Y;return D`
                <section class="player-assignment">
                    ${d}
                    <${_r.assign({bindingNames:t.bindingNames,playerPosition:c,playersBindings:t.playersBindings,listeningToInput:e.listeningToInput,deviceHandler:s,allowMouseMovement:t.allowMouseMovement||!1})}
                        ${J(_r.events.inputListen,f=>{n({listeningToInput:f.detail})})}
                        ${J(_r.events.bindingsUpdate,f=>{const p={...t.playersBindings,[String(c)]:f.detail};r(new i.playersBindingsUpdate(p))})}
                    ></${_r}>
                </section>
            `})}}),ts=Le()({tagName:"vir-simple-assign-controller-slot",styles:P`
        :host {
            display: flex;
        }

        .devices-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

        .device-button {
            ${qt};

            display: flex;
            gap: 8px;
            border-radius: 16px;
            padding: 16px;
            align-items: center;
            border: 1px solid #eee;
            cursor: pointer;
        }

        p {
            ${P0};
        }
    `,events:{deviceMapChange:Pe()},state(){return{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0,menuNavController:void 0,internalVirLine:void 0}},init({inputs:e,state:t,updateState:n,host:r,dispatch:i,events:s}){const a=e.inputDeviceHandler||new Tr({startLoopImmediately:!0});t.deviceHandler||n({deviceHandler:a});function u(){return me(a.getLastPollResults(),d=>t.deviceTimestamps[d]||{timestamp:0})}o(u,"readDeviceTimestamps");const l=e.disableGlowPulses?void 0:a.listen(Do,d=>{const f=u();d.detail.inputs.newInputs.forEach(p=>{f[p.deviceKey]={timestamp:Date.now()}}),n({deviceTimestamps:f})});n({cleanup:l,deviceTimestamps:u()});const c=e.virLine||t.internalVirLine||new ki([xi,op()],{deviceHandler:a,playersBindings:{1:{[Ye.Up]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyW"}],[Ye.Down]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyS"}],[Ye.Right]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyD"}],[Ye.Enter]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-Space"},{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-Enter"},{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-NumpadEnter"}],[Ye.Left]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyA"}],[Ye.SectionNext]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyE"}],[Ye.SectionPrevious]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyQ"}]}}},{init:{startUpdateLoopImmediately:!0}});if(!t.menuNavController){const d=new Us(r,c);d.listen(V0,async()=>{const f=af(d);f&&await of(f.originalKey)}),d.listen(_0,async({detail:f})=>{const p=af(d);if(!p)return;const{mappedKey:g,originalKey:y}=p,v=f.direction===Ee.Up||f.direction===Ee.Left,$=Qr(Number(g)+(v?-1:1),{min:0,max:3}),E=Kh(Qt(e.gamepadKeyMap||{...sp}),[Number(y)]).sort((B,R)=>B[1].localeCompare(R[1]));E.splice($,0,[y,g]);const k=Hh(E,([B],R)=>({key:B,value:qh.isEnumValue(String(R),$e)}));i(new s.deviceMapChange(k)),await Is(2),zh.instanceOf(r.shadowRoot.querySelector(`[data-original-key="${y}"]`),HTMLElement)?.focus()}),n({menuNavController:new Us(r,c)})}},cleanup({inputs:e,state:t,updateState:n}){t.cleanup?.(),e.inputDeviceHandler||t.deviceHandler?.destroy(),t.menuNavController?.destroy(),n({cleanup:void 0,deviceHandler:void 0,menuNavController:void 0})},render({state:e,inputs:t}){const n=qn(xt($e),s=>({originalKey:s,mappedKey:t.gamepadKeyMap?.[s]||s}),({originalKey:s})=>!!e.deviceTimestamps[s]).sort((s,a)=>s.mappedKey.localeCompare(a.mappedKey)),r=Gu(),i=n.map(({mappedKey:s,originalKey:a})=>{const u=e.deviceTimestamps[a],l=r[a];if(!u||!l)return Y;const c=Hu({gamepad:{deviceName:l.id},gamepadBrandMap:t.gamepadBrandMap,gamepadModelMap:t.gamepadModelMap}),d=(c.gamepadModel&&w.isKeyOf(c.gamepadModel,ef)?ef[c.gamepadModel]:"")+` (${a})`;return D`
                <button
                    class="device-button"
                    data-original-key=${a}
                    data-mapped-key=${s}
                    ${J("mousedown",async()=>{await of(a)})}
                    ${Dt()}
                >
                    <p>${s}</p>
                    <${Ws.assign({deviceKey:a,lastInputTime:u,plainStyles:!0})}></${Ws}>

                    <p>${d}</p>
                </button>
            `});return D`
            <div class="devices-wrapper" ${Dt(Wn)}>${i}</div>
        `}});async function of(e){await Gu()[e]?.vibrationActuator.playEffect("dual-rumble",{duration:300,strongMagnitude:.5,weakMagnitude:.5})}o(of,"playRumble");function af(e){const t=e.getCurrentlyFocused()?.node.element;if(!t)return;const n=t.getAttribute("data-original-key");Jt.isEnumValue(n,$e,"Failed to find original device key on nav element.");const r=t.getAttribute("data-mapped-key");return Jt.isEnumValue(r,$e,"Failed to find mapped device key on nav element."),{originalKey:n,mappedKey:r}}o(af,"getFocusedKeys");const Yu=Nt({parent:void 0,title:"Stages"}),zn=Nt({parent:void 0,title:"Elements"}),uf=go({tagName:"vir-menu-nav-test",styles:P`
        :host {
            display: flex;
            gap: 32px;
        }

        .row {
            display: flex;
            gap: 8px;
        }

        .row > * {
            flex-grow: 1;
        }

        section {
            display: flex;
            gap: 8px;
            flex-direction: column;
            width: 400px;
        }

        .cell {
            border: 2px solid dodgerblue;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `,state(){return{menuNavController:void 0,virLine:void 0,deviceHandler:new Tr({disableMouseMovement:!0})}},init({host:e,state:t,updateState:n}){const r=t.virLine||new ki([xi,op()],{deviceHandler:t.deviceHandler,playersBindings:{1:{[Ye.Up]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyW"}],[Ye.Down]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyS"}],[Ye.Right]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyD"}],[Ye.Left]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyA"}],[Ye.SectionNext]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyE"}],[Ye.SectionPrevious]:[{deviceKey:ee.Keyboard,direction:Z.Positive,inputName:"button-KeyQ"}]}}},{init:{startUpdateLoopImmediately:!0}});t.menuNavController||n({menuNavController:new Us(e,r)})},cleanup({state:e,updateState:t}){e.menuNavController?.destroy(),t({menuNavController:void 0})},render(){return D`
            <section ${Dt(Wn)}>
                <div class="cell" ${Dt()}>Cell</div>
                <div class="cell" ${Dt()}>Cell</div>
            </section>
            <section ${Dt(Wn)}>
                <div class="row">
                    <div class="cell" ${Dt(0,0)}>Cell</div>
                    <div class="cell" ${Dt(1,0)}>Cell</div>
                </div>
                <div class="row">
                    <div class="cell" ${Dt(0,1)}>Cell</div>
                    <div class="cell" ${Dt(1,1)}>Cell</div>
                </div>
            </section>
        `}}),C5=Nt({title:Us.name,parent:zn,defineExamples({defineExample:e}){e({title:"example",render(){return D`
                    (use wasd + qe)
                    <br />
                    <br />
                    <${uf}></${uf}>
                `}})}}),$5=Nt({parent:Yu,title:Zu.stageId.name,defineExamples({defineExample:e}){e({title:"Debugging",render(){return D`
                    <p>Using stage readBindingsStage and element VirReadBindingsStageDebug.</p>
                    <${rf}></${rf}>
                `}})}}),S5=Nt({parent:Yu,title:xi.stageId.name,defineExamples({defineExample:e}){e({title:"Debugging",render(){return D`
                    <p>Using stage readRawInputStage and element VirReadRawInputStageDebug.</p>
                    <${sf}></${sf}>
                `}})}}),M5=Nt({title:ca.tagName,parent:zn,defineExamples({defineExample:e}){e({title:"example",render(){return D`
                    <${ca}></${ca}>
                `}})}}),Ur=Le()({tagName:"vir-fps",styles:P`
        :host {
            justify-content: center;
            align-items: center;
            display: flex;
        }
    `,state(){return{cleanup:void 0,fps:0}},init({updateState:e,state:t,inputs:n}){t.cleanup||e({cleanup:n.virLine.listen(J0,r=>{e({fps:r.detail.updatesPerSecond})})})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({state:e,inputs:t}){return D`
            <span ${sr("fps-display")}>
                ${e.fps.toFixed(t.decimals||0)}
            </span>
        `}}),k5=Nt({title:Ur.tagName,parent:zn,defineExamples({defineExample:e}){const t=new ki([],{});e({title:"default",render(){return t.startUpdateLoop(),D`
                    <${Ur.assign({virLine:t})}></${Ur}>
                `}}),e({title:"2 decimals",render(){return t.startUpdateLoop(),D`
                    <${Ur.assign({virLine:t,decimals:2})}></${Ur}>
                `}})}}),ns=Le()({tagName:"vir-glow-pulse-book-wrapper",state(){return{intervalId:void 0,animation:void 0}},init({state:e,updateState:t,inputs:n}){e.intervalId==null&&t({intervalId:window.setInterval(()=>{t({animation:{timestamp:Date.now()}})},n.milliseconds)})},cleanup({state:e,updateState:t}){e.intervalId!=null&&(window.clearInterval(e.intervalId),t({intervalId:void 0}))},render({state:e,inputs:t}){return D`
            <${On.assign({pulse:e.animation,glowColors:t.colors})}>
                ⚪️
            </${On}>
        `}}),x5=Nt({parent:zn,title:On.tagName,descriptionParagraphs:["Used to give repeated emphasis to an element. In particular, this is used for showing controller activity in vir-device-list."],defineExamples({defineExample:e}){e({title:"automatic",styles:P`
                :host {
                    ${Ht};
                }
            `,render(){return D`
                    <${ns.assign({milliseconds:500})}></${ns}>
                `}}),e({title:"custom colors",styles:P`
                :host {
                    ${Ht};
                }
            `,render(){return D`
                    <${ns.assign({milliseconds:500,colors:["blue","navy","dodgerblue","skyblue","lightblue"]})}></${ns}>
                `}}),e({title:"on click",state(){return{animation:void 0}},styles:P`
                :host {
                    ${Ht};
                }
            `,render({state:t,updateState:n}){return D`
                    <${On.assign({pulse:t.animation})}
                        style=${P`
                            cursor: pointer;
                        `}
                        ${J("click",()=>{n({animation:{timestamp:Date.now()}})})}
                    >
                        ⚪️
                    </${On}>
                `}})}}),F5=Nt({parent:zn,title:es.tagName,defineExamples({defineExample:e}){e({title:"Default",styles:P`
                .size {
                    width: 1000px;
                    max-width: 100%;
                }
            `,state(){return{playersBindings:{1:{up:[{deviceKey:"0",direction:Z.Positive,inputName:"button-2"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-ArrowUp"}],down:[{deviceKey:"0",direction:Z.Positive,inputName:"axe-1"}]}}}},render({state:t,updateState:n}){return D`
                    <div class="size">
                        <${es.assign({bindingNames:["up","down","left","right","jump","pause"],supportedPlayerCount:2,playersBindings:t.playersBindings})}
                            ${J(es.events.playersBindingsUpdate,r=>{n({playersBindings:r.detail})})}
                        ></${es}>
                    </div>
                `}})}}),T5=Nt({title:ts.tagName,parent:zn,defineExamples({defineExample:e}){e({title:"example",state(){return{gamepadMap:sp}},render({updateState:t,state:n}){return D`
                    <p>
                        Press a button on a connected controller to show the list.
                        <br />
                        Use wasd to navigate the list.
                        <br />
                        Use qe to move slot assignments.
                        <br />
                        Click or press enter to rumble the selected controller.
                    </p>
                    <${ts.assign({gamepadKeyMap:n.gamepadMap})}
                        ${J(ts.events.deviceMapChange,r=>{t({gamepadMap:r.detail})})}
                    ></${ts}>
                `}})}}),N5=[Yu,$5,S5,zn,C5,M5,k5,x5,F5,T5];go({tagName:"game-vir-demo-app",render(){return D`
            <${Wd.assign({internalRouterConfig:{basePath:Uu("game-vir","book"),useInternalRouter:!0},pages:N5,themeColor:"#33ccff"})}></${Wd}>
        `}});
