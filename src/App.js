import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [acending, setAcending] = useState('Desending Order')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changeListDesending = useCallback(() => {
    if (acending === 'Desending Order') {
      setAcending('Acending order');
    }
    else if (acending === 'Acending order') {
      setAcending('Desending Order');
    }
  }, [acending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} acending={acending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeListDesending}>{acending}</Button>
    </div>
  );
}

export default App;
