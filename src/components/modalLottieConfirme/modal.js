import Button from '@mui/material/Button';
import './modal.css';
import ConfirmViewr from '../lottieViewer/lottieViwer';
import confimation from '../../assets/lottie/confirmation.json';


export default function BasicModal({ closeModal }) {
  
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='closeModalTitle'>
         <Button onClick={() => closeModal(false)}> X </Button>
        </div>
        <div className='titleModal'><h1>PROJETO AVALIADO COM SUCESSO!!</h1></div>
        <div className='bodyModal'>
            <ConfirmViewr animationData={confimation} />
        </div>
      </div>
    </div>
  );
}