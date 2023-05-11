$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 12345-1234'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.123.123-12'
    })

    $('#cep').mask('00000-000', {
        placeholder: '12345-123'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                maxlength: 35,
                minlength: 5
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: {
                required: 'Por favor, digite seu nome',
                minlength: jQuery.validator.format("O número minimo de caracteres é {0}"),
                maxlength: jQuery.validator.format("O número máximo de caracteres é {0}")
            },
            email: {
                required: 'Por favor, digite seu e-mail',
                email: 'Por favor, digite uma forma de e-mail valida'
            },
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, digite o seu cpf',
            endereco: 'Por favor, digite o seu endereço',
            cep: 'Por favor, digite o seu CEP'
        }
    })
})