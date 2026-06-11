function buatPesan() {
  return "Website berhasil diuji dan siap deploy!";
}

function tampilkanPesan() {
  alert(buatPesan());
}

if (typeof document !== "undefined") {
  const tombol = document.getElementById("tombolSapa");

  if (tombol) {
    tombol.addEventListener("click", tampilkanPesan);
  }
}

if (typeof module !== "undefined") {
  module.exports = { buatPesan };
}