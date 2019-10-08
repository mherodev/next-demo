import styled from '@emotion/styled';

const Styled = {
  DivLayout: styled.div(({ theme }) => ({
    background: 'thistle',
    padding: '30vh 20vw',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
  })),
  DivInnerLayout: styled.div(({ theme }) => ({
    background: 'white',
  })),
};

export default Styled;
