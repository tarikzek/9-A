// script.js

function mesajEkle() {
    // Giriş elemanındaki değeri al
    var mesaj = document.getElementById("mesajInput").value;

    // Liste elemanını oluştur
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(mesaj));

    // Mesaj listesine ekle
    document.getElementById("mesajListesi").appendChild(li);

    // Giriş elemanını temizle
    document.getElementById("mesajInput").value = "";
}
