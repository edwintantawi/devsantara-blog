import styled from 'styled-components';
import AppButtonTextEditor from '../atoms/AppButtonTextEditor';

const AppMenuTextEditor = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <MenuLayout>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive('bold')}
      >
        bold
      </AppButtonTextEditor>
    </MenuLayout>
  );
};

const MenuLayout = styled.div``;

export default AppMenuTextEditor;
