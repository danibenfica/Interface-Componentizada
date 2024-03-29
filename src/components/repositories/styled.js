import styled from "styled-components";

import {Tabs, TabList, Tab, TabPanel} from "react-tabs";


export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top:  16px;
`;
export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid ##FFC0CB;
padding: 16px;
user-select: none;
cursor: pointer;
z-index: 99999;
background-color: #FFE4E1;
margin-left: 15px;

&:focus {
    outline: none;
}

&.is-selected{
    border-top-left-radius: 16px;  
    border-top-right-radius: 16px;  
    border-bottom-left-radius: 0;  
    border-bottom-right-radius: 0;  
    border-bottom: 1px solid white;
    box-shadow: 5px 3px 5px #FF00FF;
    background-color: #FFB6C1;
    font-weight: bold;
}

`

export const WrapperTabPanel = styled(TabPanel)`
padding: 16px;
border: 1px solid #FFC0CB;
box-shadow: 0 0 1em #FF00FF;
display: none;
margin-top: 20px;
background-color: #FFE4E1;


&.is-selected {
   display: block;
   
    

}
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div `
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`

