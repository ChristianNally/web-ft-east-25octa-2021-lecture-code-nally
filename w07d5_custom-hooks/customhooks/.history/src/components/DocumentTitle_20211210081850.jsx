import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useMousePosition from '../hooks/useMousePosition';

const DocumentTitle = () => {

  const [title, setTitle] = useState('');
  const position = useMousePosition();

  useDocumentTitle(title);

  return (
      <div>
      <input value={title} onChange={(event) => { setTitle(event.target.value) }} />
      </div>
     );
};

export default DocumentTitle;
