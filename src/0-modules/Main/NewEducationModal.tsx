import { Button, ColoredButton } from "../../1-helpers/buttons";
import {
  ButtonsWrapper,
  SpacedColumn,
  SpacedRow,
  TextBox,
  TextInput,
} from "../../1-helpers/content";
import { Degrees, Months } from "../../1-helpers/constants";
import Modal, { ModalContent } from "../../1-helpers/Modal";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  doCancelCreating,
  doCancelEditing,
  doSubmitEntry,
  doUpdateEntry,
  getNewEntry,
} from "./ducks/actions";

import { Education } from "../../1-helpers/interfaces";
import Picker from "../Picker";
import axios from "axios";
import { getYears } from "../../1-helpers/functions";
import styled from "@emotion/styled";

export default function NewEducationModal() {
  const dispatch = useDispatch();

  const entryBeingEdited = useSelector(
    (state: RootStateOrAny) => state.entries.entryBeingEdited
  );

  const initialEntry = getNewEntry();
  // if (entryBeingEdited) {
  //   Object.assign(initialEntry, entryBeingEdited);
  // }

  const [degree, setDegree] = useState(initialEntry.degree);
  const [major, setMajor] = useState(initialEntry.major);
  const [institution, setInstitution] = useState(initialEntry.institution);
  const [startMonth, setStartMonth] = useState(initialEntry.startDate.month);
  const [startYear, setStartYear] = useState(initialEntry.startDate.year);
  const [endMonth, setEndMonth] = useState(initialEntry.endDate.month);
  const [endYear, setEndYear] = useState(initialEntry.endDate.year);
  const [description, setDescription] = useState(initialEntry.description);

  const isCreating = useSelector(
    (state: RootStateOrAny) => state.entries.isCreating
  );
  const isEditing = useSelector(
    (state: RootStateOrAny) => state.entries.isEditing
  );

  const showModal = isCreating || isEditing;

  if (!showModal) {
    return null;
  }

  return (
    <Modal>
      <ModalContent>
        <h1>Add new education</h1>
        <SpacedColumn
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <CollegeInfo>
            <EducationDetail>
              <Caption>Institution</Caption>
              <ModalInput
                name="institution"
                onChange={(e) => setInstitution(e.target.value)}
                value={institution}
                type="text"
                placeholder="Institution"
                autoComplete="none"
              />
            </EducationDetail>
            <EducationDetail>
              <Caption>Degree</Caption>
              <Picker value={degree} onChange={setDegree} choices={Degrees} />
            </EducationDetail>
            <EducationDetail>
              <Caption>Major</Caption>
              <ModalInput
                name="major"
                onChange={(e) => setMajor(e.target.value)}
                value={major}
                type="text"
                placeholder="Major"
                autoComplete="none"
              />
            </EducationDetail>
          </CollegeInfo>
          <DateInfo>
            <EducationDetail>
              <Caption>Start date</Caption>
              <Picker
                value={startMonth}
                onChange={setStartMonth}
                choices={Months}
              />
            </EducationDetail>
            <EducationDetail>
              <Caption />
              <Picker
                value={startYear}
                onChange={setStartYear}
                choices={getYears()}
              />
            </EducationDetail>

            <EducationDetail>
              <Caption>End date</Caption>
              <Picker
                value={endMonth}
                onChange={setEndMonth}
                choices={Months}
              />
            </EducationDetail>
            <EducationDetail>
              <Caption />
              <Picker
                value={endYear}
                onChange={setEndYear}
                choices={getYears()}
              />
            </EducationDetail>
          </DateInfo>
          <DescriptionInfo>
            <EducationDetail>
              <Caption>Description</Caption>
              <DescriptionInput
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows={5}
                placeholder="List your achievements and experiences at this institution"
              />
            </EducationDetail>
          </DescriptionInfo>
        </SpacedColumn>
        <ButtonsWrapper>
          <ColoredButton onClick={handleSave} color="green">
            Save
          </ColoredButton>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonsWrapper>
      </ModalContent>
    </Modal>
  );

  function handleCancel(entry: Education) {
    if (isEditing) {
      dispatch(doCancelEditing(entry));
    } else if (isCreating) {
      dispatch(doCancelCreating());
    }
    resetFields();
    return;
  }

  function handleSave(e: any) {
    e.preventDefault();
    const entry: Education = {
      degree,
      major,
      institution,
      startDate: { month: startMonth, year: startYear },
      endDate: { month: endMonth, year: endYear },
      description,
    };

    // if (anyFieldIsEmpty()) {
    //   return;
    // }
    if (isCreating) {
      console.log("isCreating");
      dispatch(doSubmitEntry(entry));
    } else if (isEditing) {
      dispatch(doUpdateEntry(entry));
    }
    resetFields();

    return;
  }

  function resetFields() {
    const entry = getNewEntry();
    setDegree(entry.degree);
    setMajor(entry.major);
    setInstitution(entry.institution);
    setStartMonth(entry.startDate.month);
    setStartYear(entry.startDate.year);
    setEndMonth(entry.endDate.month);
    setEndYear(entry.endDate.year);
    setDescription(entry.description);
  }

  function anyFieldIsEmpty(): boolean {
    return (
      degree.trim() === "" ||
      major.trim() === "" ||
      institution.trim() === "" ||
      startMonth.trim() === "" ||
      startYear.trim() === "" ||
      endMonth.trim() === "" ||
      endYear.trim() === "" ||
      description.trim() === ""
    );
  }

  async function getOptions() {
    const res = await axios.get(
      "http://universities.hipolabs.com/search?name=" + institution
    );
    console.log(res.data);
  }
}

const Caption = styled(TextBox)`
  font-size: 24px;
  padding: 2px;
  font-weight: bold;
`;

const EducationDetail = styled(SpacedColumn)``;

const CollegeInfo = styled(SpacedRow)``;

const DateInfo = styled(SpacedRow)`
  > * {
    margin: 2px;
  }
`;

const DescriptionInfo = styled(SpacedRow)``;

const ModalInput = styled(TextInput)`
  box-shadow: none;
  border: 2px solid white;
  color: white;
`;

const DescriptionInput = styled.textarea`
  margin: 0 auto;
  margin-bottom: 20px;
  outline: none;
  padding: 8px 12px;
  border-radius: 20px;
  background: transparent;
  padding: 20px;
  font-family: var(--fonts);
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
  width: 100vh;
  border: 2px solid white;
  box-sizing: border-box;
`;
