let resultado = $('#tela-calcu').val()
//criando total
let total = 0

/* class Calculadora{
    constructor(){
        this._a,
        this._b
    }
    setValorA(a){
        this._a = a
    }
    setValorB(){
        this._b = b
    }
    getSoma(){
        return (this._a + this._b)
    }
    getSubtracao(){
        return (this._a - this._b)
    }
    getDivisao(){
        return (this._a / this._b)
    }
    getMultiplica(){
        return (this._a * this._b)
    }
} 
*/


$('#0').on('click',()=>{
    resultado += `0`
    $('#tela-calcu').val(resultado)
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

//Botões de ações
$('#soma').on('click',()=>{
    $('.fazer-algo').html('<h3>+</h3>')
    //let total = new Calculadora;
    //total.setValorA(parseInt(resultado))
    total = parseInt(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})
$('#subtra').on('click',()=>{
    $('.fazer-algo').html('<h3>-</h3>')
    total = parseInt(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})
$('#divisao').on('click',()=>{
    $('.fazer-algo').html('<h3>/</h3>')
    total = parseInt(resultado)
    $('#tela-calcu').val("")
    resultado = $('#tela-calcu').val()
})
$('#multi').on('click',()=>{
    $('.fazer-algo').html('<h3>*</h3>')
    total = parseInt(resultado)
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
        let resposta = total + parseInt(resultado)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }else if($('.fazer-algo').text() == '-'){
        let resposta = total - parseInt(resultado)
        $('#total').text(`${resposta}`)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }else if($('.fazer-algo').text() == '/'){
        let resposta = total / parseInt(resultado)
        $('#total').text(`${resposta}`)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }else if($('.fazer-algo').text() == '*'){
        let resposta = total * parseInt(resultado)
        $('#total').text(`${resposta}`)
        $('#tela-calcu').val("")
        resultado = $('#tela-calcu').val()
        $('#tela-calcu').val(`${resposta}`)

    }
})