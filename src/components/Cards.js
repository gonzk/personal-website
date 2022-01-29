import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/her-Health.png'
                        text="Provide women with access to illnesses that are prevalent in women"
                            label='Personal Project'
                            path='https://github.com/gonzk/her-health'
                        />
                        <CardItem
                            src='images/expenses-tracker.png'
                            text="Track your expenses"
                            label='Class Project'
                            path='https://github.com/gonzk/expenses-tracker'
                        />
                        <CardItem
                            src='images/spotify-dl.png'
                            text="Download Spotify music through a command line"
                            label='GitHub contribution'
                            path='https://github.com/SathyaBhat/spotify-dl'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/spotify-downloader.png'
                            text="Download your Spotify songs offline"
                            label='Personal Project'
                            path='https://github.com/gonzk/spotify-downloader'
                        />
                        <CardItem
                            src='images/spotify-stats.png'
                            text="See your Spotify stats"
                            label='Personal Project'
                            path='https://github.com/gonzk/spotify-stats'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
