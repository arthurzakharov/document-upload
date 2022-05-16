import { createSelector } from "reselect";
import { RootReducer } from "../root.reducer";
import { ModalReducer } from "./modal.reducer";

export const selectModal = (state: RootReducer) => state.modal;

export const selectModalIsOpened = createSelector([selectModal], (modal: ModalReducer) => modal.isOpen);

export const selectModalMain = createSelector([selectModal], (modal: ModalReducer) => modal.main);

export const selectModalIsButtonVisible = createSelector([selectModal], (modal: ModalReducer) => modal.isButtonVisible);

export const selectModalButtonClickHandler = createSelector(
  [selectModal],
  (modal: ModalReducer) => modal.buttonClickHandler,
);
