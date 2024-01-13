// BlogSection.jsx
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import db from "../../Firebase/firebase"; // Adjust the path based on your project structure
import CardPost from "../UI/CardPost";
import Form from "../UI/Form";


const BlogSection = () => {
  const [postData, setPostData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const fetchDataFromFirebase = async () => {
    // const db = firebase.firestore();
    const userPosterRef = collection(db, "user_poster");

    try {
      const snapshot = await userPosterRef.get();
      const data = snapshot.docs.map((doc) => doc.data());
      setPostData(data);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  useEffect(() => {
    fetchDataFromFirebase();
  }, []); // Fetch data on component mount

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
        <div className="row mb-5">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="blog__image pt-5">
              <h2 className="text-center pb-5" style={{ fontSize: "35px" }}>
                Lorem ipsum dolor
              </h2>
              <p className="m-4" style={{ fontSize: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odio natus perferendis laborum magni ipsam at eius, voluptatem
                laudantium in. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Esse, ipsam?
              </p>
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
