// SERVICEWORKER

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Registro de service worker exitoso', reg))
        .catch(err => console.warn('Error con el registro del service worker', err))
}

// AUTOCOMPLETE

$(document).ready(function () {
    $('#cnpjx').keyup(function () {
        var term = $(this).val();

        $.ajax({
            url: 'conexion.php',
            type: 'GET',
            data: { term: term },
            dataType: 'json',
            success: function (response) {
                $('#sugerencias').empty();
                for (var i = 0; i < response.length; i++) {
                    $('#sugerencias').append('<p>' + response[i] + '</p>');
                }
            }
        });
    });

    $(document).on('click', '#sugerencias p', function () {
        var suggestion = $(this).text();
        $('#cnpjx').val(suggestion);
        $('#sugerencias').empty();
    });
});