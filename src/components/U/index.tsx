import React, { useState, useEffect } from "react";
import { TouchableHighlight } from "react-native";

import { U_view, U_text, U_edit } from "./styles";
import { UType } from "../../types";

type Props = {
    asset: string; // for now receives only the name
    index: number;
    closeSelect?: () => void;
}

export function U(props: Props) {
    const { asset, index, closeSelect } = props;
    const [editU, setEditU] = useState(false);
    const [tempAsset, setTempAsset] = useState(asset);

    /**
     * Which is a good way to create buttons that toggle an element between
     * Text and TextInput
     */

    const onPressHandler = () => {
        if (!editU) setEditU(true);
    }

    const NameField = editU?
        <U_edit 
            value={tempAsset}
            onChangeText={setTempAsset}
            onSubmitEditing={() => setEditU(false)}
            autoFocus
        /> 
    :
        <U_text asset={asset}>
            {asset}
        </U_text>

    return <TouchableHighlight onPress={onPressHandler}>
        <U_view>
            <U_text asset={asset}>{index+1}</U_text>
            {NameField}
            <U_text asset={asset}>{index+1}</U_text>
        </U_view>
    </TouchableHighlight>
}