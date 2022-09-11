import Button from '@mui/material/Button';
import './modal.css';
import LinaerStepper from '../multiStepForm/form';


export default function BasicModal({ closeModal, dataProjeto, openModalConfirmation, errorModal }) {
  
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='closeModalTitle'>
         <Button onClick={() => closeModal(false)}> X </Button>
        </div>
        <div className='titleModal'><h1>AMBIENTE DE AVALIAÇÃO DE PROJETO</h1></div>
        <div className='bodyModal'>
          <LinaerStepper dataProject={dataProjeto} modalConfirmation={openModalConfirmation} modalError={errorModal}  />
        </div>
      </div>
    </div>
  );
}