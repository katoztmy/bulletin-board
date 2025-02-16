import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
        const resposne = await fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0");
        const threadLists = await resposne.json();
        setThreads(threadLists);
    }
    fetchThreads();
  }, []);
  
  return (
    <>
      <header>
        <p>掲示板</p>
        <p>スレッドを立てる</p>
      </header>
      <div>
        <p>新着スレッド</p>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
