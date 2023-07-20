import React from "react";
import "./FinalUploadPreview.css";

export default function FinalUploadPreview () {
  return (
    <div className="box">
      <div className="showcase-window-wrapper">
        <div className="showcase-window">
          <div className="project-details">
            <div className="frame">
              <div className="h-1-wrapper">
                <h1 className="text-wrapper">[project-title]</h1>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="div">project description</div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-2">
                <img className="vector" alt="Vector" src="vector.svg" />
                <div className="got-the-shit-out-fo-wrapper">
                  <p className="got-the-shit-out-fo">
                    got the shit out fo the house
                    <br />
                    gotta go take a shit, lol
                    <br />
                    write the fourth bullet list
                  </p>
                </div>
                <div className="frame-3">
                  <div className="div">public_notes</div>
                </div>
                <div className="frame-4" />
              </div>
            </div>
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-2">contributors</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-3">contributors</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-3">contributors</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-3">contributors</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-3">contributors</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-3">contributors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
