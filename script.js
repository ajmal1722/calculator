function cickButton(val){
    document.getElementById('displayScreen').value =document.getElementById('displayScreen').value + val
}
function clearScreen(){
    document.getElementById('displayScreen').value = "";
}
function equalclick(){
    var text = document.getElementById('displayScreen').value 
    var result = eval(text)
    document.getElementById('displayScreen').value =result
}
