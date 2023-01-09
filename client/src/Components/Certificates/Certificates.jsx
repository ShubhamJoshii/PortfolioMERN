import Data from "../../AllData";
import { FaExternalLinkAlt} from "react-icons/fa";
import "./Certificate.css"

const Certificate = () => {
  return (
    <div className="Certificates">
      <h1>Certificates</h1>
      <div className="CertificatesInner">
        {Data.Certificates.map((curr, id) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
