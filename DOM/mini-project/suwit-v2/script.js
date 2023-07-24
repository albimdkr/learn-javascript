function getPilihanComputer (){
    const comp = Math.random();

    //ketika terdapat suatu return, maka program tidak akan membaca else if kebawah nya,
    // if( comp < 0.34 ){
    //     comp 'gajah';
    // } else if( comp >= 0.34 && comp < 0.67) {
    //     comp 'orang';
    // } else {
    //     comp 'semut'
    // }
    //maka ubah hanya satu statement saja, sesudah memakai return
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp = 'orang')? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return ( comp == 'gajah')? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp = 'orang')? 'KALAH!' : 'MENANG!';
}


