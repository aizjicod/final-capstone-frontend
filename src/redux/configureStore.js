import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';
import detailReducer from './models/model_details';
import { reservations } from './reservations/reservations';
import userReducer from './models/login';

const store = configureStore({
  reducer: {
    models: modelReducer,
    details: detailReducer,
    reservations,
    current_user: userReducer,
  },
});

export default store;
