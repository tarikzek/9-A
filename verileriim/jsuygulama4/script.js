// script.js

function hesaplaKare() {
    // Form elemanından sayıyı al
    var sayi = document.getElementById("sayiInput").value;

    // Hesapla ve sonucu ekrana yazdır
    var sonuc = "Girilen sayının karesi: " + (sayi * sayi);
    document.getElementById("sonuc").innerHTML = sonuc;
}
