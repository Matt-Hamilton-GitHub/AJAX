
var btn = document.querySelector("#btn");
var span = document.querySelector("#price")

btn.addEventListener('click', function (){

    var XML = new XMLHttpRequest();

    XML.onreadystatechange = () => {

        if(XML.readyState == 4 && XML.status == 200){

          var data = JSON.parse(XML.responseText)
            // console.log(data);
         
         span.innerHTML = data.bpi.USD.code + ' ' + data.bpi.USD.rate;
  
        }else{
            console.log('error ' + XML.statusText);
        }
    }

    XML.open('GET'," https://api.coindesk.com/v1/bpi/currentprice.json" )
    XML.send()


})


