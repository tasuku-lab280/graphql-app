import Container from "@material-ui/core/Container";

import Header from "./Header";

const CommonLayout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container style={{ marginTop: 20 }} maxWidth="lg">
        <main>{children}</main>
      </Container>
    </>
  );
};

export default CommonLayout;
