import React, { useContext, useEffect } from 'react';
import { useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import { AuthContext } from '../Auth/AuthContext';
import { Project, ProjectObjec } from "../Types/Projects";
import { ProjectContext } from "./ProjectsContext";

export const ProjectProvider = ({ children }: { children: JSX.Element }) => {

    const [projeto, setProjeto] = useState<Project | null>(null);
    const [ListProjetos, setListProjects] = useState<{id: number, name: string, jurado: number, link: string, status: number}[]>([]);

    const auth = useContext(AuthContext)

    const api = useAPI();

    const buscaProjetos = async (idJurado: number) =>{
        const data = await api.buscaProjetosPorJurado(idJurado);


        data.forEach((element: any) => {
            ListProjetos.push({id: element['projeto'], name: element['name'], jurado: element['jurado'], link: element['link'], status: element['avaliado']});
        });

        return ListProjetos;
    };

    const salvaNotas = async (idProjeto: number, idJurado: number, notaInovacao: number, comentarioInova: Text, notaAplica: number, commentAplica: Text, notaViabilidade: number, commentVia: Text, notaInclusao: number, commentInclui: Text, notaSusten: number, commentSustem: Text) =>{
        console.log("Teste");

        const response = [{}]

        return response;

    };

    const desclassifica = async (idProjeto: number, idJurado: number, nasaData: number) =>{

        const response = false;

        return response;

    }

    return (
        <ProjectContext.Provider value={{ projeto, ListProjetos, buscaProjetos, salvaNotas, desclassifica }}>
            { children }
        </ProjectContext.Provider>
    );
}