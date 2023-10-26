import styled from "styled-components";

const DefaultLayout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = (props, children) => {
  return <DefaultLayout>{props.children}</DefaultLayout>;
};

export default Layout;
