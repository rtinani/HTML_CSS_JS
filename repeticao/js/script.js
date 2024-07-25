function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(ano.value) > ano) {
        window.alert('Erro  verifica os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0] .checked) {
            genero = 'Homem'
           if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaM.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaF.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultoF.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}