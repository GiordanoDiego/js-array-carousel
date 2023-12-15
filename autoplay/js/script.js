/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/

// INSERIRE IMG DENTRO DIV IMG-CONTAINER
const imgContainer = document.querySelector('.img-container');
console.log('imgContainer', imgContainer, typeof imgContainer);

// creo un array che contiene tutte le stringhe da inserire nell'html
const arrayImgHTML = [
    '<div><img class="show-img" src="./img/01.webp" alt=""></div>',
    '<div><img class="" src="./img/02.webp" alt=""></div>',
    '<div><img class="" src="./img/03.webp" alt=""></div>',
    '<div><img class="" src="./img/04.webp" alt=""></div>',
    '<div><img class="" src="./img/05.webp" alt=""></div>'
]
console.log('arrayImgHTML Lenght', arrayImgHTML.length, typeof arrayImgHTML);

 //creo un ciclo for che inserisce le stringhe dell'array dentro l'html

 for(let i=0; i < arrayImgHTML.length; i++){
     imgContainer.innerHTML += arrayImgHTML[i];
 }

/* assegno una funzione ai bottoni, ovvero: cerco di assegnare la classe "d-block" alle varie classi
    cliccando sulla freccia 
*/
const leftButton = document.getElementById('left_button');
console.log('leftButton', leftButton, typeof leftButton);

const rightButton = document.getElementById('right_button');
console.log('rightButton', rightButton, typeof rightButton);



// implemento tasto right 
let  i = 1;
rightButton.addEventListener('click', function(){
    // assegnare la classe show-img all'elemento iesimo
    let noPropertyImg = document.querySelector(`.img-container >*:nth-child(${i}) img`); 
    console.log('noPropertyImg', noPropertyImg, typeof propenoPropertyImgrtyImg);

    noPropertyImg.className = " ";
    console.log('noPropertyImg', noPropertyImg, typeof noPropertyImg);

    i++;
    if (i > arrayImgHTML.length){
        i=1;
    }

    let propertyImg = document.querySelector(`.img-container >*:nth-child(${i}) img`); 
    propertyImg.className = "show-img";
    console.log('propertyImg', propertyImg, typeof propertyImg);
    

    console.log('decremento', i, typeof i);
    
})

// implemento tasto left 

leftButton.addEventListener('click', function(){
    // assegnare la classe show-img all'elemento iesimo
    let noPropertyImg = document.querySelector(`.img-container >*:nth-child(${i}) img`); 
    console.log('noPropertyImg', noPropertyImg, typeof propenoPropertyImgrtyImg);

    noPropertyImg.className = " ";
    console.log('noPropertyImg', noPropertyImg, typeof noPropertyImg);

    i--;
    console.log('decremento', i, typeof i);
    if (i == 0){
        i=arrayImgHTML.length;
        console.log('i dopo if', i, typeof i);

    }

    let propertyImg = document.querySelector(`.img-container >*:nth-child(${i}) img`); 
    propertyImg.className = "show-img";
    console.log('propertyImg', propertyImg, typeof propertyImg); 
    
})


let clock = setInterval(autoPlayImg, 3000); // faccio scorrere le img ogni 3 secondi
//selezione botton stop
const stopButton = document.getElementById('stop_button');
console.log('stopButton', stopButton, typeof stopButton);
const playButton = document.getElementById('play_button');
console.log('playButton', playButton, typeof playButton);

// stoppo l'intervallo con il click del pulsante stop
stopButton.addEventListener('click', function(){
    if(clock != null){
    clearInterval(clock);
    clock = null;
    }
})

playButton.addEventListener('click', function(){
    if(clock == null){
        clock = setInterval(autoPlayImg, 3000); 
    }
})

// FUNZIONI
function autoPlayImg (){
    let noPropertyImg = document.querySelector(`.img-container >*:nth-child(${i}) img`); 
    console.log('noPropertyImg', noPropertyImg, typeof propenoPropertyImgrtyImg);

    noPropertyImg.className = " ";
    console.log('noPropertyImg', noPropertyImg, typeof noPropertyImg);

    i++;
    if (i > arrayImgHTML.length){
        i=1;
    }

    let propertyImg = document.querySelector(`.img-container >*:nth-child(${i}) img`); 
    propertyImg.className = "show-img";
    console.log('propertyImg', propertyImg, typeof propertyImg);
    

    console.log('decremento', i, typeof i);
    
}