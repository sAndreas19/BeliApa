// Memilih semua elemen dengan class 'btnBeli'
const btnBeli = document.querySelectorAll('.btnBeli');
const btnKeranjang = document.querySelectorAll('.btnKeranjang');
const daftarKeranjang = document.getElementById('daftarKeranjang');

// Menambahkan aksi saat klik pada elemen 'btnBeli'
btnBeli.forEach(item => {
    item.addEventListener('click', (e) => {
        // Modal
        let parent = e.target.parentNode.parentNode;
        gambar = parent.querySelector('.card-img-top').src;
        harga = parent.querySelector('.harga').innerHTML;
        namaBarang = parent.querySelector('.card-text').innerHTML;
        deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>Informasi tidak tersedia</i>';

        let btnModal = document.querySelector('.btnModal');
        btnModal.click();

        document.querySelector('.modalTitle').innerHTML = namaBarang;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;
    });
});
