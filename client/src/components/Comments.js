import React, { useState } from "react";

function Comments({ currentUser, clipObject }) {
  const [comment, setComment] = useState("");
  const [commentState, setCommentState] = useState(clipObject.comments);
  const [username, setUsername] = useState(clipObject.users_who_commented.slice(0).reverse());
  const handleCommentToState = (e) => {
    setComment(e.target.value);
  };


  const handleCommentSubmit = (clipId) => {
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        clip_id: clipId.id,
        user_id: currentUser.id,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data, "this is data");
        const newComment = { id: data.id, comment: data.comment };
        setCommentState([...commentState, newComment]);
        setUsername([
          ...username,
          { id: currentUser.id, username: currentUser.username },
        ]);
        setComment("");
      });
  };

  return (
    <div className="comment-area-and-submit-container">
      <div className="comments-area">
        <div className="comment-usernames-container">
          {username
            // .slice(0)
            // .reverse()
            .map((eachUserWhoCommented) => {
              return (
                <p className="comments">{eachUserWhoCommented.username}</p>
              );
            })}
        </div>
        <div className="comments-container">
          {commentState.map((eachComment) => {
            return (
              <div>
                {/* <p>{handleUsernames()}</p> */}
                <p key={eachComment.id} className="comments">
                  {eachComment.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="comment-box">
        <form
          className="comment-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCommentSubmit(clipObject);
          }}
        >
          <textarea
            value={comment}
            onChange={handleCommentToState}
            className="comment-bar"
            placeholder="Comment..."
          ></textarea>
          <button className="comment-submit-btn" type="submit" value="Comment">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
