(self.webpackChunkbook_reader_front_end=self.webpackChunkbook_reader_front_end||[]).push([[739],{5264:function(t,e,o){var i,n;n="undefined"!==typeof o.g?o.g:"undefined"!==typeof window?window:this,i=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var e,o="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c "+o+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+i)},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},f=function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}},c=function t(){var e={},o=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=t(e[n],i[n]):e[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return e},m=function(e){var o=t.document.createElement("div");return o.innerHTML=e,o.textContent||o.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,u=function(o,i,s,f){if(!l("body"))return!1;e||y.Notify.init({});var p=c(!0,e,{});if("object"===typeof s&&!Array.isArray(s)||"object"===typeof f&&!Array.isArray(f)){var u={};"object"===typeof s?u=s:"object"===typeof f&&(u=f),e=c(!0,e,u)}var x=e[o.toLocaleLowerCase("en")];d++,"string"!==typeof i&&(i="Notiflix "+o),e.plainText&&(i=m(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(x.fontAwesomeIconColor=x.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(b.id=r.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var h=t.document.getElementById(r.overlayID)||t.document.createElement("div");h.id=r.overlayID,h.style.width="100%",h.style.height="100%",h.style.position="fixed",h.style.zIndex=e.zindex-1,h.style.left=0,h.style.top=0,h.style.right=0,h.style.bottom=0,h.style.background=x.backOverlayColor||e.backOverlayColor,h.className=e.cssAnimation?"nx-with-animation":"",h.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(h)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(b);var g=t.document.createElement("div");g.id=e.ID+"-"+d,g.className=e.className+" "+x.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!==typeof s?"nx-with-close-button":"")+" "+("function"===typeof s?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),g.style.fontSize=e.fontSize,g.style.color=x.textColor,g.style.background=x.background,g.style.borderRadius=e.borderRadius,g.style.pointerEvents="all",e.rtl&&(g.setAttribute("dir","rtl"),g.classList.add("nx-rtl-on")),g.style.fontFamily='"'+e.fontFamily+'", '+n,e.cssAnimation&&(g.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!==typeof s&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+x.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)g.innerHTML='<i style="color:'+x.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+x.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var w="";o===a.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===a.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===a.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===a.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+x.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),g.innerHTML=w+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else g.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var k=t.document.getElementById(r.wrapID);k.insertBefore(g,k.firstChild)}else t.document.getElementById(r.wrapID).appendChild(g);var N=t.document.getElementById(g.id);if(N){var I,C,S=function(){N.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},z=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};if(e.closeButton&&"function"!==typeof s&&t.document.getElementById(g.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var t=setTimeout((function(){z(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"===typeof s||e.clickToClose)&&N.addEventListener("click",(function(){"function"===typeof s&&s(),S();var t=setTimeout((function(){z(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!==typeof s){var A=function(){I=setTimeout((function(){S()}),e.timeout),C=setTimeout((function(){z()}),e.timeout+e.cssAnimationDuration)};A(),e.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(I),clearTimeout(C)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),A()})))}}if(e.showOnlyTheLastOne&&d>0)for(var W=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+d+"])"),T=0;T<W.length;T++){var O=W[T];null!==O.parentNode&&O.parentNode.removeChild(O)}e=c(!0,e,p)},y={Notify:{init:function(t){e=c(!0,r,t),f(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,o){u(a.Success,t,e,o)},failure:function(t,e,o){u(a.Failure,t,e,o)},warning:function(t,e,o){u(a.Warning,t,e,o)},info:function(t,e,o){u(a.Info,t,e,o)}}};return"object"===typeof t.Notiflix?c(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}}(n)}.apply(e,[]),void 0===i||(t.exports=i)},888:function(t,e,o){"use strict";var i=o(9047);function n(){}function a(){}a.resetWarningCache=n,t.exports=function(){function t(t,e,o,n,a,r){if(r!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:n};return o.PropTypes=o,o}},2007:function(t,e,o){t.exports=o(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2198:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(l){n=!0,a=l}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};e.default=function(t){var e=(0,n.useState)(t.count),o=i(e,2),a=o[0],r=o[1],s=(0,n.useState)(t.size),l=i(s,2),f=l[0],c=l[1],m=(0,n.useState)(t.char),p=i(m,2),d=p[0],u=p[1],y=(0,n.useState)(t.color),x=i(y,2),b=x[0],h=x[1],g=(0,n.useState)(t.activeColor),v=i(g,2),w=v[0],k=v[1],N=(0,n.useState)(t.isHalf),I=i(N,2),C=I[0],S=I[1],z=(0,n.useState)(t.edit),A=i(z,2),W=A[0],T=A[1],O=(0,n.useState)(t.emptyIcon),E=i(O,2),M=E[0],L=E[1],D=(0,n.useState)(t.halfIcon),B=i(D,2),H=B[0],_=B[1],j=(0,n.useState)(t.filledIcon),F=i(j,2),P=F[0],R=F[1],U=(0,n.useState)(t.a11y),q=i(U,2),Q=q[0],V=q[1];return[{count:a,size:f,char:d,color:b,activeColor:w,isHalf:C,edit:W,emptyIcon:M,halfIcon:H,filledIcon:P,a11y:Q},function(t){r(t.count),c(t.size),u(t.char),h(t.color),k(t.activeColor),S(t.isHalf),T(t.edit),L(t.emptyIcon),_(t.halfIcon),R(t.filledIcon),V(t.a11y)}]};var n=o(2791)},5112:function(t,e,o){"use strict";var i=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(l){n=!0,a=l}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=o(2791),a=f(n),r=f(o(2007)),s=f(o(2198)),l=f(o(9059));function f(t){return t&&t.__esModule?t:{default:t}}var c={overflow:"hidden",position:"relative"};function m(t,e){return"\n    .react-stars-"+e+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+t+";\n  }"}function p(t){var e=(0,n.useState)(""),o=i(e,2),r=o[0],f=o[1],p=(0,n.useState)(0),d=i(p,2),u=d[0],y=d[1],x=(0,n.useState)([]),b=i(x,2),h=b[0],g=b[1],v=(0,n.useState)(!1),w=i(v,2),k=w[0],N=w[1],I=(0,s.default)(t),C=i(I,2),S=C[0],z=C[1],A=(0,n.useState)(0),W=i(A,2),T=W[0],O=W[1],E=(0,n.useState)(!1),M=i(E,2),L=M[0],D=M[1],B=(0,n.useState)(""),H=i(B,2),_=H[0],j=H[1];function F(t){"undefined"===typeof t&&(t=S.isHalf?Math.floor(u):Math.round(u));for(var e=[],o=0;o<S.count;o++)e.push({active:o<=t-1});return e}function P(t){if(S.edit){var e=Number(t.currentTarget.getAttribute("data-index"));if(S.isHalf){var o=R(t);D(o),o&&(e+=1),O(e)}else e+=1;!function(t){var e=h.filter((function(t){return t.active}));t!==e.length&&g(F(t))}(e)}}function R(t){var e=t.target.getBoundingClientRect(),o=t.clientX-e.left;return(o=Math.round(Math.abs(o)))>e.width/2}function U(){S.edit&&(q(u),g(F()))}function q(t){S.isHalf&&(D(function(t){return t%1===0}(t)),O(Math.floor(t)))}function Q(t){if(S.edit){var e=Number(t.currentTarget.getAttribute("data-index")),o=void 0;if(S.isHalf){var i=R(t);D(i),i&&(e+=1),o=i?e:e+.5,O(e)}else o=e+=1;V(o)}}function V(e){e!==u&&(g(F(e)),y(e),t.onChange(e))}return(0,n.useEffect)((function(){var e,o;!function(){var e="react-stars";j(t.classNames+" "+e)}(),e=t.value,o=t.count,y(e<0||e>o?0:e),g(F(t.value)),z(t),f((Math.random()+"").replace(".","")),N(function(t){return!t.isHalf&&t.emptyIcon&&t.filledIcon||t.isHalf&&t.emptyIcon&&t.halfIcon&&t.filledIcon}(t)),O(Math.floor(t.value)),D(t.isHalf&&t.value%1<.5)}),[]),a.default.createElement("div",{className:"react-stars-wrapper-"+r,style:{display:"flex"}},a.default.createElement("div",{tabIndex:S.a11y&&S.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(t){if(S.a11y||S.edit){var e=t.key,o=u,i=Number(e);i?Number.isInteger(i)&&i>0&&i<=S.count&&(o=i):("ArrowUp"===e||"ArrowRight"===e)&&o<S.count?(t.preventDefault(),o+=S.isHalf?.5:1):("ArrowDown"===e||"ArrowLeft"===e)&&o>.5&&(t.preventDefault(),o-=S.isHalf?.5:1),q(o),V(o)}},className:_,style:c},S.isHalf&&function(){return a.default.createElement("style",{dangerouslySetInnerHTML:{__html:k?(t=S.activeColor,"\n          span.react-stars-half > * {\n          color: "+t+";\n      }"):m(S.activeColor,r)}});var t}(),h.map((function(t,e){return a.default.createElement(l.default,{key:e,index:e,active:t.active,config:S,onMouseOver:P,onMouseLeave:U,onClick:Q,halfStarHidden:L,halfStarAt:T,isUsingIcons:k,uniqueness:r})})),a.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},u)))}p.propTypes={classNames:r.default.string,edit:r.default.bool,half:r.default.bool,value:r.default.number,count:r.default.number,char:r.default.string,size:r.default.number,color:r.default.string,activeColor:r.default.string,emptyIcon:r.default.element,halfIcon:r.default.element,filledIcon:r.default.element,a11y:r.default.bool},p.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},e.Z=p},9059:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t};e.default=function(t){var e=t.index,o=t.active,n=t.config,a=t.onMouseOver,l=t.onMouseLeave,f=t.onClick,c=t.halfStarHidden,m=t.halfStarAt,p=t.isUsingIcons,d=t.uniqueness,u=n.color,y=n.activeColor,x=n.size,b=n.char,h=n.isHalf,g=n.edit,v=n.halfIcon,w=n.emptyIcon,k=n.filledIcon,N="",I=!1;h&&!c&&m===e&&(N=p?"react-stars-half":"react-stars-"+d,I=!0);var C=i({},s,{color:o?y:u,cursor:g?"pointer":"default",fontSize:x+"px"});return r.default.createElement("span",{className:N,style:C,key:e,"data-index":e,"data-forhalf":k?e:b,onMouseOver:a,onMouseMove:a,onMouseLeave:l,onClick:f},p?o?k:!o&&I?v:w:b)};var n,a=o(2791),r=(n=a)&&n.__esModule?n:{default:n};var s={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}}}]);
//# sourceMappingURL=739.3dad9d6e.chunk.js.map