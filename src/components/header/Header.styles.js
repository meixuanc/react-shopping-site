import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    text-transform: uppercase;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
	width: 70px;
    padding: 25px;
    opacity: 0.85;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    cursor: pointer;
`;
