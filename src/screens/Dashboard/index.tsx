import React from "react";

import { 
    Main,
    Header,
    HeaderText,
    Photo,
    Menu,
    MenuIcon,
    NewDataCenterIcon,
    OpenDataCenterIcon,
} from "./styles";

export function Dashboard() {

    return <Main>
        <Header>
            <HeaderText>DataCenter Organizer</HeaderText>

            <Photo source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        </Header>

        <Menu>
            <MenuIcon>
                <NewDataCenterIcon name='page-add' />
            </MenuIcon>

            <MenuIcon>
                <OpenDataCenterIcon name='edit' />
            </MenuIcon>
        </Menu>
        
    </Main>
}