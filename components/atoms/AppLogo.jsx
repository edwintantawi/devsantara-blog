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
`;

export default AppLogo;
