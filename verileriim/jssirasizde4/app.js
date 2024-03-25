// script.js

// Parametreli fonksiyon tanımla
function kareAl(sayi) {
    // Sayının karesini hesapla ve geri döndür
    return sayi * sayi;
}

// Kullanıcıdan bir sayı al
var kullaniciSayisi = prompt("Lütfen bir sayı giriniz:");

// Girilen sayının karesini hesapla
var karesi = kareAl(parseFloat(kullaniciSayisi));

// Sonucu ekrana yazdır
alert("Girilen sayının karesi: " + karesi);
