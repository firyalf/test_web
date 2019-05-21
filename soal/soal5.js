/**
 * mencari nilai terbasar
 * @angka1 14
 * @angka2 59
 * @angka3 52
 * @angka4 4
 * @angka5 38
 *
 * @return sebuah @String
 */
function nilaiTerbesar(angka1, angka2, angka3, angka4, angka5) {
  let besar = 0;
  var besarnya;
if(angka2>angka1){
	besarnya = angka2;
		if(angka3>besarnya){
			besarnya = angka3;

			if(angka4>besarnya){
			besarnya = angka4;

				if(angka5>besarnya){
				besarnya = angka5;
				}
				else{
				besarnya = besarnya;
				}
			}
			else{
			besarnya = besarnya;
			}
	}
	else{
		besarnya = besarnya;
	}
}
else{
	besarnya = angka2;
	if(angka3>besarnya){
			besarnya = angka3;

			if(angka4>besarnya){
			besarnya = angka4;

				if(angka5>besarnya){
				besarnya = angka5;
				}
				else{
				besarnya = besarnya;
				}
			}
			else{
			besarnya = besarnya;
			}
	}
	else{
		besarnya = besarnya;
	}
}
besar = besarnya;
return 'Nilai terbesar adalah: ' + besarnya;
}

