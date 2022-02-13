let buton = (document.getElementById('check'));
let input = (document.getElementById('değer'));
let total = document.getElementById('total')
let numbers = document.getElementById('numbers')
let list = [];
let number = Math.floor(Math.random() * 100);
buton.addEventListener('click',()=>{
    list.push(input.value)
    if(input.value == number ){
        alert(`Congratulations, you got it right`);
    }else if(input.value < number){
        alert(`Enter a number between '${list[0]}' and 100.`);
    }else if(input.value > number){
        alert(`Enter a number between  '${list[0]}' (the lowest guess closest to your number) to, '${list[list.length-1]}' ,(the closest big guess to your number).`);
    };
    if(list.length == 1){
        total.innerHTML -= 1

    }else if(list.length == 2){
        total.innerHTML -= 1

    }else if(list.length == 3){
        total.innerHTML -= 1
    }else{
        numbers.innerHTML = "Your right is over 0"
        alert('Your right is over');
        buton.style.display = "none"
    }
    }
);


