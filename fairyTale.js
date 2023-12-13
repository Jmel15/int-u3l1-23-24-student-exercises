// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place = "bedstuy";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName= "john";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color= "Sky blue";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2= "red";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion= "happy";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character= "joshua";
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number= "98"
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item= "ps4 controller";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2= "spoon";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb= "Happily";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb= "Slowly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2= "54";





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = place;
    document.querySelector(".creature-name").innerHTML = creatureName;
    document.querySelector(".color").innerHTML = color;
    document.querySelector(".color-2").innerHTML = color2;
    document.querySelector(".emotion").innerHTML = emotion;
    document.querySelector(".character").innerHTML = character;
    document.querySelector(".creature-name-again").innerHTML = number;
    document.querySelector(".number").innerHTML = item;
    document.querySelector(".item").innerHTML = item2;
    document.querySelector(".character-again").innerHTML = verb;
    document.querySelector(".item-2").innerHTML = adverb;
    document.querySelector(".verb").innerHTML = number2;
    document.querySelector(".adverb").innerHTML = null;
    document.querySelector(".number-2").innerHTML = null;
    document.querySelector(".story-container").style = "display:block";
});
