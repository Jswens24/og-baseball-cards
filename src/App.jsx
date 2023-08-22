import playerData from "./playerData";
import { useState } from 'react'

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)

  if (showPicture) {
    return (
      <div onClick={() => setShowPicture(!showPicture)} className="card">
        <h2>{props.player.name}</h2>
        <img src={props.player.imgUrl} />
      </div>
    );
  } else {
    const statsDisplay = Object.entries(props.player.stats).map(([statName, statValue]) => (
      <p key={statName}>
        {statName} : {statValue}
      </p>
    ))

    return (
      <div onClick={() => setShowPicture(!showPicture)} className="card">
        <h2>{props.player.name}</h2>
        <p>{props.player.team}</p>
        <p>{props.player.position}</p>
        {statsDisplay}
      </div>
    )
  }
}

function App() {
  const cards = playerData.map((player, index) => {
    return <BaseballCard key={player.name} player={player} />
  })

  return (
    <>
      {cards}
    </>
  )

}

export default App;
