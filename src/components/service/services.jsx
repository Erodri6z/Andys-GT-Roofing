import "./service.css"
import roofing from "../../assets/Roofing.webp"

function Services() {
  
  return (
    <>
    <div className="service">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        <div className="service-div" style={{backgroundImage: `url(${roofing})`}}>
          <h4>Roofing</h4>
          <p>Techno stuff Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium vel reprehenderit, modi cupiditate necessitatibus temporibus quae nesciunt dolorum voluptas harum qui, tempora quibusdam ullam ipsam, nulla alias maiores beatae?</p>
        </div>
        <div className="service-div">
          <h4>Sidings</h4>
          <p>Techno stuff Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium vel reprehenderit, modi cupiditate necessitatibus temporibus quae nesciunt dolorum voluptas harum qui, tempora quibusdam ullam ipsam, nulla alias maiores beatae?</p>
        </div>
        <div className="service-div">
          <h4>Windows</h4>
          <p>Techno stuff Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium vel reprehenderit, modi cupiditate necessitatibus temporibus quae nesciunt dolorum voluptas harum qui, tempora quibusdam ullam ipsam, nulla alias maiores beatae?</p>
        </div>
        <div className="service-div">
          <h4>And Much More</h4>
          <p>Techno stuff Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium vel reprehenderit, modi cupiditate necessitatibus temporibus quae nesciunt dolorum voluptas harum qui, tempora quibusdam ullam ipsam, nulla alias maiores beatae?</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services