//A function that accepts two matrices as input and performs matrix multiplication.

function mnozenjeMatrica(matrica1, matrica2) {
    let rezultat = [];
    for (let i = 0; i < matrica1.length; i++) {
        rezultat[i] = [];
        for (let j = 0; j < matrica2[0].length; j++) {
          rezultat[i][j] = 0;
        }
      }
    for (let i = 0; i < matrica1.length; i++) {
      for (let j = 0; j < matrica2[0].length; j++) {
        for (let k = 0; k < matrica1[0].length; k++) {
          rezultat[i][j] += matrica1[i][k] * matrica2[k][j];
        }
      }
    }
  
    return rezultat;
  }

  var matrica1 = [[1, 2, 3], [4, 5, 6]];
  var matrica2 = [[7, 8], [9, 10], [11, 12]];
  
  var rezultat = mnozenjeMatrica(matrica1, matrica2);
  console.log(rezultat);
  
