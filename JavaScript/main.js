let resultado = $('#tela-calcu').val()
//criando total
let total = 0

//Botões clicar número
$('#0').on('click',()=>{
    if(resultado != ''){
        resultado += `0`
        $('#tela-calcu').val(resultado)
    }
})

$('#1').on('click',()=>{
    resultado += `1`
    $('#tela-calcu').val(resultado)
})

$('#2').on('click',()=>{
    resultado += `2`
    $('#tela-calcu').val(resultado)
})

$('#3').on('click',()=>{
    resultado += `3`
    $('#tela-calcu').val(resultado)
})

$('#4').on('click',()=>{
    resultado += `4`
    $('#tela-calcu').val(resultado)
})

$('#5').on('click',()=>{
    resultado += `5`
    $('#tela-calcu').val(resultado)
})

$('#6').on('click',()=>{
    resultado += `6`
    $('#tela-calcu').val(resultado)
})

$('#7').on('click',()=>{
    resultado += `7`
    $('#tela-calcu').val(resultado)
})

$('#8').on('click',()=>{
    resultado += `8`
    $('#tela-calcu').val(resultado)
})

$('#9').on('click',()=>{
    resultado += `9`
    $('#tela-calcu').val(resultado)
})
$('#virgula').on('click',()=>{
    if(resultado == ''){
        resultado += `0.`
    }

    if(resultado.indexOf('.') <=0){
        resultado += `.`
    }
})

//Botões de ações
$('#soma').on('click',()=>{
    $('.fazer-algo').html('<h3>+</h3>')
    //let total = new Calculadora;
    //total.setValorA(parseFloat(resultado))
    total = parseFloat(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})
$('#subtra').on('click',()=>{
    $('.fazer-algo').html('<h3>-</h3>')
    total = parseFloat(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})
$('#divisao').on('click',()=>{
    $('.fazer-algo').html('<h3>/</h3>')
    total = parseFloat(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})
$('#multi').on('click',()=>{
    $('.fazer-algo').html('<h3>*</h3>')
    total = parseFloat(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})

//CE - Limpar campo
$('#limpa').on('click',()=>{
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
    $('.fazer-algo').text('')
})

//botão igual
$('#igual').on('click',()=>{
    //total.setValorB()
    if($('.fazer-algo').text() == '+'){
        let resposta = total + parseFloat(resultado)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }else if($('.fazer-algo').text() == '-'){
        let resposta = total - parseFloat(resultado)
        $('#total').text(`${resposta}`)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }else if($('.fazer-algo').text() == '/'){
        let resposta = total / parseFloat(resultado)
        $('#total').text(`${resposta}`)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }else if($('.fazer-algo').text() == '*'){
        let resposta = total * parseFloat(resultado)
        $('#total').text(`${resposta}`)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }
})