import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink,SidebarRoute,SidebarWrap,Sidebtnwrap, SidebarMenu} from './SidebarElements'
const index = ({isOpen, toggle}) => {
    return (
      <div>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon></CloseIcon>
          </Icon>
          <SidebarWrap>
            <SidebarMenu>
              <SidebarLink to="about">About</SidebarLink>
              <SidebarLink to="Discover">Discover</SidebarLink>
              <SidebarLink to="Services">Services</SidebarLink>
              <SidebarLink to="Sign-up">Sign Up</SidebarLink>
            </SidebarMenu>
            <Sidebtnwrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </Sidebtnwrap>
          </SidebarWrap>
        </SidebarContainer>
      </div>
    );
}

export default index
