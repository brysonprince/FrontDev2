function countBs(x){
    let bs = 0
    for(let i = 0; i < x.length; i++){
      if(x[i] == 'B'){ 
        bs += 1;
      }
    }
    return bs
  }
    
  function countChar(word, letter){
    let count = 0
    for(let i = 0; i < word.length; i++){
      if(word[i] == letter){ 
        count += 1;
      }
    }
    return count
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4