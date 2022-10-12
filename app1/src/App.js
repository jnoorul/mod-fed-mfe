import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { NavBar } from './NavBar';

const parentElementId = 'parent';

const App = () => {
  useEffect(() => {
    import('app2/injectApp').then(injector => injector.default(parentElementId));
  }, []);

  // App2 will be injected in the div with parentElementId
  return (
    <ContainerApp>
      <Header />
      <FlexContainer>
      <LeftNavPanel>
        <NavBar />
      </LeftNavPanel>
      <ChildAppContainer>
        <div id={parentElementId}></div>
      </ChildAppContainer>
      </FlexContainer>
    </ContainerApp>
  );
};



const ContainerApp = styled.div`
  border: solid 2px blue;
  height: calc(100vh - 50px);
  text-align: center;
`;

const ChildAppContainer = styled.div`
  margin: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftNavPanel = styled.div`
  border-right: solid 2px blue;
  width: 200px;
  height: calc(100vh - 170px);
`;



export default App;
