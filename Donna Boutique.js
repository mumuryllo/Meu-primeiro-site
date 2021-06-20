const elementos=document.querySelectorAll('[data-anima');
const animaçãoClass= 'animação';
function animaScroll(){
const TopoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3/4)); 
elementos.forEach(function(elemento){
    if(TopoPaginaNaJanela> elemento.offsettop){
    elemento.classList.add(animaçãoClass);    
    }else{
        elemento.classList.remove(animaçãoClass);     
    }    
});   
}

if(elementos.length){
window.addEventListener('scroll', function(){
animaScroll();    
})    
}