import styled from "styled-components";

const Buttons = styled.button`
/* Auto layout */
margin-top: 5%;
padding: 14px 3.5%;
padding-right: 5.5%;
justify-content: center;
text-align: center;
transition: .5s;
gap: 14px;
cursor: pointer;
:hover {
    transition: .5s;
    background: var(--SecondaryHover);
}
.icon {
    position: absolute;
    margin-top: 8px;
    margin-left: 8px;
}
/* Secundaria/100 */

background: var(--Secondary);
border-radius: 48px;
border: none;

/* Sub 1 */

font-family: 'Lexend';
font-style: normal;
font-weight: 400;
font-size: 1.5em;
line-height: 40px;
/* identical to box height */

align-items: center;
text-align: center;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

`;

export default Buttons;