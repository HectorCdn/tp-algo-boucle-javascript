function countEvenNumbers(arr) {
    let count = 0;
  
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    
    return count;
}

console.log(countEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 2
console.log(countEvenNumbers([5, 7, 11]));    // Résultat attendu : 0
console.log(countEvenNumbers([0, 2, 4, 6])); // Résultat attendu : 4