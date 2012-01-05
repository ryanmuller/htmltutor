(function(a,b){function s(a,b){return function(){if(r.plugin.debug)return a.apply(this,arguments);try{return a.apply(this,arguments)}catch(c){r.plugin.errors.push({plugin:b,thrown:c,source:a.toString()}),this.trigger("error",r.plugin.errors)}}}function v(a){var b=typeof a=="string"?a:[a.language,a.region].join("-"),c=b.split("-");return{iso6391:b,language:c[0]||"",region:c[1]||""}}function x(){var a,b=[];if(Object.keys)b=Object.keys(r.p);else for(a in r.p)h.call(r.p,a)&&b.push(a);return b.join(",").toLowerCase().split(",")}if(!b.addEventListener){a.Popcorn={isSupported:!1};var c="forEach extend effects error guid sizeOf isArray nop position disable enable destroy addTrackEvent removeTrackEvent getTrackEvents getTrackEvent getLastTrackEventId timeUpdate plugin removePlugin compose effect parser xhr getJSONP getScript".split(/\s+/);while(c.length)a.Popcorn[c.shift()]=function(){};return}var d=Array.prototype,e=Object.prototype,f=d.forEach,g=d.slice,h=e.hasOwnProperty,i=e.toString,j=a.Popcorn,k=/^(#([\w\-\_\.]+))$/,l=[],m=!1,n=!1,o={events:{hash:{},apis:{}}},p=function(){return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b,c){a.setTimeout(b,16)}}(),q=function(a){var b=a.media.currentTime,c=a.options.frameAnimation,d=a.data.disabled,e=a.data.trackEvents,f=e.animating,g=e.startIndex,h=r.registryByName,i=0,j,k,l;g=Math.min(g+1,e.byStart.length-2);while(g>0&&e.byStart[g]){j=e.byStart[g],k=j._natives,l=k&&k.type;if(!k||!!h[l]||!!a[l])j.start<=b&&j.end>b&&d.indexOf(l)===-1?j._running||(j._running=!0,k.start.call(a,null,j),c&&j&&j._running&&j.natives.frame&&k.frame.call(a,null,j,b)):j._running===!0&&(j._running=!1,k.end.call(a,null,j),c&&j._natives.frame&&(i=f.indexOf(j),i>=0&&f.splice(i,1)));g--}},r=function(a,b){return new r.p.init(a,b||null)};r.version="1.1.2",r.isSupported=!0,r.instances=[],r.p=r.prototype={init:function(c,d){var e;if(typeof c=="function"){if(b.readyState==="interactive"||b.readyState==="complete"){c(b,r);return}l.push(c);if(!m){m=!0;var f=function(){n=!0,b.removeEventListener("DOMContentLoaded",f,!1);for(var a=0,c=l.length;a<c;a++)l[a].call(b,r);l=null};b.addEventListener("DOMContentLoaded",f,!1)}return}e=k.exec(c),this.media=e&&e.length&&e[2]?b.getElementById(e[2]):c,this[this.media.nodeName&&this.media.nodeName.toLowerCase()||"video"]=this.media,r.instances.push(this),this.options=d||{},this.isDestroyed=!1,this.data={timeUpdate:r.nop,disabled:[],events:{},hooks:{},history:[],state:{volume:this.media.volume},trackRefs:{},trackEvents:{byStart:[{start:-1,end:-1}],byEnd:[{start:-1,end:-1}],animating:[],startIndex:0,endIndex:0,previousUpdateTime:-1}};var g=function(b){var c,d;b.media.readyState>=2?(c=b.media.duration,d=c!=c?Number.MAX_VALUE:c+1,r.addTrackEvent(b,{start:d,end:d}),b.options.frameAnimation?(b.data.timeUpdate=function(){r.timeUpdate(b,{}),b.trigger("timeupdate"),!b.isDestroyed&&p(b.data.timeUpdate)},!b.isDestroyed&&p(b.data.timeUpdate)):(b.data.timeUpdate=function(a){r.timeUpdate(b,a)},b.isDestroyed||b.media.addEventListener("timeupdate",b.data.timeUpdate,!1))):a.setTimeout(function(){g(b)},1)};return g(this),this}},r.p.init.prototype=r.p,r.forEach=function(a,b,c){if(!a||!b)return{};c=c||this;var d,e;if(f&&a.forEach===f)return a.forEach(b,c);if(i.call(a)==="[object NodeList]"){for(d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a);return a}for(d in a)h.call(a,d)&&b.call(c,a[d],d,a);return a},r.extend=function(a){var b=a,c=g.call(arguments,1);return r.forEach(c,function(a){for(var c in a)b[c]=a[c]}),b},r.extend(r,{noConflict:function(b){return b&&(a.Popcorn=j),r},error:function(a){throw new Error(a)},guid:function(a){return r.guid.counter++,(a?a:"")+(+(new Date)+r.guid.counter)},sizeOf:function(a){var b=0;for(var c in a)b++;return b},isArray:Array.isArray||function(a){return i.call(a)==="[object Array]"},nop:function(){},position:function(c){var d=c.getBoundingClientRect(),e={},f=c.ownerDocument,g=b.documentElement,h=b.body,i,j,k,l,m,n;i=g.clientTop||h.clientTop||0,j=g.clientLeft||h.clientLeft||0,k=a.pageYOffset&&g.scrollTop||h.scrollTop,l=a.pageXOffset&&g.scrollLeft||h.scrollLeft,m=Math.ceil(d.top+k-i),n=Math.ceil(d.left+l-j);for(var o in d)e[o]=Math.round(d[o]);return r.extend({},e,{top:m,left:n})},disable:function(a,b){var c=a.data.disabled;return c.indexOf(b)===-1&&c.push(b),q(a),a},enable:function(a,b){var c=a.data.disabled,d=c.indexOf(b);return d>-1&&c.splice(d,1),q(a),a},destroy:function(a){var b=a.data.events,c,d,e;for(d in b){c=b[d];for(e in c)delete c[e];b[d]=null}a.isDestroyed||(a.data.timeUpdate&&a.media.removeEventListener("timeupdate",a.data.timeUpdate,!1),a.isDestroyed=!0)}}),r.guid.counter=1,r.extend(r.p,function(){var a="load play pause currentTime playbackRate volume duration preload playbackRate autoplay loop controls muted buffered readyState seeking paused played seekable ended",b={};return r.forEach(a.split(/\s+/g),function(a){b[a]=function(b){return typeof this.media[a]=="function"?(b!=null&&/play|pause/.test(a)&&(this.media.currentTime=r.util.toSeconds(b)),this.media[a](),this):b!=null?(this.media[a]=b,this):this.media[a]}}),b}()),r.forEach("enable disable".split(" "),function(a){r.p[a]=function(b){return r[a](this,b)}}),r.extend(r.p,{roundTime:function(){return-~this.media.currentTime},exec:function(a,b){return r.addTrackEvent(this,{start:a,end:a+1,_running:!1,_natives:{start:b||r.nop,end:r.nop,type:"exec"}}),this},mute:function(a){var b=a==null||a===!0?"muted":"unmuted";return b==="unmuted"&&(this.media.muted=!1,this.media.volume=this.data.state.volume),b==="muted"&&(this.data.state.volume=this.media.volume,this.media.muted=!0),this.trigger(b),this},unmute:function(a){return this.mute(a==null?!1:!a)},position:function(){return r.position(this.media)},toggle:function(a){return r[this.data.disabled.indexOf(a)>-1?"enable":"disable"](this,a)},defaults:function(a,b){return r.isArray(a)?(r.forEach(a,function(a){for(var b in a)this.defaults(b,a[b])},this),this):(this.options.defaults||(this.options.defaults={}),this.options.defaults[a]||(this.options.defaults[a]={}),r.extend(this.options.defaults[a],b),this)}}),r.Events={UIEvents:"blur focus focusin focusout load resize scroll unload",MouseEvents:"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave click dblclick",Events:"loadstart progress suspend emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange"},r.Events.Natives=r.Events.UIEvents+" "+r.Events.MouseEvents+" "+r.Events.Events,o.events.apiTypes=["UIEvents","MouseEvents","Events"],function(a,b){var c=o.events.apiTypes,d=a.Natives.split(/\s+/g),e=0,f=d.length,g;for(;e<f;e++)b.hash[d[e]]=!0;c.forEach(function(c,d){b.apis[c]={};var e=a[c].split(/\s+/g),f=e.length,g=0;for(;g<f;g++)b.apis[c][e[g]]=!0})}(r.Events,o.events),r.events={isNative:function(a){return!!o.events.hash[a]},getInterface:function(a){if(!r.events.isNative(a))return!1;var b=o.events,c=b.apiTypes,d=b.apis,e=0,f=c.length,g,h;for(;e<f;e++){h=c[e];if(d[h][a]){g=h;break}}return g},all:r.Events.Natives.split(/\s+/g),fn:{trigger:function(c,d){var e,f;if(this.data.events[c]&&r.sizeOf(this.data.events[c])){e=r.events.getInterface(c);if(e)return f=b.createEvent(e),f.initEvent(c,!0,!0,a,1),this.media.dispatchEvent(f),this;r.forEach(this.data.events[c],function(a,b){a.call(this,d)},this)}return this},listen:function(a,b){var c=this,d=!0,e=r.events.hooks[a],f=a,g;return this.data.events[a]||(this.data.events[a]={},d=!1),e&&(e.add&&e.add.call(this,{},b),e.bind&&(a=e.bind),e.handler&&(g=b,b=function(a){e.handler.call(c,a,g)}),d=!0,this.data.events[a]||(this.data.events[a]={},d=!1)),this.data.events[a][b.name||b.toString()+r.guid()]=b,!d&&r.events.all.indexOf(a)>-1&&this.media.addEventListener(a,function(b){r.forEach(c.data.events[a],function(a,d){typeof a=="function"&&a.call(c,b)})},!1),this},unlisten:function(a,b){return this.data.events[a]&&this.data.events[a][b]?(delete this.data.events[a][b],this):(this.data.events[a]=null,this)}},hooks:{canplayall:{bind:"canplaythrough",add:function(a,b){var c=!1;this.media.readyState&&(b.call(this,a),c=!0),this.data.hooks.canplayall={fired:c}},handler:function(a,b){this.data.hooks.canplayall.fired||(b.call(this,a),this.data.hooks.canplayall.fired=!0)}}}},r.forEach(["trigger","listen","unlisten"],function(a){r.p[a]=r.events.fn[a]}),r.addTrackEvent=function(a,b){b&&b._natives&&b._natives.type&&a.options.defaults&&a.options.defaults[b._natives.type]&&(b=r.extend({},a.options.defaults[b._natives.type],b)),b._natives&&(b._id=b.id?b.id:r.guid(b._natives.type),a.data.history.push(b._id)),b.start=r.util.toSeconds(b.start,a.options.framerate),b.end=r.util.toSeconds(b.end,a.options.framerate);var c=a.data.trackEvents.byStart,d=a.data.trackEvents.byEnd,e,f,g;for(e=c.length-1;e>=0;e--)if(b.start>=c[e].start){c.splice(e+1,0,b);break}for(f=d.length-1;f>=0;f--)if(b.end>d[f].end){d.splice(f+1,0,b);break}b._natives&&(!!r.registryByName[b._natives.type]||!!a[b._natives.type])&&(g=a.media.currentTime,b.end>g&&b.start<=g&&a.data.disabled.indexOf(b._natives.type)===-1&&(b._running=!0,b._natives.start.call(a,null,b),a.options.frameAnimation&&b._natives.frame&&(a.data.trackEvents.animating.push(b),b._natives.frame.call(a,null,b,g)))),e<=a.data.trackEvents.startIndex&&b.start<=a.data.trackEvents.previousUpdateTime&&a.data.trackEvents.startIndex++,f<=a.data.trackEvents.endIndex&&b.end<a.data.trackEvents.previousUpdateTime&&a.data.trackEvents.endIndex++,this.timeUpdate(a,null,!0),b._id&&r.addTrackEvent.ref(a,b)},r.addTrackEvent.ref=function(a,b){return a.data.trackRefs[b._id]=b,a},r.removeTrackEvent=function(a,b){var c=a.data.history.length,d=0,e=[],f=[],g=[],h=[];r.forEach(a.data.trackEvents.byStart,function(c,g,h){c._id||(e.push(a.data.trackEvents.byStart[g]),f.push(a.data.trackEvents.byEnd[g])),c._id&&(c._id!==b&&(e.push(a.data.trackEvents.byStart[g]),f.push(a.data.trackEvents.byEnd[g])),c._id===b&&(d=g,c._natives._teardown&&c._natives._teardown.call(a,c)))}),a.data.trackEvents.animating.length&&r.forEach(a.data.trackEvents.animating,function(c,d,e){c._id||g.push(a.data.trackEvents.animating[d]),c._id&&c._id!==b&&g.push(a.data.trackEvents.animating[d])}),d<=a.data.trackEvents.startIndex&&a.data.trackEvents.startIndex--,d<=a.data.trackEvents.endIndex&&a.data.trackEvents.endIndex--,a.data.trackEvents.byStart=e,a.data.trackEvents.byEnd=f,a.data.trackEvents.animating=g;for(var i=0;i<c;i++)a.data.history[i]!==b&&h.push(a.data.history[i]);a.data.history=h,r.removeTrackEvent.ref(a,b)},r.removeTrackEvent.ref=function(a,b){return delete a.data.trackRefs[b],a},r.getTrackEvents=function(a){var b=[],c=a.data.trackEvents.byStart,d=c.length,e=0,f;for(;e<d;e++)f=c[e],f._id&&b.push(f);return b},r.getTrackEvents.ref=function(a){return a.data.trackRefs},r.getTrackEvent=function(a,b){return a.data.trackRefs[b]},r.getTrackEvent.ref=function(a,b){return a.data.trackRefs[b]},r.getLastTrackEventId=function(a){return a.data.history[a.data.history.length-1]},r.timeUpdate=function(a,b){var c=a.media.currentTime,d=a.data.trackEvents.previousUpdateTime,e=a.data.trackEvents,f=e.animating,g=e.endIndex,h=e.startIndex,i=0,j=e.byStart.length,k=e.byEnd.length,l=r.registryByName,m="trackstart",n="trackend",o,p,q,s,t;if(d<=c){while(e.byEnd[g]&&e.byEnd[g].end<=c){o=e.byEnd[g],s=o._natives,t=s&&s.type;if(!!s&&!l[t]&&!a[t]){r.removeTrackEvent(a,o._id);return}o._running===!0&&(o._running=!1,s.end.call(a,b,o),a.trigger(n,r.extend({},o,{plugin:t,type:n}))),g++}while(e.byStart[h]&&e.byStart[h].start<=c){p=e.byStart[h],s=p._natives,t=s&&s.type;if(!!s&&!l[t]&&!a[t]){r.removeTrackEvent(a,p._id);return}p.end>c&&p._running===!1&&a.data.disabled.indexOf(t)===-1&&(p._running=!0,s.start.call(a,b,p),a.trigger(m,r.extend({},p,{plugin:t,type:m})),a.options.frameAnimation&&p&&p._running&&p._natives.frame&&f.push(p)),h++}if(a.options.frameAnimation)while(i<f.length)q=f[i],q._running?(q._natives.frame.call(a,b,q,c),i++):f.splice(i,1)}else if(d>c){while(e.byStart[h]&&e.byStart[h].start>c){p=e.byStart[h],s=p._natives,t=s&&s.type;if(!!s&&!l[t]&&!a[t]){r.removeTrackEvent(a,p._id);return}p._running===!0&&(p._running=!1,s.end.call(a,b,p),a.trigger(n,r.extend({},o,{plugin:t,type:n}))),h--}while(e.byEnd[g]&&e.byEnd[g].end>c){o=e.byEnd[g],s=o._natives,t=s&&s.type;if(!!s&&!l[t]&&!a[t]){r.removeTrackEvent(a,o._id);return}o.start<=c&&o._running===!1&&a.data.disabled.indexOf(t)===-1&&(o._running=!0,s.start.call(a,b,o),a.trigger(m,r.extend({},p,{plugin:t,type:m})),a.options.frameAnimation&&o&&o._running&&o._natives.frame&&f.push(o)),g--}if(a.options.frameAnimation)while(i<f.length)q=f[i],q._running?(q._natives.frame.call(a,b,q,c),i++):f.splice(i,1)}e.endIndex=g,e.startIndex=h,e.previousUpdateTime=c,e.byStart.length<j&&e.startIndex--,e.byEnd.length<k&&e.endIndex--},r.extend(r.p,{getTrackEvents:function(){return r.getTrackEvents.call(null,this)},getTrackEvent:function(a){return r.getTrackEvent.call(null,this,a)},getLastTrackEventId:function(){return r.getLastTrackEventId.call(null,this)},removeTrackEvent:function(a){return r.removeTrackEvent.call(null,this,a),this},removePlugin:function(a){return r.removePlugin.call(null,this,a),this},timeUpdate:function(a){return r.timeUpdate.call(null,this,a),this},destroy:function(){return r.destroy.call(null,this),this}}),r.manifest={},r.registry=[],r.registryByName={},r.plugin=function(a,b,c){if(r.protect.natives.indexOf(a.toLowerCase())>=0){r.error("'"+a+"' is a protected function name");return}var d=["start","end"],e={},f,h=typeof b=="function",i=["_setup","_teardown","start","end","frame"],j=function(a,b){return a=a||r.nop,b=b||r.nop,function(){a.apply(this,arguments),b.apply(this,arguments)}};r.manifest[a]=c=c||b.manifest||{},i.forEach(function(c){b[c]=s(b[c]||r.nop,a)});var k=function(b,e){if(!e)return this;var f=e._natives={},h="",k,l,m,n;return r.extend(f,b),e._natives.type=a,e._running=!1,f.start=f.start||f["in"],f.end=f.end||f.out,f._teardown=j(function(){var a=g.call(arguments);a.unshift(null),a[1]._running&&f.end.apply(this,a)},f._teardown),k=this.options.defaults&&this.options.defaults[e._natives&&e._natives.type],e.compose=e.compose&&e.compose.split(" ")||[],e.effect=e.effect&&e.effect.split(" ")||[],e.compose=e.compose.concat(e.effect),e.compose.forEach(function(a){h=r.compositions[a]||{},i.forEach(function(a){f[a]=j(f[a],h[a])})}),e._natives.manifest=c,"start"in e||(e.start=e["in"]||0),"end"in e||(e.end=e.out||this.duration()||Number.MAX_VALUE),n=k?r.extend({},k,e):e,n.target||(m="options"in c&&c.options,n.target=m&&"target"in m&&m.target),e._natives._setup&&e._natives._setup.call(this,n),r.addTrackEvent(this,r.extend(n,e)),r.forEach(b,function(a,b){b!=="type"&&d.indexOf(b)===-1&&this.listen(b,a)},this),this};e[a]=function(a){return k.call(this,h?b.call(this,a):b,a)},r.extend(r.p,e);var l={fn:e[a],definition:b,base:b,parents:[],name:a};return r.registry.push(r.extend(e,l,{type:a})),r.registryByName[a]=l,e},r.plugin.errors=[],r.plugin.debug=!1,r.removePlugin=function(a,b){if(!b){b=a,a=r.p;if(r.protect.natives.indexOf(b.toLowerCase())>=0){r.error("'"+b+"' is a protected function name");return}var c=r.registry.length,d;for(d=0;d<c;d++)if(r.registry[d].name===b){r.registry.splice(d,1),delete r.registryByName[b],delete r.manifest[b],delete a[b];return}}var e=a.data.trackEvents.byStart,f=a.data.trackEvents.byEnd,g=a.data.trackEvents.animating,h,i;for(h=0,i=e.length;h<i;h++)e[h]&&e[h]._natives&&e[h]._natives.type===b&&f[h]&&f[h]._natives&&f[h]._natives.type===b&&(e[h]._natives._teardown&&e[h]._natives._teardown.call(a,e[h]),e.splice(h,1),f.splice(h,1),h--,i--,a.data.trackEvents.startIndex<=h&&(a.data.trackEvents.startIndex--,a.data.trackEvents.endIndex--));for(h=0,i=g.length;h<i;h++)g[h]&&g[h]._natives&&g[h]._natives.type===b&&(g.splice(h,1),h--,i--)},r.compositions={},r.compose=function(a,b,c){r.manifest[a]=c=c||b.manifest||{},r.compositions[a]=b},r.plugin.effect=r.effect=r.compose,r.parsers={},r.parser=function(a,b,c){if(r.protect.natives.indexOf(a.toLowerCase())>=0){r.error("'"+a+"' is a protected function name");return}typeof b=="function"&&!c&&(c=b,b="");if(typeof c!="function"||typeof b!="string")return;var d=r.events.all,e,f={};return e=function(a,d){if(!a)return this;var e=this;return r.xhr({url:a,dataType:b,success:function(a){var b=c(a),f,g,i,j=0;f=b.data||[],g=f.length,i=null;if(!g)return;for(;j<g;j++){i=f[j];for(var k in i)h.call(i,k)&&!!e[k]&&e[k](i[k])}d&&d()}}),this},f[a]=e,r.extend(r.p,f),f},r.player=function(a,c){c=c||{};var d=function(a,d,e){e=e||{};var f=new Date/1e3,g=f,h=0,i=1,j=!1,l={},m=b.getElementById(k.exec(a)&&k.exec(a)[2])||b.getElementById(a)||a,n={},o,p;for(var q in m)typeof m[q]=="object"?n[q]=m[q]:typeof m[q]=="function"?n[q]=function(a){return"length"in m[a]&&!m[a].call?m[a]:function(){return m[a].apply(m,arguments)}}(q):r.player.defineProperty(n,q,{get:function(a){return function(){return m[a]}}(q),set:r.nop,configurable:!0});var s=function(){f=new Date/1e3,n.paused||(n.currentTime=n.currentTime+(f-g),n.dispatchEvent("timeupdate"),o=setTimeout(s,10)),g=f};return n.play=function(){this.paused=!1,n.readyState>=4&&(g=new Date/1e3,n.dispatchEvent("play"),s())},n.pause=function(){this.paused=!0,n.dispatchEvent("pause")},r.player.defineProperty(n,"currentTime",{get:function(){return h},set:function(a){return h=+a,n.dispatchEvent("timeupdate"),h},configurable:!0}),r.player.defineProperty(n,"volume",{get:function(){return i},set:function(a){return i=+a,n.dispatchEvent("volumechange"),i},configurable:!0}),r.player.defineProperty(n,"muted",{get:function(){return j},set:function(a){return j=+a,n.dispatchEvent("volumechange"),j},configurable:!0}),n.addEventListener=function(a,b){return l[a]||(l[a]=[]),l[a].push(b),b},n.dispatchEvent=function(a){var c,d=this,e,f=a.type;f||(f=a,e=r.events.getInterface(f),e&&(c=b.createEvent(e),c.initEvent(f,!0,!0,window,1))),r.forEach(l[f],function(a){a.call(d,c,d)})},n.src=d||"",n.readyState=0,n.duration=0,n.paused=!0,n.ended=0,c._setup?c._setup.call(n,e):(n.readyState=4,n.dispatchEvent("load"),n.dispatchEvent("loadeddata")),n.addEventListener("load",function(){n.currentTime=h,n.volume=i,n.muted=j}),n.addEventListener("loadeddata",function(){!n.paused&&n.play()}),p=new r.p.init(n,e),p};r[a]=r[a]||d},r.player.defineProperty=Object.defineProperty||function(a,b,c){a.__defineGetter__(b,c.get||r.nop),a.__defineSetter__(b,c.set||r.nop)};var t=/\?/,u={url:"",data:"",dataType:"",success:r.nop,type:"GET",async:!0,xhr:function(){return new a.XMLHttpRequest}};r.xhr=function(a){a.dataType=a.dataType&&a.dataType.toLowerCase()||null;if(!(!a.dataType||a.dataType!=="jsonp"&&a.dataType!=="script")){r.xhr.getJSONP(a.url,a.success,a.dataType==="script");return}var b=r.extend({},u,a);b.ajax=b.xhr();if(b.ajax)return b.type==="GET"&&b.data&&(b.url+=(t.test(b.url)?"&":"?")+b.data,b.data=null),b.ajax.open(b.type,b.url,b.async),b.ajax.send(b.data||null),r.xhr.httpData(b)},r.xhr.httpData=function(a){var b,c=null,d,e=null;return a.ajax.onreadystatechange=function(){if(a.ajax.readyState===4){try{c=JSON.parse(a.ajax.responseText)}catch(f){}b={xml:a.ajax.responseXML,text:a.ajax.responseText,json:c};if(!b.xml||!b.xml.documentElement){b.xml=null;try{d=new DOMParser,e=d.parseFromString(a.ajax.responseText,"text/xml"),e.getElementsByTagName("parsererror").length||(b.xml=e)}catch(f){}}a.dataType&&(b=b[a.dataType]),a.success.call(a.ajax,b)}},b},r.xhr.getJSONP=function(a,c,d){var e=b.head||b.getElementsByTagName("head")[0]||b.documentElement,f=b.createElement("script"),g=a.split("?")[1],h=!1,i=[],j,k,l;g&&!d&&(i=g.split("&")),i.length&&(k=i[i.length-1].split("=")),j=i.length?k[1]?k[1]:k[0]:"jsonp",!g&&!d&&(a+="?callback="+j),j&&!d&&(!window[j]||(j=r.guid(j)),window[j]=function(a){c&&c(a),h=!0},a=a.replace(k.join("="),k[0]+"="+j)),f.onload=function(){d&&c&&c(),h&&delete window[j],e.removeChild(f)},f.src=a,e.insertBefore(f,e.firstChild);return},r.getJSONP=r.xhr.getJSONP,r.getScript=r.xhr.getScript=function(a,b){return r.xhr.getJSONP(a,b,!0)},r.util={toSeconds:function(a,b){var c=/^([0-9]+:){0,2}[0-9]+([.;][0-9]+)?$/,d="Invalid time format",e,f,g,h,i,j;return typeof a=="number"?a:(typeof a=="string"&&!c.test(a)&&r.error(d),e=a.split(":"),f=e.length-1,g=e[f],g.indexOf(";")>-1&&(i=g.split(";"),j=0,b&&typeof b=="number"&&(j=parseFloat(i[1],10)/b),e[f]=parseInt(i[0],10)+j),h=e[0],{1:parseFloat(h,10),2:parseInt(h,10)*60+parseFloat(e[1],10),3:parseInt(h,10)*3600+parseInt(e[1],10)*60+parseFloat(e[2],10)}[e.length||1])}};var w=v(a.navigator.userLanguage||a.navigator.language);r.locale={get:function(){return w},set:function(a){return w=v(a),r.locale.broadcast(),w},broadcast:function(a){var b=r.instances,c=b.length,d=0,e;a=a||"locale:changed";for(;d<c;d++)e=b[d],a in e.data.events&&e.trigger(a)}},r.p.cue=r.p.exec,r.protect={natives:x()},a.Popcorn=r})(window,window.document),function(a,b){function i(){return b.swfobject&&b.soundcloud}function j(a,c){if(a.currentStyle)return a.currentStyle[c];if(b.getComputedStyle)return document.defaultView.getComputedStyle(a,null).getPropertyValue(c)}function k(a){function b(a){function c(a,b){return a+" "+b+(a>1?"s":"")+" ago"}var b=((new Date).getTime()-a.getTime())/1e3;return b<60?c(g(b),"second"):(b/=60,b<60?c(g(b),"minute"):(b/=60,b<24?c(g(b),"hour"):(b/=24,b<30?c(g(b),"day"):b<365?c(g(b/30),"month"):c(g(b/365),"year"))))}function c(a){var b=f(a/60),c=g(a%60);return b+"."+(c<10?"0":"")+c}return'<div><a href="'+a.user.profile+'">'+'<img width="16px height="16px" src="'+a.user.avatar+'"></img>'+a.user.name+"</a> at "+c(a.start)+" "+b(a.date)+"<br />"+a.text+"</span>"}function l(a){if(!i()){setTimeout(function(){l(a)},15);return}var b={enable_api:!0,object_id:a._playerId,url:a.src,show_comments:!a._options.api.key&&!a._options.api.commentdiv},c={allowscriptaccess:"always",wmode:"transparent"},d={id:a._playerId,name:a._playerId},e=document.createElement("div");e.setAttribute("id",a._playerId),a._container.appendChild(e),swfobject.embedSWF("http://player.soundcloud.com/player.swf",a._playerId,a.offsetWidth,a.height,"9.0.0","expressInstall.swf",b,c,d)}var c=33,d=.25,e=Math.abs,f=Math.floor,g=Math.round,h={};a.soundcloud=function(b,c,d){return a.getScript("http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"),a.getScript("http://popcornjs.org/code/players/soundcloud/lib/soundcloud.player.api.js",function(){var a=1;soundcloud.addEventListener("onPlayerReady",function(a,b){var c=h[a.api_getFlashId()];c.swfObj=a,c.duration=a.api_getTrackDuration(),c.currentTime=a.api_getTrackPosition(),c.volume=c.previousVolume=a.api_getVolume()/100,c._mediaId=b.mediaId,c.dispatchEvent("load"),c.dispatchEvent("canplay"),c.dispatchEvent("durationchange"),c.timeupdate()}),soundcloud.addEventListener("onMediaStart",function(a,b){var c=h[a.api_getFlashId()];c.played=1,c.dispatchEvent("playing")}),soundcloud.addEventListener("onMediaPlay",function(b,c){if(a){a=0;return}var d=h[b.api_getFlashId()];d.dispatchEvent("play")}),soundcloud.addEventListener("onMediaPause",function(a,b){var c=h[a.api_getFlashId()];c.dispatchEvent("pause")}),soundcloud.addEventListener("onMediaBuffering",function(a,b){var c=h[a.api_getFlashId()];c.dispatchEvent("progress"),c.readyState===0&&(c.readyState=3,c.dispatchEvent("readystatechange"))}),soundcloud.addEventListener("onMediaDoneBuffering",function(a,b){var c=h[a.api_getFlashId()];c.dispatchEvent("canplaythrough")}),soundcloud.addEventListener("onMediaEnd",function(a,b){var c=h[a.api_getFlashId()];c.paused=1,c.dispatchEvent("ended")}),soundcloud.addEventListener("onMediaSeek",function(a,b){var c=h[a.api_getFlashId()];c.setCurrentTime(a.api_getTrackPosition()),c.paused&&c.dispatchEvent("timeupdate")}),soundcloud.addEventListener("onPlayerError",function(a,b){var c=h[a.api_getFlashId()];c.dispatchEvent("error")})}),new a.soundcloud.init(b,c,d)},a.soundcloud.init=function(){function b(a){var b=a._options,c=a._container,d=c.getBoundingClientRect(),e,f;a.width=b.width||j(c,"width")||"100%",a.height=b.height||j(c,"height")||"81px",a.src=b.src,a.autoplay=b.autoplay,parseFloat(a.height,10)!==81&&(a.height="81px"),a.offsetLeft=d.left,a.offsetTop=d.top,a.offsetHeight=parseFloat(a.height,10),a.offsetWidth=parseFloat(a.width,10),/[\d]+%/.test(a.width)&&(e=j(c,"width"),a._container.style.width=a.width,a.offsetWidth=a._container.offsetWidth,a._container.style.width=e),/[\d]+%/.test(a.height)&&(e=j(c,"height"),a._container.style.height=a.height,a.offsetHeight=a._container.offsetHeight,a._container.style.height=e)}var c=function(c,d,e){if(!c)throw"Must supply an id!";if(!d)throw"Must supply a source!";if(/file/.test(location.protocol))throw"Must run from a web server!";var f=this._container=document.getElementById(c);if(!f)throw"Could not find that container in the DOM!";e=e||{},e.api=e.api||{},e.target=c,e.src=d,e.api.commentformat=e.api.commentformat||k,this._mediaId=0,this._listeners={},this._playerId=a.guid(e.target),this._containerId=e.target,this._options=e,this._comments=[],this._popcorn=null,b(this),this.duration=0,this.volume=1,this.currentTime=0,this.ended=0,this.paused=1,this.readyState=0,this.playbackRate=1,this.top=0,this.left=0,this.autoplay=null,this.played=0,this.addEventListener("load",function(){var a=this.getBoundingClientRect();this.top=a.top,this.left=a.left,this.offsetWidth=this.swfObj.offsetWidth,this.offsetHeight=this.swfObj.offsetHeight,this.offsetLeft=this.swfObj.offsetLeft,this.offsetTop=this.swfObj.offsetTop}),h[this._playerId]=this,l(this)};return c}(),a.soundcloud.init.prototype=a.soundcloud.prototype,a.extend(a.soundcloud.prototype,{setVolume:function(a){if(!a&&a!==0)return;a<0&&(a=-a),a>1&&(a%=1),this.volume=this.previousVolume=a,this.swfObj.api_setVolume(a*100),this.dispatchEvent("volumechange")},setCurrentTime:function(a){if(!a&&a!==0)return;this.currentTime=this.previousCurrentTime=a,this.ended=a>=this.duration,this.dispatchEvent("seeked")},play:function(){if(!this.swfObj){this.addEventListener("load",this.play);return}if(!this.paused)return;this.paused=0,this.swfObj.api_play()},pause:function(){if(!this.swfObj){this.addEventListener("load",this.pause);return}if(this.paused)return;this.paused=1,this.swfObj.api_pause()},mute:function(){if(!this.swfObj){this.addEventListener("load",this.mute);return}this.muted()?this.paused?this.setVolume(this.oldVol):this.volume=this.oldVol:(this.oldVol=this.volume,this.paused?this.setVolume(0):this.volume=0)},muted:function(){return this.volume===0},load:function(){if(!this.swfObj){this.addEventListener("load",this.load);return}this.play(),this.pause()},addEventListener:function(a,b){return this._listeners[a]||(this._listeners[a]=[]),this._listeners[a].push(b),b},dispatchEvent:function(b){var c=this,d=b.type||b;if(d==="play"&&this.paused||d==="pause"&&!this.paused){this[d]();return}a.forEach(this._listeners[d],function(a){a.call(c)})},timeupdate:function(){var a=this,b=this.swfObj.api_getVolume()/100,f=0;e(this.currentTime-this.previousCurrentTime)>d?(this.swfObj.api_seekTo(this.currentTime),f=1):this.previousCurrentTime=this.currentTime=this.swfObj.api_getTrackPosition(),b!==this.previousVolume?this.setVolume(b):this.volume!==this.previousVolume&&this.setVolume(this.volume),this.paused||this.dispatchEvent("timeupdate"),a.ended||setTimeout(function(){a.timeupdate.call(a)},c)},getBoundingClientRect:function(){var a,b=this;return this.swfObj?(a=this.swfObj.getBoundingClientRect(),{bottom:a.bottom,left:a.left,right:a.right,top:a.top,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}):(tmp=this._container.getBoundingClientRect(),{left:tmp.left,top:tmp.top,width:b.offsetWidth,height:b.offsetHeight,bottom:tmp.top+this.width,right:tmp.top+this.height})},registerPopcornWithPlayer:function(b){if(!this.swfObj){this.addEventListener("load",function(){this.registerPopcornWithPlayer(b)});return}this._popcorn=b;var c=this._options.api;if(c.key&&c.commentdiv){var d=this;a.xhr({url:"http://api.soundcloud.com/tracks/"+d._mediaId+"/comments.js?consumer_key="+c.key,success:function(b){a.forEach(b.json,function(a){d.addComment({start:a.timestamp/1e3,date:new Date(a.created_at),text:a.body,user:{name:a.user.username,profile:a.user.permalink_url,avatar:a.user.avatar_url}})})}})}}}),a.extend(a.soundcloud.prototype,{addComment:function(a,b){var c=this,d={start:a.start||0,date:a.date||new Date,text:a.text||"",user:{name:a.user.name||"",profile:a.user.profile||"",avatar:a.user.avatar||""},display:function(){return(b||c._options.api.commentformat)(d)}};this._comments.push(d);if(!this._popcorn)return;this._popcorn.subtitle({start:d.start,target:this._options.api.commentdiv,display:"inline",language:"en",text:d.display()})}})}(Popcorn,window),function(){vimeo_player_loaded=function(a){vimeo_player_loaded[a]&&vimeo_player_loaded[a]()},vimeo_player_loaded.seek={},vimeo_player_loaded.loadProgress={},vimeo_player_loaded.play={},vimeo_player_loaded.pause={},Popcorn.player("vimeo",{_setup:function(a){var b=this,c,d=document.createElement("div"),e=0,f=0,g=!1,h=!1,i=!1,j=0,k,l;d.id=b.id+Popcorn.guid(),b.appendChild(d),l=b.style.width?""+b.offsetWidth:"560",k=b.style.height?""+b.offsetHeight:"315";var m=function(){function r(a){if(!a)return;var b=/^http:\/\/player\.vimeo\.com\/video\/[\d]+/i,c=/vimeo\.com\/[\d]+/,d=a.match(b)?a.match(b)[0].substr(30):"";return d?d:a.match(c)?a.match(c)[0].substr(10):""}var h,m,n={},o=b.src,p=0,q=!1;vimeo_player_loaded[d.id]=function(){c=document.getElementById(d.id),vimeo_player_loaded.seek[d.id]=function(a){a!==e&&(e=a,b.dispatchEvent("seeked"),b.dispatchEvent("timeupdate"))},vimeo_player_loaded.play[d.id]=function(){b.paused&&(b.paused=!1,b.dispatchEvent("play"),b.dispatchEvent("playing"),a())},vimeo_player_loaded.pause[d.id]=function(){b.paused||(b.paused=!0,b.dispatchEvent("pause"))},vimeo_player_loaded.loadProgress[d.id]=function(a){q||(q=!0,b.dispatchEvent("loadstart")),a.percent===100&&b.dispatchEvent("canplaythrough")},c.api_addEventListener("seek","vimeo_player_loaded.seek."+d.id),c.api_addEventListener("loadProgress","vimeo_player_loaded.loadProgress."+d.id),c.api_addEventListener("play","vimeo_player_loaded.play."+d.id),c.api_addEventListener("pause","vimeo_player_loaded.pause."+d.id);var a=function(){b.paused||(e=c.api_getCurrentTime(),b.dispatchEvent("timeupdate"),setTimeout(a,10))},h=function(){return c.api_getVolume()===0},k=function(){var a=h(),d=c.api_getVolume();i!==a&&(i=a,b.dispatchEvent("volumechange")),j!==d&&(j=d,b.dispatchEvent("volumechange")),setTimeout(k,250)};b.play=function(){b.paused=!1,b.dispatchEvent("play"),b.dispatchEvent("playing"),a(),c.api_play()},b.pause=function(){b.paused||(b.paused=!0,b.dispatchEvent("pause"),c.api_pause())},Popcorn.player.defineProperty(b,"currentTime",{set:function(a){return a?(e=f=+a,g=!0,b.dispatchEvent("seeked"),b.dispatchEvent("timeupdate"),c.api_seekTo(e),e):e},get:function(){return e}}),Popcorn.player.defineProperty(b,"muted",{set:function(a){h()!==a&&(a?(p=c.api_getVolume(),c.api_setVolume(0)):c.api_setVolume(p))},get:function(){return h()}}),Popcorn.player.defineProperty(b,"volume",{set:function(a){return!a||typeof a!="number"||a<0||a>1?c.api_getVolume()/100:(c.api_getVolume()!==a&&(c.api_setVolume(a*100),j=c.api_getVolume(),b.dispatchEvent("volumechange")),c.api_getVolume()/100)},get:function(){return c.api_getVolume()/100}}),b.readyState=4,b.dispatchEvent("canplaythrough"),b.dispatchEvent("load"),b.duration=c.api_getDuration(),b.dispatchEvent("durationchange"),k(),b.dispatchEvent("loadeddata")};if(!(o=r(o)))throw"Invalid Video Id";h={clip_id:o,js_api:1,js_swf_id:d.id},Popcorn.extend(h,a),m={allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"},swfobject.embedSWF("//vimeo.com/moogaloop.swf",d.id,l,k,"9.0.0","expressInstall.swf",h,m,n)};window.swfobject?m():Popcorn.getScript("//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",m)}})}();var onYouTubePlayerReady=function(a){onYouTubePlayerReady[a]&&onYouTubePlayerReady[a]()};onYouTubePlayerReady.stateChangeEventHandler={},onYouTubePlayerReady.onErrorEventHandler={},Popcorn.player("youtube",{_setup:function(a){var b=this,c,d=document.createElement("div"),e=0,f=0,g=!1,h=!1,i=!1,j=100;d.id=b.id+Popcorn.guid(),b.appendChild(d);var k=function(){var h,k,l,m,n,o,p;onYouTubePlayerReady[d.id]=function(){c=document.getElementById(d.id),onYouTubePlayerReady.stateChangeEventHandler[d.id]=function(a){if(a===1)b.paused&&b.play();else if(a===2){if(g&&f===e&&f!==c.getCurrentTime()){g=!1,c.seekTo(e);return}e=c.getCurrentTime(),b.dispatchEvent("timeupdate"),!b.paused&&b.pause()}},onYouTubePlayerReady.onErrorEventHandler[d.id]=function(a){[2,100,101,150].indexOf(a)!==-1&&b.dispatchEvent("error")},c.addEventListener("onStateChange","onYouTubePlayerReady.stateChangeEventHandler."+d.id),c.addEventListener("onError","onYouTubePlayerReady.onErrorEventHandler."+d.id);var a=function(){b.paused||(e=c.getCurrentTime(),b.dispatchEvent("timeupdate"),setTimeout(a,10))},h=function(){i!==c.isMuted()&&(i=c.isMuted(),b.dispatchEvent("volumechange")),j!==c.getVolume()&&(j=c.getVolume(),b.dispatchEvent("volumechange")),setTimeout(h,250)};b.play=function(){b.paused=!1,b.dispatchEvent("play"),b.dispatchEvent("playing"),a(),c.playVideo()},b.pause=function(){b.paused||(b.paused=!0,b.dispatchEvent("pause"),c.pauseVideo())},Popcorn.player.defineProperty(b,"currentTime",{set:function(a){return e=f=+a,g=!0,b.dispatchEvent("seeked"),b.dispatchEvent("timeupdate"),c.seekTo(e),e},get:function(){return e}}),Popcorn.player.defineProperty(b,"muted",{set:function(a){return c.isMuted()!==a&&(a?c.mute():c.unMute(),i=c.isMuted(),b.dispatchEvent("volumechange")),c.isMuted()},get:function(){return c.isMuted()}}),Popcorn.player.defineProperty(b,"volume",{set:function(a){return c.getVolume()/100!==a&&(c.setVolume(a*100),j=c.getVolume(),b.dispatchEvent("volumechange")),c.getVolume()/100},get:function(){return c.getVolume()/100}}),b.readyState=4,b.dispatchEvent("canplaythrough"),b.dispatchEvent("load"),b.duration=c.getDuration(),b.dispatchEvent("durationchange"),h(),b.dispatchEvent("loadeddata")},a.controls=+a.controls===0||+a.controls===1?a.controls:1,a.annotations=+a.annotations===1||+a.annotations===3?a.annotations:1,h={playerapiid:d.id},k={wmode:"transparent",allowScriptAccess:"always"},l={id:d.id},m=/^.*(?:\/|v=)(.{11})/.exec(b.src)[1],p=(b.src.split("?")[1]||"").replace(/v=.{11}/,""),n=b.style.width?""+b.offsetWidth:"560",o=b.style.height?""+b.offsetHeight:"315",swfobject.embedSWF("//www.youtube.com/e/"+m+"?"+p+"&enablejsapi=1&playerapiid="+d.id+"&version=3",d.id,n,o,"8",null,h,k,l)};window.swfobject?k():Popcorn.getScript("//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",k)}}),function(a){a.parser("parseJSON","JSON",function(b){var c={title:"",remote:"",data:[]},d={},e=b;return a.forEach(e.data,function(a,b){c.data.push(a)}),c})}(Popcorn),function(a){a.parser("parseSBV",function(a){var b={title:"",remote:"",data:[]},c=[],d,e=0,f=0,g=0,h=function(a){var b=a.split(":"),c=b.length-1,d;try{d=parseInt(b[c-1],10)*60+parseFloat(b[c],10),c===2&&(d+=parseInt(b[0],10)*3600)}catch(e){throw"Bad cue"}return d},i=function(a,b){var c={};return c[a]=b,c};d=a.text.split(/(?:\r\n|\r|\n)/gm),f=d.length;while(e<f){var j={},k=[],l=d[e++].split(",");try{j.start=h(l[0]),j.end=h(l[1]);while(e<f&&d[e])k.push(d[e++]);j.text=k.join("<br />"),c.push(i("subtitle",j))}catch(m){while(e<f&&d[e])e++}while(e<f&&!d[e])e++}return b.data=c,b})}(Popcorn),function(a){a.plugin("code",function(b){var c=!1,d=function(){var a=function(a){return function(b,d){var e=function(){c&&b(),c&&a(e)};e()}};return window.webkitRequestAnimationFrame?a(window.webkitRequestAnimationFrame):window.mozRequestAnimationFrame?a(window.mozRequestAnimationFrame):a(function(a){window.setTimeout(a,16)})}();if(!b.onStart||typeof b.onStart!="function"){if(a.plugin.debug)throw new Error("Popcorn Code Plugin Error: onStart must be a function.");b.onStart=a.nop}if(b.onEnd&&typeof b.onEnd!="function"){if(a.plugin.debug)throw new Error("Popcorn Code Plugin Error: onEnd  must be a function.");b.onEnd=undefined}if(b.onFrame&&typeof b.onFrame!="function"){if(a.plugin.debug)throw new Error("Popcorn Code Plugin Error: onFrame  must be a function.");b.onFrame=undefined}return{start:function(a,b){b.onStart(b),b.onFrame&&(c=!0,d(b.onFrame,b))},end:function(a,b){b.onFrame&&(c=!1),b.onEnd&&b.onEnd(b)}}},{about:{name:"Popcorn Code Plugin",version:"0.1",author:"David Humphrey (@humphd)",website:"http://vocamus.net/dave"},options:{start:{elem:"input",type:"text",label:"In"},end:{elem:"input",type:"text",label:"Out"},onStart:{elem:"input",type:"function",label:"onStart"},onFrame:{elem:"input",type:"function",label:"onFrame"},onEnd:{elem:"input",type:"function",label:"onEnd"}}})}(Popcorn),document.addEventListener("click",function(a){var b=a.target;(b.nodeName==="A"||b.parentNode&&b.parentNode.nodeName==="A")&&Popcorn.instances.forEach(function(a){a.options.pauseOnLinkClicked&&a.pause()})},!1),function(a){var b=0,c=function(b,c){var d=b.container=document.createElement("div"),e=d.style,f=b.media,g=function(){var a=b.position();e.fontSize="18px",e.width=f.offsetWidth+"px",e.top=a.top+f.offsetHeight-d.offsetHeight-40+"px",e.left=a.left+"px",setTimeout(g,10)};return d.id=c||a.guid(),e.position="absolute",e.color="white",e.textShadow="black 2px 2px 6px",e.fontWeight="bold",e.textAlign="center",g(),b.media.parentNode.appendChild(d),d};a.plugin("subtitle",{manifest:{about:{name:"Popcorn Subtitle Plugin",version:"0.1",author:"Scott Downe",website:"http://scottdowne.wordpress.com/"},options:{start:{elem:"input",type:"text",label:"In"},end:{elem:"input",type:"text",label:"Out"},target:"subtitle-container",text:{elem:"input",type:"text",label:"Text"}}},_setup:function(a){var d=document.createElement("div");d.id="subtitle-"+b++,d.style.display="none",!this.container&&(!a.target||a.target==="subtitle-container")&&c(this),a.target&&a.target!=="subtitle-container"?a.container=document.getElementById(a.target)||c(this,a.target):a.container=this.container,document.getElementById(a.container.id)&&document.getElementById(a.container.id).appendChild(d),a.innerContainer=d,a.showSubtitle=function(){a.innerContainer.innerHTML=a.text||""}},start:function(a,b){b.innerContainer.style.display="inline",b.showSubtitle(b,b.text)},end:function(a,b){b.innerContainer.style.display="none",b.innerContainer.innerHTML=""},_teardown:function(a){a.container.removeChild(a.innerContainer)}})}(Popcorn),function(a){var b=1;a.plugin("timeline",function(c){var d=document.getElementById(c.target),e=document.createElement("div"),f,g=!0;d&&!d.firstChild?(d.appendChild(f=document.createElement("div")),f.style.width="inherit",f.style.height="inherit",f.style.overflow="auto"):f=d.firstChild,e.style.display="none",e.id="timelineDiv"+b,c.direction=c.direction||"up",c.direction.toLowerCase()==="down"&&(g=!1);if(d&&f)g?f.insertBefore(e,f.firstChild):f.appendChild(e);else if(a.plugin.debug)throw new Error("target container doesn't exist");return b++,e.innerHTML="<p><span id='big' style='font-size:24px; line-height: 130%;' >"+c.title+"</span><br />"+"<span id='mid' style='font-size: 16px;'>"+c.text+"</span><br />"+c.innerHTML,{start:function(a,b){e.style.display="block",b.direction==="down"&&(f.scrollTop=f.scrollHeight)},end:function(a,b){e.style.display="none"},_teardown:function(a){f&&e&&f.removeChild(e)&&!f.firstChild&&d.removeChild(f)}}},{about:{name:"Popcorn Timeline Plugin",version:"0.1",author:"David Seifried @dcseifried",website:"dseifried.wordpress.com"},options:{start:{elem:"input",type:"text",label:"In"},end:{elem:"input",type:"text",label:"Out"},target:"feed-container",title:{elem:"input",type:"text",label:"title"},text:{elem:"input",type:"text",label:"text"},innerHTML:{elem:"input",type:"text",label:"innerHTML"},direction:{elem:"input",type:"text",label:"direction"}}})}(Popcorn)