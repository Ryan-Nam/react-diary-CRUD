import { useRef, useState } from 'react';
import './App.css';
import DiaryList from './DiaryList';
import DiaryNewForm from './DiaryNewForm';

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    console.log('created!');
    console.log(author)
    console.log(content)
    console.log(emotion)
    const newItem = {
      author, content, emotion, id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  const onDelete =(id) => {
    console.log(`Deleted ${id}`);
    setData([])
  }

  return (
    <div className="App">
      <DiaryNewForm onCreate={onCreate}/>
      <DiaryList list={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
