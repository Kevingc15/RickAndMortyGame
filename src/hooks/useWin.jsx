
export const UseWin = (handleRestart, moves) => {
  return (
    <div className="win-message">
          <p>¡Ganaste con {moves} movimientos!</p>
          <button onClick={handleRestart}>Volver a empezar</button>
    </div>
  )
}
