import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./new.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const Edit = () => {
  const history = useNavigate();
  const { id } = useParams();

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
    data.append("price", Number(price));
    data.append("featured", featured);
    data.append("productImage", productImage);

    axios
      .put(`http://localhost:5000/api/products/${id}`, data)
      .then((res) => history.push(`/products/${id}`))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setState({
          name: res.data.name,
          details: res.data.details,
          price: res.data.price,
        });
        setFeatured(res.data.featured);
        setPreviewImage(`http://localhost:5000/${res.data.productImage}`);
      })
      .catch((err) => console(err));
  }, [id]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {previewImage && (
              <img className="preview-image" src={previewImage} alt="preview" />
            )}
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

export default Edit;
