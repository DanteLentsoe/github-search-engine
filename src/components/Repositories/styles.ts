import styled from "styled-components";

export const RepositoriesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 1.5rem;
  max-height: 1.5rem;
`;

export const RepoContainer = styled.div`
  width: 45%;
  border: solid 1px #ccc;
  background-color: rgb(235, 235, 235);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.5s ease-in;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;
