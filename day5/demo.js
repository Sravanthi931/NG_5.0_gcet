let counternumber = document.getElementById("countervalue");
let incrementbutton = document.getElementById("Increment");
let decrementbutton = document.getElementById("Decrement");
let reset = document.getElementById("reset");

let count =0;

incrementbutton.addEventListener("click",function(){
    count = count+1;
    counternumber.textContent=count;
});

decrementbutton.addEventListener("click",function(){
    count = count-1;
    counternumber.textContent=count;
});

reset.addEventListener("click",function(){
    count = 0;
    counternumber.textContent=count;
})