var playerName =window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);
// log multiple variables at once by using console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    enemyNames[0];
    console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function(){
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
    
    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "fihgt") {
       
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    // Check enemyHealth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //subtract the value of 'enemyAttack' from 'playerHealth' and use that reslut to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //log a resulting messae to the console so we know that it worked/
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

            //check playerHealth
    if(playerHealth <= 0) {
            window.alert(playerName + " has been terminated!"); 
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left");
    }

     // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    
    var confirmSkip = window.confirm("Are you sure you'd like to quit?") 

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        console.log(
            playerName + " now has " + playerMoney + " left.");
        
    }
    //if nos (false), ask question again by running fight() again
    else {
        fight();
    }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
    
    
};

// fight();  







