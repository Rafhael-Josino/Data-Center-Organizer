import React from "react";
import { TouchableOpacityProps } from "react-native/types";

import { Container, U_text } from "./styles";

interface Props extends TouchableOpacityProps {
    asset: string; // for now receives only the name
    index: number;
    selected: boolean;
}

export function U(props: Props) {
    const { asset, index, selected, ...rest } = props;

    
    return <Container {...rest}>
        <U_text asset={asset} selected={selected}>{index+1}</U_text>
        <U_text asset={asset} selected={selected}>{asset}</U_text>
        <U_text asset={asset} selected={selected}>{index+1}</U_text>
    </Container>
}