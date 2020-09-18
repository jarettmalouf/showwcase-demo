import React from "react";
import { RootStateOrAny } from "react-redux";
import { ThunkAction } from "redux-thunk";

export interface ProfileState {
  name: string;
  entries: Education[];
  entryBeingEdited: Education | null;
  isEditing: boolean;
  isCreating: boolean;
}

export interface Education {
  degree: string;
  major: string;
  startDate: SimpleDate;
  endDate: SimpleDate;
  institution: string;
  description: string;
}

export interface SimpleDate {
  month: string;
  year: string;
}

export interface NormalAction {
  type: string;
  payload: any;
}

export type ThunkResult<R> = ThunkAction<
  R,
  RootStateOrAny,
  undefined,
  { type: string }
>;

export type NormalThunk = ThunkResult<void | undefined | null>;
