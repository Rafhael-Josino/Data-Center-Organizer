import React from "react";
import { FlatList } from "react-native";

import { RoomType, RackType } from "../../../utils/SelectOptions";
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
    selection: RoomType | RackType;
    setSelection: (selection: any) => void;
    closeSelect: () => void;
    list: RoomType[] | RackType[];
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
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
                <Option 
                    onPress={() => setSelection(item)}
                    isActive={item.key === selection.key}
                >
                    <Name>{item.name}</Name>
                </Option>)}
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