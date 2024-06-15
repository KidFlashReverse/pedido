const dateQuantity = 1;
const iframe = document.getElementById('iframe');

iframe.muted = true;

function onHover(block){
    const b = document.getElementById(block);

    b.style.display = 'flex';
}

function onLeave(block){
    const b = document.getElementById(block);

    b.style.display = 'none';
}