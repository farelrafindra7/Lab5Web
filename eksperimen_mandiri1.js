function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);

    if (b !== 0) {
        console.log("Pembagian:", a / b);
    } else {
        console.log("Pembagian: Tidak dapat dibagi nol");
    }

    console.log("Modulus:", a % b);
}

const inputA = prompt("Masukkan bilangan pertama:");
const inputB = prompt("Masukkan bilangan kedua:");

if (
    inputA === null || inputA.trim() === "" ||
    inputB === null || inputB.trim() === "" ||
    !Number.isFinite(Number(inputA)) ||
    !Number.isFinite(Number(inputB))
) {
    alert("Input harus berupa dua bilangan yang valid.");
} else {
    const a = Number(inputA);
    const b = Number(inputB);

    operasiDasar(a, b);
    alert("Perhitungan selesai. Silakan periksa Console.");
}
