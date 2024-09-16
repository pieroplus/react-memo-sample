import { useCallback, useState, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  console.log('App');

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};

export default App;
