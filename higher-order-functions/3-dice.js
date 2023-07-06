//Create a function that simulates rolling 3 dice. Dice can have a value from 1 to 6. 
//The function should return all combinations of rolls until all 3 dice land on 6.

function simulateDiceThrows() {
    const combinations = [];
    
    while (true) {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const dice3 = Math.floor(Math.random() * 6) + 1;
      
      combinations.push([dice1, dice2, dice3]);
      
      if (dice1 === 6 && dice2 === 6 && dice3 === 6) {
        break;
      }
    }
    
    return combinations;
  }
  
  function analyzeDiceThrows(combinations) {
    const statistics = {
      counts: {},
      average: 0,
      minimum: Infinity
    };
    
    const totalCount = combinations.length;
    let sum = 0;
    
    combinations.forEach(combination => {
      const sumOfDice = combination.reduce((acc, dice) => acc + dice, 0);
      sum += sumOfDice;
      
      if (sumOfDice < statistics.minimum) {
        statistics.minimum = sumOfDice;
      }
      
      combination.forEach(dice => {
        if (statistics.counts[dice]) {
          statistics.counts[dice]++;
        } else {
          statistics.counts[dice] = 1;
        }
      });
    });
    
    statistics.average = sum / totalCount;
    
    return statistics;
  }
  
  
  const combinations = simulateDiceThrows();
  const statistics = analyzeDiceThrows(combinations);
  
  console.log('Combinations:', combinations);
  console.log('Statistics:', statistics);
  
