import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const DocumentTitle = () => {

  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
      <div>
      <input value={title} onChange={(event) => { setTitle(event.target.value) }} />
      </div>
     );
};

export default DocumentTitle;
