let nav =[];  



let buttonContext=document.getElementById("showWords");
let paragraphElement =document.getElementById("words"); 


buttonContext.addEventListener("click", function(event){

    event.preventDefault();//so here this line of code prevent the forum to refresh so the data will 
    
    let wordGuessedInput = document.getElementById("inputWord");

    let wordGuessed = wordGuessedInput.value.trim();
    console.log("hhhhhhhhhhh");
    console.log(wordGuessed);


fetch(`https://api.datamuse.com/words?ml=${wordGuessed}`)
.then(res => res.json())
.then(data => { 
    let dataArray=data.map(w => w.word); 
    console.log(dataArray) ; 
    nav = dataArray; 
    paragraphElement.innerHTML=nav;
}
);


})




