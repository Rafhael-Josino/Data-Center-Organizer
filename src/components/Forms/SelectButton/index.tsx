import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
    Category,
    Container,
    Icon,
} from './styled';

interface Props extends TouchableOpacityProps {
    title: string;
}

export function SelectButton(props: Props) {
    const { title, ...rest } = props;

    return <Container {...rest}>
        <Category>{title}</Category>

        <Icon name='chevron-down' />
    </Container>
}