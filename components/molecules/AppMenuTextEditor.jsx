import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import BackspaceIcon from '@material-ui/icons/Backspace';
import SubjectIcon from '@material-ui/icons/Subject';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import RemoveIcon from '@material-ui/icons/Remove';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import styled from 'styled-components';
import AppButtonTextEditor from '../atoms/AppButtonTextEditor';
import Colors from '../../styles/colors';

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
        <FormatBoldIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive('italic')}
      >
        <FormatItalicIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive('strike')}
      >
        <StrikethroughSIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive('code')}
      >
        <CodeIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        active={false}
      >
        <LayersClearIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().clearNodes().run()}
        active={false}
      >
        <BackspaceIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().setParagraph().run()}
        active={editor.isActive('paragraph')}
      >
        <SubjectIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive('heading', { level: 2 })}
      >
        h2
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive('heading', { level: 3 })}
      >
        h3
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        active={editor.isActive('heading', { level: 4 })}
      >
        h4
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        active={editor.isActive('heading', { level: 5 })}
      >
        h5
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        active={editor.isActive('heading', { level: 6 })}
      >
        h6
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive('bulletList')}
      >
        <FormatListBulletedIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive('orderedList')}
      >
        <FormatListNumberedIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive('codeBlock')}
      >
        <DeveloperModeIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive('blockquote')}
      >
        <FormatQuoteIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        active={false}
      >
        <RemoveIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().setHardBreak().run()}
        active={false}
      >
        <TransitEnterexitIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().undo().run()}
        active={false}
      >
        <UndoIcon />
      </AppButtonTextEditor>
      <AppButtonTextEditor
        onClick={() => editor.chain().focus().redo().run()}
        active={false}
      >
        <RedoIcon />
      </AppButtonTextEditor>
    </MenuLayout>
  );
};

const MenuLayout = styled.div`
  position: sticky;
  z-index: 2;
  top: 4.25rem;
  display: flex;
  flex-wrap: wrap;
  background-color: ${Colors.white};
  padding: 1rem 0 0.5rem;
  border-bottom: 1px solid ${Colors.mediumGray};
`;

export default AppMenuTextEditor;
