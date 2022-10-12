import React from 'react';
import styled from 'styled-components';

export function Header() {
    return (
        <Container>
        <h1>Container Application</h1>
        <h3>React Version {React.version}</h3>
      </Container>
    );
}

const Container = styled.div`
  border-bottom: solid 2px blue;
`;