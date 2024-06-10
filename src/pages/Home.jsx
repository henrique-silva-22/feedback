import { CardContainer } from "./Home.styles";

import iconStartImg from "../assets/icon-star.svg"

export function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src="iconStartImg " alt="" />
      </IconContainer>
      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento</p>

      <ButtonContainer>
        <butto>1</butto>
        <butto>2</butto>
        <butto>3</butto>
        <butto>4</butto>
        <butto>5</butto>
      </ButtonContainer>

      <button>Enviar</button>
    </CardContainer>
  )
}
