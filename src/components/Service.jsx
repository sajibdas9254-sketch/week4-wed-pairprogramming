const Service = ({ id, icon, title, text, removeService }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        <button
          type='button'
          className='btn'
          onClick={() => removeService(id)}
          style={{ marginTop: '0.5rem', cursor: 'pointer' }}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Service