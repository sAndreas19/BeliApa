const btnBeli = document.querySelectorAll('.btnBeli');

btnBeli.forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let namaBarang = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>Informasi tidak tersedia</i>'
        console.log(`gambar: ${gambar}`);
        console.log(`gambar: ${harga}`);
        console.log(`gambar: ${namaBarang}`);
        console.log(`gambar: ${deskripsi}`);
    });
});