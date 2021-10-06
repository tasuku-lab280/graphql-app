import Container from "@material-ui/core/Container";

import Header from "../common/Header";

const CommonLayout = (children: React.ReactNode) => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 20 }} maxWidth="lg">
        <main>{children}</main>
      </Container>
    </>
  );
};

export default CommonLayout;
