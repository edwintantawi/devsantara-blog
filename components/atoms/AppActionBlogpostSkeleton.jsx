import styled, { keyframes } from 'styled-components';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';

const AppActionBlogpostSkeleton = () => (
  <div className="button-wrapper">
    <ActionBLogpostSkeleton>
      <span>
        <div className="flash" />
      </span>
      <span>
        <div className="flash" />
      </span>
    </ActionBLogpostSkeleton>
  </div>
);

const Flash = keyframes`
  to{
    right: -50px;
  }
`;

const ActionBLogpostSkeleton = styled.div`
  width: 80px;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  ${minWidth('md')} {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }

  span {
    position: relative;
    background-color: ${Colors.mediumGray};

    border-radius: 6px;
    overflow: hidden;
  }

  span:first-child {
    width: 30px;
    height: 30px;

    ${minWidth('md')} {
      margin: 12px 16px 0;
    }
  }

  span:last-child {
    width: 38px;
    height: 18px;

    ${minWidth('md')} {
      width: 48px;
      margin: 12px 0 0;
    }
  }

  div.flash {
    position: absolute;
    width: 26px;
    height: 30px;
    transform: skewX(-40deg);
    background-color: #e2e2e2;
    right: 50px;
    animation: ${Flash} 1s ease-in-out infinite;
  }
`;

export default AppActionBlogpostSkeleton;
