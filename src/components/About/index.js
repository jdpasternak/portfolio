const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img
        width="200"
        alt="Jake Pasternak"
        src={`${process.env.PUBLIC_URL + "/assets/images/profile.JPG"}`}
      />
      <p>
        Jake Pasternak was born in San Diego, California, and moved with his
        family to Mililani, Hawaii, at the age of three. His introduction to
        computers and technology started at an early age when he took computer
        hardware and software, networking, and basic scripting courses at
        Mililani High School where he graduated in 2014.
      </p>
      <p>
        After graduating high school, Jake worked at an electrical distributor
        where his natural talent for computer support enabled him to be the
        on-site desktop support for the branch. This sparked greater interest
        for computer technology and lead to Jake achieving his first
        certification: the CompTIA A+.
      </p>
      <p>
        Though he did not serve in the company's IT department in an official
        capacity, he did decide to pursue further education in the field. In may
        of 2020, Jake received an Associate in Science in Computer Security and
        Networking Technologies from the University of Hawaii Honolulu Community
        College.
      </p>
      <p>
        With his new education, Jake operated as a Project Coordinator for a
        large health insurance company in Hawaii where he became familiar with
        enterprise-level IT systems.
      </p>
      <p>
        Following his many years in infrastructure-related roles, Jake made a
        shift to pursue a career in software engineering by enrolling in a
        Bootcamp for coding and web development through UC Berkeley Extension.
      </p>
      <p>
        Jake now lives in Tampa, Florida, working for JP Morgan Chase &amp; Co.
        as an Analyst in the company's Early Career Software Developer program.
      </p>
    </div>
  );
};

export default About;
