import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        (props.viagem.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.viagem.map(viagem => <Colaborador nome={viagem.nome} cargo={viagem.cargo} imagem={viagem.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time