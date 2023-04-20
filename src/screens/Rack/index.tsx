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
    for (let i=1; i<23; i++) RackData.push({
        asset: 'SW' + String(i),
        index: String(i),
    });
    for (let i=23; i<43; i++) RackData.push({
        asset: '-',
        index: String(i),
    });

    return <Main>
        <Header>
            <HeaderText>Rack 01</HeaderText>
        </Header>
        
        <RackView>
            <FlatList
                data={RackData}
                keyExtractor={item => item.index}
                renderItem={({item, index}) => <U 
                    asset={item.asset}
                    index={index}
                />}
            />
        </RackView>
    </Main>
}