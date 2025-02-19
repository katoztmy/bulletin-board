import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const resposne = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads?offset=0"
      );
      const threadLists = await resposne.json();
      setThreads(threadLists);
    };
    fetchThreads();
  }, []);

  return (
    <>
      <div>
        <h2>新着スレッド</h2>
        <div className="thread-container">
          {threads.map((thread) => (
            <Link
              to={`/threads/${thread.id}`}
              state={thread}
              key={thread.id}
              className="thread-link"
            >
              {thread.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
