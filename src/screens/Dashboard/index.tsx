import React from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { 
    Main,
    Header,
    HeaderText,
    Photo,
} from "./styles";

export function Dashboard() {

    // return <TouchableWithoutFeedback style={{ height: '100%' }}>
    return <Main>
      <Header>
          <HeaderText>DataCenter Organizer</HeaderText>

          <Photo source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
      </Header>
    </Main>
}