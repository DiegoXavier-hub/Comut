let screenWidthDevice = window.innerWidth
var checkbox = document.getElementById("menu")

if(screenWidthDevice < 800){
    checkbox.checked = false
}else{
    checkbox.checked = true
}