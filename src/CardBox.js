import React, { Component } from 'react'
import Artikl from './Artikl'
import Comment from './Comment'
import { Card, MoreButton } from './styles'
import CreateComment from './CreateComment'

export default class CardBox extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 1,
            comments: props.comments.slice(0,1)
        }
    }

    

    render() {
        return (
            <Card>
                <Artikl article={this.props.article}/>
                <CreateComment
                    createCommentFunction={(arg,_id) => {
                        this.props.createCommentFunction(arg,_id);
                        this.setState({
                            count: this.state.count + 1,
                            comments: this.props.comments.slice(0,this.state.count + 1)
                        })
                    }}
                    articleId={this.props.article.id}
                />
                <Comment
                    comments={this.state.comments}
                />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                {(this.state.comments.length != 0)?<MoreButton
                    onClick={(event)=>{
                        if(this.state.count + 1 < this.props.comments.length){
                            this.setState({
                                count: this.state.count + 1,
                                comments: this.props.comments.slice(0,this.state.count + 1)
                            })
                        }
                        console.log(this.props.comments.slice(0,this.state.count));
                    }}>
                        Learn more
                </MoreButton>:<></>}
            </Card>
        )
    }
}