const dateQuantity = 1;

function onHover(block){
    const b = document.getElementById(block);

    b.style.display = 'block';
}

function onLeave(block){
    const b = document.getElementById(block);

    b.style.display = 'none';
}