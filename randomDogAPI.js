
var btn = document.querySelector("#btn");
var imageSrc = document.querySelector('#photo')


//listen for click
btn.addEventListener("click", function(){
    console.log('clicked');
    var XHR = new XMLHttpRequest();

     XHR.onreadystatechange = function () {
         if(XHR.readyState == 4 && XHR.status == 200){
         var url = JSON.parse(XHR.responseText).message;

         imageSrc.src = url;        
         }
     }


    XHR.open('GET', "https://dog.ceo/api/breeds/image/random");
    XHR.send();

})