import React from "react";

import { U_view, U_text } from "./styles";

type Props = {
    asset: string; // for now receives only the name
    index: number;
}

export function U(props: Props) {
    const { asset, index } = props;

    return <U_view>
        <U_text asset={asset}>{index+1}</U_text>
        <U_text asset={asset}>{asset}</U_text>
        <U_text asset={asset}>{index+1}</U_text>
    </U_view>
}