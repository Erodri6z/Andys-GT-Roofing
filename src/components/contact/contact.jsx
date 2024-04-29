import "./contact.css"

function Contact() {
  return (
    <>
    <div>
      <h2>Contact</h2>
      <div className="contact-container">

      <div className="contact-info">
        <h4>Contact us</h4>
        <p>Phone : ????????</p>
      </div>

      <div className="map">
        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190306.37892168653!2d-87.81368533837986!3d41.816729833021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1714351079387!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      </div>
    </div>
    </>
  )
}

export default Contact