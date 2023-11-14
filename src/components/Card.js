const Card = ({ content }) => {
  return (
    <div className="cards mt-1">
      <div className="cards-header d-flex justify-content-between pb-2">
        <span className="notification">
          {" "}
          <img src={content.leftHeader} />
        </span>
        <span className="save font-weight-bold">
          {content.rightHeaderText ? (
            content.rightHeaderText
          ) : (
            <>
              {" "}
              <img src={content.rightHeader} />
            </>
          )}
        </span>
      </div>
      <div
        className={`${
          content.cardNo == "first"
            ? "cards-body pt-3"
            : content.cardNo == "second"
            ? "cards-body pt-5"
            : "cards-body pt-5"
        }`}
      >
        <p>{content.text}</p>
        {content.cardNo == "first" ? (
          <input
            type="text"
            placeholder="hello@gmail.com"
            className="text-dark card-input w-100"
          />
        ) : content.cardNo == "second" ? (
          <img src={content.bottomImg} />
        ) : (
          <img src={content.bottomImg} />
        )}
        <h6 style={{ fontSize: "13px" }} className="pt-2 font-weight-bold">
          {content.bottomText && content.bottomText}
        </h6>
      </div>
    </div>
  );
};

export default Card;
