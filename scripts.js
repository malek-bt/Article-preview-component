function share () {
    if(window.matchMedia("(max-width:700px)").matches){
        document.querySelector('.links').style.visibility = 'hidden';
        document.querySelector('.active-links').style.visibility = 'visible';
    } else {
        document.querySelector('.links').style.visibility = 'visible';
        document.querySelector('.active-links').style.visibility = 'visible';
    }
    
}