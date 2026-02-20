// HALO ANAK TOLOL, PASTI MAU NYOLONG CODE

function fx1(){
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

function fx2(){
    document.body.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

function fx3(){
    document.body.style.fontSize = `${Math.floor(Math.random()*20 + 12)}px`;
}

function fx4(){
    let div = document.createElement('div');
    div.style.width = `${Math.floor(Math.random()*50 + 10)}px`;
    div.style.height = `${Math.floor(Math.random()*50 + 10)}px`;
    div.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    div.style.position = 'absolute';
    div.style.top = `${Math.floor(Math.random()*window.innerHeight)}px`;
    div.style.left = `${Math.floor(Math.random()*window.innerWidth)}px`;
    document.body.appendChild(div);
}

function fx5(){
    document.body.style.border = `${Math.floor(Math.random()*10)}px solid rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

function fx6(){
    document.body.style.margin = `${Math.floor(Math.random()*50)}px`;
}

function fx7(){
    document.body.style.padding = `${Math.floor(Math.random()*50)}px`;
}

function fx8(){
    document.body.style.borderRadius = `${Math.floor(Math.random()*50)}px`;
}

function fx9(){
    document.body.style.boxShadow = `${Math.floor(Math.random()*20)}px ${Math.floor(Math.random()*20)}px ${Math.floor(Math.random()*50)}px rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},0.7)`;
}

function fx10(){
    document.body.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`;
}

fx1(); fx2(); fx3(); fx4(); fx5(); fx6(); fx7(); fx8(); fx9(); fx10();
