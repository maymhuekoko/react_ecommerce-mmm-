import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useState, useEffect } from 'react';
import ColorNav from './ColorNav';
import Footer from './Footer';

const Div = styled.div`
margin-top:90px;
`
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

const PreOrder = () => {
    const [active, setActive] = useState(0);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
          setActive(index);
        }
      };
  return (
    <div>
            <div>
                <ColorNav/>
            </div>
        <Div>
        <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
           Family
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
           Branded
        </Tab>

        <Tab onClick={handleClick} active={active === 2} id={2}>
           Eco Family
        </Tab>

        </Tabs>

        <>
        <Content active={active === 0}>
       
        </Content>
        <Content active={active === 1}>
       
        </Content>
        <Content active={active === 2}>
       
        </Content>
         </>
        </Div>
        <div>
            
            <Footer/>
        </div>
        </div>
  )
}

export default PreOrder