import React from 'react';

import { FaBars} from 'react-icons/fa';
import { MdHeight } from 'react-icons/md';
import { NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav= styled.nav`
       background: #63D471;
       height: 85px;
       display: flex;
       justify-content: space-betweneen;
       padding: 0.2rem calc(100vw-100px)/2);
       z-index: 12;
       `;
export const NavLink=styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: noone;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    color: #000000;
}
`;
export const Bars = styled(FaBars)`
display: noone;
color: #808080;
@media screen and (max-width: 768px){
    displa: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right:-24px;
@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/*Second navigation*/
margin-left: 24px;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
}
`;

export default {Nav, NavBtn, NavBtnLink, NavLink};