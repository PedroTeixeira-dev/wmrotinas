import styled from 'styled-components'

export const SelectorDiv = styled.section`
margin: 16px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: #f0f0f0;
opacity: 0.9;
width:420px;
height:100% ;
padding-bottom: 20px;
border-radius: 10px;

button {
    margin-top: 32px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid green;
    color: green;
    font-weight: bold;
    display: block ;
    cursor: pointer;
}

.rotinas {
    margin-top:16px;

    div {
        margin-top: 8px;
    }
}

.range {
    width:100% ;
    color: green;
    background-color: green ;
}
`