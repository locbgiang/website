import {Header, Body, Footer} from './components'
import styled from 'styled-components';

const FullApp = styled.div`
  background-color: #121212;
  height: auto;
  width: auto;
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
