import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import asyncSessionStorage from 'redux-persist/lib/storage'
import changeSideBar from 'store/slices/changeSideBar'
import { RootState } from 'store/StateTypes'

export const isDevelopment = process.env.NODE_ENV === 'development'
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const reducer = combineReducers({ changeSideBar })

const persistConfig = {
  key: 'root',
  storage: asyncSessionStorage,
  whitelist: ['changeSideBar']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: isDevelopment
})

export const persistor = persistStore(store)
