const Tour = ({ id, image, date, title, info, location, duration, cost, removeTour }) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${cost}</p>
        </div>
        <button
          type='button'
          className='btn'
          onClick={() => removeTour(id)}
          style={{ marginTop: '1rem', cursor: 'pointer' }}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour