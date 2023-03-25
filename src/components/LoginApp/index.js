import {useState} from 'react'
import {Container,CardContainer,Header,Button} from './styled'

const LoginApp=()=>{
    const [isLogin,setIsLogin]=useState(false)

      const onClickButton=()=>{
        setIsLogin(prevState=>!prevState)
      }

      const headerText=isLogin?"Welcome User":"Please Login"
      const buttonText= isLogin?"Logout":"Login"

    return(
        <Container>
            <CardContainer>
                <Header>{headerText}</Header>
                <Button onClick={onClickButton}>{buttonText}</Button>
            </CardContainer>
        </Container>
    )

}
export default LoginApp