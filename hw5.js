const age = prompt("запитати у користувача рік народження.");
const city = prompt("запитати в нього, в якому місті він живе.");
const sport = prompt("запитати його улюблений вид спорту.");
const sport_1 = "basketball";
const sport_2 ="football";
const sport_3 = "box";
const champion_basketball = "Kobe Bryant";
const champion_football = "Lionel Messi";
const champion_box = "Oleksandr Usyk";
let cityMessage;
alert("Мені " +age+ " років")
if(city === "Київ" || city === "Вашингтон" ){
   alert("Ти живеш у столиці? " + city);
}
if (city === "Вашингтон" || city === "Київ" ){
    alert("Ти живешь у місті? " + city);
}
if(sport === sport_1){
    alert("Круто! Хочеш стати " + champion_basketball)
}
if(sport === sport_2){
    alert("Круто! Хочеш стати " + champion_football)
}
if(sport === sport_3){
    alert("Круто! Хочеш стати "  + champion_box)
}
