import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    each,
    toggleLikeButton,
    deleteCommentFromList,
    initialContainerBackgroundClassNames,
    len,
  } = props
  const {name, comment, isLiked, id, datePosted} = each

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = isLiked ? 'liked' : 'like'

  const likeClicked = () => {
    toggleLikeButton(id)
  }

  const deleteComment = () => {
    deleteCommentFromList(id)
  }

  return (
    <li>
      <div>
        <div>{name[0]}</div>
        <p>{name}</p>
        <p>{formatDistanceToNow(datePosted)}</p>
      </div>
      <p>{comment}</p>
      <div>
        <button className={likeText} onClick={likeClicked}>
          <img src={likeImgUrl} alt="like" />
          Like
        </button>
        <button data-testid="delete">
          <img
            onClick={deleteComment}
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
