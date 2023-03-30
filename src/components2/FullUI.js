import React from "react";
import App2 from "../App2";
import BottomBar from "./BottomBar";
import "../style2/fullui.css";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoopIcon from "@mui/icons-material/Loop";
export default function FullUI() {
  return (
    <div>
      <div className="flex" style={{ height: "90vh" }}>
        <div className="imageContainer dark">
          <p
            className="body1 textPrimaryWhite"
            style={{ width: "fit-content", marginLeft: "auto" }}>
            Trunk closed
          </p>
          <img src="images/model3.png" alt="model3" className="image" />
          <p className="body1 textPrimaryWhite">Frunk closed </p>
        </div>
        <div style={{ width: "60%" }}>
          <div className="mediaPlayer flex ">
            <div className="flex center">
              <img
                src="images/i6u7y8t9r4.jpg"
                alt="album"
                className="albumImage"
              />
              <p
                style={{ marginLeft: "5px" }}
                className="body2 textPrimaryWhite">
                Listen now
              </p>
            </div>
            <div className="flex even" style={{ width: "50%" }}>
              <AddIcon style={{ color: "#FFFFFF" }} />
              <SkipPreviousIcon style={{ color: "#FFFFFF" }} />
              <PauseIcon style={{ color: "#FFFFFF" }} />
              <SkipNextIcon style={{ color: "#FFFFFF" }} />
              <ShuffleIcon style={{ color: "#FFFFFF" }} />
            </div>
            <LoopIcon style={{ color: "#FFFFFF" }} />
          </div>
          <div className="flex applePlayTopBar">
            <LibraryMusicIcon style={{ color: "#ed556c" }} />
            <p className="body1 textPrimaryWhite">Apple Music</p>
            <KeyboardArrowDownIcon style={{ color: "#ed556c" }} />
            <KeyboardArrowLeftIcon
              style={{
                color: "#ed556c",
                background: "#2c2c2c",
                borderRadius: "3px",
              }}
            />
            <KeyboardArrowRightIcon
              style={{
                color: "#ed556c",
                background: "#2c2c2c",
                borderRadius: "3px",
              }}
            />
            <p className="body1 textPrimaryWhite">Listen now</p>
            <p className="body1 textPrimaryWhite">Browse</p>
            <p className="body1 textPrimaryWhite">Radio</p>
            <p className="body1 textPrimaryWhite">Library</p>
          </div>
          <App2 />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
