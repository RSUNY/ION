// // strings must be in speeach marks and .add or event `` listeners 
// const swapButton1 = document.getElementById('swapButton1');
// const healthSpan = document.getElementById('health1');
// const swapButton2 = document.getElementById('swapButton2');
// const healthSpan2 = document.getElementById('health2');
// const dmgDone1 = document.getElementById(`dmgDone1`)
// const dmgDone2 = document.getElementById(`dmgDone2`)
// document.getElementById("background1").addEventListener("click", rungame);
// document.getElementById('background2').addEventListener("click" , rungame).innerHTML= "77");
// document.getElementById("swapButton1").addEventListener("click", runHealth);
// document.getElementById("sawpButton2").addEventListener("click", runHealth2);


// // elselement.classlist.add()
// // const wolverine = document.getElementsByClassName(demo)
// // const typeMessage = document.getElementsByClassName(right)
// // const nextMessage = document.getElementsByClassName(left)
// // const clickedMessage = document.getElementById(background1)
// // const nextClickedMessage = document.getElementById(backgound2)
// // const swapButton1 = document.getElementById('swapButton1');
// // const healthSpan = document.getElementById('health1');
// // const swapButton2 = document.getElementById('swapButton2');
// // const healthSpan2 = document.getElementById('health2');
// // const dmgDone1 = document.getElementById(`dmgDone1`)
// // const dmgDone2 = document.getElementById(`dmgDone2`)
// // // const rungame[""]
// // now function is addedd copy and paste ans highlight code to see values
// function rungame() { 
// const rungame = ["1" , "2" , "3" , "4" , "5"];

//     // Define an object to map indices to actions
// const elementActions = {
//     "1": "deals damage",
//     "2": "activates special ability",
//     "3": "heals player",
//     "4": "0",
//     "5": "0",
// };

// rungame.forEach((element) => {
//     const action = elementActions["1" , "2" , "3" , "4" , "5"];
//     if ("") {
//         // Perform additional logic based on the action
//         switch (element) {
//             case "1":
//                 // Deal damage
//                 console.log(`Dealing ${gameData.dmgDone1 + gameData.dmgDone2} damage.`);
//                 break;
//             case "2":
//                 // Activate special ability
//                 console.log("Special ability activated!");
//                 console.log(`Dealing ${gameData.dmgDone1 + gameData.dmgDone2} damage.`);
//                 break;
//             case "3":
//                 // Heal player
//                 console.log(`Healing ${gameData.dmg - gameData.dmg} health.`);
//                 break;
//             case "4":
//                 // Buff defense
//                 console.log("");
//                 break;
//             case "5":
//                 // Trigger event
//                 console.log("");
//                 break;
//             default:
//                 console.log(`He's ${"4"} has no energy left.`);
//         }
//     } else {
//         console.log(`He's ${"5"} ready to come back!`);
//     }
  
// });
//  }
// // add parentheses to run function now not immediately then added function after const rungame
//     console.log("The updateGame function has been called!");
//     console.log(updateGame())
//     // Your game update logic goes here
// // function readScore() {
    
//     let Wolverinehealth = 1000;
//     let Deadpoolhealth = 1000;

//     function updateGame(dmgDisplayId) {
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//         if (dmgDisplayId === 'dmgDone1') {
//             Wolverinehealth -= damage;
//             document.getElementById('health1').textContent = Wolverine health;
//             document.getElementById('dmgDone1').textContent = `${gameData.dmgPerClick} dmg`;
//         } else {
//             Deadpoolhealth -= damage;
//             document.getElementById('health2').textContent = Deadpool health;
//             document.getElementById('dmgDone2').textContent = `${gameData.dmgPerClick} dmg`;      
//         }
//     }
//     function updateGame(dmgDisplayId1) {dmgDone1.addEventListener('click', () => 
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//         if (dmgDisplayId1 === 'dmgDone1') {
//             Wolverinehealth -= damage;
//             document.getElementById('health2').textContent = Wolverine health;
//             document.getElementById('dmgDone2').textContent = `${gameData.dmgPerClick} dmg`;
//         } else {
//             Deadpoolhealth -= damage;
//             document.getElementById('health1').textContent = Deadpool health;
//             document.getElementById('dmgDone1').textContent = `${gameData.dmgPerClick} dmg`;      
//         }
//     ).innerHTML}
    
//     function updateGame(dmgDisplayId2) {dmgDone2.addEventListener('click', () => 
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//         if (dmgDisplayId2 === 'dmgDone2') {
//             Wolverinehealth -= damage;
//             document.getElementById('health2').textContent = Wolverine health;
//             document.getElementById('dmgDone2').textContent = `${gameData.dmgPerClick} dmg`;
//         } else {
//             Deadpoolhealth -= damage;
//             document.getElementById('health1').textContent = Deadpool health;
//             document.getElementById('dmgDone1').textContent = `${gameData.dmgPerClick} dmg`;      
//         }
//     ).innerHTML}

//     function updateGame(dmgDisplayId3) {healthSpan.addEventListener('click', () => 
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//         if (dmgDisplayId3 === 'health1') {
//             Wolverinehealth -= damage;
//             document.getElementById('health2').textContent = Wolverine health;
//             document.getElementById('dmgDone2').textContent = `${gameData.dmgPerClick} dmg`;
//         } else {
//             Deadpoolhealth -= damage;
//             document.getElementById('health1').textContent = Deadpool health;
//             document.getElementById('dmgDone1').textContent = `${gameData.dmgPerClick} dmg`;      
//         }
//     ).innerHTML}
//     function updateGame(dmgDisplayId4) {healthSpan2.addEventListener('click', () => 
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//         if (dmgDisplayId4 === 'health2') {
//             Wolverinehealth -= damage;
//             document.getElementById('health2').textContent = Wolverine health;
//             document.getElementById('dmgDone2').textContent = `${gameData.dmgPerClick} dmg`;
//         } else {
//             Deadpoolhealth -= damage;
//             document.getElementById('health1').textContent = Deadpool health;
//             document.getElementById('dmgDone1').textContent = `${gameData.dmgPerClick} dmg`;      
//         }
//     ).innerHTML}
//         // Check if players are defeated (health reaches 0)
//         if (Wolverinehealth <= 0 || Deadpoolhealth <= 0) {
//             alert('Game over! One of the players lost.');
// //             // Add any other game-over logic here
//         }
// //     }
// //     let rndInt = createGame(1 , 1000)
// //     rndInt.forEach(constrndInt => {
// //         updateGame().toggle = ? 1, 0
// //         p.demo.createLeft = toggleEnlarge()
    
// //     else if rndInt= createGame)500  , 1000)
// //     rndInt.forEach(constrndInt => {
// //         updateGame().toggle = ? 1, 0
// //         p.demo.createLeft = toggleShrink());
// //     return console.log(rndInt)
// // the text will appear if the image enlarges or shrinks 
// // changed the text html displayed of click me as dmg is displayed


// // function runGame(element, forEach(img => {}
// //     imgResponsive = left.value
// //     imgEnlarge = func(getElementsByClassName). $``;
// // );
// // const rungame[""]

// var gameData = [
//     dmg: 20,
//     dmgPerClick: 1000 / gameData.dmg
//     dmgDone1: 50,
//     dmgDone: 20,
// ];

// var mainGameLoop = window.setInterval(function() {
//     updateGame()
// }, 1000)
// function updateGame() {
//     gameData.dmgPerClick -= gameData.dmg
//     document.getElementById("dmgDone1").innerHTML = gameData.dmgPerClick + "dmg";
//     document.getElementById("dmgDone2").innerHTML = gameData.dmgPerClick + "dmg";
//     document.getElementById("health1").innerHTML = gameData.dmgPerClick + "hp";
//     document.getElementById("health2").innerHTML = gameData.dmgPerClick + "hp";
    
// }


// // const identifiers = [
// //     4: 'dmg',
// //     2: 'swap',
// //     3: 'special',
// //     5: 'some_other_value',
// //     1: 'another_value'
// // ];

// // Access values using the IDs
// // console.log(identifiers[4]); // 'dmg'
// // console.log(identifiers[2]); // 'swap'
// // console.log(identifiers[3]); // 'special'

// // Example game loop
// // const indexes = [4, 2, 3];
// // for (const index of indexes) {
// //     const identifier = identifiers[index];
// //     switch (identifier) {
// //         case 'dmg':
// //             console.log('Dealing damage!');
// //             break;
// //         case 'swap':
// //             console.log('Swapping something!');
// //             break;
// //         case 'special':
// //             console.log('Executing a special move!');
// //             break;
// //         default:
// //             console.log(`reloading ${identifier}...`);
// //     }
// // }


// const createGame = ["deals damage" , "activates special ability", "heals player"]; // Define your array
// const shuffledCreateGame = shuffleArray(createGame);
// console.log(shuffledCreateGame);
    
// function shuffleArray(array) {
//     let currentIndex = array.length;
//     while (currentIndex > 0) {
//         const randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // Swap elements at currentIndex and randomIndex
//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
//     return array;
// }

// const myArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(myArray);
// console.log(shuffledArray);
    
// // let playerHealth = 100;

// // // Get the button and health span elements
// function runHealth(swapButton1) {
// // Event listener for the button
// swapButton1.addEventListener('click', () => {
//     // Swap damage: decrease health by a random amount (for demonstration purposes)
//     const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
//     Deadpoolhealth -= damage;

//     // Update the health display
//     healthSpan.textContent = Deadpool health;

//     // Check if player is defeated (health reaches 0)
//     if (Deadpoolhealth <= 0) {
//         alert('Game over! You lost.');
//         // Add any other game-over logic here
//     }
// });
// }

// function runHealth2(swapButton2) {
// swapButton2.addEventListener('click', () => {
//     // Swap damage: decrease health by a random amount (for demonstration purposes)
//     const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
//     Wolverinehealth -= damage;

//     // Update the health display
//     healthSpan.textContent = Wolverine health;

//     // Check if player is defeated (health reaches 0)
//     if (Wolverinehealth <= 0) {
//         alert('Game over! You lost.');
//         // Add any other game-over logic here
//     }
// });
// }


// // function readScore() {
    
// //     let player1Health = 1000;
// //     let player2Health = 1000;

// //     function updateGame(dmgDisplayId) {
// //         // Swap damage: decrease health by a random amount (for demonstration purposes)
// //         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

// //         if (dmgDisplayId === 'dmgDone1') {
// //             player1Health -= damage;
// //             document.getElementById('health1').textContent = player1Health;
// //             document.getElementById('dmgDone1').textContent = `${damage} dmg`;
// //         } else {
// //             player2Health -= damage;
// //             document.getElementById('health2').textContent = player2Health;
// //             document.getElementById('dmgDone2').textContent = `${damage} dmg`;
// //         }

// //         // Check if players are defeated (health reaches 0)
// //         if (player1Health <= 0 || player2Health <= 0) {
// //             alert('Game over! One of the players lost.');
// //             // Add any other game-over logic here
// //         }
// //     }
// //     let rndInt = createGame(1 , 1000)
// //     rndInt.forEach(constrndInt => {
// //         updateGame().toggle = ? 1, 0;
// //         img.classList.createimage1 = toggleEnlarge());
    
// //     else if rndInt= createGame)500  , 1000)
// //     rndInt.forEach(constrndInt => {
// //         updateGame().toggle = ? 1, 0;
// //         img.classList.createimage2 = toggleShrink());
// //     return console.log(rndInt)
// // }
// // transform: scale(1.3);
// // transform: scale(0.7);
// // }

document.getElementById("background1").addEventListener("click" , attack);
document.getElementById("background2").addEventListener("click" , attack);
document.getElementById("health1").addEventListener("click" , attack);
document.getElementById("health2").addEventListener("click" , attack);
// attack() {
//     let Deadpoolhealth = 1000;
//     let Wolverinehealth = 1000;
//     function attack() {
//     let dp = Math.floor((Math.random()*20) + 1);
//     let dp1 = Math.floor((Math.random()*20) + 1);
//     let Wolverinehealth = 1000 - dp;
//     console.log("Generated random number:", dp);
//     console.log("Generated random number:", dp1);
    
//     let Deadpoolhealth = 1000 - dp1;
//     else if (dmgDisplayId === 'dmgDone1') {
//         Wolverinehealth -= $(`dmgDone1`);
//         document.getElementById('health1').textContent = Wolverine health;
//         document.getElementById('dmgDone1').textContent = `${Wolverinehealth.dmgDisplayId} dmg`;
//     } else if{ (dmgDisplayId1 === `dmgDone2`)
//         Deadpoolhealth -= $(`dmgDone2`);
//         document.getElementById('health2').textContent = Deadpool health;
//         document.getElementById('dmgDone2').textContent = `${Deadpoolhealth.dmgDisplayId1} dmg`;      
//     }
//     return Wolverinehealth;
//     return Deadpoolhealth;
// }
// }
let Deadpoolhealth = 1000;
let Wolverinehealth = 1000;

document.getElementById("dmgDone").addEventListener("click", attack);

function attack() {
    let dp = Math.floor((Math.random() * 20) + 1);
    let dp1 = Math.floor((Math.random() * 20) + 1);
    
    // Subtract damage from health
    Wolverinehealth -= dp;
    Deadpoolhealth -= dp1;

    // Update health displays
    document.getElementById('health1').textContent = `Wolverine Health: ${Wolverinehealth}`;
    document.getElementById('health2').textContent = `Deadpool Health: ${Deadpoolhealth}`;

    // Update damage displays
    document.getElementById('dmgDone1').textContent = `Wolverine dealt ${dp1} dmg`;
    document.getElementById('dmgDone2').textContent = `Deadpool dealt ${dp} dmg`;
    
    // Check for game over conditions
    if (Wolverinehealth <= 0) {
        alert("Wolverine is defeated!");
    }
    if (Deadpoolhealth <= 0) {
        alert("Deadpool is defeated!");
    }
}
// document.getElementById("background1").addEventListener("click", rungame);
// document.getElementById('background2').addEventListener("click" , rungame).innerHTML= "77");
// document.getElementById("swapButton1").addEventListener("click", runHealth);

// // // Event listener for the button
// swapButton1.addEventListener('click', () => 
// //     // Swap damage: decrease health by a random amount (for demonstration purposes)

// function runHealth2(`swapButton2`) {
//         // Swap damage: decrease health by a random amount (for demonstration purposes)
//         const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
//         Wolverinehealth -= damage;
// function runHealth2(`swapButton1`) {
//     } else const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
//         Deadpoolhealth -= damage;
// }
// )
//     let rndInt = createGame(1 , 1000)
//     rndInt.forEach(constrndInt => {
//         updateGame().toggle = ? 1, 0;
//         img.classList.createimage1 = toggleEnlarge()
//     );
    
//     else if { rndInt= createGame)500  , 1000)
//     rndInt.forEach(constrndInt => {
//         updateGame().toggle = ? 1, 0;
//         img.classList.createimage2 = toggleShrink());
//     return console.log(rndInt)
//     )}
// }
// transform: scale(1.3);
// transform: scale(0.7);
// }

// swapButton1.addEventListener('click', () => {
//     runHealth('Wolverine');
    
// function runHealth(character) {
//     const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//     if (character === 'Wolverine') {
//         Wolverinehealth -= damage;
//         console.log(`Wolverine took ${damage} damage. Remaining health: ${Wolverinehealth}`);
        
//         if (Wolverinehealth <= 0) {
//             alert("Wolverine is defeated!");
//         }

//         img.classList.toggle('image2'); // Assuming CSS class for enlarging image
//     } else if (character === 'Deadpool') {
//         Deadpoolhealth -= damage;
//         console.log(`Deadpool took ${damage} damage. Remaining health: ${Deadpoolhealth}`);
        
//        return ===

//         img.classList.toggle('image2'); // Assuming CSS class for shrinking image
//     }
// }
// });

// // Event listener for swapButton2
// swapButton2.addEventListener('click', () => {
//     runHealth('Deadpool');


// function runHealth(character) {
//     const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

//     if (character === 'Wolverine') {
//         Wolverinehealth -= damage;
//         console.log(`Wolverine took ${damage} damage. Remaining health: ${Wolverinehealth}`);
        
//         if (Wolverinehealth <= 0) {
//             alert("Wolverine is defeated!");
//         }

//         img.classList.toggle('image1'); // Assuming CSS class for enlarging image
//     } else if (character === 'Deadpool') {
//         Deadpoolhealth -= damage;
//         console.log(`Deadpool took ${damage} damage. Remaining health: ${Deadpoolhealth}`);
        
//        return ===

//         img.classList.toggle('image1'); // Assuming CSS class for shrinking image
//     }
// }
// });

// let Deadpoolhealth = 1000;
// let Wolverinehealth = 1000;

// const swapButton1 = document.getElementById('swapButton1');
// const swapButton2 = document.getElementById('swapButton2');
// // const img = document.getElementById('image1');
// // const img = document.getElementById('image2'); // Assuming there's an image element


img = document.getElementById('image1');
img = document.getElementById('image2'); // Assuming there's an image element
img.src = 'assets/assets/css/images/deadpool.jpg';
img.src = 'assets/assets/css/images/wolverine.jpg';


// Set an alternative text for the image (for accessibility)
img.alt = 'A beautiful landscape';

// Event listener for swapButton1
swapButton1.addEventListener('click', () => {
    runHealth('Wolverine', 'image1'); // Pass character and image class
});

// Event listener for swapButton2
swapButton2.addEventListener('click', () => {
    runHealth('Deadpool', 'image2'); // Pass character and image class
});

function runHealth(character, imageClass) {
    const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20

    if (character === 'Wolverine') {
        Wolverinehealth -= damage;
        console.log(`Wolverine took ${damage} damage. Remaining health: ${Wolverinehealth}`);
        
        if (Wolverinehealth <= 0) {
            alert("Wolverine is defeated!");
        }
    } else if (character === 'Deadpool') {
        Deadpoolhealth -= damage;
        console.log(`Deadpool took ${damage} damage. Remaining health: ${Deadpoolhealth}`);
        
        if (Deadpoolhealth <= 0) {
            alert("Deadpool is defeated!");
        }
    }

    // Toggle image class based on the character
    img.classList.toggle(imageClass); // Toggle the appropriate image class


    img.classList.toggle(image1);
    img.classList.toggle(image2); // Toggle the appropriate image class
}