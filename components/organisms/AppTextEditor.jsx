import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';
import AppMenuTextEditor from '../molecules/AppMenuTextEditor';

const AppTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <h1>heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
    <h4>heading 4</h4>
    <h5>heading 5</h5>
    <h6>heading 6</h6>
    <p>paragraph</p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });
  return (
    <EditorEnviroment>
      <AppMenuTextEditor editor={editor} />
      <EditorContent editor={editor} />
    </EditorEnviroment>
  );
};

const EditorEnviroment = styled.div`
  .ProseMirror {
    margin-top: 1rem;
    border: 1px solid ${Colors.mediumGray};
    padding: 1.5rem;
    border-radius: 8px;

    @media ${minWidth('md')} {
      padding: 3rem;
    }

    > * + * {
      margin-top: 1rem;
    }

    * {
      font-size: 1.2rem;
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
      line-height: 1.1;
    }

    h1 {
      font-size: 2.625rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5 {
      font-size: 1.4rem;
    }
    h6 {
      font-size: 1.2rem;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }
`;

export default AppTextEditor;
