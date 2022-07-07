class Supermarket {
	_barang = [
		["mie goreng", 20],
		["golda", 10],
		["ayam potong", 15],
		["teh kotak", 10],
		["mie soto", 5]
	];

	constructor(namaBarang, jumlahBarang, uangPembayaran) {
		this.namaBarang = namaBarang;
		this.jumlahBarang = jumlahBarang;
		this.uangPembayaran = uangPembayaran;
	}

	beliBarang() {
		let cekBarang = [false, null, null];

		// cari barang berdasarakan namabarang
		this._barang.filter((ba, i) => {
			if (ba[0] == this.namaBarang) {
				cekBarang[0] = true;
				cekBarang[1] = ba;
				cekBarang[2] = i;
			}
		});

		// cek apakah barang ada
		if (!cekBarang[0]) {
			return "barang kosong";
		}
		// cek apakah barang ada dan jumlah stock barang lebih dari jumlah pembelian
		else if (cekBarang[0] && cekBarang[1][1] < this.jumlahBarang) {
			this.tambahStock(this.jumlahBarang, cekBarang[2]);
			return `stock barang ${this.namaBarang} telah di update menjadi ${this._barang[cekBarang[2]][1]}`;
		}
		// jika semua kondisi benar
		else {
			this.kurangStock(this.jumlahBarang, cekBarang[2]);
			return `pembelian barang dengan jumlah ${this.jumlahBarang}, sisa stock ${cekBarang[1][0]} ${this._barang[cekBarang[2]][1]}`;
		}
	}

	tambahStock(jumlahPembelian, i) {
		this._barang[i][1] += jumlahPembelian * 2;
	}
	kurangStock(jumlahPembelian, i) {
		this._barang[i][1] -= jumlahPembelian;
	}
}

let beras = new Supermarket("golda", 10, 13000);
console.log(beras.beliBarang());
