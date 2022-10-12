
import React from 'react';
import styled from 'styled-components';

export function NavBar() {
    return(
        <NavBarContainer>
                <a>Child App 1</a>
                <a>Child App 2</a>
        </NavBarContainer>
    )
}

const NavBarContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem;
`;