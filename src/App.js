import './App.css';
import DiaryList from './DiaryList';
import DiaryNewForm from './DiaryNewForm';

function App() {

  const dummyList = [
    {
      id:1,
      author: 'Ryan',
      content: 'Hello - this is Ryan Diary',
      emotion: 1
    },
    {
      id:2,
      author: 'Bella',
      content: 'Hello - this is Bella Diary',
      emotion: 3
    },
    {
      id:3,
      author: 'Tummy',
      content: 'Hello - this is Tummy Diary',
      emotion: 4
    },
    {
      id:4,
      author: 'Nick',
      content: 'Hello - this is Nick Diary',
      emotion: 5
    },
    {
      id:5,
      author: 'Dan',
      content: 'Hello - this is Dan Diary',
      emotion: 2
    },
  ]


  return (
    <div className="App">
      <DiaryNewForm />
      <DiaryList list={dummyList} />
    </div>
  );
}

export default App;
