function Warrior(name){
  return {
     name: name, 
     health: 100,
     strike: function (enemy, swings) {
       enemy.health = Math.max(0, enemy.health - (swings * 10));   
     }
   } 
 }