// program 
const tinggi = 5;
  

  for (let i = 1; i <= tinggi; i++) {
    let baris = ''; 
    for (let j = 1; j <= i; j++) {
      baris += '*   ';
    }
    console.log(baris);
  }

console.log(" ");

  for (let i = tinggi; i >= 1; i--) {
    let baris = '';
    for (let j = 1; j <= i; j++) {
      baris += '*   ';
    }
    console.log(baris);
  }