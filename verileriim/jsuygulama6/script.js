// script.js

// Kullanıcının giriş zamanını al
var girisZamani = new Date();

// Saat bilgisini al
var saat = girisZamani.getHours();

// Reklam alanını seç
var reklamAlani = document.getElementById("reklamAlani");

// Saate göre reklam mesajını belirle
var reklamMesaji = "";
if (saat < 12) {
    reklamMesaji = "Günaydın! Sabah kahvesini kaçırmayın.";
} else if (saat < 18) {
    reklamMesaji = "İyi günler! Öğle molası için en iyi zaman.";
} else {
    reklamMesaji = "İyi akşamlar! Akşam yemeğinizi özel kılın.";
}

// Reklam mesajını ekrana yazdır
reklamAlani.innerHTML = "<p>" + reklamMesaji + "</p>";
