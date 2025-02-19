import { useState } from "react";

export const NewCommentForm = ({ threadId, setComments, fetchComments }) => {
  const [post, setPost] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post }),
      }
    );
    const newComment = await response.json(); // APIからのレスポンスを取得
    setComments((prev) => [...prev, { id: newComment.id, post }]);
    setPost("");
    fetchComments();
  };
  const handleText = (e) => {
    setPost(e.target.value);
  };
  return (
    <>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <textarea
            name="投稿"
            placeholder="投稿しよう！"
            onChange={handleText}
            value={post}
          ></textarea>
          <button type="submit">投稿</button>
        </form>
      </div>
    </>
  );
};
