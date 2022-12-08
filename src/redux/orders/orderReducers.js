import { createReducer, combineReducers } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'orders/get/pending': () => [],
  'orders/get/fulfilled': (_state, { payload }) => [...payload?.successObject],
  'orders/get/rejected': (state, _) => state,
  'order/post/pending': (state, _action) => state,
  'order/post/fulfilled': (state, { payload }) => [...state, payload?.successObject],
  'order/post/rejected': (state, _action) => state,
  'order/patch/pending': (state, _action) => state,
  'order/patch/fulfilled': (state, { payload }) => {
    const patchedOrder = payload.successObject;
    const newState = state.map((item) =>
      item.orderId === patchedOrder.orderId ? { ...item, status: patchedOrder.status } : item,
    );
    return newState;
  },
  'order/patch/rejected': (state, _action) => state,
});

const isLoading = createReducer(false, {
  'orders/get/pending': () => true,
  'orders/get/fulfilled': () => false,
  'orders/get/rejected': () => false,
  'order/post/pending': () => true,
  'order/post/fulfilled': () => false,
  'order/post/rejected': () => false,
  'order/patch/pending': () => true,
  'order/patch/fulfilled': () => false,
  'order/patch/rejected': () => false,
});

const error = createReducer(null, {
  'orders/get/pending': () => null,
  'orders/get/fulfilled': () => null,
  'orders/get/rejected': (_, action) => action?.error?.message,
  'order/post/pending': () => null,
  'order/post/fulfilled': () => null,
  'order/post/rejected': () => (_, action) => action?.error?.message,
  'order/patch/pending': () => null,
  'order/patch/fulfilled': () => null,
  'order/patch/rejected': () => (_, action) => action?.error?.message,
});

export const ordersReducer = combineReducers({
  entities,
  isLoading,
  error,
});