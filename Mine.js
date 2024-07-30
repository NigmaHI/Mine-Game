

let x = Math.floor((Math.random() * 9) + 1);
console.log(x);

let c = 0;

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

one.addEventListener("click",()=>{
    console.log("One Clicked");
    if(x==1){
        one.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        one.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

two.addEventListener("click",()=>{
    console.log("Two Clicked");
    if(x==2){
        two.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        two.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

three.addEventListener("click",()=>{
    console.log("Three Clicked");
    if(x==3){
        three.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        three.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

four.addEventListener("click",()=>{
    console.log("Four Clicked");
    if(x==4){
        four.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        four.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

five.addEventListener("click",()=>{
    console.log("five Clicked");
    if(x==5){
        five.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        five.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

six.addEventListener("click",()=>{
    console.log("Six Clicked");
    if(x==6){
        six.classList.add("red");
        setTimeout(() => {
                alert("You Lose!");
                location.reload();
        }, 100);
    }
    else{
        six.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

seven.addEventListener("click",()=>{
    console.log("seven Clicked");
    if(x==7){
        seven.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        seven.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

eight.addEventListener("click",()=>{
    console.log("Eight Clicked");
    if(x==8){
        eight.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        eight.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})

nine.addEventListener("click",()=>{
    console.log("Nine Clicked");
    if(x==9){
        nine.classList.add("red");
        setTimeout(() => {
            alert("You Lose");
            location.reload();
        }, 100);
    }
    else{
        nine.classList.add("green");
        c++;
        if(c>7){
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 0);
        }
    }
})


