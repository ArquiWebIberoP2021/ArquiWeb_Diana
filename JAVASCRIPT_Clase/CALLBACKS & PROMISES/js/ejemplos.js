//Callback - Es una función que es utilizada como parámetro en otra función


//-> Creación de un Callback
function callBack(){
    console.log("Yo soy un Callback");
}

function mensaje(fn){
    fn();
}

mensaje(callBack);

// -> Piramide de Doom


function apiR(fn, succesCallback, errorCallback) {
    setTimeout(function(){
        //Si es exitosa
        succesCallback(fn);
    },1000);
}


apiR('PRIMERA', function (response) {
    console.log(`${response} llamada realizada`);
    apiR('SEGUNDA', function (response) {
        console.log(`${response} llamada realizada`);
        apiR('TERCERA', function (response) {
            console.log(`${response} llamada realizada`);
            apiR('CUARTA', function (response) {
                console.log(`${response} llamada realizada`);
                apiR('QUINTA', function (response) {
                    console.log(`${response} llamada realizada`);
                    apiR('SEXTA', function (response) {
                        console.log(`${response} llamada realizada`);
                      }, function (error) {
                        console.log(error);
                      });
                  }, function (error) {
                    console.log(error);
                  });
              }, function (error) {
                console.log(error);
              });
          }, function (error) {
            console.log(error);
          });
      }, function (error) {
        console.log(error);
      });
  }, function (error) {
    console.log(error);
  });


  