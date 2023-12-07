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
    '<img class="d-block" src="./img/04.webp" alt="">',
    '<img class="" src="./img/01.webp" alt="">',
    '<img class="" src="./img/02.webp" alt="">',
    '<img class="" src="./img/03.webp" alt="">',
    '<img class="" src="./img/05.webp" alt="">'
]
console.log('arrayImgHTML', arrayImgHTML, typeof arrayImgHTML);

// creo un ciclo for che inserisce le stringhe dell'array dentro l'html

for(let i=0; i < arrayImgHTML.length; i++){
    imgContainer.innerHTML += arrayImgHTML[i];
}

