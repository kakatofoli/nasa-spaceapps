import { useContext, useState } from 'react';
import CardProjetos from '../../../components/cardProjetosDisponiveis/cardProjetos';
import backgroundImages from '../../../assets/img/logo-inteiro.png';
import MenuLogado from '../../../components/MenuLogado/menu';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import './homeLogado.css';
import ModalViwer from '../../../components/modalComponentAvaliacao/modal';
import ModalConfirmation from '../../../components/modalLottieConfirme/modal';
import ModalError from '../../../components/modalLottieError/modal';
import CardClassificaGeral from '../../../components/cardAvaliacaoGeral/cardAvaliacao';

export default function HomeLogado (){

    const provider = useContext(AuthContext);

    const [projetos, setProjetos] = useState(false);
    const [classifica, setClassifica] = useState(false);
    const [hasProject, setHasProject] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [projetoAvaliacao, setProjetoAvaliacao] = useState({});
    const [openModalConfirme, setModalConfirme] = useState(false);
    const [opeNModalError, setModalError] = useState(false);
    


    const setaProjetos = () => {
        if(classifica){
            setProjetos(!projetos);
            setClassifica(!classifica);
        }else{
            setProjetos(!projetos);
        }
    }

    const setaClassificacao = () => {
        if(projetos){
            setProjetos(!projetos);
            setClassifica(!classifica);
        }else{
            setClassifica(!classifica);
        }
    };

    const setaProjeto = (data) => {
        setProjetoAvaliacao(data);
        setOpenModal(true);
    }

    const setConfirmation = () =>{
        setOpenModal(false);
        setModalConfirme(true);
    }

    const setError = () => {
        setOpenModal(false);
        setModalError(true);
    }


    return(
        <div className='home-logado'>
            <img src={backgroundImages} alt="" className='imagem-fundo'/>
            <div className='menu-home-logado'>
                <MenuLogado 
                    setProjetos={setaProjetos}
                    setAvaliacao={setaClassificacao}
                />
            </div>
            <div className='content-home-logado'>
                {openModal && <ModalViwer closeModal={setOpenModal} dataProjeto={projetoAvaliacao} openModalConfirmation={setConfirmation} errorModal={setError} />}
                {openModalConfirme && <ModalConfirmation closeModal={setModalConfirme} />}
                {opeNModalError && <ModalError closeModal={setModalError}/>}
                <div className='content-home-logado-header'>
                    <h1 className='header-saudacao'>Bem Vindo! {provider.user['nome']}</h1>
                </div>
                <div className='content-home-logado-conteudo'>
                    {projetos && <CardProjetos projetoAvaliar={setaProjeto}  />}
                    {classifica && <CardClassificaGeral />}
                </div>
                
            </div>
            
        </div>
        
    )
}