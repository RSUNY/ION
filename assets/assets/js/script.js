document.getElementById("background1").addEventListener("click", rungame);
document.getElementById('background2').addEventListener("click" , rungame).innerHTML= "77");
document.getElementById("swapButton1").addEventListener("click", runHealth);
document.getElementById("sawpButton2").addEventListener("click", runHealth2);


elselement.classlist.add()
// const wolverine = document.getElementsByClassName(demo)
// const typeMessage = document.getElementsByClassName(right)
// const nextMessage = document.getElementsByClassName(left)
// const clickedMessage = document.getElementById(background1)
// const nextClickedMessage = document.getElementById(backgound2)
const swapButton1 = document.getElementById('swapButton1');
const healthSpan = document.getElementById('health1');
const swapButton2 = document.getElementById('swapButton2');
const healthSpan2 = document.getElementById('health2');
const dmgDone1 = document.getElementById(`dmgDone1`)
const dmgDone2 = document.getElementById(`dmgDone2`)
// const rungame[""]

function rungame() { 
const rungame = ["1" , "2" , "3" , "4" , "5"];

    // Define an object to map indices to actions
const elementActions = {
    "1": "deals damage",
    "2": "activates special ability",
    "3": "heals player",
    "4": "0",
    "5": "0",
};

rungame.forEach((element) => {
    const action = elementActions["1" , "2" , "3" , "4" , "5"];
    if ("") {
        // Perform additional logic based on the action
        switch (element) {
            case "1":
                // Deal damage
                console.log(`Dealing ${gameData.dmgDone1 + gameData.dmgDone2} damage.`);
                break;
            case "2":
                // Activate special ability
                console.log("Special ability activated!");
                console.log(`Dealing ${gameData.dmgDone1 + gameData.dmgDone2} damage.`);
                break;
            case "3":
                // Heal player
                console.log(`Healing ${gameData.dmg - gameData.dmg} health.`);
                break;
            case "4":
                // Buff defense
                console.log("");
                break;
            case "5":
                // Trigger event
                console.log("");
                break;
            default:
                console.log(`He's ${"4"} has no energy left.`);
        }
    } else {
        console.log(`He's ${"5"} ready to come back!`);
    }
  
});
} 
// add parentheses to run function now not immediately then added function after const rungame
    console.log("The updateGame function has been called!");
    console.log(updateGame())
    // Your game update logic goes here
// function readScore() {
    
    let Wolverinehealth = 1000;
    let Deadpoolhealth = 1000;

    function updateGame(dmgDisplayId) {
        // Swap damage: decrease health by a random amount (for demonstration purposes)
        const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

        if (dmgDisplayId === 'dmgDone1') {
            Wolverinehealth -= damage;
            document.getElementById('health1').textContent = Wolverine health;
            document.getElementById('dmgDone1').textContent = `${gameData.dmgPerClick} dmg`;
        } else {
            Deadpoolhealth -= damage;
            document.getElementById('health2').textContent = Deadpool health;
            document.getElementById('dmgDone2').textContent = `${gameData.dmgPerClick} dmg`;      
        }
    }

        // Check if players are defeated (health reaches 0)
        if (Wolverinehealth <= 0 || Deadpoolhealth <= 0) {
            alert('Game over! One of the players lost.');
//             // Add any other game-over logic here
//         }
//     }
//     let rndInt = createGame(1 , 1000)
//     rndInt.forEach(constrndInt => {
//         updateGame().toggle = ? 1, 0
//         p.demo.createLeft = toggleEnlarge()
    
//     else if rndInt= createGame)500  , 1000)
//     rndInt.forEach(constrndInt => {
//         updateGame().toggle = ? 1, 0
//         p.demo.createLeft = toggleShrink());
//     return console.log(rndInt)
// the text will appear if the image enlarges or shrinks 
// changed the text html displayed of click me as dmg is displayed


// function runGame(element, forEach(img => {}
//     imgResponsive = left.value
//     imgEnlarge = func(getElementsByClassName). $``;
// );
// const rungame[""]

var gameData = [
    dmg: 20,
    dmgPerClick: 1000 / gameData.dmg
    dmgDone1: 50,
    dmgDone: 20,
];

var mainGameLoop = window.setInterval(function() {
    updateGame()
}, 1000)
function updateGame() {
    gameData.dmgPerClick -= gameData.dmg
    document.getElementById("dmgDone1").innerHTML = gameData.dmgPerClick + "dmg";
    document.getElementById("dmgDone2").innerHTML = gameData.dmgPerClick + "dmg";
    document.getElementById("health1").innerHTML = gameData.dmgPerClick + "hp";
    document.getElementById("health2").innerHTML = gameData.dmgPerClick + "hp";
    
}


// const identifiers = [
//     4: 'dmg',
//     2: 'swap',
//     3: 'special',
//     5: 'some_other_value',
//     1: 'another_value'
// ];

// Access values using the IDs
// console.log(identifiers[4]); // 'dmg'
// console.log(identifiers[2]); // 'swap'
// console.log(identifiers[3]); // 'special'

// Example game loop
// const indexes = [4, 2, 3];
// for (const index of indexes) {
//     const identifier = identifiers[index];
//     switch (identifier) {
//         case 'dmg':
//             console.log('Dealing damage!');
//             break;
//         case 'swap':
//             console.log('Swapping something!');
//             break;
//         case 'special':
//             console.log('Executing a special move!');
//             break;
//         default:
//             console.log(`reloading ${identifier}...`);
//     }
// }


const createGame = ["deals damage" , "activates special ability", "heals player"]; // Define your array
const shuffledCreateGame = shuffleArray(createGame);
console.log(shuffledCreateGame);
    
function shuffleArray(array) {
    let currentIndex = array.length;
    while (currentIndex > 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap elements at currentIndex and randomIndex
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

const myArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(myArray);
console.log(shuffledArray);
    
// let playerHealth = 100;

// // Get the button and health span elements
function runHealth(swapButton1) {
// Event listener for the button
swapButton1.addEventListener('click', () => {
    // Swap damage: decrease health by a random amount (for demonstration purposes)
    const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
    Deadpool health -= damage;

    // Update the health display
    healthSpan.textContent = Deadpool health;

    // Check if player is defeated (health reaches 0)
    if (Deadpool health <= 0) {
        alert('Game over! You lost.');
        // Add any other game-over logic here
    }
});
}

function runHealth2(swapButton2) {
swapButton2.addEventListener('click', () => {
    // Swap damage: decrease health by a random amount (for demonstration purposes)
    const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
    Wolverine health -= damage;

    // Update the health display
    healthSpan.textContent = Wolverine health;

    // Check if player is defeated (health reaches 0)
    if (Wolverine health <= 0) {
        alert('Game over! You lost.');
        // Add any other game-over logic here
    }
});
}


// function readScore() {
    
//     let player1Health = 1000;
//     let player2Health = 1000;

//     function updateGame(dmgDisplayId) {
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//         if (dmgDisplayId === 'dmgDone1') {
//             player1Health -= damage;
//             document.getElementById('health1').textContent = player1Health;
//             document.getElementById('dmgDone1').textContent = `${damage} dmg`;
//         } else {
//             player2Health -= damage;
//             document.getElementById('health2').textContent = player2Health;
//             document.getElementById('dmgDone2').textContent = `${damage} dmg`;
//         }

//         // Check if players are defeated (health reaches 0)
//         if (player1Health <= 0 || player2Health <= 0) {
//             alert('Game over! One of the players lost.');
//             // Add any other game-over logic here
//         }
//     }
//     let rndInt = createGame(1 , 1000)
//     rndInt.forEach(constrndInt => {
//         updateGame().toggle = ? 1, 0
//         p.demo.createLeft = toggleEnlarge()
    
//     else if rndInt= createGame)500  , 1000)
//     rndInt.forEach(constrndInt => {
//         updateGame().toggle = ? 1, 0
//         p.demo.createLeft = toggleShrink());
//     return console.log(rndInt)
// }
// transform: scale(1.3);
// transform: scale(0.7);
// }
