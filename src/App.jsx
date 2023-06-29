import React from "react";

const App = () => {
    //Fazendo os elementos que mudam de estado

    let [peso, setPeso]= React.useState('')
    let [altura, setAltura]=React.useState('')
    let [imc,setImc]= React.useState('Seu imc:')

    //evento de clique
    const handleClick= ()=>{
      const alt = altura/100
      const imc = peso/(alt*alt)
      // alert(imc.toFixed(2))

      if (imc<18.6) {
        setImc("Você esta abaixo do peso! Seu IMC "+imc.toFixed(2))
      }else if (imc<24.9) {
        setImc("Você no peso ideal! Seu IMC "+imc.toFixed(2))
      } else if(imc<34.9){
        setImc("Você levemente acima do peso! Seu IMC "+imc.toFixed(2))
      }else if(imc > 34.9){
        setImc("Cuidado obesidade! Seu IMC "+imc.toFixed(2))
      }

      setPeso('')
      setAltura('')
    }

  return (
    <>
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input type="text" 
          placeholder="Peso em (kg) ex: 80"
          value={peso}
          /*Usa o onChange no formulario para mudar o valor em value*/
          onChange={(e)=> {setPeso(e.target.value)}}
        />
        <input type="text" 
          placeholder="Altura em (cm) ex:160"
          value={altura}
          /*Usa o onChange no formulario para mudar o valor em value*/
          onChange={(e)=> setAltura(e.target.value)}
        />
        <button onClick={handleClick}>Calcular</button>
      </div>
      <h2>{imc}</h2>
    </div>
     
    </>
  );
};

export default App;
