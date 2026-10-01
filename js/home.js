!function(e){var o={};function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,o,n){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o,n){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)r.d(n,t,function(o){return e[o]}.bind(null,t));return n},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=9)}({

10:function(e,o,r){},

17:function(e,o,r){
"use strict";
r.r(o);

var n={
    init:{
        init(){

            gsap.from(".container-home-1 .block-1",{
                opacity:0,
                y:30,
                duration:1.4,
                ease:"power1.inOut"
            }),

            gsap.from(".container-home-1 .block-2",{
                opacity:0,
                x:30,
                duration:1.4,
                ease:"power1.inOut"
            }),

            gsap.from(".container-home-2",{
                scrollTrigger:".container-home-2",
                opacity:0,
                x:100,
                duration:1.4,
                ease:"power1.inOut"
            }),

            gsap.from(".container-home-3",{
                scrollTrigger:".container-home-3",
                opacity:0,
                y:30,
                duration:1.4,
                ease:"sine.inOut"
            }),

            gsap.from(".container-home-3 .rectangle-desktop",{
                scrollTrigger:".container-home-3 .rectangle-desktop",
                opacity:0,
                x:50,
                duration:1.4,
                ease:"sine.inOut"
            }),

            gsap.from(".container-home-3 .block-1",{
                scrollTrigger:".container-home-3 .block-1",
                opacity:0,
                x:50,
                duration:1.4,
                ease:"power1.inOut"
            }),

            gsap.from(".container-home-3 .block-2",{
                scrollTrigger:".container-home-3 .block-2",
                opacity:0,
                y:50,
                duration:1.4,
                ease:"power1.inOut"
            }),

            gsap.from(".container-home-4",{
                scrollTrigger:".container-home-4",
                opacity:0,
                y:20,
                duration:1.4,
                ease:"sine.inOut"
            }),

            gsap.from(".container-home-4 .block",{
                scrollTrigger:".container-home-4 .block",
                opacity:0,
                y:30,
                duration:1.6,
                ease:"sine.inOut"
            }),

            gsap.from(".container-home-5",{
                scrollTrigger:".container-home-5",
                opacity:0,
                y:30,
                duration:1.6,
                ease:"sine.inOut"
            }),

            gsap.from(".container-home-5 .block-1",{
                scrollTrigger:".container-home-5 .block-1",
                opacity:1,
                x:50,
                ease:"power1.inOut",
                duration:1.6
            }),

            gsap.from(".container-home-5 .block-2-desktop",{
                scrollTrigger:".container-home-5 .block-2-desktop",
                opacity:1,
                y:50,
                ease:"power1.inOut",
                duration:1.6
            }),

            gsap.from(".container-home-6",{
                scrollTrigger:".container-home-6",
                opacity:0,
                x:100,
                duration:1.4,
                ease:"sine.inOut"
            }),

            gsap.from(".container-home-7",{
                scrollTrigger:".container-home-7",
                opacity:0,
                y:50,
                duration:1.6,
                ease:"sine.inOut"
            })
        }
    }
}.init;


/* ==========================================
   INICIALIZAÇÃO MAIS SEGURA DA HOME
   ========================================== */

var t=async()=>{

    /* Evita que as animações sejam inicializadas duas vezes */
    if(window.__RG_HOME_INITIALIZED)return;

    /* Verifica se o GSAP foi carregado */
    if(typeof gsap==="undefined"){
        console.error("GSAP não foi carregado.");
        return;
    }

    /* Verifica se o ScrollTrigger foi carregado */
    if(typeof ScrollTrigger==="undefined"){
        console.error("ScrollTrigger não foi carregado.");
        return;
    }

    /* Marca a Home como inicializada */
    window.__RG_HOME_INITIALIZED=true;

    /* Garante que o plugin esteja registrado */
    gsap.registerPlugin(ScrollTrigger);

    /*
     * Aguarda as imagens da página.
     *
     * Isso ajuda a garantir que o tamanho real dos elementos
     * esteja definido antes do cálculo dos ScrollTriggers.
     */
    var e=Array.from(document.images);

    await Promise.all(
        e.map(e=>{
            if(e.complete)return Promise.resolve();

            return new Promise(o=>{
                e.addEventListener("load",o,{once:true});
                e.addEventListener("error",o,{once:true});
            });
        })
    );

    /*
     * Executa as animações originais.
     */
    n.init();

    /*
     * Dá ao navegador dois frames para terminar de atualizar
     * o layout antes de recalcular os ScrollTriggers.
     */
    requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
            ScrollTrigger.refresh(true);
        });
    });
};


/* ==========================================
   INICIALIZAÇÃO NORMAL
   ========================================== */

document.addEventListener("DOMContentLoaded",t);


/* ==========================================
   RETORNO PELO CACHE DO NAVEGADOR
   ========================================== */

window.addEventListener("pageshow",()=>{
    if(typeof ScrollTrigger!=="undefined"){

        requestAnimationFrame(()=>{
            ScrollTrigger.refresh(true);
        });

    }
});


},
9:function(e,o,r){
    r(17),
    e.exports=r(10)
}});
