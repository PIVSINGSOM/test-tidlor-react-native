import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {deleteMemberList} from '../redux/reducers/member';
import {maskPhone, maskUserId} from '../util/mask';
export default function MemberCard({navigation, member}) {
  const dispatch = useDispatch();
  const onRemove = () => {
    Alert.alert('Confirmation', 'Are you sure to delete suradis sutampang', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(deleteMemberList(member))},
    ]);
    //
  };

  
  return (
    <View style={{...style.container}}>
      <View
        style={{
          ...style.flexBetween,
        }}>
        <Text style={{...style.title}}>{member.name}</Text>
        <Pressable
          onPress={() =>
            navigation.navigate('FormmScreen', {
              type: 'edit',
              idEdit: member.id,
            })
          }>
          <Icon name="pencil" size={20} color="white" />
        </Pressable>
      </View>

      <Text style={{...style.des}}>{maskUserId(member.userId)}</Text>

      <View
        style={{
          ...style.flexBetween,
        }}>
        <Text style={{...style.des}}>{maskPhone(member.phone)}</Text>
        <Pressable onPress={() => onRemove()}>
          <Icon name="trash-can-outline" size={30} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#526AFB',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  des: {
    color: 'white',
    fontSize: 18,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
