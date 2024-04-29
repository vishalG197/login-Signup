import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;

  padding: 10px 100px;
  height: 100vh;
  background-color: #9b90c2; /* purple-200 */
`;

const Container = styled.div`
background-color: aliceblue;
border-radius:10px;
  padding: 50px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
 
`;

const ImgCard = styled.div`
  width: 50%;
  height: 100%; /* Set height to match the container */
  /* border: 1px solid slateblue; */
  border-radius: 10px;
`;

const Card = styled.div`
  /* background-color: #ffffff; white */
  /* border: 1px solid slateblue; */
  width: 50%;
  height: 100%;
  border-radius: 0.5rem;
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem; /* text-2xl */
  color: #383737; /* zinc-700 */
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem; /* text-base */
  color: #4b4848; /* zinc-500 */
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: calc(100% - 2rem);
  padding: 0.75rem 1rem;
  border: 1px solid #cfcfcf; /* zinc-300 */
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: calc(50% - 0.5rem);
  background-color: #6f42c1; /* purple-500 */
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7c56d3; /* purple-600 */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%; /* Ensure the image fills the container */
  border-radius: 0.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const SignupPage = () => {
  return (
    <MainContainer>
      <Container>
        <ImgCard>
          <Image src="https://justjeans.jgl.com.au/JJ/aurora/images/espot/static/account/JJ24AW_CreateAccount.png" alt="Woman holding a tablet" />
        </ImgCard>
        <Card>
          <div>
            <Title>SIGN UP</Title>
            <Description>Create your account lorem ipsum dolor sit?</Description>
          </div>
          <div style={{display:'flex', padding:'0rem 1rem'}}>
            <Input style={{marginRight:'1rem'}} type="text" placeholder="First Name" />
            <Input  type="text" placeholder="Last Name" />
            <div>
            </div>
         
          </div>
          
          <div>
            <Input type="tel" placeholder="Phone Number" />
          </div>
          <div>
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <Input type="password" placeholder="Password" />
          </div>
          <div>
            <Input type="password" placeholder="Confirm Password" />
          </div>
          <div>
            <Button>Sign Up</Button>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#4b4848' }}>Sign up with</p>
        </Card>
      </Container>
    </MainContainer>
  );
}

export default SignupPage;
