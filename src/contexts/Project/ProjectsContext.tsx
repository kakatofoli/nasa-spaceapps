import { createContext } from "react";
import { Project, ProjectObjec } from "../Types/Projects";

export type ProjectContextType = {
    projeto: Project | null;
    ListProjetos: ProjectObjec[] | null;
    buscaProjetos: (idJurado: number) => Promise<any>;
    salvaNotas: (idProjeto: number, idJurado: number, notaInovacao: number, comentarioInova: Text, notaAplica: number, commentAplica: Text, notaViabilidade: number, commentVia: Text, notaInclusao: number, commentInclui: Text, notaSusten: number, commentSustem: Text) => Promise<any>;
    desclassifica: (idProjeto: number, idJurado: number, nasaData: number) => Promise<boolean>;
}

export const ProjectContext = createContext<ProjectContextType>(null!);