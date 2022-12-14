const selection = (selection) => {
    switch (selection){
            case 1:
                return "Piedra"
            case 2: 
                return "Papel"
            case 3:
                return "Tijera"
    }
}

const getRandom = ()=> {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
  }
const game = (userSelection) => {
    let pcSelection= getRandom();
    let result= `User ${selection(userSelection)} Pc: ${selection(pcSelection)}`
    if((parseInt(userSelection)==1 && pcSelection==3) || (parseInt(userSelection)==2 && pcSelection==1) || (parseInt(userSelection)==3 && pcSelection==2)){
        return "Ganador Usuario "
    }
    else{
        return "Ganador pc"
    }
}

// Piedra=1
// Papel=2
// Tijera=3
console.log(game(2));
console.log(getRandom);

