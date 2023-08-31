lowerCount = document.getElementById("lowerCount")
addCount = document.getElementById("addCount")
resetCount = document.getElementById("resetCount")

const value = document.querySelector("#value")
const btns = document.querySelectorAll("button");



lowerCount.addEventListener("click", function(){
    value.textContent--;
    value.style.color = "red";

});

addCount.addEventListener("click", function(){
    value.textContent++;
    value.style.color = "green";

   
});

resetCount.addEventListener("click", function(){
    value.textContent = 0;
    value.style.color = "#222";

});


// if (value.textContent >= 0){
//         value.style.color = "blue";
//     } if (value <= 0){
//         value.style.color = "red";}
//     if (value == 0){
//         value.style.color = "#222";
//     }










// btns.forEach(function(btn){
// btn.addEventListener("click", function(e){

//    const styles = e.currentTarget.classList;
// if (styles.contains("lowerCount")){
//     counter--;
// }
// else if (styles.contains("addCount")){
//     counter++;
// }
// else if (styles.contains("resetCount")){ 
// counter = 0;

// if (counter > 0){
//     counter.style.color = "green";
// } if (counter < 0){
//     counter.style.color = "red";}
// if (counter === 0){
//     counter.style.color = "#222";
// }