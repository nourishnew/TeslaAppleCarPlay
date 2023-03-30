import React from "react";
import "../style2/bottombar.css";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ShowChartIcon from "@mui/icons-material/ShowChart";
export default function BottomBar() {
  return (
    <div className="container dark">
      <TimeToLeaveIcon style={{ color: "#FFFFFF" }} />
      <div className="flex arrowContainer">
        <KeyboardArrowLeftIcon style={{ color: "#FFFFFF" }} />
        <p style={{ color: "#FFFFFF" }} className="body2">68</p>
        <KeyboardArrowRightIcon style={{ color: "#FFFFFF" }} />
      </div>
      <div className="flex middleMenu">
        <LibraryMusicIcon style={{ color: "#ed556c" }} />
        <BluetoothIcon
          style={{
            color: "#FFFFFF",
            backgroundColor: "#047cf0",
            borderRadius: "2px",
          }}
        />
        <CalendarMonthIcon style={{ color: "#ed556c" }} />
        <CameraAltIcon style={{ color: "#FFFFFF" }} />
        <LocalPhoneIcon style={{ color: "#29c72e" }} />
        <MoreHorizIcon style={{ color: "#FFFFFF" }} />
        <ShowChartIcon style={{ color: "#29c72e" }} />
      </div>
      <div className="flex arrowContainer">
        <KeyboardArrowLeftIcon style={{ color: "#FFFFFF" }} />
        <p style={{ color: "#FFFFFF" }} className="body2">68</p>
        <KeyboardArrowRightIcon style={{ color: "#FFFFFF" }} />
      </div>
      <div className="flex arrowContainer">
        <KeyboardArrowLeftIcon style={{ color: "#FFFFFF" }} />
        <VolumeUpIcon style={{ color: "#FFFFFF" }} />
        <KeyboardArrowRightIcon style={{ color: "#FFFFFF" }} />
      </div>
    </div>
  );
}
