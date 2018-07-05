var hotel = {
	principal: function(){
		document.addEventListener("deviceready",hotel.inicio,false);
	},
	inicio: function(){

		 $("#btn-inicio-sesion").click(hotel.iniciarSesion);
		 $("#btn-registrar").click(hotel.registro);
		 $("#btn-cerrar-sesion").click(hotel.cerrarSesion);
		 $("#btn-reservar").click(hotel.reservar);

	},

	historial:function(){
		var historial = firebase.database();
		var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
		starCountRef.on('value', function(snapshot) {
  			updateStarCount(postElement, snapshot.val());
});
  		alert(username)
  // ...
});


	reservar:function(){
		var nombre = $("#reservar-nombre").val();
		var tipo = $("#reservar-tipo").val();
		var personas = $("#reservar-personas").val();
		var fechaE = $("#reservar-fechaE").val();
		var fechaS = $("#reservar-fechaS").val();
		
		try{
			if(nombre==""){
				throw new Error("nombre está vacio");
			}
			if(fechaE==""){
				throw new Error("No hay fecha de entrada");
			}
			if(fechaS==""){
				throw new Error("No hay fecha de salida");
			}

		/*	if(!$("#reservar-check").prop("cheked")){
				throw new Error("tienes que aceptar los terminos");
			}

*/
			var reservacion = {
				name : nombre,
				type : tipo,
				persons : personas,
				datein : fechaE,
				dateout : fechaS
			};
			var database = firebase.database();
			var userId = firebase.auth().currentUser.uid;
			database.ref("reservations/"+userId).push(reservacion);

		}catch(error){
			alert(error);	
		}	
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
			
		firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then(function(){
				var user=firebase.auth().currentUser;
				$("#main-username").html(user.displayName);
				window.location.href="#main";
			})
			.catch(function(error) {
  	// Handle Erroalertrs here.
  				alert(error);
 		  // ...
		});

		}catch(error){
			alert(error);
		}
	}
} ;



// Metodo para Compilar
//hotel.principal();

//Metodo para desarrollar
hotel.inicio()