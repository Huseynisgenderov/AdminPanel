import React from "react";
import "./single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import photo from "../../component/navbar/photo.jpg";
import Chart from "../../component/chart/Chart";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">information</h1>
            <div className="item">
              <img src={photo} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Huseyn Isgenderov</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Huseyn@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+994 55 555 00 00</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">Nizami rayonu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title ="User Spending ( Last 6 Month)"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
