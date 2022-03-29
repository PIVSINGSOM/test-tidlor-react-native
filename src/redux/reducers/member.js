import {createSlice} from '@reduxjs/toolkit';

export const memberSlice = createSlice({
  name: 'user',
  initialState: {
    memberList: [],
  },
  reducers: {
    addMemberList: (state, {payload}) => {
      state.memberList.push(payload);
    },
    updateMemberList: (state, {payload}) => {
      const dataList = state.memberList;
      dataList.forEach(el => {
        if (el.id == payload.id) {
          el.name = payload.name;
          el.phone = payload.phone;
          el.userId = payload.userId;
        }
      });
      state.memberList = dataList;
    },
    deleteMemberList: (state, {payload}) => {
      const result = state.memberList.filter(value => value.id != payload.id);
      state.memberList = result;
    },
  },
});

export const {addMemberList, updateMemberList, deleteMemberList} =
  memberSlice.actions;
export default memberSlice.reducer;
