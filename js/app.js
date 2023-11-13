let incrementbtn = document.querySelector(`#increment`);
let decrementbtn = document.querySelector(`#decrement`);
let input = document.querySelector(`input`);

incrementbtn.addEventListener(`click`,function(){
    input.value++;
})
decrementbtn.addEventListener(`click`,function(){
    if(input.value > 1){
        input.value--;
    }
})