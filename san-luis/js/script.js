!function ( n ) {
    function e( a ) {
        if ( t[a] )return t[a].exports;
        var r = t[a] = { i: a, l: !1, exports: {} };
        return n[a].call( r.exports, r, r.exports, e ), r.l = !0, r.exports
    }

    var t = {};
    e.m = n, e.c = t, e.i = function ( n ) {
        return n
    }, e.d = function ( n, t, a ) {
        e.o( n, t ) || Object.defineProperty( n, t, { configurable: !1, enumerable: !0, get: a } )
    }, e.n = function ( n ) {
        var t = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return e.d( t, "a", t ), t
    }, e.o = function ( n, e ) {
        return Object.prototype.hasOwnProperty.call( n, e )
    }, e.p = "", e( e.s = 0 )
}( [function ( n, e, t ) {
    "use strict";
    function a( n, e ) {
        if ( !(n instanceof e) )throw new TypeError( "Cannot call a class as a function" )
    }

    var r = function () {
        function n( n, e ) {
            for ( var t = 0; t < e.length; t++ ) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty( n, a.key, a )
            }
        }

        return function ( e, t, a ) {
            return t && n( e.prototype, t ), a && n( e, a ), e
        }
    }();
    new (function () {
        function n() {
            a( this, n ), this.buildSlick()
        }

        return r( n, [{
            key: "getJson", value: function ( n ) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                }, t = new XMLHttpRequest;
                t.onload = function () {
                    e( t )
                }, t.open( "GET", n, !0 ), t.send()
            }
        }, {
            key: "buildSlick", value: function () {
                this.getJson( "http://archivo.elcomercio.pe/xalokjson/destacadasanluis?last=" + Date.now(), function ( n ) {
                    var e = JSON.parse( n.response );
                    let t =  `<article class="flow">
                                <div class="flow-detail">
                                    <div class="flow-data">
                                        <h3 class="flow-category">
                                            <a href="${e.url.concat( "?utm_source=elcomercio&utm_medium=Widget-SANLUIS&utm_campaign=LA-BUENA-IDEA-DE-LA-SEMANA" )}" target="_blank">
                                                <span> La Buena Idea de la semana </span>
                                            </a>
                                        </h3>
                                    </div> 
                                    <h2 class="flow-title">
                                        <a href="${e.url.concat( "?utm_source=elcomercio&utm_medium=Widget-SANLUIS&utm_campaign=LA-BUENA-IDEA-DE-LA-SEMANA" )}" target="_blank">${e.titulo}</a>
                                    </h2>
                                    <span class="flow-author">
                                        <a href="https://www.facebook.com/sanluisperu/" target="_blank">
                                            Patrocinado por SAN LUIS
                                        </a>
                                    </span>
                                </div>
                                <figure class="flow-image">
                                    <a href="${e.url.concat( "?utm_source=elcomercio&utm_medium=Widget-SANLUIS&utm_campaign=LA-BUENA-IDEA-DE-LA-SEMANA" )}" target="_blank" class="flow-image-link">
                                        <picture>
                                            <img src="${e.imagen}" alt="${e.bajada}">
                                        </picture>
                                    </a>
                                </figure>
                            </article>`;
                    document.getElementsByClassName( "flow-sanluis" )[0].innerHTML = t
                } )
            }
        }] ), n
    }())
}] );