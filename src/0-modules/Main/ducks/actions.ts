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
import { Degrees, Months } from "../../../1-helpers/constants";
import {
  Education,
  NormalAction,
  ProfileState,
} from "../../../1-helpers/interfaces";

import { getYears } from "../../../1-helpers/functions";

export function doSubmitEntry(entry: Education): NormalAction {
  return { type: SUBMITTED_NEW_ENTRY, payload: { entry } };
}

export function doUpdateEntry(entry: Education): NormalAction {
  return { type: UPDATED_ENTRY, payload: { entry } };
}

export function doDeleteEntry(entry: Education): NormalAction {
  return { type: DELETED_ENTRY, payload: { entry } };
}

export function doActivateCreating(): NormalAction {
  return { type: ACTIVATED_CREATING, payload: {} };
}

export function doActivateEditing(entry?: Education): NormalAction {
  return { type: ACTIVATED_EDITING, payload: { entry } };
}

export function doCancelEditing(entry: Education): NormalAction {
  return { type: CANCELED_EDITING, payload: { entry } };
}

export function doCancelCreating(): NormalAction {
  return { type: CANCELED_CREATING, payload: {} };
}

export function updateEntries(
  state: ProfileState,
  newEntry: Education
): Education[] {
  let entryToUpdate: Education = state.entries.find(
    (entry) => entry === state.entryBeingEdited
  )!;
  Object.assign(entryToUpdate, newEntry);
  return state.entries;
}

export function getNewEntry(): Education {
  const Years = getYears();
  return {
    degree: Degrees[0],
    major: "",
    startDate: { month: Months[0], year: Years[0] },
    endDate: { month: Months[0], year: Years[0] },
    institution: "",
    description: "",
  };
}
