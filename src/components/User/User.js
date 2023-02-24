import React, { useEffect, useState } from "react";

// Import css
import "./User.css";

export function User() {
  return (
    <div className="user-container">
      <div className="user-container-inner">
        <img src="https://avatars.githubusercontent.com/u/28864834?v=4" className="profile-image" />
        <div className="user-wrapper">
          <span>
            {" "}
            <span style={{ fontWeight: "bold" }}> Mouad Lasri</span>{" "}
          </span>
          <div className="user-metadata-info">
            <span className="user-metadata-info-group">
              <span className="user-item-info-title">
                <span>lasri.mouad98@gmail.com</span>
              </span>
            </span>
          </div>
        </div>
        <div className="task-toggle-important"></div>
      </div>
    </div>
  );
}
