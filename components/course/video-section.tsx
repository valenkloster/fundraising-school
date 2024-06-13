const VideoSection: React.FC = () => {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold text-fsGray">Introduction</h1>
      <h2 className="mb-2 text-3xl font-bold">Why are we doing this?</h2>
      <div className="mb-4">
        <p className="text-sm font-semibold">Lesson 6 of 32</p>
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/mYXd_fTEWOA?si=e6RKsSGQtj5AYucO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
