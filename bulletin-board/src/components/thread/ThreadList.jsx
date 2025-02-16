import { useEffect, useState } from "react";

export const ThreadList = () => {
    const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
        const resposne = await fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0");
        const threadLists = await resposne.json();
        setThreads(threadLists);
    }
    fetchThreads();
  }, []);
    return <>
    <div>
        <h1>新着スレッド</h1>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
    </div>
    </>
}