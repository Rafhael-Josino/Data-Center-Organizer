import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
    Category,
    Container,
    GestureContainer,
    Icon,
} from './styled';
import theme from "../../../global/styles/theme";

interface Props extends TouchableOpacityProps {
    title: string;
}

export function SelectButton(props: Props) {
    const { title, ...rest } = props;

    return <GestureContainer
      rippleColor={theme.colors.headerBackground}
    >
      <Container {...rest}>
        <Category>{title}</Category>

        <Icon name='chevron-down' />
      </Container>
    </GestureContainer>
}