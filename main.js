window.onload = function() {

    const simbolos = ['&#9830;','&#9829;','&#9827;','&#9824;'];
    const colors = ['red','red','black','black'];
    const numLetras = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
    
    let randNumCarta = parseInt(Math.random() * (numLetras.length));
    let randSimbolo = parseInt(Math.random() * (simbolos.length));
    
    
    function crearCarta(){
        //accediendo a div de carta.
        
        let card = document.querySelector('.card');
        card.className = 'card';
        
        //creando div de simbolo Superior.
        let simbUp = document.createElement('div');
        simbUp.className = 'simbUp';
        card.appendChild(simbUp);
        //creando span de simbolo superior.
        let spanUp= document.createElement('span');
        spanUp.innerHTML = simbolos[randSimbolo];
        spanUp.style.color = colors[randSimbolo];
        simbUp.appendChild(spanUp);
        
        //creando div de numero.
        let divNumero = document.createElement('div');
        divNumero.className = 'numero';
        card.appendChild(divNumero);
        
        //creando etiqueta de parrafo para numero.
        let parrafo = document.createElement('p');
        parrafo.innerHTML = numLetras[randNumCarta];
        parrafo.style.color = colors[randSimbolo];
        divNumero.appendChild(parrafo);
        
        //creando div de simbolo Superior.
        let simbDow = document.createElement('div');
        simbDow.className = 'simbDow';
        card.appendChild(simbDow);
        //creando span de simbolo superior.
        let spanDow= document.createElement('span');
        spanDow.innerHTML = simbolos[randSimbolo];
        spanDow.style.color = colors[randSimbolo];
        simbDow.appendChild(spanDow);
        
        return card;
    }
    crearCarta()
};

    
    
    
    
    
    


