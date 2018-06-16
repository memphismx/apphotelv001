var hotel = {
	principal: function(){
		document.addEventListener("deviceready",this.inicio,false);
	},
		inicio: function(){

		 $("#btn-inicio-sesion").click(this.iniciarSesion);
	},
	iniciarSesion:function(){
		var email = $("#email-inicio").val();
		var password = $("#password-inicio").val();

		try{
			if(email==""){
				throw new Error("el email no es valido");

			}
			if(password==""){
				throw new Error("el password no es valido");

			}
			
			if(email== "rrodriguez@atm.com.mx" && password == "123"){
				window.location.href = "#main";

			} else{
				throw new Error("no existe tu cuenta intentalo de nuevo");
			}

		}catch(error){
			alert(error);

		}
	}
} ;

// Metodo para Compilar
hotel.principal();

//Metodo para desarrollar
//hotel.inicio()