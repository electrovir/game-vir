var Qm=Object.defineProperty;var o=(e,t)=>Qm(e,"name",{value:t,configurable:!0});o(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}o(r,"getFetchOpts");function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}o(n,"processPreload")},"polyfill")();var ke;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ke||(ke={}));function te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}o(te,"getObjectTypedKeys");function ep(e){return te(e).filter(t=>isNaN(Number(t)))}o(ep,"getEnumKeys");function St(e){return ep(e).map(r=>e[r])}o(St,"getEnumValues");var tp=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,rp=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,np=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,bo={Space_Separator:tp,ID_Start:rp,ID_Continue:np},we={isSpaceSeparator(e){return typeof e=="string"&&bo.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||bo.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||bo.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let ca,Oe,Wt,ls,fr,At,Ce,Ya,Zn;var ip=o(function(t,r){ca=String(t),Oe="start",Wt=[],ls=0,fr=1,At=0,Ce=void 0,Ya=void 0,Zn=void 0;do Ce=sp(),up[Oe]();while(Ce.type!=="eof");return typeof r=="function"?da({"":Zn},"",r):Zn},"parse");function da(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const s=String(i),a=da(n,s,r);a===void 0?delete n[s]:Object.defineProperty(n,s,{value:a,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const s=da(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}o(da,"internalize");let j,V,_n,Ot,z;function sp(){for(j="default",V="",_n=!1,Ot=1;;){z=Gt();const e=Hd[j]();if(e)return e}}o(sp,"lex");function Gt(){if(ca[ls])return String.fromCodePoint(ca.codePointAt(ls))}o(Gt,"peek");function E(){const e=Gt();return e===`
`?(fr++,At=0):e?At+=e.length:At++,e&&(ls+=e.length),e}o(E,"read");const Hd={default(){switch(z){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":E();return;case"/":E(),j="comment";return;case void 0:return E(),oe("eof")}if(we.isSpaceSeparator(z)){E();return}return Hd[Oe]()},comment(){switch(z){case"*":E(),j="multiLineComment";return;case"/":E(),j="singleLineComment";return}throw ae(E())},multiLineComment(){switch(z){case"*":E(),j="multiLineCommentAsterisk";return;case void 0:throw ae(E())}E()},multiLineCommentAsterisk(){switch(z){case"*":E();return;case"/":E(),j="default";return;case void 0:throw ae(E())}E(),j="multiLineComment"},singleLineComment(){switch(z){case`
`:case"\r":case"\u2028":case"\u2029":E(),j="default";return;case void 0:return E(),oe("eof")}E()},value(){switch(z){case"{":case"[":return oe("punctuator",E());case"n":return E(),br("ull"),oe("null",null);case"t":return E(),br("rue"),oe("boolean",!0);case"f":return E(),br("alse"),oe("boolean",!1);case"-":case"+":E()==="-"&&(Ot=-1),j="sign";return;case".":V=E(),j="decimalPointLeading";return;case"0":V=E(),j="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":V=E(),j="decimalInteger";return;case"I":return E(),br("nfinity"),oe("numeric",1/0);case"N":return E(),br("aN"),oe("numeric",NaN);case'"':case"'":_n=E()==='"',V="",j="string";return}throw ae(E())},identifierNameStartEscape(){if(z!=="u")throw ae(E());E();const e=fa();switch(e){case"$":case"_":break;default:if(!we.isIdStartChar(e))throw Yu();break}V+=e,j="identifierName"},identifierName(){switch(z){case"$":case"_":case"‌":case"‍":V+=E();return;case"\\":E(),j="identifierNameEscape";return}if(we.isIdContinueChar(z)){V+=E();return}return oe("identifier",V)},identifierNameEscape(){if(z!=="u")throw ae(E());E();const e=fa();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!we.isIdContinueChar(e))throw Yu();break}V+=e,j="identifierName"},sign(){switch(z){case".":V=E(),j="decimalPointLeading";return;case"0":V=E(),j="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":V=E(),j="decimalInteger";return;case"I":return E(),br("nfinity"),oe("numeric",Ot*(1/0));case"N":return E(),br("aN"),oe("numeric",NaN)}throw ae(E())},zero(){switch(z){case".":V+=E(),j="decimalPoint";return;case"e":case"E":V+=E(),j="decimalExponent";return;case"x":case"X":V+=E(),j="hexadecimal";return}return oe("numeric",Ot*0)},decimalInteger(){switch(z){case".":V+=E(),j="decimalPoint";return;case"e":case"E":V+=E(),j="decimalExponent";return}if(we.isDigit(z)){V+=E();return}return oe("numeric",Ot*Number(V))},decimalPointLeading(){if(we.isDigit(z)){V+=E(),j="decimalFraction";return}throw ae(E())},decimalPoint(){switch(z){case"e":case"E":V+=E(),j="decimalExponent";return}if(we.isDigit(z)){V+=E(),j="decimalFraction";return}return oe("numeric",Ot*Number(V))},decimalFraction(){switch(z){case"e":case"E":V+=E(),j="decimalExponent";return}if(we.isDigit(z)){V+=E();return}return oe("numeric",Ot*Number(V))},decimalExponent(){switch(z){case"+":case"-":V+=E(),j="decimalExponentSign";return}if(we.isDigit(z)){V+=E(),j="decimalExponentInteger";return}throw ae(E())},decimalExponentSign(){if(we.isDigit(z)){V+=E(),j="decimalExponentInteger";return}throw ae(E())},decimalExponentInteger(){if(we.isDigit(z)){V+=E();return}return oe("numeric",Ot*Number(V))},hexadecimal(){if(we.isHexDigit(z)){V+=E(),j="hexadecimalInteger";return}throw ae(E())},hexadecimalInteger(){if(we.isHexDigit(z)){V+=E();return}return oe("numeric",Ot*Number(V))},string(){switch(z){case"\\":E(),V+=op();return;case'"':if(_n)return E(),oe("string",V);V+=E();return;case"'":if(!_n)return E(),oe("string",V);V+=E();return;case`
`:case"\r":throw ae(E());case"\u2028":case"\u2029":lp(z);break;case void 0:throw ae(E())}V+=E()},start(){switch(z){case"{":case"[":return oe("punctuator",E())}j="value"},beforePropertyName(){switch(z){case"$":case"_":V=E(),j="identifierName";return;case"\\":E(),j="identifierNameStartEscape";return;case"}":return oe("punctuator",E());case'"':case"'":_n=E()==='"',j="string";return}if(we.isIdStartChar(z)){V+=E(),j="identifierName";return}throw ae(E())},afterPropertyName(){if(z===":")return oe("punctuator",E());throw ae(E())},beforePropertyValue(){j="value"},afterPropertyValue(){switch(z){case",":case"}":return oe("punctuator",E())}throw ae(E())},beforeArrayValue(){if(z==="]")return oe("punctuator",E());j="value"},afterArrayValue(){switch(z){case",":case"]":return oe("punctuator",E())}throw ae(E())},end(){throw ae(E())}};function oe(e,t){return{type:e,value:t,line:fr,column:At}}o(oe,"newToken");function br(e){for(const t of e){if(Gt()!==t)throw ae(E());E()}}o(br,"literal");function op(){switch(Gt()){case"b":return E(),"\b";case"f":return E(),"\f";case"n":return E(),`
`;case"r":return E(),"\r";case"t":return E(),"	";case"v":return E(),"\v";case"0":if(E(),we.isDigit(Gt()))throw ae(E());return"\0";case"x":return E(),ap();case"u":return E(),fa();case`
`:case"\u2028":case"\u2029":return E(),"";case"\r":return E(),Gt()===`
`&&E(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ae(E());case void 0:throw ae(E())}return E()}o(op,"escape");function ap(){let e="",t=Gt();if(!we.isHexDigit(t)||(e+=E(),t=Gt(),!we.isHexDigit(t)))throw ae(E());return e+=E(),String.fromCodePoint(parseInt(e,16))}o(ap,"hexEscape");function fa(){let e="",t=4;for(;t-- >0;){const r=Gt();if(!we.isHexDigit(r))throw ae(E());e+=E()}return String.fromCodePoint(parseInt(e,16))}o(fa,"unicodeEscape");const up={start(){if(Ce.type==="eof")throw Dr();Do()},beforePropertyName(){switch(Ce.type){case"identifier":case"string":Ya=Ce.value,Oe="afterPropertyName";return;case"punctuator":Fi();return;case"eof":throw Dr()}},afterPropertyName(){if(Ce.type==="eof")throw Dr();Oe="beforePropertyValue"},beforePropertyValue(){if(Ce.type==="eof")throw Dr();Do()},beforeArrayValue(){if(Ce.type==="eof")throw Dr();if(Ce.type==="punctuator"&&Ce.value==="]"){Fi();return}Do()},afterPropertyValue(){if(Ce.type==="eof")throw Dr();switch(Ce.value){case",":Oe="beforePropertyName";return;case"}":Fi()}},afterArrayValue(){if(Ce.type==="eof")throw Dr();switch(Ce.value){case",":Oe="beforeArrayValue";return;case"]":Fi()}},end(){}};function Do(){let e;switch(Ce.type){case"punctuator":switch(Ce.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Ce.value;break}if(Zn===void 0)Zn=e;else{const t=Wt[Wt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ya,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Wt.push(e),Array.isArray(e)?Oe="beforeArrayValue":Oe="beforePropertyName";else{const t=Wt[Wt.length-1];t==null?Oe="end":Array.isArray(t)?Oe="afterArrayValue":Oe="afterPropertyValue"}}o(Do,"push");function Fi(){Wt.pop();const e=Wt[Wt.length-1];e==null?Oe="end":Array.isArray(e)?Oe="afterArrayValue":Oe="afterPropertyValue"}o(Fi,"pop");function ae(e){return cs(e===void 0?`JSON5: invalid end of input at ${fr}:${At}`:`JSON5: invalid character '${Yd(e)}' at ${fr}:${At}`)}o(ae,"invalidChar");function Dr(){return cs(`JSON5: invalid end of input at ${fr}:${At}`)}o(Dr,"invalidEOF");function Yu(){return At-=5,cs(`JSON5: invalid identifier character at ${fr}:${At}`)}o(Yu,"invalidIdentifier");function lp(e){console.warn(`JSON5: '${Yd(e)}' in strings is not valid ECMAScript; consider escaping`)}o(lp,"separatorChar");function Yd(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}o(Yd,"formatChar");function cs(e){const t=new SyntaxError(e);return t.lineNumber=fr,t.columnNumber=At,t}o(cs,"syntaxError");var cp=o(function(t,r,n){const i=[];let s="",a,u,l="",c;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,c=r.quote,r=r.replacer),typeof r=="function")u=r;else if(Array.isArray(r)){a=[];for(const b of r){let $;typeof b=="string"?$=b:(typeof b=="number"||b instanceof String||b instanceof Number)&&($=String(b)),$!==void 0&&a.indexOf($)<0&&a.push($)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),l="          ".substr(0,n)):typeof n=="string"&&(l=n.substr(0,10)),d("",{"":t});function d(b,$){let A=$[b];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(b):typeof A.toJSON=="function"&&(A=A.toJSON(b))),u&&(A=u.call($,b,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?y(A):p(A)}o(d,"serializeProperty");function f(b){const $={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let x="";for(let R=0;R<b.length;R++){const G=b[R];switch(G){case"'":case'"':$[G]++,x+=G;continue;case"\0":if(we.isDigit(b[R+1])){x+="\\x00";continue}}if(A[G]){x+=A[G];continue}if(G<" "){let Pe=G.charCodeAt(0).toString(16);x+="\\x"+("00"+Pe).substring(Pe.length);continue}x+=G}const B=c||Object.keys($).reduce((R,G)=>$[R]<$[G]?R:G);return x=x.replace(new RegExp(B,"g"),A[B]),B+x+B}o(f,"quoteString");function p(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let $=s;s=s+l;let A=a||Object.keys(b),x=[];for(const R of A){const G=d(R,b);if(G!==void 0){let Pe=g(R)+":";l!==""&&(Pe+=" "),Pe+=G,x.push(Pe)}}let B;if(x.length===0)B="{}";else{let R;if(l==="")R=x.join(","),B="{"+R+"}";else{let G=`,
`+s;R=x.join(G),B=`{
`+s+R+`,
`+$+"}"}}return i.pop(),s=$,B}o(p,"serializeObject");function g(b){if(b.length===0)return f(b);const $=String.fromCodePoint(b.codePointAt(0));if(!we.isIdStartChar($))return f(b);for(let A=$.length;A<b.length;A++)if(!we.isIdContinueChar(String.fromCodePoint(b.codePointAt(A))))return f(b);return b}o(g,"serializeKey");function y(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let $=s;s=s+l;let A=[];for(let B=0;B<b.length;B++){const R=d(String(B),b);A.push(R!==void 0?R:"null")}let x;if(A.length===0)x="[]";else if(l==="")x="["+A.join(",")+"]";else{let B=`,
`+s,R=A.join(B);x=`[
`+s+R+`,
`+$+"]"}return i.pop(),s=$,x}o(y,"serializeArray")},"stringify");const dp={parse:ip,stringify:cp};var fp=dp;function m(e){try{return fp.stringify(e)}catch{return String(e)}}o(m,"stringify");const hp=[".",":",";",",","?","!"],mp=new RegExp(`[${hp.join("")}]+$`);function Ju(e){return e.replace(mp,"")}o(Ju,"removeEndingPunctuation");function He(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}o(He,"extractErrorMessage");function Us(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&Ju(n));return t.length===1?t[0]:t.length?t.map((n,i)=>i===t.length-1?n:Ju(n)).join(": "):""}o(Us,"combineErrorMessages");function Me(e){return e instanceof Error?e:new Error(He(e))}o(Me,"ensureError");function an(e,t){const r=Me(e),n=Us(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}o(an,"ensureErrorAndPrependMessage");var w;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(w||(w={}));var N;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(N||(N={}));N.ClientError,N.ServerError;w.Continue+"",N.Information,w.SwitchingProtocols+"",N.Information,w.Processing+"",N.Information,w.EarlyHints+"",N.Information,w.Ok+"",N.Success,w.Created+"",N.Success,w.Accepted+"",N.Success,w.NonAuthoritativeInformation+"",N.Success,w.NoContent+"",N.Success,w.ResetContent+"",N.Success,w.PartialContent+"",N.Success,w.MultiStatus+"",N.Success,w.AlreadyReported+"",N.Success,w.ImUsed+"",N.Success,w.MultipleChoices+"",N.Redirect,w.MovedPermanently+"",N.Redirect,w.Found+"",N.Redirect,w.SeeOther+"",N.Redirect,w.NotModified+"",N.Redirect,w.UseProxy+"",N.Redirect,w.Unused+"",N.Redirect,w.TemporaryRedirect+"",N.Redirect,w.PermanentRedirect+"",N.Redirect,w.BadRequest+"",N.ClientError,w.Unauthorized+"",N.ClientError,w.PaymentRequired+"",N.ClientError,w.Forbidden+"",N.ClientError,w.NotFound+"",N.ClientError,w.MethodNotAllowed+"",N.ClientError,w.NotAcceptable+"",N.ClientError,w.ProxyAuthenticationRequired+"",N.ClientError,w.RequestTimeout+"",N.ClientError,w.Conflict+"",N.ClientError,w.Gone+"",N.ClientError,w.LengthRequired+"",N.ClientError,w.PreconditionFailed+"",N.ClientError,w.PayloadTooLarge+"",N.ClientError,w.UriTooLong+"",N.ClientError,w.UnsupportedMediaType+"",N.ClientError,w.RangeNotSatisfiable+"",N.ClientError,w.ExpectationFailed+"",N.ClientError,w.ImATeapot+"",N.ClientError,w.MisdirectedRequest+"",N.ClientError,w.UnprocessableContent+"",N.ClientError,w.Locked+"",N.ClientError,w.FailedDependency+"",N.ClientError,w.TooEarly+"",N.ClientError,w.UpgradeRequired+"",N.ClientError,w.PreconditionRequired+"",N.ClientError,w.TooManyRequests+"",N.ClientError,w.RequestHeaderFieldsTooLarge+"",N.ClientError,w.UnavailableForLegalReasons+"",N.ClientError,w.InternalServerError+"",N.ServerError,w.NotImplemented+"",N.ServerError,w.BadGateway+"",N.ServerError,w.ServiceUnavailable+"",N.ServerError,w.GatewayTimeout+"",N.ServerError,w.HttpVersionNotSupported+"",N.ServerError,w.VariantAlsoNegotiates+"",N.ServerError,w.InsufficientStorage+"",N.ServerError,w.LoopDetected+"",N.ServerError,w.NotExtended+"",N.ServerError,w.NetworkAuthenticationRequired+"",N.ServerError;const es={[N.Information]:[w.Continue,w.SwitchingProtocols,w.Processing,w.EarlyHints],[N.Success]:[w.Ok,w.Created,w.Accepted,w.NonAuthoritativeInformation,w.NoContent,w.ResetContent,w.PartialContent,w.MultiStatus,w.AlreadyReported,w.ImUsed],[N.Redirect]:[w.MultipleChoices,w.MovedPermanently,w.Found,w.SeeOther,w.NotModified,w.UseProxy,w.Unused,w.TemporaryRedirect,w.PermanentRedirect],[N.ClientError]:[w.BadRequest,w.Unauthorized,w.PaymentRequired,w.Forbidden,w.NotFound,w.MethodNotAllowed,w.NotAcceptable,w.ProxyAuthenticationRequired,w.RequestTimeout,w.Conflict,w.Gone,w.LengthRequired,w.PreconditionFailed,w.PayloadTooLarge,w.UriTooLong,w.UnsupportedMediaType,w.RangeNotSatisfiable,w.ExpectationFailed,w.ImATeapot,w.MisdirectedRequest,w.UnprocessableContent,w.Locked,w.FailedDependency,w.TooEarly,w.UpgradeRequired,w.PreconditionRequired,w.TooManyRequests,w.RequestHeaderFieldsTooLarge,w.UnavailableForLegalReasons],[N.ServerError]:[w.InternalServerError,w.NotImplemented,w.BadGateway,w.ServiceUnavailable,w.GatewayTimeout,w.HttpVersionNotSupported,w.VariantAlsoNegotiates,w.InsufficientStorage,w.LoopDetected,w.NotExtended,w.NetworkAuthenticationRequired]};function Jd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}o(Jd,"ensureMinMax");class Ja{static{o(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(Me(n))}})}}class _r extends Error{static{o(this,"LuxonError")}}class pp extends _r{static{o(this,"InvalidDateTimeError")}constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class gp extends _r{static{o(this,"InvalidIntervalError")}constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class yp extends _r{static{o(this,"InvalidDurationError")}constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Jr extends _r{static{o(this,"ConflictingSpecificationError")}}class Xd extends _r{static{o(this,"InvalidUnitError")}constructor(t){super(`Invalid unit ${t}`)}}class xe extends _r{static{o(this,"InvalidArgumentError")}}class tr extends _r{static{o(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const F="numeric",Et="short",nt="long",ds={year:F,month:F,day:F},Qd={year:F,month:Et,day:F},wp={year:F,month:Et,day:F,weekday:Et},ef={year:F,month:nt,day:F},tf={year:F,month:nt,day:F,weekday:nt},rf={hour:F,minute:F},nf={hour:F,minute:F,second:F},sf={hour:F,minute:F,second:F,timeZoneName:Et},of={hour:F,minute:F,second:F,timeZoneName:nt},af={hour:F,minute:F,hourCycle:"h23"},uf={hour:F,minute:F,second:F,hourCycle:"h23"},lf={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:Et},cf={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:nt},df={year:F,month:F,day:F,hour:F,minute:F},ff={year:F,month:F,day:F,hour:F,minute:F,second:F},hf={year:F,month:Et,day:F,hour:F,minute:F},mf={year:F,month:Et,day:F,hour:F,minute:F,second:F},vp={year:F,month:Et,day:F,weekday:Et,hour:F,minute:F},pf={year:F,month:nt,day:F,hour:F,minute:F,timeZoneName:Et},gf={year:F,month:nt,day:F,hour:F,minute:F,second:F,timeZoneName:Et},yf={year:F,month:nt,day:F,weekday:nt,hour:F,minute:F,timeZoneName:nt},wf={year:F,month:nt,day:F,weekday:nt,hour:F,minute:F,second:F,timeZoneName:nt};class fi{static{o(this,"Zone")}get type(){throw new tr}get name(){throw new tr}get ianaName(){return this.name}get isUniversal(){throw new tr}offsetName(t,r){throw new tr}formatOffset(t,r){throw new tr}offset(t){throw new tr}equals(t){throw new tr}get isValid(){throw new tr}}let Ao=null;class Ws extends fi{static{o(this,"SystemZone")}static get instance(){return Ao===null&&(Ao=new Ws),Ao}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ff(t,r,n)}formatOffset(t,r){return Hn(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const ha=new Map;function bp(e){let t=ha.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),ha.set(e,t)),t}o(bp,"makeDTF");const Dp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Ap(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,a,u,l,c,d]=n;return[a,i,s,u,l,c,d]}o(Ap,"hackyOffset");function Ep(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:a}=r[i],u=Dp[s];s==="era"?n[u]=a:O(u)||(n[u]=parseInt(a,10))}return n}o(Ep,"partsOffset");const Eo=new Map;class Yt extends fi{static{o(this,"IANAZone")}static create(t){let r=Eo.get(t);return r===void 0&&Eo.set(t,r=new Yt(t)),r}static resetCache(){Eo.clear(),ha.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Yt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ff(t,r,n,this.name)}formatOffset(t,r){return Hn(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=bp(this.name);let[i,s,a,u,l,c,d]=n.formatToParts?Ep(n,r):Ap(n,r);u==="BC"&&(i=-Math.abs(i)+1);const p=qs({year:i,month:s,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let g=+r;const y=g%1e3;return g-=y>=0?y:1e3+y,(p-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Xu={};function Cp(e,t={}){const r=JSON.stringify([e,t]);let n=Xu[r];return n||(n=new Intl.ListFormat(e,t),Xu[r]=n),n}o(Cp,"getCachedLF");const ma=new Map;function pa(e,t={}){const r=JSON.stringify([e,t]);let n=ma.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),ma.set(r,n)),n}o(pa,"getCachedDTF");const ga=new Map;function $p(e,t={}){const r=JSON.stringify([e,t]);let n=ga.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),ga.set(r,n)),n}o($p,"getCachedINF");const ya=new Map;function kp(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=ya.get(i);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,t),ya.set(i,s)),s}o(kp,"getCachedRTF");let Vn=null;function Sp(){return Vn||(Vn=new Intl.DateTimeFormat().resolvedOptions().locale,Vn)}o(Sp,"systemLocale");const wa=new Map;function vf(e){let t=wa.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),wa.set(e,t)),t}o(vf,"getCachedIntResolvedOptions");const va=new Map;function xp(e){let t=va.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...bf,...t}),va.set(e,t)}return t}o(xp,"getCachedWeekInfo");function Fp(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=pa(e).resolvedOptions(),i=e}catch{const l=e.substring(0,r);n=pa(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:a}=n;return[i,s,a]}}o(Fp,"parseLocaleString");function Np(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}o(Np,"intlConfigString");function Mp(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}o(Mp,"mapMonths");function Tp(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}o(Tp,"mapWeekdays");function Ni(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}o(Ni,"listStuff");function Bp(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||vf(e.locale).numberingSystem==="latn"}o(Bp,"supportsFastNumbers");class Pp{static{o(this,"PolyNumberFormatter")}constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...a}=n;if(!r||Object.keys(a).length>0){const u={useGrouping:!1,...n};n.padTo>0&&(u.minimumIntegerDigits=n.padTo),this.inf=$p(t,u)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ru(t,3);return ve(r,this.padTo)}}}class Ip{static{o(this,"PolyDateFormatter")}constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),u=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&Yt.create(u).valid?(i=u,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=pa(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Lp{static{o(this,"PolyRelFormatter")}constructor(t,r,n){this.opts={style:"long",...n},!r&&Sf()&&(this.rtf=kp(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):ig(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const bf={firstDay:1,minimalDays:4,weekend:[6,7]};class ee{static{o(this,"Locale")}static fromOpts(t){return ee.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const a=t||le.defaultLocale,u=a||(s?"en-US":Sp()),l=r||le.defaultNumberingSystem,c=n||le.defaultOutputCalendar,d=Da(i)||le.defaultWeekSettings;return new ee(u,l,c,d,a)}static resetCache(){Vn=null,ma.clear(),ga.clear(),ya.clear(),wa.clear(),va.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return ee.create(t,r,n,i)}constructor(t,r,n,i,s){const[a,u,l]=Fp(t);this.locale=a,this.numberingSystem=r||u||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=Np(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Bp(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:ee.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Da(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Ni(this,t,Tf,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Mp(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return Ni(this,t,If,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Tp(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ni(this,void 0,()=>Lf,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ni(this,t,Rf,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),a=s.find(u=>u.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new Pp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Ip(t,this.intl,r)}relFormatter(t={}){return new Lp(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Cp(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||vf(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:xf()?xp(this.locale):bf}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Co=null;class _e extends fi{static{o(this,"FixedOffsetZone")}static get utcInstance(){return Co===null&&(Co=new _e(0)),Co}static instance(t){return t===0?_e.utcInstance:new _e(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new _e(zs(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Hn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Hn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Hn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Rp extends fi{static{o(this,"InvalidZone")}constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ar(e,t){if(O(e)||e===null)return t;if(e instanceof fi)return e;if(jp(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Ws.instance:r==="utc"||r==="gmt"?_e.utcInstance:_e.parseSpecifier(r)||Yt.create(e)}else return cr(e)?_e.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Rp(e)}o(ar,"normalizeZone");const Xa={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Qu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Op=Xa.hanidec.replace(/[\[|\]]/g,"").split("");function _p(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Xa.hanidec)!==-1)t+=Op.indexOf(e[r]);else for(const i in Qu){const[s,a]=Qu[i];n>=s&&n<=a&&(t+=n-s)}}return parseInt(t,10)}else return t}o(_p,"parseDigits");const ba=new Map;function Vp(){ba.clear()}o(Vp,"resetDigitRegexCache");function yt({numberingSystem:e},t=""){const r=e||"latn";let n=ba.get(r);n===void 0&&(n=new Map,ba.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${Xa[r]}${t}`),n.set(t,i)),i}o(yt,"digitRegex");let el=o(()=>Date.now(),"now"),tl="system",rl=null,nl=null,il=null,sl=60,ol,al=null;class le{static{o(this,"Settings")}static get now(){return el}static set now(t){el=t}static set defaultZone(t){tl=t}static get defaultZone(){return ar(tl,Ws.instance)}static get defaultLocale(){return rl}static set defaultLocale(t){rl=t}static get defaultNumberingSystem(){return nl}static set defaultNumberingSystem(t){nl=t}static get defaultOutputCalendar(){return il}static set defaultOutputCalendar(t){il=t}static get defaultWeekSettings(){return al}static set defaultWeekSettings(t){al=Da(t)}static get twoDigitCutoffYear(){return sl}static set twoDigitCutoffYear(t){sl=t%100}static get throwOnInvalid(){return ol}static set throwOnInvalid(t){ol=t}static resetCaches(){ee.resetCache(),Yt.resetCache(),I.resetCache(),Vp()}}class Dt{static{o(this,"Invalid")}constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Df=[0,31,59,90,120,151,181,212,243,273,304,334],Af=[0,31,60,91,121,152,182,213,244,274,305,335];function lt(e,t){return new Dt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}o(lt,"unitOutOfRange");function Qa(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}o(Qa,"dayOfWeek");function Ef(e,t,r){return r+(hi(e)?Af:Df)[t-1]}o(Ef,"computeOrdinal");function Cf(e,t){const r=hi(e)?Af:Df,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}o(Cf,"uncomputeOrdinal");function eu(e,t){return(e-t+7)%7+1}o(eu,"isoWeekdayToLocal");function fs(e,t=4,r=1){const{year:n,month:i,day:s}=e,a=Ef(n,i,s),u=eu(Qa(n,i,s),r);let l=Math.floor((a-u+14-t)/7),c;return l<1?(c=n-1,l=Qn(c,t,r)):l>Qn(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:u,...Ks(e)}}o(fs,"gregorianToWeek");function ul(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,a=eu(Qa(n,1,t),r),u=en(n);let l=i*7+s-a-7+t,c;l<1?(c=n-1,l+=en(c)):l>u?(c=n+1,l-=en(n)):c=n;const{month:d,day:f}=Cf(c,l);return{year:c,month:d,day:f,...Ks(e)}}o(ul,"weekToGregorian");function $o(e){const{year:t,month:r,day:n}=e,i=Ef(t,r,n);return{year:t,ordinal:i,...Ks(e)}}o($o,"gregorianToOrdinal");function ll(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Cf(t,r);return{year:t,month:n,day:i,...Ks(e)}}o(ll,"ordinalToGregorian");function cl(e,t){if(!O(e.localWeekday)||!O(e.localWeekNumber)||!O(e.localWeekYear)){if(!O(e.weekday)||!O(e.weekNumber)||!O(e.weekYear))throw new Jr("Cannot mix locale-based week fields with ISO-based week fields");return O(e.localWeekday)||(e.weekday=e.localWeekday),O(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),O(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}o(cl,"usesLocalWeekValues");function Up(e,t=4,r=1){const n=js(e.weekYear),i=ct(e.weekNumber,1,Qn(e.weekYear,t,r)),s=ct(e.weekday,1,7);return n?i?s?!1:lt("weekday",e.weekday):lt("week",e.weekNumber):lt("weekYear",e.weekYear)}o(Up,"hasInvalidWeekData");function Wp(e){const t=js(e.year),r=ct(e.ordinal,1,en(e.year));return t?r?!1:lt("ordinal",e.ordinal):lt("year",e.year)}o(Wp,"hasInvalidOrdinalData");function $f(e){const t=js(e.year),r=ct(e.month,1,12),n=ct(e.day,1,hs(e.year,e.month));return t?r?n?!1:lt("day",e.day):lt("month",e.month):lt("year",e.year)}o($f,"hasInvalidGregorianData");function kf(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=ct(t,0,23)||t===24&&r===0&&n===0&&i===0,a=ct(r,0,59),u=ct(n,0,59),l=ct(i,0,999);return s?a?u?l?!1:lt("millisecond",i):lt("second",n):lt("minute",r):lt("hour",t)}o(kf,"hasInvalidTimeData");function O(e){return typeof e>"u"}o(O,"isUndefined");function cr(e){return typeof e=="number"}o(cr,"isNumber");function js(e){return typeof e=="number"&&e%1===0}o(js,"isInteger");function jp(e){return typeof e=="string"}o(jp,"isString$1");function qp(e){return Object.prototype.toString.call(e)==="[object Date]"}o(qp,"isDate$1");function Sf(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}o(Sf,"hasRelative");function xf(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}o(xf,"hasLocaleWeekInfo");function zp(e){return Array.isArray(e)?e:[e]}o(zp,"maybeArray");function dl(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}o(dl,"bestBy");function Kp(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}o(Kp,"pick");function un(e,t){return Object.prototype.hasOwnProperty.call(e,t)}o(un,"hasOwnProperty");function Da(e){if(e==null)return null;if(typeof e!="object")throw new xe("Week settings must be an object");if(!ct(e.firstDay,1,7)||!ct(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!ct(t,1,7)))throw new xe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}o(Da,"validateWeekSettings");function ct(e,t,r){return js(e)&&e>=t&&e<=r}o(ct,"integerBetween");function Gp(e,t){return e-t*Math.floor(e/t)}o(Gp,"floorMod");function ve(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}o(ve,"padStart");function sr(e){if(!(O(e)||e===null||e===""))return parseInt(e,10)}o(sr,"parseInteger");function Ar(e){if(!(O(e)||e===null||e===""))return parseFloat(e)}o(Ar,"parseFloating");function tu(e){if(!(O(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}o(tu,"parseMillis");function ru(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}o(ru,"roundTo");function hi(e){return e%4===0&&(e%100!==0||e%400===0)}o(hi,"isLeapYear");function en(e){return hi(e)?366:365}o(en,"daysInYear");function hs(e,t){const r=Gp(t-1,12)+1,n=e+(t-r)/12;return r===2?hi(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}o(hs,"daysInMonth");function qs(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}o(qs,"objToLocalTS");function fl(e,t,r){return-eu(Qa(e,1,t),r)+t-1}o(fl,"firstWeekOffset");function Qn(e,t=4,r=1){const n=fl(e,t,r),i=fl(e+1,t,r);return(en(e)-n+i)/7}o(Qn,"weeksInWeekYear");function Aa(e){return e>99?e:e>le.twoDigitCutoffYear?1900+e:2e3+e}o(Aa,"untruncateYear");function Ff(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const a={timeZoneName:t,...s},u=new Intl.DateTimeFormat(r,a).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return u?u.value:null}o(Ff,"parseZoneInfo");function zs(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}o(zs,"signedOffset");function Nf(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new xe(`Invalid unit value ${e}`);return t}o(Nf,"asNumber");function ms(e,t){const r={};for(const n in e)if(un(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Nf(i)}return r}o(ms,"normalizeObject");function Hn(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ve(r,2)}:${ve(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${ve(r,2)}${ve(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}o(Hn,"formatOffset");function Ks(e){return Kp(e,["hour","minute","second","millisecond"])}o(Ks,"timeObject");const Zp=["January","February","March","April","May","June","July","August","September","October","November","December"],Mf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Hp=["J","F","M","A","M","J","J","A","S","O","N","D"];function Tf(e){switch(e){case"narrow":return[...Hp];case"short":return[...Mf];case"long":return[...Zp];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}o(Tf,"months");const Bf=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Pf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Yp=["M","T","W","T","F","S","S"];function If(e){switch(e){case"narrow":return[...Yp];case"short":return[...Pf];case"long":return[...Bf];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}o(If,"weekdays");const Lf=["AM","PM"],Jp=["Before Christ","Anno Domini"],Xp=["BC","AD"],Qp=["B","A"];function Rf(e){switch(e){case"narrow":return[...Qp];case"short":return[...Xp];case"long":return[...Jp];default:return null}}o(Rf,"eras");function eg(e){return Lf[e.hour<12?0:1]}o(eg,"meridiemForDateTime");function tg(e,t){return If(t)[e.weekday-1]}o(tg,"weekdayForDateTime");function rg(e,t){return Tf(t)[e.month-1]}o(rg,"monthForDateTime");function ng(e,t){return Rf(t)[e.year<0?0:1]}o(ng,"eraForDateTime");function ig(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const a=Object.is(t,-0)||t<0,u=Math.abs(t),l=u===1,c=i[e],d=n?l?c[1]:c[2]||c[1]:l?i[e][0]:e;return a?`${u} ${d} ago`:`in ${u} ${d}`}o(ig,"formatRelativeTime");function hl(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}o(hl,"stringifyTokens");const sg={D:ds,DD:Qd,DDD:ef,DDDD:tf,t:rf,tt:nf,ttt:sf,tttt:of,T:af,TT:uf,TTT:lf,TTTT:cf,f:df,ff:hf,fff:pf,ffff:yf,F:ff,FF:mf,FFF:gf,FFFF:wf};class Ne{static{o(this,"Formatter")}static create(t,r={}){return new Ne(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let a=0;a<t.length;a++){const u=t.charAt(a);u==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||u===r?n+=u:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=u,r=u)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return sg[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return ve(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=o((g,y)=>this.loc.extract(t,g,y),"string"),a=o(g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"","formatOffset"),u=o(()=>n?eg(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),l=o((g,y)=>n?rg(t,g):s(y?{month:g}:{month:g,day:"numeric"},"month"),"month"),c=o((g,y)=>n?tg(t,g):s(y?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),"weekday"),d=o(g=>{const y=Ne.macroTokenToFormatOpts(g);return y?this.formatWithSystemDefault(t,y):g},"maybeMacro"),f=o(g=>n?ng(t,g):s({era:g},"era"),"era"),p=o(g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return u();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}},"tokenToString");return hl(Ne.parseFormat(r),p)}formatDurationFromString(t,r){const n=o(l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},"tokenToField"),i=o(l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},"tokenToString"),s=Ne.parseFormat(r),a=s.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),u=t.shiftTo(...a.map(n).filter(l=>l));return hl(s,i(u))}}const Of=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function An(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}o(An,"combineRegexes");function En(...e){return t=>e.reduce(([r,n,i],s)=>{const[a,u,l]=s(t,i);return[{...r,...a},u||n,l]},[{},null,1]).slice(0,2)}o(En,"combineExtractors");function Cn(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}o(Cn,"parse$1");function _f(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=sr(t[r+i]);return[n,null,r+i]}}o(_f,"simpleParse");const Vf=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,og=`(?:${Vf.source}?(?:\\[(${Of.source})\\])?)?`,nu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Uf=RegExp(`${nu.source}${og}`),iu=RegExp(`(?:T${Uf.source})?`),ag=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,ug=/(\d{4})-?W(\d\d)(?:-?(\d))?/,lg=/(\d{4})-?(\d{3})/,cg=_f("weekYear","weekNumber","weekDay"),dg=_f("year","ordinal"),fg=/(\d{4})-(\d\d)-(\d\d)/,Wf=RegExp(`${nu.source} ?(?:${Vf.source}|(${Of.source}))?`),hg=RegExp(`(?: ${Wf.source})?`);function tn(e,t,r){const n=e[t];return O(n)?r:sr(n)}o(tn,"int");function mg(e,t){return[{year:tn(e,t),month:tn(e,t+1,1),day:tn(e,t+2,1)},null,t+3]}o(mg,"extractISOYmd");function $n(e,t){return[{hours:tn(e,t,0),minutes:tn(e,t+1,0),seconds:tn(e,t+2,0),milliseconds:tu(e[t+3])},null,t+4]}o($n,"extractISOTime");function mi(e,t){const r=!e[t]&&!e[t+1],n=zs(e[t+1],e[t+2]),i=r?null:_e.instance(n);return[{},i,t+3]}o(mi,"extractISOOffset");function pi(e,t){const r=e[t]?Yt.create(e[t]):null;return[{},r,t+1]}o(pi,"extractIANAZone");const pg=RegExp(`^T?${nu.source}$`),gg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function yg(e){const[t,r,n,i,s,a,u,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",p=o((g,y=!1)=>g!==void 0&&(y||g&&d)?-g:g,"maybeNegate");return[{years:p(Ar(r)),months:p(Ar(n)),weeks:p(Ar(i)),days:p(Ar(s)),hours:p(Ar(a)),minutes:p(Ar(u)),seconds:p(Ar(l),l==="-0"),milliseconds:p(tu(c),f)}]}o(yg,"extractISODuration");const wg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function su(e,t,r,n,i,s,a){const u={year:t.length===2?Aa(sr(t)):sr(t),month:Mf.indexOf(r)+1,day:sr(n),hour:sr(i),minute:sr(s)};return a&&(u.second=sr(a)),e&&(u.weekday=e.length>3?Bf.indexOf(e)+1:Pf.indexOf(e)+1),u}o(su,"fromStrings");const vg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function bg(e){const[,t,r,n,i,s,a,u,l,c,d,f]=e,p=su(t,i,n,r,s,a,u);let g;return l?g=wg[l]:c?g=0:g=zs(d,f),[p,new _e(g)]}o(bg,"extractRFC2822");function Dg(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}o(Dg,"preprocessRFC2822");const Ag=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Eg=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Cg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ml(e){const[,t,r,n,i,s,a,u]=e;return[su(t,i,n,r,s,a,u),_e.utcInstance]}o(ml,"extractRFC1123Or850");function $g(e){const[,t,r,n,i,s,a,u]=e;return[su(t,u,r,n,i,s,a),_e.utcInstance]}o($g,"extractASCII");const kg=An(ag,iu),Sg=An(ug,iu),xg=An(lg,iu),Fg=An(Uf),jf=En(mg,$n,mi,pi),Ng=En(cg,$n,mi,pi),Mg=En(dg,$n,mi,pi),Tg=En($n,mi,pi);function Bg(e){return Cn(e,[kg,jf],[Sg,Ng],[xg,Mg],[Fg,Tg])}o(Bg,"parseISODate");function Pg(e){return Cn(Dg(e),[vg,bg])}o(Pg,"parseRFC2822Date");function Ig(e){return Cn(e,[Ag,ml],[Eg,ml],[Cg,$g])}o(Ig,"parseHTTPDate");function Lg(e){return Cn(e,[gg,yg])}o(Lg,"parseISODuration");const Rg=En($n);function Og(e){return Cn(e,[pg,Rg])}o(Og,"parseISOTimeOnly");const _g=An(fg,hg),Vg=An(Wf),Ug=En($n,mi,pi);function Wg(e){return Cn(e,[_g,jf],[Vg,Ug])}o(Wg,"parseSQL");const pl="Invalid Duration",qf={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},jg={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...qf},ot=146097/400,Ur=146097/4800,qg={years:{quarters:4,months:12,weeks:ot/7,days:ot,hours:ot*24,minutes:ot*24*60,seconds:ot*24*60*60,milliseconds:ot*24*60*60*1e3},quarters:{months:3,weeks:ot/28,days:ot/4,hours:ot*24/4,minutes:ot*24*60/4,seconds:ot*24*60*60/4,milliseconds:ot*24*60*60*1e3/4},months:{weeks:Ur/7,days:Ur,hours:Ur*24,minutes:Ur*24*60,seconds:Ur*24*60*60,milliseconds:Ur*24*60*60*1e3},...qf},Nr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],zg=Nr.slice(0).reverse();function rr(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new K(n)}o(rr,"clone$2");function zf(e,t){let r=t.milliseconds??0;for(const n of zg.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}o(zf,"durationToMillis");function gl(e,t){const r=zf(e,t)<0?-1:1;Nr.reduceRight((n,i)=>{if(O(t[i]))return n;if(n){const s=t[n]*r,a=e[i][n],u=Math.floor(s/a);t[i]+=u*r,t[n]-=u*a*r}return i},null),Nr.reduce((n,i)=>{if(O(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}o(gl,"normalizeValues");function Kg(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}o(Kg,"removeZeroes");class K{static{o(this,"Duration")}constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?qg:jg;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||ee.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return K.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new xe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new K({values:ms(t,K.normalizeUnit),loc:ee.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(cr(t))return K.fromMillis(t);if(K.isDuration(t))return t;if(typeof t=="object")return K.fromObject(t);throw new xe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Lg(t);return n?K.fromObject(n,r):K.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Og(t);return n?K.fromObject(n,r):K.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new xe("need to specify a reason the Duration is invalid");const n=t instanceof Dt?t:new Dt(t,r);if(le.throwOnInvalid)throw new yp(n);return new K({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Xd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Ne.create(this.loc,n).formatDurationFromString(this,t):pl}toHuman(t={}){if(!this.isValid)return pl;const r=Nr.map(n=>{const i=this.values[n];return O(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ru(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?zf(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=K.fromDurationLike(t),n={};for(const i of Nr)(un(r.values,i)||un(this.values,i))&&(n[i]=r.get(i)+this.get(i));return rr(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=K.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Nf(t(this.values[n],n));return rr(this,{values:r},!0)}get(t){return this[K.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...ms(t,K.normalizeUnit)};return rr(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return rr(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return gl(this.matrix,t),rr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Kg(this.normalize().shiftToAll().toObject());return rr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>K.normalizeUnit(a));const r={},n={},i=this.toObject();let s;for(const a of Nr)if(t.indexOf(a)>=0){s=a;let u=0;for(const c in n)u+=this.matrix[c][a]*n[c],n[c]=0;cr(i[a])&&(u+=i[a]);const l=Math.trunc(u);r[a]=l,n[a]=(u*1e3-l*1e3)/1e3}else cr(i[a])&&(n[a]=i[a]);for(const a in n)n[a]!==0&&(r[s]+=a===s?n[a]:n[a]/this.matrix[s][a]);return gl(this.matrix,r),rr(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return rr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}o(r,"eq");for(const n of Nr)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Wr="Invalid Interval";function Gg(e,t){return!e||!e.isValid?pe.invalid("missing or invalid start"):!t||!t.isValid?pe.invalid("missing or invalid end"):t<e?pe.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}o(Gg,"validateStartEnd");class pe{static{o(this,"Interval")}constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new xe("need to specify a reason the Interval is invalid");const n=t instanceof Dt?t:new Dt(t,r);if(le.throwOnInvalid)throw new gp(n);return new pe({invalid:n})}static fromDateTimes(t,r){const n=Nn(t),i=Nn(r),s=Gg(n,i);return s??new pe({start:n,end:i})}static after(t,r){const n=K.fromDurationLike(r),i=Nn(t);return pe.fromDateTimes(i,i.plus(n))}static before(t,r){const n=K.fromDurationLike(r),i=Nn(t);return pe.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,a;try{s=I.fromISO(n,r),a=s.isValid}catch{a=!1}let u,l;try{u=I.fromISO(i,r),l=u.isValid}catch{l=!1}if(a&&l)return pe.fromDateTimes(s,u);if(a){const c=K.fromISO(i,r);if(c.isValid)return pe.after(s,c)}else if(l){const c=K.fromISO(n,r);if(c.isValid)return pe.before(u,c)}}return pe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?pe.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Nn).filter(a=>this.contains(a)).sort((a,u)=>a.toMillis()-u.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const a=r[s]||this.e,u=+a>+this.e?this.e:a;n.push(pe.fromDateTimes(i,u)),i=u,s+=1}return n}splitBy(t){const r=K.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const a=[];for(;n<this.e;){const u=this.start.plus(r.mapUnits(l=>l*i));s=+u>+this.e?this.e:u,a.push(pe.fromDateTimes(n,s)),n=s,i+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:pe.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return pe.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[i,s.union(a)]:[i.concat([s]),a]:[i,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...s),u=a.sort((l,c)=>l.time-c.time);for(const l of u)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(pe.fromDateTimes(r,l.time)),r=null);return pe.merge(i)}difference(...t){return pe.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ds,r={}){return this.isValid?Ne.create(this.s.loc.clone(r),t).formatInterval(this):Wr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Wr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Wr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Wr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):K.invalid(this.invalidReason)}mapEndpoints(t){return pe.fromDateTimes(t(this.s),t(this.e))}}class Un{static{o(this,"Info")}static hasDST(t=le.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Yt.isValidZone(t)}static normalizeZone(t){return ar(t,le.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||ee.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||ee.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||ee.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||ee.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||ee.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ee.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ee.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return ee.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return ee.create(r,null,"gregory").eras(t)}static features(){return{relative:Sf(),localeWeek:xf()}}}function yl(e,t){const r=o(i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=r(t)-r(e);return Math.floor(K.fromMillis(n).as("days"))}o(yl,"dayDiff");function Zg(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=yl(l,c);return(d-d%7)/7}],["days",yl]],i={},s=e;let a,u;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,i[l]=c(e,t),u=s.plus(i),u>t?(i[l]--,e=s.plus(i),e>t&&(u=e,i[l]--,e=s.plus(i))):e=u);return[e,i,u,a]}o(Zg,"highOrderDiffs");function Hg(e,t,r,n){let[i,s,a,u]=Zg(e,t,r);const l=t-i,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=i.plus({[u]:1})),a!==i&&(s[u]=(s[u]||0)+l/(a-i)));const d=K.fromObject(s,n);return c.length>0?K.fromMillis(l,n).shiftTo(...c).plus(d):d}o(Hg,"diff");const Yg="missing Intl.DateTimeFormat.formatToParts support";function J(e,t=r=>r){return{regex:e,deser:o(([r])=>t(_p(r)),"deser")}}o(J,"intUnit");const Jg=" ",Kf=`[ ${Jg}]`,Gf=new RegExp(Kf,"g");function Xg(e){return e.replace(/\./g,"\\.?").replace(Gf,Kf)}o(Xg,"fixListRegex");function wl(e){return e.replace(/\./g,"").replace(Gf," ").toLowerCase()}o(wl,"stripInsensitivities");function wt(e,t){return e===null?null:{regex:RegExp(e.map(Xg).join("|")),deser:o(([r])=>e.findIndex(n=>wl(r)===wl(n))+t,"deser")}}o(wt,"oneOf");function vl(e,t){return{regex:e,deser:o(([,r,n])=>zs(r,n),"deser"),groups:t}}o(vl,"offset");function Mi(e){return{regex:e,deser:o(([t])=>t,"deser")}}o(Mi,"simple");function Qg(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}o(Qg,"escapeToken");function ey(e,t){const r=yt(t),n=yt(t,"{2}"),i=yt(t,"{3}"),s=yt(t,"{4}"),a=yt(t,"{6}"),u=yt(t,"{1,2}"),l=yt(t,"{1,3}"),c=yt(t,"{1,6}"),d=yt(t,"{1,9}"),f=yt(t,"{2,4}"),p=yt(t,"{4,6}"),g=o($=>({regex:RegExp(Qg($.val)),deser:o(([A])=>A,"deser"),literal:!0}),"literal"),b=o($=>{if(e.literal)return g($);switch($.val){case"G":return wt(t.eras("short"),0);case"GG":return wt(t.eras("long"),0);case"y":return J(c);case"yy":return J(f,Aa);case"yyyy":return J(s);case"yyyyy":return J(p);case"yyyyyy":return J(a);case"M":return J(u);case"MM":return J(n);case"MMM":return wt(t.months("short",!0),1);case"MMMM":return wt(t.months("long",!0),1);case"L":return J(u);case"LL":return J(n);case"LLL":return wt(t.months("short",!1),1);case"LLLL":return wt(t.months("long",!1),1);case"d":return J(u);case"dd":return J(n);case"o":return J(l);case"ooo":return J(i);case"HH":return J(n);case"H":return J(u);case"hh":return J(n);case"h":return J(u);case"mm":return J(n);case"m":return J(u);case"q":return J(u);case"qq":return J(n);case"s":return J(u);case"ss":return J(n);case"S":return J(l);case"SSS":return J(i);case"u":return Mi(d);case"uu":return Mi(u);case"uuu":return J(r);case"a":return wt(t.meridiems(),0);case"kkkk":return J(s);case"kk":return J(f,Aa);case"W":return J(u);case"WW":return J(n);case"E":case"c":return J(r);case"EEE":return wt(t.weekdays("short",!1),1);case"EEEE":return wt(t.weekdays("long",!1),1);case"ccc":return wt(t.weekdays("short",!0),1);case"cccc":return wt(t.weekdays("long",!0),1);case"Z":case"ZZ":return vl(new RegExp(`([+-]${u.source})(?::(${n.source}))?`),2);case"ZZZ":return vl(new RegExp(`([+-]${u.source})(${n.source})?`),2);case"z":return Mi(/[a-z_+-/]{1,256}?/i);case" ":return Mi(/[^\S\n\r]/);default:return g($)}},"unitate")(e)||{invalidReason:Yg};return b.token=e,b}o(ey,"unitForToken");const ty={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function ry(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let u=ty[a];if(typeof u=="object"&&(u=u[s]),u)return{literal:!1,val:u}}o(ry,"tokenForPart");function ny(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}o(ny,"buildRegex");function iy(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const a in r)if(un(r,a)){const u=r[a],l=u.groups?u.groups+1:1;!u.literal&&u.token&&(i[u.token.val[0]]=u.deser(n.slice(s,s+l))),s+=l}return[n,i]}else return[n,{}]}o(iy,"match");function sy(e){const t=o(s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let r=null,n;return O(e.z)||(r=Yt.create(e.z)),O(e.Z)||(r||(r=new _e(e.Z)),n=e.Z),O(e.q)||(e.M=(e.q-1)*3+1),O(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),O(e.u)||(e.S=tu(e.u)),[Object.keys(e).reduce((s,a)=>{const u=t(a);return u&&(s[u]=e[a]),s},{}),r,n]}o(sy,"dateTimeFromMatches");let ko=null;function oy(){return ko||(ko=I.fromMillis(1555555555555)),ko}o(oy,"getDummyDateTime");function ay(e,t){if(e.literal)return e;const r=Ne.macroTokenToFormatOpts(e.val),n=Jf(r,t);return n==null||n.includes(void 0)?e:n}o(ay,"maybeExpandMacroToken");function Zf(e,t){return Array.prototype.concat(...e.map(r=>ay(r,t)))}o(Zf,"expandMacroTokens");class Hf{static{o(this,"TokenParser")}constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Zf(Ne.parseFormat(r),t),this.units=this.tokens.map(n=>ey(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=ny(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=iy(t,this.regex,this.handlers),[i,s,a]=n?sy(n):[null,null,void 0];if(un(n,"a")&&un(n,"H"))throw new Jr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:s,specificOffset:a}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Yf(e,t,r){return new Hf(e,r).explainFromTokens(t)}o(Yf,"explainFromTokens");function uy(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:a}=Yf(e,t,r);return[n,i,s,a]}o(uy,"parseFromTokens");function Jf(e,t){if(!e)return null;const n=Ne.create(t,e).dtFormatter(oy()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(a=>ry(a,e,s))}o(Jf,"formatOptsToTokens");const So="Invalid DateTime",ly=864e13;function Wn(e){return new Dt("unsupported zone",`the zone "${e.name}" is not supported`)}o(Wn,"unsupportedZone");function xo(e){return e.weekData===null&&(e.weekData=fs(e.c)),e.weekData}o(xo,"possiblyCachedWeekData");function Fo(e){return e.localWeekData===null&&(e.localWeekData=fs(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}o(Fo,"possiblyCachedLocalWeekData");function Er(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}o(Er,"clone$1");function Xf(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}o(Xf,"fixOffset");function Ti(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}o(Ti,"tsToObj");function ts(e,t,r){return Xf(qs(e),t,r)}o(ts,"objToTS");function bl(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,hs(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=K.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),u=qs(s);let[l,c]=Xf(u,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}o(bl,"adjustTime");function jr(e,t,r,n,i,s){const{setZone:a,zone:u}=r;if(e&&Object.keys(e).length!==0||t){const l=t||u,c=I.fromObject(e,{...r,zone:l,specificOffset:s});return a?c:c.setZone(u)}else return I.invalid(new Dt("unparsable",`the input "${i}" can't be parsed as ${n}`))}o(jr,"parseDataToDateTime");function Bi(e,t,r=!0){return e.isValid?Ne.create(ee.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}o(Bi,"toTechFormat");function No(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=ve(e.c.year,r?6:4),t?(n+="-",n+=ve(e.c.month),n+="-",n+=ve(e.c.day)):(n+=ve(e.c.month),n+=ve(e.c.day)),n}o(No,"toISODate");function Dl(e,t,r,n,i,s){let a=ve(e.c.hour);return t?(a+=":",a+=ve(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=ve(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=ve(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=ve(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?a+="Z":e.o<0?(a+="-",a+=ve(Math.trunc(-e.o/60)),a+=":",a+=ve(Math.trunc(-e.o%60))):(a+="+",a+=ve(Math.trunc(e.o/60)),a+=":",a+=ve(Math.trunc(e.o%60)))),s&&(a+="["+e.zone.ianaName+"]"),a}o(Dl,"toISOTime");const Qf={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},cy={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},dy={ordinal:1,hour:0,minute:0,second:0,millisecond:0},eh=["year","month","day","hour","minute","second","millisecond"],fy=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],hy=["year","ordinal","hour","minute","second","millisecond"];function my(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Xd(e);return t}o(my,"normalizeUnit");function Al(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return my(e)}}o(Al,"normalizeUnitWithLocalWeeks");function py(e){if(jn===void 0&&(jn=le.now()),e.type!=="iana")return e.offset(jn);const t=e.name;let r=Ea.get(t);return r===void 0&&(r=e.offset(jn),Ea.set(t,r)),r}o(py,"guessOffsetForZone");function El(e,t){const r=ar(t.zone,le.defaultZone);if(!r.isValid)return I.invalid(Wn(r));const n=ee.fromObject(t);let i,s;if(O(e.year))i=le.now();else{for(const l of eh)O(e[l])&&(e[l]=Qf[l]);const a=$f(e)||kf(e);if(a)return I.invalid(a);const u=py(r);[i,s]=ts(e,u,r)}return new I({ts:i,zone:r,loc:n,o:s})}o(El,"quickDT");function Cl(e,t,r){const n=O(r.round)?!0:r.round,i=o((a,u)=>(a=ru(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,u)),"format"),s=o(a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a),"differ");if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,r.units[r.units.length-1])}o(Cl,"diffRelative");function $l(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}o($l,"lastOpts");let jn;const Ea=new Map;class I{static{o(this,"DateTime")}constructor(t){const r=t.zone||le.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Dt("invalid input"):null)||(r.isValid?null:Wn(r));this.ts=O(t.ts)?le.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const u=cr(t.o)&&!t.old?t.o:r.offset(this.ts);i=Ti(this.ts,u),n=Number.isNaN(i.year)?new Dt("invalid input"):null,i=n?null:i,s=n?null:u}this._zone=r,this.loc=t.loc||ee.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=$l(arguments),[n,i,s,a,u,l,c]=r;return El({year:n,month:i,day:s,hour:a,minute:u,second:l,millisecond:c},t)}static utc(){const[t,r]=$l(arguments),[n,i,s,a,u,l,c]=r;return t.zone=_e.utcInstance,El({year:n,month:i,day:s,hour:a,minute:u,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=qp(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const i=ar(r.zone,le.defaultZone);return i.isValid?new I({ts:n,zone:i,loc:ee.fromObject(r)}):I.invalid(Wn(i))}static fromMillis(t,r={}){if(cr(t))return t<-864e13||t>ly?I.invalid("Timestamp out of range"):new I({ts:t,zone:ar(r.zone,le.defaultZone),loc:ee.fromObject(r)});throw new xe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(cr(t))return new I({ts:t*1e3,zone:ar(r.zone,le.defaultZone),loc:ee.fromObject(r)});throw new xe("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=ar(r.zone,le.defaultZone);if(!n.isValid)return I.invalid(Wn(n));const i=ee.fromObject(r),s=ms(t,Al),{minDaysInFirstWeek:a,startOfWeek:u}=cl(s,i),l=le.now(),c=O(r.specificOffset)?n.offset(l):r.specificOffset,d=!O(s.ordinal),f=!O(s.year),p=!O(s.month)||!O(s.day),g=f||p,y=s.weekYear||s.weekNumber;if((g||d)&&y)throw new Jr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&d)throw new Jr("Can't mix ordinal dates with month/day");const b=y||s.weekday&&!g;let $,A,x=Ti(l,c);b?($=fy,A=cy,x=fs(x,a,u)):d?($=hy,A=dy,x=$o(x)):($=eh,A=Qf);let B=!1;for(const kt of $){const It=s[kt];O(It)?B?s[kt]=A[kt]:s[kt]=x[kt]:B=!0}const R=b?Up(s,a,u):d?Wp(s):$f(s),G=R||kf(s);if(G)return I.invalid(G);const Pe=b?ul(s,a,u):d?ll(s):s,[gt,Ue]=ts(Pe,c,n),Xe=new I({ts:gt,zone:n,o:Ue,loc:i});return s.weekday&&g&&t.weekday!==Xe.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Xe.toISO()}`):Xe.isValid?Xe:I.invalid(Xe.invalid)}static fromISO(t,r={}){const[n,i]=Bg(t);return jr(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=Pg(t);return jr(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=Ig(t);return jr(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(O(t)||O(r))throw new xe("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,a=ee.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[u,l,c,d]=uy(a,t,r);return d?I.invalid(d):jr(u,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=Wg(t);return jr(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new xe("need to specify a reason the DateTime is invalid");const n=t instanceof Dt?t:new Dt(t,r);if(le.throwOnInvalid)throw new pp(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Jf(t,ee.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Zf(Ne.parseFormat(t),ee.fromObject(r)).map(i=>i.val).join("")}static resetCache(){jn=void 0,Ea.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?xo(this).weekYear:NaN}get weekNumber(){return this.isValid?xo(this).weekNumber:NaN}get weekday(){return this.isValid?xo(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Fo(this).weekday:NaN}get localWeekNumber(){return this.isValid?Fo(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Fo(this).weekYear:NaN}get ordinal(){return this.isValid?$o(this.c).ordinal:NaN}get monthShort(){return this.isValid?Un.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Un.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Un.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Un.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=qs(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),a=this.zone.offset(n-i*r),u=this.zone.offset(n-s*r);if(a===u)return[this];const l=n-a*r,c=n-u*r,d=Ti(l,a),f=Ti(c,u);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Er(this,{ts:l}),Er(this,{ts:c})]:[this]}get isInLeapYear(){return hi(this.year)}get daysInMonth(){return hs(this.year,this.month)}get daysInYear(){return this.isValid?en(this.year):NaN}get weeksInWeekYear(){return this.isValid?Qn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Qn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Ne.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(_e.instance(t),r)}toLocal(){return this.setZone(le.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=ar(t,le.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),a=this.toObject();[i]=ts(a,s,t)}return Er(this,{ts:i,zone:t})}else return I.invalid(Wn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Er(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=ms(t,Al),{minDaysInFirstWeek:n,startOfWeek:i}=cl(r,this.loc),s=!O(r.weekYear)||!O(r.weekNumber)||!O(r.weekday),a=!O(r.ordinal),u=!O(r.year),l=!O(r.month)||!O(r.day),c=u||l,d=r.weekYear||r.weekNumber;if((c||a)&&d)throw new Jr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Jr("Can't mix ordinal dates with month/day");let f;s?f=ul({...fs(this.c,n,i),...r},n,i):O(r.ordinal)?(f={...this.toObject(),...r},O(r.day)&&(f.day=Math.min(hs(f.year,f.month),f.day))):f=ll({...$o(this.c),...r});const[p,g]=ts(f,this.o,this.zone);return Er(this,{ts:p,o:g})}plus(t){if(!this.isValid)return this;const r=K.fromDurationLike(t);return Er(this,bl(this,r))}minus(t){if(!this.isValid)return this;const r=K.fromDurationLike(t).negate();return Er(this,bl(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=K.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Ne.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):So}toLocaleString(t=ds,r={}){return this.isValid?Ne.create(this.loc.clone(r),t).formatDateTime(this):So}toLocaleParts(t={}){return this.isValid?Ne.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const a=t==="extended";let u=No(this,a);return u+="T",u+=Dl(this,a,r,n,i,s),u}toISODate({format:t="extended"}={}){return this.isValid?No(this,t==="extended"):null}toISOWeekDate(){return Bi(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:a="extended"}={}){return this.isValid?(i?"T":"")+Dl(this,a==="extended",r,t,n,s):null}toRFC2822(){return Bi(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Bi(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?No(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),Bi(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():So}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return K.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=zp(r).map(K.normalizeUnit),a=t.valueOf()>this.valueOf(),u=a?this:t,l=a?t:this,c=Hg(u,l,s,i);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?pe.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Cl(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Cl(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new xe("min requires all arguments be DateTimes");return dl(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new xe("max requires all arguments be DateTimes");return dl(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,a=ee.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Yf(a,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,s=ee.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new Hf(s,t)}static fromFormatParser(t,r,n={}){if(O(t)||O(r))throw new xe("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=n,a=ee.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!a.equals(r.locale))throw new xe(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${r.locale}`);const{result:u,zone:l,specificOffset:c,invalidReason:d}=r.explainFromTokens(t);return d?I.invalid(d):jr(u,l,n,`format ${r.format}`,t,c)}static get DATE_SHORT(){return ds}static get DATE_MED(){return Qd}static get DATE_MED_WITH_WEEKDAY(){return wp}static get DATE_FULL(){return ef}static get DATE_HUGE(){return tf}static get TIME_SIMPLE(){return rf}static get TIME_WITH_SECONDS(){return nf}static get TIME_WITH_SHORT_OFFSET(){return sf}static get TIME_WITH_LONG_OFFSET(){return of}static get TIME_24_SIMPLE(){return af}static get TIME_24_WITH_SECONDS(){return uf}static get TIME_24_WITH_SHORT_OFFSET(){return lf}static get TIME_24_WITH_LONG_OFFSET(){return cf}static get DATETIME_SHORT(){return df}static get DATETIME_SHORT_WITH_SECONDS(){return ff}static get DATETIME_MED(){return hf}static get DATETIME_MED_WITH_SECONDS(){return mf}static get DATETIME_MED_WITH_WEEKDAY(){return vp}static get DATETIME_FULL(){return pf}static get DATETIME_FULL_WITH_SECONDS(){return gf}static get DATETIME_HUGE(){return yf}static get DATETIME_HUGE_WITH_SECONDS(){return wf}}function Nn(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&cr(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new xe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}o(Nn,"friendlyDateTime");var L;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(L||(L={}));L.Years+"",L.Quarters+"",L.Months+"",L.Weeks+"",L.Days+"",L.Hours+"",L.Minutes+"",L.Seconds+"",L.Milliseconds+"";L.Years+"",L.Quarters+"",L.Months+"",L.Weeks+"",L.Days+"",L.Hours+"",L.Minutes+"",L.Seconds+"",L.Milliseconds+"";const th=[L.Milliseconds,L.Seconds,L.Minutes,L.Hours,L.Days,L.Weeks,L.Months,L.Quarters,L.Years];L.Milliseconds+"",L.Seconds+"",L.Minutes+"",L.Hours+"",L.Days+"",L.Weeks+"",L.Months+"",L.Quarters+"",L.Years+"";function gy(e){return th.filter(t=>e[t])}o(gy,"flattenUnitSelection");function Ca(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}o(Ca,"round");function yy(e){return Ca(Math.max(e-.4,0),{roundToDigits:0})}o(yy,"roundNarrow");function kl(e){return e===0?0:Math.sign(e)}o(kl,"getSign");function Ct(e,t,r={}){const n={},i={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},s=Object.values(e).includes(1/0),a=Object.values(e).includes(-1/0);let u=K.fromObject(e).as(L.Milliseconds);const l=gy(t).reverse(),c=kl(u);l.forEach((g,y)=>{const b=y===l.length-1;if(s&&a||s)n[g]=1/0;else if(a)n[g]=-1/0;else if(g===L.Milliseconds)n.milliseconds=Ca(u,i);else{const $=K.fromObject({milliseconds:u}).as(g),A=Math.sign($),x=Math.abs($),B=b?Ca(x,i):Math.floor(i.roundToDigits==null?x:yy(x)),R=B===0?0:B*A;n[g]=R,u-=K.fromObject({[g]:R}).as(L.Milliseconds),c!==kl(u)&&(u=0)}});let d=!1;const f=[],p=th.toReversed().filter(g=>n[g]?(d=!0,!0):d?(f.push(g),!1):!0);if(p.length<l.length){const g={};p.forEach(b=>g[b]=!0);const y=Ct(e,g,i);return f.forEach(b=>y[b]=0),y}return n}o(Ct,"convertDuration");var T;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(T||(T={}));T.Year,T.Hour,T.Minute,T.Second,T.Millisecond;T.Quarter,T.Month,T.Week,T.Day;T.Millisecond,T.Second,T.Minute,T.Hour,T.Day,T.Week,T.Month,T.Quarter,T.Year;var Fe;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Fe||(Fe={}));Fe.Sunday+"",Fe.Monday+"",Fe.Tuesday+"",Fe.Wednesday+"",Fe.Thursday+"",Fe.Friday+"",Fe.Saturday+"";Fe.Sunday,Fe.Monday,Fe.Tuesday,Fe.Wednesday,Fe.Thursday,Fe.Friday,Fe.Saturday;var je;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(je||(je={}));je.January,je.February,je.March,je.April,je.May,je.June,je.July,je.August,je.September,je.October,je.November,je.December;const ps={min:1,max:12},gs={min:1,max:31},ys={min:0,max:23},ws={min:0,max:59},vs={min:0,max:59},bs={min:0,max:999};function wy(e){return Number.isInteger(e)&&ps.min<=e&&e<=ps.max}o(wy,"isValidMonthNumber");function vy(e){return Number.isInteger(e)&&gs.min<=e&&e<=gs.max}o(vy,"isValidDayOfMonth");function by(e){return Number.isInteger(e)&&ys.min<=e&&e<=ys.max}o(by,"isValidHour");function Dy(e){return Number.isInteger(e)&&ws.min<=e&&e<=ws.max}o(Dy,"isValidMinute");function Ay(e){return Number.isInteger(e)&&vs.min<=e&&e<=vs.max}o(Ay,"isValidSecond");function Ey(e){return Number.isInteger(e)&&bs.min<=e&&e<=bs.max}o(Ey,"isValidMillisecond");function Cy(e,t){if(!wy(e))throw new h(`${e} is not a valid month number.`,t);return e}o(Cy,"assertWrapMonthNumber");function $y(e,t){if(!vy(e))throw new h(`${e} is not a valid day of month.`,t);return e}o($y,"assertWrapDayOfMonth");function ky(e,t){if(!by(e))throw new h(`${e} is not a valid hour.`,t);return e}o(ky,"assertWrapHour");function Sy(e,t){if(!Dy(e))throw new h(`${e} is not a valid minute.`,t);return e}o(Sy,"assertWrapMinute");function xy(e,t){if(!Ay(e))throw new h(`${e} is not a valid second.`,t);return e}o(xy,"assertWrapSecond");function Fy(e,t){if(!Ey(e))throw new h(`${e} is not a valid millisecond.`,t);return e}o(Fy,"assertWrapMillisecond");function ei(e){const t=new Ja,r=Ct(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}o(ei,"wait");class h extends Error{static{o(this,"AssertionError")}name="AssertionError";constructor(t,r){super(Us(r,t)||"Assertion failed.")}}const Sl={interval:{milliseconds:100},timeout:{seconds:10}},Mo=Symbol("not set");async function Ny(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:s,options:a}=My(t),u=Ct(a.timeout,{milliseconds:!0}).milliseconds,l=Ct(a.interval,{milliseconds:!0});let c=Mo,d;async function f(){try{c=r?n():await n(),e(c,...i)}catch(g){c=Mo,d=Me(g)}}o(f,"checkCondition");const p=Date.now();for(;c===Mo;)if(await f(),await ei(l),Date.now()-p>=u){const y=`${s?`${s}: `:""}Timeout of '${u}' milliseconds exceeded waiting for callback value to match expectations`;throw an(d,y)}return c}o(Ny,"executeWaitUntil");function S(e,t=!1){return(...r)=>Ny(e,r,t)}o(S,"createWaitUntil");function My(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:rh(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}o(My,"parseWaitUntilArgs");function rh(e){return{interval:e?.interval||Sl.interval,timeout:e?.timeout||Sl.timeout}}o(rh,"parseWaitUntilOptions");const Mn={isFalse(e,t){if(e!==!1)throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new h(`'${m(e)}' is not truthy.`,t)}},nh={assert:Mn,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new h(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:S(Mn.isFalse),isFalsy:S(Mn.isFalsy),isTrue:S(Mn.isTrue),isTruthy:S(Mn.isTruthy)}};function Ty(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,r)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,r)}o(Ty,"endsWith");function By(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,r)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,r)}o(By,"endsWithout");function Py(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,r)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,r)}o(Py,"startsWith");function Iy(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,r)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,r)}o(Iy,"startsWithout");const Tn={endsWith:Ty,endsWithout:By,startsWith:Py,startsWithout:Iy},ih={assert:Tn,check:{endsWith:o((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,"endsWith"),endsWithout:o((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,"endsWithout"),startsWith:o((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,"startsWith"),startsWithout:o((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t,"startsWithout")},assertWrap:{endsWith:o((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,r)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,r);return e},"endsWith"),endsWithout:o((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,r)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,r);return e},"endsWithout"),startsWith:o((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,r)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,r);return e},"startsWith"),startsWithout:o((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,r)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,r);return e},"startsWithout")},checkWrap:{endsWith:o((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},"endsWith"),endsWithout:o((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},"endsWithout"),startsWith:o((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},"startsWith"),startsWithout:o((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e},"startsWithout")},waitUntil:{endsWith:S(Tn.endsWith),endsWithout:S(Tn.endsWithout),startsWith:S(Tn.startsWith),startsWithout:S(Tn.startsWithout)}};function Ly(e,t,r){const n=St(t);if(!n.includes(e))throw new h(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}o(Ly,"assertIsEnumValue");function Vt(e,t){return St(t).includes(e)}o(Vt,"isEnumValue");const To={isEnumValue(e,t,r){Ly(e,t,r)},isNotEnumValue(e,t,r){const n=St(t);if(n.includes(e))throw new h(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},sh={assert:To,check:{isEnumValue:Vt,isNotEnumValue(e,t){return!St(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=St(t);if(!n.includes(e))throw new h(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=St(t);if(n.includes(e))throw new h(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(St(t).includes(e))return e},isNotEnumValue(e,t){if(!St(t).includes(e))return e}},waitUntil:{isEnumValue:S(To.isEnumValue),isNotEnumValue:S(To.isNotEnumValue)}},Bo={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,r);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],a=t[i];if(s!==a)throw new h(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const a=e[s],u=t[s];return a!==u}))throw new h("Entries are equal.",r)}},oh={assert:Bo,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],s=t[n];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],s=t[n];return i!==s})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,r);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],a=t[i];if(s!==a)throw new h(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const a=e[s],u=t[s];return a!==u}))return e;throw new h("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],a=t[i];return s===a}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e}},waitUntil:{entriesEqual:S(Bo.entriesEqual),notEntriesEqual:S(Bo.notEntriesEqual)}};function Ds(e,t){return JSON.stringify(e)===JSON.stringify(t)}o(Ds,"baseJsonEquals");function ti(e,t){if(!(e===t||Ds(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Ds(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{ti(e[s],t[s])}catch(a){throw new Error(`JSON objects are not equal at key '${s}': ${He(a)}`)}})}throw new Error("Values are not JSON equal.")}}o(ti,"recursiveAssertJsonEquals");function qn(e,t){if(e===t||Ds(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Ds(r,n)?!1:Object.keys(e).every(s=>qn(e[s],t[s]))}return!1}o(qn,"recursiveCheckJsonEquals");const Po={jsonEquals(e,t,r){try{ti(e,t)}catch(n){throw new h(He(n),r)}},notJsonEquals(e,t,r){try{ti(e,t)}catch{return}throw new h("Values are JSON equal.",r)}},ah={assert:Po,check:{jsonEquals(e,t){return qn(e,t)},notJsonEquals(e,t){return!qn(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return ti(e,t),e}catch(n){throw new h(He(n),r)}},notJsonEquals(e,t,r){try{ti(e,t)}catch{return e}throw new h("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(qn(e,t))return e},notJsonEquals(e,t){if(!qn(e,t))return e}},waitUntil:{jsonEquals:S(Po.jsonEquals),notJsonEquals:S(Po.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function xl(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}o(xl,"type$1");function uh(){this._key="chai/deep-eql__"+Math.random()+Date.now()}o(uh,"FakeMap");uh.prototype={get:o(function(t){return t[this._key]},"get"),set:o(function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})},"set")};var lh=typeof WeakMap=="function"?WeakMap:uh;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Fl(e,t,r){if(!r||ln(e)||ln(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}o(Fl,"memoizeCompare");/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Pi(e,t,r,n){if(!(!r||ln(e)||ln(t))){var i=r.get(e);i?i.set(t,n):(i=new lh,i.set(t,n),r.set(e,i))}}o(Pi,"memoizeSet");function bt(e,t,r){if(r&&r.comparator)return Nl(e,t,r);var n=ch(e,t);return n!==null?n:Nl(e,t,r)}o(bt,"deepEqual");function ch(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:ln(e)||ln(t)?!1:null}o(ch,"simpleEqual");/*!
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
*/function Nl(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new lh;var n=r&&r.comparator,i=Fl(e,t,r.memoize);if(i!==null)return i;var s=Fl(t,e,r.memoize);if(s!==null)return s;if(n){var a=n(e,t);if(a===!1||a===!0)return Pi(e,t,r.memoize,a),a;var u=ch(e,t);if(u!==null)return u}var l=xl(e);if(l!==xl(t))return Pi(e,t,r.memoize,!1),!1;Pi(e,t,r.memoize,!0);var c=Ry(e,t,l,r);return Pi(e,t,r.memoize,c),c}o(Nl,"extensiveDeepEqual");function Ry(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return bt(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return dh(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Tr(e,t,n);case"RegExp":return Oy(e,t);case"Generator":return _y(e,t,n);case"DataView":return Tr(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Tr(new Uint8Array(e),new Uint8Array(t),n);case"Set":return Ml(e,t,n);case"Map":return Ml(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Uy(e,t,n)}}o(Ry,"extensiveDeepEqualByType");/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function Oy(e,t){return e.toString()===t.toString()}o(Oy,"regexpEqual");/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ml(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(o(function(a,u){n.push([a,u])},"gatherEntries")),t.forEach(o(function(a,u){i.push([a,u])},"gatherEntries")),Tr(n.sort(),i.sort(),r)}o(Ml,"entriesEqual");/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Tr(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(bt(e[i],t[i],r)===!1)return!1;return!0}o(Tr,"iterableEqual");/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function _y(e,t,r){return Tr($a(e),$a(t),r)}o(_y,"generatorEqual");/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Vy(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}o(Vy,"hasIteratorFunction");/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Tl(e){if(Vy(e))try{return $a(e[Symbol.iterator]())}catch{return[]}return[]}o(Tl,"getIteratorEntries");/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function $a(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}o($a,"getGeneratorEntries");/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Bl(e){var t=[];for(var r in e)t.push(r);return t}o(Bl,"getEnumerableKeys");function Pl(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}o(Pl,"getEnumerableSymbols");/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function dh(e,t,r,n){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(bt(e[r[s]],t[r[s]],n)===!1)return!1;return!0}o(dh,"keysEqual");/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Uy(e,t,r){var n=Bl(e),i=Bl(t),s=Pl(e),a=Pl(t);if(n=n.concat(s),i=i.concat(a),n.length&&n.length===i.length)return Tr(Il(n).sort(),Il(i).sort())===!1?!1:dh(e,t,n,r);var u=Tl(e),l=Tl(t);return u.length&&u.length===l.length?(u.sort(),l.sort(),Tr(u,l,r)):n.length===0&&u.length===0&&i.length===0&&l.length===0}o(Uy,"objectEqual");/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function ln(e){return e===null||typeof e!="object"}o(ln,"isPrimitive");function Il(e){return e.map(o(function(r){return typeof r=="symbol"?r.toString():r},"mapSymbol"))}o(Il,"mapSymbols");const nr={strictEquals(e,t,r){if(e!==t)throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,r)},deepEquals(e,t,r){if(!bt(e,t))throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,r)},notDeepEquals(e,t,r){if(bt(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,r)}},fh=nr.deepEquals,hh={assert:nr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return bt(e,t)},notDeepEquals(e,t){return!bt(e,t)}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,r);return e},deepEquals(e,t,r){if(bt(e,t))return e;throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,r)},notDeepEquals(e,t,r){if(bt(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(bt(e,t))return e},notDeepEquals(e,t){if(!bt(e,t))return e}},waitUntil:{strictEquals:S(nr.strictEquals),notStrictEquals:S(nr.notStrictEquals),looseEquals:S(nr.looseEquals),notLooseEquals:S(nr.notLooseEquals),deepEquals:S(nr.deepEquals),notDeepEquals:S(nr.notDeepEquals)}};function Qe(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}o(Qe,"hasValue");function at(e,t){return typeof t=="string"?t.includes(e):Qe(t,e)}o(at,"isIn");const Rt={hasValue(e,t,r){if(!Qe(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,r)},lacksValue(e,t,r){if(Qe(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,r)}if(n.length)throw new h(`'${m(e)}' does not have values '${m(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new h(`'${m(e)}' has values '${m(n)}'.`,r)},isIn(e,t,r){if(!at(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,r)},isNotIn(e,t,r){if(at(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is not empty.`,t)}}},mh={assert:Rt,check:{hasValue(e,t){return Qe(e,t)},lacksValue(e,t){return!Qe(e,t)},hasValues(e,t){return t.every(r=>Qe(e,r))},lacksValues(e,t){return t.every(r=>!Qe(e,r))},isIn(e,t){return at(e,t)},isNotIn(e,t){return!at(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Qe(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,r);return e},lacksValue(e,t,r){if(Qe(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,r)}if(n.length)throw new h(`'${m(e)}' does not have values '${m(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new h(`'${m(e)}' has values '${m(n)}'.`,r);return e},isIn(e,t,r){if(!at(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,r);return e},isNotIn(e,t,r){if(at(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Qe(e,t))return e},lacksValue(e,t){if(!Qe(e,t))return e},hasValues(e,t){if(t.every(r=>Qe(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Qe(e,r)))return e},isIn(e,t){if(at(e,t))return e},isNotIn(e,t){if(!at(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:S(Rt.hasValue),lacksValue:S(Rt.lacksValue),hasValues:S(Rt.hasValues),lacksValues:S(Rt.lacksValues),isIn:S(Rt.isIn),isNotIn:S(Rt.isNotIn),isEmpty:S(Rt.isEmpty),isNotEmpty:S(Rt.isNotEmpty)}},Io={isHttpStatus(e,t){if(!Vt(e,w))throw new h(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Vt(e,w)){if(!at(e,es[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,r)}else throw new h(`${m(e)} is not a valid HTTP status.`,r)}},ph={assert:Io,check:{isHttpStatus(e){return Vt(e,w)},isHttpStatusCategory(e,t){return Vt(e,w)&&at(e,es[t])}},assertWrap:{isHttpStatus(e,t){if(!Vt(e,w))throw new h(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Vt(e,w)){if(!at(e,es[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,r)}else throw new h(`${m(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Vt(e,w))return e},isHttpStatusCategory(e,t){if(Vt(e,w)&&at(e,es[t]))return e}},waitUntil:{isHttpStatus:S(Io.isHttpStatus),isHttpStatusCategory:S(Io.isHttpStatusCategory)}},Lo={instanceOf(e,t,r){if(!(e instanceof t))throw new h(`'${m(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,r)}},gh={assert:Lo,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new h(`'${m(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:S(Lo.instanceOf),notInstanceOf:S(Lo.notInstanceOf)}},Wy=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ue(e,t){return Wy.some(r=>{try{return r(e,t)}catch{return!1}})}o(ue,"hasKey");const Cr={isKeyOf(e,t,r){if(!ue(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,r)},isNotKeyOf(e,t,r){if(ue(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,r)},hasKey(e,t,r){if(!ue(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(ue(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!ue(e,i));if(n.length)throw new h(`'${m(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>ue(e,i));if(n.length)throw new h(`'${m(e)}' does not lack keys '${n.join(",")}'.`,r)}},yh={assert:Cr,check:{isKeyOf(e,t){return ue(t,e)},isNotKeyOf(e,t){return!ue(t,e)},hasKey:ue,lacksKey(e,t){return!ue(e,t)},hasKeys(e,t){return t.every(r=>ue(e,r))},lacksKeys(e,t){return t.every(r=>!ue(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!ue(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(ue(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,r);return e},hasKey(e,t,r){if(!ue(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(ue(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!ue(e,i));if(n.length)throw new h(`'${m(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>ue(e,i));if(n.length)throw new h(`'${m(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(ue(t,e))return e},isNotKeyOf(e,t){if(!ue(t,e))return e},hasKey(e,t){if(ue(e,t))return e},lacksKey(e,t){if(!ue(e,t))return e},hasKeys(e,t){if(t.every(r=>ue(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!ue(e,r)))return e}},waitUntil:{isKeyOf:S(Cr.isKeyOf),isNotKeyOf:S(Cr.isNotKeyOf),hasKey:S(Cr.hasKey),lacksKey:S(Cr.lacksKey),hasKeys:S(Cr.hasKeys),lacksKeys:S(Cr.lacksKeys)}};function jy(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,r)}o(jy,"isLengthAtLeast");function qy(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,r)}o(qy,"isLengthExactly");const Ro={isLengthAtLeast:jy,isLengthExactly:qy},wh={assert:Ro,check:{isLengthAtLeast:o((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:te(e).length)>=t,"isLengthAtLeast"),isLengthExactly:o((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:te(e).length)===t,"isLengthExactly")},assertWrap:{isLengthAtLeast:o((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,r);return e},"isLengthAtLeast"),isLengthExactly:o((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,r);return e},"isLengthExactly")},checkWrap:{isLengthAtLeast:o((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)>=t)return e},"isLengthAtLeast"),isLengthExactly:o((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:te(e).length)===t)return e},"isLengthExactly")},waitUntil:{isLengthAtLeast:S(Ro.isLengthAtLeast),isLengthExactly:S(Ro.isLengthExactly)}},zy={never(e){throw new h("This code should not have executed.",e)}},vh={assert:zy,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Oo={isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new h(`'${m(e)}' is not a nullish.`,t)}},bh={assert:Oo,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new h(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:S(Oo.isDefined),isNullish:S(Oo.isNullish)}},We={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new h(`${e} is not within the bounds ${m({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new h(`${e} is not outside the bounds ${m({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new h(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new h(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new h(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new h(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new h(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new h(`${e} is within ±${r} of ${t}`,n)}},Dh={assert:We,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new h(`${e} is not within the bounds ${m({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new h(`${e} is not outside the bounds ${m({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new h(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new h(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new h(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new h(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new h(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new h(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:S(We.isInBounds),isOutBounds:S(We.isOutBounds),isInteger:S(We.isInteger),isNotInteger:S(We.isNotInteger),isAbove:S(We.isAbove),isAtLeast:S(We.isAtLeast),isBelow:S(We.isBelow),isAtMost:S(We.isAtMost),isNaN:S(We.isNaN),isFinite:S(We.isFinite),isInfinite:S(We.isInfinite),isApproximately:S(We.isApproximately),isNotApproximately:S(We.isNotApproximately)}};function Ky(e,t,r,n,i){return gi(...Gs(e,t,r,n,i),!1)}o(Ky,"assertOutput");function Gs(e,t,r,n,i){const s=Array.isArray(r);return[s?e:fh,s?t:e,s?r:t,s?n:r,s?i:n]}o(Gs,"extractOutputArgs");function gi(e,t,r,n,i,s){const a=t(...r);if(a instanceof Promise)return new Promise(async(u,l)=>{try{const c=await a;e(c,n),s?u(c):u()}catch(c){l(new h(`Output from '${t.name}' did not produce expected output with input: ${m(r)}: ${He(c)}`,i))}});try{return e(a,n),s?a:void 0}catch(u){throw new h(`Output from '${t.name}' did not produce expected output with input: ${m(r)}: ${He(u)}`,i)}}o(gi,"innerAssertOutput");function Gy(e,t,r,n,i){try{const s=gi(...Gs(e,t,r,n,i),!1);return s instanceof Promise?new Promise(async a=>{try{await s,a(!0)}catch{a(!1)}}):!0}catch{return!1}}o(Gy,"checkOutput");function Zy(e,t,r,n,i){return gi(...Gs(e,t,r,n,i),!0)}o(Zy,"assertWrapOutput");function Hy(e,t,r,n,i){try{const s=gi(...Gs(e,t,r,n,i),!0);return s instanceof Promise?new Promise(async a=>{try{a(await s)}catch{a(void 0)}}):s}catch{return}}o(Hy,"checkWrapOutput");const _o=Symbol("not set");async function Yy(e,t,r,n,i,s){const a=Array.isArray(r),u=a?e:fh,l=a?t:e,c=a?r:t,d=a?n:r,f=rh(a?i:n),p=a?s:i,g=Ct(f.timeout,{milliseconds:!0}).milliseconds,y=Ct(f.interval,{milliseconds:!0});let b=_o,$;async function A(){try{b=await gi(u,l,c,d,void 0,!0)}catch(B){b=_o,$=Me(B)}}o(A,"checkCondition");const x=Date.now();for(;b===_o;)if(await A(),await ei(y),Date.now()-x>=g)throw an($,Us(p,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return b}o(Yy,"waitUntilOutput");const Jy={output:Ky},Ah={assert:Jy,check:{output:Gy},assertWrap:{output:Zy},checkWrap:{output:Hy},waitUntil:{output:Yy}},Bn={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t)}},Eh={assert:Bn,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:S(Bn.isNotPrimitive),isNotPropertyKey:S(Bn.isNotPropertyKey),isPrimitive:S(Bn.isPrimitive),isPropertyKey:S(Bn.isPropertyKey)}},Pn={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t)}},Ch={assert:Pn,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:S(Pn.isPromiseLike,!0),isNotPromiseLike:S(Pn.isNotPromiseLike,!0),isPromise:S(Pn.isPromise,!0),isNotPromise:S(Pn.isNotPromise,!0)}},Vo={matches(e,t,r){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new h(`'${e}' matches ${t}`,r)}},$h={assert:Vo,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new h(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:S(Vo.matches,!0),mismatches:S(Vo.mismatches,!0)}},ge={isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t)}},kh={assert:ge,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:S(ge.isArray),isBigInt:S(ge.isBigInt),isBoolean:S(ge.isBoolean),isFunction:S(ge.isFunction),isNull:S(ge.isNull),isNumber:S(ge.isNumber),isObject:S(ge.isObject),isString:S(ge.isString),isSymbol:S(ge.isSymbol),isUndefined:S(ge.isUndefined),isNotArray:S(ge.isNotArray),isNotBigInt:S(ge.isNotBigInt),isNotBoolean:S(ge.isNotBoolean),isNotFunction:S(ge.isNotFunction),isNotNull:S(ge.isNotNull),isNotNumber:S(ge.isNotNumber),isNotObject:S(ge.isNotObject),isNotString:S(ge.isNotString),isNotSymbol:S(ge.isNotSymbol),isNotUndefined:S(ge.isNotUndefined)}};var Ke;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ke||(Ke={}));function ou(e,t,r){au(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,r)}o(ou,"isError$1");function Ll(e,t,r){au(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,r)}o(Ll,"assertThrownError");function au(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new h(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=He(e);if(typeof r.matchMessage=="string"){if(!i.includes(r.matchMessage))throw new h(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new h(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new h(t.notInstance,n);else throw new h(t.noError,n)}o(au,"internalAssertError");function Rl(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=He(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}o(Rl,"internalCheckError");function Zs(e,t,r,n){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(a,u)=>{try{await s}catch(l){i=Me(l)}try{Ll(i,r,n),e===Ke.Assert?a():e===Ke.Check?a(!0):a(i)}catch(l){e===Ke.CheckWrap?a(void 0):e===Ke.Check?a(!1):u(Me(l))}})}catch(s){i=Me(s)}try{return Ll(i,r,n),e===Ke.Check?!0:e!==Ke.Assert?i:void 0}catch(s){if(e===Ke.CheckWrap)return;if(e===Ke.Check)return!1;throw s}}o(Zs,"internalThrowsCheck");function Xy(e,t,r){return Zs(Ke.Assert,e,t,r)}o(Xy,"throws");function Qy(e,t){return Zs(Ke.Check,e,t)}o(Qy,"throwsCheck");function e1(e,t,r){return Zs(Ke.AssertWrap,e,t,r)}o(e1,"throwsAssertWrap");function t1(e,t,r){return Zs(Ke.CheckWrap,e,t,r)}o(t1,"throwsCheckWrap");const r1=S(ou);function n1(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,a=typeof r=="object"?n:r,u=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${m(s)}'`);return r1(i,async()=>{try{await s();return}catch(l){return Me(l)}},u,a)}o(n1,"throwsWaitUntil");const i1={throws:Xy,isError:ou},Sh={assert:i1,check:{throws:Qy,isError(e,t){return Rl(e,t)}},assertWrap:{throws:e1,isError(e,t,r){return au(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:t1,isError(e,t){if(Rl(e,t))return e}},waitUntil:{throws:n1,isError:S(ou)}},or=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Uo={isUuid(e,t){if(!String(e).match(or))throw new h(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(or))throw new h(`'${String(e)}' is a UUID.`,t)}},xh={assert:Uo,check:{isUuid(e){return!!String(e).match(or)},isNotUuid(e){return!String(e).match(or)}},assertWrap:{isUuid(e,t){if(!String(e).match(or))throw new h(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(or))throw new h(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(or))return e},isNotUuid(e){if(!String(e).match(or))return e}},waitUntil:{isUuid:S(Uo.isUuid),isNotUuid:S(Uo.isNotUuid)}},s1={...vh.assert,...nh.assert,...ih.assert,...oh.assert,...sh.assert,...ph.assert,...gh.assert,...ah.assert,...yh.assert,...wh.assert,...bh.assert,...Dh.assert,...Ah.assert,...Eh.assert,...Ch.assert,...$h.assert,...kh.assert,...hh.assert,...Sh.assert,...xh.assert,...mh.assert},uu=[nh,ih,oh,sh,ph,gh,ah,yh,wh,vh,bh,Dh,Ah,Eh,Ch,$h,kh,hh,Sh,xh,mh],o1=Object.assign({},...uu.map(e=>e.check)),v=Object.assign(o(function(t){return!!t},"check"),o1);function a1(e,t,r){return rs(e,t,r,new Set)}o(a1,"checkCustomDeepQuality");function rs(e,t,r,n){if(e=Ol(e),t=Ol(t),v.isObject(e)&&v.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!rs(te(e).sort(),te(t).sort(),r,n))return!1;let i=!1;const s=te(e).map(a=>{const u=rs(e[a],t[a],r,n);return v.isPromise(u)&&(i=!0),u});return _l(i,s)}else if(v.isArray(e)&&v.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((a,u)=>{const l=rs(a,t[u],r,n);return v.isPromise(l)&&(i=!0),l});return _l(i,s)}else return r(e,t)}o(rs,"recursiveCheckCustomDeepQuality");function Ol(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}o(Ol,"flattenComplexObject");function _l(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(v.isTrue))}catch(i){n(Me(i))}}):t.every(v.isTrue)}o(_l,"handleMaybePromise");const u1=Object.assign({},...uu.map(e=>e.assertWrap)),cn=Object.assign(o(function(t,r){if(!t)throw new h("Assertion failed.",r);return t},"assertWrap"),u1);function l1(e){return{equals:o(()=>{},"equals"),notEquals:o(()=>{},"notEquals"),matches:o(()=>{},"matches"),notMatches:o(()=>{},"notMatches"),slowEquals:o(()=>{},"slowEquals")}}o(l1,"tsType");const c1={tsType:l1},d1={assert:c1},f1={fail:o(e=>{throw new h("Failure triggered.",e)},"fail")},h1={...d1.assert,...s1,...f1},Nt=Object.assign(o(function(t,r){if(!t)throw new h("Assertion failed.",r)},"assert"),h1),m1=Object.assign({},...uu.map(e=>e.checkWrap)),Fh=Object.assign(o(function(t){if(t)return t},"checkWrap"),m1);function p1(e,t){return v.hasKey(e,"entryType")&&e.entryType===t}o(p1,"isBookEntry");function qr(e,t){return e.controlType===t}o(qr,"isControlInitType");var Re;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Re||(Re={}));const Nh=Symbol("any-type"),g1={[Re.Checkbox]:!1,[Re.Color]:"",[Re.Dropdown]:"",[Re.Hidden]:Nh,[Re.Number]:0,[Re.Text]:""};function y1(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const s=g1[i.controlType];s!==Nh&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}o(y1,"checkControls");function w1(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return v.isPromise(i)?new Promise(async(s,a)=>{try{const u=await i;e.set(n,u),s(u)}catch(u){a(Me(u))}}):(e.set(n,i),i)}}o(w1,"getOrSetFromMap");function yi(e,t,r){if(t in e)return e[t];{const n=r();return v.isPromise(n)?new Promise(async(i,s)=>{try{const a=await n;e[t]=a,i(a)}catch(a){s(Me(a))}}):(e[t]=n,n)}}o(yi,"getOrSet");function Xt(e){return te(e).map(t=>[t,e[t]])}o(Xt,"getObjectTypedEntries");function dn(e){return Object.fromEntries(e)}o(dn,"typedObjectFromEntries");function Mh(e,t){return e.filter((r,n)=>!t.includes(n))}o(Mh,"filterOutIndexes");function kn(e,t,r){return e.reduce((n,i,s,a)=>{const u=t(i,s,a);return r(u,i,s,a)&&n.push(u),n},[])}o(kn,"filterMap");function Th(e,t){try{let r=!1;const n=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(r=!0,u):u?[u.key,u.value]:void 0}).filter(v.isTruthy);return r?new Promise(async(i,s)=>{try{const a=kn(await Promise.all(n),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},v.isTruthy);i(dn(a))}catch(a){s(Me(a))}}):dn(n)}catch(r){throw Me(r)}}o(Th,"arrayToObject");async function v1(e,t){return await e.reduce(async(r,n,i,s)=>{const a=await r,u=await t(n,i,s);return a.push(u),a},Promise.resolve([]))}o(v1,"awaitedBlockingMap");async function b1(e,t){await v1(e,t)}o(b1,"awaitedForEach");function D1(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}o(D1,"removeDuplicates");function A1({min:e,max:t}){const{min:r,max:n}=Jd({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)),a=Math.ceil(s/8);if(a>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const u=Math.floor(256**a/i)*i,l=new Uint8Array(a);let c;do crypto.getRandomValues(l),c=l.reduce((d,f,p)=>d+f*256**p,0);while(c>=u);return r+c%i}o(A1,"randomInteger");const Vl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Bh(e=16){let t="";for(let r=0;r<e;r++){const n=A1({min:0,max:Vl.length-1});t+=Vl[n]}return t}o(Bh,"randomString");function E1(e){return e.map(t=>({value:t,sort:Bh()})).sort((t,r)=>t.sort.localeCompare(r.sort)).map(({value:t})=>t)}o(E1,"shuffleArray");function Ph(e){if(v.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>He(t).trim()).join(`
`))}o(Ph,"combineErrors");async function Ul(e){const t=new Ja;return setTimeout(async()=>{t.resolve(await e())}),t.promise}o(Ul,"callAsynchronously");function C1(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}o(C1,"copyThroughJson");const $1="px";function k1(e){return Ih({value:e,suffix:$1})}o(k1,"addPx");function Ih({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}o(Ih,"addSuffix");function ht({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}o(ht,"addPrefix");function rn({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}o(rn,"removePrefix");function Lh(e,t){try{let r=!1;const n=Xt(e).map(([i,s])=>{const a=t(i,s,e);return a instanceof Promise?(r=!0,a):a?[a.key,a.value]:void 0}).filter(v.isTruthy);return r?new Promise(async(i,s)=>{try{const a=kn(await Promise.all(n),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},v.isTruthy);i(dn(a))}catch(a){s(Me(a))}}):dn(n)}catch(r){throw Me(r)}}o(Lh,"mapObject");function S1(e,...t){const r={...e};return t.forEach(n=>{n&&Xt(n).forEach(([i,s])=>{s!=null&&(r[i]=s)})}),r}o(S1,"mergeDefinedProperties");function Rh(...e){const t=e.join(""),r=D1(Array.from(t));return Array.from(r).join("")}o(Rh,"removeDuplicateCharacters");function x1(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}o(x1,"escapeStringForRegExp");function Oh(e,t){const r=Rh([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return F1(e,r)}o(Oh,"addRegExpFlags");function F1(e,t){const r=Rh(t);return typeof e=="string"?new RegExp(x1(e),r):new RegExp(e.source,r)}o(F1,"setRegExpFlags");function _h(e,{caseSensitive:t}){return Oh(e,"")}o(_h,"setRegExpCaseSensitivity");function N1({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=Oh(_h(t,{caseSensitive:r}),"g"),s=[];return e.replace(i,(...a)=>{const u=a[a.length-2];if(typeof u!="number")throw new TypeError(`Match index "${u}" is not a number. Searching for "${t}" in "${e}".`);const l=a[0];if(typeof l!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof l}!`);s.push({index:u,length:l.length});const c=a[0];if(typeof c!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${u} is not a string.`);return c}),s}o(N1,"findSubstringIndexes");function M1(e,t,{caseSensitive:r}){const n=N1({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=_h(t,{caseSensitive:r});return e.split(i).reduce((a,u,l)=>{const c=n[l],d=a.concat(u);if(c){const f=e.slice(c.index,c.index+c.length);return d.concat(f)}else return d},[])}o(M1,"splitIncludeSplit");function Vh(e,t){return e.split(t)}o(Vh,"safeSplit");function As(e,t){const{min:r,max:n}=Jd(t);return e>n?r:e<r?n:e}o(As,"wrapNumber");function he(e,t){let r=!1;const n=te(e).reduce((i,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),i[s]=a,i},{});return r?new Promise(async(i,s)=>{try{await Promise.all(te(n).map(async a=>{const u=await n[a];n[a]=u})),i(n)}catch(a){s(Me(a))}}):n}o(he,"mapObjectValues");function Uh(...e){if(!v.isLengthAtLeast(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(v.isObject(n))v.isObject(t)||(t={...n});else{t=n;return}Object.entries(n).forEach(([i,s])=>{r[i]||(r[i]=[]),r[i].push(s)})}),v.isObject(t)&&Object.entries(r).forEach(([n,i])=>{const s=Uh(...i);s===void 0&&n in t?delete t[n]:s!==void 0&&(t[n]=s)}),t}o(Uh,"mergeDeep");function Hs(e,t){const r=Xt(e).filter(([n,i])=>t(n,i,e));return dn(r)}o(Hs,"filterObject");function lu(e,t){return Hs(e,r=>!t.includes(r))}o(lu,"omitObjectKeys");function T1(e,t){return Hs(e,r=>t.includes(r))}o(T1,"pickObjectKeys");function Lr(e){return te(e).map(t=>e[t])}o(Lr,"getObjectTypedValues");function Wh(e){return v.isPrimitive(e)||e instanceof RegExp||e instanceof Promise}o(Wh,"shouldPreserveInSelectionSet");function ka(e,t){if(Array.isArray(e))return e.map(n=>ka(n,t));const r=[];return lu(he(e,(n,i)=>{const s=t[n];if(s===!0)return i;if(s)return Wh(i)?i:ka(i,s);r.push(n)}),r)}o(ka,"selectFrom");function Wl(e,t){const r=ka(e,t);return Sa(r,t)}o(Wl,"selectCollapsedFrom");function Sa(e,t){if(Wh(e))return e;const r=Object.keys(e);return Array.isArray(e)?e.map(n=>Sa(n,t)):v.isLengthAtLeast(r,2)?e:v.isLengthAtLeast(r,1)&&v.isObject(t)?Sa(e[r[0]],t[r[0]]):e}o(Sa,"collapseObject");function B1(e,t){return t.capitalizeFirstLetter?P1(e):e}o(B1,"maybeCapitalize");function P1(e){return e.length?e[0].toUpperCase()+e.slice(1):""}o(P1,"capitalizeFirstLetter");const I1={capitalizeFirstLetter:!1};var fn;(function(e){e.Upper="upper",e.Lower="lower"})(fn||(fn={}));function L1(e){return e.toLowerCase()!==e.toUpperCase()}o(L1,"hasCase");function jl(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(L1(n)){if(t===fn.Upper&&n!==n.toUpperCase()||t===fn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}o(jl,"isCase");function jh(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return B1(n,S1(I1,t))}o(jh,"kebabCaseToCamelCase");function R1(e){return e.split("").reduce((r,n,i,s)=>{const a=i>0&&s[i-1]||"",u=i<s.length-1&&s[i+1]||"",l=jl(a,fn.Lower,{rejectNoCaseCharacters:!0})||jl(u,fn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}o(R1,"camelCaseToKebabCase");function O1(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}o(O1,"joinWithFinalConjunction");function _1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}o(_1,"collapseWhiteSpace");function V1({value:e,wrapper:t}){return ht({value:Ih({value:e,suffix:t}),prefix:t})}o(V1,"wrapString");function $t(){function e(t){return class extends CustomEvent{static{o(this,"TypedEventConstructor")}static type=t;constructor(n){super(t,n)}}}return o(e,"defineEventTypeString"),e}o($t,"defineTypedCustomEvent");function Ys(e){return class extends Event{static{o(this,"TypedEventConstructor")}static type=e;constructor(r){super(e,r)}}}o(Ys,"defineTypedEvent$1");class qh{static{o(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return Lr(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=o(()=>this.universalListeners.delete(t)||!1,"removeListener");function i(s,a){r.once&&n(),t(s,a)}return o(i,"wrappedCallback"),this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=v.isString(t)?t:t.type,s=o(()=>this.listeners[i]?.delete(r)||!1,"removeListener");function a(u,l){n.once&&s(),r(u,l)}return o(a,"wrappedCallback"),yi(this.listeners,i,()=>new Map).set(r,{listener:a,removeListener:s}),s}removeListener(t,r){const n=v.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Lr(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Js extends qh{static{o(this,"ListenTarget")}}function zh(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}o(zh,"listenTo");function xr(e,t,r){return zh(globalThis,e,t,r)}o(xr,"listenToGlobal");function cu(e,t){return Es(e.title),e.parent?[...cu(e.parent),Es(e.parent.title)].concat([]):[]}o(cu,"listUrlBreadcrumbs");function Es(e){return _1(e).toLowerCase().replaceAll(/\s/g,"-")}o(Es,"titleToUrlBreadcrumb");function U1({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}o(U1,"doBreadcrumbsStartWith");const W1={[ke.ElementExample]:()=>[],[ke.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...y1(e.controls,e.title)].filter(v.isTruthy),[ke.Root]:()=>[]},Cs="_isBookTreeNode",Kh=new Map;function j1(e){return Kh.get(e)}o(j1,"getTreeFromCache");function q1(e,t){w1(Kh,e,()=>t)}o(q1,"addTreeToCache");function nn(e,t){return!!(Gh(e)&&e.entry.entryType===t)}o(nn,"isBookTreeNode");function Gh(e){return!!(v.hasKeys(e,[Cs,"entry"])&&e[Cs])}o(Gh,"isAnyBookTreeNode");function z1(){return{[Cs]:!0,entry:{entryType:ke.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}o(z1,"createEmptyBookTreeRoot");function K1({entries:e,debug:t}){const r=j1(e);if(r)return r;const n=z1();e.forEach(a=>du({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const i=Zh(n),s={tree:n,flattenedNodes:i};return q1(e,s),t&&console.info("element-book tree:",n),s}o(K1,"createBookTreeFromEntries");function G1(e,t,r){if(!t.parent)return e;const n=xa(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),du({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=xa(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${cu(t).join(" > ")}`);return i}o(G1,"getOrAddImmediateParent");function du({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=W1[t.entryType](t);t.errors.push(...i);const s=G1(e,t,r),a=Es(t.title),u=s.children[a];if(u){if(n){if(u.manuallyAdded){u.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}u.manuallyAdded=!0}return}const l={[Cs]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};s.children[a]=l,p1(t,ke.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(c=>du({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}o(du,"addEntryToTree");function xa(e,t){const r=Gh(e)?e.fullUrlBreadcrumbs.slice(0,-1):cu(e);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}o(xa,"traverseToImmediateParent");function Zh(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Zh(i));return[e,...r].flat()}o(Zh,"flattenTree");function fu(e,t){return hu(e,["",...t],void 0)}o(fu,"traverseControls");function hu(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const s=e.children[i||""],a=s&&hu(s,n,r);return{...e.controls,...a}}o(hu,"traverseAndInsertNewControls");function Z1(e,t,r){const n={...e};return hu(n,["",...t],r),n}o(Z1,"createNewControls");function Hh(e,t){const r=t?.controls||(nn(e,ke.Page)?he(e.entry.controls,(i,s)=>s.initValue):{});return{children:he(e.children,(i,s)=>Hh(s,t?.children?.[s.urlBreadcrumb])),controls:r}}o(Hh,"updateTreeControls");function Mt(e){const t={...e,entryType:ke.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,entryType:ke.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(v.isTruthy)};r.add(n.title),t.elementExamples[Es(i.title)]=i}}),t}o(Mt,"defineBookPage");var Ze;(function(e){e.Search="search",e.Book="book"})(Ze||(Ze={}));function Fa(e){return e[0]===Ze.Book?"":e[1]?decodeURIComponent(e[1]):""}o(Fa,"extractSearchQuery");const hn={hash:void 0,paths:[Ze.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=globalThis,mu=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pu=Symbol(),ql=new WeakMap;let Yh=class{static{o(this,"n")}constructor(t,r,n){if(this._$cssResult$=!0,n!==pu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(mu&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ql.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ql.set(r,t))}return t}toString(){return this.cssText}};const dt=o(e=>new Yh(typeof e=="string"?e:e+"",void 0,pu),"r$4"),is=o((e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Yh(r,e,pu)},"i$4"),H1=o((e,t)=>{if(mu)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=ns.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},"S$1"),zl=mu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return dt(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Y1,defineProperty:J1,getOwnPropertyDescriptor:X1,getOwnPropertyNames:Q1,getOwnPropertySymbols:ew,getPrototypeOf:tw}=Object,Xs=globalThis,Kl=Xs.trustedTypes,rw=Kl?Kl.emptyScript:"",nw=Xs.reactiveElementPolyfillSupport,Yn=o((e,t)=>e,"d$2"),$s={toAttribute(e,t){switch(t){case Boolean:e=e?rw:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},gu=o((e,t)=>!Y1(e,t),"f$1"),Gl={attribute:!0,type:String,converter:$s,reflect:!1,useDefault:!1,hasChanged:gu};Symbol.metadata??=Symbol("metadata"),Xs.litPropertyMetadata??=new WeakMap;let Yr=class extends HTMLElement{static{o(this,"y")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Gl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&J1(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=X1(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:i,set(a){const u=i?.call(this);s?.call(this,a),this.requestUpdate(t,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gl}static _$Ei(){if(this.hasOwnProperty(Yn("elementProperties")))return;const t=tw(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yn("properties"))){const r=this.properties,n=[...Q1(r),...ew(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(zl(i))}else t!==void 0&&r.push(zl(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return H1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:$s).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:$s;this._$Em=i,this[i]=a.fromAttribute(r,s.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const i=this.constructor,s=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??gu)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:s},a){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:a}=s,u=this[i];a!==!0||this._$AL.has(i)||u===void 0||this.C(i,void 0,s,u)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Yr.elementStyles=[],Yr.shadowRootOptions={mode:"open"},Yr[Yn("elementProperties")]=new Map,Yr[Yn("finalized")]=new Map,nw?.({ReactiveElement:Yr}),(Xs.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yu=globalThis,ks=yu.trustedTypes,Zl=ks?ks.createPolicy("lit-html",{createHTML:o(e=>e,"createHTML")}):void 0,Jh="$lit$",ur=`lit$${Math.random().toFixed(9).slice(2)}$`,Xh="?"+ur,iw=`<${Xh}>`,Rr=document,ri=o(()=>Rr.createComment(""),"l"),ni=o(e=>e===null||typeof e!="object"&&typeof e!="function","c$2"),wu=Array.isArray,sw=o(e=>wu(e)||typeof e?.[Symbol.iterator]=="function","u$2"),Wo=`[ 	
\f\r]`,In=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hl=/-->/g,Yl=/>/g,$r=RegExp(`>|${Wo}(?:([^\\s"'>=/]+)(${Wo}*=${Wo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jl=/'/g,Xl=/"/g,Qh=/^(?:script|style|textarea|title)$/i,ow=o(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),"y"),aw=ow(1),Ye=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Ql=new WeakMap,Mr=Rr.createTreeWalker(Rr,129);function e0(e,t){if(!wu(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zl!==void 0?Zl.createHTML(t):t}o(e0,"P");const uw=o((e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=In;for(let u=0;u<r;u++){const l=e[u];let c,d,f=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===In?d[1]==="!--"?a=Hl:d[1]!==void 0?a=Yl:d[2]!==void 0?(Qh.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=$r):d[3]!==void 0&&(a=$r):a===$r?d[0]===">"?(a=i??In,f=-1):d[1]===void 0?f=-2:(f=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?$r:d[3]==='"'?Xl:Jl):a===Xl||a===Jl?a=$r:a===Hl||a===Yl?a=In:(a=$r,i=void 0);const g=a===$r&&e[u+1].startsWith("/>")?" ":"";s+=a===In?l+iw:f>=0?(n.push(c),l.slice(0,f)+Jh+l.slice(f)+ur+g):l+ur+(f===-2?u:g)}return[e0(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},"V");class ii{static{o(this,"N")}constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,a=0;const u=t.length-1,l=this.parts,[c,d]=uw(t,r);if(this.el=ii.createElement(c,n),Mr.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Mr.nextNode())!==null&&l.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Jh)){const p=d[a++],g=i.getAttribute(f).split(ur),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?cw:y[1]==="?"?dw:y[1]==="@"?fw:Qs}),i.removeAttribute(f)}else f.startsWith(ur)&&(l.push({type:6,index:s}),i.removeAttribute(f));if(Qh.test(i.tagName)){const f=i.textContent.split(ur),p=f.length-1;if(p>0){i.textContent=ks?ks.emptyScript:"";for(let g=0;g<p;g++)i.append(f[g],ri()),Mr.nextNode(),l.push({type:2,index:++s});i.append(f[p],ri())}}}else if(i.nodeType===8)if(i.data===Xh)l.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(ur,f+1))!==-1;)l.push({type:7,index:s}),f+=ur.length-1}s++}}static createElement(t,r){const n=Rr.createElement("template");return n.innerHTML=t,n}}function mn(e,t,r=e,n){if(t===Ye)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=ni(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=mn(e,i._$AS(e,t.values),i,n)),t}o(mn,"S");let lw=class{static{o(this,"M")}constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??Rr).importNode(r,!0);Mr.currentNode=i;let s=Mr.nextNode(),a=0,u=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Sn(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new hw(s,this,t)),this._$AV.push(c),l=n[++u]}a!==l?.index&&(s=Mr.nextNode(),a++)}return Mr.currentNode=Rr,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Sn{static{o(this,"R")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=mn(this,t,r),ni(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==Ye&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sw(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&ni(this._$AH)?this._$AA.nextSibling.data=t:this.T(Rr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ii.createElement(e0(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new lw(i,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=Ql.get(t.strings);return r===void 0&&Ql.set(t.strings,r=new ii(t)),r}k(t){wu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new Sn(this.O(ri()),this.O(ri()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Qs{static{o(this,"k")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(t,r=this,n,i){const s=this.strings;let a=!1;if(s===void 0)t=mn(this,t,r,0),a=!ni(t)||t!==this._$AH&&t!==Ye,a&&(this._$AH=t);else{const u=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=mn(this,u[n+l],r,l),c===Ye&&(c=this._$AH[l]),a||=!ni(c)||c!==this._$AH[l],c===H?t=H:t!==H&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class cw extends Qs{static{o(this,"H")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class dw extends Qs{static{o(this,"I")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class fw extends Qs{static{o(this,"L")}constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=mn(this,t,r,0)??H)===Ye)return;const n=this._$AH,i=t===H&&n!==H||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==H&&(n===H||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class hw{static{o(this,"z")}constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){mn(this,t)}}const mw={I:Sn},pw=yu.litHtmlPolyfillSupport;pw?.(ii,Sn),(yu.litHtmlVersions??=[]).push("3.3.0");const gw=o((e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new Sn(t.insertBefore(ri(),s),s,void 0,r??{})}return i._$AI(e),i},"B");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vu=globalThis;let Jn=class extends Yr{static{o(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gw(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ye}};Jn._$litElement$=!0,Jn.finalized=!0,vu.litElementHydrateSupport?.({LitElement:Jn});const yw=vu.litElementPolyfillSupport;yw?.({LitElement:Jn});(vu.litElementVersions??=[]).push("4.2.0");function wr(e){if(v.isObject(e))return he(e,(r,n)=>{if(!v.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(R1(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,a=r.startsWith("--")?dt(r):r.startsWith("-")?is`-${dt(r)}`:is`--${dt(r)}`;return{name:a,value:is`var(${a}, ${dt(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${wr.name}' function.`)}o(wr,"defineCssVars");function ww({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}o(ww,"setCssVarValue");const X=wr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),vw={nav:{hover:{background:X["element-book-nav-hover-background-color"],foreground:X["element-book-nav-hover-foreground-color"]},active:{background:X["element-book-nav-active-background-color"],foreground:X["element-book-nav-active-foreground-color"]},selected:{background:X["element-book-nav-selected-background-color"],foreground:X["element-book-nav-selected-foreground-color"]}},accent:{icon:X["element-book-accent-icon-color"]},page:{background:X["element-book-page-background-color"],backgroundFaint1:X["element-book-page-background-faint-level-1-color"],backgroundFaint2:X["element-book-page-background-faint-level-2-color"],foreground:X["element-book-page-foreground-color"],foregroundFaint1:X["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:X["element-book-page-foreground-faint-level-2-color"]}};function bw(e,t){t0(e,t,vw)}o(bw,"setThemeCssVars");function Na(e){return v.hasKey(e,"_$cssResult$")}o(Na,"isCssResult");function ec(e){return v.hasKeys(e,["name","value","default"])&&v.isString(e.default)&&Na(e.name)&&Na(e.value)}o(ec,"isCssVarDefinition");function t0(e,t,r){Object.entries(t).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Na(i)){if(!ec(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);ww({forCssVar:s,onElement:e,toValue:String(i)})}else{if(ec(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);t0(e,i,s)}})}o(t0,"recursiveSetThemeCssVars");function de(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,i=t[0].map((a,u)=>t.map(l=>l[u])),s=e.map(a=>i.map(u=>{let l=0;if(!Array.isArray(a)){for(let c of u)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(u[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(a=>a[0]):s}o(de,"multiplyMatrices");function wi(e){return dr(e)==="string"}o(wi,"isString");function dr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}o(dr,"type");function Ss(e,{precision:t,unit:r}){return hr(e)?"none":r0(e,t)+(r??"")}o(Ss,"serializeNumber");function hr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}o(hr,"isNone");function be(e){return hr(e)?0:e}o(be,"skipNone");function r0(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}o(r0,"toPrecision");const Dw={deg:1,grad:.9,rad:180/Math.PI,turn:360};function n0(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let a=[];return s[2].replace(i,(u,l)=>{let c=l.match(n),d=l;if(c){let f=c[0],p=d.slice(0,-f.length);f==="%"?(d=new Number(p/100),d.type="<percentage>"):(d=new Number(p*Dw[f]),d.type="<angle>",d.unit=f)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);u.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),a.push(d)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:a}}}o(n0,"parseFunction");function i0(e){return e[e.length-1]}o(i0,"last");function si(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}o(si,"interpolate");function s0(e,t,r){return(r-e)/(t-e)}o(s0,"interpolateInv");function bu(e,t,r){return si(t[0],t[1],s0(e[0],e[1],r))}o(bu,"mapRange");function o0(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}o(o0,"parseCoordGrammar");function a0(e,t,r){return Math.max(Math.min(r,t),e)}o(a0,"clamp");function eo(e,t){return Math.sign(e)===Math.sign(t)?e:-e}o(eo,"copySign");function xt(e,t){return eo(Math.abs(e)**t,e)}o(xt,"spow");function Du(e,t){return t===0?0:e/t}o(Du,"zdiv");function u0(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}o(u0,"bisectLeft");var Aw=Object.freeze({__proto__:null,bisectLeft:u0,clamp:a0,copySign:eo,interpolate:si,interpolateInv:s0,isNone:hr,isString:wi,last:i0,mapRange:bu,multiplyMatrices:de,parseCoordGrammar:o0,parseFunction:n0,serializeNumber:Ss,skipNone:be,spow:xt,toPrecision:r0,type:dr,zdiv:Du});class Ew{static{o(this,"Hooks")}add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const mr=new Ew;var it={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:o(function(t){this.verbose&&globalThis?.console?.warn?.(t)},"warn")};const Ve={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ma(e){return Array.isArray(e)?e:Ve[e]}o(Ma,"getWhite");function xs(e,t,r,n={}){if(e=Ma(e),t=Ma(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(mr.run("chromatic-adaptation-start",i),i.M||(i.W1===Ve.D65&&i.W2===Ve.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Ve.D50&&i.W2===Ve.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),mr.run("chromatic-adaptation-end",i),i.M)return de(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}o(xs,"adapt$2");const Cw=new Set(["<number>","<percentage>","<angle>"]);function tc(e,t,r,n){return Object.entries(e.coords).map(([s,a],u)=>{let l=t.coordGrammar[u],c=n[u],d=c?.type,f;if(c.none?f=l.find(y=>Cw.has(y)):f=l.find(y=>y==d),!f){let y=a.name||s;throw new TypeError(`${d??c.raw} not allowed for ${y} in ${r}()`)}let p=f.range;d==="<percentage>"&&(p||=[0,1]);let g=a.range||a.refRange;return p&&g&&(n[u]=bu(p,g,n[u])),f})}o(tc,"coerceCoords");function l0(e,{meta:t}={}){let r={str:String(e)?.trim()};if(mr.run("parse-start",r),r.color)return r.color;if(r.parsed=n0(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,a=[i,s],u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let d of M.all){let f=d.getFormat("color");if(f&&(a.includes(f.id)||f.ids?.filter(p=>a.includes(p)).length)){const p=Object.keys(d.coords).map((y,b)=>r.parsed.args[b]||0);let g;return f.coordGrammar&&(g=tc(d,f,"color",p)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!i.startsWith("--")&&it.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&it.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:d.id,coords:p,alpha:u}}}let l="",c=i in M.registry?i:s;if(c in M.registry){let d=M.registry[c].formats?.color?.id;d&&(l=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${i}). `+(l||"Missing a plugin?"))}else for(let i of M.all){let s=i.getFormat(n);if(s&&s.type==="function"){let a=1;(s.lastAlpha||i0(r.parsed.args).alpha)&&(a=r.parsed.args.pop());let u=r.parsed.args,l;return s.coordGrammar&&(l=tc(i,s,n,u)),t&&Object.assign(t,{formatId:s.name,types:l}),{spaceId:i.id,coords:u,alpha:a}}}}else for(let n of M.all)for(let i in n.formats){let s=n.formats[i];if(s.type!=="custom"||s.test&&!s.test(r.str))continue;let a=s.parse(r.str);if(a)return a.alpha??=1,t&&(t.formatId=i),a}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}o(l0,"parse");function W(e){if(Array.isArray(e))return e.map(W);if(!e)throw new TypeError("Empty color reference");wi(e)&&(e=l0(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}o(W,"getColor");const $w=75e-6;class M{static{o(this,"ColorSpace")}constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?M.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ma(n),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:M.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:kw(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),mr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=$w}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(i))return!0;let[u,l]=a.range;return(u===void 0||i>=u-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=rc(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=rc(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const u=W(t);[t,r]=[u.space,u.coords]}if(t=M.get(t),this.equals(t))return r;r=r.map(u=>Number.isNaN(u)?0:u);let n=this.path,i=t.path,s,a;for(let u=0;u<n.length&&n[u].equals(i[u]);u++)s=n[u],a=u;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=n.length-1;u>a;u--)r=n[u].toBase(r);for(let u=a+1;u<i.length;u++)r=i[u].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=W(t);[t,r]=[n.space,n.coords]}return t=M.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(M.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof M)return t;if(dr(t)==="string"){let i=M.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return M.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=dr(t),i,s;if(n==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=M.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=dr(s),n==="number"||n==="string"&&s>=0){let l=Object.entries(i.coords)[s];if(l)return{space:i,id:l[0],index:s,...l[1]}}i=M.get(i);let a=s.toLowerCase(),u=0;for(let l in i.coords){let c=i.coords[l];if(l.toLowerCase()===a||c.name?.toLowerCase()===a)return{space:i,id:l,index:u,...c};u++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function kw(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}o(kw,"getPath");function rc(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=o0(e.coords);let r=Object.entries(t).map(([n,i],s)=>{let a=e.coordGrammar[s][0],u=i.range||i.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:u,toRange:l,suffix:c}});e.serializeCoords=(n,i)=>n.map((s,a)=>{let{fromRange:u,toRange:l,suffix:c}=r[a];return u&&l&&(s=bu(u,l,s)),s=Ss(s,{precision:i,unit:c}),s})}return e}o(rc,"processFormat");var Se=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Je extends M{static{o(this,"RGBColorSpace")}constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Se),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=de(t.toXYZ_M,r);return this.white!==this.base.white&&(n=xs(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=xs(this.base.white,this.white,r),de(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function vi(e,t){return e=W(e),!t||e.space.equals(t)?e.coords.slice():(t=M.get(t),t.from(e))}o(vi,"getAll");function tt(e,t){e=W(e);let{space:r,index:n}=M.resolveCoord(t,e.space);return vi(e,r)[n]}o(tt,"get");function Au(e,t,r){return e=W(e),t=M.get(t),e.coords=t.to(e.space,r),e}o(Au,"setAll");Au.returns="color";function Jt(e,t,r){if(e=W(e),arguments.length===2&&dr(arguments[1])==="object"){let n=arguments[1];for(let i in n)Jt(e,i,n[i])}else{typeof r=="function"&&(r=r(tt(e,t)));let{space:n,index:i}=M.resolveCoord(t,e.space),s=vi(e,n);s[i]=r,Au(e,n,s)}return e}o(Jt,"set");Jt.returns="color";var Eu=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Se,fromBase:o(e=>xs(Se.white,"D50",e),"fromBase"),toBase:o(e=>xs("D50",Se.white,e),"toBase")});const Sw=216/24389,nc=24/116,Ii=24389/27;let jo=Ve.D50;var rt=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:jo,base:Eu,fromBase(e){let r=e.map((n,i)=>n/jo[i]).map(n=>n>Sw?Math.cbrt(n):(Ii*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>nc?Math.pow(t[0],3):(116*t[0]-16)/Ii,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ii,t[2]>nc?Math.pow(t[2],3):(116*t[2]-16)/Ii].map((n,i)=>n*jo[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Tt(e){return(e%360+360)%360}o(Tt,"constrain");function xw(e,t){if(e==="raw")return t;let[r,n]=t.map(Tt),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}o(xw,"adjust");var oi=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:rt,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Tt(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ic=25**7,Fs=Math.PI,sc=180/Fs,zr=Fs/180;function oc(e){const t=e*e;return t*t*t*e}o(oc,"pow7");function c0(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=W([e,t]);let[s,a,u]=rt.from(e),l=oi.from(rt,[s,a,u])[1],[c,d,f]=rt.from(t),p=oi.from(rt,[c,d,f])[1];l<0&&(l=0),p<0&&(p=0);let g=(l+p)/2,y=oc(g),b=.5*(1-Math.sqrt(y/(y+ic))),$=(1+b)*a,A=(1+b)*d,x=Math.sqrt($**2+u**2),B=Math.sqrt(A**2+f**2),R=$===0&&u===0?0:Math.atan2(u,$),G=A===0&&f===0?0:Math.atan2(f,A);R<0&&(R+=2*Fs),G<0&&(G+=2*Fs),R*=sc,G*=sc;let Pe=c-s,gt=B-x,Ue=G-R,Xe=R+G,kt=Math.abs(Ue),It;x*B===0?It=0:kt<=180?It=Ue:Ue>180?It=Ue-360:Ue<-180?It=Ue+360:it.warn("the unthinkable has happened");let Si=2*Math.sqrt(B*x)*Math.sin(It*zr/2),Zm=(s+c)/2,vo=(x+B)/2,Ku=oc(vo),Lt;x*B===0?Lt=Xe:kt<=180?Lt=Xe/2:Xe<360?Lt=(Xe+360)/2:Lt=(Xe-360)/2;let Gu=(Zm-50)**2,Hm=1+.015*Gu/Math.sqrt(20+Gu),Zu=1+.045*vo,Fn=1;Fn-=.17*Math.cos((Lt-30)*zr),Fn+=.24*Math.cos(2*Lt*zr),Fn+=.32*Math.cos((3*Lt+6)*zr),Fn-=.2*Math.cos((4*Lt-63)*zr);let Hu=1+.015*vo*Fn,Ym=30*Math.exp(-1*((Lt-275)/25)**2),Jm=2*Math.sqrt(Ku/(Ku+ic)),Xm=-1*Math.sin(2*Ym*zr)*Jm,xi=(Pe/(r*Hm))**2;return xi+=(gt/(n*Zu))**2,xi+=(Si/(i*Hu))**2,xi+=Xm*(gt/(n*Zu))*(Si/(i*Hu)),Math.sqrt(xi)}o(c0,"deltaE2000");const Fw=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Nw=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Mw=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Tw=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var pn=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Se,fromBase(e){let r=de(Fw,e).map(n=>Math.cbrt(n));return de(Mw,r)},toBase(e){let r=de(Tw,e).map(n=>n**3);return de(Nw,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ta(e,t){[e,t]=W([e,t]);let[r,n,i]=pn.from(e),[s,a,u]=pn.from(t),l=r-s,c=n-a,d=i-u;return Math.sqrt(l**2+c**2+d**2)}o(Ta,"deltaEOK");const Bw=75e-6;function Br(e,t,{epsilon:r=Bw}={}){e=W(e),t||(t=e.space),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}o(Br,"inGamut");function gn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}o(gn,"clone");function d0(e,t,r="lab"){r=M.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((s,a,u)=>{let l=i[u];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}o(d0,"distance");function Pw(e,t){return d0(e,t,"lab")}o(Pw,"deltaE76");const Iw=Math.PI,ac=Iw/180;function Lw(e,t,{l:r=2,c:n=1}={}){[e,t]=W([e,t]);let[i,s,a]=rt.from(e),[,u,l]=oi.from(rt,[i,s,a]),[c,d,f]=rt.from(t),p=oi.from(rt,[c,d,f])[1];u<0&&(u=0),p<0&&(p=0);let g=i-c,y=u-p,b=s-d,$=a-f,A=b**2+$**2-y**2,x=.511;i>=16&&(x=.040975*i/(1+.01765*i));let B=.0638*u/(1+.0131*u)+.638,R;Number.isNaN(l)&&(l=0),l>=164&&l<=345?R=.56+Math.abs(.2*Math.cos((l+168)*ac)):R=.36+Math.abs(.4*Math.cos((l+35)*ac));let G=Math.pow(u,4),Pe=Math.sqrt(G/(G+1900)),gt=B*(Pe*R+1-Pe),Ue=(g/(r*x))**2;return Ue+=(y/(n*B))**2,Ue+=A/gt**2,Math.sqrt(Ue)}o(Lw,"deltaECMC");const uc=203;var Cu=new M({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Se,fromBase(e){return e.map(t=>Math.max(t*uc,0))},toBase(e){return e.map(t=>Math.max(t/uc,0))}});const Li=1.15,Ri=.66,lc=2610/2**14,Rw=2**14/2610,cc=3424/2**12,dc=2413/2**7,fc=2392/2**7,Ow=1.7*2523/2**5,hc=2**5/(1.7*2523),Oi=-.56,qo=16295499532821565e-27,_w=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Vw=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Uw=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Ww=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var f0=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Cu,fromBase(e){let[t,r,n]=e,i=Li*t-(Li-1)*n,s=Ri*r-(Ri-1)*t,u=de(_w,[i,s,n]).map(function(p){let g=cc+dc*(p/1e4)**lc,y=1+fc*(p/1e4)**lc;return(g/y)**Ow}),[l,c,d]=de(Uw,u);return[(1+Oi)*l/(1+Oi*l)-qo,c,d]},toBase(e){let[t,r,n]=e,i=(t+qo)/(1+Oi-Oi*(t+qo)),a=de(Ww,[i,r,n]).map(function(p){let g=cc-p**hc,y=fc*p**hc-dc;return 1e4*(g/y)**Rw}),[u,l,c]=de(Vw,a),d=(u+(Li-1)*c)/Li,f=(l+(Ri-1)*d)/Ri;return[d,f,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ba=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:f0,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Tt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function jw(e,t){[e,t]=W([e,t]);let[r,n,i]=Ba.from(e),[s,a,u]=Ba.from(t),l=r-s,c=n-a;Number.isNaN(i)&&Number.isNaN(u)?(i=0,u=0):Number.isNaN(i)?i=u:Number.isNaN(u)&&(u=i);let d=i-u,f=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}o(jw,"deltaEJz");const h0=3424/4096,m0=2413/128,p0=2392/128,mc=2610/16384,qw=2523/32,zw=16384/2610,pc=32/2523,Kw=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Gw=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Zw=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Hw=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Pa=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Cu,fromBase(e){let t=de(Kw,e);return Yw(t)},toBase(e){let t=Jw(e);return de(Hw,t)}});function Yw(e){let t=e.map(function(r){let n=h0+m0*(r/1e4)**mc,i=1+p0*(r/1e4)**mc;return(n/i)**qw});return de(Gw,t)}o(Yw,"LMStoICtCp");function Jw(e){return de(Zw,e).map(function(n){let i=Math.max(n**pc-h0,0),s=m0-p0*n**pc;return 1e4*(i/s)**zw})}o(Jw,"ICtCptoLMS");function Xw(e,t){[e,t]=W([e,t]);let[r,n,i]=Pa.from(e),[s,a,u]=Pa.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(i-u)**2)}o(Xw,"deltaEITP");const Qw=Ve.D65,g0=.42,gc=1/g0,zo=2*Math.PI,y0=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],ev=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],tv=[[460,451,288],[460,-891,-261],[460,-220,-6300]],rv={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Fr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},nv=180/Math.PI,yc=Math.PI/180;function w0(e,t){return e.map(n=>{const i=xt(t*Math.abs(n)*.01,g0);return 400*eo(i,n)/(i+27.13)})}o(w0,"adapt$1");function iv(e,t){const r=100/t*27.13**gc;return e.map(n=>{const i=Math.abs(n);return eo(r*xt(i/(400-i),gc),n)})}o(iv,"unadapt");function sv(e){let t=Tt(e);t<=Fr.h[0]&&(t+=360);const r=u0(Fr.h,t)-1,[n,i]=Fr.h.slice(r,r+2),[s,a]=Fr.e.slice(r,r+2),u=Fr.H[r],l=(t-n)/s;return u+100*l/(l+(i-t)/a)}o(sv,"hueQuadrature");function ov(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Fr.h.slice(r,r+2),[s,a]=Fr.e.slice(r,r+2);return Tt((t*(a*n-s*i)-100*n*a)/(t*(a-s)-100*a))}o(ov,"invHueQuadrature");function v0(e,t,r,n,i){const s={};s.discounting=i,s.refWhite=e,s.surround=n;const a=e.map(b=>b*100);s.la=t,s.yb=r;const u=a[1],l=de(y0,a);n=rv[s.surround];const c=n[0];s.c=n[1],s.nc=n[2];const f=(1/(5*s.la+1))**4;s.fl=f*s.la+.1*(1-f)*(1-f)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/u,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const p=Math.max(Math.min(c*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=l.map(b=>si(1,u/b,p)),s.dRgbInv=s.dRgb.map(b=>1/b);const g=l.map((b,$)=>b*s.dRgb[$]),y=w0(g,s.fl);return s.aW=s.nbb*(2*y[0]+y[1]+.05*y[2]),s}o(v0,"environment");const wc=v0(Qw,64/Math.PI*.2,20,"average",!1);function Ia(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Tt(e.h)*yc:r=ov(e.H)*yc;const n=Math.cos(r),i=Math.sin(r);let s=0;e.J!==void 0?s=xt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let a=0;e.C!==void 0?a=e.C/s:e.M!==void 0?a=e.M/t.flRoot/s:e.s!==void 0&&(a=4e-4*e.s**2*(t.aW+4)/t.c);const u=xt(a*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=t.aW*xt(s,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,f=c/t.nbb,p=23*(f+.305)*Du(u,23*d+u*(11*n+108*i)),g=p*n,y=p*i,b=iv(de(tv,[f,g,y]).map($=>$*1/1403),t.fl);return de(ev,b.map(($,A)=>$*t.dRgbInv[A])).map($=>$/100)}o(Ia,"fromCam16");function b0(e,t){const r=e.map(B=>B*100),n=w0(de(y0,r).map((B,R)=>B*t.dRgb[R]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(s,i)%zo+zo)%zo,u=.25*(Math.cos(a+2)+3.8),l=5e4/13*t.nc*t.ncb*Du(u*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),c=xt(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=xt(d/t.aW,.5*t.c*t.z),p=100*xt(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,y=c*f,b=y*t.flRoot,$=Tt(a*nv),A=sv($),x=50*xt(t.c*c/(t.aW+4),1/2);return{J:p,C:y,h:$,s:x,Q:g,M:b,H:A}}o(b0,"toCam16");var av=new M({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Se,fromBase(e){const t=b0(e,wc);return[t.J,t.M,t.h]},toBase(e){return Ia({J:e[0],M:e[1],h:e[2]},wc)}});const uv=Ve.D65,lv=216/24389,D0=24389/27;function cv(e){return 116*(e>lv?Math.cbrt(e):(D0*e+16)/116)-16}o(cv,"toLstar");function La(e){return e>8?Math.pow((e+16)/116,3):e/D0}o(La,"fromLstar");function dv(e,t){let[r,n,i]=e,s=[],a=0;if(i===0)return[0,0,0];let u=La(i);i>0?a=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:a=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,f=1/0;for(;d<=c;){s=Ia({J:a,C:n,h:r},t);const p=Math.abs(s[1]-u);if(p<f){if(p<=l)return s;f=p}a=a-(s[1]-u)*a/(2*s[1]),d+=1}return Ia({J:a,C:n,h:r},t)}o(dv,"fromHct");function fv(e,t){const r=cv(e[1]);if(r===0)return[0,0,0];const n=b0(e,$u);return[Tt(n.h),n.C,r]}o(fv,"toHct");const $u=v0(uv,200/Math.PI*La(50),La(50)*100,"average",!1);var ai=new M({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Se,fromBase(e){return fv(e)},toBase(e){return dv(e,$u)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const hv=Math.PI/180,vc=[1,.007,.0228];function bc(e){e[1]<0&&(e=ai.fromBase(ai.toBase(e)));const t=Math.log(Math.max(1+vc[2]*e[1]*$u.flRoot,1))/vc[2],r=e[0]*hv,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}o(bc,"convertUcsAb");function mv(e,t){[e,t]=W([e,t]);let[r,n,i]=bc(ai.from(e)),[s,a,u]=bc(ai.from(t));return Math.sqrt((r-s)**2+(n-a)**2+(i-u)**2)}o(mv,"deltaEHCT");var yn={deltaE76:Pw,deltaECMC:Lw,deltaE2000:c0,deltaEJz:jw,deltaEITP:Xw,deltaEOK:Ta,deltaEHCT:mv};function pv(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}o(pv,"calcEpsilon");const Dc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function pr(e,{method:t=it.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=W(e),wi(arguments[1])?r=arguments[1]:r||(r=e.space),r=M.get(r),Br(e,r,{epsilon:0}))return e;let a;if(t==="css")a=gv(e,{space:r});else{if(t!=="clip"&&!Br(e,r)){Object.prototype.hasOwnProperty.call(Dc,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=Dc[t]);let u=c0;if(n!==""){for(let c in yn)if("deltae"+n.toLowerCase()===c.toLowerCase()){u=yn[c];break}}let l=pr(ce(e,r),{method:"clip",space:r});if(u(e,l)>i){if(Object.keys(s).length===3){let x=M.resolveCoord(s.channel),B=tt(ce(e,x.space),x.id);if(hr(B)&&(B=0),B>=s.max)return ce({space:"xyz-d65",coords:Ve.D65},e.space);if(B<=s.min)return ce({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=M.resolveCoord(t),d=c.space,f=c.id,p=ce(e,d);p.coords.forEach((x,B)=>{hr(x)&&(p.coords[B]=0)});let y=(c.range||c.refRange)[0],b=pv(i),$=y,A=tt(p,f);for(;A-$>b;){let x=gn(p);x=pr(x,{space:r,method:"clip"}),u(p,x)-i<b?$=tt(p,f):A=tt(p,f),Jt(p,f,($+A)/2)}a=ce(p,r)}else a=l}else a=ce(e,r);if(t==="clip"||!Br(a,r,{epsilon:0})){let u=Object.values(r.coords).map(l=>l.range||[]);a.coords=a.coords.map((l,c)=>{let[d,f]=u[c];return d!==void 0&&(l=Math.max(d,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return r!==e.space&&(a=ce(a,e.space)),e.coords=a.coords,e}o(pr,"toGamut");pr.returns="color";const Ac={WHITE:{space:pn,coords:[1,0,0]},BLACK:{space:pn,coords:[0,0,0]}};function gv(e,{space:t}={}){e=W(e),t||(t=e.space),t=M.get(t);const i=M.get("oklch");if(t.isUnbounded)return ce(e,t);const s=ce(e,i);let a=s.coords[0];if(a>=1){const y=ce(Ac.WHITE,t);return y.alpha=e.alpha,ce(y,t)}if(a<=0){const y=ce(Ac.BLACK,t);return y.alpha=e.alpha,ce(y,t)}if(Br(s,t,{epsilon:0}))return ce(s,t);function u(y){const b=ce(y,t),$=Object.values(t.coords);return b.coords=b.coords.map((A,x)=>{if("range"in $[x]){const[B,R]=$[x].range;return a0(B,A,R)}return A}),b}o(u,"clip");let l=0,c=s.coords[1],d=!0,f=gn(s),p=u(f),g=Ta(p,f);if(g<.02)return p;for(;c-l>1e-4;){const y=(l+c)/2;if(f.coords[1]=y,d&&Br(f,t,{epsilon:0}))l=y;else if(p=u(f),g=Ta(p,f),g<.02){if(.02-g<1e-4)break;d=!1,l=y}else c=y}return p}o(gv,"toGamutCSS");function ce(e,t,{inGamut:r}={}){e=W(e),t=M.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=pr(i,r===!0?void 0:r)),i}o(ce,"to");ce.returns="color";function Xn(e,{precision:t=it.precision,format:r="default",inGamut:n=!0,...i}={}){let s;e=W(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT;let u=e.coords.slice();if(n||=r.toGamut,n&&!Br(e)&&(u=pr(gn(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)s=r.serialize(u,e.alpha,i);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let l=r.name||"color";r.serializeCoords?u=r.serializeCoords(u,t):t!==null&&(u=u.map(p=>Ss(p,{precision:t})));let c=[...u];if(l==="color"){let p=r.id||r.ids?.[0]||e.space.id;c.unshift(p)}let d=e.alpha;t!==null&&(d=Ss(d,{precision:t}));let f=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${d}`;s=`${l}(${c.join(r.commas?", ":" ")}${f})`}return s}o(Xn,"serialize");const yv=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],wv=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var to=new Je({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:yv,fromXYZ_M:wv});const _i=1.09929682680944,Ec=.018053968510807;var A0=new Je({id:"rec2020",name:"REC.2020",base:to,toBase(e){return e.map(function(t){return t<Ec*4.5?t/4.5:Math.pow((t+_i-1)/_i,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ec?_i*Math.pow(t,.45)-(_i-1):4.5*t})}});const vv=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],bv=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var E0=new Je({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:vv,fromXYZ_M:bv});const Dv=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ee=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var C0=new Je({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Dv,fromXYZ_M:Ee}),Cc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let $c=Array(3).fill("<percentage> | <number>[0, 255]"),kc=Array(3).fill("<number>[0, 255]");var wn=new Je({id:"srgb",name:"sRGB",base:C0,fromBase:o(e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),"fromBase"),toBase:o(e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:$c},rgb_number:{name:"rgb",commas:!0,coords:kc,noAlpha:!0},color:{},rgba:{coords:$c,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:kc},hex:{type:"custom",toGamut:!0,test:o(e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:o((e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:o(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Cc.black,t.alpha=0):t.coords=Cc[e],t.coords)return t}}}}),$0=new Je({id:"p3",cssId:"display-p3",name:"P3",base:E0,fromBase:wn.fromBase,toBase:wn.toBase});it.display_space=wn;let Av;if(typeof CSS<"u"&&CSS.supports)for(let e of[rt,A0,$0]){let t=e.getMinCoords(),n=Xn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){it.display_space=e;break}}function Ev(e,{space:t=it.display_space,...r}={}){let n=Xn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!it.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(hr)||hr(e.alpha))&&!(Av??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=gn(e),i.coords=i.coords.map(be),i.alpha=be(i.alpha),n=Xn(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=ce(i,t),n=new String(Xn(i,r)),n.color=i}return n}o(Ev,"display");function Cv(e,t){return e=W(e),t=W(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}o(Cv,"equals");function gr(e){return tt(e,[Se,"y"])}o(gr,"getLuminance");function k0(e,t){Jt(e,[Se,"y"],t)}o(k0,"setLuminance");function $v(e){Object.defineProperty(e.prototype,"luminance",{get(){return gr(this)},set(t){k0(this,t)}})}o($v,"register$2");var kv=Object.freeze({__proto__:null,getLuminance:gr,register:$v,setLuminance:k0});function Sv(e,t){e=W(e),t=W(t);let r=Math.max(gr(e),0),n=Math.max(gr(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}o(Sv,"contrastWCAG21");const xv=.56,Fv=.57,Nv=.62,Mv=.65,Sc=.022,Tv=1.414,Bv=.1,Pv=5e-4,Iv=1.14,xc=.027,Lv=1.14;function Fc(e){return e>=Sc?e:e+(Sc-e)**Tv}o(Fc,"fclamp");function Kr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}o(Kr,"linearize");function Rv(e,t){t=W(t),e=W(e);let r,n,i,s,a,u;t=ce(t,"srgb"),[s,a,u]=t.coords;let l=Kr(s)*.2126729+Kr(a)*.7151522+Kr(u)*.072175;e=ce(e,"srgb"),[s,a,u]=e.coords;let c=Kr(s)*.2126729+Kr(a)*.7151522+Kr(u)*.072175,d=Fc(l),f=Fc(c),p=f>d;return Math.abs(f-d)<Pv?n=0:p?(r=f**xv-d**Fv,n=r*Iv):(r=f**Mv-d**Nv,n=r*Lv),Math.abs(n)<Bv?i=0:n>0?i=n-xc:i=n+xc,i*100}o(Rv,"contrastAPCA");function Ov(e,t){e=W(e),t=W(t);let r=Math.max(gr(e),0),n=Math.max(gr(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}o(Ov,"contrastMichelson");const _v=5e4;function Vv(e,t){e=W(e),t=W(t);let r=Math.max(gr(e),0),n=Math.max(gr(t),0);return n>r&&([r,n]=[n,r]),n===0?_v:(r-n)/n}o(Vv,"contrastWeber");function Uv(e,t){e=W(e),t=W(t);let r=tt(e,[rt,"l"]),n=tt(t,[rt,"l"]);return Math.abs(r-n)}o(Uv,"contrastLstar");const Wv=216/24389,Nc=24/116,Vi=24389/27;let Ko=Ve.D65;var Ra=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ko,base:Se,fromBase(e){let r=e.map((n,i)=>n/Ko[i]).map(n=>n>Wv?Math.cbrt(n):(Vi*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Nc?Math.pow(t[0],3):(116*t[0]-16)/Vi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Vi,t[2]>Nc?Math.pow(t[2],3):(116*t[2]-16)/Vi].map((n,i)=>n*Ko[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Go=Math.pow(5,.5)*.5+.5;function jv(e,t){e=W(e),t=W(t);let r=tt(e,[Ra,"l"]),n=tt(t,[Ra,"l"]),i=Math.abs(Math.pow(r,Go)-Math.pow(n,Go)),s=Math.pow(i,1/Go)*Math.SQRT2-40;return s<7.5?0:s}o(jv,"contrastDeltaPhi");var ss=Object.freeze({__proto__:null,contrastAPCA:Rv,contrastDeltaPhi:jv,contrastLstar:Uv,contrastMichelson:Ov,contrastWCAG21:Sv,contrastWeber:Vv});function qv(e,t,r={}){wi(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(ss).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=W(e),t=W(t);for(let s in ss)if("contrast"+n.toLowerCase()===s.toLowerCase())return ss[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}o(qv,"contrast");function ro(e){let[t,r,n]=vi(e,Se),i=t+15*r+3*n;return[4*t/i,9*r/i]}o(ro,"uv");function S0(e){let[t,r,n]=vi(e,Se),i=t+r+n;return[t/i,r/i]}o(S0,"xy");function zv(e){Object.defineProperty(e.prototype,"uv",{get(){return ro(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return S0(this)}})}o(zv,"register$1");var Kv=Object.freeze({__proto__:null,register:zv,uv:ro,xy:S0});function zn(e,t,r={}){wi(r)&&(r={method:r});let{method:n=it.deltaE,...i}=r;for(let s in yn)if("deltae"+n.toLowerCase()===s.toLowerCase())return yn[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}o(zn,"deltaE");function Gv(e,t=.25){let n=[M.get("oklch","lch"),"l"];return Jt(e,n,i=>i*(1+t))}o(Gv,"lighten");function Zv(e,t=.25){let n=[M.get("oklch","lch"),"l"];return Jt(e,n,i=>i*(1-t))}o(Zv,"darken");var Hv=Object.freeze({__proto__:null,darken:Zv,lighten:Gv});function x0(e,t,r=.5,n={}){return[e,t]=[W(e),W(t)],dr(r)==="object"&&([r,n]=[.5,r]),bi(e,t,n)(r)}o(x0,"mix");function F0(e,t,r={}){let n;ku(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:a=2,maxSteps:u=1e3,...l}=r;n||([e,t]=[W(e),W(t)],n=bi(e,t,l));let c=zn(e,t),d=i>0?Math.max(a,Math.ceil(c/i)+1):a,f=[];if(u!==void 0&&(d=Math.min(d,u)),d===1)f=[{p:.5,color:n(.5)}];else{let p=1/(d-1);f=Array.from({length:d},(g,y)=>{let b=y*p;return{p:b,color:n(b)}})}if(i>0){let p=f.reduce((g,y,b)=>{if(b===0)return 0;let $=zn(y.color,f[b-1].color,s);return Math.max(g,$)},0);for(;p>i;){p=0;for(let g=1;g<f.length&&f.length<u;g++){let y=f[g-1],b=f[g],$=(b.p+y.p)/2,A=n($);p=Math.max(p,zn(A,y.color),zn(A,b.color)),f.splice(g,0,{p:$,color:n($)}),g++}}}return f=f.map(p=>p.color),f}o(F0,"steps");function bi(e,t,r={}){if(ku(e)){let[l,c]=[e,t];return bi(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:i,progression:s,premultiplied:a}=r;e=W(e),t=W(t),e=gn(e),t=gn(t);let u={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[it.interpolationSpace]||e.space,i=i?M.get(i):n,e=ce(e,n),t=ce(t,n),e=pr(e),t=pr(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[tt(e,c),tt(t,c)];isNaN(d)&&!isNaN(f)?d=f:isNaN(f)&&!isNaN(d)&&(f=d),[d,f]=xw(l,[d,f]),Jt(e,c,d),Jt(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((p,g)=>{let y=t.coords[g];return si(p,y,l)}),d=si(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return a&&(f.coords=f.coords.map(p=>p/d)),i!==n&&(f=ce(f,i)),f},{rangeArgs:u})}o(bi,"range");function ku(e){return dr(e)==="function"&&!!e.rangeArgs}o(ku,"isRange");it.interpolationSpace="lab";function Yv(e){e.defineFunction("mix",x0,{returns:"color"}),e.defineFunction("range",bi,{returns:"function<color>"}),e.defineFunction("steps",F0,{returns:"array<color>"})}o(Yv,"register");var Jv=Object.freeze({__proto__:null,isRange:ku,mix:x0,range:bi,register:Yv,steps:F0}),N0=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:wn,fromBase:o(e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,s]=e,[a,u,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(u=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(i-s)/c+(i<s?6:0);break;case i:a=(s-n)/c+2;break;case s:a=(n-i)/c+4}a=a*60}return u<0&&(a+=180,u=Math.abs(u)),a>=360&&(a-=360),[a,u*100,l*100]},"fromBase"),toBase:o(e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(s){let a=(s+t/30)%12,u=r*Math.min(n,1-n);return n-u*Math.max(-1,Math.min(a-3,9-a,1))}return o(i,"f"),[i(0),i(8),i(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),M0=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:N0,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Xv=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:M0,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let u=r/i;return[t,0,u*100]}let s=1-n,a=s===0?0:1-r/s;return[t,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Qv=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],eb=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var T0=new Je({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Qv,fromXYZ_M:eb}),tb=new Je({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:T0,toBase:o(e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),"toBase"),fromBase:o(e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),"fromBase")});const rb=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],nb=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var B0=new Je({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Eu,toXYZ_M:rb,fromXYZ_M:nb});const ib=1/512,sb=16/512;var ob=new Je({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:B0,toBase(e){return e.map(t=>t<sb?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=ib?t**(1/1.8):16*t)}}),ab=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:pn,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Tt(i)]},toBase(e){let[t,r,n]=e,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let P0=Ve.D65;const ub=216/24389,Mc=24389/27,[Tc,Bc]=ro({space:Se,coords:P0});var I0=new M({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:P0,base:Se,fromBase(e){let t=[be(e[0]),be(e[1]),be(e[2])],r=t[1],[n,i]=ro({space:Se,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=ub?Mc*r:116*Math.cbrt(r)-16;return[s,13*s*(n-Tc),13*s*(i-Bc)]},toBase(e){let[t,r,n]=e;if(t===0||hr(t))return[0,0,0];r=be(r),n=be(n);let i=r/(13*t)+Tc,s=n/(13*t)+Bc,a=t<=8?t/Mc:Math.pow((t+16)/116,3);return[a*(9*i/(4*s)),a,a*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Su=new M({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:I0,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Tt(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const lb=216/24389,cb=24389/27,Pc=Ee[0][0],Ic=Ee[0][1],Zo=Ee[0][2],Lc=Ee[1][0],Rc=Ee[1][1],Ho=Ee[1][2],Oc=Ee[2][0],_c=Ee[2][1],Yo=Ee[2][2];function Gr(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}o(Gr,"distanceFromOriginAngle");function Ns(e){const t=Math.pow(e+16,3)/1560896,r=t>lb?t:e/cb,n=r*(284517*Pc-94839*Zo),i=r*(838422*Zo+769860*Ic+731718*Pc),s=r*(632260*Zo-126452*Ic),a=r*(284517*Lc-94839*Ho),u=r*(838422*Ho+769860*Rc+731718*Lc),l=r*(632260*Ho-126452*Rc),c=r*(284517*Oc-94839*Yo),d=r*(838422*Yo+769860*_c+731718*Oc),f=r*(632260*Yo-126452*_c);return{r0s:n/s,r0i:i*e/s,r1s:n/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:a/l,g0i:u*e/l,g1s:a/(l+126452),g1i:(u-769860)*e/(l+126452),b0s:c/f,b0i:d*e/f,b1s:c/(f+126452),b1i:(d-769860)*e/(f+126452)}}o(Ns,"calculateBoundingLines");function Vc(e,t){const r=t/360*Math.PI*2,n=Gr(e.r0s,e.r0i,r),i=Gr(e.r1s,e.r1i,r),s=Gr(e.g0s,e.g0i,r),a=Gr(e.g1s,e.g1i,r),u=Gr(e.b0s,e.b0i,r),l=Gr(e.b1s,e.b1i,r);return Math.min(n,i,s,a,u,l)}o(Vc,"calcMaxChromaHsluv");var db=new M({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Su,gamutSpace:wn,fromBase(e){let[t,r,n]=[be(e[0]),be(e[1]),be(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Ns(t),a=Vc(s,n);i=r/a*100}return[n,i,t]},toBase(e){let[t,r,n]=[be(e[0]),be(e[1]),be(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Ns(n);i=Vc(s,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ee[0][0];Ee[0][1];Ee[0][2];Ee[1][0];Ee[1][1];Ee[1][2];Ee[2][0];Ee[2][1];Ee[2][2];function Zr(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}o(Zr,"distanceFromOrigin");function Uc(e){let t=Zr(e.r0s,e.r0i),r=Zr(e.r1s,e.r1i),n=Zr(e.g0s,e.g0i),i=Zr(e.g1s,e.g1i),s=Zr(e.b0s,e.b0i),a=Zr(e.b1s,e.b1i);return Math.min(t,r,n,i,s,a)}o(Uc,"calcMaxChromaHpluv");var fb=new M({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Su,gamutSpace:"self",fromBase(e){let[t,r,n]=[be(e[0]),be(e[1]),be(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Ns(t),a=Uc(s);i=r/a*100}return[n,i,t]},toBase(e){let[t,r,n]=[be(e[0]),be(e[1]),be(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Ns(n);i=Uc(s)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Wc=203,jc=2610/2**14,hb=2**14/2610,mb=2523/2**5,qc=2**5/2523,zc=3424/2**12,Kc=2413/2**7,Gc=2392/2**7;var pb=new Je({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:to,toBase(e){return e.map(function(t){return(Math.max(t**qc-zc,0)/(Kc-Gc*t**qc))**hb*1e4/Wc})},fromBase(e){return e.map(function(t){let r=Math.max(t*Wc/1e4,0),n=zc+Kc*r**jc,i=1+Gc*r**jc;return(n/i)**mb})}});const Zc=.17883277,Hc=.28466892,Yc=.55991073,Jo=3.7743;var gb=new Je({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:to,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Jo:(Math.exp((t-Yc)/Zc)+Hc)/12*Jo})},fromBase(e){return e.map(function(t){return t/=Jo,t<=1/12?Math.sqrt(3*t):Zc*Math.log(12*t-Hc)+Yc})}});const L0={};mr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=R0(e.W1,e.W2,e.options.method))});mr.add("chromatic-adaptation-end",e=>{e.M||(e.M=R0(e.W1,e.W2,e.options.method))});function no({id:e,toCone_M:t,fromCone_M:r}){L0[e]=arguments[0]}o(no,"defineCAT");function R0(e,t,r="Bradford"){let n=L0[r],[i,s,a]=de(n.toCone_M,e),[u,l,c]=de(n.toCone_M,t),d=[[u/i,0,0],[0,l/s,0],[0,0,c/a]],f=de(d,n.toCone_M);return de(n.fromCone_M,f)}o(R0,"adapt");no({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});no({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});no({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});no({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Ve,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ve.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const yb=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],wb=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var O0=new Je({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ve.ACES,toXYZ_M:yb,fromXYZ_M:wb});const Ui=2**-16,Xo=-.35828683,Wi=(Math.log2(65504)+9.72)/17.52;var vb=new Je({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Xo,Wi],name:"Red"},g:{range:[Xo,Wi],name:"Green"},b:{range:[Xo,Wi],name:"Blue"}},referred:"scene",base:O0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ui)*2:r<Wi?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ui)+9.72)/17.52:t<Ui?(Math.log2(Ui+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Jc=Object.freeze({__proto__:null,A98RGB:tb,A98RGB_Linear:T0,ACEScc:vb,ACEScg:O0,CAM16_JMh:av,HCT:ai,HPLuv:fb,HSL:N0,HSLuv:db,HSV:M0,HWB:Xv,ICTCP:Pa,JzCzHz:Ba,Jzazbz:f0,LCH:oi,LCHuv:Su,Lab:rt,Lab_D65:Ra,Luv:I0,OKLCH:ab,OKLab:pn,P3:$0,P3_Linear:E0,ProPhoto:ob,ProPhoto_Linear:B0,REC_2020:A0,REC_2020_Linear:to,REC_2100_HLG:gb,REC_2100_PQ:pb,XYZ_ABS_D65:Cu,XYZ_D50:Eu,XYZ_D65:Se,sRGB:wn,sRGB_Linear:C0});class q{static{o(this,"Color")}constructor(...t){let r;t.length===1&&(r=W(t[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:o(()=>this.get(a),"get"),set:o(u=>this.set(a,u),"set")})}get spaceId(){return this.space.id}clone(){return new q(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Ev(this,...t);return r.color=new q(r.color),r}static get(t,...r){return t instanceof q?t:new q(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:s}=n,a=o(function(...u){let l=r(...u);if(s==="color")l=q.get(l);else if(s==="function<color>"){let c=l;l=o(function(...d){let f=c(...d);return q.get(f)},"ret"),Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>q.get(c)));return l},"func");t in q||(q[t]=a),i&&(q.prototype[t]=function(...u){return a(this,...u)})}static defineFunctions(t){for(let r in t)q.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(q);else for(let r in t)q.defineFunction(r,t[r])}}q.defineFunctions({get:tt,getAll:vi,set:Jt,setAll:Au,to:ce,equals:Cv,inGamut:Br,toGamut:pr,distance:d0,toString:Xn});Object.assign(q,{util:Aw,hooks:mr,WHITES:Ve,Space:M,spaces:M.registry,parse:l0,defaults:it});for(let e of Object.keys(Jc))M.register(Jc[e]);for(let e in M.registry)Oa(e,M.registry[e]);mr.add("colorspace-init-end",e=>{Oa(e.id,e),e.aliases?.forEach(t=>{Oa(t,e)})});function Oa(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(q.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:o((i,s)=>{try{return M.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},"has"),get:o((i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:u}=M.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},"get"),set:o((i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:l}=M.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)},"set")})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}o(Oa,"addSpaceAccessors");q.extend(yn);q.extend({deltaE:zn});Object.assign(q,{deltaEMethods:yn});q.extend(Hv);q.extend({contrast:qv});q.extend(Kv);q.extend(kv);q.extend(Jv);q.extend(ss);const bb=Symbol("no update");class Qo extends $t()("observable-value-update"){static{o(this,"ObservableValueUpdateEvent")}}class Db extends Ys("observable-destroy"){static{o(this,"ObservableDestroyEvent")}}class Ab{static{o(this,"AnyObservable")}listenTarget=new Js;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===bb||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new Qo({detail:r})),!0)}listen(t,r){const n=o(i=>r(i.detail),"mapped");return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(Qo,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Qo,r)}destroy(){this.listenTarget.dispatch(new Db),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function Eb(e,t){return a1(e,t,(r,n)=>v.isFunction(r)&&v.isFunction(n)?!0:v.strictEquals(r,n))}o(Eb,"observableEqualityCheck");function _0(e){const t=I.fromObject(lu(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}o(_0,"toLuxonDateTime");function Cb(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:$y(e.day),month:Cy(e.month),year:e.year,hour:ky(e.hour),minute:Sy(e.minute),second:xy(e.second),millisecond:Fy(e.millisecond),timezone:t??e.zoneName}}o(Cb,"parseLuxonDateTime");const V0="__vir__shape__definition__key__do__not__use__in__actual__objects",xu="__vir__shape__specifier__key__do__not__use__in__actual__objects",U0="__vir__custom__specifier__key__do__not__use__in__actual__objects";function Fu(e){return v.hasKey(e,U0)}o(Fu,"isCustomSpecifier");function W0({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[U0]:!0,[xu]:!0}}o(W0,"customShape");W0({customName:"UUID",defaultValue:cn.isUuid("00000000-0000-1000-0000-000000000000"),checker:v.isUuid});function Nu(e){return v.hasKey(e,V0)}o(Nu,"isShapeDefinition");var De;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(De||(De={}));function $b(...e){return vr(e,De.And)}o($b,"and");function ui(...e){return vr(e,De.Enum)}o(ui,"enumShape");function U(...e){return vr(e,De.Exact)}o(U,"exact");function io(...e){return vr(e,De.IndexedKeys)}o(io,"indexedKeys");function se(...e){return vr(e,De.Or)}o(se,"or");function kb(e){return vr([e],De.Unknown)}o(kb,"unknownShape");function Xr(e,t){return vr([e,t],De.NumericRange)}o(Xr,"numericRange");function ze(e){return vr([e],De.Optional)}o(ze,"optional");function so(e){return Bt(e,De.And)}o(so,"isAndShapeSpecifier");function oo(e){return Bt(e,De.Class)}o(oo,"isClassShapeSpecifier");function ao(e){return Bt(e,De.Enum)}o(ao,"isEnumShapeSpecifier");function uo(e){return Bt(e,De.Exact)}o(uo,"isExactShapeSpecifier");function lo(e){return Bt(e,De.IndexedKeys)}o(lo,"isIndexedKeysSpecifier");function j0(e){return Bt(e,De.Tuple)}o(j0,"isTupleShapeSpecifier");function Di(e){return Bt(e,De.Or)}o(Di,"isOrShapeSpecifier");function co(e){return Bt(e,De.Unknown)}o(co,"isUnknownShapeSpecifier");function q0(e){return Bt(e,De.NumericRange)}o(q0,"isNumericRangeShapeSpecifier");function Ms(e){return Bt(e,De.Optional)}o(Ms,"isOptionalShapeSpecifier");function Bt(e,t){const r=Ai(e);return!!r&&r.specifierType===t}o(Bt,"specifierHasSymbol");function vr(e,t){return{[xu]:!0,specifierType:t,parts:e}}o(vr,"specifier");function Ai(e){if(!(!v.isObject(e)||!v.hasKey(e,xu)))return e}o(Ai,"getShapeSpecifier");class Xc extends TypeError{static{o(this,"DefaultValueConstructionError")}name="DefaultValueConstructionError"}function Sb(e,t){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1;return typeof e==typeof t&&(i||s)}o(Sb,"haveEqualTypes");class qe extends TypeError{static{o(this,"ShapeMismatchError")}name="ShapeMismatchError"}function z0(e,t,r={}){try{return Mu(e,t,r),!0}catch{return!1}}o(z0,"isValidShape");function Mu(e,t,r={},n=""){try{Le({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?an(i,n):i}}o(Mu,"assertValidShape");function _a(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}o(_a,"createKeyString");function Le({subject:e,shape:t,keys:r,options:n}){if(co(t))return!0;if(Nu(t))return Le({subject:e,shape:t.shape,keys:r,options:n});if(Fu(t)){if(!t.checker(e))throw new qe(`Subject ${m(e)} does not match ${t.customName} shape.`);return!0}const i=_a(r);if(Ai(e))throw new qe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(j0(t)){if(!v.isArray(e))throw new qe(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((a,u)=>{const l=e[u];return Le({keys:[...r,u],options:n,shape:a,subject:l})})}else{if(Ms(t))return Le({keys:r,options:n,shape:t.parts[0],subject:e});if(os(e,t,r,n)){if(v.isFunction(t))return v.isFunction(e);if(oo(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const a=e,u=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(d=>[d,!1])),l=[];let c=!1;if(Di(t)){const d=[];c=t.parts.some(f=>{try{const p=Le({subject:e,shape:f,keys:r,options:n});return Object.assign(u,p),!0}catch(p){if(p instanceof qe)return d.push(p.message),!1;throw p}}),!c&&v.isLengthAtLeast(d,1)&&l.push(d[0])}else if(so(t))c=t.parts.every(d=>{try{const f=Le({subject:e,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(u,f),!0}catch(f){if(f instanceof qe)return l.push(f.message),!1;throw f}});else if(uo(t)){const d=Le({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(u,d),c=!0}else{if(ao(t))throw new qe(`Cannot compare an enum specifier to an object at ${i}`);if(v.isArray(t)&&v.isArray(a))c=a.every((d,f)=>{const p=t.some(g=>{try{return Le({subject:d,shape:g,keys:[...r,f],options:n}),!0}catch(y){if(y instanceof qe)return l.push(y.message),!1;throw y}});return u[f]=p,p});else if(lo(t)){const d=he(e,(f,p)=>(n.ignoreExtraKeys||Le({shape:t.parts[0].keys,subject:f,keys:[...r,f],options:n}),Le({shape:t.parts[0].values,subject:p,keys:[...r,f],options:n}),!0));Object.assign(u,d),c=!0}else{const d=xb({keys:r,options:n,shape:t,subject:e});Object.assign(u,d),c=!0}}if(l.length)throw new qe(Us(l));if(!c){const f=`Failed on key(s): ${Object.keys(u).filter(p=>!u[p]).map(p=>_a([...r,p])).join(",")}`;throw new qe(f)}return n.ignoreExtraKeys||Object.entries(u).forEach(([d,f])=>{if(!f)throw new qe(`subject as extra key '${d}' in ${i}.`)}),u}else if(n.exactValues)return e===t}else throw new qe(`Subject does not match shape definition at key ${i}`)}return!0}o(Le,"internalAssertValidShape");function xb({keys:e,options:t,shape:r,subject:n}){const i=_a(e),s={};if(v.isObject(r)){const a=new Set(te(r)),u=new Set(te(n));a.forEach(l=>{(l in n||Ms(r[l]))&&u.add(l)}),t.ignoreExtraKeys||u.forEach(l=>{if(!a.has(l))throw new qe(`Subject has extra key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=r[l],d=Di(c)?c.parts.includes(void 0):!1,f=c?.includes?.(void 0)||c===void 0;if(!u.has(l)&&!d&&!f)throw new qe(`Subject missing key '${String(l)}' in ${i}`)}),u.forEach(l=>{if(!(l in n)&&Ms(r[l])){s[l]=!0;return}const c=n[l];if(t.ignoreExtraKeys&&!a.has(l))return;const d=r[l];Le({subject:c,shape:d,keys:[...e,l],options:t}),s[l]=!0})}else throw new qe(`Shape definition at ${i} was not an object.`);return s}o(xb,"isValidRawObjectShape");function os(e,t,r,n,i){const s=Ai(t);if(s){if(Fu(s))return s.checker(e);if(q0(s))return v.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(oo(s))return e instanceof s.parts[0];if(so(s))return s.parts.every(a=>{try{return Le({subject:e,shape:a,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(Di(s))return s.parts.some(a=>{try{return Le({subject:e,shape:a,keys:r,options:n}),!0}catch{return!1}});if(uo(s))return v.isObject(e)?(Le({subject:e,shape:s.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===s.parts[0];if(ao(s))return v.hasValue(Object.values(s.parts[0]),e);if(lo(s)){if(!v.isObject(e))return!1;const a=Fb(e,s,!!n.ignoreExtraKeys),u=Lr(e).every(l=>{try{return Le({subject:l,shape:s.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return a&&u}else if(co(s))return!0}return i?t===e:Sb(e,t)}o(os,"matchesShape");function Fb(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys,s=Tu(t);if(v.isBoolean(s))return te(e).every(l=>os(l,i,[],{exactValues:!1,ignoreExtraKeys:r}));const a=n?s.every(l=>te(e).some(c=>os(c,l,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return te(e).every(l=>s.includes(l)?os(l,i,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&a}o(Fb,"matchesIndexedKeysSpecifierKeys");function Tu(e){const t=e.parts[0].keys,r=Ai(t);if(v.isPropertyKey(t))return!0;if(r){if(oo(r))return!1;if(so(r))return!1;if(Di(r)){const n=r.parts.map(i=>Tu(io({...e.parts[0],keys:i})));return n.includes(!1)?!1:n.flat().filter(v.isPropertyKey)}else if(uo(r)){const n=r.parts.filter(v.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(ao(r))return Object.values(r.parts[0]);if(lo(r))return!1;if(co(r))return!0}}return!1}o(Tu,"expandIndexedKeysKeys");function Va(e){return Sr(e)}o(Va,"shapeToDefaultValue");function Sr(e){const t=Ai(e);if(Fu(e))return e.defaultValue;if(t){if(j0(t))return t.parts.map(r=>Sr(r));if(Ms(t))return Sr(t.parts[0]);if(q0(t))return t.parts[0];if(oo(t)){const r=t.parts[0];try{return new r}catch(n){throw new Xc(`Failed to create default value for classShape for class '${r.name}': ${He(n)}`)}}else{if(Di(t)||uo(t))return Sr(t.parts[0]);if(so(t))return t.parts.reduce((r,n)=>Object.assign(r,Sr(n)),{});if(ao(t))return t.parts[1]||Object.values(t.parts[0])[0];if(lo(t)){const r=Tu(t);return!t.parts[0].required||v.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,Sr(t.parts[0].values)]))}else{if(co(t))return t.parts[0]??{};throw new Xc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Nu(e)?Va(e.shape):e instanceof RegExp?e:v.isArray(e)?e.map(Sr):v.isObject(e)?he(e,(r,n)=>Va(n)):e}o(Sr,"innerShapeToDefaultValue");function st(e,t=!1){if(Nu(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return Va(e)},[V0]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}o(st,"defineShape");const Nb=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],K0=Nb.reduce((e,t)=>(e[t]=t,e),{}),Mb=le.defaultZone.name,Bu=K0.UTC,Tb=st({hour:Xr(ys.min,ys.max),minute:Xr(ws.min,ws.max),second:Xr(vs.min,vs.max),millisecond:Xr(bs.min,bs.max),timezone:ui(K0,Bu)}),Bb=st({year:2023,month:Xr(ps.min,ps.max),day:Xr(gs.min,gs.max),timezone:Bu}),Pb=st($b(Bb,Tb));function Ib(e,t){if(!Un.isValidIANAZone(e))throw new h(`'${e}' is not a valid time zone`,t)}o(Ib,"assertValidTimezone");function Lb(e){Mu(e,Pb),Ib(e.timezone),_0(e)}o(Lb,"assertValidFullDate");function Rb(e){try{return Lb(e),!0}catch{return!1}}o(Rb,"isValidFullDate");const Ob=["L-y","LLL-y","LLLL-y"];function _b(e,t){const r=I.fromISO(e,{zone:t});if(r.isValid)return r;let n;return Ob.some(i=>{const s=I.fromFormat(e,i,{zone:t});return s.isValid?(n=s,!0):!1}),n}o(_b,"parseDateString");function Vb(e,t){const r=Wb(e,t);if(!r?.isValid)throw new Error(`Failed to parse date input ${m(e)}`);return Cb(r,t)}o(Vb,"createFullDate");function Ub(e){const t=I.fromJSDate(new Date(e));if(t.isValid)return t}o(Ub,"lastDitchConversion");function Wb(e,t){if(Rb(e)&&(e=_0(e).toMillis()),I.isDateTime(e))return e.setZone(t);if(v.isNumber(e))return I.fromMillis(e,{zone:Bu}).setZone(t);if(v.isString(e)){const r=_b(e,t);if(r)return r}else if(e instanceof Date)return I.fromJSDate(e).setZone(t);return Ub(e)}o(Wb,"convertDateLikeToLuxonDateTime");L.Years+"",L.Quarters+"",L.Months+"",L.Weeks+"",L.Days+"",L.Hours+"",L.Minutes+"",L.Seconds+"",L.Milliseconds+"";st(se({get:U(T.Month),in:se(U(T.Year),U(T.Quarter))},{get:U(T.Week),in:se(U(T.Year),U(T.Quarter),U(T.Month))},{get:U(T.Day),in:se(U(T.Year),U(T.Quarter),U(T.Month),U(T.Week))},{get:U(T.Hour),in:se(U(T.Year),U(T.Quarter),U(T.Month),U(T.Week),U(T.Day))},{get:U(T.Minute),in:se(U(T.Year),U(T.Quarter),U(T.Month),U(T.Week),U(T.Day),U(T.Hour))},{get:U(T.Second),in:se(U(T.Year),U(T.Quarter),U(T.Month),U(T.Week),U(T.Day),U(T.Hour),U(T.Minute))},{get:U(T.Millisecond),in:se(U(T.Year),U(T.Quarter),U(T.Month),U(T.Week),U(T.Day),U(T.Hour),U(T.Minute),U(T.Second))}));var Qc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Qc||(Qc={}));var Ua;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Ua||(Ua={}));var ed;(function(e){e.Year="year",e.Month="month",e.Day="day"})(ed||(ed={}));const jb={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};T1(jb,St(Ua));le.defaultLocale;st(W0({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return qb(e)}}));function qb(e){return I.fromISO(e).toUTC().toISO()===e}o(qb,"isValidIsoString");const zb=st({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:kb()});function ea(e){return z0(e,zb,{allowExtraKeys:!0})}o(ea,"isObservableBase");class G0 extends Ab{static{o(this,"Observable")}value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||Eb}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Kb}=mw,td=o(()=>document.createComment(""),"s"),Ln=o((e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(td(),i),a=n.insertBefore(td(),i);r=new Kb(s,a,e,e.options)}else{const s=r._$AB.nextSibling,a=r._$AM,u=a!==e;if(u){let l;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(l=e._$AU)!==a._$AU&&r._$AP(l)}if(s!==i||u){let l=r._$AA;for(;l!==s;){const c=l.nextSibling;n.insertBefore(l,i),l=c}}}return r},"r$1"),kr=o((e,t,r=e)=>(e._$AI(t,r),e),"v"),Gb={},Zb=o((e,t=Gb)=>e._$AH=t,"m"),Hb=o(e=>e._$AH,"p"),ta=o(e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}},"M");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Qt=o(e=>(...t)=>({_$litDirective$:e,values:t}),"e$2");class Pt{static{o(this,"i")}constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yb={attribute:!0,type:String,converter:$s,reflect:!1,hasChanged:gu},Jb=o((e=Yb,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(u){const l=t.get.call(this);t.set.call(this,u),this.requestUpdate(a,l,e)},init(u){return u!==void 0&&this.C(a,void 0,e,u),u}}}if(n==="setter"){const{name:a}=r;return function(u){const l=this[a];t.call(this,u),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)},"r");function Xb(e){return(t,r)=>typeof r=="object"?Jb(e,t,r):((n,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}o(Xb,"n$1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=Qt(class extends Pt{constructor(e){if(super(e),e.type!==fo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Ye}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=o(e=>e??H,"o");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wa extends Pt{static{o(this,"e")}constructor(t){if(super(t),this.it=H,t.type!==fo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||t==null)return this._t=void 0,this.it=t;if(t===Ye)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Wa.directiveName="unsafeHTML",Wa.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rd extends Wa{static{o(this,"t")}}rd.directiveName="unsafeSVG",rd.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qb(e,t,r){return e?t(e):r?.(e)}o(Qb,"n");class e2 extends Jn{static{o(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function t2(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(u=>!!u.index).length;if(n||i)return[...e];const s=e.map(u=>[u]);return s.length||(s[0]=[]),r.forEach(u=>{u>=0&&u<e.length&&(s[u]=[])}),t.forEach(u=>{const l=s[u.index];l&&l.splice(0,0,...u.values)}),s.flat()}o(t2,"insertAndRemoveValues");function ja(e){return v.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}o(ja,"isMinimalDefinitionWithInputs");function Pu(e){return v.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}o(Pu,"hasTagName");function Z0(e){return kn(e,t=>{if(ja(t))return t.definition;if(Pu(t))return t.tagInterpolationKey||t},v.isTruthy)}o(Z0,"extractElementKeys");const H0=new WeakMap;function r2(e,t){const r=Z0(t);return Y0(H0,[e,...r]).value?.template}o(r2,"getAlreadyMappedTemplate");function n2(e,t,r){const n=Z0(t);return X0(H0,[e,...n],r)}o(n2,"setMappedTemplate");function Y0(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=J0(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Y0(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}o(Y0,"getNestedValues");function J0(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}o(J0,"getCurrentKeyAndValue");function X0(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:a}=J0(e,t,n);if(!s)return{result:!1,reason:a};const u=i??{nested:void 0,template:void 0};if(i||e.set(s,u),n===t.length-1)return u.template=r,{result:!0,reason:"set value at end of keys array"};const l=u.nested??new WeakMap;return u.nested||(u.nested=l),X0(l,t,r,n+1)}o(X0,"setNestedValues");function Q0(e,t,r){const n=r2(e,t),i=n??r();if(!n){const u=n2(e,t,i);if(!u.result)throw new Error(`Failed to set template transform: ${u.reason}`)}const s=i.valuesTransform(t),a=t2(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:a}}o(Q0,"getTransformedTemplate");function em(e,t,r,n){const i=[],s=[],a=[],u=[];return e.forEach((c,d)=>{const f=i.length-1,p=i[f],g=d-1,y=t[g];n&&n(c);let b,$=[];if(typeof p=="string"&&(b=r(p,c,y),b)){i[f]=[p,b.replacement].join(""),a.push(g);const x=b.getExtraValues;$=x?x(y):[],$.length&&x?(i[f]+=" ",$.forEach((B,R)=>{R&&i.push(" ")}),u.push(B=>{const R=B[g],G=x(R);return{index:g,values:G}}),i.push(c)):i[f]+=c}b||i.push(c);const A=e.raw[d];b?(s[f]=[s[f],b.replacement,A].join(""),$.length&&$.forEach(()=>{s.push("")})):s.push(A)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const d=u.flatMap(f=>f(c));return{valueIndexDeletions:a,valueInsertions:d}}}}o(em,"transformTemplate");function i2(...[e,t,r]){if(Pu(r))return{replacement:r.tagName,getExtraValues:void 0}}o(i2,"transformCss");function s2(e,t){return em(e,t,i2)}o(s2,"transformCssTemplate");function P(e,...t){const r=Q0(e,t,()=>s2(e,t));return is(r.strings,...r.values)}o(P,"css");const o2={allowPolymorphicState:!1};function tm(e,t){const r=e.instanceState;te(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}o(tm,"assignInputs");function nd(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}o(nd,"assertValidCssProperties");class a2 extends CustomEvent{static{o(this,"TypedEvent")}_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Iu(){return e=>class extends a2{static type=e;_type=e;constructor(t){super(e,t)}}}o(Iu,"defineTypedEvent");function Te(){return Iu()}o(Te,"defineElementEvent");function u2(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Iu()([e,n].join("-"));return r[n]=i,r},{}):{}}o(u2,"createEventDescriptorMap");function l2(e){return e?he(e,t=>t):{}}o(l2,"createHostClassNamesMap");function rm(e,t){t in e||Xb()(e,t)}o(rm,"bindReactiveProperty");function c2(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}o(c2,"assertValidPropertyName");function id(e,t){const r=e;function n(a){t?c2(a,e,e.tagName):rm(e,a)}o(n,"verifyProperty");function i(a,u){return n(u),r[u]}return o(i,"valueGetter"),new Proxy({},{get:i,set(a,u,l){n(u);const c=r[u];function d(g){a[u]=g,r[u]=g}o(d,"setValueOnElement");const f=e.observablePropertyListenerMap[u];if(c!==l&&ea(c)&&f&&c.removeListener(f),ea(l))if(f)l.listen(!1,f);else{let g=function(){e.requestUpdate()};var p=g;o(g,"newListener"),e.observablePropertyListenerMap[u]=g,l.listen(!1,g)}else ea(c)&&(e.observablePropertyListenerMap[u]=void 0);return d(l),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,u){if(u in a)return{get value(){return i(a,u)},configurable:!0,enumerable:!0}},has(a,u){return Reflect.has(a,u)}})}o(id,"createElementPropertyProxy");function d2({hostClassNames:e,cssVars:t}){return{hostClasses:he(e,(r,n)=>({name:dt(n),selector:dt(`:host(.${n})`)})),cssVars:t}}o(d2,"createStylesCallbackInput");function f2({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&te(t).forEach(s=>{const a=t[s],u=r[s];typeof a=="function"&&(a({state:n,inputs:i})?e.classList.add(u):e.classList.remove(u))})}o(f2,"applyHostClasses");function h2({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(a){te(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return o(i,"updateState"),{cssVars:r,slotNames:n,dispatch:o(a=>e.dispatchEvent(a),"dispatch"),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}o(h2,"createRenderParams");function m2(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}o(m2,"createSlotNamesMap");function ho(e){if(!v.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!v.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...o2,...e.options},r=u2(e.tagName,e.events),n=l2(e.hostClasses);e.hostClasses&&nd(e.tagName,e.hostClasses),e.cssVars&&nd(e.tagName,e.cssVars);const i=e.cssVars?wr(e.cssVars):{},s=m2(e.slotNames),a=typeof e.styles=="function"?e.styles(d2({hostClassNames:n,cssVars:i})):e.styles||P``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}o(l,"typedAssignCallback");const c=class extends e2{static{o(this,"anonymousClass")}static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return h2({element:this,eventsMap:r,cssVars:i,slotNamesMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const p=e.state(d);if(p instanceof Promise)throw new TypeError("init cannot be asynchronous");te(p).forEach(g=>{rm(this,g),this.instanceState[g]=p[g]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return f2({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=an(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,He(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{v.hasKey(d,"destroy")&&v.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){tm(this,d)}observablePropertyListenerMap={};instanceInputs=id(this,!1);instanceState=id(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:jh(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}o(ho,"defineElementNoInputs");function Be(...e){return Nt.isEmpty(e),t=>{const r=t;if(!v.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return ho({...r,options:{...r.options}})}}o(Be,"defineElement$1");var sd;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(sd||(sd={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const od=o((e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},"u"),p2=Qt(class extends Pt{constructor(e){if(super(e),e.type!==fo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let a=0;for(const u of e)i[a]=n?n(u,a):a,s[a]=r(u,a),a++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=Hb(e),{values:s,keys:a}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=a,s;const u=this.ut??=[],l=[];let c,d,f=0,p=i.length-1,g=0,y=s.length-1;for(;f<=p&&g<=y;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(u[f]===a[g])l[g]=kr(i[f],s[g]),f++,g++;else if(u[p]===a[y])l[y]=kr(i[p],s[y]),p--,y--;else if(u[f]===a[y])l[y]=kr(i[f],s[y]),Ln(e,l[y+1],i[f]),f++,y--;else if(u[p]===a[g])l[g]=kr(i[p],s[g]),Ln(e,i[f],i[p]),p--,g++;else if(c===void 0&&(c=od(a,g,y),d=od(u,f,p)),c.has(u[f]))if(c.has(u[p])){const b=d.get(a[g]),$=b!==void 0?i[b]:null;if($===null){const A=Ln(e,i[f]);kr(A,s[g]),l[g]=A}else l[g]=kr($,s[g]),Ln(e,i[f],$),i[b]=null;g++}else ta(i[p]),p--;else ta(i[f]),f++;for(;g<=y;){const b=Ln(e,l[y+1]);kr(b,s[g]),l[g++]=b}for(;f<=p;){const b=i[f++];b!==null&&ta(b)}return this.ut=a,Zb(e,l),Ye}}),g2=p2;function Ei(e,t){return li(e,t),e.element}o(Ei,"extractElement");function y2(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}o(y2,"getPartHostTagName");function li(e,t){const r=y2(e),n=r?`: in ${r}`:"";if(e.type!==fo.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}o(li,"assertIsElementPartInfo");function w2(e,t){return Qt(class extends Pt{element;constructor(r){super(r),this.element=cn.instanceOf(Ei(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Ye}})}o(w2,"createMutateDirective");const v2=w2("attributes",({element:e,params:[t],directive:r})=>{const i=yi(r,"allAttributesApplied",()=>new Set);te(t).forEach(s=>{if(s.toLowerCase()!==s)throw new Error(`Cannot assign attribute name with uppercase letters: ${s}`);i.add(s)}),i.forEach(s=>{const a=t[s];a==null||a===!1||a===H?e.removeAttribute(s):a===""||a===!0?e.setAttribute(s,""):e.setAttribute(s,String(a))})});function b2(e){const t=Qt(class extends Pt{element;constructor(r){super(r),this.element=Ei(r,e)}render(r){return this.element.setAttribute(e,r),Ye}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}o(b2,"createAttributeDirective");function Y(e,t){return D2(e,t)}o(Y,"listen");const D2=Qt(class extends Pt{element;lastListenerMetaData;constructor(e){super(e),this.element=Ei(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:o(r=>this.lastListenerMetaData?.callback(r),"listener")}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Ye}}),ad="onDomCreated",ud=Qt(class extends Pt{element;constructor(e){super(e),li(e,ad)}update(e,[t]){li(e,ad);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),ra="onResize",nm=Qt(class extends Pt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),li(e,ra)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${ra} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){li(e,ra),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function ft(e,t,r){return Qb(e,()=>t,()=>r)}o(ft,"renderIf");const{attributeDirective:A2}=b2("data-test-id"),Qr=A2;te({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function im(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return{defineElement:o((...n)=>i=>(t(i),Be(...n)(r(i))),"defineElement"),defineElementNoInputs:o(n=>(t(n),ho(r(n))),"defineElementNoInputs")}}o(im,"wrapDefineElement");function E2(e,t){return C2(void 0,e)}o(E2,"assign");const C2=Qt(class extends Pt{element;constructor(e){super(e),this.element=Ei(e,"assign")}render(e,t){return tm(this.element,t),Ye}}),$2={};function k2(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:a}=sm(i,s);if(a&&v.isString(r))return{tagName:r,tagInterpolationKey:yi($2,r,()=>({tagName:r}))}}return r})}o(k2,"mapHtmlValues");function sm(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}o(sm,"classifyValue");function S2(...[e,t,r]){const n=ja(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=sm(e,t),a=Pu(n);if(a&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!a?void 0:{replacement:n.tagName,getExtraValues(l){const c=ja(l)?l.inputs:void 0;return[i&&c?E2(c):void 0].filter(v.isTruthy)}}}o(S2,"transformHtml");function x2(e){}o(x2,"stringValidator");function F2(e){return em(e.strings,e.values,S2,x2)}o(F2,"transformHtmlTemplate");function D(e,...t){const r=k2(e,t),n=aw(e,...r),i=Q0(e,r,()=>F2(n));return{...n,strings:i.strings,values:i.values}}o(D,"html");function om(e){return he(e,(t,r)=>r instanceof q?dt(r.toString({format:"hex"})):om(r))}o(om,"colorsObjectToCssResult");const N2="dodgerblue";function qa(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}o(qa,"calculateTextColorString");function na({background:e,foreground:t}){return{background:e??new q(qa(t)),foreground:t??new q(qa(e))}}o(na,"createColorPair");var Bs;(function(e){e.Dark="dark",e.Light="light"})(Bs||(Bs={}));function M2(e){return e==="black"?"white":"black"}o(M2,"flipBackForeground");const T2={black:{foregroundFaint1:new q("#ccc"),foregroundFaint2:new q("#eee")},white:{foregroundFaint1:new q("#ccc"),foregroundFaint2:new q("#eee")}},B2={black:{backgroundFaint1:new q("#666"),backgroundFaint2:new q("#444")},white:{backgroundFaint1:new q("#ccc"),backgroundFaint2:new q("#fafafa")}};function ld({themeColor:e=N2,themeStyle:t=Bs.Light}={}){const r=new q(e),n=new q(t===Bs.Dark?"black":"white"),i=qa(n),s=new q(i),a={nav:{hover:na({background:r.clone().set({"hsl.l":93})}),active:na({background:r.clone().set({"hsl.l":90})}),selected:na({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...B2[M2(i)],foreground:s,...T2[i]}};return om(a)}o(ld,"createTheme");var Kt;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Kt||(Kt={}));async function Ps(e=1){const t=new Ja;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return o(r,"requestNextFrame"),r(),t.promise}o(Ps,"waitForAnimationFrame");function P2(e,t){return{element:e,children:am(e)}}o(P2,"getNestedChildrenTree");function am(e,t,r){return I2(e).map(n=>{const i=am(n);return{element:n,children:i}})}o(am,"recursivelyGetNestedChildrenTree");function I2(e){return[...e.children,...e.shadowRoot?.children??[]]}o(I2,"getDirectChildren");function ia(e){return e.matches(":focus")}o(ia,"isElementFocused");function Is(e){if(e instanceof ShadowRoot)return Is(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:Is(t)}o(Is,"getParentElement");function um(e,t){if(t(e))return e;const r=Is(e);if(r)return um(r,t)}o(um,"findMatchingAncestor");async function L2(e){return R2(e,1)}o(L2,"checkIfEntirelyInScrollView");async function R2(e,t){return new Promise(r=>{new IntersectionObserver((i,s)=>{Nt.isLengthAtLeast(i,1),s.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}o(R2,"checkIfInScrollView");function Kn(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n?.constructor.name,a=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(a)}return n}o(Kn,"extractEventTarget");function O2(e){const t=Is(e);return t&&um(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}o(O2,"findOverflowAncestor");function _2({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let a=0,u=0;a<n;a++){const l=s.codePointAt(a);for(;u<r;)if(i.codePointAt(u++)===l)continue e;return!1}return!0}o(_2,"fuzzySearch");const V2=Bh(32);function as(e){return e.join(V2)}o(as,"createBreadcrumbsSearchKey");function lm(e){if(!e.length)return[];const t=as(e),r=lm(e.slice(0,-1));return[t,...r]}o(lm,"getFullTreeKeysToInclude");const U2=["error","errors"];function W2(e){return U2.includes(e)}o(W2,"isSearchingForErrors");function j2({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(a=>(n(a),as(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return o(n,"addChildren"),e.forEach(i=>{const s=i.entry.errors.length&&W2(t),a=as(i.fullUrlBreadcrumbs);if(_2({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[a]){const l=lm(i.fullUrlBreadcrumbs);n(i),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(i=>{const s=as(i.fullUrlBreadcrumbs),a=r[s];if(!v.isBoolean(a))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}o(j2,"searchFlattenedNodes");class Lu extends Error{static{o(this,"SpaRouterError")}name="SpaRouterError"}class cd extends Lu{static{o(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class q2 extends Lu{static{o(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}st({paths:[""],search:ze(se(void 0,io({keys:"",values:[""],required:!1}))),hash:ze(se(void 0,""))});const z2=st({basePath:se("",void 0),sanitizeRoute:o(e=>e,"sanitizeRoute"),maxListenerCount:se(1,void 0),disableWarnings:se(void 0,!1),isPaused:se(!1,void 0)}),sa="://";function Ru(...e){const t=e.join("/"),[r,n=""]=t.includes(sa)?t.split(sa):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((a,u,l,c)=>{if(i)return a;const d=c[l+1];let f=u;const p=d?.startsWith("?"),g=!u.includes("?")&&p,y=d==="?";if(p||g){i=!0;let b=!1;const $=c.slice(l+2).reduce((A,x)=>(x.includes("#")&&(b=!0),b?A.concat(x):[A,x].join("&")),"");f=[u,d,y?rn({value:$,prefix:"&"}):$].join("")}return a.concat(f)},[]);return[r,r?sa:"",s.join("/")].join("")}o(Ru,"joinUrlPaths");var vn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(vn||(vn={}));var bn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(bn||(bn={}));const K2=st({encoding:ze(se(void 0,ui(vn))),searchParamStrategy:ze(se(void 0,ui(bn)))});function ji(e,t){return e.map(r=>{if(r!=null)return sn(String(r),t)}).filter(r=>r!=null)}o(ji,"codeValues");function sn(e,t){return t?.encoding===vn.Decode?decodeURIComponent(e):t?.encoding===vn.Encode?encodeURIComponent(e):e}o(sn,"codeValue");const G2=st(io({keys:"",values:[""],required:!0}));function Z2(e,t,r){const n=r?.searchParamStrategy===bn.Clear?{}:he(e,(a,u)=>v.isString(u)?[u]:u),i=he(t,(a,u)=>{if(r?.searchParamStrategy===bn.Append){const l=n[a],c=v.isArray(l)?l:[l];if(u){const d=v.isArray(u)?u:[u];return ji([...c,...d],r)}else return ji(c,r)}else return v.isArray(u)?ji(u,r):u?ji([u],r):void 0});return Hs({...n,...i},(a,u)=>!!u)}o(Z2,"combineSearchParams");function cm(e,t){return v.isString(e)&&!e.includes("?")?{}:(v.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[a,...u]=Vh(s,"=");return[a,u.length?u.join("="):void 0]}).reduce((s,[a,u])=>{const l=dm({options:t,key:a,value:u}),c=yi(s,l.key,()=>[]);return u!=null&&c.push(l.value),s},{})}o(cm,"searchParamsToObject");function H2(e){if(e!=null)return v.isArray(e)?[...e]:e===""?[]:[e]}o(H2,"wrapParamValue");function Y2(e,t){const r=kn(Object.entries(e),([n,i])=>{const s=H2(i);return s?.length?s.map(a=>{const u=dm({options:t,key:n,value:a});return[u.key,u.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?ht({value:r.join("&"),prefix:"?"}):""}o(Y2,"searchParamsToString");function dm({options:e,key:t,value:r}){return{key:sn(t,e),value:sn(String(r),e)}}o(dm,"codeParamKeyValue");function fm({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:a,username:u}){return[s?s+"://":"",u?u+":":"",r?r+"@":"",mo({hostname:t,port:i}),Ou({hash:e,pathname:n,search:a})].join("")}o(fm,"createHref");function hm({pathname:e}){const t=rn({value:e,prefix:"/"});return t?t.split("/"):[]}o(hm,"createPaths");function Ou({hash:e,pathname:t,search:r}){return[ht({value:t,prefix:"/"}),r?ht({value:r,prefix:"?"}):"",e?ht({value:e,prefix:"#"}):""].join("")}o(Ou,"createFullPath");function mo({hostname:e,port:t}){return[e,t?":"+t:""].join("")}o(mo,"createHost");function mm({hostname:e,port:t,protocol:r}){return[r,mo({hostname:e,port:t})].filter(v.isTruthy).join("://")}o(mm,"createOrigin");function on(e,t){const r=v.isString(e)?rn({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?ht({value:sn(n,t),prefix:"#"}):"",s=r.replace(/#[^#]*$/,""),a=s.replace(/^[^?]*(?:\?|$)/,""),u=a?ht({value:sn(a,t),prefix:"?"}):"",l=s.replace(/\?[^?]*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),p=d.replace(/^[^@]*@/,""),g=f!==p,[y,...b]=g?f.split(":").reverse():[],$=b.toReversed().join("").replace(/[/:]/g,"")||"",A=y?.replace(/[/:]/g,"")||"",x=M1(p.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),B=x[0]?.endsWith("]")?"":x[1]===":"&&x[0]||"",G=p.replace(new RegExp(`:${B}($|/)`),"$1").replace(/\/.*/,""),Pe=p.replace(/^[^/]*(\/|$)/,"$1"),gt=sn(Pe.replace(/^[^/]*(?:\/|$)/,"/"),t),Ue=mo({hostname:G,port:B}),Xe=mm({hostname:G,port:B,protocol:c}),kt=fm({hash:i,hostname:G,password:A,pathname:gt,port:B,protocol:c,search:u,username:$}),It=cm(u),Si=hm({pathname:gt});return{fullPath:Ou({hash:i,pathname:gt,search:u}),hash:i,host:Ue,hostname:G,href:kt,origin:Xe,password:A,pathname:gt,paths:Si,port:B,protocol:c,search:u,searchParams:It,username:$}}o(on,"parseUrl");st({hash:ze(se(void 0,"")),search:ze(se(void 0,"",io({keys:"",required:!1,values:se(null,void 0,"",-1,!1,0n)}))),hostname:ze(se(void 0,"")),pathname:ze(se(void 0,"")),paths:ze(se(void 0,[""])),protocol:ze(se(void 0,"")),username:ze(se(void 0,"")),password:ze(se(void 0,"")),port:ze(se(void 0,"",-1))});function J2(e,t,r){const n=!!r,i=t==null||z0(t,K2),s=i?on(""):v.instanceOf(e,URL)||v.isString(e)?on(e):e,a=i?e:t,u=v.isString(a)&&a.startsWith("."),l=v.isString(a)||v.instanceOf(a,URL)?Hs(on(a),(b,$)=>v.isTruthy($)):a,c=n?r:i?t:void 0,d=he(s,(b,$)=>{if(!v.hasKey(l,b))return $;const A=l[b];return v.isNumber(A)?String(A):v.isString(A)?b==="hash"&&A?ht({value:A,prefix:"#"}):b==="pathname"?ht({value:A,prefix:"/"}):A:$});v.hasKey(l,"paths")&&l.paths&&(d.pathname=Ru(u?s.pathname:"",...l.paths));const f=v.isString(l.search)?cm(ht({value:l.search,prefix:"?"})):C1(l.search||{}),p=Z2(d.searchParams,f,{...c,encoding:vn.None}),g=Y2(p,c);return{...d,searchParams:p,search:g,paths:hm(d),fullPath:Ou(d),host:mo(d),origin:mm(d),href:fm({...d,search:g})}}o(J2,"buildUrl");const X2=st({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:G2,hash:"",fullPath:"/",href:"/"},!0);({...X2.defaultValue});const Q2=0;function pm(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Q2)}o(pm,"shouldClickEventTriggerRouteChange");const po="locationchange",jt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const dd=jt?.pushState;function fd(...e){if(!dd)return;const t=dd.apply(jt,e);return globalThis.dispatchEvent(new Event(po)),t}o(fd,"newPushState");const hd=jt?.replaceState;function md(...e){if(!hd)return;const t=hd.apply(jt,e);return globalThis.dispatchEvent(new Event(po)),t}o(md,"newReplaceState");function eD(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!jt)){{if(jt.pushState===fd)throw new cd("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(jt.replaceState===md)throw new cd("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,jt.pushState=fd,jt.replaceState=md,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(po))})}}o(eD,"consolidateGlobalUrlEvents");function qi(e,t){const r=on(e),n=rn({value:rn({value:r.pathname,prefix:ht({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,a=r.hash?rn({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:a}}o(qi,"parseUrlIntoRawRoute");class tD{static{o(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Mu(t,z2),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new G0({defaultValue:r,equalityCheck:o(()=>!1,"equalityCheck")}),eD(),this.removeGlobalListener=zh(globalThis,po,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new q2("Looping route sanitization detected; aborting window URL change listener.");const n=qi(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);v.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Ru(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(qi(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...qi(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),s=this.routeIncludesBasePath(qi(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return J2(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?ht({value:s.hash,prefix:"#"}):""},{searchParamStrategy:bn.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=on(n);return this.params.isPaused||!r.force&&v.jsonEquals(on(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return pm(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Lu(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function rD(e){return new tD({basePath:e,sanitizeRoute(t){return{paths:nD(t.paths),hash:void 0,search:void 0}}})}o(rD,"createBookRouter");function nD(e){const t=e[0];if(v.isEnumValue(t,Ze)){if(t===Ze.Book)return[Ze.Book,...e.slice(1)];if(t===Ze.Search)return e[1]?[t,e[1]]:[Ze.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return hn.paths}o(nD,"sanitizePaths");const Ls=Iu()("element-book-change-route"),pd="vira-",{defineElement:iD}=im({assertInputs:o(e=>{if(!e.tagName.startsWith(pd))throw new Error(`Tag name should start with '${pd}' but got '${e.tagName}'`)},"assertInputs")}),er=iD,k=wr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function me({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}o(me,"defineIcon");const sD=me({name:"Check24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ft=wr({"vira-form-input-radius":"8px"}),Ci=P`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,mt=wr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Or=wr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":P`calc(${Ft["vira-form-input-radius"].value} + 4px)`});function _u({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=dt(k1(n+r+t));return P`
        ${dt(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Or["vira-focus-outline-color"].value};
            border-radius: ${Or["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}o(_u,"createFocusStyles");const lr=wr({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Or["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),gm=P`
    padding: 0;
    margin: 0;
`,qt=P`
    ${gm};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,gd=P`#e2e2e2`,ym={menuShadow:P`
        filter: drop-shadow(0px 5px 5px ${gd});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:P`
        filter: drop-shadow(0px -5px 5px ${gd});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Zt=P`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,ne=er()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":o(({inputs:e})=>!!e.fitContainer,"vira-icon-fit-container")},styles:o(({hostClasses:e})=>P`
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
    `,"styles"),render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),oa=er()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":o(({inputs:e})=>e.selected,"vira-dropdown-item-selected")},styles:o(({hostClasses:e})=>P`
        :host {
            display: flex;
            ${Zt};
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

        ${e["vira-dropdown-item-selected"].selector} ${ne} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${ne} {
            transition: opacity
                ${mt["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Ft["vira-form-input-radius"].value}
                ${Ft["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Ft["vira-form-input-radius"].value}
                ${Ft["vira-form-input-radius"].value} 0 0;
        }
    `,"styles"),render({inputs:e}){return D`
            <div class="option">
                <${ne.assign({icon:sD})}></${ne}>
                <slot>${e.label}</slot>
            </div>
        `}});function oD(e,t){return e>t}o(oD,"greaterThan");function aD(e,t){return e<t}o(aD,"lessThan");function ci(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}o(ci,"focusElement");var $e;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})($e||($e={}));var re;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(re||(re={}));function go(e){const t=e[0]?.[0];if(t)return t.navEntry.navParams.group?go(t.children):{node:t,coords:{x:0,y:0}}}o(go,"findDefaultChild");function yd(e,t,r,n){if(!t){const l=go(e.children);return l?(ci(l.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.node.element,coords:l.coords,direction:r,navAction:re.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:re.Navigate}}const{nextNode:i,requiresWrapping:s,coords:a}=wm(t.position,r),u=n?!0:!s;return i&&u?(ci(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:r,navAction:re.Navigate,coords:a}):i?u?{success:!1,reason:"no conditions matched",direction:r,navAction:re.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:re.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:re.Navigate}}o(yd,"navigate");function wm(e,t){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;Nt.isDefined(r,"missing parent");const n=cn.isDefined(r.children[e.nodeCoords.y]),i=r.children.length>1&&(t===$e.Down||t===$e.Up),s=t===$e.Down||t===$e.Right?1:-1,a=s===-1?oD:aD,u=i?As(e.nodeCoords.y+s,{min:0,max:r.children.length-1}):e.nodeCoords.y,l=cn.isDefined(r.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:As(e.nodeCoords.x+s,{min:0,max:n.length-1}),d=r.children[u]?.[c],f=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}o(wm,"calculateNextNode");function uD(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:re.Pibling};const{nextNode:i,requiresWrapping:s,coords:a}=wm(n,t),u=i?.navEntry.navParams.group?go(i.children):{node:i,coords:a},l=r?!0:!s;return!u||!u.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:re.Pibling}:l?(ci(u.node.element),{success:!0,defaulted:!1,newElement:u.node.element,wrapped:s,coords:u.coords,direction:t,navAction:re.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:re.Pibling}}o(uD,"navigatePibling");var et;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(et||(et={}));const Ht={name:"data-nav",js(e){return e?`[${Ht.name}*="${e}"]`:`[${Ht.name}]`},css({baseSelector:e="",navValue:t}={}){return P`
            ${dt(e)}${dt(Ht.js(t))}
        `}},Vu="navEntry";function vm(e){return Vu in e}o(vm,"hasNavEntry");function bm(e){if(vm(e)){const t=e[Vu];return cn.instanceOf(t,Dm,"Invalid nav entry")}else return}o(bm,"extractNavEntry");function lD(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==et.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}o(lD,"createEventListener");class Dm{static{o(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=lD(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Nt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Ht.name,""),ia(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===et.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(et.Focused),ia(this.element)||this.element.focus()):(this.removeNavValue(et.Focused),ia(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,re.Focus)}activate(t){const r=this.navValue,n=t===(r===et.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(et.Active):this.setNavValue(et.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,re.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Ht.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Ht.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function cD(e,t){Object.entries(t).forEach(([r,n])=>{v.isBoolean(n)&&n?e.setAttribute(r,""):v.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}o(cD,"applyAttributes");const dD=Qt(class extends Pt{element;lastKey;constructor(e){super(e),this.element=Ei(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Ye}});function fD(e){return"group"in e?et.Group:e.disabled?et.Disabled:""}o(fD,"determineNavValue");function vt(e,t={}){return dD(m(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Nt.instanceOf(r,HTMLElement);const i={[Ht.name]:fD(t),tabindex:n?0:void 0};cD(r,i);const s=bm(r)||new Dm(r,e,t);vm(r)?(s.navParams=t,s.navController=e):r[Vu]=s,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}o(vt,"nav");function hD(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:re.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:re.Enter};const r=t.position.node.children[0]?.[0];return r?(ci(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:re.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:re.Enter}}o(hD,"enterInto");function mD(e,t){return Am([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}o(mD,"walkNavTree");function Am(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let s=0;s<i.length;s++){const a=i[s],u={ancestorChain:e,nodeCoords:{x:s,y:n},node:a};if(r(u))return u;const l=Am(e.concat(u),a.children,r);if(l)return l}}}o(Am,"walkRecursively");function Em(e,t){const r=mD(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}o(Em,"findNavTreeNodeByNavEntry");function pD(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:re.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:re.Exit};const{nodeCoords:n}=Em(e,r.navEntry);return ci(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:re.Exit,coords:n}}o(pD,"exitOutOf");class gD extends $t()("nav-exit"){static{o(this,"NavExitEvent")}}class Cm extends $t()("nav-exit"){static{o(this,"NavEnterEvent")}}class yD extends $t()("nav-navigate"){static{o(this,"NavigateEvent")}}class $m extends $t()("nav-navigate-pibling"){static{o(this,"NavPiblingEvent")}}function wD(e){return{root:!0,children:km(e)?.children||[]}}o(wD,"mapTree");function km(e){const t=e.element;if(!(t instanceof HTMLElement)||t.getAttribute(Ht.name)===et.Disabled)return;const n=bm(t),i=vD(e);if((n?.navParams.group?!!i.length:!1)||i.length||n)return{root:!1,element:t,navEntry:n,children:i}}o(km,"mapTreeRecursively");function vD(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(u=>u.forEach(l=>r(l)));return}const i=n.navEntry.navParams.x,s=n.navEntry.navParams.y||0,a=yi(t,s,()=>({noX:[],withX:[],y:s}));i==null?a.noX.push(n):a.withX.push({x:i,node:n})}return o(r,"pushNode"),e.children.forEach(n=>{const i=km(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,s)=>i.x-s.x),n.withX.forEach(({x:i,node:s})=>{n.noX.splice(i,0,s)}),n.noX)).filter(v.isTruthy)}o(vD,"expandChildren");class Sm extends Js{static{o(this,"NavController")}rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){go(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=Em(this.getNavTree(),t);return r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0),{success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords}}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:re.Navigate,reason:"NavController is locked."};const n=yd(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new yD({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:re.Enter,reason:"NavController is locked."};const r=hD(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new Cm({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:re.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:re.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Nt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:re.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===re.Activate&&this.currentNavEntry.entry.focus(!0);const t=pD(this.getNavTree(),this.currentNavEntry);return this.dispatch(new gD({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:re.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),s={...this.currentNavEntry?uD(this.currentNavEntry,r,t):yd(n,void 0,r,t),navAction:re.Pibling};return this.dispatch(new $m({detail:s})),s}buildNavTree(){const t=P2(this.rootElement),r=wD(t);return this.cachedNavTree=r,r}}const bD={option:"dropdown-option"},zi=er()({tagName:"vira-dropdown-options",events:{selectionChange:Te()},styles:P`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Ft["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${lr["vira-form-background-color"].value};
            border: 1px solid ${lr["vira-form-border-color"].value};
            color: ${lr["vira-form-foreground-color"].value};
            ${ym.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Ht.css({baseSelector:".dropdown-item:not(.disabled):not(.selected)",navValue:et.Focused})} {
            background-color: ${lr["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${oa} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Ci};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=e.selectedOptions.includes(i),a=i.template||D`
                    <${oa.assign({label:i.label,selected:s})}></${oa}>
                `;return D`
                <div
                    class="dropdown-item ${zt({disabled:!!i.disabled,selected:s})}"
                    ${Qr(bD.option)}
                    title=${Ts(i.hoverText||void 0)}
                    role="option"
                    ${vt(e.navController,{disabled:i.disabled||s})}
                    ${Y("mousedown",u=>{u.stopPropagation()})}
                    ${Y("mouseup",u=>{u.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${a}
                </div>
            `});return D`
            <slot>${n}</slot>
        `}});me({name:"Chat24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});const DD=me({name:"ChevronUp24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${k["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),AD=me({name:"CloseX24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});me({name:"Commit24Icon",svgTemplate:D`
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
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});me({name:"Document24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});const ED=me({name:"Element16Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});me({name:"Element24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const CD=me({name:"EyeClosed24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),$D=me({name:"EyeOpen24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),kD=me({name:"Loader24Icon",svgTemplate:D`
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
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),SD=P`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${mt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,xm=me({name:"LoaderAnimated24Icon",svgTemplate:D`
        <style>
            ${SD}
        </style>
        ${kD.svgTemplate}
    `}),xD=me({name:"Options24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});me({name:"Pencil24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});me({name:"Shield24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});me({name:"SpeakerLoud24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});me({name:"SpeakerMedium24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});me({name:"SpeakerMuted24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});me({name:"SpeakerQuiet24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});me({name:"Star24Icon",svgTemplate:D`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `});const FD=me({name:"StatusFailure24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});me({name:"StatusInProgress24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});me({name:"StatusSuccess24Icon",svgTemplate:D`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `});class ND extends G0{static{o(this,"PageActiveObservable")}constructor(){super({defaultValue:document.hidden,equalityCheck:v.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=o(r=>this.updateVisibility(r),"visibilityHandler");globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=TD.includes(t.type),n=MD.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const MD=["blur","focusout","pagehide"],TD=["focus","focusin","pageshow"],BD=new ND;function PD(e,t){return BD.listen(e,t)}o(PD,"listenToPageActivation");const wd={top:0,left:0,right:0,bottom:0};class Fm extends Ys("hide-pop-up"){static{o(this,"HidePopUpEvent")}}class Nm extends $t()("nav-select"){static{o(this,"NavSelectEvent")}}class ID{static{o(this,"PopUpManager")}navController;listenTarget=new Js;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t,r){this.navController=t,this.options={...this.options,...r}}attachGlobalListeners(){this.cleanupCallbacks=[PD(!1,t=>{t||this.removePopUp()}),xr("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),xr("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(r==="ArrowDown")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:$e.Down,allowWrapping:!1});else if(r==="ArrowUp")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:$e.Up,allowWrapping:!1});else if(r==="ArrowLeft")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:$e.Left,allowWrapping:!1});else if(r==="ArrowRight")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:$e.Right,allowWrapping:!1});else if(r==="Enter"||r==="Return"){const n=this.navController.enterInto({fallbackToActivate:!0});n.success&&(this.listenTarget.dispatch(new Nm({detail:n.coords})),t.stopImmediatePropagation(),t.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Fm)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=O2(t);Nt.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),a=i.getBoundingClientRect(),u=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:a.top,left:a.left,right:a.right-u,bottom:a.bottom-l},d=he(wd,g=>s[g]),f=he(wd,g=>{const y=c[g],b=d[g];return Math.abs(y-b)}),p=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace;return this.attachGlobalListeners(),{popDown:!p,positions:{container:c,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function LD({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),n.slice(0,1)):n}else return[]}o(LD,"filterToSelectedOptions");function RD(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${O1(r)}`)}o(RD,"assertUniqueIdProps");function vd(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}o(vd,"createNewSelection");function bd({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}o(bd,"triggerPopUpState");const Ki={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"};er()({tagName:"vira-dropdown",state({host:e}){return{showPopUpResult:void 0,popUpManager:new ID(new Sm(e))}},hostClasses:{"vira-dropdown-disabled":o(({inputs:e})=>!!e.isDisabled,"vira-dropdown-disabled")},styles:o(({hostClasses:e})=>P`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Or["vira-focus-outline-color"].name}: ${lr["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${qt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Ft["vira-form-input-radius"].value};
            transition: border-radius
                ${mt["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${_u({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${mt["vira-interaction-animation-duration"].value}
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
            border: 1px solid ${lr["vira-form-border-color"].value};
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
            ${Zt};
            border-radius: inherit;
            background-color: ${lr["vira-form-background-color"].value};
            color: ${lr["vira-form-foreground-color"].value};
        }

        .open-upwards ${zi} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${ym.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Ci}
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
    `,"styles"),events:{selectedChange:Te(),openChange:Te()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(Fm,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const a=r.shadowRoot.querySelector(".dropdown-wrapper");Nt.instanceOf(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),e.popUpManager.listen(Nm,a=>{const u=a.detail.x,l=n.options[u];if(!l)throw new Error(`Found no dropdown option at index '${u}'`);n.isMultiSelect||bd({emitEvent:!0,open:!1},{dispatch:o(c=>{i(new s.openChange(c))},"dispatch"),host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(vd(l.id,n.selected,!!n.isMultiSelect)))})},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){RD(n.options);function a(y){bd(y,{dispatch:o(b=>{e(new t.openChange(b))},"dispatch"),host:s,popUpManager:r.popUpManager,updateState:i})}o(a,"triggerPopUp"),n.isDisabled?a({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0}));const u=LD(n),l=n.icon?D`
                  <${ne.assign({icon:n.icon})}
                      ${Qr(Ki.icon)}
                  ></${ne}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?P`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:P`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function d(){a({emitEvent:!0,open:!r.showPopUpResult})}o(d,"respondToClick");const f=!u.length,p=n.selectionPrefix&&!f?D`
                      <span class="selected-label-prefix" ${Qr(Ki.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",g=f?n.placeholder||"":u.map(y=>y.label).join(", ");return D`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${zt({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                ${Qr(Ki.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Y("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0})})}
                ${Y("click",y=>{y.detail===0&&d()})}
                ${Y("mousedown",y=>{y.button===0&&d()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${zt({"using-placeholder":f})}"
                        title=${Ts(f?g:void 0)}
                    >
                        ${p} ${g}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${ne.assign({icon:DD})}
                            class="trigger-icon"
                        ></${ne}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${ft(!!r.showPopUpResult,D`
                            <${zi.assign({options:n.options,selectedOptions:u,navController:r.popUpManager.navController})}
                                ${Y(zi.events.selectionChange,y=>{n.isMultiSelect||a({emitEvent:!0,open:!1}),e(new t.selectedChange(vd(y.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${Qr(Ki.options)}
                            ></${zi}>
                        `)}
                </div>
            </button>
        `}});Be()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":o(({inputs:e})=>e.bold,"vira-bold-bold")},styles:o(({hostClasses:e,cssVars:t})=>P`
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
        `}});var za;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(za||(za={}));const Dd=er()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":o(({inputs:e})=>e.buttonStyle===za.Outline,"vira-button-outline-style"),"vira-button-disabled":o(({inputs:e})=>!!e.disabled,"vira-button-disabled")},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:o(({hostClasses:e,cssVars:t})=>P`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Zt};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Or["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ci};
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
            border-radius: ${Ft["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${mt["vira-interaction-animation-duration"].value},
                background-color
                    ${mt["vira-interaction-animation-duration"].value},
                border-color ${mt["vira-interaction-animation-duration"].value};
        }

        ${_u({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ne} + .text-template {
            margin-left: 8px;
        }
    `,"styles"),render:o(({inputs:e})=>{const t=e.icon?D`
                  <${ne.assign({icon:e.icon})}></${ne}>
              `:"",r=e.text?D`
                  <span class="text-template">${e.text}</span>
              `:"";return D`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `},"render")});er()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":o(({inputs:e})=>e.expanded,"vira-collapsible-wrapper-expanded")},slotNames:["header"],styles:o(({hostClasses:e})=>P`
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
            transition: height ${mt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,"styles"),events:{expandChange:Te()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const a=s.expanded?P`
                  height: ${e.contentHeight}px;
              `:P`
                  height: 0;
              `;return D`
            <button
                class="header-wrapper"
                ${Y("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${nm(({contentRect:u})=>{r({contentHeight:u.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});er()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":o(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:Te(),imageError:Te()},styles:o(({hostClasses:e})=>P`
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
    `,"styles"),render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:s}){const a=e.imageUrl,u=t.erroredUrls[a]?D`
                  <slot class="status-wrapper" name=${s.error}>
                      <${ne.assign({icon:FD})} class="error"></${ne}>
                  </slot>
              `:t.loadedUrls[a]?void 0:D`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${ne.assign({icon:xm})}></${ne}>
                    </slot>
                `;return D`
            ${ft(!!u,u)}
            <img
                class=${zt({hidden:!!u})}
                ${Y("load",async()=>{e._debugLoadDelay&&await ei(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new i.imageLoad)})}
                ${Y("error",async l=>{e._debugLoadDelay&&await ei(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new i.imageError(l.error))})}
                src=${a}
            />
        `}});function Ka({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ka({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}o(Ka,"doesMatch");function OD({value:e,allowed:t,blocked:r}){const n=t?Ka({input:e,matcher:t}):!0,i=r?Ka({input:e,matcher:r}):!1;return n&&!i}o(OD,"isAllowed");function Ga(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(OD({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}o(Ga,"filterTextInputValue");function _D({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const s=Kn(r,HTMLInputElement),a=v.hasKey(r,"data")&&Fh.isString(r.data)||"";if(a){const{blocked:l}=Ga({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l.length&&n(l)}const u=Ga({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==u&&(s.value=u),t!==u&&i(u)}o(_D,"textInputListener");var Pr;(function(e){e.Default="text",e.Password="password",e.Email="email"})(Pr||(Pr={}));const us=er()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Or["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:o(({hostClasses:e,cssVars:t})=>P`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Or["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ci};
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
                ${Zt};
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
                border-radius: ${Ft["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${mt["vira-interaction-animation-duration"].value};
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
                border-radius: ${Ft["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${_u({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Zt};
            }

            button {
                ${qt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${mt["vira-interaction-animation-duration"].value};
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
        `,"styles"),events:{valueChange:Te(),inputBlocked:Te()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":o(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":o(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":o(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown")},render:o(({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=Ga({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?D`
                  <${ne.assign({icon:e.icon})} class="left-side-icon"></${ne}>
              `:"",u=e.fitText?P`
                  width: ${r.forcedInputWidth}px;
              `:"",l=e.disableBrowserHelps||e.type===Pr.Password;return D`
            <label>
                ${a}
                ${ft(!!e.fitText,D`
                        <span
                            class="size-span"
                            ${nm(({contentRect:c})=>{n({forcedInputWidth:c.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${VD(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${l?"off":""}
                    autocorrect=${l?"off":""}
                    autocapitalize=${l?"off":""}
                    spellcheck=${l?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Y("input",c=>{_D({inputs:e,previousValue:s,event:c,inputBlockedCallback(d){t(new i.inputBlocked(d))},newValueCallback(d){t(new i.valueChange(d))}})})}
                    placeholder=${e.placeholder}
                    ${e.attributePassthrough?v2(e.attributePassthrough):H}
                />
                ${ft(!!(e.showClearButton&&e.value),D`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Y("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${ne.assign({icon:AD})}></${ne}>
                        </button>
                    `)}
                ${ft(e.type===Pr.Password,D`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Y("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${ne.assign({icon:r.showPassword?$D:CD})}></${ne}>
                        </button>
                    `)}
                ${ft(!!e.suffix,D`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `},"render")});function VD(e,t){return e===Pr.Password&&t?Pr.Default:e||Pr.Default}o(VD,"calculateEffectiveInputType");er()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:o(({cssVars:e})=>P`
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
    `,"styles"),render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(o(t,"clickCallback"),e.link?.newTab)return D`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label=${Ts(e.aria?.label||void 0)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return D`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    aria-label=${Ts(e.aria?.label||void 0)}
                    ${Y("click",t)}
                >
                    <slot></slot>
                </a>
            `}}});const{defineElement:pt}=im(),ut=pt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:o(({cssVars:e})=>P`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:o(({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return D`
            <a
                href=${r}
                ${Y("click",n=>{(!e.router||pm(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Ls(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function UD(e,t){return e.entry.entryType===ke.Root?!1:e.entry.entryType===ke.Page||v.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:v.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}o(UD,"shouldShowTreeNodeInNav");const Ut=pt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:o(({cssVars:e})=>P`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${X["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${X["element-book-nav-hover-background-color"].value};
            color: ${X["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${X["element-book-nav-active-background-color"].value};
            color: ${X["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${ut.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${X["element-book-nav-selected-background-color"].value};
            color: ${X["element-book-nav-selected-foreground-color"].value};
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

        ${ne} {
            display: inline-flex;
            color: ${X["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!UD(r,e.selectedPath))return;const n=P`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return D`
                <li style=${n}>
                    <${ut.assign({router:e.router,route:{paths:[Ze.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${zt({"title-row":!0,selected:e.selectedPath?v.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ft(nn(r,ke.ElementExample),D`
                                    <${ne.assign({icon:ED})}></${ne}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${ut}>
                </li>
            `});return D`
            <${ut.assign({route:hn,router:e.router})}>
                <slot name=${Kt.NavHeader}>Book</slot>
            </${ut}>
            <ul>
                ${t}
            </ul>
        `}});async function WD(e){await Ps(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await L2(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}o(WD,"scrollSelectedNavElementIntoView");const yr=pt()({tagName:"book-error",styles:P`
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
    `,render({inputs:e}){return(v.isArray(e.message)?e.message:[e.message]).map(r=>D`
                <p>${r}</p>
            `)}}),di=pt()({tagName:"book-page-controls",events:{controlValueChange:Te()},hostClasses:{"book-page-controls-has-controls":o(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:o(({hostClasses:e})=>P`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${X["element-book-page-foreground-faint-level-1-color"].value};
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

        ${us} {
            height: 24px;
            max-width: 128px;
        }

        ${ne}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],s)=>{if(i.controlType===Re.Hidden)return"";const a=jD(e.currentValues[n],i,u=>{const l=v.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:u}}))});return D`
                    <div class="control-wrapper">
                        ${ft(s===0,D`
                                <${ne.assign({icon:xD})}
                                    class="options-icon"
                                ></${ne}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function jD(e,t,r){return qr(t,Re.Hidden)?"":qr(t,Re.Checkbox)?D`
            <input
                type="checkbox"
                ?checked=${e}
                ${Y("input",n=>{const i=Kn(n,HTMLInputElement);r(i.checked)})}
            />
        `:qr(t,Re.Color)?D`
            <input
                type="color"
                .value=${e}
                ${Y("input",n=>{const i=Kn(n,HTMLInputElement);r(i.value)})}
            />
        `:qr(t,Re.Text)?D`
            <${us.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Y(us.events.valueChange,n=>{r(n.detail)})}
            ></${us}>
        `:qr(t,Re.Number)?D`
            <input
                type="number"
                .value=${e}
                ${Y("input",n=>{const i=Kn(n,HTMLInputElement);r(i.value)})}
            />
        `:qr(t,Re.Dropdown)?D`
            <select
                .value=${e}
                ${Y("input",n=>{const i=Kn(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>D`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:D`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}o(jD,"createControlInput");const Ad=pt()({tagName:"book-breadcrumbs",styles:P`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:o(({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const s=n>=i.length-1,a=i.slice(0,n+1),u=s?"":D`
                      <span class="spacer">&gt;</span>
                  `;return D`
                <${ut.assign({route:{hash:void 0,search:void 0,paths:[Ze.Book,...a]},router:e.router})}>
                    ${r}
                </${ut}>
                ${u}
            `}):D`
                &nbsp;
            `},"render")}),aa=pt()({tagName:"book-breadcrumbs-bar",styles:P`
        :host {
            border-bottom: 1px solid
                ${X["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${X["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return D`
            ${ft(!!e.currentSearch,D`
                    &nbsp;
                `,D`
                    <${Ad.assign({currentRoute:e.currentRoute,router:e.router})}></${Ad}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Y("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await ei({milliseconds:200}),n.value===i&&(n.value?t(new Ls({paths:[Ze.Search,encodeURIComponent(n.value)]})):t(new Ls(hn)))})}
            />
        `}}),Ed=pt()({tagName:"book-entry-description",styles:P`
        :host {
            color: ${X["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${X["element-book-page-foreground-color"].value};
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
            `)}}),Cd=pt()({tagName:"book-page-wrapper",styles:P`
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

        ${ut} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?D`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:D`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Ze.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Ph(e.pageNode.entry.errors):void 0;return n&&console.error(n),D`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${ut.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${ut}>
                    ${n?D`
                              <${yr.assign({message:n.message})}></${yr}>
                          `:D`
                              <${Ed.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Ed}>
                              <${di.assign({config:e.pageNode.entry.controls,currentValues:fu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${di}>
                          `}
                </div>
            </div>
        `}}),Gi=pt()({tagName:"book-element-example-controls",styles:P`
        :host {
            display: flex;
            color: ${X["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Ze.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return D`
            <${ut.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${ut}>
        `}}),$d=Symbol("unset-internal-state"),kd=pt()({tagName:"book-element-example-viewer",state(){return{isUnset:$d}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Ph(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===$d&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return D`
                ${ft(!!t.elementExampleNode.entry.styles,D`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",He(n)),console.error(n),D`
                <${yr.assign({message:`${t.elementExampleNode.entry.title} failed: ${He(n)}`})}></${yr}>
            `}},options:{allowPolymorphicState:!0}}),Sd=pt()({tagName:"book-element-example-wrapper",styles:P`
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

        ${Gi} {
            color: ${X["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Gi} {
            color: ${X["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return D`
            <div class="individual-example-wrapper">
                <${Gi.assign(lu(e,["currentPageControls"]))}></${Gi}>
                <${kd.assign(e)}></${kd}>
            </div>
        `}});function Mm(e,t,r,n){const i=xa(r,n),s=[];if(i){const a=Mm(e,t,i,n);a&&s.push(a)}if(nn(r,ke.Page)&&!e.includes(r)){const a=fu(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:a,breadcrumbs:he(a,()=>r.fullUrlBreadcrumbs)})}return s.reduce((a,u)=>({config:{...a.config,...u.config},current:{...a.current,...u.current},breadcrumbs:{...a.breadcrumbs,...u.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}o(Mm,"getFlattenedControlsFromHiddenParents");function qD({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:s}){if(!e.length&&n)return[D`
                No results
            `];const a=v.isLengthAtLeast(e,1)?Mm(e,i,e[0],s):void 0,u=a&&Object.values(a.config).length&&v.isLengthAtLeast(e,1)?D`
                  <${di.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${di}>
              `:H,l=g2(e,c=>c.fullUrlBreadcrumbs.join(">"),c=>{if(nn(c,ke.Page))return D`
                    <${Cd.assign({isTopLevel:t,pageNode:c,controls:i,router:r})}
                        class="block-entry"
                    ></${Cd}>
                `;if(nn(c,ke.ElementExample)){const d=fu(i,c.fullUrlBreadcrumbs.slice(0,-1));return D`
                    <${Sd.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Sd}>
                `}else return nn(c,ke.Root)?H:D`
                    <${yr.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${yr}>
                `});return[u,l]}o(qD,"createNodeTemplates");const Hr=pt()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:P`
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

        ${aa} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${mt["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Te()},render:o(({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const s=Fa(e.currentRoute.paths),a=qD({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return D`
            <${aa.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${aa}>

            ${ft(e.showLoading,D`
                    <div
                        ${ud(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${ne.assign({icon:xm})}></${ne}>
                    </div>
                    ${ft(!!n.lastElement,D`
                            ${n.lastElement}
                            <slot name=${Kt.Footer}></slot>
                        `)}
                `,D`
                    <div
                        ${ud(u=>{i({lastElement:u})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${Kt.Footer}></slot>
                `)}
        `},"render")});function zD(e,t,r){const n=xd(e,t);return n.length?n:(r(hn),xd(e,hn.paths))}o(zD,"getCurrentNodes");function xd(e,t){return e.filter(r=>U1({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}o(xd,"filterNodes");const Fd=Be()({tagName:"element-book-app",state(){return{currentRoute:hn,router:void 0,loading:!0,colors:{config:void 0,theme:ld(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Te()},styles:P`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${X["element-book-page-background-color"].value};
            color: ${X["element-book-page-foreground-color"].value};
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

        ${Hr} {
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
    `,init({host:e,state:t}){setTimeout(async()=>{await Nd(e,Fa(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:o(({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function a(d){return{...e.currentRoute,...d}}o(a,"mergeRoutes");function u(d){const f=a(d);return!v.jsonEquals(e.currentRoute,f)}o(u,"areRoutesNew");function l(d){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,d].filter(v.isTruthy).join(" - "))}o(l,"updateWindowTitle");function c(d){if(!u(d))return;const f=a(d);e.router?e.router.setRoute(f):n({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!v.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(f.paths))}o(c,"updateRoutes");try{if(t.elementBookRoutePaths&&!v.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=rD(t.internalRouterConfig.basePath);n({router:A}),A.listen(!0,x=>{n({currentRoute:x})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const d={themeColor:t.themeColor};if(!v.jsonEquals(d,e.colors.config)){const A=ld(d);n({colors:{config:d,theme:A}}),bw(r,A)}const f=t._debug??!1,p=K1({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Hh(p.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=Fa(e.currentRoute.paths),b=(g?j2({flattenedNodes:p.flattenedNodes,searchQuery:g}):void 0)??zD(p.flattenedNodes,e.currentRoute.paths,c);l(b[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),D`
                <div
                    class="root"
                    ${Y(Ls,async A=>{const x=A.detail;if(!u(x))return;if(n({loading:!0}),c(x),!(r.shadowRoot.querySelector(Ut.tagName)instanceof Ut))throw new TypeError(`Failed to find child '${Ut.tagName}'`);await Nd(r,g,e.currentRoute)})}
                    ${Y(di.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const x=Z1($,A.detail.fullUrlBreadcrumbs,A.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:x}})})}
                >
                    <${Ut.assign({flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Kt.NavHeader}
                            slot=${Kt.NavHeader}
                        ></slot>
                    </${Ut}>
                    <${Hr.assign({controls:$,currentNodes:b,currentRoute:e.currentRoute,debug:f,originalTree:p.tree,router:e.router,showLoading:e.loading})}
                        ${Y(Hr.events.loadingRender,async A=>{await Ps();const x=r.shadowRoot.querySelector(Hr.tagName);x?x.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Hr.tagName}' for scrolling.`),await Ps(),n({loading:!A.detail})})}
                    >
                        <slot
                            name=${Kt.Footer}
                            slot=${Kt.Footer}
                        ></slot>
                    </${Hr}>
                </div>
            `):D`
                    <${yr.assign({message:"Failed to generate page controls."})}></${yr}>
                `}catch(d){return console.error(d),D`
                <p class="error">${He(d)}</p>
            `}},"render")});async function Nd(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Ut.tagName);if(!(n instanceof Ut))throw new TypeError(`Failed to find child '${Ut.tagName}'`);await WD(n)}o(Nd,"scrollNav");var fe;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(fe||(fe={}));const Zi=window.navigator;function Uu(){return Th(Array.from(v.hasKey(Zi,"webkitGetGamepads")?Zi.webkitGetGamepads():v.hasKey(Zi,"getGamepads")?Zi.getGamepads():[]),e=>{if(e)return{key:e.index,value:e}})}o(Uu,"getGamepads");const Ae={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function Rs(e){return v.hasValue(Ae,e)}o(Rs,"isGamepadDeviceKey");const KD={Mouse:"mouse",Keyboard:"keyboard"},Q={...KD,...Ae};var Dn;(function(e){e.Button="button",e.Axe="axe"})(Dn||(Dn={}));function Gn(e){return`button-${e}`}o(Gn,"createButtonName");function Za(e){return`axe-${e}`}o(Za,"createAxeName");function GD(e){const[t]=Vh(e,"-");if(v.isEnumValue(t,Dn))return t;throw new Error(`Failed to parse input type from input named '${e}'`)}o(GD,"parseInputTypeFromInputName");const ZD=.01;function HD({value:e,gamepadDeadZone:t,globalDeadZone:r}){const n=t??(r||ZD);return Math.abs(e)>n?e:0}o(HD,"applyDeadZone");function Md({gamepadInput:e,inputIndex:t,deadZones:r,globalDeadZone:n}){const i=v.isNumber(e),s=i?Za(t):Gn(t),a=i?e:e.value;return{inputName:s,value:HD({value:a,gamepadDeadZone:r[s],globalDeadZone:n}),inputType:i?Dn.Axe:Dn.Button}}o(Md,"serializeGamepadInput");function YD({gamepad:e,deadZoneSettings:t,globalDeadZone:r}){const n=String(e.index);if(!Rs(n))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const i=t[e.id]||{},s=e.axes.map((l,c)=>Md({gamepadInput:l,inputIndex:c,deadZones:i,globalDeadZone:r})),a=e.buttons.map((l,c)=>Md({deadZones:i,gamepadInput:l,globalDeadZone:r,inputIndex:c})),u=dn([...a,...s].map(l=>[l.inputName,l]));return{axes:s,buttons:a,isConnected:e.connected,gamepadName:e.id,deviceKey:n,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:u}}o(YD,"serializeGamepad");function JD(e){return he(Uu(),(t,r)=>YD({gamepad:r,...e}))}o(JD,"readCurrentGamepads");function XD(e){const t={},r={deviceKey:e.deviceKey,deviceName:e.gamepadName,deviceType:fe.Gamepad};return Object.values(e.inputsByName).forEach(n=>{n.value&&(t[n.inputName]={...r,details:n,inputName:n.inputName,inputValue:n.value})}),t}o(XD,"gamepadToCurrentInputs");function QD(e){return he(e,(t,r)=>({currentInputs:XD(r),deviceDetails:r,deviceName:r.gamepadName,deviceKey:r.deviceKey,deviceType:fe.Gamepad}))}o(QD,"gamepadMapToInputDevices");function Td(e){return Lr(e).map(n=>n.currentInputs).filter(v.isTruthy).map(n=>Lr(n)).flat()}o(Td,"allInputDevicesToAllInputs");const Bd={deviceDetails:void 0,deviceKey:Q.Keyboard,deviceName:"keyboard",deviceType:fe.Keyboard},Hi={deviceDetails:void 0,deviceKey:Q.Mouse,deviceName:"mouse",deviceType:fe.Mouse},Tm={[Q.Gamepad1]:fe.Gamepad,[Q.Gamepad2]:fe.Gamepad,[Q.Gamepad3]:fe.Gamepad,[Q.Gamepad4]:fe.Gamepad,[Q.Keyboard]:fe.Keyboard,[Q.Mouse]:fe.Mouse};function yo(){return(e,t)=>{const r=jh(e,{capitalizeFirstLetter:!0}),n=class extends $t()(e){static{o(this,"TimedEventConstructor")}static getNewData=t;static constructIfDataIsNew(i,...s){const a=n.getNewData(...s);if(a)return new n({detail:{timestamp:i,inputs:a}})}eventType=e};return Object.defineProperty(n,"name",{value:r,writable:!0}),n}}o(yo,"defineTimedEvent");function e5(...[e,t]){return t}o(e5,"allDevicesUpdatedDataCheckCallback");const t5=yo()("all-devices-updated",e5);function Pd(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}o(Pd,"areInputsEqual");function r5(...[e,t]){const r=Td(t),n=e?Td(e):[];if(!v.jsonEquals(n,r)){const i=r.filter(a=>!n.some(u=>Pd(u,a))),s=n.filter(a=>!r.some(u=>Pd(u,a)));return{newInputs:i,removedInputs:s,allCurrentInputs:r}}}o(r5,"didCurrentInputsChange");const wo=yo()("current-inputs-changed",r5);function n5(...[e,t]){if(!e)return[];const r=te(e).filter(n=>!v.hasKey(t,n));if(r.length)return r.map(n=>e[n]).filter(v.isTruthy)}o(n5,"wereDevicesRemoved");const Bm=yo()("devices-removed",n5);function i5(...[e,t]){if(!e)return Lr(t).filter(v.isTruthy);const r=te(t).filter(n=>!v.hasKey(e,n));if(r.length)return r.map(n=>t[n]).filter(v.isTruthy)}o(i5,"areThereNewDevices");const Pm=yo()("new-devices-added",i5),Im=[t5,Pm,Bm,wo];Object.fromEntries(Im.map(e=>[e.type,e]));const Id="code";class xn extends qh{static{o(this,"InputDeviceHandler")}currentKeyboardInputs={};currentMouseInputs={};gamepadDeadZoneSettings={};lastReadInputDevices;loopIsRunning=!1;globalDeadZone=0;removeGlobalListeners=o(()=>{},"removeGlobalListeners");currentLoopIndex=-1;lastEventDetails={};constructor(t={}){super(),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){const r=[xr("keydown",n=>{const i=Gn(n[Id]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:fe.Keyboard,details:{keyboardEvent:n},deviceKey:Q.Keyboard,deviceName:Bd.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),xr("keyup",n=>{delete this.currentKeyboardInputs[Gn(n[Id])]}),xr("mousedown",n=>{const i=Gn(n.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:fe.Mouse,details:{mouseEvent:n},deviceName:Hi.deviceName,deviceKey:Q.Mouse,inputName:i,inputValue:1})}),xr("mouseup",n=>{delete this.currentMouseInputs[Gn(n.button)]}),t.disableMouseMovement?void 0:xr("mousemove",n=>{const i=Za("x"),s=Za("y");this.currentMouseInputs[i]={deviceType:fe.Mouse,details:{mouseEvent:n},deviceName:Hi.deviceName,deviceKey:Q.Mouse,inputName:i,inputValue:n.clientX},this.currentMouseInputs[s]={deviceType:fe.Mouse,details:{mouseEvent:n},deviceName:Hi.deviceName,deviceKey:Q.Mouse,inputName:s,inputValue:n.clientY}})];this.removeGlobalListeners=()=>{r.forEach(n=>n?.())}}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r,n){Im.forEach(i=>{const s=i.constructIfDataIsNew(t,r,n);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[t,r,n]},this.dispatch(s))})}getCurrentDeviceValues(t,r){const n=JD({deadZoneSettings:t,globalDeadZone:r}),i=QD(n);return{[Q.Keyboard]:{...Bd,currentInputs:{...this.currentKeyboardInputs}},[Q.Mouse]:{...Hi,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now(),n=this.globalDeadZone){const i=this.getCurrentDeviceValues(t,n),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(r,s,i),i}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}const Ld=Be()({tagName:"vir-players-bindings-debug",styles:P`
        h3 {
            margin: 4px;
        }
    `,render({inputs:e}){return Xt(e.playersBindingsMap).map(([t,r])=>D`
                    <h3>Player ${t}</h3>
                    <${Rd.assign({bindingsMap:r})}></${Rd}>
                `)}}),Rd=Be()({tagName:"vir-bindings-debug",styles:P`
        h4 {
            margin: 4px;
        }
    `,render({inputs:e}){return Xt(e.bindingsMap).map(([t,r])=>{const n=r.map(i=>{const s=Rs(i.deviceKey)?`gamepad ${i.deviceKey}`:i.deviceKey;return D`
                        <tr>
                            <td>${s}:</td>
                            <td>${i.inputName}</td>
                        </tr>
                    `});return D`
                    <section class="binding">
                        <h4>${t}</h4>
                        <table><tbody>${n}</tbody></table>
                    </section>
                `})}});class Od extends $t()("vir-line-pause"){static{o(this,"VirLinePauseEvent")}}class Lm extends $t()("vir-line-state-rate-calculated"){static{o(this,"VirLineUpdateRateEvent")}}class s5 extends $t()("vir-line-state-change"){static{o(this,"VirLineStateUpdateEvent")}}class _d extends $t()("vir-line-error"){static{o(this,"VirLineErrorEvent")}}class o5 extends Ys("vir-line-update-skipped"){static{o(this,"VirLineUpdateSkippedEvent")}}class a5 extends Ys("vir-line-destroy"){static{o(this,"VirLineDestroyEvent")}}const Rm="animation frames",u5={enableLogging:!1,targetUpdateRate:void 0,init:{startUpdateLoopImmediately:!1},minUpdateRateCalculationInterval:{milliseconds:500},updateLoopInterval:Rm};function l5(e){const t=[],r=new Set;if(e.forEach(n=>{const i=n.stageId.name;r.has(i)?t.push(i):r.add(i)}),t.length)throw new Error(`Duplicate stage names provided to VirLine: ${t.join(", ")}`)}o(l5,"assertValidStages");function c5(e){return[e.name,e.version==null?void 0:String(e.version)].filter(v.isTruthy).join("@")}o(c5,"stageIdToString");class Om{static{o(this,"VirLineStage")}stageId;executor;constructor(t,r){this.stageId=t,this.executor=r}}const d5=Object.prototype.toString;function _m(e){if(e===void 0)return"undefined";if(e===null)return"null";const t=typeof e;if(t==="boolean")return"boolean";if(t==="string")return"string";if(t==="number")return"number";if(t==="symbol")return"symbol";if(t==="function")return g5(e)?"generatorfunction":"function";if(f5(e))return"array";if(v5(e))return"buffer";if(w5(e))return"arguments";if(m5(e))return"date";if(h5(e))return"error";if(p5(e))return"regexp";switch(Vm(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(y5(e))return"generator";switch(d5.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}o(_m,"kindOf");function Vm(e){return typeof e.constructor=="function"?e.constructor.name:null}o(Vm,"ctorName");function f5(e){return Array.isArray,Array.isArray(e)}o(f5,"isArray");function h5(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}o(h5,"isError");function m5(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}o(m5,"isDate");function p5(e){return e instanceof RegExp?!0:typeof e.flags=="string"&&typeof e.ignoreCase=="boolean"&&typeof e.multiline=="boolean"&&typeof e.global=="boolean"}o(p5,"isRegexp");function g5(e){return Vm(e)==="GeneratorFunction"}o(g5,"isGeneratorFn");function y5(e){return typeof e.throw=="function"&&typeof e.return=="function"&&typeof e.next=="function"}o(y5,"isGeneratorObj");function w5(e){try{if(typeof e.length=="number"&&typeof e.callee=="function")return!0}catch(t){if(t.message.includes("callee"))return!0}return!1}o(w5,"isArguments");function v5(e){return e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}o(v5,"isBuffer");const Vd=Symbol.prototype.valueOf;function b5(e){switch(_m(e)){case"array":return e.slice();case"object":return Object.assign({},e);case"date":return new e.constructor(Number(e));case"map":return new Map(e);case"set":return new Set(e);case"buffer":return C5(e);case"symbol":return $5(e);case"arraybuffer":return A5(e);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return E5(e);case"regexp":return D5(e);case"error":return Object.create(e);default:return e}}o(b5,"cloneShallow");function D5(e){const t=e.flags===void 0?/\w+$/.exec(e)||void 0:e.flags,r=new e.constructor(e.source,t);return r.lastIndex=e.lastIndex,r}o(D5,"cloneRegExp");function A5(e){const t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}o(A5,"cloneArrayBuffer");function E5(e){return new e.constructor(e.buffer,e.byteOffset,e.length)}o(E5,"cloneTypedArray");function C5(e){const t=e.length,r=Buffer.allocUnsafe?Buffer.allocUnsafe(t):Buffer.from(t);return e.copy(r),r}o(C5,"cloneBuffer");function $5(e){return Vd?new Object(Vd.call(e)):{}}o($5,"cloneSymbol");function Os(e,t){switch(_m(e)){case"object":return k5(e);case"array":return S5(e);default:return b5(e)}}o(Os,"cloneDeep");function k5(e,t){if(v.isObject(e)){const r=new e.constructor;for(const n in e)r[n]=Os(e[n]);return r}return e}o(k5,"cloneObjectDeep");function S5(e,t){const r=new e.constructor(e.length);for(const[n,i]of e.entries())r[n]=Os(i);return r}o(S5,"cloneArrayDeep");class $i extends Js{static{o(this,"VirLine")}stages;constructor(t,r,n){super(),this.stages=t,this.currentState={...r},n&&this.updateOptions(n),l5(t),this.options.init.startUpdateLoopImmediately&&this.startUpdateLoop()}options=u5;isUpdateLoopPaused=!0;currentState;get stateType(){throw new Error("Access to 'stateType' is only allowed as a type.")}lastStateUpdateHighResTimestamp=0;updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0};isCurrentlyUpdating=!1;stateListeners=[];updateOptions(t){this.options=Uh(this.options,t)}startUpdateLoop(){return this.isUpdateLoopPaused?(this.isUpdateLoopPaused=!1,this.dispatch(new Od({detail:!1})),this.updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0},this.runUpdateLoop(),!0):!1}pauseUpdateLoop(){return this.isUpdateLoopPaused?!1:(this.isUpdateLoopPaused=!0,this.dispatch(new Od({detail:!0})),!0)}destroy(){this.pauseUpdateLoop(),this.removeAllStateListeners(),this.dispatch(new a5),super.destroy()}listenToState(t,r,n){const i=this.stateListeners.find(a=>v.jsonEquals(a.selection,r)),s=Wl(this.currentState,r);return i?i.listeners.add(n):this.stateListeners.push({selection:r,lastValue:Os(s),listeners:new Set([n])}),t&&n(s),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners=[]}removeStateListener(t,r){const n=this.stateListeners.findIndex(s=>v.jsonEquals(s.selection,t)),i=this.stateListeners[n];return!i||!i.listeners.delete(r)?!1:(i.listeners.size||this.stateListeners.splice(n,1),!0)}async triggerUpdate(){if(this.isCurrentlyUpdating)return this.dispatch(new o5),this.options.enableLogging&&console.warn("Update skipped: another is still in progress."),!1;this.isCurrentlyUpdating=!0;const t=performance.now(),r={milliseconds:t-this.lastStateUpdateHighResTimestamp};this.lastStateUpdateHighResTimestamp=t,this.updateRateCounters.updateCount++;const n=await this.runStateUpdate(t,r);if(this.isCurrentlyUpdating=!1,n)throw n;return await this.fireStateListeners(),!0}runUpdateLoop(){Ul(()=>this.triggerUpdate());const t=o(()=>{this.isUpdateLoopPaused||this.runUpdateLoop()},"executeAgain");if(this.options.updateLoopInterval===Rm)window.requestAnimationFrame(t);else{const r=Ct(this.options.updateLoopInterval,{milliseconds:!0});setTimeout(t,r.milliseconds)}}async fireStateListeners(){this.dispatch(new s5({detail:this.currentState}));const t=[];this.stateListeners.forEach(r=>{const n=Wl(this.currentState,r.selection);v.deepEquals(n,r.lastValue)||(r.lastValue=Os(n),r.listeners.forEach(i=>{t.push(Ul(async()=>await i(n)))}))}),await Promise.all(t)}async runStateUpdate(t,r){try{const n={timeSinceLastUpdate:r,updateStartTime:{milliseconds:t}};await b1(this.stages,async i=>{const s={...n,state:this.currentState};try{await i.executor(s)}catch(a){const u=an(a,`Stage ${V1({value:c5(i.stageId),wrapper:"'"})} failed`);console.error(u),this.dispatch(new _d({detail:u}))}}),this.calculateUpdateRate(t);return}catch(n){const i=an(n,"Failed to update state");return console.error(i),this.dispatch(new _d({detail:i})),i}}calculateUpdateRate(t){if(this.options.minUpdateRateCalculationInterval==null)return;const r=Ct(this.options.minUpdateRateCalculationInterval,{milliseconds:!0}).milliseconds,n=t-this.updateRateCounters.calculatedAtHighResTimestamp;if(n>r){const i=this.updateRateCounters.updateCount;this.updateRateCounters={calculatedAtHighResTimestamp:t,updateCount:0},this.dispatch(new Lm({detail:{calculatedAt:Vb(t+performance.timeOrigin,Mb),durationSinceLastCalculation:{milliseconds:n},updateCount:i,updatesPerSecond:i/n*1e3}}))}}}var _;(function(e){e.SwitchPro="switch-pro",e.PlaystationDualShock="playstation-dual-shock",e.PlaystationDualShock4="playstation-dual-shock-4",e.PlaystationDualSense="playstation-dual-sense",e.SteamDeck="steam-deck",e.Xbox360="xbox-360",e.XboxWireless="xbox-wireless"})(_||(_={}));const Ud={[_.SwitchPro]:"Switch Pro Controller",[_.PlaystationDualShock]:"PlayStation DualShock",[_.PlaystationDualShock4]:"PlayStation DualShock 4",[_.PlaystationDualSense]:"PlayStation DualSense",[_.SteamDeck]:"Steam Deck",[_.Xbox360]:"Xbox 360",[_.XboxWireless]:"Xbox Wireless"};var _t;(function(e){e.Microsoft="microsoft",e.Nintendo="nintendo",e.Sony="sony",e.Valve="valve"})(_t||(_t={}));const x5={[_.SwitchPro]:"Nintendo Switch Pro gamepad for the Nintendo Switch console.",[_.PlaystationDualSense]:"Sony PlayStation DualSense gamepad for the Sony PlayStation 5 console.",[_.PlaystationDualShock]:"Sony PlayStation DualShock gamepad for the Sony PlayStation 1 through Sony PlayStation 3 consoles.",[_.PlaystationDualShock4]:"Sony PlayStation DualShock 4 gamepad for the Sony PlayStation 4 console.",[_.SteamDeck]:"Gamepad for the Valve Steam Deck handheld console.",[_.Xbox360]:"Microsoft Xbox 360 gamepad for the Microsoft Xbox 360 console. Can be wired or wireless.",[_.XboxWireless]:"Microsoft Xbox Wireless gamepad for Microsoft Xbox One through Xbox Series X/S consoles."},Um=[{gamepadModels:[_.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The capture / screenshot button is not detected by this browser."}},{gamepadModels:[_.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The share button is not detected by this browser."}},{gamepadModels:[_.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"B","button-1":"A","button-2":"Y","button-3":"X","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home","button-17":"capture"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[_.PlaystationDualSense],systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation"},gamepadModels:[_.PlaystationDualSense],systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation, the touch pad button, and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"L2-axe","axe-5":"R2-axe","axe-6":"d-pad","button-0":"square","button-1":"X","button-2":"O","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"playstation","button-13":"touch-pad","button-14":"mute","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[_.PlaystationDualSense],systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[_.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"d-pad","button-0":"A","button-1":"B","button-2":"unknown","button-3":"X","button-4":"Y","button-5":"unknown","button-6":"LB","button-7":"RB","button-8":"unknown","button-9":"unknown","button-10":"view","button-11":"menu","button-12":"guide","button-13":"L3","button-14":"R3","button-15":"LT","button-16":"RT"},systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[_.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-17":"share"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0}],Wu={"Pro Controller Extended Gamepad":_.SwitchPro,"Xbox Wireless Controller Extended Gamepad":_.XboxWireless,"DualSense Wireless Controller Extended Gamepad":_.PlaystationDualSense,"Wireless Controller Extended Gamepad":_.PlaystationDualSense,"54c-ce6-Wireless Controller":_.PlaystationDualSense,"45e-b13-Xbox Wireless Controller":_.XboxWireless,"Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)":_.SwitchPro,"Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)":_.PlaystationDualSense,"Xbox Series X Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b12)":_.XboxWireless,"DUALSHOCK 4 Wireless Controller Extended Gamepad":_.PlaystationDualShock4,"DUALSHOCK 4 Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)":_.PlaystationDualShock4,"54c-9cc-DUALSHOCK 4 Wireless Controller":_.PlaystationDualShock4,"HID-compliant game controller (STANDARD GAMEPAD Vendor: 045e Product: 0b13)":_.XboxWireless},F5={[_.SwitchPro]:_t.Nintendo,[_.Xbox360]:_t.Microsoft,[_.XboxWireless]:_t.Microsoft,[_.PlaystationDualSense]:_t.Sony,[_.PlaystationDualShock]:_t.Sony,[_.PlaystationDualShock4]:_t.Sony,[_.SteamDeck]:_t.Valve},N5={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Wm={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},ye={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Ie={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},ir={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class C{static{o(this,"Utils")}static getFirstMatch(t,r){const n=r.match(t);return n&&n.length>0&&n[1]||""}static getSecondMatch(t,r){const n=r.match(t);return n&&n.length>1&&n[2]||""}static matchAndReturnConst(t,r,n){if(t.test(r))return n}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const r=t.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(r.push(0),r[0]===10)switch(r[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const r=t.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(r.push(0),!(r[0]===1&&r[1]<5)){if(r[0]===1&&r[1]<6)return"Cupcake";if(r[0]===1&&r[1]>=6)return"Donut";if(r[0]===2&&r[1]<2)return"Eclair";if(r[0]===2&&r[1]===2)return"Froyo";if(r[0]===2&&r[1]>2)return"Gingerbread";if(r[0]===3)return"Honeycomb";if(r[0]===4&&r[1]<1)return"Ice Cream Sandwich";if(r[0]===4&&r[1]<4)return"Jelly Bean";if(r[0]===4&&r[1]>=4)return"KitKat";if(r[0]===5)return"Lollipop";if(r[0]===6)return"Marshmallow";if(r[0]===7)return"Nougat";if(r[0]===8)return"Oreo";if(r[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,r,n=!1){const i=C.getVersionPrecision(t),s=C.getVersionPrecision(r);let a=Math.max(i,s),u=0;const l=C.map([t,r],c=>{const d=a-C.getVersionPrecision(c),f=c+new Array(d+1).join(".0");return C.map(f.split("."),p=>new Array(20-p.length).join("0")+p).reverse()});for(n&&(u=a-Math.min(i,s)),a-=1;a>=u;){if(l[0][a]>l[1][a])return 1;if(l[0][a]===l[1][a]){if(a===u)return 0;a-=1}else if(l[0][a]<l[1][a])return-1}}static map(t,r){const n=[];let i;if(Array.prototype.map)return Array.prototype.map.call(t,r);for(i=0;i<t.length;i+=1)n.push(r(t[i]));return n}static find(t,r){let n,i;if(Array.prototype.find)return Array.prototype.find.call(t,r);for(n=0,i=t.length;n<i;n+=1){const s=t[n];if(r(s,n))return s}}static assign(t,...r){const n=t;let i,s;if(Object.assign)return Object.assign(t,...r);for(i=0,s=r.length;i<s;i+=1){const a=r[i];typeof a=="object"&&a!==null&&Object.keys(a).forEach(l=>{n[l]=a[l]})}return t}static getBrowserAlias(t){return N5[t]}static getBrowserTypeByAlias(t){return Wm[t]||""}}const ie=/version\/(\d+(\.?_?\d+)+)/i,M5=[{test:[/googlebot/i],describe(e){const t={name:"Googlebot"},r=C.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/opera/i],describe(e){const t={name:"Opera"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe(e){const t={name:"Opera"},r=C.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe(e){const t={name:"Samsung Internet for Android"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe(e){const t={name:"NAVER Whale Browser"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe(e){const t={name:"MZ Browser"},r=C.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/focus/i],describe(e){const t={name:"Focus"},r=C.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/swing/i],describe(e){const t={name:"Swing"},r=C.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/coast/i],describe(e){const t={name:"Opera Coast"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){const t={name:"Opera Touch"},r=C.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe(e){const t={name:"Yandex Browser"},r=C.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe(e){const t={name:"UC Browser"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe(e){const t={name:"Maxthon"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe(e){const t={name:"Epiphany"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe(e){const t={name:"Puffin"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe(e){const t={name:"Sleipnir"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe(e){const t={name:"K-Meleon"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe(e){const t={name:"WeChat"},r=C.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe(e){const t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=C.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe(e){const t={name:"Internet Explorer"},r=C.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe(e){const t={name:"Microsoft Edge"},r=C.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe(e){const t={name:"Microsoft Edge"},r=C.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe(e){const t={name:"Vivaldi"},r=C.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe(e){const t={name:"SeaMonkey"},r=C.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe(e){const t={name:"Sailfish"},r=C.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe(e){const t={name:"Amazon Silk"},r=C.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe(e){const t={name:"PhantomJS"},r=C.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe(e){const t={name:"SlimerJS"},r=C.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t={name:"BlackBerry"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe(e){const t={name:"WebOS Browser"},r=C.getFirstMatch(ie,e)||C.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe(e){const t={name:"Bada"},r=C.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe(e){const t={name:"Tizen"},r=C.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe(e){const t={name:"QupZilla"},r=C.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){const t={name:"Firefox"},r=C.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe(e){const t={name:"Electron"},r=C.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe(e){const t={name:"Miui"},r=C.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe(e){const t={name:"Chromium"},r=C.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe(e){const t={name:"Chrome"},r=C.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe(e){const t={name:"Google Search"},r=C.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){const t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){const t={name:"Android Browser"},r=C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe(e){const t={name:"PlayStation 4"},r=C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe(e){const t={name:"Safari"},r=C.getFirstMatch(ie,e);return r&&(t.version=r),t}},{test:[/.*/i],describe(e){const t=/^(.*)\/(.*) /,r=/^(.*)\/(.*)[ \t]\((.*)/,i=e.search("\\(")!==-1?r:t;return{name:C.getFirstMatch(i,e),version:C.getSecondMatch(i,e)}}}],T5=[{test:[/Roku\/DVP/],describe(e){const t=C.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:Ie.Roku,version:t}}},{test:[/windows phone/i],describe(e){const t=C.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:Ie.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){const t=C.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=C.getWindowsVersionName(t);return{name:Ie.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){const t={name:Ie.iOS},r=C.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe(e){const t=C.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=C.getMacOSVersionName(t),n={name:Ie.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe(e){const t=C.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:Ie.iOS,version:t}}},{test(e){const t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){const t=C.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=C.getAndroidVersionName(t),n={name:Ie.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe(e){const t=C.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:Ie.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t=C.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||C.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||C.getFirstMatch(/\bbb(\d+)/i,e);return{name:Ie.BlackBerry,version:t}}},{test:[/bada/i],describe(e){const t=C.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:Ie.Bada,version:t}}},{test:[/tizen/i],describe(e){const t=C.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:Ie.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:Ie.Linux}}},{test:[/CrOS/],describe(){return{name:Ie.ChromeOS}}},{test:[/PlayStation 4/],describe(e){const t=C.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:Ie.PlayStation4,version:t}}}],B5=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){const t=C.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:ye.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:ye.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:ye.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:ye.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:ye.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:ye.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:ye.tablet}}},{test(e){const t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe(e){const t=C.getFirstMatch(/(ipod|iphone)/i,e);return{type:ye.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:ye.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:ye.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:ye.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:ye.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:ye.mobile,vendor:"Microsoft"}}},{test(e){const t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:ye.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:ye.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:ye.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:ye.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:ye.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:ye.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:ye.tv}}}],P5=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:ir.Blink};const r=C.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:ir.EdgeHTML,version:r}}},{test:[/trident/i],describe(e){const t={name:ir.Trident},r=C.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){return e.test(/presto/i)},describe(e){const t={name:ir.Presto},r=C.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){const t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe(e){const t={name:ir.Gecko},r=C.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:ir.Blink}}},{test:[/(apple)?webkit/i],describe(e){const t={name:ir.WebKit},r=C.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];class Wd{static{o(this,"Parser")}constructor(t,r=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},r!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=C.find(M5,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=C.find(T5,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:r}=this.getOS();return t?String(r).toLowerCase()||"":r||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:r}=this.getPlatform();return t?String(r).toLowerCase()||"":r||""}parsePlatform(){this.parsedResult.platform={};const t=C.find(B5,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=C.find(P5,r=>{if(typeof r.test=="function")return r.test(this);if(r.test instanceof Array)return r.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return C.assign({},this.parsedResult)}satisfies(t){const r={};let n=0;const i={};let s=0;if(Object.keys(t).forEach(u=>{const l=t[u];typeof l=="string"?(i[u]=l,s+=1):typeof l=="object"&&(r[u]=l,n+=1)}),n>0){const u=Object.keys(r),l=C.find(u,d=>this.isOS(d));if(l){const d=this.satisfies(r[l]);if(d!==void 0)return d}const c=C.find(u,d=>this.isPlatform(d));if(c){const d=this.satisfies(r[c]);if(d!==void 0)return d}}if(s>0){const u=Object.keys(i),l=C.find(u,c=>this.isBrowser(c,!0));if(l!==void 0)return this.compareVersion(i[l])}}isBrowser(t,r=!1){const n=this.getBrowserName().toLowerCase();let i=t.toLowerCase();const s=C.getBrowserTypeByAlias(i);return r&&s&&(i=s.toLowerCase()),i===n}compareVersion(t){let r=[0],n=t,i=!1;const s=this.getBrowserVersion();if(typeof s=="string")return t[0]===">"||t[0]==="<"?(n=t.substr(1),t[1]==="="?(i=!0,n=t.substr(2)):r=[],t[0]===">"?r.push(1):r.push(-1)):t[0]==="="?n=t.substr(1):t[0]==="~"&&(i=!0,n=t.substr(1)),r.indexOf(C.compareVersions(s,n,i))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,r=!1){return this.isBrowser(t,r)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(r=>this.is(r))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class I5{static{o(this,"Bowser")}static getParser(t,r=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new Wd(t,r)}static parse(t){return new Wd(t).getResult()}static get BROWSER_MAP(){return Wm}static get ENGINE_MAP(){return ir}static get OS_MAP(){return Ie}static get PLATFORMS_MAP(){return ye}}const Yi=I5.getParser(navigator.userAgent);function L5(){return{browserVersion:Yi.getBrowserVersion(),browserName:Yi.getBrowserName(),osName:Yi.getOSName(),osVersion:Yi.getOSVersion()}}o(L5,"getSystemVersions");function jd(e){return Lh(e,(t,r)=>({key:v.isString(t)?t.toLowerCase():t,value:r}))}o(jd,"makeObjectKeysLowercase");function R5({gamepad:e,layouts:t=Um,gamepadModelMap:r=Wu,systemVersions:n=L5()}){const i=(v.isString(e)?e:e?.deviceName)||"",{gamepadModel:s}=ju({gamepad:i,gamepadModelMap:r}),a=s?t.filter(l=>l.gamepadModels.includes(s)):[];return a.length<=1?a[0]:a.reduce((l,c)=>{const d=O5(n,c);return d>l.score?{score:d,layout:c}:l},{layout:void 0,score:-1}).layout}o(R5,"findMatchingGamepadLayout");function O5(e,t){const r=t.systemVersions.map(n=>Object.values(he(e,(s,a)=>n[s].toLowerCase()===a.toLowerCase())).reduce((s,a)=>s+(a?1:0),0));return Math.max(...r)}o(O5,"scoreLayoutSystemVersions");function ju({gamepad:e,gamepadModelMap:t=Wu,gamepadBrandMap:r=F5}){const n=(typeof e=="string"?e:e?.deviceName)||void 0,i=n&&jd(t)[n.toLowerCase()]||void 0;return{gamepadModel:i,gamepadBrand:i&&jd(r)[i]||void 0,gamepadModelDescription:i&&x5[i]||void 0}}o(ju,"findMatchingGamepadModel");var Z=(e=>(e.Positive="positive",e.Flat="flat",e.Negative="negative",e))(Z||{});function jm(e){return e===0?"flat":e<0?"negative":"positive"}o(jm,"calculateInputDirection");function _5(e){return he(e,(t,r)=>({deviceKey:t,deviceName:r.deviceName,deviceType:r.deviceType}))}o(_5,"mapToSimpleDevicesMap");const qm={[Ae.Gamepad1]:Ae.Gamepad1,[Ae.Gamepad2]:Ae.Gamepad2,[Ae.Gamepad3]:Ae.Gamepad3,[Ae.Gamepad4]:Ae.Gamepad4},ki=new Om({name:"read raw input"},({state:e,timeSinceLastUpdate:t})=>{const r=e.deviceHandler.readAllDevices(),n=Lh(r,(s,a)=>{const u=a,l=e.gamepadKeyMap&&v.hasKey(e.gamepadKeyMap,s)?e.gamepadKeyMap[s]:s,c={};return Object.values(u.currentInputs).forEach(d=>{const f=jm(d.inputValue),p=e.rawInputs?.[s]?.[d.inputName],g=p?.direction===f?{milliseconds:Math.round(p.duration.milliseconds+t.milliseconds)}:{milliseconds:0},y=Rs(s)?R5({layouts:e.gamepadLayouts||Um,gamepad:{deviceName:u.deviceName},gamepadModelMap:e.gamepadModelMap||Wu}):void 0,b=Rs(s)?ju({gamepad:{deviceName:u.deviceName},gamepadBrandMap:e.gamepadBrandMap,gamepadModelMap:e.gamepadModelMap}):void 0,$=y?.inputMappings[d.inputName],A={mapped:{deviceKey:l,deviceName:b?.gamepadModel||u.deviceName,gamepadBrand:b?.gamepadBrand,inputName:$||d.inputName},deviceKey:s,deviceName:u.deviceName,deviceType:u.deviceType,direction:f,duration:g,inputName:d.inputName,inputValue:d.inputValue};$&&(c[$]=A),c[d.inputName]=A}),{key:l,value:c}}),i=_5(r);e.rawInputs=n,e.currentInputDevices=i});st({deviceKey:ui(Q),inputName:"",mappedInputName:ze(se(void 0,"")),direction:ui(Z)});function zm(){return qu}o(zm,"createTypedReadBindingsStage");const qu=new Om({name:"read bindings"},({state:e,timeSinceLastUpdate:t})=>{if(!e.playersBindings||!Object.keys(e.playersBindings).length||!e.rawInputs||!Object.keys(e.rawInputs).length){e.playersActiveBindings={};return}const r=he(e.playersBindings,(n,i)=>V5({bindingsMap:i,activeBindingsMap:e.playersActiveBindings?.[n],rawInputs:e.rawInputs,timeSinceLastUpdate:t}));e.playersActiveBindings=r});function V5({bindingsMap:e,activeBindingsMap:t,rawInputs:r,timeSinceLastUpdate:n}){return Xt(e).reduce((i,[s,a])=>{const u=kn(a,l=>{const c=r?.[l.deviceKey]?.[l.inputName];if(c?.direction===l.direction)return c},v.isTruthy);if(u.length){const l=u.reduce((g,y)=>g+y.inputValue,0),c=t?.[s],d=c?.holdDuration,f=d?d.milliseconds+n.milliseconds:0,p={holdDuration:{milliseconds:Math.round(f)},value:l,actCount:c?.actCount||0,lastActDuration:c?.lastActDuration||{milliseconds:0}};i[s]=p}return i},{})}o(V5,"readPlayerBindings");const U5={1:{jump:[{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-Space"},{deviceKey:Ae.Gamepad1,direction:Z.Positive,inputName:"X"},{deviceKey:Ae.Gamepad1,direction:Z.Positive,inputName:"A"}],left:[{deviceKey:Ae.Gamepad1,direction:Z.Positive,inputName:"d-pad-left"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyA"},{deviceKey:Ae.Gamepad1,direction:Z.Positive,inputName:"button-KeyA"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyJ"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-ArrowLeft"}],right:[{deviceKey:Ae.Gamepad1,direction:Z.Positive,inputName:"d-pad-right"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyD"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-KeyL"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-ArrowRight"}]}},qd=Be()({tagName:"vir-read-bindings-stage-debug",styles:P`
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
    `,state(){return{deviceHandler:void 0,pipeline:void 0,activeBindings:{}}},init({state:e,updateState:t,inputs:r}){const n=e.deviceHandler||r.inputDeviceHandler||new xn;e.deviceHandler||t({deviceHandler:n});const i=e.pipeline||new $i([ki,qu],{deviceHandler:n,playersBindings:r.bindingsMap||U5},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{playersActiveBindings:!0},s=>{t({activeBindings:s||{}})})},cleanup({inputs:e,state:t,updateState:r}){e.inputDeviceHandler||t.deviceHandler?.destroy(),t.pipeline?.destroy(),r({deviceHandler:void 0,pipeline:void 0})},render({state:e}){if(!e.deviceHandler||!e.pipeline)return H;const t=Object.entries(e.activeBindings).map(([i,s])=>D`
                    <section class="binding">
                        <h3>${i}</h3>
                        <pre>${JSON.stringify(s,null,4)}</pre>
                    </section>
                `),r=!t.length,n=e.pipeline.currentState.playersBindings||{};return D`
            <h2>Bindings</h2>
            <${Ld.assign({playersBindingsMap:n})}></${Ld}>
            <h2>Active Bindings</h2>
            ${r?D`
                      <p class="no-bindings">No inputs</p>
                  `:t}
        `}}),zd=Be()({tagName:"vir-read-raw-input-stage-debug",styles:P`
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
    `,state(){return{deviceHandler:void 0,pipeline:void 0,rawInputs:{}}},init({state:e,updateState:t,inputs:r}){const n=e.deviceHandler||r.inputDeviceHandler||new xn;e.deviceHandler||t({deviceHandler:n});const i=e.pipeline||new $i([ki],{deviceHandler:n},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{rawInputs:!0},s=>{t({rawInputs:s||{}})})},cleanup({inputs:e,state:t,updateState:r}){e.inputDeviceHandler||t.deviceHandler?.destroy(),t.pipeline?.destroy(),r({deviceHandler:void 0,pipeline:void 0})},render({state:e}){return!e.deviceHandler||!e.pipeline?H:Object.entries(e.rawInputs).map(([t,r])=>{const i=Object.keys(r).length===0?D`
                          <p class="no-inputs">No inputs</p>
                      `:D`
                          <pre>${JSON.stringify(r,null,4)}</pre>
                      `;return D`
                    <section class="device">
                        <b>${t}</b>
                        ${i}
                    </section>
                `})}}),Km={[fe.Gamepad]:"🎮",[fe.Keyboard]:"⌨️",[fe.Mouse]:"🖱"},W5={[Z.Flat]:"",[Z.Negative]:"➖",[Z.Positive]:"➕"};var Ge=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Enter="enter",e.Exit="exit",e.SectionNext="section-next",e.SectionPrevious="section-previous",e))(Ge||{});class _s extends Sm{static{o(this,"MenuNavController")}constructor(t,r,n={}){super(t),this.virLine=r,this.options={...this.options,...n},this.listenToVirLineState()}lastUnlisten;paused=!1;options={repeatThreshold:{milliseconds:500},repeatInterval:{milliseconds:60},allowWrapping:!0,alwaysRequireFocused:!0};pause(){this.paused=!0}resume(){this.paused=!1}destroy(){this.lastUnlisten?.(),super.destroy()}listenToVirLineState(){this.lastUnlisten&&this.lastUnlisten(),this.lastUnlisten=this.virLine.listenToState(!1,{playersActiveBindings:!0},t=>{if(!t||this.paused)return;const r=Ct(this.options.repeatThreshold,{milliseconds:!0}).milliseconds,n=Ct(this.options.repeatInterval,{milliseconds:!0}).milliseconds,i={};if(Lr(t).forEach(l=>{Xt(l).forEach(([c,d])=>{d.holdDuration.milliseconds>=r?d.holdDuration.milliseconds-d.lastActDuration.milliseconds>n&&(i[c]=!0,d.actCount++,d.lastActDuration=d.holdDuration):!d.holdDuration.milliseconds&&!d.actCount&&(i[c]=!0,d.actCount++)})}),i.enter){this.enterInto();return}if(i.exit){this.exitOutOf();return}const s=i["section-next"]&&!i["section-previous"]?$e.Right:!i["section-next"]&&i["section-previous"]?$e.Left:void 0;if(s){this.navigatePibling({allowWrapping:this.options.allowWrapping,direction:s});return}const a=i.up&&!i.down?$e.Up:!i.up&&i.down?$e.Down:void 0,u=i.right&&!i.left?$e.Right:!i.right&&i.left?$e.Left:void 0;a&&this.navigate({allowWrapping:this.options.allowWrapping,direction:a}),u&&this.navigate({allowWrapping:this.options.allowWrapping,direction:u})})}}const j5=E1(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),Ir=Be()({tagName:"vir-glow-pulse",styles:P`
        :host {
            display: inline-flex;
        }
    `,state(){return{lastTimestamp:0,colorIndex:0}},render({inputs:e,host:t,state:r,updateState:n}){const i=e.glowColors&&e.glowColors.length?e.glowColors:j5,s=e.animationDuration?Ct(e.animationDuration,{milliseconds:!0}):{milliseconds:350},a=r.lastTimestamp+s.milliseconds/2,u=e.pulse&&e.pulse.timestamp>a?e.pulse:void 0;u&&n({colorIndex:As(r.colorIndex+1,{min:0,max:i.length-1})});const l=i[r.colorIndex];if(!l)throw new Error("Exceeded colors array size somehow.");return u&&u.timestamp!==r.lastTimestamp&&(t.getAnimations().forEach(c=>c.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l})`},{filter:`drop-shadow(0 0 0 ${l}) drop-shadow(0 0 0 ${l})`}],{duration:s.milliseconds,iterations:1}),n({lastTimestamp:u.timestamp})),D`
            <slot></slot>
        `}}),Vs=Be()({tagName:"vir-device-chip",hostClasses:{"vir-device-chip-plain":o(({inputs:e})=>!!e.plainStyles,"vir-device-chip-plain")},styles:o(({hostClasses:e})=>P`
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
    `,"styles"),render({inputs:e,host:t}){const r=Tm[e.deviceKey],n=Km[r],i=Number(e.deviceKey)+1,s=r===fe.Gamepad&&!e.hideGamepadPort&&!e.plainStyles?D`
                      <span>${i}</span>
                  `:H,a=r===fe.Gamepad?`gamepad ${i}`:r;t.getAttribute("title")!==a&&t.setAttribute("title",a);const u=D`
            <span class="device-emoji">${n}</span>
        `;return e.lastInputTime?D`
                <${Ir.assign({pulse:e.lastInputTime,glowColors:e.activityColors})}>
                    ${u}
                </${Ir}>
                ${s}
            `:D`
                ${u} ${s}
            `}});function Gm(e){return e.deviceKey===Q.Mouse&&(e.inputName==="axe-x"||e.inputName==="axe-y")}o(Gm,"isMouseMovement");const ua=Be()({tagName:"vir-device-list",styles:P`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }
    `,state(){return{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0}},init({inputs:e,state:t,updateState:r}){const n=e.inputDeviceHandler||new xn({startLoopImmediately:!0});t.deviceHandler||r({deviceHandler:n});function i(){return he(n.getLastPollResults(),a=>t.deviceTimestamps[a]||{timestamp:0})}o(i,"readDeviceTimestamps");const s=e.disableGlowPulses?void 0:n.listen(wo,a=>{const u=i();a.detail.inputs.newInputs.forEach(l=>{!e.showMouseMovement&&Gm(l)||(u[l.deviceKey]={timestamp:Date.now()})}),r({deviceTimestamps:u})});r({cleanup:s,deviceTimestamps:i()})},cleanup({inputs:e,state:t,updateState:r}){t.cleanup?.(),e.inputDeviceHandler||t.deviceHandler?.destroy(),r({cleanup:void 0,deviceHandler:void 0})},render({state:e}){return Xt(e.deviceTimestamps).map(([r,n])=>D`
                    <${Vs.assign({deviceKey:r,lastInputTime:n})}></${Vs}>
                `)}}),Ha=52,Rn=Be()({tagName:"vir-simple-player-assign-bindings",styles:P`
        :host {
            display: flex;
            flex-direction: column;
        }

        th {
            text-align: right;
            height: ${Ha}px;
            padding: 8px 0;
            padding-right: 16px;
        }

        .bindings {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            border: 1px solid #eee;
            min-height: ${Ha+18}px;
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
            ${Ci};
        }
        .empty-bindings {
            display: flex;
            justify-content: center;
        }
    `,events:{inputListen:Te(),bindingsUpdate:Te()},state(){return{listeningForBinding:void 0}},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const s=e.bindingNames.map(a=>{const u=e.playersBindings?.[`${e.playerPosition}`]||{},l=u[a]||[],c=l.length?l.map((p,g)=>D`
                          <${la.assign({...p})}
                              ${Y(la.events.removeBinding,()=>{const y={...u,[a]:Mh(l,[g])};t(new r.bindingsUpdate(y))})}
                          ></${la}>
                      `):D`
                      <p class="empty-bindings">Empty</p>
                  `,d=n.listeningForBinding===a,f=d&&e.listeningToInput?D`
                          <div class="listening-overlay"><span>Listening for input...</span></div>
                      `:H;return D`
                <tr
                    class=${zt({fade:e.listeningToInput})}
                >
                    <td class="fadable">
                        <${Dd.assign({text:"+",disabled:e.listeningToInput})}
                            class="add"
                            ${Y("click",()=>{t(new r.inputListen(!0)),i({listeningForBinding:a}),e.deviceHandler.listen(wo,(p,g)=>{const y=p.detail.inputs.newInputs[0];if(!y)return;const b={deviceKey:y.deviceKey,direction:jm(y.inputValue),inputName:y.inputName};if(!e.allowMouseMovement&&Gm(y))return;if(!l.some(x=>v.jsonEquals(b,x))){const x={...u,[a]:[...l,b]};t(new r.bindingsUpdate(x))}g(),t(new r.inputListen(!1)),i({listeningForBinding:void 0})})})}
                        ></${Dd}>
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
        `}}),la=Be()({tagName:"vir-binding-chip",styles:P`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 8px;
            font-size: 0.8em;
            height: ${Ha}px;
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
            ${Zt};
            transition: opacity
                ${mt["vira-interaction-animation-duration"].value};
        }
        :host(:hover) .remove-overlay {
            opacity: 1;
        }
    `,events:{removeBinding:Te()},render({inputs:e,dispatch:t,events:r}){const n=Tm[e.deviceKey],i=Km[n],s=Number(e.deviceKey)+1,a=n===fe.Gamepad?D`
                      <span>${s}</span>
                  `:H,u=GD(e.inputName)===Dn.Axe?D`
                      <span>${W5[e.direction]}</span>
                  `:H,l=n===fe.Gamepad?`controller in slot ${s}`:e.deviceKey;return D`
            <div
                class="remove-overlay"
                ${Y("click",()=>{t(new r.removeBinding)})}
            >
                <span>×</span>
            </div>
            <div>${e.inputName} ${u}</div>
            <div title=${l}>${i} ${a}</div>
        `}}),Ji=Be()({tagName:"vir-simple-assign-bindings",styles:P`
        :host {
            display: flex;
            gap: 32px;
        }

        ${Rn} {
            min-width: 300px;
        }

        .player-assignment {
            flex-grow: 1;
        }
    `,events:{playersBindingsUpdate:Te()},state(){return{deviceHandler:void 0,cleanup:void 0,currentDevices:{},listeningToInput:!1}},init({inputs:e,state:t,updateState:r}){const n=t.deviceHandler||e.inputDeviceHandler||new xn({startLoopImmediately:!0,...e.globalDeadZone?{globalDeadZone:e.globalDeadZone}:{},...e.gamepadDeadZoneSettings?{gamepadDeadZoneSettings:e.gamepadDeadZoneSettings}:{}});t.deviceHandler||r({deviceHandler:n});function i(){const u=he(n.readAllDevices(),(l,c)=>({deviceKey:l,deviceName:c.deviceName,deviceType:c.deviceType}));r({currentDevices:u})}o(i,"updateDevices");const s=n.listen(Pm,i),a=n.listen(Bm,i);r({cleanup(){s(),a()}}),i()},cleanup({inputs:e,state:t,updateState:r}){e.inputDeviceHandler||t.deviceHandler?.destroy(),t.cleanup?.(),r({deviceHandler:void 0,cleanup:void 0})},render({state:e,inputs:t,updateState:r,dispatch:n,events:i}){const s=e.deviceHandler;if(s){if(t.supportedPlayerCount<1)throw new Error("Cannot support < 1 players.")}else return H;const a=t.supportedPlayerCount>1;return new Array(t.supportedPlayerCount).fill(0).map((u,l)=>{const c=l+1,d=a?D`
                      <h3>Player ${c}</h3>
                  `:H;return D`
                <section class="player-assignment">
                    ${d}
                    <${Rn.assign({bindingNames:t.bindingNames,playerPosition:c,playersBindings:t.playersBindings,listeningToInput:e.listeningToInput,deviceHandler:s,allowMouseMovement:t.allowMouseMovement||!1})}
                        ${Y(Rn.events.inputListen,f=>{r({listeningToInput:f.detail})})}
                        ${Y(Rn.events.bindingsUpdate,f=>{const p={...t.playersBindings,[String(c)]:f.detail};n(new i.playersBindingsUpdate(p))})}
                    ></${Rn}>
                </section>
            `})}}),Xi=Be()({tagName:"vir-simple-assign-controller-slot",styles:P`
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
            ${gm};
        }
    `,events:{deviceMapChange:Te()},state(){return{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0,menuNavController:void 0,internalVirLine:void 0}},init({inputs:e,state:t,updateState:r,host:n,dispatch:i,events:s}){const a=e.inputDeviceHandler||new xn({startLoopImmediately:!0});t.deviceHandler||r({deviceHandler:a});function u(){return he(a.getLastPollResults(),d=>t.deviceTimestamps[d]||{timestamp:0})}o(u,"readDeviceTimestamps");const l=e.disableGlowPulses?void 0:a.listen(wo,d=>{const f=u();d.detail.inputs.newInputs.forEach(p=>{f[p.deviceKey]={timestamp:Date.now()}}),r({deviceTimestamps:f})});r({cleanup:l,deviceTimestamps:u()});const c=e.virLine||t.internalVirLine||new $i([ki,zm()],{deviceHandler:a,playersBindings:{1:{[Ge.Up]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyW"}],[Ge.Down]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyS"}],[Ge.Right]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyD"}],[Ge.Enter]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-Space"},{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-Enter"},{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-NumpadEnter"}],[Ge.Left]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyA"}],[Ge.SectionNext]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyE"}],[Ge.SectionPrevious]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyQ"}]}}},{init:{startUpdateLoopImmediately:!0}});if(!t.menuNavController){const d=new _s(n,c);d.listen(Cm,async()=>{const f=Gd(d);f&&await Kd(f.originalKey)}),d.listen($m,async({detail:f})=>{const p=Gd(d);if(!p)return;const{mappedKey:g,originalKey:y}=p,b=f.direction===$e.Up||f.direction===$e.Left,$=As(Number(g)+(b?-1:1),{min:0,max:3}),A=Mh(Xt(e.gamepadKeyMap||{...qm}),[Number(y)]).sort((B,R)=>B[1].localeCompare(R[1]));A.splice($,0,[y,g]);const x=Th(A,([B],R)=>({key:B,value:cn.isEnumValue(String(R),Ae)}));i(new s.deviceMapChange(x)),await Ps(2),Fh.instanceOf(n.shadowRoot.querySelector(`[data-original-key="${y}"]`),HTMLElement)?.focus()}),r({menuNavController:new _s(n,c)})}},cleanup({inputs:e,state:t,updateState:r}){t.cleanup?.(),e.inputDeviceHandler||t.deviceHandler?.destroy(),t.menuNavController?.destroy(),r({cleanup:void 0,deviceHandler:void 0,menuNavController:void 0})},render({state:e,inputs:t}){const r=e.menuNavController;if(!r)return"";const n=kn(St(Ae),a=>({originalKey:a,mappedKey:t.gamepadKeyMap?.[a]||a}),({originalKey:a})=>!!e.deviceTimestamps[a]).sort((a,u)=>a.mappedKey.localeCompare(u.mappedKey)),i=Uu(),s=n.map(({mappedKey:a,originalKey:u})=>{const l=e.deviceTimestamps[u],c=i[u];if(!l||!c)return H;const d=ju({gamepad:{deviceName:c.id},gamepadBrandMap:t.gamepadBrandMap,gamepadModelMap:t.gamepadModelMap}),f=(d.gamepadModel&&v.isKeyOf(d.gamepadModel,Ud)?Ud[d.gamepadModel]:"")+` (${u})`;return D`
                <button
                    class="device-button"
                    data-original-key=${u}
                    data-mapped-key=${a}
                    ${Y("mousedown",async()=>{await Kd(u)})}
                    ${vt(r)}
                >
                    <p>${a}</p>
                    <${Vs.assign({deviceKey:u,lastInputTime:l,plainStyles:!0})}></${Vs}>

                    <p>${f}</p>
                </button>
            `});return D`
            <div class="devices-wrapper" ${vt(r,{group:!0})}>
                ${s}
            </div>
        `}});async function Kd(e){await Uu()[e]?.vibrationActuator.playEffect("dual-rumble",{duration:300,strongMagnitude:.5,weakMagnitude:.5})}o(Kd,"playRumble");function Gd(e){const t=e.currentNavEntry?.entry.element;if(!t)return;const r=t.getAttribute("data-original-key");Nt.isEnumValue(r,Ae,"Failed to find original device key on nav element.");const n=t.getAttribute("data-mapped-key");return Nt.isEnumValue(n,Ae,"Failed to find mapped device key on nav element."),{originalKey:r,mappedKey:n}}o(Gd,"getFocusedKeys");const zu=Mt({parent:void 0,title:"Stages"}),Vr=Mt({parent:void 0,title:"Elements"}),Zd=ho({tagName:"vir-menu-nav-test",styles:P`
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
    `,state({host:e}){const t=new xn({disableMouseMovement:!0}),r=new $i([ki,zm()],{deviceHandler:t,playersBindings:{1:{[Ge.Up]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyW"}],[Ge.Down]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyS"}],[Ge.Right]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyD"}],[Ge.Left]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyA"}],[Ge.SectionNext]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyE"}],[Ge.SectionPrevious]:[{deviceKey:Q.Keyboard,direction:Z.Positive,inputName:"button-KeyQ"}]}}},{init:{startUpdateLoopImmediately:!0}});return{menuNavController:new _s(e,r),virLine:r,deviceHandler:t}},cleanup({state:e}){e.menuNavController.destroy()},render({state:e}){return D`
            <section ${vt(e.menuNavController,{group:!0})}>
                <div class="cell" ${vt(e.menuNavController)}>Cell</div>
                <div class="cell" ${vt(e.menuNavController)}>Cell</div>
            </section>
            <section ${vt(e.menuNavController,{group:!0})}>
                <div class="row">
                    <div class="cell" ${vt(e.menuNavController,{x:0,y:0})}>Cell</div>
                    <div class="cell" ${vt(e.menuNavController,{x:1,y:0})}>Cell</div>
                </div>
                <div class="row">
                    <div class="cell" ${vt(e.menuNavController,{x:0,y:1})}>Cell</div>
                    <div class="cell" ${vt(e.menuNavController,{x:1,y:1})}>Cell</div>
                </div>
            </section>
        `}}),q5=Mt({title:_s.name,parent:Vr,defineExamples({defineExample:e}){e({title:"example",render(){return D`
                    (use wasd + qe)
                    <br />
                    <br />
                    <${Zd}></${Zd}>
                `}})}}),z5=Mt({parent:zu,title:qu.stageId.name,defineExamples({defineExample:e}){e({title:"Debugging",render(){return D`
                    <p>Using stage readBindingsStage and element VirReadBindingsStageDebug.</p>
                    <${qd}></${qd}>
                `}})}}),K5=Mt({parent:zu,title:ki.stageId.name,defineExamples({defineExample:e}){e({title:"Debugging",render(){return D`
                    <p>Using stage readRawInputStage and element VirReadRawInputStageDebug.</p>
                    <${zd}></${zd}>
                `}})}}),G5=Mt({title:ua.tagName,parent:Vr,defineExamples({defineExample:e}){e({title:"example",render(){return D`
                    <${ua}></${ua}>
                `}})}}),On=Be()({tagName:"vir-fps",styles:P`
        :host {
            justify-content: center;
            align-items: center;
            display: flex;
        }
    `,state(){return{cleanup:void 0,fps:0}},init({updateState:e,state:t,inputs:r}){t.cleanup||e({cleanup:r.virLine.listen(Lm,n=>{e({fps:n.detail.updatesPerSecond})})})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({state:e,inputs:t}){return D`
            <span ${Qr("fps-display")}>
                ${e.fps.toFixed(t.decimals||0)}
            </span>
        `}}),Z5=Mt({title:On.tagName,parent:Vr,defineExamples({defineExample:e}){const t=new $i([],{});e({title:"default",render(){return t.startUpdateLoop(),D`
                    <${On.assign({virLine:t})}></${On}>
                `}}),e({title:"2 decimals",render(){return t.startUpdateLoop(),D`
                    <${On.assign({virLine:t,decimals:2})}></${On}>
                `}})}}),Qi=Be()({tagName:"vir-glow-pulse-book-wrapper",state(){return{intervalId:void 0,animation:void 0}},init({state:e,updateState:t,inputs:r}){e.intervalId==null&&t({intervalId:window.setInterval(()=>{t({animation:{timestamp:Date.now()}})},r.milliseconds)})},cleanup({state:e,updateState:t}){e.intervalId!=null&&(window.clearInterval(e.intervalId),t({intervalId:void 0}))},render({state:e,inputs:t}){return D`
            <${Ir.assign({pulse:e.animation,glowColors:t.colors})}>
                ⚪️
            </${Ir}>
        `}}),H5=Mt({parent:Vr,title:Ir.tagName,descriptionParagraphs:["Used to give repeated emphasis to an element. In particular, this is used for showing controller activity in vir-device-list."],defineExamples({defineExample:e}){e({title:"automatic",styles:P`
                :host {
                    ${Zt};
                }
            `,render(){return D`
                    <${Qi.assign({milliseconds:500})}></${Qi}>
                `}}),e({title:"custom colors",styles:P`
                :host {
                    ${Zt};
                }
            `,render(){return D`
                    <${Qi.assign({milliseconds:500,colors:["blue","navy","dodgerblue","skyblue","lightblue"]})}></${Qi}>
                `}}),e({title:"on click",state(){return{animation:void 0}},styles:P`
                :host {
                    ${Zt};
                }
            `,render({state:t,updateState:r}){return D`
                    <${Ir.assign({pulse:t.animation})}
                        style=${P`
                            cursor: pointer;
                        `}
                        ${Y("click",()=>{r({animation:{timestamp:Date.now()}})})}
                    >
                        ⚪️
                    </${Ir}>
                `}})}}),Y5=Mt({parent:Vr,title:Ji.tagName,defineExamples({defineExample:e}){e({title:"Default",styles:P`
                .size {
                    width: 1000px;
                    max-width: 100%;
                }
            `,state(){return{playersBindings:{1:{up:[{deviceKey:"0",direction:Z.Positive,inputName:"button-2"},{deviceKey:"keyboard",direction:Z.Positive,inputName:"button-ArrowUp"}],down:[{deviceKey:"0",direction:Z.Positive,inputName:"axe-1"}]}}}},render({state:t,updateState:r}){return D`
                    <div class="size">
                        <${Ji.assign({bindingNames:["up","down","left","right","jump","pause"],supportedPlayerCount:2,playersBindings:t.playersBindings})}
                            ${Y(Ji.events.playersBindingsUpdate,n=>{r({playersBindings:n.detail})})}
                        ></${Ji}>
                    </div>
                `}})}}),J5=Mt({title:Xi.tagName,parent:Vr,defineExamples({defineExample:e}){e({title:"example",state(){return{gamepadMap:qm}},render({updateState:t,state:r}){return D`
                    <p>
                        Press a button on a connected controller to show the list.
                        <br />
                        Use wasd to navigate the list.
                        <br />
                        Use qe to move slot assignments.
                        <br />
                        Click or press enter to rumble the selected controller.
                    </p>
                    <${Xi.assign({gamepadKeyMap:r.gamepadMap})}
                        ${Y(Xi.events.deviceMapChange,n=>{t({gamepadMap:n.detail})})}
                    ></${Xi}>
                `}})}}),X5=[zu,z5,K5,Vr,q5,G5,Z5,H5,Y5,J5];ho({tagName:"game-vir-demo-app",render(){return D`
            <${Fd.assign({internalRouterConfig:{basePath:Ru("game-vir","book"),useInternalRouter:!0},pages:X5,themeColor:"#33ccff"})}></${Fd}>
        `}});
