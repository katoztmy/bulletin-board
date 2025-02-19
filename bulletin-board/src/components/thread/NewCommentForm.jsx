import { useRef } from "react";

export const NewCommentForm = ({ threadId, setComments, fetchComments }) => {
  const inputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = inputRef.current.value;
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
    const newComment = await response.json();
    setComments((prev) => [...prev, { id: newComment.id, post }]);
    inputRef.current.value = "";
    fetchComments();
  };
  return (
    <>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <textarea
            name="投稿"
            placeholder="投稿しよう！"
            ref={inputRef}
          ></textarea>
          <button type="submit">投稿</button>
        </form>
      </div>
    </>
  );
};
