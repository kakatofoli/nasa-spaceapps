import { useContext, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Checkbox from '@mui/material/Checkbox';
import './form.css';
import { useAPI } from "../../hooks/useAPI";
import { AuthContext } from "../../contexts/Auth/AuthContext";


const useStyles = makeStyles( theme => ({
  button: {
    marginRight: '8px',
  },
}));

function getSteps() {
  return [
    "Identificação do projeto",
    "Inovação",
    "Aplicabilidade",
    "Viabilidade Econômica",
    "Sustentabilidade",
    "Inclusão",
  ];
}


export default function LinaerStepper ({ dataProject, modalConfirmation, modalError }){

    const [notaInovacao, setInovacao] = useState("");
    const [comentarioInovacao, setComentarioInovacao] = useState('');
    const [notaAplicabilidade, setNotaAplicabilidade] = useState('');
    const [comentariosAplicabilidade, setComentarioAplicabilidade] = useState('');
    const [viabilidadeEconomica, setViabilidadeEconomica] = useState('');
    const [eliminado, setEliminado] = useState(false);
    const [comentarioEconomico, setComentarioEconomico] = useState('');
    const [sustentabilidade, setSustentabilidade] = useState('');
    const [commentSustentabilidade, setCommentSustentabilidade] = useState('');
    const [inclusao, setInclusao] = useState('');
    const [commentInclusao, setCommentInclusao] = useState('');

    const api = useAPI();
    const auth = useContext(AuthContext);



    const getStepContent = (step) => {

      const eliminacao = () => {
        setEliminado(!eliminado);
        console.log(eliminado);
      }
      
      switch (step) {
        case 0:

          return (
            <>
                <div className="contentStep0">
                    <div className="tituloProjeto">
                        <h2>Projeto: {dataProject['name']}</h2>
                    </div>
                    <div className="linkAcesso">
                        <p>Link de acesso: <a href="">{dataProject['link']}</a></p>
                    </div>
                    <div className="resumoProjeto">
                        <h2>Resumo</h2>
                        <p>Lorem ipsum dolor sit amet. Aut debitis labore ab saepe minus eum beatae quos est libero repudiandae? Est dicta quaerat sed nisi totam nam excepturi dolorem a libero debitis est nemo consequuntur. Quo exercitationem sint ea expedita debitis rem asperiores cupiditate id corrupti quibusdam ab maiores maiores qui error cumque qui dolores voluptatem. Vel consectetur quo delectus numquam aut tenetur dolorem qui amet consectetur sit rerum alias qui consequatur quos. Rem eveniet similique dolorem minima aut excepturi voluptatibus qui accusamus harum qui dignissimos animi et quia vitae? Ex fugit maiores qui expedita ducimus non nobis laudantium et saepe quibusdam id sint obcaecati 33 rerum adipisci ut molestias nulla. Ut odio soluta non ullam voluptatum At dolor libero ab nisi consequatur et omnis voluptatem et accusamus velit! Quo laudantium corrupti et necessitatibus unde qui earum galisum eum quam tenetur sed consequatur maiores hic aspernatur aliquid nam totam porro.</p>
                    </div>
                    <div className="eliminacao">
                        <Checkbox
                            checked={eliminado}
                            onChange={eliminacao}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <p>Desclassificado por não usar os dados das agencias espaciais</p>
                    </div>
                </div>
            </>
          );
    
        case 1:
          return (
            <>
              <div className="enderecoDiv">
                <TextField
                  id="notaInovacao"
                  label="Nota de Inovação"
                  variant="outlined"
                  placeholder="Digite sua nota"
                  className="inovacaoNota"
                  margin="normal"
                  name="notaInovacao"
                  type="number"
                  value={notaInovacao}
                  onChange={(e) => setInovacao(e.target.value)}
                />
              </div>
              <TextField
                id="comentarioInovacao"
                label="Comentarios sobre inovação"
                variant="outlined"
                placeholder="Comente sobre a inovação no projeto"
                margin="normal"
                name="comentarioInovacao"
                className="comentarioInovacao"
                multiline
                value={comentarioInovacao}
                maxRows={10}
                onChange={(e) => setComentarioInovacao(e.target.value)}
              />
            </>
          );
        case 2:
          return (
            <>
              <div className="enderecoDiv">
                <TextField
                  id="notaAplicabilidade"
                  label="Nota de Aplicabilidade"
                  variant="outlined"
                  placeholder="Digite sua nota"
                  className="notaAplicabilidade"
                  margin="normal"
                  name="notaAplicabilidade"
                  type="number"
                  value={notaAplicabilidade}
                  onChange={(e) => setNotaAplicabilidade(e.target.value)}
                />
              </div>
              <TextField
                id="comentarioAplicabilidade"
                label="Comentarios sobre aplicabilidade"
                variant="outlined"
                placeholder="Comente sobre a aplicabilidade do projeto"
                margin="normal"
                name="comentarioAplicabilidade"
                className="comentarioAplicabilidade"
                multiline
                value={comentariosAplicabilidade}
                maxRows={10}
                onChange={(e) => setComentarioAplicabilidade(e.target.value)}
              />
            </>
          );
        case 3:
          return (
            <>
              <div className="enderecoDiv">
                <TextField
                  id="viabilidadeEconomica"
                  label="Nota de Viabilidade Economica"
                  variant="outlined"
                  placeholder="Digite sua nota"
                  className="viabilidadeEconomica"
                  margin="normal"
                  name="viabilidadeEconomica"
                  type="number"
                  value={viabilidadeEconomica}
                  onChange={(e) => setViabilidadeEconomica(e.target.value)}
                />
              </div>
              <TextField
                id="comentarioEconomico"
                label="Comentarios sobre a Viabilidade Econômica"
                variant="outlined"
                placeholder="Comente sobre a Viabilidade Econômica do projeto"
                margin="normal"
                name="comentarioEconomico"
                className="comentarioEconomico"
                multiline
                value={comentarioEconomico}
                maxRows={10}
                onChange={(e) => setComentarioEconomico(e.target.value)}
              />
            </>
        );
        case 4:
          return (
            <>
              <div className="enderecoDiv">
                <TextField
                  id="sustentabilidade"
                  label="Nota de Sustentabilidade"
                  variant="outlined"
                  placeholder="Digite sua nota"
                  className="sustentabilidade"
                  margin="normal"
                  name="sustentabilidade"
                  type="number"
                  value={sustentabilidade}
                  onChange={(e) => setSustentabilidade(e.target.value)}
                />
              </div>
              <TextField
                id="comentarioSustentabilidade"
                label="Comentarios sobre a sustentabilidade"
                variant="outlined"
                placeholder="Comente sobre a sustentabilidade do projeto"
                margin="normal"
                name="comentarioSustentabilidade"
                className="comentarioSustentabilidade"
                multiline
                value={commentSustentabilidade}
                maxRows={10}
                onChange={(e) => setCommentSustentabilidade(e.target.value)}
              />
            </>
        );
        case 5:
          return (
            <>
              <div className="enderecoDiv">
                <TextField
                  id="inclusao"
                  label="Nota de Inclusão"
                  variant="outlined"
                  placeholder="Digite sua nota"
                  className="inclusao"
                  margin="normal"
                  name="inclusao"
                  type="number"
                  value={inclusao}
                  onChange={(e) => setInclusao(e.target.value)}
                />
              </div>
              <TextField
                id="commentarioInclusao"
                label="Comentarios sobre a Inclusão"
                variant="outlined"
                placeholder="Comente sobre a inclusão no projeto"
                margin="normal"
                name="commentarioInclusao"
                className="commentarioInclusao"
                multiline
                value={commentInclusao}
                maxRows={10}
                onChange={(e) => setCommentInclusao(e.target.value)}
              />
            </>
        );
        default:
          return "AÇÃO DESCONHECIDA, ATUALIZE A PÁGINA, DESCULPE POR ISSO ";
      }
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {

    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleEnviarRespostas = async() => {

    const response = await api.salvaNotasProjeto(dataProject['id'], auth.user['id'], notaInovacao, comentarioInovacao, notaAplicabilidade, comentariosAplicabilidade, viabilidadeEconomica, comentarioEconomico, inclusao, commentInclusao, sustentabilidade, commentSustentabilidade).then((response) => {
      return response;
    });

    if(response.length === 0){
      modalConfirmation();
    };
  };

  const handleDesclassificarProjeto = async() => {
    
    const response = await api.desclassificaProjeto(dataProject['id']);

    modalError();

  }

  return (
    <div>
        <Card className="cardFormIncidente">
            <Stepper alternativeLabel activeStep={activeStep} className="marcadorPasso">
                {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = (
                    <Typography
                        variant="caption"
                        align="center"
                        style={{ display: "block" }}
                    >
                    </Typography>
                    );
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step {...stepProps} key={index}>
                    <StepLabel {...labelProps}>{step}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            
            <CardContent>
                {activeStep === steps.length ? (
                    <Typography variant="h3" align="center">
                    Thank You
                    </Typography>
                ) : (
                    <>
                        <form className="formCadastroIncidente">{getStepContent(activeStep)}</form>

                        {!eliminado? <div className="cardIncidenteButton">
                            <Button
                              className={classes.button}
                              variant="contained"
                              color="primary"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              style={{marginRight: '10px'}}
                              >
                              Voltar
                            </Button>
                            {activeStep === steps.length - 1 ? <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleEnviarRespostas}
                            >
                                Enviar
                            </Button> : <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                Próximo
                            </Button>}
                        </div> : <div className="cardIncidenteButton">
                            <Button
                              className={classes.button}
                              variant="contained"
                              color="error"
                              onClick={handleDesclassificarProjeto}
                              style={{marginRight: '10px'}}
                              >
                              Desclassificar
                            </Button>
                        </div> }
                    </> 
                )}
            </CardContent>
      </Card>
    </div>
  );
};