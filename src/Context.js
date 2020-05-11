import React, { Component } from 'react'
import {placeInfo,detailInfo,reviews,news} from './data'

const InfoContext = React.createContext()

//pass the InfoProvide to the root file index.js
class InfoProvider extends Component { 
    state = {
        info:placeInfo,
        detailInfo:detailInfo,
        reviews:reviews,
        news:news,
    }
    render() {
        return (
            <InfoContext.Provider value={{
                info:this.state.info,
                headerTitle:this.state.headerTitle,
                headerSubtitle:this.state.headerSubtitle,
                headerText:this.state.headerText,
                title:this.state.title,
                description:this.state.description,
                maps:this.state.maps,
                reviews:this.state.reviews,
                news:this.state.news,
                detailInfo:this.state.detailInfo,
                name:this.state.name,
                avatar:this.state.avatar,
                comment:this.state.comment,



            }}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}



//  InfoConsumer pass the data to the diffrenet component..thats mean InfoConsumer pass the data diffrent component
const InfoConsumer = InfoContext.Consumer 

export {InfoProvider,InfoConsumer}
