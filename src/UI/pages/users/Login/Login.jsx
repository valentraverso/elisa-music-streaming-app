import ButtonBigAuth0 from "./components/ButtonBigAuth0/ButtonBigAuth0";
import { ContainerButtonsLogin, ContainerLogin, ContainerWelcome, H1Welcome, SpanWelcome, LineWithDot } from "../../../Styles/Pages/Users/LoginStyle";

export function Login () {
  return (
    <ContainerLogin>
      <ContainerWelcome>
        <H1Welcome>Nice to see you!</H1Welcome>
        <SpanWelcome>You need to be loged to enjoy all our features!</SpanWelcome>
      </ContainerWelcome>
      <ContainerButtonsLogin>
        <ButtonBigAuth0 text='Login'/>
        <LineWithDot/>
        <ButtonBigAuth0 text='Register'/>
      </ContainerButtonsLogin>
    </ContainerLogin>
  )
}
