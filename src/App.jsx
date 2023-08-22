import playerData from "./playerData";

function BaseballCard(props) {
  // return (
  //   <div className="card">
  //     <h2>{props.player.name}</h2>
  //     <img src={props.player.imgUrl} />
  //   </div>
  // );

  const statsDisplay = Object.entries(props.player.stats).map(([statName, statValue]) => (
    <p key={statName}>
      {statName} : {statValue}
    </p>
  ))

  return (
    <div className="card">
      <h2>{props.player.name}</h2>
      <p>{props.player.team}</p>
      <p>{props.player.position}</p>
      {statsDisplay}
    </div>
  )
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
