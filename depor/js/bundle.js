!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();new(function(){function e(){r(this,e),this.buildSlick()}return a(e,[{key:"getJson",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=new XMLHttpRequest;t.onload=function(){n(t)},t.open("GET",e,!0),t.send()}},{key:"buildSlick",value:function(){this.getJson("http://archivo.elcomercio.pe/xalokjson/destacadafulbiteros?last="+Date.now(),function(e){var n=JSON.parse(e.response),t='<article class="flow">\n                                <figure class="flow-image"><a href="http://depor.com/especial/adidas?utm_source=depor&utm_medium=widget-depor&utm_campaign=especial-adidas" target="_blank" class="flow-image-link">\n                                    <picture>\n                                        <img data-type="src" src="'+n.imagen+'"\n                                             alt="'+n.titulo+'" class="ui-lazy">\n                                    </picture>\n                                </a></figure>\n                                <div class="flow-detail">\n                                    <div class="flow-data">\n                                        <h3 class="flow-category">\n                                            <span>\n                                            <a href="http://depor.com/especial/adidas?utm_source=depor&utm_medium=widget-depor&utm_campaign=especial-adidas" target="_blank"> DEL ESTADIO A LA CALLE </a>\n                                            </span>\n                                        </h3>\n                                    </div>\n                                    <h2 class="flow-title">\n                                        <a href="'+n.url+'" target="_blank">\n                                            '+n.titulo+' \n                                        </a>\n                                    </h2>\n                                    <span class="flow-author">\n                                        <img src="img/adidas-logo-fit.jpg" alt="logo adidas">\n                                    </span>\n                                </div>\n                            </article>';document.getElementsByClassName("suplemento-depor")[0].innerHTML=t})}}]),e}())}])}]);