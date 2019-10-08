import styled from '@emotion/styled';

const Styled = {
  DivHeader: styled.div(({ theme }) => ({
    background: 'dodgerblue',
    padding: '30px',
    '& > *': {
      paddingRight: '20px',
    },
  })),
};

export default Styled;
