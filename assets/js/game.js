var playerName =window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);
// log multiple variables at once by using console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function(){
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //log a resulting message to the console so whe know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Check enemyHealth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //subtract the value of 'enemyAttack' from 'playerHealth' and use that reslut to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //log a resulting messae to the console so we know that it worked/
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            console.log(enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining.");

            //check playerHealth
            if(playerHealth <= 0) {
                window.alert(playerName + " has been  terminated!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left");

            }
    
};

fight();  







