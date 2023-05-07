import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  Modal, 
  Alert, 
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { SelectModal } from '../Modals/SelectModal';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { SelectButton } from '../../components/Forms/SelectButton';
import { RackModal } from '../Modals/RackModal';

import { TestData, RoomType, RackType } from "../../utils/SelectOptions";

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
    const [registerSize, setRegisterSize] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState<number>(-1);
    const [selectedRack, setSelectedRack] = useState<number>(-1);
    const [selectedU, setSelectedU] = useState<number[]>([]);
    const [modalSelect, setModalSelect] = useState<'closed'|'room'|'rack'|'U'>('closed')
    const [testData, setTestData] = useState<RoomType[]>([]);
    const [loadDataToggle, setLoadDataToggle] = useState(true);


    /**
     * Handlers
     */
    const setRegisterSizeHandler = (input: string) => {
      setRegisterSize(Math.ceil(Number(input)));
    }

    const setModalRackHandler = () => {
      if (selectedRoom !== -1) {
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
      if (selectedRack === -1) {
        Alert.alert('Hold up!', 'The rack must be chosen first');
      }
      else if (registerName === "" || registerName === "-") {
        Alert.alert('Hold up!', 'Invalid name to new equipament');    
      }
      // else if (testData[selectedRoom].assets.includes(registerName)) {
      //   Alert.alert('Hold up!', 'There is already an equipament with this name');    
      // }
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

    const setSelectRoomHandler = (selectedRoom: number) => {
      setSelectedRoom(selectedRoom);
    }

    const setSelectedRackHandler = (selectedRack: number) => {
      setSelectedRack(selectedRack);
    }

    const setSelectedUHandler = (index: number) => {
      const newSelectedUs = [];
      
      for (let i=index; i<index + Number(registerSize); i++) {
        newSelectedUs.push(i);
      }

      setSelectedU(newSelectedUs);
    }

    const registerHandler = async () => {
      const enableToRegister = (
        registerName !== '' &&
        registerSize > 0 &&
        selectedRoom !== -1 &&
        selectedRack !== -1 &&
        selectedU.length
      ); 

      if (!enableToRegister) {
        Alert.alert('Unable to Register', 'Please check the information provided');
      } else {
        // get racks's data, make a copy through .map so is possible to edit and save it
        try {
          selectedU.map(u => {
            testData[selectedRoom].racks[selectedRack].assets[u] = registerName;
          });

          await AsyncStorage.setItem('@DataCenterOrganizer:testData', JSON.stringify(testData));
          
          setRegisterName("");
          setRegisterSize(0);
          setSelectedRoom(-1);
          setSelectedRack(-1);
          setSelectedU([]);
          setLoadDataToggle(!loadDataToggle);

          // Alert.alert("Successful!", "Data Center updated");
        } catch (err) {
          console.log('Error at loading data\n', err);
          Alert.alert("Error", "Data update failed");      
        }
      }
    }     


    /**
     * Use Effect
     */
    useEffect(() => {
      const loadData = async () => {
        try {
          const loadedData = await AsyncStorage.getItem('@DataCenterOrganizer:testData');
    
          if (loadedData?.length) {
            setTestData(JSON.parse(loadedData));
          } else {
            setTestData(TestData);
          }
        } catch (err) {
          console.log('Error at loading data\n', err);
          Alert.alert("Error", "Data loading failed");
        }
      }
      
      loadData();
    }, [loadDataToggle]);
  
    useEffect(() => {
        setSelectedRack(-1);
    }, [selectedRoom]);

    useEffect(() => {
        setSelectedU([])
    }, [registerName, registerSize, selectedRoom, selectedRack]);


    /**
     * Body
     */
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Register</Title>
        </Header>
        
        <Form>
          <Fields>
            <Input
              placeholder='Name'
              value={registerName}
              inputMode='text'
              onChangeText={setRegisterName}
              autoCapitalize='none'
            />

            <Input
              placeholder='Size'
              value={String(registerSize || '')}
              inputMode='numeric'
              onChangeText={text => setRegisterSizeHandler(text)}
            />
              
            <SelectButton 
              title={`Room: ${testData[selectedRoom]?.name || ''}`} 
              onPress={() => setModalSelect('room')}    
              activeOpacity={0.7}
            />

            <SelectButton 
              title={`Rack: ${testData[selectedRoom]?.racks[selectedRack]?.name || ''}`} 
              onPress={setModalRackHandler}
              activeOpacity={0.7}
            />

            <SelectButton 
              title={`U: ${selectedU.length? selectedU[0]+1 : ""}`}
              onPress={setModalUHandler}
              activeOpacity={0.7}
            />
          </Fields>
          
          <Button title='Send' onPress={registerHandler} />
        </Form>
        
        <Modal visible={modalSelect === 'room'}>
          <SelectModal 
            selection={selectedRoom}
            setSelection={setSelectRoomHandler}
            closeSelect={() => setModalSelect('closed')}
            list={testData.map(r => r.name)}
          />
        </Modal>

        <Modal visible={modalSelect === 'rack'}>
          <SelectModal 
            selection={selectedRack}
            setSelection={setSelectedRackHandler}
            closeSelect={() => setModalSelect('closed')}
            list={testData[selectedRoom]?.racks.map(r => r.name)}
          />
        </Modal>

        <Modal visible={modalSelect === 'U'}>
          <RackModal
            selectedU={selectedU}
            setSelectUHandler={setSelectedUHandler}
            rackData={testData[selectedRoom]?.racks[selectedRack]}
            closeSelect={() => setModalSelect('closed')}
            registerName={registerName}
            registerSize={registerSize}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
}