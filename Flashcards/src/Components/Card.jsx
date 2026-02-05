
const Card = (props) => {
  return (
    <div className={`card ${props.isFlipped ? 'flipped' : ''}`} onClick={props.onCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">{props.question}</div>
        </div>
        <div className="card-back">
          <div className="card-content">{props.answer}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;