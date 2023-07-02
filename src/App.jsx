import { useState, useEffect } from 'react'

function App(){
  const [sorteado, setSorteado] = useState(0)
  const [aposta, setAposta] = useState(0)
  const [acertos, SetAcertos] = useState(0)
  const [erros, SetErros] = useState(0)
  const [mensa,setMensa] = useState("")

//executa um efeito colateral no sistema - gerado após uma ocorrência (neste caso, quando a página é carregada)
  useEffect(() => {
    const numero = Math.ceil(Math.random() * 3)
    setSorteado(numero)
  }, [])

  function apostaCopo(num){
    setAposta(num)
    if(sorteado == num){
      SetAcertos(acertos + 1)
      setMensa(<h2 className='text-primary mt-2'>Parabéns! Acertou!</h2> )
    } else {
      SetErros(erros + 1)
      setMensa(<h2 className='text-danger mt-2'>Ops... Você errou!</h2> )
    }
  }

    function novoJogo (){
    setAposta(0)
    setMensa("")
    const numero = Math.ceil(Math.random() * 3)
    setSorteado(numero)
    }
  let imagem1
  let imagem2
  let imagem3

  if(aposta == 0 ){
    imagem1 = <img src="copo.png" onClick={() => apostaCopo(1)}/>
    imagem2 = <img src="copo.png" onClick={() => apostaCopo(2)}/>
    imagem3 = <img src="copo.png" onClick={() => apostaCopo(3)}/>
  } else {
    imagem1 = <img src="copo_vazio.png"/>
    imagem2 = <img src="copo_vazio.png"/>
    imagem3 = <img src="copo_vazio.png"/>
    if (sorteado == 1){
      imagem1 = <img src="copo_certo.png"/>
    } else if (sorteado == 2){
      imagem2 = <img src="copo_certo.png"/>
    } else {
      imagem3 = <img src="copo_certo.png"/>

    }
  }

  return (
    <div class='container'>
    <h1>Jogo dos copos</h1>
    <h2>Clique sobre o copo que contem o tesouro</h2>
    {imagem1}
    {imagem2}
    {imagem3}
    <hr />
    <h2>Número de Acertos: {acertos}</h2>
    <h2>Número de erros: {erros}</h2>
    <input type="button" className='btn btn-success btn-lg' 
    value="Jogar Novamente" onClick={novoJogo}/>
    {mensa}
    </div>
  )
}

export default App