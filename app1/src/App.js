import React, { useEffect } from 'react';
import styled from 'styled-components';

const parentElementId = 'parent';

const App = () => {
  useEffect(() => {
    import('app2/injectApp').then(injector => injector.default(parentElementId));
  }, []);

  // App2 will be injected in the div with parentElementId
  return (
    <ContainerApp>
      <Header>
        <h1>Container Application</h1>
        <h3>React Version {React.version}</h3>
      </Header>
      <FlexContainer>
      <LeftNavPanel />
      <ChildAppContainer>
        <div id={parentElementId}></div>
      </ChildAppContainer>
      </FlexContainer>
    </ContainerApp>
  );
};

const Header = styled.div`
  border-bottom: solid 2px blue;
`;

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
