$(function() {
    hentAllePakker()
});

// Oppgave 3

// påkrevde endringer i HTML-koden fra oppgave 2:
// - legge til onchange(...)-funksjoner for hvert input-felt
// - legge til onclick(...)-funksjon for knappen
// - importer dette scriptet <script src="script.js"></script>

function validerLid(lid) {
    if(lid) {
        $("#feilLid").html("");
        return true;
    } else {
        $("#feilLid").html("Fyll ut LID");
        return false;
    }
}

function validerEier(eier) {
    let regex = /^[A-ZÆØÅa-zæøå. -]{2,50}$/;

    if(regex.test(eier)) {
        $("#feilEier").html("");
        return true;
    } else {
        $("#feilEier").html("Bruk kun store og små bokstaver, og ., - og mellomrom");
        return false;
    }
}

function validerVekt(vekt) {
    if(vekt) {
        $("#feilVekt").html("");
        return true;
    } else {
        $("#feilVekt").html("Fyll ut vekt");
        return false;
    }
}

function validerVolum(volum) {
    if(volum) {
        $("#feilVolum").html("");
        return true;
    } else {
        $("#feilVolum").html("Fyll ut volum");
        return false;
    }
}

function validerPakke(pakke) {
    lidOK = validerLid(pakke.LID);
    eierOK = validerEier(pakke.eier);
    vektOK = validerVekt(pakke.vekt);
    volumOK = validerVolum(pakke.volum);

    if(lidOK && eierOK && vektOK && volumOK) {
        return true;
    } else {
        return false;
    }
}

function registrerPakke() {
    let pakke = {
        "LID": $("#lid").val(),
        "eier": $("#eier").val(),
        "vekt": $("#vekt").val(),
        "volum": $("#volum").val()
    };

    if(validerPakke(pakke)) {
        $.post("lagrepakke", pakke, function() {
            $("#melding").html("Pakke ble lagret!");

            $("#lid").val("");
            $("#eier").val("");
            $("#vekt").val("");
            $("#volum").val("");
        });
    } else {
        $("#melding").html("Fyll ut alle felter og rett alle feil i skjemaet før innsending");
    }
}

// Oppgave 6
function hentAllePakker() {
    $.get("hentallepakker", function(pakker) {
        let utskrift =
            "<table><tr><th>LID</th><th>Eier</th><th>Vekt (kg)</th><th>Volum (m^3)</th></tr>";

        for(let pakke of pakker) {
            utskrift +=
                "<tr><td>" + pakke.lid + "</td><td>" + pakke.eier + "</td><td>" + pakke.vekt + "</td><td>" + pakke.volum + "</td></tr>";
        }

        utskrift += "</table>";

        $("#pakkeliste").html(utskrift);
    });
}
