// Form.jsx
import React, { useState } from "react";

const Form = ({ onPost }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    title: "",
    selectedOption: "",
    image: null,
    ingredients: "",
    how_to_do: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPost(formData);
    setFormData({
      fullname: "",
      title: "",
      selectedOption: "",
      image: null,
      email: "",
      message: "",
    });
  };

  return (
    <div className="blog__form">
      <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="ingredients"
<<<<<<< HEAD
            />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="form-control"
                name="how_to_do"  // Change this to "howToDo" or any other valid name
                value={formData.how_to_do}
                onChange={handleChange}
                placeholder="how_to_do"
              />
            </div>
=======
              required
            />
            </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              name="how to do"
              value={formData.how_to_do}
              onChange={handleChange}
              placeholder="how_to_do"
              required
            />
          </div>
>>>>>>> origin/main
          <div className="mb-5">
            <select
              className="form-select"
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleChange}
              required
            >
              <option value='active'>Choose type of option</option>
              <option value={1}>Appetizer</option>
              <option value={2}>Suop</option>
              <option value={3}>Fried</option>
              <option value={4}>Dessert</option>
            </select>
          </div>
          <div className="mb-5">
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <textarea
              className="form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write what you want to write"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
    </div>
  );
};

export default Form;
