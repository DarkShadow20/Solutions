var count=0;
var counter=0;
function countB(charCountB){
    for(let i=0;i<charCountB.length;i++){
        if(charCountB[i] === "B"){
            count++;
        }
    }
    return count;
}

function countChar(charCount,character){
    for(let i=0;i<charCount.length;i++){
        if(charCount[i]===character){
            counter++;
        }
    }
    return counter;
}
console.log(countB("BBBC"));
console.log(countChar("kakkerlak", "k"));