import React, { useState } from "react";
import { Container } from "react-bootstrap";  
import CardPost from "../../UI/CardPost";
import Form from "../../UI/Form";

const BlogSection = () => {
  const [postData, setPostData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const handlePost = (formData) => {
    setPostData((prevPostData) => [...prevPostData, formData]);
    setShowTitle(true);
  };

  const handleSeeMore = () => {
    setShowMore(true);
  };

  const filteredPosts = showMore ? postData : postData.slice(0, 5);

  return (
    <section className="section__blog p-5">
      <Container className="pt-5">
        <h1 className="phone__res text-center">Blog Post</h1>
        <div className="row mb-5">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="blog__image">
              <img
                src="https://source.unsplash.com/random/1000x3000"
                className="img-fluid"
                alt="image__blog"
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <Form onPost={handlePost} />
          </div>
        </div>
        {showTitle && (
          <div className="row mt-5">
            <h1 className="text-center text-white">Blog of food</h1>
            {filteredPosts.map((data, index) => (
              <CardPost key={index} formData={data} />
            ))}
            {!showMore && postData.length > 5 && (
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleSeeMore}>
                  See more
                </button>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default BlogSection;