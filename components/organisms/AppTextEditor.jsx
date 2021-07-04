import { useRouter } from 'next/router';
import { useEditor, EditorContent } from '@tiptap/react';
import UpdateIcon from '@material-ui/icons/Update';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect, useState } from 'react';
import AppButton from '../atoms/AppButton';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';
import AppMenuTextEditor from '../molecules/AppMenuTextEditor';
import { auth } from '../../lib/firebase';
import EditorStyle from '../../styles/editorStyle';
import AppLoader from '../atoms/AppLoader';

const AppTextEditor = ({ editableContent }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit, Placeholder],
  });

  useEffect(() => {
    if (Object.entries(editableContent).length) {
      setTitle(editableContent.title);
      editor.commands.setContent(editableContent.content);
      setTags(editableContent.tags.map((tag) => tag.title).join(', '));
    }
  }, [editableContent]);

  const postBlogpost = async (token, body) => {
    const options = {
      method: 'POST',
      headers: {
        token,
      },
      body: JSON.stringify(body),
    };

    if (Object.entries(editableContent).length) {
      options.method = 'PUT';
    }

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_DOMAIN
        }/api/posts/${options.method.toLowerCase()}`,
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
    auth.currentUser.getIdToken(true).then((token) => {
      const content = editor.getJSON();
      const body = {
        ...editableContent,
        title,
        tags,
        content,
      };
      postBlogpost(token, body);
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
          onClick={() => {
            setError(false);
            setLoading(false);
          }}
        />
      )}
      <div>
        <AppMenuTextEditor editor={editor} />
        <FormLayout onSubmit={(event) => handleOnSubmit(event)}>
          <EditorLayout>
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
          </EditorLayout>
          <EditorAction>
            <AppButton type="submit" className="large">
              {Object.entries(editableContent).length ? (
                <UpdateIcon />
              ) : (
                <AddCircleOutlineIcon />
              )}

              <span>
                {Object.entries(editableContent).length
                  ? 'Update Post'
                  : 'Create Post'}
              </span>
            </AppButton>
          </EditorAction>
        </FormLayout>
      </div>
    </>
  );
};

const EditorLayout = styled.div`
  border: 1px solid ${Colors.mediumGray};
  margin-top: 8px;
  overflow: hidden;
  margin-bottom: 16px;

  ${minWidth('md')} {
    margin-top: 16px;
    border-radius: 8px;
  }
`;

const FormLayout = styled.form``;

const BaseInput = styled.input`
  width: 100%;
  padding: 8px 20px;

  ${minWidth('md')} {
    padding: 8px 48px;
  }
`;

const InputTitle = styled(BaseInput)`
  padding-top: 32px;
  font-size: 30px;
  font-weight: 700;

  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }

  ${minWidth('md')} {
    font-size: 48px;
  }
`;

const InputTags = styled(BaseInput)`
  font-size: 12px;
  letter-spacing: 1px;
  color: ${Colors.gray};

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  ${minWidth('md')} {
    font-size: 14px;
  }
`;

const EditorAction = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  ${minWidth('md')} {
    padding: 0;
  }
`;
export default AppTextEditor;
