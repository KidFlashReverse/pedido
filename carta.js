const pages = document.querySelectorAll('.page');
let currentPage = 0;

function passar() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-360deg)';
        currentPage++;
        pages[currentPage].style.transform = 'rotateY(0deg)';
        pages[currentPage].style.cssText = 'z-index: 2;';
    }
}

function voltar(){
    if (currentPage < pages.length && currentPage != 0) {
        pages[currentPage - 1].style.transform = 'rotateY(360deg)';
        pages[currentPage].style.cssText = 'z-index: 1;';
        currentPage--;
        pages[currentPage + 1].style.transform = 'rotateY(0deg)';
        pages[currentPage].style.cssText = 'z-index: 2;';
    }
}
