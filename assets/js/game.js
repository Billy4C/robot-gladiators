var playerName =window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 30;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);
// log multiple variables at once by using console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 50;
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

var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        // place fight function code block here ...

        // Alert users that they are starting the round
        // window.alert("Welcome to Robot Gladiators!"); // fight function statements
        // ask user if they would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // console.log(promptFight);
        

        // if player chooses to skip, confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        
            var confirmSkip = window.confirm("Are you sure you'd like to quit?") 
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney" , playerMoney);
                break;
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

            // leave while loop since enemy is dead
            break;
        } 
        else {
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
            window.alert(playerName + " has been died!"); 
            // leave while( loop if player is dead)
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
    }    
};

for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        //call fight function with enemy robot
        fight(pickedEnemyName);
}

// fight();





