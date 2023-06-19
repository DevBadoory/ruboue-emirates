window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 80;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    }
}






const div = document.getElementById('#rounded-div');

window.addEventListener('scroll', () => {
const scrollHeight = div.scrollHeight;
const scrollTop = window.pageYOffset;
const height = Math.max(0, scrollHeight - scrollTop);
div.style.height = `${height}px`;
});