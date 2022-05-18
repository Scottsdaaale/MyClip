import React from 'react'

function Comments({currentUser}) {
  return (
    <div>
        <div className="comment-box"></div>
        <form>
            <textarea placeholder="Comment..."></textarea>
            <div>
                <button type="submit" value="Comment">
                    Post
                </button>
            </div>
        </form>
    </div>
  )
}

export default Comments