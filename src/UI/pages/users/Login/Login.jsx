import ButtonBigAuth0 from "./components/ButtonBigAuth0/ButtonBigAuth0";
import { ContainerButtonsLogin, ContainerLogin, ContainerWelcome, H1Welcome, SpanWelcome, LineWithDot } from "../../../Styles/Pages/Users/LoginStyle";
import Typewriter from 'typewriter-effect';

export function Login () {
  return (
    <ContainerLogin>
      <ContainerWelcome>
      <H1Welcome>Nice to see you!</H1Welcome>
      <Typewriter
                options={{
                  delay: 50,
                  loop: false
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span>You need to be loged to enjoy all our features!</span>')
                    .start()
                }}
              />
      </ContainerWelcome>
      <ContainerButtonsLogin>
        <ButtonBigAuth0 text='Login'/>
        <LineWithDot/>
        <ButtonBigAuth0 text='Register'/>
      </ContainerButtonsLogin>
    </ContainerLogin>
  )
}
