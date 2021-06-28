import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';
import AppButton from '../atoms/AppButton';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';
import AppMenuTextEditor from '../molecules/AppMenuTextEditor';
import { auth } from '../../lib/firebase';
import EditorStyle from '../../styles/editorStyle';

const AppTextEditor = () => {
  const [title, setTitle] = useState();
  const [tags, setTags] = useState();

  const editor = useEditor({
    extensions: [StarterKit, Placeholder],
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    auth.currentUser.getIdToken(true).then((idToken) => {
      const postJson = editor.getJSON();
      const body = {
        title,
        tags,
        postJson,
      };

      fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts`, {
        method: 'POST',
        headers: {
          idtoken: idToken,
        },
        body: JSON.stringify(body),
      }).then(() => {
        setTitle('');
        setTags('');
        editor.commands.clearContent();
      });
    });
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <AppMenuTextEditor editor={editor} />
      <InputTitle
        type="text"
        placeholder="Title here..."
        required
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <InputTags
        type="text"
        placeholder="Tags: javascript, reactjs, html, ..."
        required
        onChange={(event) => setTags(event.target.value)}
        value={tags}
      />
      <EditorStyle>
        <EditorContent editor={editor} />
      </EditorStyle>
      <AppButton type="submit">
        <AddCircleOutlineIcon />
        <span>Create Post</span>
      </AppButton>
    </form>
  );
};

const BaseInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  border: 1px solid ${Colors.mediumGray};
`;

const InputTitle = styled(BaseInput)`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 2.625rem;
  font-weight: 700;

  @media ${minWidth('md')} {
    padding: 1rem 3rem;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }
`;

const InputTags = styled(BaseInput)`
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${Colors.gray};

  @media ${minWidth('md')} {
    padding: 1rem 3rem;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
export default AppTextEditor;
