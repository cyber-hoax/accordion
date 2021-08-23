


var acc = document.getElementsByClassName("items");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if(this.classList.contains('open')){
        this.classList.remove('open')
    }else{
        this.classList.add('open')
    }
    console.log('hello')
  });
}