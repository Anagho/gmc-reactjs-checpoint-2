
import players from "../data/players";
import Player from "./Player";

function PlayerList() {
  return (
    <div className="container my-4">
        <div className="row g-4">
            {players.map((player) => {
                return (
                    <div key={player.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Player {...player} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlayerList