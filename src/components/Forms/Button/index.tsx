import React from "react";

import {
    Container,
    Title,
} from './styles';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    title: string;
}

export function Button(props: Props) {
    const { title, ...rest } = props;

    return <Container {...rest}>
        <Title>
            { title }
        </Title>
    </Container>
}