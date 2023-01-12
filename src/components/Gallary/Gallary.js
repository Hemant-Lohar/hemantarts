import React, { useState } from 'react'
import Card from './Card'
import cards from './cardsapi'
import Filterbar from './Filterbar'

const uniquelist = [
    ...new Set(
        cards.map((curElem) => {
            return curElem.title
        })
    ),
    "All"
]


const Gallary = () => {

    const [CardData, setCardData] = useState(cards);
    const [list, setlist] = useState(uniquelist)

    const filterItem = (category) => {
        if(category === "All") {
            setCardData(cards)
            return
        }

        const updatedList = cards.filter((curElem) => {
            return curElem.title === category
        })

        setCardData(updatedList)
    }

    return (
        <>
            <Filterbar filterItem ={filterItem} list={list} />
            <Card CardData={CardData} />
        </>
    )
}

export default Gallary
