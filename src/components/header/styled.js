import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;

    input {
        border: 1px solid #DDA0DD;
        border-radius: 8px;
        width: 100%;
        height: 40px;
        background-color: #FFC0CB;
        padding: 8px;
        font-weight: 400;

        &:hover{
            box-shadow: 0 0 1em #FF00FF;
            background-color: #FFCCFF;

        }
        
        &.is-selected{
            border: 1px solid #DDA0DD;
            background-color: #FFCCFF;
        }

    }

    button {
        background-color: #FFC0CB;
        padding: 8px 16px;
        margin: 0 8px;
        border: 1px solid #FF00FF;
        border-radius: 20%;
        
        &:hover{
            box-shadow: 0 0 1em #FF00FF;
            background-color: #FFCCFF;
        }
       
        span {
            font-weight: bold
        }
        
    }

`;