import { configureStore } from '@reduxjs/toolkit'
import featureSlice from '../slice'

export default configureStore({ reducer: featureSlice })