

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = () => {

    console.log("ready state is ..." + XHR.readyState);
    if(XHR.readyState == 4){
        if(XHR.status === 200){
            console.log(XHR.responseText);
        }
      else{
          console.log(XHR.status + 'Request error');
      }
    }

}


XHR.open('GET', "https://api.github.com/zen");
XHR.send()

console.log(XHR);

