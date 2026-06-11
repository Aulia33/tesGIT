const { buatPesan } = require("../script");

test("fungsi buatPesan harus menghasilkan pesan yang benar", () => {
  expect(buatPesan()).toBe("Website berhasil diuji dan siap deploy!");
});