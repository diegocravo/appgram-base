import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Title2(props) {
  return <h1>{props.children}</h1>;
}

export default function Home() {
  return <Title2>My page</Title2>;
}
