import Button from '@mui/material/Button';
import './modal.css';
import ConfirmViewr from '../lottieViewer/lottieViwer';
import cancelError from '../../assets/lottie/error.json';


export default function BasicModal({ closeModal }) {
  
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='closeModalTitle'>
         <Button onClick={() => closeModal(false)}> X </Button>
        </div>
        <div className='titleModal'><h1>PROJETO DESCLASSIFICADO COM SUCESSO!!</h1></div>
        <div className='bodyModal'>
            <ConfirmViewr animationData={cancelError} />
        </div>
      </div>
    </div>
  );
}