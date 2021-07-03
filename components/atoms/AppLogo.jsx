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
    height: 40px;
    width: 52px;
    object-fit: contain;
  }
`;

export default AppLogo;
