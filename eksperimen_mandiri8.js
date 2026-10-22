function cekGenap(angka) {
    return angka % 2 === 0;
}

function periksaAngka() {
    const input = document.getElementById("angka").value;
    const hasil = document.getElementById("hasil");

    if (input.trim() === "") {
        hasil.textContent = "Silakan masukkan angka terlebih dahulu.";
        return;
    }

    const angka = Number(input);

    if (cekGenap(angka)) {
        hasil.textContent = angka + " adalah bilangan genap.";
    } else {
        hasil.textContent = angka + " adalah bilangan ganjil.";
    }
}
