/*
    Variable
    Harus dimulai dengan huruf atau underscore (_).
    Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
    Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
    Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)

    Lalu, bagaimana dengan const? Const merupakan kependekan dari constant. 
    Artinya, kita akan mendeklarasikan sebuah variabel dengan const ketika ingin variabel bernilai konstan dan tidak bisa diubah setelah diinisialisasi nilainya. 
    Bayangkan variabel bernilai const sebagai sebuah kotak yang ditutup dan disegel setelah diisi, sehingga nilainya tidak bisa diubah lagi.

*/ 



// Jika menginisialisasi kembali nilai variabel yang menggunakan const, 
// kita akan mendapati eror “TypeError: Assignment to constant variable.”

/*
git commit --amend --date "2023-05-18 12:11:14"

git commit --amend --date "2023-05-19 20:09:12"

git commit --amend --date "2023-05-20 09:01:02"

git commit --amend --date "2023-05-21 11:00:12"

git commit --amend --date "2023-05-22 10:11:30"

git commit --amend --date "2023-05-23 15:13:45"
*/ 



const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */
