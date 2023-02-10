      // OPR - ARITHMETIC (+, -, *, /, %)
      var valueA = 100; //declare
      var valueB = 20;
      // (+) tambah
      result = valueA + valueB;
      document.getElementById("arithmetic-1").innerHTML = "100 + 20 = " + result;
      //(-) kurang
      result = valueA - valueB;
      document.getElementById("arithmetic-2").innerHTML = "100 - 20 = " + result;
      //(*) kali
      result = valueA * valueB;
      document.getElementById("arithmetic-3").innerHTML = "100 * 20 = " + result;
      //(/) bagi
      result = valueA / valueB;
      document.getElementById("arithmetic-4").innerHTML = "100 / 20 = " + result;
      //(%) module
      result = valueA % valueB;
      document.getElementById("arithmetic-5").innerHTML = "100 % 20 = " + result;

      // OPR - ASSIGMENT/PENUGASAN (=, +=, -=, *=, /=, %=, **=)
      //=
      let valueC = 10;
      valueC += 5;
      document.getElementById("assigment-1").innerHTML = "valueC = 10 += 5 = " + valueC + "<br>" + " or";
      //orr
      let MyCatName = "me";
      MyCatName += "ongg";
      document.getElementById("assigment-concatenate-string").innerHTML = "nama kucing saya adalah : " + MyCatName;
      // (-)
      let valueD = 10;
      valueD -= 3;
      document.getElementById("assigment-2").innerHTML = "valueD = 10 -= 3 = " + valueD;
      // (*)
      let valueE = 11;
      valueE *= 2;
      document.getElementById("assigment-3").innerHTML = "valueE = 11 *= 4 = " + valueE;
      // (/)
      let valueF = 10;
      valueF /= 2;
      document.getElementById("assigment-4").innerHTML = "valueE = 10 /= 2 = " + valueF;
      // (%)
      let valueG = 13;
      valueE %= 10;
      document.getElementById("assigment-5").innerHTML = "valueG = 13 %= 10 = " + valueG;

      // OPR - COMPARISON
      // (==)
      var nilaiA = 10;
      var nilaiB = 10;
      var hasilAB = nilaiA == nilaiB;
      document.getElementById("comparison-1").innerHTML = "10 == 10 : " + hasilAB;
      // strict (===)
      var nilaiC = 10;
      var nilaiD = "10";
      var hasilCD = nilaiC === nilaiD;
      document.getElementById("comparison-2").innerHTML = "10 === '10' : " + hasilCD;
      //(!=)
      var nilaiE = 10;
      var nilaiF = 9;
      hasilEF = nilaiE != nilaiF;
      document.getElementById("comparison-3").innerHTML = "10 != 9 : " + hasilEF;
      //(!==)
      var nilaiG = 10;
      var nilaiH = 10;
      hasilGH = nilaiG !== nilaiH;
      document.getElementById("comparison-4").innerHTML = "10 !== 10 : " + hasilGH;
      //(>)
      var nilaiI = 11;
      var nilaiJ = 10;
      var hasilIJ = nilaiI > nilaiJ;
      document.getElementById("comparison-5").innerHTML = "11 > 10 : " + hasilIJ;
      //(<)
      var nilaiK = 11;
      var nilaiL = 10;
      var hasilKL = nilaiK < nilaiL;
      document.getElementById("comparison-6").innerHTML = "11 < 10 : " + hasilKL;
      //(>=)
      var nilaiM = 10;
      var nilaiN = 11;
      var hasilMN = nilaiM >= nilaiN;
      document.getElementById("comparison-7").innerHTML = "10 >= 11 : " + hasilMN;
      //(<=)
      var nilaiO = 10;
      var nilaiP = 11;
      var hasilOP = nilaiO <= nilaiP;
      document.getElementById("comparison-8").innerHTML = "10 <= 11 : " + hasilOP;

      // OPR - LOGICAL (&&, ||, !)
      // AND (&&)
      //kondisi 1
      var x = 12;
      //cek apakah x bilangan genap atau bukan
      var hasilKondisi1 = (x % 2 == 0);
      //5 dibagi 2 = ada sisanya maka hasilnya adalah : false
      //kondisi 2
      var y = 12;
      var z = 10;
      var hasilKondisi2 = y < z;
      //oke, kita gabungkan kedua kondisi tersebut dengan logika AND (&&)
      // dalam AND, ada yang satu salah maka akan bernilai : FALSE
      var hasilOperatorAND = (x % 2 == 0) && y < z;
      document.getElementById("logical-1").innerHTML = "(&&) kondisi 1 AND : (x % 2 == 0) = " + hasilKondisi1 + "<br>" + "(&&) kondisi 2 AND : 12 < 10  = " + hasilKondisi2 + "<br>" + " (&&)Gabungkan AND : (x % 2 == 0) && 12 < 10 =  " + hasilOperatorAND;

      //OPR - OR (||)
      //kondisi 1
      var d = 12;
      var hasilKondisi1OR = (d % 2 == 0)
      //kondisi 2
      var e = 10;
      var f = 9;
      var hasilkondisi2OR = e < f;
      //gabungkan kedua kondisi tersebut dengan menggunakan operator logical OR (||)
      var hasilOperatorOR =  (d % 2 == 0) || e < f;
      //dalam OR, apabila ada kondisi 1 salah, maka hasilnya adalah TRUE atau BENAR
      document.getElementById("logical-2").innerHTML = "(||)kondisi 1 OR : (d % 2 == 0) " + hasilKondisi1OR + "<br>" + "(||)kondisi 2 OR : e < f " + hasilkondisi2OR + "<br>" + "(||)Gabungkan OR : " + hasilOperatorOR;

      //OPR - NOT (!)
      //untuk operator NOT, kerjanya ialah dibalikan apabila suatu kondisi TRUE lalu gunakan opr NOT maka akan bernilai FALSE
       var h = 10;
       var i = 12;
       var hasilOperatorNOTSebelum = (h < i);
       var hasilOperatorNOTSesudah = !(h<i);
       document.getElementById("logical-3").innerHTML = "(!)kondisi sebelum menggunakan NOT : (10 < 12) = " + hasilOperatorNOTSebelum + "<br>" + "(!)kondisi sesudah menggunakan NOT : !(10 < 12) = " + hasilOperatorNOTSesudah;
       
       //OPR conditional - (kondisi) ? "benar" : "salah"
       // kinerja nya, ialah untuk memnentukan suatu kondisi 
       var contohNilai = 10;
       var hasilOperatorConditional = (contohNilai % 2 == 0) ? "genap" : "ganjil";
       document.getElementById("conditional-1").innerHTML = "(10 % 2 == 0) ? 'genap' : 'ganjil' Maka hasilnya adalah = " + hasilOperatorConditional;

       // OPR TYPEOF 
       // operator typeof digunakan untuk memnentukan sebuah tipe data apa, dari sebuah nilai
      var hasilOperatorType1 = typeof(11);
      var hasilOperatorType2 = typeof(false);
      var hasilOperatorType3 = typeof ("hello world");
      document.getElementById("type-1").innerHTML = "hasil typeof(11) = " +  hasilOperatorType1 + "<br>" + "hasil typeof(false) = " +  hasilOperatorType2 + "<br>" + "hasil typeof (hello world) = " + hasilOperatorType3;