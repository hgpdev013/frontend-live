import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2f343c;
  border: 1px solid #ccc;
  border-radius: 10px;

  h2 {
    font-size: 32px;
  }

  > button {
    font-size: 24px;
    cursor: pointer;
    height: 3rem;

    padding: 0.5rem 3rem;

    border: 1px solid #ccc;
    border-radius: 10px;

    color: #fff;
    background-color: green;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  > div > div {
    display: flex;
    gap: 1rem;
    > span {
      &:first-child {
        font-size: 24px;
      }

      &:nth-child(2) {
        text-decoration: line-through;
      }
    }
  }
`;
