function pesquisar () {
let t1 = window.document.querySelector('#t1')
let res = window.document.querySelector('#res')
let t = String(t1.value)

let img = document.createElement('img')
img.setAttribute('id', 'foto')

if(t.length==0) {
    window.alert('Digite o nome do Jogador')
}

switch(t) {
    case 'Pelé' :
        res.innerHTML = `<h1>Pelé o rei do futebol</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou no Santos profissionalmente de 1956 até 1974. </li>  <li> fez 1091 Gols pelo Santos. </li> <br> Titulos que Pelé ganhou jogando pelo Santos :<br> <br> <li> 6 Campeonatos brasileiros. </li> <li> 2 Copas Libertadores </li> <li> 2 Mundiais interclubes.
        </li> <li> 10 Campeonatos paulistas na época que o paulista era o torneio mais importante do pais.
        </li> <li> 4 Torneio-rio-sp. </li> <li> 1 recopa mundial. </li>
        <li> 1 Supercopa Sul Americana. </li>


      </ul>
        </ul>`
        img.setAttribute('src', 'imagens/pelé.jpg')
        break;
        case 'Robinho' :
            res.innerHTML = `<h1>Robinho o Rei das Pedaladas
            </h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou no Santos profissionalmente 2002 - 2005, 2010, 2014 - 2015 </li>  <li> Robinho fez 111 Gols pelo Santos. </li> <br> Titulos que Robinho ganhou jogando pelo Santos :<br> <br> <li> 2 Campeonatos Brasileiro. </li> <li> 2 Campeonatos Paulista. </li> <li> 1 Copa do Brasil.
            </li> 
    
    
          </ul>
            </ul>`
            img.setAttribute('src', 'imagens/robinho.jpg')
            break;
            case 'Neymar' :
                res.innerHTML = `<h1>Neymar o Maior artilheiro do Santos fc pós era Pelé
                </h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li>  Jogou no Santos profissionalmente de 2009 - 2013. </li>  <li> Fez 138 Gols pelo Santos sendo o Maior artilheiro pós era Pelé. </li> <br> Titulos que Neymar Conquistou jogando pelo Santos : <br> <br> <li> 1 Copa Libertadores. </li> <li> 1 Copa do Brasil. </li> <li> 1 Recopa sul americana.
                </li> <li> 3 Campeonatos Paulistas.</li>
        
        
              </ul>
                </ul>`
                img.setAttribute('src', 'imagens/neymar.jpg')
                break;
                case 'Juary' :
                    res.innerHTML = `<h1>Juary</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Juary Jogou pelo Santos Profissionalmente nos anos de 1980 - 1982, 1990. </li>  <li> Fez 101 Gols pelo Santos. </li> <br> Titulos que Juary Conquistou pelo Santos :<br> <br> <li> Conquistou 1 Campeonato paulista jogando pelo Santos. </li>
            
            
                  </ul>
                    </ul>`
                    img.setAttribute('src', 'imagens/juary.jpg')
                    break;
                    case 'Chulapa' :
                        res.innerHTML = `<h1>Serginho Chulapa</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Chulapa Jogou pelo Santos nos anos de 1983 - 1984, 1986, 1988, 1989 - 1990 </li>  <li> Chulapa fez 104 Gols pelo Santos. </li> <br> Titulos que Chulapa Conquistou pelo Santos :<br> <br> <li> Conquistou 1 Campeonato Paulista jogando pelo Santos. </li>
                
                
                      </ul>
                        </ul>`
                        img.setAttribute('src', 'imagens/serginho chulapa.jpg')
                        break;
                        case 'Zetti' :
                            res.innerHTML = `<h1>Goleiro Zetti</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou no Santos de 1997 - 1999. </li>  <br> Titulos que Zetti Conquistou pelo Santos :<br> <br> <li> 1 Copa conmebol.
                            </li> <li> 1 Torneio rio-sp. </li>
                    
                    
                          </ul>
                            </ul>`
                        img.setAttribute('src', 'imagens/zetti.jpg')
                        break;
                        case 'Giovanni' :
                            res.innerHTML = `<h1>Giovanni o G10</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Giovanni jogou pelo Santos nos anos de 1995 - 1996, 2005 - 2006, 2010. </li>  <li> Giovanni fez 73 Gols pelo Santos. </li> <br> Titulos que Giovanni Conquistou pelo Santos : <br> <br> <li> 1 Copa do Brasil. </li> <li> 2 Campeonatos Paulistas. </li>
                    
                    
                          </ul>
                            </ul>`
                            img.setAttribute('src', 'imagens/giovanni.jpeg')
                            break;
                            case 'Ricardo' :
                                res.innerHTML = `<h1>Ricardo Oliveira</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou Pelo Santos nos anos de 2003, 2015 - 2017. </li>  <li> Fez 92 Gols jogando pelo Santos. </li> <br> Titulos que Conquistou Jogando pelo Santos : <br> <br> <li> 2 Campeonatos Paulistas. </li> 
                        
                        
                              </ul>
                                </ul>`
                                img.setAttribute('src', 'imagens/ricardo.jpg')
                                break;
                                case 'Ary' :
                                    res.innerHTML = `<h1>Ary Patusca</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou pelo Santos nos anos de 1915 - 1923. </li>  <li> Fez 110 Gols Jogando pelo Santos. </li> <br> Titulos que Conquistou Jogando pelo Santos : <br> <br> <li> Foi um dos primeiros grandes jogadores que o Santos teve na história </li> 
                            
                            
                                  </ul>
                                    </ul>`
                                    img.setAttribute('src', 'imagens/aren.jpg')
                                    break;
                                    case 'Araken' :
                                    res.innerHTML = `<h1>Araken Patusca
                                    </h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou pelo Santos nos anos de 1923 - 1929, 1935 - 1936 </li>  <li> Fez 184 Gols Jogando pelo Santos. </li> <br> Titulos que Conquistou Jogando pelo Santos : <br> <br> <li> Conquistou o primeiro campeonato paulista do Santos fc que seria também o primeiro titulo oficial do clube. </li> 
                            
                            
                                  </ul>
                                    </ul>`
                                    img.setAttribute('src', 'imagens/araken.jpg')
                                    break;
                                    case 'Coutinho' :
                                      res.innerHTML = `<h1>Coutinho</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou no Santos profissionalmente de 1958 até 1968. </li>  <li> fez 370 Gols pelo Santos. </li> <br> Titulos que Coutinho ganhou jogando pelo Santos :<br> <br> <li> 5 Campeonatos brasileiros. </li> <li> 2 Copas Libertadores. </li> <li> 2 Mundiais interclubes.
                                      </li> <li> 6 Campeonatos paulistas na época que o paulista era o torneio mais importante do pais.
                                      </li> <li> 4 Torneio-rio-sp. </li> 
                                      
                              
                              
                                    </ul>
                                      </ul>`
                                      img.setAttribute('src', 'imagens/coutinho.jpg')
                                      break;
                                      case 'Pepe' :
                                      res.innerHTML = `<h1>Pepe</h1> <ul> <br> <br> Feitos pelo Santos fc : <br> <br> <li> Jogou no Santos profissionalmente de 1954 até 1969. (Santos foi o único clube que Pepe jogou na carreira inteira) </li>  <li> fez 405 Gols pelo Santos. </li> <br> Titulos que Pepe ganhou jogando pelo Santos :<br> <br> <li> 6 Campeonatos brasileiros. </li> <li> 2 Copas Libertadores. </li> <li> 2 Mundiais interclubes.
                                      </li> <li> 11 Campeonatos paulistas na época que o paulista era o torneio mais importante do pais.
                                      </li> <li> 4 Torneio-rio-sp. </li> 
                                      <li> 1 recopa mundial. </li>
                                      <li> 1 Supercopa Sul Americana. </li>
                                      
                              
                              
                                    </ul>
                                      </ul>`
                                      img.setAttribute('src', 'imagens/pepe.jpg')
                                      break;
                                    default:
                                        res.innerHTML = `<br>O Jogador não existe nos nossos dados ou você digitou errado, digite igual está na lista acima para obter informações do jogador do Peixão.<br>`
                                        break;
                        
    




}








res.appendChild(img)

}
