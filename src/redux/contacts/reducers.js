import {
  fetchAllContacts,
  fetchNewContacts,
  fetchDeleteContact,
} from './operations';

export const extraReducersContacts = builder => {
  builder

    .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    })

    .addCase(fetchNewContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    })
    .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload.id);
    })

    .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
};

function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}
