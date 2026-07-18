// =========================
// CARGA DE LA PÁGINA
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2500);

});

// =========================
// MÚSICA
// =========================

const musica = document.getElementById("musica");

const boton = document.getElementById("start");

boton.addEventListener("click", () => {

    musica.play().catch(() => {});

});

// =========================
// CONTADOR
// =========================

const tiempo = document.getElementById("tiempo");

const fechaInicio = new Date("2025-05-18T00:00:00");

function actualizarContador(){

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);

    const horas = Math.floor((diferencia / 1000 / 60 / 60) % 24);

    const minutos = Math.floor((diferencia / 1000 / 60) % 60);

    tiempo.innerHTML = `
    ❤️ ${dias} días <br>
    ${horas} horas <br>
    ${minutos} minutos
    `;

}

actualizarContador();

setInterval(actualizarContador,60000);

// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll(".item,.card,.imagenes img").forEach(el=>{

    el.classList.add("oculto");

});

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

document.querySelectorAll(".oculto").forEach(el=>{

observer.observe(el);

});
// =========================
// CORAZONES FLOTANDO
// =========================

function crearCorazon(){

const corazon=document.createElement("div");

corazon.className="heart";

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

corazon.style.fontSize=(18+Math.random()*28)+"px";

corazon.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},10000);

}

setInterval(crearCorazon,350);

// =========================
// ESTRELLAS
// =========================

for(let i=0;i<180;i++){

const estrella=document.createElement("div");

estrella.className="star";

estrella.style.left=Math.random()*100+"vw";

estrella.style.top=Math.random()*100+"vh";

estrella.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(estrella);

}

// =========================
// LIRIOS
// =========================

const lirios=["🌸","🤍","🌺"];

function crearLirio(){

const flor=document.createElement("div");

flor.innerHTML=lirios[Math.floor(Math.random()*lirios.length)];

flor.style.position="fixed";

flor.style.top="-40px";

flor.style.left=Math.random()*100+"vw";

flor.style.fontSize=(18+Math.random()*18)+"px";

flor.style.pointerEvents="none";

flor.style.zIndex="2";

flor.style.transition="8s linear";

document.body.appendChild(flor);

setTimeout(()=>{

flor.style.transform="translateY(120vh) rotate(720deg)";

flor.style.opacity="0";

},100);

setTimeout(()=>{

flor.remove();

},8200);

}

setInterval(crearLirio,2500);

// =========================
// GALERÍA
// =========================

const fotos=document.querySelectorAll(".imagenes img");

fotos.forEach(img=>{

img.onclick=()=>{

const fondo=document.createElement("div");

fondo.style.position="fixed";

fondo.style.inset="0";

fondo.style.background="rgba(0,0,0,.9)";

fondo.style.display="flex";

fondo.style.justifyContent="center";

fondo.style.alignItems="center";

fondo.style.zIndex="99999";

const imagen=document.createElement("img");

imagen.src=img.src;

imagen.style.maxWidth="90%";

imagen.style.maxHeight="90%";

imagen.style.borderRadius="20px";

imagen.style.boxShadow="0 0 50px rgba(255,255,255,.3)";

fondo.appendChild(imagen);

fondo.onclick=()=>{

fondo.remove();

};

document.body.appendChild(fondo);

};

});

// =========================
// BOTÓN SECRETO
// =========================

const secreto=document.getElementById("secreto");

const caja=document.getElementById("caja");

secreto.onclick=()=>{

if(caja.style.display==="block"){

caja.style.display="none";

}else{

caja.style.display="block";

caja.scrollIntoView({

behavior:"smooth"

});

}

};
// ======================================
// MENSAJES ROMÁNTICOS
// ======================================

const mensajes = [

"❤️ Gracias por aparecer en mi vida.",

"🌸 Contigo descubrí lo que es amar.",

"🥹 Eres mi lugar favorito.",

"💖 Este pechito siempre será tuyo.",

"✨ Nada ni nadie nos va a separar.",

"🌅 Quiero todos mis atardeceres contigo.",

"❤️ Te volvería a elegir mil veces."

];

function mostrarMensaje(){

const caja=document.createElement("div");

caja.innerHTML=mensajes[Math.floor(Math.random()*mensajes.length)];

caja.style.position="fixed";

caja.style.bottom="25px";

caja.style.left="50%";

caja.style.transform="translateX(-50%)";

caja.style.padding="18px 28px";

caja.style.borderRadius="40px";

caja.style.background="rgba(255,255,255,.15)";

caja.style.backdropFilter="blur(15px)";

caja.style.color="white";

caja.style.fontSize="18px";

caja.style.zIndex="9999";

caja.style.opacity="0";

caja.style.transition=".8s";

document.body.appendChild(caja);

setTimeout(()=>{

caja.style.opacity="1";

},100);

setTimeout(()=>{

caja.style.opacity="0";

setTimeout(()=>{

caja.remove();

},1000);

},4500);

}

setInterval(mostrarMensaje,18000);

// ======================================
// EFECTO FINAL
// ======================================

window.addEventListener("scroll",()=>{

const porcentaje=(window.scrollY+window.innerHeight)/document.body.scrollHeight;

if(porcentaje>0.95){

document.body.style.transition="2s";

document.body.style.boxShadow="inset 0 0 300px rgba(255,120,180,.35)";

}

});

// ======================================
// CONFETI
// ======================================

function lanzarConfeti(){

for(let i=0;i<120;i++){

const papel=document.createElement("div");

papel.innerHTML=["🎉","✨","💖","❤️","🌸"][Math.floor(Math.random()*5)];

papel.style.position="fixed";

papel.style.left=Math.random()*100+"vw";

papel.style.top="-20px";

papel.style.fontSize=(14+Math.random()*18)+"px";

papel.style.pointerEvents="none";

papel.style.transition=(4+Math.random()*3)+"s linear";

papel.style.zIndex="99999";

document.body.appendChild(papel);

setTimeout(()=>{

papel.style.transform=`translateY(${window.innerHeight+100}px) rotate(${720+Math.random()*720}deg)`;

papel.style.opacity="0";

},50);

setTimeout(()=>{

papel.remove();

},7000);

}

}

setTimeout(lanzarConfeti,5000);

// ======================================
// MENSAJE FINAL
// ======================================

setTimeout(()=>{

const ultimo=document.createElement("div");

ultimo.style.position="fixed";

ultimo.style.inset="0";

ultimo.style.background="rgba(0,0,0,.85)";

ultimo.style.display="flex";

ultimo.style.justifyContent="center";

ultimo.style.alignItems="center";

ultimo.style.flexDirection="column";

ultimo.style.textAlign="center";

ultimo.style.color="white";

ultimo.style.zIndex="999999";

ultimo.style.opacity="0";

ultimo.style.transition="2s";

ultimo.innerHTML=`

<h1 style="font-size:70px;font-family:'Great Vibes',cursive;">
❤️ Mochita ❤️
</h1>

<p style="font-size:28px;line-height:2;margin-top:25px;max-width:700px;padding:20px;">

Eres mi novia.<br>
Mi mejor amiga.<br>
Mi amante.<br>
Mi mujer.<br><br>

Y pase lo que pase...

<br><br>

❤️ Nada ni nadie nos va a separar. ❤️

</p>

`;

document.body.appendChild(ultimo);

setTimeout(()=>{

ultimo.style.opacity="1";

},100);

},180000);