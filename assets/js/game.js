var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 30;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);
// log multiple variables at once by using console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 15;
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

// console.log(enemyName, enemyHealth, enemyAttack);

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        // ask user if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to fight, then fight
        // if(promptFight === "fight" || promptFight === "Fight" || promptFight === "f") {}

        // if player chooses to skip, confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "s") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")
            // } else {
            // window.alert("You need to pick a valid option. Try again!");
            // }
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } else {
                fight(enemyName);
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemyHealth
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable         
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check playerHealth
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while( loop if player is dead)
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }

        // window.alert(playerName + " has chosen to skip the fight!");  
    }
};



// function fo start a new game
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 30;
    playerMoney = 10;

    //other logic remains the same
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            // if the player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if user wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over, vistit the store before the next round?");

                //if yes, take them to the store()function
                if (storeConfirm) {
                    shop();
                }
            }
        }

        // else {
        //     window.alert("You have lost your robot in battle!  Game Over!");
        //     break;
        // }
    }
    // play again
    // startGame();
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function () {
    // ask palyer what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice." +
        " \nHealth: " + playerHealth + " \nMoney: " + playerMoney + " \nAttack " + playerAttack
    );
    shopOptionPrompt = shopOptionPrompt.toLowerCase()
    shopOptionPrompt = shopOptionPrompt.charAt(0)

    switch (shopOptionPrompt) {
        // case "REFILL": // new case
        case "r":
            if (playerMoney >= 7) {
                window.alert("Refilling " + playerName + "'s  health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enought money");
            }

            // increase health and decrease money
            // playerHealth = playerHealth + 20;
            // playerMoney = playerMoney - 7;
            shop();
            break;
        case "u":
            if (playerMoney >= 7) {
                window.alert("Upgrading " + playerName +  "'s attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            
            } else {
                window.alert("You don't have enought money");
            }
            shop();
            break;
        case "l":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid opiton. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};


// fight();
startGame();