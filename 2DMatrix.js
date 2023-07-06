//A function that accepts a two-dimensional matrix as input and rotates it 90 degrees clockwise.

function rotirajMatricu(matrica) {
    let redovi = matrica.length;
    let kolone = matrica[0].length;
  
    let novaMatrica = [];
    for (let i = 0; i < kolone; i++) {
      novaMatrica[i] = [];
    }
  
    for (let r = 0; r < redovi; r++) {
      for (let k = 0; k < kolone; k++) {
        novaMatrica[k][redovi - 1 - r] = matrica[r][k];
      }
    }
  
    for (let a = 0; a < kolone; a++) {
      for (let b = 0; b < redovi; b++) {
        matrica[a][b] = novaMatrica[a][b];
      }
    }
  
    return matrica;
  }
  
  let ulaznaMatrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let rezultat = rotirajMatricu(ulaznaMatrica);
  console.log(rezultat);
  
