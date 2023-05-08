
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }

 return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input required={props.obrigatorio} value={props.valor} onChange={aoDigitado} placeholder={placeholderModificada}/>
    </div>
 )
}

export default CampoTexto;