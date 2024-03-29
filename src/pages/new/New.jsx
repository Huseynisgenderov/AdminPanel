import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./new.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = () => {
  const history = useNavigate();
  const [state, setState] = useState({
    name: "",
    details: "",
    price: 0,
  });
  const [previewImage, setPreviewImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [productImage, setProductImage] = useState(null);

  const handleProductImage = (e) => {
    const image = e.target.files[0];

    if (image) {
      setProductImage(image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
    }
  };

  const handlChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, details, price } = state;
    const data = new FormData();

    data.append("name", name);
    data.append("details", details);
    data.append("featured", featured);
    data.append("price", Number(price));
    data.append("productImage", productImage);

    axios
      .post(`http://localhost:5000/api/products`, data)
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                previewImage
                  ? previewImage
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput df">
                <label htmlFor="file">Image:</label>
                <input
                  type="file"
                  name="productImage"
                  id="productImage"
                  accept="image/png, image/jpeg"
                  onChange={handleProductImage}
                />
              </div>

              <div className="formInput">
                <label htmlFor="label">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={state.name}
                  onChange={handlChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="details">Details</label>
                <input
                  name="details"
                  id="details"
                  value={state.details}
                  onChange={handlChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={state.price}
                  onChange={handlChange}
                />
              </div>
              <div className="formInput df">
                <label htmlFor="featured">Featured</label>
                <input
                  type="checkbox"
                  name="featured"
                  id="featured"
                  onChange={(e) => setFeatured(e.target.checked)}
                />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
