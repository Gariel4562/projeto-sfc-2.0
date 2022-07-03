function pesquisar () {
    let t1 = window.document.getElementById('t1')
    let res = window.document.getElementById('res')
    let t = String(t1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(t.length==0) {
        window.alert('Digite o nome do jogador')
    }
    switch(t) {
        case 'Parou a Guerra' :
          res.innerHTML = "<h1> Parou a Guerra. : <br> <br> </h1> <ul>  <li> O fato ocorreu em 1969, na Nigeria. O pais vivia o conflito conhecido como Guerra de Biafra, que durou entre 1967 e 1970 e causou a morte de milhoes de pessoas. O Santos fazia excursão pela Africa e recebeu convite para jogar na Nigeria. So que para chegar ate o estádio Beni City em seguranca, era preciso um cessar-fogo. E foi justamente isso que ocorreu. O conflito foi interrompido para que as pessoas pudessem ver o Santos fc Jogar.  </li>  </ul> <br> "
          img.setAttribute('src', 'imagens/parar guerra.jpg')
          break;
        case 'Pentacampeao Brasileiro' :
            res.innerHTML = "<h1> Pentacampeao Brasileiro. 1961 - 1965 : <br> <br> </h1> <ul> <li> O Santos FC Foi o unico Clube brasileiro que conseguiu vencer Cinco Vezes seguidas o Campeonato brasileiro 1961, 1962, 1963, 1964, 1965 pelo menos ate o presente ano 2022. </li> </ul> <br> " 
            img.setAttribute('src', 'imagens/historico.jpeg')
            break;
        case 'Eleito pela Fifa' :
            res.innerHTML = "<h1> Quinto Maior clube do Mundo fifa 2000. : <br> <br> </h1> <ul> <li> O Santos foi eleito pela FIFA em 2000 o quinto maior clube de futebol do Seculo XX, sendo o melhor clube das Americas na lista. </li> </ul> <br> " 
            img.setAttribute('src', 'imagens/certificate.jpg')
            break;
             default:
             res.innerHTML = `<br>O Jogador não existe nos nossos dados ou você digitou errado, digite igual está na lista acima para obter informações do jogador do Peixão.<br>`
             break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }