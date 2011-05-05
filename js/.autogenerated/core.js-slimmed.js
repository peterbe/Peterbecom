function addEvent(obj,type,fn){if( obj.attachEvent ){obj["e"+type+fn] = fn;obj[type+fn] = function(){obj["e"+type+fn]( window.event );}
obj.attachEvent( "on"+type, obj[type+fn] );} else
obj.addEventListener(type,fn,false);}
function removeEvent(obj,type,fn){if( obj.detachEvent ){obj.detachEvent( "on"+type, obj[type+fn] );obj[type+fn] = null;} else
obj.removeEventListener(type,fn,false);}
function $(){var elements=new Array();for(var i=0;i < arguments.length;i++){var element=arguments[i];if(typeof element == 'string')
element=document.getElementById(element);if(arguments.length==1) 
return element;elements.push(element);}
return elements;}
function econvert(s){return s.replace(/%7E/g,'~').replace(/%28/g,'(').replace(/%29/g,')').replace(/%20/g,' ')
.replace(/_dot_|_dot | dot_| dot |_\._|\(\.\)/gi, '.').replace(/_at_|_@_|~at~/gi, '@');}
function AEHit(){var sp=document.getElementsByTagName("span");for(i=0;i< sp.length;i++)if(sp[i].className=="aeh") 
sp[i].innerHTML=econvert(sp[i].innerHTML);}
addEvent(window, 'load', AEHit);function getCookieVal (offset){var endstr=document.cookie.indexOf (";", offset);if(endstr==-1)
endstr=document.cookie.length;return unescape(document.cookie.substring(offset,endstr));}
function FixCookieDate (date){var base=new Date(0);var skew=base.getTime();if(skew > 0)
date.setTime (date.getTime() - skew);}
function GetCookie (name){var arg=name + "=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i < clen){var j=i + alen;if(document.cookie.substring(i,j) == arg)
return getCookieVal (j);i=document.cookie.indexOf(" ", i) + 1;if(i==0) break;}
return null;}
function SetCookie (name,value,expires,path,domain,secure){document.cookie=name + "=" + escape (value) +
((expires) ? ";expires=" + expires.toGMTString() : "") +
((path) ? ";path=" + path : "") +
((domain) ? ";domain=" + domain : "") +
((secure) ? ";secure" : "");}
function DeleteCookie (name,path,domain) {if(GetCookie(name)){document.cookie=name + "=" +
((path) ? ";path=" + path : "") +
((domain) ? ";domain=" + domain : "") +
";expires=Thu, 01-Jan-70 00:00:01 GMT";}}
function show(id){$(id).style['display']='';if($(id).className.indexOf('hidden')>-1)
$(id).className = $(id).className.replace('hidden','');}
function hide(id){$(id).style['display']='none';}