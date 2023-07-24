var tanya = true;

while(tanya) {

    //tangkap pilihan player
    var player = prompt('pilih : gajah, semut, orang');

    //tangkap pilihan computer
    //bangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ){
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut'
    }

    //menentukan rules
    var hasil = '';
    if (player == comp) {
        hasil = 'SERI'
    } else if (player == 'gajah') {
        hasil = (comp = 'orang')? 'MENANG!' : 'KALAH!';
    } else if (player == 'orang') {
        hasil = ( comp == 'gajah')? 'KALAH!' : 'MENANG!';
    } else if (player == 'semut') {
        hasil = (comp = 'orang')? 'KALAH!' : 'MENANG!'
    } else {
        hasil = 'input salah!';
    } 

    //tampilkan hasil nya
    alert('Kamu memilih : ' + player + ' \nkomputer memilih : ' + comp + '\nMaka hasilnya : Kamu : ' + hasil);

    tanya = confirm('Lagi?');
}