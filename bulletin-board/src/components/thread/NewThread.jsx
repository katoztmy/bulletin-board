import { useState } from "react";
import { Link } from "react-router-dom";

export const NewThread = () => {
  const [title, setTitle] = useState("");
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const createThread = async () => {
    await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    });
    setTitle("");
  };
  return (
    <>
      <div className="new-thread-container">
        <h2>スレッド新規作成</h2>
        <div className="new-thread">
          <input
            type="text"
            className="thread-create-input"
            placeholder="スレッドタイトル"
            value={title}
            onChange={handleInputTitle}
          />
          <div className="thread-create-actions">
            <Link to="/">Topに戻る</Link>
            <button className="thread-create-submit-btn" onClick={createThread}>
              作成
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
