import React, { Component } from 'react'
import {
    CardHeader,
    CardHeaderAvater,
    CardHeaderText,
    CardHeaderIconc,
    CardBodyImg,
    CardFooter
} from './styles'

export default class Artikl extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <CardHeader>
                    <CardHeaderAvater>
                        {this.props.article.title[0]}
                    </CardHeaderAvater>
                    <CardHeaderText>
                        {this.props.article.title}
                    </CardHeaderText>
                    <CardHeaderIconc></CardHeaderIconc>
                </CardHeader>
                <CardBodyImg src={this.props.article.bodyImg}/>
                <CardFooter>
                    {this.props.article.text}
                </CardFooter>
            </div>
        )
    }
}
