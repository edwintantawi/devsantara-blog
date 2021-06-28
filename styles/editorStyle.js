import styled from 'styled-components';
import Colors from './colors';
import minWidth from './mediaQuery';

const EditorStyle = styled.div`
  margin: 1rem 0;
  border: 1px solid ${Colors.mediumGray};
  padding: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  min-height: 50vh;

  *:first-child {
    margin: 0;
  }

  p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #cccccc;
    pointer-events: none;
    height: 0;
    font-size: 1.1rem;
  }

  @media ${minWidth('md')} {
    padding: 3rem;
  }

  * {
    font-size: 1.1rem;
    line-height: 1.7;
    letter-spacing: 1px;
    margin-top: 1rem;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    margin-top: 2.5rem;
  }

  h1 {
    font-size: 2.625rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.3rem;
  }
  h5 {
    font-size: 1.1rem;
  }
  h6 {
    font-size: 1rem;
  }

  code {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    background-color: #61616132;
    color: #424242;
    font-family: 'JetBrainsMono', monospace;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${Colors.mediumGray};
      border-radius: 10px;
    }

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 1rem;
    }
  }

  hr {
    height: 1px;
    background-color: ${Colors.mediumGray};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 3px solid ${Colors.mediumGray};
    color: ${Colors.gray};
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
`;

export default EditorStyle;
