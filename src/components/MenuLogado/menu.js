import { useContext, useState } from 'react';
import 'boxicons';
import './menu.css';
import NasaSmall from '../../assets/img/nasa-deitado.png';
import ProfileImage from '../../assets/img/profile-image.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export default function MenuLogado({ setProjetos, setAvaliacao }){

    const [isExpanded, setExpandedState] = useState(false);

    const info = useContext(AuthContext);

    

    return(
        <div className={isExpanded? 'side-nav-container' : 'side-nav-container side-nav-container-NX'}>
            <div className='nav-upper'>
                <div className='nav-heading'>
                    {isExpanded && (
                        <div className='nav-brand'>
                            <img className='image-top-menu' alt='Nasa Space apps Logo' src={NasaSmall} />
                        </div>
                    )}
                </div>
                <div className='nav-menu'>
                    <a href='#' className={isExpanded? 'menu-item': 'menu-item menu-item-NX'} onClick={setProjetos}>
                        <box-icon name='grid-alt' color="white" ></box-icon>
                        {isExpanded && <p>Projetos</p>}
                        {!isExpanded && <p className='tooltip'>Projetos</p>}
                    </a>
                    {info.user['permission'] === 0 && <a href='#' onClick={setAvaliacao} className={isExpanded? 'menu-item': 'menu-item menu-item-NX'}>
                        <box-icon name='line-chart' color="white" ></box-icon>
                        {isExpanded && <p>Resultados</p>}
                        {!isExpanded && <div className='tooltip'>Resultados</div>}
                    </a>}
                </div>
                <button className={isExpanded ? 'hamburger hamburger-in' : 'hamburger hamburger-out'} onClick={() => setExpandedState(!isExpanded)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className='nav-footer'>
                {isExpanded && <div className='nav-details'>
                    <img src={ProfileImage} alt=""/>
                    <div className='nav-footer-info'>
                        <p className='nav-footer-user-name'>{info.user['nome']}</p>
                        {info.user['permission'] === 0?<p className='nav-footer-user-role'>Administrador</p> : <p className='nav-footer-user-role'>Avaliador</p>}
                    </div>
                </div>}
                <div className='logout-icon' onClick={() => info.singOut()}>
                    <box-icon name='log-out' color="white"></box-icon>
                </div>
            </div>
        </div>
    )
}