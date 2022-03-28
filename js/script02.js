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
    case 'Pelé' :
      res.innerHTML = "<h1> Pelé em finais de copas do mundo : <br> <br> </h1> <ul>  <li> Pelé foi convocado para a Copa do Mundo de 58 e fez 6 Gols naquela copa, sendo 2 na final e ajudou a seleção a ganhar a copa do mundo pela primeira vez. </li> <br> <li> Pelé na final da Copa de 1970 fez 1 Gol e deu 2 assistências, além de ter feito 4 gols e 7 assistências na copa inteira e ajudou a seleção a ser tricampeã do mundo. </li> </ul> <br> "
      img.setAttribute('src', 'imagens/pelé.jpeg')
      break;
    case 'Carlos Alberto' :
        res.innerHTML = "<h1> Carlos Alberto torres em finais de copas do mundo : <br> <br> </h1> <ul> <li> Na final da copa de 1970 contra a Italia Carlos Alberto torres fez um gol e ajudou a seleção a ser Tricampeã do mundo. </li> </ul> <br> " 
        img.setAttribute('src', 'imagens/carlos alberto.jpg')
        break;
    case 'Zito' :
        res.innerHTML = "<h1> Zito em finais de copas do mundo : <br> <br> </h1> <ul> <li> Na final da copa de 1962 Zito fez 1 Gol na final da Copa do mundo de 1962 e ajudou a seleção a ser bicampeã do mundo. </li> </ul> <br> " 
        img.setAttribute('src', 'imagens/zito.jpg')
        break;
         default:
         res.innerHTML = `<br>O Jogador não existe nos nossos dados ou você digitou errado, digite igual está na lista acima para obter informações do jogador do Peixão.<br>`
         break;
        






}





res.appendChild(img)



}