import { CardContainer, IconContainer, ButtonContainer, ResultContainer } from "../pages/Home.styles";

import iconStartImg from "../assets/icon-star.svg"
import thankYouimg from "../assets/illustration-thank-you.svg"

export function Home() {
  let aparecerResultado = true

  return (
   aparecerResultado == false ?(
    <CardContainer>
    <IconContainer>
      <img src={iconStartImg} alt="Icone de estrela" />
    </IconContainer>
    <h1>Como foi o atendimento?</h1>
    <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento</p>

    <ButtonContainer>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </ButtonContainer>

    <button>Enviar</button>
  
  </CardContainer>
) : (
  <CardContainer>
    <img src={thankYouimg} alt="imagen de agradecimento" />

    <ResultContainer>
      <p>Você selecionou 4 de 5</p>
    </ResultContainer>
    
    <h1>Obrigado!</h1>

    <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
  </CardContainer>
   )
  )
}
