import { useState } from 'react'
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services)

  const handleRemove = (id) => {
    setServicesData(servicesData.filter((service) => service.id !== id))
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return (
            <Service
              {...service}
              key={service.id}
              removeService={handleRemove}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Services