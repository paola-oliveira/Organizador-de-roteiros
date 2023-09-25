
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Viagens em Familia',
      corPrimaria: '#517245',
      corSecundaria: '#BACBB4',
  },
  {
      nome: 'Viagens Românticas',
      corPrimaria: '#2F3D4C',
      corSecundaria: '#8FA9C6',
  },
  {
      nome: 'Viagens de Verão',
      corPrimaria: '#742520',
      corSecundaria: '#BB9795',
  },
  {
      nome: 'Viagens de Inverno',
      corPrimaria: '#DAB990',
      corSecundaria: '#EBDCD5',
  },
  {
      nome: 'Viagens Gastronômicas',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  }
]

  const [viagem, setViagem] = useState([])

  const aoNovoCardAdicionado = (novaViagem) => {
    setViagem([...viagem, novaViagem])
  }

  function deletarColaborador() {
    console.log('deletando colaborador');
}

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={viagem => aoNovoCardAdicionado(viagem)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        viagem={viagem.filter(viagem => viagem.time === time.nome)}
        aoDeletar={deletarColaborador}
        />)}
        <Rodape/>
    </div>
  );
}

export default App;
