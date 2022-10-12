import React from 'react';
import styled from 'styled-components';

const App = () => (
  <ChildAppContainer>
    <h1>Child App</h1>
    <h3>React Version {React.version}</h3>
  </ChildAppContainer>
);

export const ChildAppContainer = styled.div`
  width: calc(100vw - 250px);
  border: solid 1px red;
  height: 900px;
`;

export default App;
