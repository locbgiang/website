import {Header, Body, Footer} from './components'
import styled from 'styled-components';

const FullApp = styled.div`
  background-color: #0d0d0d;
  min-height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <FullApp>
      <Header />
        <Body />
      <Footer />
    </FullApp>
  )
}

export default App
