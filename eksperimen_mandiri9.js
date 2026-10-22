const form = document.getElementById("formSaya");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nama === "" || email === "") {
        hasil.textContent = "Semua kolom wajib diisi!";
    } else {
        hasil.textContent = "Form berhasil dikirim. Terima kasih, " + nama + "!";
    }
});
