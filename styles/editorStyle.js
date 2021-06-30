import styled from 'styled-components';
import Colors from './colors';
import minWidth from './mediaQuery';

const EditorStyle = styled.div`
  padding: ${({ view }) => (view ? '12px' : '48px 20px')};
  overflow: hidden;
  min-height: 50vh;
  background-color: ${Colors.white};

  ${minWidth('md')} {
    padding: 48px;
  }

  * {
    line-height: 2;
    letter-spacing: 1px;
  }

  & > *,
  .ProseMirror {
    & > * {
      margin-bottom: 32px;
    }

    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #cccccc;
      pointer-events: none;
      height: 0;
    }

    p,
    p.is-editor-empty:first-child::before {
      font-size: 14px;

      ${minWidth('md')} {
        font-size: 18px;
      }
    }

    ul,
    ol {
      padding: 0 16px;
    }
  
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 8px 0;
    line-height: 1.2;
  }

  h2 {
    font-size: 27.5px;

    ${minWidth('md')} {
      font-size: 30px;
    }
  }
  h3 {
    font-size: 22.5px;
    font-weight: 600;

    ${minWidth('md')} {
      font-size: 25px;
    }
  }
  h4 {
    font-size: 17.5px;
    font-weight: 600;

    ${minWidth('md')} {
      font-size: 20px;
    }
  }
  h5 {
    font-size: 12.5px;
    font-weight: 600;

    ${minWidth('md')} {
      font-size: 15px;
    }
  }
  h6 {
    font-size: 10px;
    font-weight: 600;
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
