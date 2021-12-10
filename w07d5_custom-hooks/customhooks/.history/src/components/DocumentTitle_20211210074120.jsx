import { useState, useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
const DocumentTitle = () => {

  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
  },[title]);

  // useDocumentTitle(title);

  return (
      <div>
      <input value={title} onChange={(event) => { setTitle(event.target.value) }} />
      </div>
     );
};

export default DocumentTitle;
