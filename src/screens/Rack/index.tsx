import React from "react";
import { FlatList } from "react-native";

import { 
    Main,
    Header,
    HeaderText,
    RackView,
} from "./styles";
import { U } from "../../components/U";

export function Rack() {
    const RackData = [] // this will be a prop
    for (let i=1; i<43; i++) RackData.push('SW' + String(i))

    return <Main>
        <Header>
            <HeaderText>Rack 01</HeaderText>
        </Header>
        
        <RackView>
            <FlatList
                data={RackData}
                keyExtractor={item => item}
                renderItem={({item, index}) => <U 
                    asset={item}
                    index={index}
                />}
            />
        </RackView>
    </Main>
}