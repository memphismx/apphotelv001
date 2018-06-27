var hotel = {
	principal: function(){
		document.addEventListener("deviceready",hotel.inicio,false);
	},
	inicio: function(){

		 $("#btn-inicio-sesion").click(hotel.iniciarSesion);
		 $("#btn-registrar").click(hotel.registro);
		 $("#btn-cerrar-sesion").click(hotel.cerrarSesion);
	},

	cerrarSesion:function(){
		firebase.auth().signOut().then(function() {
			window.location.href = "#inicio";			// body...
		})
		.catch(function(error){
			alert(error);
		});
	},

	registro:function(){
		var nombre = $("#nombre-registro").val();
		var telefono = $("#telefono-registro").val();
		var email = $("#email-registro").val();
		var password = $("#password-registro").val();
		var password2 = $("#password2-registro").val();
		try{
			if(nombre==""){
				throw new Error("el nombre no es valido");
			}
			if(telefono==""){
				throw new Error("el telefono no es valido");
			}
			if(email==""){
				throw new Error("el email no es valido");
			}
			if(password=="" || password2 == ""){
				throw new Error("el password no es valido");
			}

			
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(function() {
					var user = firebase.auth().currentUser;
					console.log(user);
					user.updateProfile({
			  			displayName: nombre,
			  			phoneNumber: telefono
			  			
					}).then(function() {
						window.location.href = "#main";
			  // Update successful.
					}).catch(function(error) {
			  // An error happened.
			  			alert(error);
					});

				}).catch(function(error){
					alert(error);
				});

		}catch(error){
			alert(error);	
			}	


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
			
			if(email== "Rigo" && password == "123"){
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
//hotel.principal();

//Metodo para desarrollar
hotel.inicio()