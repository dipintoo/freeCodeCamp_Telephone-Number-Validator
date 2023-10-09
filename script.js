// STEP //

// ^(1 *)? -->
// cek awal nomer telepon, ada kode negara "1" yang diikuti spasi (boleh ada boleh tidak)

// (\(\d{3}\)|\d{3}) -->
// cek tiga digit angka yang boleh berada dalam kurung atau tidak

// [- ]* -->
// boleh ada tanda hubung - , spasi atau tidak

// \d{3} -->
// cek tiga digit angka pertama dari nomor telepon.

// \d{4} -->
// cek empat digit angka terakhir dari nomor telepon.

// $ -->
// batas akhir dari pola string.

function telephoneCheck(str) {
	const regex = /^(1 *)?(\(\d{3}\)|\d{3})[- ]*(\d{3})[- ]*(\d{4})$/;
	return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // Output: true
console.log(telephoneCheck("1 (555)555-5555")); // Output: true
console.log(telephoneCheck("123**&!!asdf#")); // Output: false