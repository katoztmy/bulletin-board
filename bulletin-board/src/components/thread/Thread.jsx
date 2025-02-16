import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export const Thread = () => {
  const location = useLocation();
  const thread = location.state;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async() => {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread.id}/posts?offset=0`);
        const commentLists = await response.json();
        setComments(commentLists.posts);
    }
    fetchComments();
  }, []) 
  return <>
    <div>
      <h2>{thread.title}</h2>
    </div>
    <div className="comment-container">
        {comments.map((comment) => (
            <div className="comment-item">
                {comment}
            </div>
        ))}
    </div>
    </>
};