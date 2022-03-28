function pesquisar () {
    var t1 = window.document.querySelector('#t1')
    var res = window.document.getElementById('res')
    var t = String(t1.value)
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(t.length==0) {
        window.alert('Digite o nome do torneio')
    }

    switch(t) {
        case 'Supercopa mundial' :
            res.innerHTML = `<br><li>Santos fc foi supercampeão mundial no ano de 1968.</li><br>`
        img.setAttribute('src', 'imagens/recopam.jpg')
        break;
        case 'Mundial' :
            res.innerHTML = `<br><li>Santos fc foi Bicampeão do mundo nos anos de 1962, 1963.</li><br>`
        img.setAttribute('src', 'imagens/mundial de clubes.jpg')
        break;
        case 'Libertadores' :
            res.innerHTML = `<br><li>Santos fc foi campeão da libertadores nos anos de 1962, 1963, 2011.</li><br>`
        img.setAttribute('src', 'imagens/libertadores.jpg')
        break;
        case 'Brasileirao' :
            res.innerHTML = `<br><li>Santos fc foi campeão brasileiro nos anos de 1961, 1962, 1963, 1964, 1965 (único penta brasileiro na história) 1968, 2002, 2004.</li><br>`
        img.setAttribute('src', 'imagens/brasileirao.jpg')
        break;
        case 'Copa do brasil' :
            res.innerHTML = `<br><li>Santos fc foi campeão da copa do brasil no ano de 2010.</li><br>`
        img.setAttribute('src', 'imagens/copa do brasil.jpg')
        break;
        case 'Recopa sul americana' :
            res.innerHTML = `<br><li>Santos fc foi campeão da recopa sul americana no ano de 2012.</li><br>`
        img.setAttribute('src', 'imagens/recopa sul americana.jpg')
        break;
        case 'Supercopa s americana' :
            res.innerHTML = `<br><li>Santos fc foi campeão da supercopa sul americana no ano de 1968.</li><br>`
        img.setAttribute('src', 'imagens/supercopa sul americana.jpg')
        break;
        case 'Copa conmebol' :
            res.innerHTML = `<br><li>Santos fc foi campeão da copa conmebol no ano de 1998.</li><br>`
        img.setAttribute('src', 'imagens/Copa_Conmebol_98.jpg')
        break;
        case 'Torneio rio-sp' :
            res.innerHTML = `<br><li>Santos fc foi campeão do torneio rio-sp nos anos de 1959, 1963, 1964, 1966, 1997.</li><br>`
        img.setAttribute('src', 'imagens/torneio-rio sp.jpg')
        break;
        case 'Paulista' :
            res.innerHTML = `<br><li>Santos fc foi campeão do paulistão nos anos de 1935, 1955, 1956, 1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968, 1969, 1973, 1978, 1984, 2006, 2007, 2010, 2011, 2012, 2015 e 2016</li><br>`
        img.setAttribute('src', 'imagens/paulistao.jpg')
        break;
        default:
            res.innerHTML = `<br>O Campeonato não existe nos nossos dados ou você digitou errado, digite igual está na lista acima para obter informações do campeonato conquistado pelo Peixão.<br>`
            break;


    
    
    
    
    
    
    
    
    
    }







res.appendChild(img)

}