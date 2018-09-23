import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { modalBlur } from '../../global-styles/mixins';

export const Sidebar = styled.nav`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 75px;
  width: 15%;
  min-width: 150px;
  max-width: ${props => props.theme.sideBarWidth}px;
  background: ${props => props.theme.appPrimary};
  ${(props) => props.modalIsOpen && modalBlur};
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: grey;
  text-decoration: none;
  margin-left: 10px;
  height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;

  &.${activeClassName} {
    color: black;
    font-weight: 700;
    padding-left: 17px;
    background: ${props => props.theme.contentBackground};
    border-left: 8px solid ${props => props.theme.oxfordBlue};
    border-radius: 10px 0 0 10px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
