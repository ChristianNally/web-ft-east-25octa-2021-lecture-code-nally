import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useMousePosition from '../hooks/useMousePosition';

const DocumentTitle = () => {

  const [title, setTitle] = useState('');
  const position = useMousePosition();
  const style = {
    backgroundColor: `rgb(0,${position.x},${position.y})`
  }

  useDocumentTitle(title);

  return (
      <div style={style}>
      <input value={title} onChange={(event) => { setTitle(event.target.value) }} />
      </div>
     );
};

export default DocumentTitle;
