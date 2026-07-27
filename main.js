let select1 = document.getElementById('select1');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');
let btn = document.getElementById('btn');
let h4 = document.getElementById('h4');
let span1 = document.getElementById('span1');
let span2  = document.getElementById('span2');
let span3 = document.getElementById('span3')
function c(){
    setTimeout(() => {
        h4.innerText = "";
    }, 1000);
}
btn.onclick = function(){
    if(select1.value === ""){
        h4.innerText = 'Please Select gender';
        c();
        return;
    }
    if(inp1.value === ""){
        h4.innerText = 'Please Enter your age';
        c();
        return;
    }
    if(inp2.value === ""){
        h4.innerText = 'Please Enter your weight';
        c();
        return;
    }
    if(inp3.value === ""){
        h4.innerText = 'Please Enter your height';
        c();
        return;
    }
    if(select2.value === ""){
        h4.innerText = 'Please Choose your daily activity level';
        c();
        return;
    }
    if(select3.value === ""){
        h4.innerText = 'Please Choose a physical goal';
        c();
        return;
    }
    acount();
    setTimeout(() => {
        select3.value = '';
        select1.value = '';
        select2.value = '';
        inp1.value = '';
        inp2.value = '';
        inp3.value = '';
    }, 1000);
}
function acount(){
    let bmr;
    let TDEE;
    let calories;
    if(select1.value === 'male'){
        bmr = (Number(inp2.value) * 10) + (Number(inp3.value) * 6.25) - (Number(inp1.value) * 5) + 5;
    }
    else{
        bmr = (Number(inp2.value) * 10) + (Number(inp3.value) * 6.25) - (Number(inp1.value) * 5) - 161;
    }
    console.log(bmr)
    if(select2.value === "idle"){
        TDEE = bmr * 1.2;
    }
    if(select2.value === 'mild'){
        TDEE = bmr * 1.375;
    }
    if(select2.value === "mod"){
        TDEE = bmr * 1.55;
    }
    if(select2.value === "high"){
        TDEE = bmr * 1.725;
    }
    console.log(Math.round(TDEE))
    if(select3.value === "loss"){
        calories = TDEE -500;
    }
    if(select3.value === "mai"){
        calories = TDEE;
    }
    if(select3.value === 'gain'){
        calories = TDEE + 500;
    }
    console.log(calories)
    span1.innerText = 'Total calories: ' +Math.round(calories) + ' g';
    span2.innerText = 'basal metabolic rate: ' + Math.round(bmr) +" g";
    span3.innerText = 'Need with activity: ' + Math.round(TDEE) + " g";
}