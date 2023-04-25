import React from "react";
import { FlatList, Alert } from "react-native";

import  { RackType } from '../../../utils/SelectOptions';
import { Button } from "../../../components/Forms/Button";
import { 
    Container,
    Header,
    HeaderText,
    RackView,
    Footer,
} from "./styles";
import { U } from "../../../components/Forms/U";

type Props = {
    selectedU: number[];
    setSelectUHandler: (index: number) => void;
    rackData: RackType
    closeSelect: () => void;
    registerName: string;
    registerSize: number;
}

export function RackModal(props: Props) {
    const { 
        selectedU, 
        setSelectUHandler,
        rackData, 
        closeSelect, 
        registerName,
        registerSize,
    } = props;

    const onPressHandler = (index: number) => {
        if (rackData.assets.slice(index, index+registerSize).some(asset => {
            return asset !== '-'
        })) {
            Alert.alert('Error', 'There are already equipaments present');
        }
        else if (rackData.assets.length - index < registerSize) {
            Alert.alert('Error', 'There is no space available in the rack');
        }
        else {
            setSelectUHandler(index);
        }
    }

    return <Container>
        <Header>
            <HeaderText>{rackData.name}</HeaderText>
        </Header>
        
        <RackView>
            <FlatList
                data={rackData.assets}
                keyExtractor={item => String(Math.random())}
                renderItem={({item, index}) => {
                        const selected = selectedU.includes(index)
                    
                        return <U 
                            asset={selected? registerName : item}
                            index={index}
                            selected={selected}
                            onPress={() => onPressHandler(index)}
                        />
                    }
                }
            />
        </RackView>

        <Footer>
            <Button 
                title='Select' 
                onPress={closeSelect}
            />
        </Footer>
    </Container>
}