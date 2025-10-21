console.log('js está aqui')
console.log(' SE VOCÊ VIU ISSO É PQ O JS DEU CERTO')
const menuItens = document.querySelectorAll('.sub_item > a');
menuItens.forEach(item => {
item.addEventListener('click', function(event){
event.stopPropagation();
event.preventDefault();
    const pai = this.parentElement;
    document.querySelectorAll('.sub_item').forEach(outroItem => {
        if (outroItem !== pai){
            outroItem.classList.remove('ativo');
        }

    });
    pai.classList.toggle('ativo')
 });
});
document.addEventListener('click', function () {
    document.querySelectorAll('.sub_item').forEach(item => {
        item.classList.remove('ativo');
    });
});
const path = location.pathname;
document.querySelectorAll('.sub_menu a').forEach(link => {
    if (link.getAttribute('href') === path) {
        link.closest('.sub_item').classList.add('ativo')
    }
})
document.addEventListener('DOMContentLoaded', () => {
 const wrapper = document.querySelector('.slider_wrapper');
 const slide = document.querySelectorAll('.slide');
 const proximo_btn = document.querySelector('.proximo_btn');
 const antes_btn = document.querySelector('.antes_btn');
 const paginacao = document.querySelector('.slider_paginacao');

 let currentIndex = 0;
 const total_slide = slide.length;

 slide.forEach((slide, index) => {
    const bar = document.createElement ('div');
    bar.classList.add('paginacao_bar')
    if (index === 0) {
        bar.classList.add('ativo')
    }
    bar.addEventListener('click', () => {
        goToSlide(index)
    });
    paginacao.appendChild(bar);
 });

 const paginacaoBars = document.querySelectorAll('.paginacao_bar')

 function goToSlide(index){
    if (index < 0){
        currentIndex = total_slide - 1;
    } else if (index >= total_slide){
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    paginacaoBars.forEach((bar, barIndex) =>  {
        if (barIndex === currentIndex) {
            bar.classList.add('ativo');
        } else {
            bar.classList.remove('ativo');
        }
    });
 }

 proximo_btn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
 });

 antes_btn.addEventListener('click', () =>{
    goToSlide(currentIndex - 1);
 });
 setInterval (() => {
    goToSlide(currentIndex + 1);
 }, 7000);
});