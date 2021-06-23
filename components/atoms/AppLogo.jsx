import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../public/assets/devsantara.svg';

const AppLogo = () => (
  <Link href="/" passHref>
    <Wrapper>
      <Image src={logo} alt="Devsantara" />
    </Wrapper>
  </Link>
);

// styled
const Wrapper = styled.a`
  display: flex;
  img {
    width: 2.375rem;
    height: 2.6875rem;
  }
`;

export default AppLogo;
