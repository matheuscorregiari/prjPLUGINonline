const Actions = {
  days: document.getElementById("days"),
  painter: document.getElementById("painter"),
  scholl: document.getElementById("scholl"),
  painterTwo: document.getElementById("painter2"),
  schollTwo: document.getElementById("scholl2"),

  
    redeemValues(){
      return {
          days: this.days.value,
          painter: this.painter.value,
          scholl: this.scholl.value,
          painterTwo: this.painterTwo.value,
          schollTwo: this.schollTwo.value
        }
    },

    validation(){
      let { days, painter, scholl, painterTwo, schollTwo }= this.redeemValues();

      if(days === "" || painter === "" || scholl === "" || painterTwo === "" || schollTwo === "" ){
        throw new Error("Preencha todos os campos");
      }

      days= parseInt(days);
      painter= parseInt(painter);
      scholl= parseInt(scholl);
      painterTwo= parseInt(painterTwo);
      schollTwo= parseInt(schollTwo);

      return {
        days, painter, scholl, painterTwo, schollTwo
      }


    },

    
    calculation(){
      const {days, painter, scholl, painterTwo, schollTwo }= this.validation();

      const a = painter*schollTwo;
      const b = painterTwo*scholl;
      const c = b * days;
      const result = c / a; 

      return result;
    },

     
     horse(event){
        event.preventDefault();

        try{
          const result = this.calculation();

          alert(result);
        }catch(error){
          alert(error.message)
        }

     },

    simpleCalculation(){

    }  

}

const simpleAction ={
  days: document.getElementById("days"),
  painter: document.getElementById("painter"),
  scholl: document.getElementById("scholl"),

  rescueValues(){
    return {
          days: this.days.value,
          painter: this.painter.value,
          scholl: this.scholl.value,
         
        }
    },

  validate(){
      let { days, painter, scholl, painterTwo, schollTwo }= this.redeemValues();

      if(days === "" || painter === "" || scholl === ""){
        throw new Error("Preencha todos os campos");
      }

      days= parseInt(days);
      painter= parseInt(painter);
      scholl= parseInt(scholl);

      return {
        days, painter, scholl
      }
  },

  calculate(){
      const {days, painter, scholl}= this.validation();

      const a = scholl * days;
      const b = days * painter;
      const c = b * days;
      const result = c / a;

      return result;
    },


  }