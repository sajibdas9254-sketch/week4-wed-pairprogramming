
import { useState } from 'react'

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration Submitted:', formData)
  }

  return (
    <section className='section'>
      <div className='section-center'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label>Name: </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div>
            <label>Email: </label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div>
            <label>Password: </label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div>
            <label>Confirm Password: </label>
            <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div>
            <label>Phone Number: </label>
            <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Registration