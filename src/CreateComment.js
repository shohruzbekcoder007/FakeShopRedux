import React, { Component } from 'react'
import { CreateCommentBox, CommentButton, CommentInput } from './styles'

export default class CreateComment extends Component {
    constructor(props){
        super(props)
        this.state={
            newComment: ""
        }
    }

    commitHandler = (arg) => {
        this.setState({
            newComment: arg
        })
    }

    render() {
        return (
            <CreateCommentBox>
                <CommentInput onChange={(event)=>{this.commitHandler(event.target.value)}}/>
                <CommentButton onClick={()=>{this.props.createCommentFunction(this.state.newComment, this.props.articleId)}}>Add Comment</CommentButton>
            </CreateCommentBox>
        )
    }
}
