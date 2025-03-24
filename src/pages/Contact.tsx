import { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      title: 'Email',
      detail: 'face7onol@gmail.com'
    },
    {
      title: 'Location',
      detail: 'Vidin, Bulgaria'
    },
    {
      title: 'Phone',
      detail: '+359 876 227 442'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" data-text="Let's Connect">Let's Connect</h2>
          <div className="section-divider"></div>
        </div>
        <p className="section-description">
          Have a question or want to work together? I'd love to hear from you.
        </p>

        <div className="contact-cards">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <h3>{info.title}</h3>
              <p>{info.detail}</p>
            </div>
          ))}
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                required
              />
            </div>
            <button type="submit" className="button button-primary" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact