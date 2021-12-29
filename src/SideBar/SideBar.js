import React from "react";
// import PropTypes from 'prop-types'
import "./SideBar.css";
import SIdeBarRow from "./SIdeBarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
//
let user = {
  displayName: "Janvier",
  photoURL:
    "https://www.pearlsshine.co.in/wp-content/uploads/2015/07/Untitled-1-4-295x300.jpg",
};
const SideBar = (props) => {
  return (
    <div className="sidebar">
      <SIdeBarRow title={user.displayName} src={user.photoURL} />

      <SIdeBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SIdeBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SIdeBarRow Icon={PeopleIcon} title="Friends" />
      <SIdeBarRow Icon={ChatIcon} title="Messenger" />
      <SIdeBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SIdeBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SIdeBarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
