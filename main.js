// Crea un file html con le seguenti caratteristiche:

// un input per il titolo
// una textarea per inserire un paragrafo
// un bottone per creare l’articolo
// Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input

// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN




// let date = new Date();

// let formatDate = date.toLocaleDateString()



// EXTRA:

// fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
// fai in modo che, una volta creato l’articolo, gli input vengano puliti

let wrapper = document.querySelector('#wrapper')
let titolo = document.querySelector('#titolo')
let txtArea = document.querySelector('#txtArea')
let btnCreaArt = document.querySelector('#btnCreaArt')
let wrapper2 = document.querySelector('#wrapper2')

btnCreaArt.addEventListener('click', ()=>{
    let newDiv = document.createElement('div')
    let date = new Date()
    let formatDate = date.toLocaleDateString('Italy')

    if(titolo.value == '' || txtArea.value == ''){
        alert('compila tutti i campi che trovi')
    }
    else   {newDiv.innerHTML= `
        <h1 class="titolo">${titolo.value}</h1> 
        <p class="paragrafo">${txtArea.value}</p>
        <p class="data">${formatDate}</p>
        ` 
        titolo.value = "", txtArea.value = ""

        
    }
     wrapper2.appendChild(newDiv)
        })