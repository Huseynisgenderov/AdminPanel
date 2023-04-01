import "./datatable.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="data-table">
      <div className="title">
        <Link to="/products/new" className="add-new">
          Add New
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th className="id">Id</th>
            <th className="imgTitle">Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Detailed</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="body">
              <td className="id">{product.id}</td>
              <td className="img">
                <img
                  src={`http://localhost:5000/${product.productImage}`}
                  alt="product"
                />
              </td>
              <td className="name">{product.name}</td>
              <td>{product.price} $</td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <Link to={`/products/${product.id}/edit`} className="edit">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
