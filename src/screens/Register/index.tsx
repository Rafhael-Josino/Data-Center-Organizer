import React, { useState, useEffect } from 'react';
import { Modal, Alert } from 'react-native';

import { SelectModal } from '../Modals/SelectModal';
import  { Rooms, Racks, RoomType, RackType } from '../../utils/SelectOptions';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { SelectButton } from '../../components/Forms/SelectButton';
import { RackModal } from '../Modals/RackModal';

import { 
    Container,
    Fields,
    Form, 
    Header, 
    Title,
} from './styles';

export function Register() {
    /**
     * State
     */
    const [registerName, setRegisterName] = useState('');
    const [registerSize, setRegisterSize] = useState('0');
    const [selectedRoom, setSelectedRoom] = useState<RoomType>({
        key: '-1',
        name: '',
    });
    const [selectedRack, setSelectedRack] = useState<RackType>({
        key: '-1',
        name: '',
        assets: [],
    });
    const [selectedU, setSelectedU] = useState<number[]>([]);
    const [modalSelect, setModalSelect] = useState<'closed'|'room'|'rack'|'U'>('closed')


    /**
     * Handlers
     */
    const setModalRackHandler = () => {
        if (selectedRoom.key !== '-1') {
            setModalSelect('rack')
        }
        else {
            Alert.alert('Hold up!', 'The room must be chosen first', [{
                text: 'Ok',
                style: 'cancel',
            }]);
        }
    }

    // make name and size states that are necessary to open U selector modal
    const setModalUHandler = () => {
        if (selectedRack.key === '-1') {
            Alert.alert('Hold up!', 'The rack must be chosen first', [{
                text: 'Ok',
                style: 'cancel',
            }]);
        }
        else if (registerName === "" || registerName === "-") {
            Alert.alert('Hold up!', 'Invalid name to new equipament', [{
                text: 'Ok',
                style: 'cancel',
            }]);    
        }
        else if(Number(registerSize) <= 0) {
            Alert.alert('Hold up!', 'Invalid size of new equipament', [{
                text: 'Ok',
                style: 'cancel',
            }]);        
        }
        else {
            setModalSelect('U')
        }
    }    

    const setSelectRoomHandler = (selectedRoom: RoomType) => {
        setSelectedRoom(selectedRoom);
    }

    const setSelectedRackHandler = (selectedRack: RackType) => {
        setSelectedRack(selectedRack);
    }

    const setSelectedUHandler = (index: number) => {
        const newSelectedUs = [];
        
        for (let i=index; i<index+Number(registerSize); i++) {
            newSelectedUs.push(i);
        }

        setSelectedU(newSelectedUs);
    }

    const registerHandler = () => {
        const enableToRegister = 
            registerName !== '' &&
            Number(registerSize) > 0 &&
            selectedRoom.key !== '-1' &&
            selectedRack.key !== '-1' &&
            selectedU.length;

        if (!enableToRegister) {
            Alert.alert('Unable to Register', 'Please check information provided', [{
                text: 'Ok',
                style: 'cancel',
            }]);
        } else {
            // Submit form
        }
    }     


    /**
     * Effect
     */
    useEffect(() => {
        setSelectedRack({ key: '-1', name: '', assets: [] });
    }, [selectedRoom]);

    useEffect(() => {
        setSelectedU([])
    }, [registerSize, selectedRoom, selectedRack]);


    /**
     * Body
     */
    return <Container>
        <Header>
            <Title>Register</Title>
        </Header>
        
        <Form>
            <Fields>
                <Input
                    placeholder='Name'
                    inputMode='text'
                    onChangeText={setRegisterName}
                    />

                <Input
                    placeholder='Size'
                    inputMode='numeric'
                    onChangeText={setRegisterSize}
                />
                
                <SelectButton 
                    title={`Room: ${selectedRoom.name}`} 
                    onPress={() => setModalSelect('room')}    
                    activeOpacity={0.7}
                />

                <SelectButton 
                    title={`Rack: ${selectedRack.name}`} 
                    onPress={setModalRackHandler}
                    activeOpacity={0.7}
                />

                <SelectButton 
                    title={`U: ${selectedU.length? selectedU[0]+1 : ""}`}
                    onPress={setModalUHandler}
                    activeOpacity={0.7}
                />
            </Fields>
            
            <Button 
                title='Send' 
                onPress={registerHandler}    
            />
        </Form>
        
        <Modal visible={modalSelect === 'room'}>
            <SelectModal 
                selection={selectedRoom}
                setSelection={setSelectRoomHandler}
                closeSelect={() => setModalSelect('closed')}
                list={Rooms}
            />
        </Modal>

        <Modal visible={modalSelect === 'rack'}>
            <SelectModal 
                selection={selectedRack}
                setSelection={setSelectedRackHandler}
                closeSelect={() => setModalSelect('closed')}
                list={Racks[Number(selectedRoom.key)]}
            />
        </Modal>

        <Modal visible={modalSelect === 'U'}>
            <RackModal
                selectedU={selectedU}
                setSelectUHandler={setSelectedUHandler}
                rackData={selectedRack}
                closeSelect={() => setModalSelect('closed')}
                registerName={registerName}
                registerSize={Number(registerSize)}
            />
        </Modal>
    </Container>
}