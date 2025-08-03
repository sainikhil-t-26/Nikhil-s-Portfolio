import { Typewriter } from 'react-simple-typewriter';
import { FaJava, FaDatabase, FaReact, FaCloud, FaPython,
         FaLinkedin, FaGithub, FaEnvelope, FaCode, FaHackerrank, FaDownload, } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Carousel } from "react-bootstrap";
import 'animate.css';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-wrapper">
      {/* HERO + IMAGE */}
      <div className="container py-5 text-center animate__animated animate__fadeInDown hero-flex">
        <div className="hero-text">
          <h1 className="display-3 fw-bold text-purple mb-3">
  Sai Nikhil T <br />
  <span className="typewriter-role">
    <Typewriter
      words={["Java Full Stack Developer", "Data Science Enthusiast"]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h1>

          <p className="lead mx-auto intro">
            Passionate full stack developer skilled in building robust Java, Spring Boot & React based applications, leveraging data analytics
            & cloud to transform financial services. Strong believer in crafting elegant solutions for complex business problems.
          </p>
        </div>
        <div className="hero-img">
          <img src="/src/profile.jpeg" alt="Sai Nikhil T" className="profile-pic" />
        </div>
      </div>

      {/* SKILLS */}
      <div className="container py-5 text-center animate__animated animate__fadeInUp">
        <h2 className="mb-4 text-purple">Technical Skills</h2>
        <div className="skills-row">
          <div className="skill-icon large"><FaJava /><p>Java & Spring Boot</p></div>
          <div className="skill-icon large"><FaDatabase /><p>SQL & DBMS</p></div>
          <div className="skill-icon large"><FaReact /><p>React & Web</p></div>
          <div className="skill-icon large"><FaPython /><p>Python & Data Science</p></div>
          <div className="skill-icon large"><FaCloud /><p>Cloud GCP/AWS</p></div>
          <div className="skill-icon large"><FaCode /><p>Problem Solving</p></div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="container py-5 animate__animated animate__fadeInLeft">
        <h2 className="text-center mb-4 text-purple">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h5>Software Developer Intern -  Don-Clem Technology<span>April 2025 - June 2025</span></h5>
            <p>• Developed a full-stack web application(PalConnect) using Java, React.js, Javascript and PostgreSQL to store data
                from customers</p>
                <p>• Team-member of the front-end development team and later moved to Integration team.
                 Explored ways to enhance the user experience by effectively utilising React.js and collaborataed with my team members to develop the back-end system for seamless connectivity.</p>
          </div>
        </div>
      </div>

      {/* PROJECTS */}

      <div className="container py-5 animate__animated animate__fadeInRight">
        <h2 className="text-center mb-5 text-purple">Projects</h2>

        <div className="project-card">
          <h4>ExamAdmin-Centralized Results Exam System</h4>
          <p>Developed a centralized Spring Boot web application to efficiently manage and streamline assessments for Campus Recruitment Training programs at MLRIT. Designed with distinct modules for Admins, Teachers, and Students, the system ensures a seamless end-to-end assessment lifecycle, enhancing operational efficiency and transparency.</p>
          <div className="tech-icons big">
            <FaJava /><FaDatabase /><FaCode/>
          </div>
          <ul>
            <li>Manages student and teacher records efficiently and performs all the opertions specific to the domain</li>
            <li>Pagination and search to easily navigate student records.</li>
            <li>Import and Export data to Excel/csv for offline analysis.</li>
          </ul>
          <a href="https://github.com/sainikhil-t-26/ResultSphere-Centralized-Results-Exam-System-SpringBoot-project" target="_blank" rel="noreferrer">
            <FaGithub /> View on GitHub
          </a>
        </div>
        

        <div className="project-card">
          <h4>Lock-Talk-Message Encription-Decription paltform</h4>
          <p>Lock-Talk is a Message Encryption-Decription platform to share sensitive or confidential messages using Spring Boot and React</p>
          <div className="tech-icons big">
            <FaJava /><FaReact /><FaDatabase /><FaCode />
          </div>
          <ul>
            <li>Spring Boot microservices with secure REST APIs</li>
            <li>React dashboards with Message Encription and Decription prompts</li>
            <li>Simple User interface and Robust Java Backend using Spring Boot</li>
          </ul>
          <a href="https://github.com/sainikhil-t-26/Lock_Talk.git" target="_blank" rel="noreferrer">
            <FaGithub /> View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h4>X-Ray-Sentinel-AI based Atelectasis Detection </h4>
          <p>Developed a a Python-based ML system that detects Atelectasis from chest X-rays using image processing and XGBoost.</p>
          <div className="tech-icons big">
            <FaPython /><FaCode/>
          </div>
          <ul>
            <li>Delivers high sensitivity (94%) with AUC of 0.80, aiding clinical decision support through calibrated predictions.</li>
            <li>Predicts Atelectasis (Positive) vs. Normal (Negative) cases by performing visual diagnostics using ROC curve, confusion matrix, and confidence histograms.</li>
            <li>Demonstrates strong classification capacity with AUC = 0.805 and highlights how high-confidence positives cluster beyond the threshold.</li>
          </ul>
          <a href="https://github.com/sainikhil-t-26/X-Ray-Sentinel-AI-based-Atelectasis-Detection.git" target="_blank" rel="noreferrer">
            <FaGithub /> View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h4> SecureCard</h4>
          <p>Developed a secure banking interface and integrated a credit-card fraud detection model to enhance security of 
            transactions made by the customers.</p>
          <p> Ensured scalability and ease of performing banking tasks.
               Achieved a scale of precision and recall values ensuring effective functioning of fraud detection model, so that
                customers have seamless experience throughout the transaction process.</p>
          <div className="tech-icons big">
            <FaPython /><FaDatabase /><FaCode />
          </div>
          <ul>
            <li>Feature engineering on transaction data</li>
            <li>XGBoost + hyperparameter tuning</li>
            <li>REST API for on-demand fraud scoring</li>
          </ul>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="container py-5 animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 text-purple">Certifications</h2>
        <Carousel>
          <Carousel.Item>
            <img className="d-block mx-auto rounded shadow" src="/Certificate1.png" alt="Certification 1"
              style={{ width: "350px", height: "250px", objectFit: "cover" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block mx-auto rounded shadow" src="/src/cert2.png" alt="Certification 2"
              style={{ width: "350px", height: "250px", objectFit: "cover" }} />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* CONTACTS */}
      <div className="container py-5 text-center animate__animated animate__fadeInDown">
        <h2 className="text-purple mb-4">Contact & Profiles</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sai-nikhil-t26/" className="social-link"><FaLinkedin /></a>
          <a href="https://github.com/sainikhil-t-26" className="social-link"><FaGithub /></a>
          <a href="https://leetcode.com/u/Sai_Nikhil_T/" className="social-link"><SiLeetcode /></a>
          <a href="https://www.hackerrank.com/profile/tsainikhil1" className="social-link"><FaHackerrank /></a>
          <a href="mailto:1779765sainikhilt@gmail.com" className="social-link"><FaEnvelope /></a>
        </div>
       <a
  href="/SaiNikhil_T_Resume.pdf"
  download="SaiNikhil_T_Resume.pdf"
  className="btn btn-outline-light mt-3"
>
  <FaDownload className="me-2" /> Download Resume
</a>
      </div>

      <footer className="text-center p-4 mt-5 border-top border-purple">
        © 2025 Sai Nikhil | Built with React & Bootstrap
      </footer>
    </div>
  );
}
