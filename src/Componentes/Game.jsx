function Game(){
    console.log("começo função")
    const array = [];
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } 
      const randomID = getRandomNumber(1,50);
      for(let i = 0; i <= 6 ;i++){
         const randomNumber = getRandomNumber(1, 50);
         array[i] = randomNumber;
      } 
      for(let i = 0; i <= 0;i++){
        let var1 ;
        let randomNumber = getRandomNumber(1,randomID); /*randomNumber não pode cair com o mesmo valor que o randomID*/ 
        var1 =  randomID - randomNumber ;
        array.push(var1);
        array.push(randomNumber);
      }

      return(
        console.log("principal : " + randomID, "array: " + array +" ; " + " O tamanho do array é " + array.length + "." )
        


    
    )
}

export default Game;