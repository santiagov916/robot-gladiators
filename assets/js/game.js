var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto" , "Amy Android" , "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    // Alert players that they are starting the round
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("WOuld you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            } 
        }

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            var damage = randomNumber(playerAttack - 3, playerAttack);

            enemyHealth = Math.max(0, enemyHealth - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
                // check enemy's health 
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    playerMoney = playerMoney + 20;
                    break;
                } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
                var damage = randomNumber(enemyAttack - 3, enemyAttack);

                playerHealth = Math.max(0, playerHealth - damage);
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamining."
                    );
                    
                    if (playerHealth <= 0) {
                        window.alert(playerName + " has died!");
                        break;
                    } else {
                        window.alert(playerName + " still has " + playerHealth + " health left.");
                    }
                    // if player chooses to skip 
                } 
            };
    var startGame = function() {

        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
        
        for(var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
            
            
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName); 
            
            
            if (playerHealth > 0 && i < enemyNames.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

               if (storeConfirm) {
                    shop();
                    }
                }
            } else {
                window.alert("You have lost your robot in battle! Game Over!");
            }
    };
    endGame()
};
    var endGame = function() {
            window.alert("The game has now ended. Let's see how you did!")
            
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } else {
            window.confirm("You lost your robot in battle!");
        }
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            startGame();
        } else {
            window.alert("Thank you for playing Robo Gladiators! Come back soon!");
        }
    };
    
    var shop = function() {
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        switch(shopOptionPrompt) {
            case "REFILL":
            case "refill": 
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                    playerHealth = playerHealth = 20;
                    playerMoney = playerMoney - 7;

                } else {
                        window.alert("You don't have enough money!");
                }
                break;
                case "UPGRADE":
                case "upgrade": 
                if(playerMoney >= 7 ){

               window.alert("Upgrading player's attack by 6 for 7 dollars.");

                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                break;
                case "LEAVE":
                case "leave":
                    window.alert("Leaving the store.");

                    break;
                    default:
                        console.log("You did not pick a valid option. Try again.");

                        shop();
                        break;
        }
    };

    startGame();

    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    }