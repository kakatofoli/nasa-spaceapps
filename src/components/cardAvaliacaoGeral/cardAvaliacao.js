import * as React from 'react';
import './card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GifViewer from '../lottieViewer/lottieViwer';
import TabelaGeral from '../tabelaClassificacao/tabela';
import listaVazia from '../../assets/lottie/rocket.json';
import { useAPI } from '../../hooks/useAPI';

export default function CardProjetos({ }){

    const [data, setData] = React.useState([]);

    const api = useAPI();

    React.useEffect(() => {

        api.solicitaClassificacaoGeral().then((response) => {
            setData(response);
        });

    },[])

    if(data.length === 0){
        return(
            <Card sx={{ minWidth: '50vw', boxShadow: '1px 2px 9px #999999' }}>
                <CardContent>
                    <h1 className='header-title-card-project'>Ainda não existem projetos avaliados!</h1>
                    <GifViewer 
                        animationData={listaVazia}
                    />
                </CardContent>
            </Card>
        )

    }else {

        return(
            <Card sx={{ minWidth: '70vw', boxShadow: '1px 2px 9px #999999', marginTop: '-15vh'}}>
                <CardContent>
                    <TabelaGeral data={data} />
                </CardContent>
            </Card>
        )
    }
    
}