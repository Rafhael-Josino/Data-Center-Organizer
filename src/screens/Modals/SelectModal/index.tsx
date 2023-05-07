import React from "react";
import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import theme from '../../../global/styles/theme';
import { Button } from "../../../components/Forms/Button";
import {
    Container,
    Header,
    Title,
    Option,
    Name,
    Separator,
    Footer,
} from './styles';


type Props = {
    selection: number;
    setSelection: (selection: any) => void;
    closeSelect: () => void;
    list: string[];
}

export function SelectModal(props: Props) {
    const { selection, setSelection, closeSelect, list } = props;

    return <Container>
        <Header>
            <Title>Select one</Title>
        </Header>

        <FlatList
          data={list}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <RectButton
              rippleColor={theme.colors.headerBackground}
            >
              <Option 
                onPress={() => setSelection(index)}
                isActive={index === selection}
              >
                <Name>{item}</Name>
              </Option>
            </RectButton>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />

        <Footer>
          <Button 
            title='Select' 
            onPress={closeSelect}
          />
        </Footer>
    </Container>
}