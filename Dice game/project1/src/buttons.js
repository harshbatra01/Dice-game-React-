import { styled } from "styled-components";

export const Button = styled.button`
background-color: black;
color: white;
border: none;
border-radius: 5px;
padding: 10px 18px;
min-width: 220px;
font-size: 16px;
transition: 0.28s background ease;
cursor: pointer;

&:hover {
background-color: #383838;
transition: 0.25s background ease;
}
`;

export const Outlinebutton1 = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;


&:hover {
    background-color: black;
    color: white;
    
    }

`;

export  const Outlinebutton2 = styled(Button)`

&:hover {
background-color: white;
color: black;
border: 1px solid black;
}
`;
