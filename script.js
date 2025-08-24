// script.js
let ftom = 0, jikapr = 1, ftganti = 0, flag = 1, flagg = 1, fungsi = 0;
let jumlahKlik = 0, sudah = false;
let jumlahSkala = 1;
let txtIsiPesan, intervalHati, audio, pesanwhatsapp;

function showDiv() {
  pesanwhatsapp = "Aku mau kok jadi pacarmu ><";
  Content.style = "opacity:1;margin-top:15vh;";
  ket.style = "margin-top:30px;";
}

function memulai() {
  suratin.style = "transition:all .8s ease;transform:scale(.1);opacity:0";
  ket.style = "transition:all .8s ease;transform:scale(.1);opacity:0";
  setTimeout(mulaikonten, 1000);
}

function mulaikonten() {
  otomatis();
  suratin.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:4vh";
  bodyblur.style = "opacity:.5;animation:none";
  wallpaper.style = "transform: scale(2);opacity:1;";
  fotoakhir.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);border-radius:var(--bingkai);margin-top:0";
  fungsi = 1;
  setTimeout(tombol, 500);
}

function ftmuncul() {
  if (ftganti == 0) {
    fotoakhir.style = "display:inline-flex;opacity:1;transform:scale(1)";
  }
  if (ftganti == 1) {
    fotoakhir.src = fotoakhir2.src;
    fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  if (ftganti == 2) {
    fotoakhir.src = fotoakhir3.src;
    fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
}

function fthilang() {
  fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

function tombol() {
  Tombol.style = "opacity:1;transform: scale(1);";
  Bn.style = "margin:12px 0 12px 12px";
  ftom = 1;
}

function multifungsi() {
  if (ftom == 1) { diterima(); }
  if (ftom == 5) { menuju(); }
}

async function menuju() {
  await swals.fire('OK!', 'Kirim pesan ke WhatsApp aku, ya!', 'success');
  window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
  Tombol.style = "margin-top:15px;opacity:1;transform: scale(1);";
}

setTimeout(showDiv, 100);

const swalst = Swal.mixin({
  timer: 2777, allowOutsideClick: false, showConfirmButton: false,
  timerProgressBar: true, imageHeight: 100,
});
audio = new Audio('' + linkmp3.innerHTML);
const swals = Swal.mixin({
  allowOutsideClick: false, cancelButtonColor: '#FF0040',
  imageWidth: 100, imageHeight: 100,
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = (Math.random() * 90) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}
setInterval(() => {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) { heartArr[0].remove(); }
}, 100);

// Animasi kalimat
function otomatis() { befanimkata(); setTimeout(animkata, 400); }
function befanimkata() {
  kalimat.style = "transform:scale(.3);";
  kalimatb.style = "transform:scale(.3);";
  kalimatc.style = "transform:scale(.3);";
}
function animkata() {
  kalimat.style = "transform:scale(1);";
  kalimatb.style = "transform:scale(1);";
  kalimatc.style = "transform:scale(1);";
}

function otomatis2() { befanimkata2(); setTimeout(animkata2, 400); }
function befanimkata2() {
  kalimat.style.opacity = "0"; kalimatb.style.opacity = "0"; kalimatc.style.opacity = "0";
}
function animkata2() {
  kalimat.innerHTML = kalimat2.innerHTML;
  kalimatb.innerHTML = kalimatb2.innerHTML;
  kalimatc.innerHTML = "";
  kalimat.style.opacity = "1"; kalimatb.style.opacity = "1";
  setTimeout(otomatis2b, 2500);
}
function otomatis2b() {
  kalimatb.innerHTML = "";
  kalimatc.innerHTML = kalimatc2.innerHTML;
  kalimatc.style.opacity = "1";
  setTimeout(mulaict, 400);
}

function otomatis3() { befanimkata3(); setTimeout(animkata3, 400); }
function befanimkata3() {
  kalimat.style.opacity = "0"; kalimatb.style.opacity = "0"; kalimatc.style.opacity = "0";
}
function animkata3() {
  kalimat.innerHTML = kalimat3.innerHTML;
  kalimatb.innerHTML = kalimatb3.innerHTML;
  kalimat.style.opacity = "1"; kalimatb.style.opacity = "1"; kalimatc.innerHTML = "";
  setTimeout(teksnimasi, 1000);
}

txtIsiPesan = kalimatc3.innerHTML;
function teksnimasi() {
  kalimatc.style = "opacity:1;text-align:left;font-size:16.5px";
  new TypeIt("#kalimatc", {
    strings: txtIsiPesan, speed: 30, startDelay: 250,
    afterComplete: function () {
      document.querySelector("#kalimatc .ti-cursor").style.display = "none";
      intervalHati = setInterval(berjatuhan, 200);
      fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(0)";
      setTimeout(() => {
        fotoakhir.src = fotoakhir4.src;
        fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1)";
      }, 300);
    }
  }).go();
}

function sbakhir() { Bn.style.display = "none"; setTimeout(stakhir, 500); }
function stakhir() { tmbl.innerHTML = "💌 Kirim"; Tombol.style = "margin-top:10px;opacity:1;transform: scale(1)"; ftom = 5; fungsi = 0; }

async function diterima() {
  fthilang(); ftganti = 1;
  setTimeout(ftmuncul, 400);
  wallpaper.style = "transform: scale(1)";
  bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;border-radius:var(--bingkai);margin-top:0;";
  Tombol.style = "opacity:0;transition:all .5s ease;transform: scale(.1);";
  otomatis2();
}

function fungsibaru(btn) {
  var tombol = document.getElementById("" + btn);
  var tombolParent = tombol.parentNode;

  var tombolPosisiX = Math.floor(Math.random() * 50) + 1;
  var tombolPosisiY = Math.floor(Math.random() * 75) + 1;
  var rotasiAcak = Math.floor(Math.random() * 360);

  tombol.style.position = "relative";
  tombol.style.left = tombolPosisiX + "px";
  tombol.style.top = tombolPosisiY + "px";
  tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
  tombolParent.appendChild(tombol);

  var tombolBy = document.getElementById("By");
  tombolBy.style.transform = `scale(${1 + jumlahSkala * 0.2})`;

  jumlahKlik++;
  jumlahSkala++;
  if (jumlahKlik == 3) { jumlahKlik = 0; }
}

function mulaict() {
  var timeleft = 5;
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("ctimer").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
    if (timeleft == 0) {
      setInterval(createHeart, 200);
      fthilang(); ftganti = 2;
      setTimeout(ftmuncul, 400); otomatis3();
    }
  }, 1000);
}

/* START Hati Berjatuhan */
function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.4;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
  heart.className = "heart-icon";
  heart.style.left = (Math.random() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}
setInterval(() => {
  var heartArr = document.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) { heartArr[0].remove(); }
}, 100);
/* END Hati Berjatuhan */
jumlahKlik=0; sudah=false; let jumlahSkala=1;
function fungsibaru(btn) {
  var tombol = document.getElementById(btn);
  var tombolParent = tombol.parentNode;

  var tombolPosisiX = Math.floor(Math.random() * 50) + 1;
  var tombolPosisiY = Math.floor(Math.random() * 75) + 1;
  var rotasiAcak = Math.floor(Math.random() * 360);

  tombol.style.position = "relative";
  tombol.style.left = tombolPosisiX + "px";
  tombol.style.top = tombolPosisiY + "px";
  tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
  tombolParent.appendChild(tombol);

  var tombolBy = document.getElementById("By");
  tombolBy.style.transform = `scale(${1 + jumlahSkala * 0.2})`;

  jumlahKlik++; jumlahSkala++;
  if(jumlahKlik == 3){ jumlahKlik=0; }
}

function mulaict(){
  var timeleft = 5;
  var downloadTimer = setInterval(function(){
    timeleft--; document.getElementById("ctimer").textContent = timeleft;
    if(timeleft <= 0) clearInterval(downloadTimer);
    if(timeleft==0){
      setInterval(createHeart,200);
      fthilang(); ftganti=2;
      setTimeout(ftmuncul,400); otomatis3();
    }
  },1000);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = (Math.random() * 90)+"vw";
  heart.style.animationDuration = (Math.random()*3)+2+"s";
  document.body.appendChild(heart);
}
setInterval(function() {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {heartArr[0].remove()}
},100);

function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.4;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.097
