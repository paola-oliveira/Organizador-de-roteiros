import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ viagem, corSecundaria, corPrimaria, nome, aoDeletar }) => {
    return (
        (viagem.length > 0) ? <section className='time' style={{backgroundColor: corSecundaria}}>
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
                {viagem.map(viagem => {
                    return <Colaborador key={viagem.nome} nome={viagem.nome} cargo={viagem.cargo} imagem={viagem.imagem} corDeFundo={corPrimaria} aoDeletar={aoDeletar}/>
                })}
            </div>
        </section>
        : ''
    )
}

export default Time
