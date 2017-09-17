var hamburger=document.querySelector(".overlay");

function openMenu()
{
    if(hamburger.className.match('overlay')){
        hamburger.className='opened';
        var menuOpen=document.querySelector(".opened").style.width="100%";
    }
    else{
        hamburger.className='overlay';
    }
    
}
hamburger.addEventListener('click',openMenu, false);