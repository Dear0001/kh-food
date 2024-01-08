import React from "react";
const CardPost = ({ formData }) => {
  return (
    <>
      <div className="col-lg-12 col-md-12">
        <div className="blog__posted">
          <div className="card mb-5" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img
                  alt={formData.image.name}
                  src={URL.createObjectURL(formData.image)}
                  className="img-fluid rounded-start"
                  style={{ width: "100%", maxWidth: "100%" }}
                />
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="card-body m-4">
                  <h2 className="card-title">{formData.title}</h2>
                  <p className="card-text" style={{ fontSize: "1.5rem" }}>
                    {formData.message}
                  </p>
                  <span
                    className="name__poster"
                    style={{ fontSize: "1.6rem", fontWeight: "700" }}
                  >
                    {formData.fullname}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPost;