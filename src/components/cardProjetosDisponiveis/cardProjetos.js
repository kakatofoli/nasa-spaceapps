import * as React from 'react';
import './cardProject.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TabelaProjetos from '../TabelaProjetosDisponiveis/tabelaProjetos';
import GifViewer from '../lottieViewer/lottieViwer';
import listaVazia from '../../assets/lottie/rocket.json';
import { ProjectContext } from '../../contexts/Project/ProjectsContext';
import { AuthContext } from '../../contexts/Auth/AuthContext';


export default function CardProjetos({ projetoAvaliar }){

    const projectList = React.useContext(ProjectContext);
    const auth = React.useContext(AuthContext);

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        projectList.buscaProjetos(auth.user['id']);
        setData(projectList.ListProjetos);
    },[])

    const setaProjeto = (projectID) =>{
        data.forEach(element => {
            if(element['id'] === projectID){
                projetoAvaliar(element);
                return true;
            }
        });
    }

    if(data.length === 0){
        return(
            <Card sx={{ minWidth: '50vw', boxShadow: '1px 2px 9px #999999' }}>
                <CardContent>
                    <h1 className='header-title-card-project'>Você não tem nenhum projeto para avaliar!</h1>
                    <GifViewer 
                        animationData={listaVazia}
                    />
                </CardContent>
            </Card>
        )

    }else {

        return(
            <Card sx={{ minWidth: '70vw', boxShadow: '1px 2px 9px #999999'}}>
                <CardContent>
                    <TabelaProjetos 
                        dataList={data}
                        disponivelAvaliacao={setaProjeto}
                    />
                </CardContent>
            </Card>
        )
    }
    
}