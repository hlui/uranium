(function(){function f(a,b){var c;if(typeof a==r){var d=a,t=b.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[b.tagName]||b.tagName:b.firstChild.tagName;c={};var e=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,g,i;i=0;var m;if(e.test(d)){e=e.exec(d);t=e[1];if(e[2]!=="")for(d=e[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);i<d.length;i++)m=d[i].replace(/^\s*|\s*$/g,""),m!==""&&m!==" "&&(m=m.split("="),c[m[0]]=m[1].replace(/(["']?)/g,""));d=e[3]}t=n.createElement(t);for(g in c)i=n.createAttribute(g),
i.nodeValue=c[g],t.setAttributeNode(i);t.innerHTML=d;c=t}else c=a;return c}function l(a){var b=/\S/;a.each(function(a){for(var d=a.firstChild,t=-1,e;d;)e=d.nextSibling,d.nodeType==3&&!b.test(d.nodeValue)?a.removeChild(d):d.nodeIndex=++t,d=e})}function e(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++e.id}function j(a,b){var c=u[a]=u[a]||{};return c[b]=c[b]||[]}function s(a,b,c){var d=e(a),b=j(d,b),d=function(b){c.call(a,b)===!1&&(b.preventDefault(),b.stopPropagation())};d.guid=c.guid=
c.guid||++e.id;d.handler=c;b.push(d);return d}var g,k=this,r=new String("string"),n=k.document,q=/^#?([\w-]+)$/,w=/^#/,D=/<([\w:]+)/,p=function(a){return[].slice.call(a,0)};try{p(n.documentElement.childNodes)}catch(F){p=function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}k.x$=k.xui=g=function(a,b){return new g.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,b){var c=this.length||0,d=0;if(typeof a=="function")for(;d<c;d++)a.call(b,this[d],d,this)};g.fn=g.prototype={extend:function(a){for(var b in a)g.fn[b]=
a[b]},find:function(a,b){var c=[],d;if(a)if(b==void 0&&this.length)c=this.each(function(b){c=c.concat(p(g(a,b)))}).reduce(c);else if(b=b||n,typeof a==r)q.test(a)&&b.getElementById&&b.getElementsByTagName?(c=w.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),c[0]==null&&(c=[])):D.test(a)?(d=n.createElement("i"),d.innerHTML=a,p(d.childNodes).forEach(function(a){c.push(a)})):c=k.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),c=p(c);else if(a instanceof Array)c=a;else if(a.toString()==
"[object NodeList]")c=p(a);else{if(a.nodeName||a===k)c=[a]}else return this;return this.set(c)},set:function(a){var b=g();b.cache=p(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[],a=a||p(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(a){var b=g(a);return this.filter(function(){var a=this,d=null;b.each(function(b){d=d||b==a});return d})},filter:function(a){var b=[];return this.each(function(c,d){a.call(c,d)&&b.push(c)}).set(b)},
not:function(a){var b=p(this);return this.filter(function(c){var d;g(a).each(function(a){return d=b[c]!=a});return d})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};g.fn.find.prototype=g.fn;g.extend=g.fn.extend;g.extend({html:function(a,b){l(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var c=n.createElement("p");b.each(function(a){c.appendChild(a)});
this.each(function(a){a.innerHTML=c.innerHTML})}else{var d=this;b.each(function(b){d.html(a,b)})}return this}return this.each(function(c){var d,e=0;if(a=="inner")if(typeof b==r||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(d=c.length;e<d;e++)eval(c[e].text)}else c.innerHTML="",c.appendChild(b);else a=="outer"?c.parentNode.replaceChild(f(b,c),c):a=="top"?c.insertBefore(f(b,c),c.firstChild):a=="bottom"?c.insertBefore(f(b,c),null):a=="remove"?c.parentNode.removeChild(c):a==
"before"?c.parentNode.insertBefore(f(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(f(b,c.parentNode),c.nextSibling)})},attr:function(a,b){if(arguments.length==2)return this.each(function(c){a=="checked"&&(b==""||b==!1||typeof b=="undefined")?c.removeAttribute(a):c.setAttribute(a,b)});else{var c=[];this.each(function(b){b=b.getAttribute(a);b!=null&&c.push(b)});return c}}});"inner outer top bottom remove before after".split(" ").forEach(function(a){g.fn[a]=function(a){return function(c){return this.html(a,
c)}}(a)});g.events={};var u={};g.extend({on:function(a,b,c){return this.each(function(d){if(g.events[a]){var t=e(d),t=j(t,a);c=c||{};c.handler=function(b,c){g.fn.fire.call(g(this),a,c)};t.length||g.events[a].call(d,c)}d.addEventListener(a,s(d,a,b),!1)})},un:function(a,b){return this.each(function(c){for(var d=e(c),g=j(d,a),f=g.length;f--;)if(b===void 0||b.guid===g[f].guid){c.removeEventListener(a,g[f],!1);var k=u[d][a],i=f,m=k.slice(2);k.length=i<0?k.length+i:i;k.push.apply(k,m)}u[d][a].length===
0&&delete u[d][a];for(var n in u[d])return;delete u[d]})},fire:function(a,b){return this.each(function(c){if(c==n&&!c.dispatchEvent)c=n.documentElement;var d=n.createEvent("HTMLEvents");d.initEvent(a,!0,!0);d.data=b||{};d.eventName=a;c.dispatchEvent(d)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(a){g.fn[a]=function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(a)});g(k).on("load",
function(){"onorientationchange"in n.body||function(a,b){g(k).on("resize",function(){var c=k.innerWidth<a&&k.innerHeight>b&&k.innerWidth<k.innerHeight,d=k.innerWidth>a&&k.innerHeight<b&&k.innerWidth>k.innerHeight;if(c||d)k.orientation=c?0:90,g("body").fire("orientationchange"),a=k.innerWidth,b=k.innerHeight})}(k.innerWidth,k.innerHeight)});var x;try{x=!!n.createEvent("TouchEvent").initTouchEvent}catch(G){x=!1}g.touch=x;e.id=1;g.extend({tween:function(a,b){a instanceof Array&&a.forEach(function(){});
var c=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),d=function(a){var b=[],c;if(typeof a!=r){for(c in a)b.push(c+":"+a[c]);b=b.join(";")}else b=a;return b}(a);return this.each(function(a){emile(a,d,c,b)})}});var z=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;g.extend({setStyle:function(a,b){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(c){c.style[a]=b})},getStyle:function(a,b){var c=function(a,b){return n.defaultView.getComputedStyle(a,
"").getPropertyValue(b.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(b===void 0){var d=[];this.each(function(b){d.push(c(b,a))});return d}else this.each(function(d){b(c(d,a))})},addClass:function(a){return this.each(function(b){if(y(a).test(b.className)===!1)b.className=(b.className+" "+a||"").replace(z,"")})},hasClass:function(a,b){var c=this;return this.length&&function(){var d=!1;c.each(function(c){y(a).test(c.className)&&(d=!0,b&&b(c))});return d}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var b=y(a);this.each(function(a){var d;d=(a.className.replace(b,"$1")||"").replace(z,"");a.className=d})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var A={},y=function(a){var b=A[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),A[a]=b);return b};g.extend({xhr:function(a,b,c){function d(){f.readyState==4&&(delete g.xmlHttpRequest,(f.status===0||f.status==200)&&f.handleResp(),/^[45]/.test(f.status)&&f.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(c=b,b=a,a="inner");var e=c?c:{};if(typeof c=="function")e={},e.callback=c;var g=this,f=new XMLHttpRequest,c=e.method||"get",i=e.async||!1,m=e.data||null,j=0;f.queryString=m;f.open(c,b,i);if(e.headers)for(;j<e.headers.length;j++)f.setRequestHeader(e.headers[j].name,e.headers[j].value);f.handleResp=e.callback!=null?e.callback:function(){g.html(a,this.responseText)};f.handleError=e.error&&typeof e.error=="function"?e.error:function(){};if(i)f.onreadystatechange=
d,this.xmlHttpRequest=f;f.send(m);i||d();return this}});(function(a,b){function c(a,b,c){return(a+(b-a)*c).toFixed(3)}function e(a,b,c){for(var d=2,f,g,i=[],j=[];f=3,g=arguments[d-1],d--;)if(g.substr(0,1)=="r")for(g=g.match(/\d+/g);f--;)i.push(~~g[f]);else for(g.length==4&&(g="#"+g.substr(1,1)+g.substr(1,1)+g.substr(2,1)+g.substr(2,1)+g.substr(3,1)+g.substr(3,1));f--;)i.push(parseInt(g.substr(1+f*2,2),16));for(;f--;)d=~~(i[f+3]+(i[f]-i[f+3])*c),j.push(d<0?0:d>255?255:d);return"rgb("+j.join(",")+")"}
function f(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,f:e,u:""}:{v:b,f:c,u:a}}function g(a){var b={},c=i.length,e;j.innerHTML='<div style="'+a+'"></div>';for(a=j.childNodes[0].style;c--;)if(e=a[i[c]])b[i[c]]=f(e);return b}var j=n.createElement("div"),i="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,c,e){var a=typeof a=="string"?n.getElementById(a):a,c=c||{},d=g(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),i,j={},k=+new Date,h=c.duration||200,B=k+h,C,E=c.easing||function(h){return-Math.cos(h*Math.PI)/2+0.5};for(i in d)j[i]=f(b[i]);C=setInterval(function(){var b=+new Date,o=b>B?1:(b-k)/h;for(i in d)a.style[i]=d[i].f(j[i].v,d[i].v,E(o))+d[i].u;b>B&&(clearInterval(C),c.after&&c.after(),e&&setTimeout(e,1))},10)}})("emile",this);(function(){function a(h,a,b,c,e,o){for(var e=
0,d=c.length;e<d;e++){var g=c[e];if(g){for(var g=g[h],f=!1;g;){if(g.sizcache===b){f=c[g.sizset];break}if(g.nodeType===1&&!o)g.sizcache=b,g.sizset=e;if(g.nodeName.toLowerCase()===a){f=g;break}g=g[h]}c[e]=f}}}function b(h,a,b,c,e,g){for(var e=0,d=c.length;e<d;e++){var f=c[e];if(f){for(var f=f[h],j=!1;f;){if(f.sizcache===b){j=c[f.sizset];break}if(f.nodeType===1){if(!g)f.sizcache=b,f.sizset=e;if(typeof a!=="string"){if(f===a){j=!0;break}}else if(i.filter(a,[f]).length>0){j=f;break}}f=f[h]}c[e]=j}}}var c=
/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,j=!0;[0,0].sort(function(){j=!1;return 0});var i=function(h,a,b,e){var b=b||[],g=a=a||n;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!h||typeof h!=="string")return b;var o=[],d,j,k,s,p=!0,q=i.isXML(a),u=h,v;do if(c.exec(""),d=c.exec(u))if(u=d[3],o.push(d[1]),d[2]){s=d[3];break}while(d);if(o.length>1&&l.exec(h))if(o.length===2&&
m.relative[o[0]])j=w(o[0]+o[1],a);else for(j=m.relative[o[0]]?[a]:i(o.shift(),a);o.length;)h=o.shift(),m.relative[h]&&(h+=o.shift()),j=w(h,j);else if(!e&&o.length>1&&a.nodeType===9&&!q&&m.match.ID.test(o[0])&&!m.match.ID.test(o[o.length-1])&&(d=i.find(o.shift(),a,q),a=d.expr?i.filter(d.expr,d.set)[0]:d.set[0]),a){d=e?{expr:o.pop(),set:r(e)}:i.find(o.pop(),o.length===1&&(o[0]==="~"||o[0]==="+")&&a.parentNode?a.parentNode:a,q);j=d.expr?i.filter(d.expr,d.set):d.set;for(o.length>0?k=r(j):p=!1;o.length;)d=
v=o.pop(),m.relative[v]?d=o.pop():v="",d==null&&(d=a),m.relative[v](k,d,q)}else k=[];k||(k=j);k||i.error(v||h);if(f.call(k)==="[object Array]")if(p)if(a&&a.nodeType===1)for(h=0;k[h]!=null;h++)k[h]&&(k[h]===!0||k[h].nodeType===1&&i.contains(a,k[h]))&&b.push(j[h]);else for(h=0;k[h]!=null;h++)k[h]&&k[h].nodeType===1&&b.push(j[h]);else b.push.apply(b,k);else r(k,b);s&&(i(s,g,b,e),i.uniqueSort(b));return b};i.uniqueSort=function(h){if(q&&(g=j,h.sort(q),g))for(var a=1;a<h.length;a++)h[a]===h[a-1]&&h.splice(a--,
1);return h};i.matches=function(h,a){return i(h,null,null,a)};i.find=function(h,a,b){var c;if(!h)return[];for(var e=0,d=m.order.length;e<d;e++){var g=m.order[e],f;if(f=m.leftMatch[g].exec(h)){var j=f[1];f.splice(1,1);if(j.substr(j.length-1)!=="\\"&&(f[1]=(f[1]||"").replace(/\\/g,""),c=m.find[g](f,a,b),c!=null)){h=h.replace(m.match[g],"");break}}}c||(c=a.getElementsByTagName("*"));return{set:c,expr:h}};i.filter=function(h,a,b,c){for(var e=h,d=[],f=a,g,j,k=a&&a[0]&&i.isXML(a[0]);h&&a.length;){for(var l in m.filter)if((g=
m.leftMatch[l].exec(h))!=null&&g[2]){var n=m.filter[l],s,p;p=g[1];j=!1;g.splice(1,1);if(p.substr(p.length-1)!=="\\"){f===d&&(d=[]);if(m.preFilter[l])if(g=m.preFilter[l](g,f,b,d,c,k)){if(g===!0)continue}else j=s=!0;if(g)for(var q=0;(p=f[q])!=null;q++)if(p){s=n(p,g,q,f);var r=c^!!s;b&&s!=null?r?j=!0:f[q]=!1:r&&(d.push(p),j=!0)}if(s!==void 0){b||(f=d);h=h.replace(m.match[l],"");if(!j)return[];break}}}if(h===e)if(j==null)i.error(h);else break;e=h}return f};i.error=function(h){throw"Syntax error, unrecognized expression: "+
h;};var m=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(h){return h.getAttribute("href")}},relative:{"+":function(h,a){var b=typeof a==="string",c=b&&!/\W/.test(a),b=b&&!c;c&&(a=a.toLowerCase());for(var c=0,e=h.length,d;c<e;c++)if(d=h[c]){for(;(d=d.previousSibling)&&d.nodeType!==1;);h[c]=b||d&&d.nodeName.toLowerCase()===a?d||!1:d===a}b&&i.filter(a,h,!0)},">":function(h,a){var b=typeof a==="string",c,d=0,e=h.length;if(b&&!/\W/.test(a))for(a=a.toLowerCase();d<e;d++){if(c=
h[d])b=c.parentNode,h[d]=b.nodeName.toLowerCase()===a?b:!1}else{for(;d<e;d++)(c=h[d])&&(h[d]=b?c.parentNode:c.parentNode===a);b&&i.filter(a,h,!0)}},"":function(h,c,g){var f=e++,j=b,o;typeof c==="string"&&!/\W/.test(c)&&(o=c=c.toLowerCase(),j=a);j("parentNode",c,f,h,o,g)},"~":function(h,c,g){var f=e++,j=b,o;typeof c==="string"&&!/\W/.test(c)&&(o=c=c.toLowerCase(),j=a);j("previousSibling",c,f,h,o,g)}},find:{ID:function(h,a,b){if(typeof a.getElementById!=="undefined"&&!b)return(h=a.getElementById(h[1]))?
[h]:[]},NAME:function(h,a){if(typeof a.getElementsByName!=="undefined"){for(var b=[],c=a.getElementsByName(h[1]),d=0,e=c.length;d<e;d++)c[d].getAttribute("name")===h[1]&&b.push(c[d]);return b.length===0?null:b}},TAG:function(h,a){return a.getElementsByTagName(h[1])}},preFilter:{CLASS:function(h,a,b,c,d,e){h=" "+h[1].replace(/\\/g,"")+" ";if(e)return h;for(var e=0,g;(g=a[e])!=null;e++)g&&(d^(g.className&&(" "+g.className+" ").replace(/[\t\n]/g," ").indexOf(h)>=0)?b||c.push(g):b&&(a[e]=!1));return!1},
ID:function(h){return h[1].replace(/\\/g,"")},TAG:function(h){return h[1].toLowerCase()},CHILD:function(h){if(h[1]==="nth"){var a=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(h[2]==="even"&&"2n"||h[2]==="odd"&&"2n+1"||!/\D/.test(h[2])&&"0n+"+h[2]||h[2]);h[2]=a[1]+(a[2]||1)-0;h[3]=a[3]-0}h[0]=e++;return h},ATTR:function(h,a,b,c,d,e){a=h[1].replace(/\\/g,"");!e&&m.attrMap[a]&&(h[1]=m.attrMap[a]);h[2]==="~="&&(h[4]=" "+h[4]+" ");return h},PSEUDO:function(a,b,d,e,g){if(a[1]==="not")if((c.exec(a[3])||"").length>1||
/^\w/.test(a[3]))a[3]=i(a[3],null,null,b);else return a=i.filter(a[3],b,d,1^g),d||e.push.apply(e,a),!1;else if(m.match.POS.test(a[0])||m.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()===
"button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],g=m.filters[e];if(g)return g(a,c,b,d);else if(e==="contains")return(a.textContent||
a.innerText||i.getText([a])||"").indexOf(b[3])>=0;else if(e==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else i.error("Syntax error, unrecognized expression: "+e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":var c=b[2],e=b[3];if(c===1&&e===0)return!0;var g=b[0],f=a.parentNode;if(f&&(f.sizcache!==
g||!a.nodeIndex)){for(var j=0,d=f.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++j;f.sizcache=g}d=a.nodeIndex-e;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=m.attrHandle[c]?m.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=
c+"",e=b[2],g=b[4];return c==null?e==="!=":e==="="?d===g:e==="*="?d.indexOf(g)>=0:e==="~="?(" "+d+" ").indexOf(g)>=0:!g?d&&c!==!1:e==="!="?d!==g:e==="^="?d.indexOf(g)===0:e==="$="?d.substr(d.length-g.length)===g:e==="|="?d===g||d.substr(0,g.length+1)===g+"-":!1},POS:function(a,b,c,d){var e=m.setFilters[b[2]];if(e)return e(a,c,b,d)}}},l=m.match.POS,s=function(a,b){return"\\"+(b-0+1)},p;for(p in m.match)m.match[p]=RegExp(m.match[p].source+/(?![^\[]*\])(?![^\(]*\))/.source),m.leftMatch[p]=RegExp(/(^(?:.|\r|\n)*?)/.source+
m.match[p].source.replace(/\\(\d+)/g,s));var r=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(n.documentElement.childNodes,0)}catch(u){r=function(a,b){var c=b||[],d=0;if(f.call(a)==="[object Array]")Array.prototype.push.apply(c,a);else if(typeof a.length==="number")for(var e=a.length;d<e;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var q;n.documentElement.compareDocumentPosition?q=function(a,b){if(!a.compareDocumentPosition||
!b.compareDocumentPosition)return a==b&&(g=!0),a.compareDocumentPosition?-1:1;var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;c===0&&(g=!0);return c}:"sourceIndex"in n.documentElement?q=function(a,b){if(!a.sourceIndex||!b.sourceIndex)return a==b&&(g=!0),a.sourceIndex?-1:1;var c=a.sourceIndex-b.sourceIndex;c===0&&(g=!0);return c}:n.createRange&&(q=function(a,b){if(!a.ownerDocument||!b.ownerDocument)return a==b&&(g=!0),a.ownerDocument?-1:1;var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();
c.setStart(a,0);c.setEnd(a,0);d.setStart(b,0);d.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,d);c===0&&(g=!0);return c});i.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b};(function(){var a=n.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=n.documentElement;c.insertBefore(a,c.firstChild);if(n.getElementById(b))m.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},m.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=n.createElement("div");a.appendChild(n.createComment(""));if(a.getElementsByTagName("*").length>0)m.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){for(var d=[],e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")m.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();n.querySelectorAll&&function(){var a=i,b=n.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){i=function(b,c,d,e){c=c||n;if(!e&&c.nodeType===
9&&!i.isXML(c))try{return r(c.querySelectorAll(b),d)}catch(g){}return a(b,c,d,e)};for(var c in a)i[c]=a[c];b=null}}();(function(){var a=n.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))m.order.splice(1,0,"CLASS"),m.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},
a=null})();i.contains=n.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):!0)};i.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var w=function(a,b){for(var c=[],d="",e,g=b.nodeType?[b]:b;e=m.match.PSEUDO.exec(a);)d+=e[0],a=a.replace(m.match.PSEUDO,"");a=m.relative[a]?a+"*":a;e=0;for(var f=g.length;e<f;e++)i(a,g[e],c);return i.filter(d,c)};k.Sizzle=i})()})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(f){Ur.initialize({type:"DOMContentLoaded"},f);Ur.loaded?Ur.initialize({type:"load"},f):window.addEventListener("load",function(l){Ur.initialize(l,f)},!1)},initialize:function(f,l){var e=f.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(l===void 0)l=document.body;for(name in e)(new e[name]).initialize(l);if(f.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(f){f()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(f,l){if(f!==void 0){var e=f.length||0,j=0;if(typeof l=="function")for(;j<e;j++)l.call(l,f[j],j,f)}},offset:function(f){typeof(f=="undefined")&&(f=this[0]);for(cumulative_left=cumulative_top=0;f.offsetParent;)cumulative_top+=f.offsetTop,cumulative_left+=f.offsetLeft,f=f.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(f,l){return f.parentNode!=window.document?x$().find_set_ancestor(f.parentNode,l):null},find_set_ancestor:function(f,
l){var e=x$(f).attr("data-ur-set")[0];return e!==void 0?l==void 0?f:e==l?f:x$().find_next_ancestor(f,l):x$().find_next_ancestor(f,l)},get_unique_uranium_id:function(){var f=0;return function(){f+=1;return f}}(),find_elements:function(f,l){var e={};this.each(function(e,f,g){return function(){x$().helper_find(this,e,f,g)}}(f,l,e));return e},helper_find:function(f,l,e,j){x$(f).find("*[data-ur-"+l+"-component]").each(function(){var f=!0,g=x$(this).attr("data-ur-id");if(g.length!=0)j[g]===void 0&&(j[g]=
{});else{var k=x$().find_set_ancestor(this);if(x$(k).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;k!==null?(g=x$(k).attr("data-ur-id")[0],g===void 0&&(g=x$().get_unique_uranium_id(),x$(k).attr("data-ur-id",g)),j[g]===void 0&&(j[g]={})):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),f=!1)}k=x$(this).attr("data-ur-"+l+"-component");k===void 0&&(f=!1);if(f)if(e!==void 0&&e[k]!==void 0)e[k](j[g],this,k);else j[g][k]=this});return j}};xui.extend(mixins);Ur.QuickLoaders.toggler=function(){function f(e,f){e.content===void 0&&(e.content=[]);e.content.push(f)}function l(){this.component_constructors={content:f}}l.prototype.find=function(e){e=x$(e).find_elements("toggler",this.component_constructors);for(toggler_id in e){var f=e[toggler_id];if(f.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+toggler_id);else{var l=x$(f.button).attr("data-ur-state")[0];l===void 0&&x$(f.button).attr("data-ur-state","disabled");
f.content===void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+toggler_id):x$().iterate(f.content,function(e){x$(e).attr("data-ur-state")[0]===void 0&&x$(e).attr("data-ur-state",l)})}}return e};l.prototype.construct_button_callback=function(e){return function(f){var f=f.currentTarget,l=x$(f).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(f).attr("data-ur-state",l);x$().iterate(e,function(e){var f=x$(e).attr("data-ur-state")[0]==="enabled"?"disabled":
"enabled";x$(e).attr("data-ur-state",f)})}};l.prototype.initialize=function(e){this.togglers=e=this.find(e);for(name in e){var f=e[name];x$(f.button).click(this.construct_button_callback(f.content))}};return l}();Ur.QuickLoaders["select-list"]=function(){function f(e,f){this.select=e;this.list=f;this.initialize()}function l(){this.SelectLists={}}f.prototype.initialize=function(){x$(this.list).click(function(e){return function(f){e.trigger_option(f)}}(this))};f.prototype.trigger_option=function(e){var f=e.target,l="";x$().iterate(this.list.children,function(e){e==f?(x$(e).attr("data-ur-state","enabled"),l=x$(e).attr("value")):x$(e).attr("data-ur-state","disabled")});this.select.value=l;return!0};l.prototype.initialize=
function(e){e=x$(e).find_elements("select-list");for(name in e)this.SelectLists[name]=new f(e[name].select,e[name].content)};return l}();Ur.QuickLoaders["select-buttons"]=function(){function f(e){this.select=e.select;this.increment=e.increment;this.decrement=e.decrement;this.initialize()}function l(){}f.prototype.initialize=function(){x$(this.increment).click(function(e){return function(f){e.trigger_option(f,1)}}(this));x$(this.decrement).click(function(e){return function(f){e.trigger_option(f,-1)}}(this))};f.prototype.trigger_option=function(e,f){if(x$(e.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var l={},g=this.select.value,
k={prev:null,next:null};x$().iterate(this.select.children,function(e,f){x$(e).attr("value")[0]==g&&(l={element:e,index:f});typeof l.index=="undefined"&&(k.prev=x$(e).attr("value")[0]);f==l.index+1&&(k.next=x$(e).attr("value")[0])});var r=this.select.children.length,n=l.index+f;n==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");n==r-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(n<
0||n==r)return!1;this.select.value=k[f==1?"next":"prev"];return!0};l.prototype.initialize=function(e){e=x$(e).find_elements("select-buttons");for(name in e)new f(e[name])};return l}();
