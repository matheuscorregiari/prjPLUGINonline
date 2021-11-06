// This is a JavaScript file

$(document).on("click","#alerta",function(){
  function teste(){
    alert ("agora azedou mesmo");
  };
  navigator.notification.alert("deu ruim fiote !! ", teste)
});

$(document).on("click","#confirm", function(){
  function retorno(buttonIndex){
    if(buttonIndex == '1'){
      navigator.app.exitApp();
    }
    if(buttonIndex == '2'){
      alert("entao fica")
    }
  };
navigator.notification.confirm(
  "tu é abestado",
  retorno,
  "ande logo",
  ['vaza','fica']

);
});