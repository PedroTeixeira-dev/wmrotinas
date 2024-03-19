import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        background-image: url(https://www.whitemartins.com.br/-/media/corporate/praxair-brazil/images/inovacao/destaque-inovacao.png?rev=8217dc7139374e348603391856b3ea62&h=868&w=1400&la=pt-BR&hash=C73E3F931371B4DB547A5B066823B37C5F8094B6);
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
    }
`