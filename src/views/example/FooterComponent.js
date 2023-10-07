import React from "react";
import "../../styles/Footer.scss";

class FooterComponent extends React.Component {
  render() {
    return (
      <>
        <div className="parent-footer">
          <ul className="wrapper-footer">
            <li className="icon facebook">
              <span className="tooltip">facebook</span>
              <span>
                <i className="fab fa-facebook"></i>
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </li>{" "}
            <li className="icon twitter">
              <span className="tooltip">twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </li>{" "}
            <li className="icon github">
              <span className="tooltip">git</span>
              <span>
                <i className="fab fa-github"></i>
              </span>
            </li>{" "}
            <li className="icon youtube">
              <span className="tooltip">youtube</span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default FooterComponent;
