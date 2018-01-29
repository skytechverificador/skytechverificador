

function validaCNPJ() {

    var cliente = [
    "09032501000124", 
    "09032501000124",
    "01407362127"
        
    ];




    var cnpj = document.getElementById('cnpj').value;

    if ( cnpj.length > 0) {

        var valida = cliente.indexOf(cnpj);

         var clientes =  cnpj[valida];
    	
        if (valida != -1 ) {

            var informa = "O CNPJ"+clientes+"Está em Implantação";
            document.getElementById('cnpj').style.color = "red";
            document.getElementById('resultado').style.color = "red";
            document.getElementById('cnpj').style.border = "3px solid red";
            document.getElementById("resultado").innerHTML = " [ IMPLANTAÇÃO ]";

        }else {
             var informa = "O CNPJ não está em implantação.";
        	document.getElementById('cnpj').style.color = "green";
            document.getElementById('resultado').style.color = "green";
            document.getElementById('cnpj').style.border = "3px solid green";
            document.getElementById("resultado").innerHTML = " [ SUPORTE ]";
        }

    } else {

        alert("Digite o CNPJ para verificar.");
    }
    
   
}
