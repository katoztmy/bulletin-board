import { useRef } from "react";
// textareaとかの末端のdom要素はセルフクローズさせられるのであればさせる
// eslintとかbiomeなど
export const NewCommentForm = ({ threadId, setComments, fetchComments }) => {
  // reactHookFormを使うというケースがよくあったりする
  // reactHookFormによる依存関係を増やしたくないなどの理由で使わないなどもあったりする
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
          <textarea name="投稿" placeholder="投稿しよう！" ref={inputRef} />
          <button type="submit">投稿</button>
        </form>
      </div>
    </>
  );
};
// useCommentForm()のようなコンポーネントに対応するカスタムフックを使用して、handleSubmitやinputRefなどのロジック部分を閉じ込める
// UIとロジックを分離させる、自動テストを行うためにも切り出せる
