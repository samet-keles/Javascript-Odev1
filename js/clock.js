let input = prompt("Adınız Nedir ?")
let myName = document.querySelector("#myName")
myName.innerHTML = input;
myName.classList.add('text-info')

function showTime() {
    var now = new Date(); 
    document.querySelector ("#myClock").innerHTML=`${now}`;
}
setInterval(function(){showTime();},1000);
 