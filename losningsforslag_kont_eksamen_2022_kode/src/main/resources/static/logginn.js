// Ikke spurt etter i eksamensoppgaven, kun for å teste serverkoden for oppgave 7

function logginn() {
    bruker = {
        "navn": $("#navn").val(),
        "passord": $("#passord").val()
    };

    $.post("logginn", bruker, function() {
        $("#melding").html("Innloggingsforsøk utført!");

        $("#navn").val("");
        $("#passord").val("");
    });
}