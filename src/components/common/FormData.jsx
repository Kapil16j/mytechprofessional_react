// pages/Form.js
import { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });

  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Assuming you want to upload an image file and store its URL
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
        setIsImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h1>Next.js Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Image Upload:
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        <br />

        {isImageUploaded && <img src={formData.image} alt="Uploaded" />}
        <br />

        <button
          type="submit"
          className="bg-blue-500  p-5 ml-10 disabled:bg-red-600"
          disabled={!isImageUploaded}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormData;
