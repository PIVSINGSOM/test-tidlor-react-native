import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Appbar, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import MemberCard from '../components/MemberCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({navigation}) {
  const memberStore = useSelector(state => state.member);
  const memberList = memberStore.memberList;

  const renderAddButton = () => {
    return (
      <View style={style.containerButtton}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('FormmScreen', {type: 'create'})}
          style={{elevation: 0}}>
          Add your first member
        </Button>
      </View>
    );
  };

  const renderAddMoreButton = () => {
    return (
      <View style={style.containerButttonAddMore}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('FormmScreen', {type: 'create'})}
          style={{elevation: 0}}>
          <Icon name="plus" size={15} /> Add member
        </Button>
      </View>
    );
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <Appbar.Header style={{elevation: 0}}>
        <Appbar.Content title="My Members" />
      </Appbar.Header>
      <View style={{maxHeight: '80%'}}>
        <FlatList
          data={memberList}
          renderItem={data => (
            <MemberCard member={data.item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        />
      </View>
      {memberList.length ? renderAddMoreButton() : renderAddButton()}
    </View>
  );
}

const style = StyleSheet.create({
  containerButtton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButttonAddMore: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
