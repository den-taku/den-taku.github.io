import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

// const choicedPage = 
export enum Page {
  Self, Tech, Blog, Contact
}

type StateProps = Readonly<{
  //
}>;

type OwnProps = Readonly<{
  page: Page
}>;

type PageContainerProps = StateProps & OwnProps;

const PageContainer: React.FC<PageContainerProps> = ({ page })  => {
  const [current_page, setState] = useState(Page.Self);
  // const handlePage = React.useCallback((even: React.ChangeEvent<HTMLInputElement>) => {
  //   setState(event?.target.value)
  // }, [setState]);
  return (
    <>
      <h1>Hello</h1>
      <h1>Now page is {page}</h1>
      <ButtonGroup>
        <Button variant="info" size="lg">Self Introduction</Button>
        <Button variant="success" size="lg">Tech and Knowledge</Button>
        <Button variant="warning" size="lg">Blog</Button>
        <Button variant="dark" size="lg">Contact</Button>
      </ButtonGroup>
    </>
  );
}

export default PageContainer;