import "./BackgroundImage.scss";

const BackgroundImage = () => {
  return (
    <video
      className="background-video-player"
      autoPlay
      loop
      muted
      src="https://cdn.flixel.com/flixel/i8ppsbc03dcwnw7kwt00.tablet.mp4"
    />
  );
};

export default BackgroundImage;
