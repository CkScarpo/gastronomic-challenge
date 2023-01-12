/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import Api from '../../services/api';

import { dispatch } from '../store';

type IRestaurantEvent = {
  id: string;
  name: string;
  type: string;
  rate: string;
  hr: string;
  plateTitle: string;
  plateDesc: string;
  plateValue: string;
  plateDrink: string;
  plateDrinkValue: string;
};

type IRestaurantState = {
  isLoading: boolean;
  error: Error | string | null;
  events: IRestaurantEvent[];
  selectedEventId: string | null;
};

const initialState: IRestaurantState = {
  isLoading: false,
  error: null,
  events: [],
  selectedEventId: null,
};

const slice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getEventsSuccess(state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },

    // CREATE EVENT
    createEventSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },

    // UPDATE EVENT
    updateEventSuccess(state, action) {
      const updateEvent = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload;
        }
        return event;
      });

      state.isLoading = false;
      state.events = updateEvent;
    },

    // DELETE EVENT
    deleteEventSuccess(state, action) {
      const eventId = action.payload;
      const deleteEvent = state.events.filter((event) => event.id !== eventId);
      state.events = deleteEvent;
    },

    // SELECT EVENT
    selectEvent(state, action) {
      const eventId = action.payload;
      state.selectedEventId = eventId;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { selectEvent } = slice.actions;
// ----------------------------------------------------------------------

export function getEvents() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await Api.get('/allRestaurants');
      dispatch(slice.actions.getEventsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
