import React from 'react';
import styled from 'styled-components';

const ChildAppContainer = styled.div`
  width: calc(100vw - 250px);
  border: solid 1px red;
  height: 900px;
`;

const App = () => (
  <ChildAppContainer>
    <h1>Child App</h1>
    <h3>React Version {React.version}</h3>
    <h3>Styled Components Version {styled.version}</h3>
  </ChildAppContainer>
);



export default App;
