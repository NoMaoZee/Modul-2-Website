function subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Mohon masukkan angka yang valid🥲😘";
  } else {
    const result = num1 + num2; //ini buat tambahnya kak
    document.getElementById("result").innerText = `Hasil: ${result}`;
  }
}

function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const alamat = document.getElementById("alamat").value.trim();

  // Cek apakah semua input terisi
  if (nama === "" || email === "" || alamat === "") {
    alert("Semua data harus diisi");
    return false;
  }

  return true;
}
