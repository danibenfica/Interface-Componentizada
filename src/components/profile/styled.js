import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;

`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
div {
    margin: 8px;
    text-align: center;
}

`;

export const WrapperUserGeneric = styled.div`
display: flex;
align-items: center;
margin-top: 8px;
h3 {
    margin-right: 8px;
}

a{
    color: #FF00FF;
    font-weight: bold;
}

`;

export const WrapperImg = styled.img`
width: 150px;
margin: 8px;
border-radius: 50%;
border: 4px solid #DDA0DD;

`;

export const WrapperInfoUser = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
height: 200px;
margin-left: 8px;
h1 {
    font-size: 29px;
    font-weight: bold;
}

h3 {
    font-size: 18px;
    font-weight: bold;
}

h4 {
    font-size: 16px;
    font-weight: bold;
}


`;

