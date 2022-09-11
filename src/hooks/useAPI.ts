
export const useAPI = () => ({

    validateLogin: async(email: string, password: string) => {

        let url = `${process.env.REACT_APP_API}/application/authenticate`

        const response = new XMLHttpRequest();
        response.open('POST', url, false);
        response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        response.send(JSON.stringify({"username": email, "password": password}));

        let dados = JSON.parse(response.responseText)
        
        return dados;
    },
    logout: async () => {
        const response = "Deslogado";
        // const response = await api.post('/application/logout');
        return response;
    },
    buscaProjetosPorJurado: async(idJurado: number) => {
        
        let url = `${process.env.REACT_APP_API}/application/buscaProjetos/idJurado`
        const response = new XMLHttpRequest();
        response.open('POST', url, false);
        response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        response.send(JSON.stringify({"idjurado": idJurado}));

        let dados = JSON.parse(response.responseText);

        return dados;
    },
    salvaNotasProjeto: async(idprojeto: number, idAvaliador: number, notaInovacao: number, commentInova: String, notaAplica: number, commentAplica: String, notaVia: number, commentVia: String, notaInclui: number, commentInclui: String, notaSustem: number, commentSustem: String) => {

        let url = `${process.env.REACT_APP_API}/application/lancaNotas/avaliado`;
        const response = new XMLHttpRequest();
        response.open('POST', url, false);
        response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        response.send(JSON.stringify({
            "projeto": idprojeto,
            "jurado": idAvaliador,
            "notaInova": notaInovacao, 
            "commentInova": commentInova,
            "notaAplica": notaAplica,
            "commentAplica": commentAplica,
            "notaVia": notaVia, 
            "commentVia": commentVia, 
            "notaInclui": notaInclui, 
            "commentInclui": commentInclui, 
            "notaSusten": notaSustem, 
            "commentSusten": commentSustem
        }));

        let dados = JSON.parse(response.responseText);

        return dados;
    },
    desclassificaProjeto: async(idProjeto: number) => {
        
        let url = `${process.env.REACT_APP_API}/application/desclassifica/projeto`;
        const response = new XMLHttpRequest();
        response.open('POST', url, false);
        response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        response.send(JSON.stringify({
            "idProjeto": idProjeto
        }));

        let dados = JSON.parse(response.responseText);

        return dados;
    },
    solicitaClassificacaoGeral: async() => {

        let url = `${process.env.REACT_APP_API}/application/calculaClassificacao/Geral`;

        const response = new XMLHttpRequest();
        response.open('GET', url, false);
        response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        response.send();
        const dados = JSON.parse(response.responseText);

        return dados;
    },
});