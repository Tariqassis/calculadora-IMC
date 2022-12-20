var peso = document.getElementById('imcPeso');
var altura = document.getElementById('imcAltura');
var idade = document.getElementById('imcIdade');
var nivelFisico = document.getElementById('imcNivelFisico');
var mensagemResultado = document.getElementById('mensagemFinal');


function calculaImc(e) {
    var imc = peso.value / (altura.value*altura.value).toFixed(2);
    imc = imc.toFixed(2);
    var mensagem = 'Por favor, preencha os campos corretamente.'

    if(imc <= 16.9){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + 'kg/m2' + ' e você precisa ganhar peso. Neste momento, você pode estar apresentando os seguintes sintomas: queda de cabelo, infertilidade, ausência menstrual. Procure uma nutricionista.'
    }else if(imc > 16.9 && imc <= 18.4){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + 'kg/m2' + ' e você precisa ganhar peso. Neste momento, você pode estar apresentando os seguintes sintomas: fadiga, stress, ansiedade. Procure uma nutricionista.'
    }else if(imc > 18.4 && imc <= 24.9){
        mensagem = 'Parabéns, seu IMC é de ' + imc + 'kg/m2' + ' e você está dentro do peso adequado!. Você tem menor risco de doenças cardíacas e vasculares.'
    }else if(imc > 24.9 <= 29.9 && nivelFisico.value != 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + 'kg/m2' + ' por isso você está acima do peso!. Neste momento, você pode estar apresentando os seguintes sintomas: fadiga, má circulação, varizes. Procure uma nutricionista.'
    }else if(imc > 24.9 <= 29.9 && nivelFisico.value == 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value != 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + 'kg/m2' + ' por isso você está acima do peso!. Neste momento, você pode estar apresentando os seguintes sintomas: diabetes, angina, infarto, aterosclerose. Procure uma nutricionista.'
    }else if (imc > 29.9 && imc <= 34.9 && nivelFisico.value == 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value != 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + 'kg/m2' + ' por isso você está acima do peso!. Neste momento, você pode estar apresentando os seguintes sintomas: apneia do sono e falta de ar.Procure uma nutricionista.'
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value == 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }else if(imc > 40 && nivelFisico.value != 'intenso'){
        mensagem = 'Sinto muito, seu IMC é de ' + imc + 'kg/m2' + ' por isso você está acima do peso!. Neste momento, você pode estar apresentando os seguintes sintomas: refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC. Procure uma nutricionista.'
    }else if(imc > 40 && nivelFisico.value == 'intenso'){
        mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }











    mensagemResultado.innerHTML = mensagem;
    e.preventDefault()
}