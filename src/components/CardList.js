import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
  
  return (
    <>
  
        {
            robots.map((currVal,currIndex)=> {
                return(
                    <Card
                    key ={currVal.id}
                    id = {currVal.id}
                    name = {currVal.name}
                    email = {currVal.email}
                    />
                )
               
            })
        }
  
    </>
  )
}

export default CardList;