import React from "react";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";
//
const Feed = () => {
  return (
    <div className="feed">
      {/* storyReel */}
      <StoryReel />
      <MessageSender />
      {[
        {
          profilePic:
            "https://image.shutterstock.com/image-photo/girl-recording-video-vlog-cheerful-260nw-1615628290.jpg",
          message: "wow this work",
          timestamp: new Date(),
          username: "Janvier",
          image:
            "https://image.freepik.com/free-photo/man-taking-selfie-from-mobile-phone-while-friends-dancing-dance-floor_107420-62824.jpg",
        },
        {
          profilePic:
            "https://image.shutterstock.com/image-photo/girl-recording-video-vlog-cheerful-260nw-1615628290.jpg",
          message: "wow this work",
          timestamp: new Date(),
          username: "Janvier",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYia0KFuPqiIa2z1K3GQOjMMXjF6EbGrs2fQ&usqp=CAU",
        },
        {
          profilePic:
            "https://image.shutterstock.com/image-photo/girl-recording-video-vlog-cheerful-260nw-1615628290.jpg",
          message: "wow this work",
          timestamp: new Date(),
          username: "Janvier",
          image:
            "https://www.telegraph.co.uk/content/dam/tv/2020/03/08/TELEMMGLPICT000227305520_trans_NvBQzQNjv4Bqz0FILhSVaz4BDNEYZVm_8wOp5O0E4VPs-geDmN77yPE.jpeg",
        },
      ].map((itm, key) => (
        <Post
          key={key}
          profilePic={itm.profilePic}
          message={itm.message}
          timestamp={itm.timestamp}
          username={itm.username}
          image={itm.image}
        />
      ))}
    </div>
  );
};

export default Feed;
