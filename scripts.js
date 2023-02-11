var menu = null;
var menuShowing = false;
function setVars(){
    menu = document.getElementById("menu");
}
function toggleMenu(){
    menuShowing = menuShowing != true;
    if(menuShowing){
        menu.classList.add("show-menu");
    }else if(!menuShowing){
        menu.classList.remove("show-menu");
    }
}
