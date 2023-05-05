import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  toggleLikeButton = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.map(each => {
      if (each.id === id) {
        return {...each, isLiked: !each.isLiked}
      }
      return each
    })
    this.setState({commentsList: newCommentsList})
  }

  deleteCommentFromList = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: newCommentsList})
  }

  addComment = event => {
    event.preventDefault()
    const {commentsList, name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      datePosted: new Date(),
      isLiked: false,
    }
    const newCommentsList = [...commentsList, newComment]
    this.setState({commentsList: newCommentsList, name: '', comment: ''})
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment, isLiked} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.addComment}>
              <input
                onChange={this.changeName}
                type="text"
                placeholder="Your Name"
                value={name}
              />
              <textarea
                onChange={this.changeComment}
                value={comment}
                rows="10"
                cols="100"
                placeholder="Your Comment"
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <p>
            <span>{commentsList.length}</span>Comments
          </p>
          <ul>
            {commentsList.map(each => (
              <CommentItem
                deleteCommentFromList={this.deleteCommentFromList}
                len={commentsList.length}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
                each={each}
                toggleLikeButton={this.toggleLikeButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
