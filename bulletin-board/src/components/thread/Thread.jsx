import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NewCommentForm } from "./NewCommentForm";

export const Thread = () => {
  const location = useLocation();
  const thread = location.state;
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${thread.id}/posts?offset=0`
    );
    const commentLists = await response.json();
    setComments(commentLists.posts);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
      <div className="thread-detail">
        <h2>{thread.title}</h2>
        <div className="thread-layout">
          <div className="comments-list">
            {comments.map((comment) => (
              <div className="comment-item" key={comment.id}>
                {comment.post}
              </div>
            ))}
          </div>
          <NewCommentForm
            threadId={thread.id}
            setComments={setComments}
            fetchComments={fetchComments}
          />
        </div>
      </div>
    </>
  );
};
