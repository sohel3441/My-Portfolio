const About = () => {
  return (
    <section className="container col-xxl-8 px-4 py-5" id="about">
      <div className="row align-items-center g-5 py-5">

        {/* TEXT SECTION */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            About Me
          </h1>
          <p className="lead">
            Hi, I’m Shaikh Sohel, a MERN Stack Developer. I build full-stack web
            applications using MongoDB, Express.js, React.js, and Node.js. I’ve
            worked on real-world projects like a real-time chat app, file
            manager with AWS S3 integration, and dynamic admin dashboards. I
            focus on writing clean backend logic, designing scalable APIs, and
            creating responsive frontends that actually perform well in
            production.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
          <img
            src="https://res.cloudinary.com/dnxhvsqax/image/upload/v1774775630/My_picture_ue9lke.jpg"
            className="img-fluid rounded"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
            }}
            alt="About Shaikh Sohel"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default About;