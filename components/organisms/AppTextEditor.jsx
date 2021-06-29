import { useRouter } from 'next/router';
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
import AppLoader from '../atoms/AppLoader';

const AppTextEditor = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit, Placeholder],
  });

  const postBlogpost = async (idToken, body) => {
    const options = {
      method: 'POST',
      headers: {
        idtoken: idToken,
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts`,
        options
      );
      if (response.status === 201) {
        const responseJson = await response.json();
        const { url } = responseJson;
        await router.push(url);
      } else {
        setError(true);
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    auth.currentUser.getIdToken(true).then((idToken) => {
      const postJson = editor.getJSON();
      const body = {
        title,
        tags,
        postJson,
      };
      postBlogpost(idToken, body);
    });
  };

  return (
    <>
      {loading && (
        <AppLoader type="loading" message="showing all over the world" />
      )}
      {error && (
        <AppLoader
          type="error"
          message="Ooops somethings wrong..."
          onClick={() => setError(false)}
        />
      )}
      <form onSubmit={(event) => handleOnSubmit(event)}>
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
        <AppButton type="submit" className="large">
          <AddCircleOutlineIcon />
          <span>Create Post</span>
        </AppButton>
      </form>
    </>
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

  ${minWidth('md')} {
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

  ${minWidth('md')} {
    padding: 1rem 3rem;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
export default AppTextEditor;
