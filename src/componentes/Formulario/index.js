import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome ('')
        setCargo('')
        setImagem('')
        setTime('')

    }

return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2 className='titulo'>Preencha os dados para criar o card de seu roteiro</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Destino" 
                placeholder="Digite o local para onde deseja viajar"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Data" 
                placeholder="Digite quanto tempo pretende ficar"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label='Tipo da viagem'
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao texto="Criar Card"/>
        </form>
    </section>
)
}

export default Formulario