import React from "react";
import "./Service.css";

function Service() {
  return (
    <>
      <section className="services" id="services">
        <ul>
          <li>
            {/* <img src="/icons/verified.png" alt="" /> */}
            <i className="fa-solid fa-shield fa-2xl"></i>
            <h3>Enjoy some flexibility</h3>
            <p>
              Stays with flexible cancellation make it easy to re-book if your
              plans change.
            </p>
          </li>
          <li>
            {/* <img src="/icons/moving.png" alt="" /> */}
            <i className="fa-sharp fa-solid fa-map-location-dot fa-2xl"></i>
            <h3>More than 7M active trip</h3>
            <p>
              More than 1 billion guests who've found getaways in over 120
              countries and destination.
            </p>
          </li>
          <li>
            {/* <img src="/icons/settings.png" alt="" /> */}
            <i className="fa-solid fa-sliders fa-2xl"></i>
            <h3>100+ filters for tailored stays</h3>
            <p>
              Pick your price range, the number of rooms you want, and other key
              amneties to find the stay that fits your needs.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Service;
