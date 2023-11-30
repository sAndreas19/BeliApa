const btnBeli = document.querySelectorAll('.btnBeli');
const btnKeranjang = document.querySelectorAll('.btnKeranjang');
const daftarKeranjang = document.getElementById('daftarKeranjang');

// Variabel global untuk menyimpan informasi produk
let globalData = {
    gambar: '',
    harga: '',
    namaBarang: '',
    deskripsi: ''
};

//Button Beli
btnBeli.forEach(item => {
    item.addEventListener('click', (e) => {
        // Modal
        let parent = e.target.parentNode.parentNode;
        globalData.gambar = parent.querySelector('.card-img-top').src;
        globalData.harga = parent.querySelector('.harga').innerHTML;
        globalData.namaBarang = parent.querySelector('.card-text').innerHTML;
        globalData.deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>Informasi tidak tersedia</i>';

        let btnModal = document.querySelector('.btnModal');
        btnModal.click();

        document.querySelector('.modalTitle').innerHTML = globalData.namaBarang;
        let image = document.createElement('img');
        image.src = globalData.gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = globalData.deskripsi;
        document.querySelector('.modalHarga').innerHTML = globalData.harga;
    });
});

//Button Tambah ke keranjang
btnKeranjang.forEach(item => {
    item.addEventListener('click', (e) => {

        let imageTd = document.createElement('td');
        let image = document.createElement('img');
        image.src = globalData.gambar;
        image.classList.add('w-100');
        imageTd.appendChild(image);
        console.log(imageTd)

        let tableDeskripsi = document.createElement('td');
        tableDeskripsi.innerHTML = globalData.deskripsi;
        document.querySelector('#keranjang').innerHTML = '';
        document.querySelector('#keranjang').appendChild(tableDeskripsi);
        console.log(tableDeskripsi)

        let tableHarga = document.createElement('td');
        tableHarga.innerHTML = globalData.harga;
        document.querySelector('#keranjang').innerHTML = '';
        document.querySelector('#keranjang').appendChild(tableHarga);
        console.log(tableHarga)

        let btnKeranjang = document.querySelector('.btnKeranjang');
        btnKeranjang.click();
    });
});

//Button untuk menampilkan keranjang
daftarKeranjang.addEventListener('click', () => {
    var myModal = new bootstrap.Modal(document.getElementById('keranjang'));
        myModal.show();
});