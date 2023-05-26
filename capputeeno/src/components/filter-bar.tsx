"use client";

import { styled } from "styled-components";
import { FilterByPriority } from "./filter-by-priority";
import { FilterByType } from "./filter-by-type";

interface FilterBarProps {}

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const FilterBar = (props: FilterBarProps) => {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
};
