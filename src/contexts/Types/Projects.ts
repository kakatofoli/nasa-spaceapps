export type Project = {
    id: number;
    name: string;
    email: string;
    status: number;
    mediaGeral: number | null;
    notaInovacao: number | null;
    notaAplicabilidade: number | null;
    notaViabilidade: number | null;
    notaInclusao: number | null;
    notaSustentabilidade: number | null;
    nasaData: number | null;
}

export type ProjectObjec = {
    id: number;
    name: string;
    jurado: number;
    link: string;
    status: number;
}

export type ListProjects = {
    [key: string]: ProjectObjec;
}