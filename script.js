
window.addEventListener('scroll',()=>{
document.querySelector('.header').style.background =
window.scrollY > 50 ? 'rgba(0,0,0,.9)' : 'rgba(0,0,0,.65)';
});
