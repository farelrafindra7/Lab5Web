function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 75) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else if (nilai >= 50) {
        return "D";
    } else {
        return "E";
    }
}

function tampilkanHasil(nilaiAkhir) {
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    document.getElementById("hasilNilai").innerHTML =
        "Nilai akhir: " + nilaiAkhir.toFixed(2) + "<br>" +
        "Predikat: " + predikat + "<br>" +
        "Status: " + status;
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    if (
        document.getElementById("tugas").value.trim() === "" ||
        document.getElementById("uts").value.trim() === "" ||
        document.getElementById("uas").value.trim() === "" ||
        !Number.isFinite(tugas) || tugas < 0 || tugas > 100 ||
        !Number.isFinite(uts) || uts < 0 || uts > 100 ||
        !Number.isFinite(uas) || uas < 0 || uas > 100
    ) {
        document.getElementById("hasilNilai").textContent =
            "Input tidak valid. Semua nilai harus berada pada rentang 0–100.";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    tampilkanHasil(nilaiAkhir);
});
