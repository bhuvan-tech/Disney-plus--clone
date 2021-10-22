import styled from "styled-components";

const Login=(props)=>{
    return(
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="logos" />
                <SignUp>
                    <AButton>
                        GET IT ALL HERE
                    </AButton>
                </SignUp>
                <Description>
                adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="logo2" />
            </CTA>
        </Content>
    </Container>
    );
    
};

 const Container = styled.section`
    background-image:url("/images/login-background.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    overflow: hidden;
    display: flex;
    color: yellow;
    flex-diredtion: column;
    text-align: center;
    height:100vh;
`;

const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`;
const CTA =styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    flex-wrap:wrap;
    flex-direction:column;
    transition-timing-function: ease-out;
    transition:opacity: 0.2s;
`
const CTALogoOne =styled.img`
    margin-bottom: 12px;
    max-width:600px;
    min-height:10px;
    display:block;
    width:80%;
    align-self:center;

`
const SignUp =styled.button`
    display:flex;
    align-self:center;
    max-width:600px;
    background-color: #0063e5;
    margin-bottom: 12px;
    width:100%;
    height:50px;
    align-items:center;
    border: 15px solid transparent;
    border-radius:5px;

`
const AButton = styled.a`
    font-weight:bold;
    color:#fff;
    text-align:center;
    letter-spacing: 1.5px;
    font-size:18px;
    display:flex;
    align-self:center;
    justify-content:center;
    width:100%;
    
    a:hover{
        background-color: #0483ee;
    }

`

const Description =styled.p`
    color:hsla(0,0%,95.3%,1);
    font-size:14px;
    margin : 0 0 24px;
    line-heigth:1.5;
    letter-spaceing:1.5px;
    max-width:600px;
    display:flex;
    align-self:center;
`

const CTALogoTwo = styled.img`
    max-width:600px;
    margin-bottom:20px;
    display:flex;
    align-self:center;
    justify-content:center;
    width:100%;
`

export default Login;