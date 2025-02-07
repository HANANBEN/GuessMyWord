let nav =[];  
let inputWord;
let wordGuessedInput = document.getElementById("inputWord");
wordGuessedInput.addEventListener("input", function(event) {
    let wordGuessed = event.target.value;
    console.log(wordGuessed);
    wordGuessed=inputWord; 
});


fetch(`https://api.datamuse.com/words?ml=${inputWord}`)
.then(res => res.json())
.then(data => { 
    let dataArray=data.map(w => w.word); 
    console.log(dataArray) ; 
    nav = dataArray; 
}
); 


let buttonContext=document.getElementById("showWords");
let paragraphElement =document.getElementById("words"); 


buttonContext.addEventListener("click", function(){
    
paragraphElement.innerHTML=nav;

})




