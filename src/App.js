
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Viagens em Familia',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Viagens Românticas',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Viagens de Verão',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'Viagens de Inverno',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
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

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={viagem => aoNovoCardAdicionado(viagem)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        viagem={viagem.filter(viagem => viagem.time === time.nome)}/>)}
        <Rodape/>
    </div>
  );
}

export default App;
