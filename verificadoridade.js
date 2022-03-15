function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'criançamenino2.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src' , 'adolescentehomem2.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src' , 'homem2.png')
            }else {
                //idoso
                img.setAttribute('src', 'homemidoso2.png')
            }
        }else if (fsex [1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src' , 'criançamenina2.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src' , 'adolescentemulher2.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src' , 'mulher2.png')
            }else {
                //idosa
                img.setAttribute('src' , 'mulheridosa2.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}