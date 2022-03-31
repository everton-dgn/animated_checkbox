import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggleBtnNav: false
}

const changeSideBarSlice = createSlice({
  name: 'changeSideBar',
  initialState,
  reducers: {
    setChangeSideBar(state) {
      state.toggleBtnNav = !state.toggleBtnNav
    }
  }
})

export const { setChangeSideBar } = changeSideBarSlice.actions

export default changeSideBarSlice.reducer
