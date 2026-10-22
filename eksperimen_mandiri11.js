const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function() {
    if (pesan.style.display === "none") {
        pesan.style.display = "block";
        tombol.textContent = "Sembunyikan";
    } else {
        pesan.style.display = "none";
        tombol.textContent = "Tampilkan";
    }
});
