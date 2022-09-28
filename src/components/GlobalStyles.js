import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #88A795;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const ContactsTitle = styled.h2`
    text-align: center;
    margin-bottom: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const WarningMessage = styled.p`
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.almostDarkGreen};
`;