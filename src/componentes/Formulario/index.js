import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Designer',
        'Mobile',
        'Inovação e Gestão'
    ]
return (
    <section className='formulario'>
        <form>
            <h2>Preencha os dados para criar o card do personagem</h2>
            <CampoTexto label="Nome" placeholder="Digite o nome do personagem"/>
            <CampoTexto label="Cargo" placeholder="Digite o cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label='Time'itens={times}/>
            <Botao texto="Criar Card"/>
        </form>
    </section>
)
}

export default Formulario