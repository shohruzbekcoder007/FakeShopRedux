import React, { Component } from 'react'
import {
    CardCommentItem,
    CardComments
} from './styles'

export default class Comment extends Component {
    render() {
        return (
            <div>
                <CardComments>
                    <CardCommentItem>Comments: </CardCommentItem>
                    {
                        this.props.comments.map(elem => {
                            return (
                                <CardCommentItem>
                                    {elem}
                                </CardCommentItem>
                            )
                                
                        })
                    }
                </CardComments>
            </div>
        )
    }
}
