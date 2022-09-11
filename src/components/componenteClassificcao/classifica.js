import React from 'react';
import Button from '@mui/material/Button';
import './classifica.css';
import Classificacao from '../tabelaClassificacao/tabela';



export default function modalClassificacao({ closeModal, dataProjeto, openModalConfirmation, errorModal }) {
  
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='closeModalTitle'>
         <Button onClick={() => closeModal(false)}> X </Button>
        </div>
        <div className='titleModal'><h1>CLASSIFICAÇÃO GERAL</h1></div>
        <div className='bodyModal'>
            <Classificacao />
        </div>
      </div>
    </div>
  );
}