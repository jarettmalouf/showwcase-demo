import {
  ACTIVATED_CREATING,
  ACTIVATED_EDITING,
  CANCELED_CREATING,
  CANCELED_EDITING,
  DELETED_ENTRY,
  SUBMITTED_NEW_ENTRY,
  UPDATED_ENTRIES,
  UPDATED_ENTRY,
} from "./types";
import { NormalAction, ProfileState } from "../../../1-helpers/interfaces";

import { updateEntries } from "./actions";

const initialState: ProfileState = {
  entries: [],
  entryBeingEdited: null,
  isEditing: false,
  isCreating: false,
};

export default function entryReducer(
  state = initialState,
  action: NormalAction
) {
  const { type, payload } = action;
  switch (type) {
    case UPDATED_ENTRIES:
      return { ...state, entries: payload.entries };
    case SUBMITTED_NEW_ENTRY:
      return {
        ...state,
        isCreating: false,
        entries: payload
          ? [...state.entries, payload.entry]
          : [...state.entries],
      };
    case UPDATED_ENTRY:
      return {
        ...state,
        isEditing: false,
        entries: payload
          ? updateEntries(state, payload.entry)
          : [...state.entries],
        entryBeingEdited: null,
      };
    case DELETED_ENTRY:
      return {
        ...state,
        entries: payload
          ? [...state.entries.filter((entry) => entry !== payload.entry)]
          : [...state.entries],
      };
    case ACTIVATED_CREATING:
      return {
        ...state,
        isCreating: true,
      };
    case ACTIVATED_EDITING:
      return {
        ...state,
        isEditing: true,
        entryBeingEdited: payload ? payload.entry : null,
      };
    case CANCELED_EDITING:
      return {
        ...state,
        isEditing: false,
        entryBeingEdited: null,
      };
    case CANCELED_CREATING:
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
}
