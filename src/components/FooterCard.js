import React from "react";

const FooterCard = ({ content }) => {
  return (
    <>
      <div className="footer-card ">
        <div className="footer-header">
          <h6 className="font-weight-bold">
            {content.name}{" "}
            <span style={{ color: "rgba(150, 151, 154, 1)" }}>
              {content.desc}
            </span>
          </h6>
        </div>
        <div className="footer-body">
          <p className="text-dark font-weight-bold pt-1">{content.text}</p>
        </div>
      </div>
    </>
  );
};

export default FooterCard;
