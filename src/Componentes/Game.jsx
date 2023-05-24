function Game() {
    const array = [];
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const randomID = getRandomNumber(1, 50);
  
    for (let i = 0; i < 6; i++) {
      const randomNumber = getRandomNumber(1, 50);
      array[i] = randomNumber;
    }
  
    for (let i = 0; i < 2; i++) {
      let var1;
      let randomNumber = getRandomNumber(1, randomID);
      var1 = randomID - randomNumber;
      array.push(var1);
      array.push(randomNumber);
    }
  
    console.log(array);
    console.log(array);
    console.log(randomID);
    console.log("resolução: " + array[8]  +"  "+  array[9] + " = " + randomID);
    return (
      <div className="main_game">
        <h1>{randomID}</h1>
        <div className="boxNumbers_game">
          {array.map((number, index) => (
            <li key={index} className="li_game">{number}</li>
          ))}
        </div>
      </div>
    );
  }
  
  export default Game;
  