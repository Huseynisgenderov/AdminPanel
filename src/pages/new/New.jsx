import React from "react";
import "./new.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = ({inputs, title}) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:<DriveFolderUploadIcon className="icon"/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              {inputs.map((input) =>(

              <div className="formInput" key={input.id}>
                <label htmlFor={input.label}>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} id={input.label}/>
              </div>
              ))}
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
