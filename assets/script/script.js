

function validaCNPJ() {

    var cliente = [];

        cliente [0] = "09032501000124";
        cliente [1] = "08783112000178";
        cliente [2] = "15564962000140";
        cliente [3] = "22778404000224";
        cliente [4] = "28532602000109";
        cliente [5] = "15008575000128";
        cliente [6] = "15008575000128";
        cliente [7] = "28857581000100";
        cliente [8] = "915277247";
        cliente [9] = "28037351000196";
        cliente [10] = "07919419000190";
        cliente [11] = "28037351000196";
        cliente [12] = "28266928000131";
        cliente [13] = "28646687000156";
        cliente [14] = "02335139000111";
        cliente [15] = "27398578000102";
        cliente [16] = "05476160000125";
        cliente [17] = "29073994000158";
        cliente [18] = "29234965000120";
        cliente [19] = "18127002000101";
        cliente [20] = "12502891000163";
        cliente [21] = "22855589000142";


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