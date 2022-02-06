import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --background: #f8f2f5;
        --red: #e2e4de;
        --blue: #5429cc;

        --blue--ligth: #64933FF;

        --text-title: #363f5f;

        --text-body: #969cb3;

        --background: #f8f2f5;

        --snape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; // Mantem o tamanho da caixa fixo para não somar com o padding.
    }

    html {
        @media (max-width: 1080px) { // esse comando é acionado quando o usuário tiver uma tela de até 1080px
            font-size: 93.75%;
        }

        @media (max-width: 720px) { // esse comando é acionado quando o usuário tiver uma tela de até 720px
            font-size: 87.5%;
        }
    }

    body {
        background: var()(--background);
        -webkit-font-smoothing: antialiased; // Para as fontes ficarem mais nítidas
    }

    button {
        cursor: pointer; // faz com que o botão seja clicavel
    }

    [disabled] { // Aplica esse estilo a tudo que estiver desabilitado na aplicação
        opacity: 0.6;
        cursor: not-allowed; // Muda a sentinha para o símbolo de não permitido
    }
`