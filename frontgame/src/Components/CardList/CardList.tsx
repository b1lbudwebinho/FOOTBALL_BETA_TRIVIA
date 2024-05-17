import React from 'react'
import Card from '../Card/Card'

interface Props {}
// type Props = {}; /* it can also be type, no-problem */

const CardList = (props: Props) => {
  return (
    <div>
        <Card playerName="Lionel Messi" club="Inter Miami" jerseyNumber={10}/>
        <Card playerName="Cristiano Ronaldo" club="Al Nassr" jerseyNumber={7}/>
        <Card playerName="Robert Lewandowski" club="FC Barcelona" jerseyNumber={9}/>
    </div>
  )
}

export default CardList