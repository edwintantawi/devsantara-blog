import Link from 'next/link';
import styled from 'styled-components';

const AppLogo = () => {
  return (
    <Link href="/" passHref>
      <Wrapper>
        <img src="/devsantara.svg" alt="Devsantara" />
      </Wrapper>
    </Link>
  );
};

// styled
const Wrapper = styled.a`
  display: flex;
  img {
    width: 2.375rem;
    height: 2.6875rem;
  }
`;

export default AppLogo;
