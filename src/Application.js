import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import CardBox from './CardBox'

const initialStore = {
    stateCard: [
        {
            id: 1,
            title: "Shrimp and Chorizo Paella",
            bodyImg: "static/imegs/paella.jpg",
            text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            id: 2,
            title: "Shrimp and Chorizo Paella",
            bodyImg: "static/imegs/paella.jpg",
            text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            id: 3,
            title: "Shrimp and Chorizo Paella",
            bodyImg: "static/imegs/paella.jpg",
            text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            id: 4,
            title: "Shrimp and Chorizo Paella",
            bodyImg: "static/imegs/paella.jpg",
            text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            id: 5,
            title: "Shrimp and Chorizo Paella",
            bodyImg: "static/imegs/paella.jpg",
            text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        }
    ],
    stateMessage: [
        { 
            malumotId: 1,
            commentTexts: [
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
            ]
        },
        { 
            malumotId: 2,
            commentTexts: []
        },
        { 
            malumotId: 3,
            commentTexts: [
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
            ]
        },
        { 
            malumotId: 4,
            commentTexts: [
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
                "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
            ]
        },
        { 
            malumotId: 5,
            commentTexts: []
        }
    ]
}

const ACTION_CHANGE_MESSAGE = 'ACTION_CHANGE_MESSAGE'

const actionChangeMessage = (comment) => {
    return {
        type: ACTION_CHANGE_MESSAGE,
        payload: comment
    }
}

const rootReducer = (state = initialStore, action) => {
    console.log(state);
    switch(action.type){
        case ACTION_CHANGE_MESSAGE: {
            console.log(action.payload._id)
            let newState = state.stateMessage;
            console.log(newState)
            let index = 0;
            for(let i = 0; i < newState.length; i++){
                if(newState[i].malumotId == action.payload._id){
                    index = i;
                }
            }
            newState[index].commentTexts.unshift(action.payload.comment);
            return {...state, stateMessage: newState}
        }
    }
    return state;
}

const store = createStore(rootReducer);

class ApplicationComment extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const dispatch = this.props.dispatch;

        return (
            <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-around", padding: "20px", flexFlow: "wrap"}}>
                {
                    this.props.stateCard.map(elem => {
                        console.log(this.props.stateMessage[0].commentTexts)
                        let comments = [];
                        comments = this.props.stateMessage.filter(element => {
                            console.log(element.malumotId)
                            return elem.id == element.malumotId;
                        })
                        console.log(comments)
                        console.log(comments);
                        return <CardBox
                            key={elem.id}
                            article={elem}
                            comments={(comments[0] != undefined)?comments[0].commentTexts:[]}
                            createCommentFunction={(comment,_id)=>{
                                dispatch(actionChangeMessage({
                                    comment: comment,
                                    _id: _id
                                }))
                            }}
                        />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateCard: state.stateCard,
        stateMessage: state.stateMessage
    }
}

const WrapperApplication = connect(mapStateToProps)(ApplicationComment);

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <WrapperApplication/>
            </Provider>
        )
    }
}