import {View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addMemberList, updateMemberList} from '../redux/reducers/member';
import {v4 as uuidv4} from 'uuid';
import {TextInputMask} from 'react-native-masked-text';
import {removeMask} from '../util/mask';
export default function FormmScreen({navigation, route}) {
  const memberStore = useSelector(state => state.member);
  const dispatch = useDispatch();
  const memberList = memberStore.memberList;
  const {type, idEdit} = route.params;

  useEffect(() => {
    if (type == 'edit') onGetUserEdit();
  }, []);

  const [phone, setPhone] = useState(null);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);

  const [isNameError, setIsNameError] = useState(false);
  const [isUserIdError, setIsUserIdError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);

  const onGetUserEdit = () => {
    const userEdit = memberList.find(el => {
      return el.id == idEdit;
    });
    setPhone(userEdit.phone);
    setUserId(userEdit.userId);
    setName(userEdit.name);
  };

  const submitForm = () => {
    if (!validate()) return;
    const data = {
      id: type == 'edit' ? idEdit : uuidv4(),
      name,
      userId: removeMask(userId),
      phone: removeMask(phone),
    };
    if (type == 'edit') {
      dispatch(updateMemberList(data));
    } else {
      dispatch(addMemberList(data));
    }
    navigation.pop();
  };

  const validate = () => {
    let isPass = true;
    setIsNameError(false);
    setIsPhoneError(false);
    setIsUserIdError(false);
    if (!name) {
      Alert.alert('Error', 'Please check NAME again', [
        {text: 'OK', onPress: () => console.log('OK')},
      ]);
      isPass = false;
      setIsNameError(true);
    } else if (!userId || removeMask(userId).length < 13) {
      Alert.alert('Error', 'Please check ID  again', [
        {text: 'OK', onPress: () => console.log('OK')},
      ]);
      isPass = false;
      setIsUserIdError(true);
    } else if (!phone || removeMask(phone).length < 10) {
      Alert.alert('Error', 'Please check PHONE NUMBER again', [
        {text: 'OK', onPress: () => console.log('OK')},
      ]);
      isPass = false;
      setIsPhoneError(true);
    }
    return isPass;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Appbar.Header style={{elevation: 0}}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title={type == 'create' ? 'Add new member' : 'Edit'} />
      </Appbar.Header>

      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <TextInput
          label="NAME"
          style={{backgroundColor: 'transparent'}}
          onChangeText={text => setName(text)}
          value={name}
          error={isNameError}
        />
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <TextInput
          label="ID"
          style={{backgroundColor: 'transparent'}}
          keyboardType="phone-pad"
          value={userId}
          error={isUserIdError}
          render={props => (
            <TextInputMask
              {...props}
              value={userId}
              options={{
                mask: '9-9999-99999-99-9',
              }}
              type="custom"
              onChangeText={text => {
                setUserId(text);
              }}
            />
          )}
        />
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <TextInput
          label="PHONE NUMBER"
          style={{backgroundColor: 'transparent'}}
          keyboardType="phone-pad"
          value={phone}
          error={isPhoneError}
          render={props => (
            <TextInputMask
              {...props}
              value={phone}
              options={{
                mask: '099-999-9999',
              }}
              type="custom"
              onChangeText={text => {
                setPhone(text);
              }}
            />
          )}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Button
          mode="contained"
          onPress={() => submitForm()}
          style={{elevation: 0, width: 200}}>
          Submit
        </Button>
      </View>
    </View>
  );
}
