import styled from '@emotion/styled';

const Styled = {
  DivHeader: styled.div(({ theme }) => ({
    background: 'dodgerblue',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      paddingRight: '20px',
    },
  })),
  ALink: styled.a(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: 'black !important',
    textDecoration: 'none !important',
    svg: {
      marginRight: '5px',
    },
  })),
};

export default Styled;
