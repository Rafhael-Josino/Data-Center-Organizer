import React,  { useState } from "react";
import { FlatList } from "react-native";

import { 
    Main,
    Header,
    HeaderText,
    RackView,
} from "./styles";
import { U } from "../../components/U";
import { UType } from "../../types";

export function Rack() {
    const [rackData, setRackData] = useState([
        {
            asset: 'SW1',
            index: '0'
        },
        {
            asset: '-',
            index: '1'
        },

    ]);

    const updateRackU = (newU: UType) => {
        const index = Number(newU.index);

        setRackData([
            ...rackData.slice(0, index),
            newU,
            ...rackData.slice(index+1)
        ]);
    }


    return <Main>
        <Header>
            <HeaderText>Rack 01</HeaderText>
        </Header>
        
        <RackView>
            <FlatList
                data={rackData}
                keyExtractor={item => item.index}
                renderItem={({item, index}) => <U 
                    asset={item.asset}
                    index={index}
                    updateRackU={updateRackU}
                />}
            />
        </RackView>
    </Main>
}