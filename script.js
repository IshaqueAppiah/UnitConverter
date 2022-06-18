/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let Volume_el = document.getElementById('volume1');
let User_input = document.getElementById('rectangle');
let Mass_el =document.getElementById('mass1');
let Length_el =document.getElementById('length1');
let TopBtn_el =document.getElementById('top-btn');

TopBtn_el.addEventListener('click', function(input){
    
     input= User_input.value   
      let meter=(input* 3.281).toFixed(2);
      let feet =(input/3.281).toFixed(2);
      let liters =(input*0.264).toFixed(2);
      let gallons= (input/0.264).toFixed(2);
      let kilogram= (input*2.204).toFixed(2);
      let pounds =(input/2.204).toFixed(2);

      Length_el.innerHTML=` ${input} meters = ${meter} feet | ${input} feet = ${feet} meters`
      Volume_el.innerHTML=` ${input} liters = ${liters} gallons | ${input} gallons = ${gallons} liters`
      Mass_el.innerHTML=`${input} kilos = ${kilogram} pounds | ${input} pounds = ${pounds} kilos`

    

    
    }

)