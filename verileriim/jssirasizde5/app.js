// script.js

// Üç parametreli ve geriye değer döndüren fonksiyon tanımla
function carpmaIslemi(parametre1, parametre2, parametre3) {
    // Parametreleri çarp ve sonucu geri döndür
    return parametre1 * parametre2 * parametre3;
}

// Fonksiyonu çağır ve sonucu al
var sonuc = carpmaIslemi(3, 5, 2);

// Sonucu ekrana yazdır
alert("Parametrelerin çarpımı: " + sonuc);
