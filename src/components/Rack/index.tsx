import React from "react";
import { FlatList } from "react-native";

import { RackView } from "./styles";
import { U } from "../U";

export function Rack() {
    // Make a flatlist

    const RackData = [] // this will be a prop
    for (let i=1; i<43; i++) RackData.push('SW' + String(i))

    return <RackView>
        <FlatList
            data={RackData}
            keyExtractor={item => item}
            renderItem={({item, index}) => <U 
                asset={item}
                index={index}
            />}
        />
    </RackView>
}