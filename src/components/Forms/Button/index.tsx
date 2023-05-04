import React from "react";

import { Container, Title } from './styles';
import { TouchableOpacityProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface Props extends TouchableOpacityProps {
    title: string;
}

export function Button(props: Props) {
    const { title, ...rest } = props;

    return <RectButton
      rippleColor='gray'
    >
      <Container {...rest}>
          <Title>
              { title }
          </Title>
      </Container>
    </RectButton>
}