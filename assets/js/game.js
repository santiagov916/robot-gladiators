var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fight = function(enemy) {
    // Alert players that they are starting the round
    while(playerInfo.health > 0 && enemy.health > 0) {
        var promptFight = window.prompt("WOuld you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            } 
        }

            //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );
                // check enemy's health 
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                    playerInfo.money = playerInfo.money + 20;
                    break;
                } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
                // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
                var damage = randomNumber(enemy.attack - 3, enemy.attack);

                playerInfo.health = Math.max(0, playerInfo.health - damage);
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health reamining."
                    );
                    
                    if (playerInfo.health <= 0) {
                        window.alert(playerInfo.name + " has died!");
                        break;
                    } else {
                        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                    }
                }
                    // if player chooses to skip 
            };
    var startGame = function() {
        playerInfo.reset();
        
        for(var i = 0; i < enemyInfo.length; i++) {
            if (playerInfo.health > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
            
            
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj); 
            
            
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

               if (storeConfirm) {
                    shop();
                    }
                }
            } else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }
    }
    endGame();
};
    var endGame = function() {
            window.alert("The game has now ended. Let's see how you did!")
            
        if (playerInfo.health > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
               playerInfo.refillHealth();
                break;
                case "UPGRADE":
                case "upgrade": 
               playerInfo.upgradeAttack();
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

    var getPlayerName = function() {
        var name = "";

        while (name === "" || name === null) {
            name = prompt("What is your robot's name?");
        }
        console.log("Your robot's name is " + name);
        return name;
};
    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function() {
            if(this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
        },
        upgradeAttack: function() {
            if (this.money >7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
        }
    };
    
    var enemyInfo = [
        {
            name: "Roberto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];
startGame();