import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";
// import PropTypes from 'prop-types'

const StoryReel = (props) => {
  return (
    <div className="storyReel">
      {[
        {
          profileSrc:
            "https://www.pearlsshine.co.in/wp-content/uploads/2015/07/Untitled-1-4-295x300.jpg",
          image:
            "https://www.reflectionsacademyofdance.com.au/wp-content/uploads/2020/11/DSC_6903.jpeg",
          title: "Happy",
        },
        {
          profileSrc:
            "https://www.pearlsshine.co.in/wp-content/uploads/2015/07/Untitled-1-4-295x300.jpg",
          image:
            "https://assets.nst.com.my/images/articles/US-HEALTH-DOCTOR-1204_1586656824.jpg",
          title: "waww awesome",
        },
        {
          profileSrc:
            "https://www.pearlsshine.co.in/wp-content/uploads/2015/07/Untitled-1-4-295x300.jpg",
          image:
            "https://apicms.thestar.com.my/uploads/images/2020/04/12/640954.jpg",
          title: "Happy working",
        },
        {
          profileSrc:
            "https://www.pearlsshine.co.in/wp-content/uploads/2015/07/Untitled-1-4-295x300.jpg",
          image:
            "https://assets.nst.com.my/images/articles/US-HEALTH-DOCTOR-1204_1586656824.jpg",
          title: "waww awesome",
        },
        {
          profileSrc:
            "https://www.pearlsshine.co.in/wp-content/uploads/2015/07/Untitled-1-4-295x300.jpg",
          image:
            "https://apicms.thestar.com.my/uploads/images/2020/04/12/640954.jpg",
          title: "Happy working",
        },
      ].map((itm, i) => (
        <Story
          key={i}
          image={itm.image}
          profileSrc={itm.profileSrc}
          title={itm.title}
        />
      ))}
      <Story />
    </div>
  );
};

export default StoryReel;
