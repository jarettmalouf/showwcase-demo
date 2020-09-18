import { Button, ColoredButton } from "../1-helpers/buttons";
import { Degrees, Months } from "../1-helpers/constants";
import Modal, { ModalContent } from "../1-helpers/Modal";
import React, { useState } from "react";
import {
  SpacedColumn,
  SpacedRow,
  TextBox,
  TextInput,
} from "../1-helpers/content";

import Picker from "./Picker";
import styled from "@emotion/styled";

export default function NewEducationModal() {
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const showModal = false;

  if (!showModal) {
    return null;
  }

  let Years: string[] = [];
  for (let i = 2026; i >= 1950; i--) {
    Years.push(String(i));
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
              <Picker
                value={degree}
                onChange={setDegree}
                choices={["a", "b"]}
              />
            </EducationDetail>
            <EducationDetail>
              <Caption>Degree</Caption>
              <Picker value={degree} onChange={setDegree} choices={Degrees} />
            </EducationDetail>
            <EducationDetail>
              <Caption>Major</Caption>
              <ThisInput
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
                choices={Years}
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
              <Picker value={endYear} onChange={setEndYear} choices={Years} />
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
          <ColoredButton color="green">Save</ColoredButton>
          <Button>Cancel</Button>
        </ButtonsWrapper>
      </ModalContent>
    </Modal>
  );
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

const ThisInput = styled(TextInput)`
  box-shadow: none;
  border: 2px solid white;
`;

const ButtonsWrapper = styled.div`
  margin: 24px 0 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 2px;
    max-width: calc(33.33% - 4px);
    @media (max-width: 1200px) {
      width: calc(50% - 4px);
    }
  }
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
