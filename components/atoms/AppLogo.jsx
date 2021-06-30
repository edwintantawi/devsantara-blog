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
    width: auto;
    height: 40px;
  }
`;

export default AppLogo;
