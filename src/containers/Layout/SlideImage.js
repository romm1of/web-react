import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import ReactPlayer from "react-player";

{
  /* <ReactPlayer playing width="100%" height="100%" muted loop url="https://landrover.ssl.cdn.sdlmedia.com/637425204283548520SA_pr13.mp4" />; */
}

const SlideImage = ({ src, header, paragraph, btnText, video }) => {
  if (video == true) {
    return (
      <div
        style={{
          maxHeight: "865px",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <ReactPlayer
          playing
          width="100%"
          height="100%"
          muted
          loop
          url={src}
          // url="video.mp4"
        />
      </div>
    );
  }
  return (
    <div style={{ position: "relative" }}>
      <Container
        style={{
          position: "absolute",
          left: "250px",
          bottom: "50px",
          maxWidth: "500px",
        }}
      >
        <Jumbotron
          style={{
            paddingTop: "5px",
            paddingBottom: "10px",
            backgroundColor: "#121212",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            {header}
          </h1>
          <p
            style={{
              color: "white",
            }}
          >
            {paragraph}
          </p>
          <hr
            style={{
              color: "white",
            }}
            className="my-3"
          />
          <Button color="danger">{btnText}</Button>
        </Jumbotron>
      </Container>
      <img src={src} style={{ maxHeight: "865px", width: "100%" }} />
    </div>
  );
};

export default SlideImage;
