import Data from "../../AllData";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Certificate.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Certificate = () => {
  AOS.init();
  return (
    <div className="Certificates">
      <h1>Certificates</h1>
      <div className="CertificatesInner">
        {Data.Certificates.map((curr, id) => {
          return (
            <div data-aos="zoom-in" key={id}>
            {/* <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            > */}
              <div className="CertificatesSummInner" key={id}>
                <div className="CertificateImg">
                  <a>
                    <img src={curr.Image} alt="Certificates" id="projectImg" />
                    <div className="onhover">
                      <h2>{curr.text}</h2>
                      <p>{curr.para}</p>
                      <div id="onhoverLinks">
                        <a
                          href={curr.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt id="externalLink" />
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
                <h2>{curr.text}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
