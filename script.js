window.addEventListener('scroll',
function(){
    let navbar= document.getElementById('nav');
    if (window.pageYOffset >=222){
        navbar.classList.add('sticky');
        console.log('gfcjdg')
    }
    else{navbar.classList.remove('sticky')}
}


)