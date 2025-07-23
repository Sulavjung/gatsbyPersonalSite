import React from "react";
import PortfolioObject from "./portfolio1.json";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLink, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return <ResumeRenderer data={PortfolioObject} />;
};

const ResumeRenderer = ({ data }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
  };

  // Section Title
  const SectionTitle = ({ sectionTitle }) => (
    <div className="mb-1">
      <h2 className="h2 fw-bold text-dark mb-0">{sectionTitle}</h2>
      <hr className="mt-0 mb-0" />
    </div>
  );

  // Subsection Title
  const SubSectionTitle = ({ subSectionTitle }) => (
    <h5 className="fw-bold text-dark mb-0">{subSectionTitle}</h5>
  );

  // Basics Section
  const Basics = ({ basics }) => (
    <header className="text-center mb-4">
      <h1 className="display-3 fw-bold text-dark mb-3">{basics.name}</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-3" style={{ fontSize: "16px" }}>
        {basics.location && (
          <div className="d-flex align-items-center text-muted">
            <FaMapMarkerAlt className="me-1" size="12" />
            {[
              basics.location.address,
              basics.location.city,
              basics.location.region,
              basics.location.postalCode,
              basics.location.countryCode,
            ]
              .filter(Boolean)
              .join(", ")}
          </div>
        )}
        {basics.email && (
          <div className="d-flex align-items-center text-muted">
            <FaEnvelope className="me-1" size="12" />
            <a href={`mailto:${basics.email}`} className="text-muted text-decoration-none">
              {basics.email}
            </a>
          </div>
        )}
        {basics.phone && (
          <div className="d-flex align-items-center text-muted">
            <FaPhone className="me-1" size="12" />
            <span>{basics.phone}</span>
          </div>
        )}
        {basics.url && (
          <div className="d-flex align-items-center text-muted">
            <FaLink className="me-1" size="12" />
            <a href={basics.url} className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">
              {basics.url}
            </a>
          </div>
        )}
        {basics.profiles &&
          basics.profiles.map((profile, index) => (
            <div key={index} className="d-flex align-items-center text-muted">
              {profile.network === "github" && <FaGithub className="me-1" size="12" />}
              {profile.network === "twitter" && <FaTwitter className="me-1" size="12" />}
              {profile.network === "linkedin" && <FaLinkedin className="me-1" size="12" />}
              <a
                href={profile.url}
                className="text-muted text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.username}
              </a>
            </div>
          ))}
      </div>
      {basics.summary && (
        <p className="text-dark text-start" style={{ maxWidth: "660px", fontSize: "1.0rem", lineHeight: "1.5rem" }}>
          {basics.summary}
        </p>
      )}
    </header>
  );

  // Work Section
  const Work = ({ work }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Experience" />
      {work.map((job, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <SubSectionTitle subSectionTitle={job.position} />
            <div className="text-muted fst-italic" style={{ fontSize: "1.0rem" }}>
              {formatDate(job.startDate)} — {formatDate(job.endDate)}
            </div>
          </div>
          <p className="fst-italic mb-0" style={{ fontSize: "1.1rem" }}>
            {job.name}
          </p>
          <p className="text-dark mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {job.summary}
          </p>
          {job.highlights && job.highlights.length > 0 && (
            <ul className="list-unstyled ps-4">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );

  // Projects Section
  const Projects = ({ projects }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Projects" />
      {projects.map((project, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <SubSectionTitle subSectionTitle={project.name} />
            <div className="text-muted fst-italic" style={{ fontSize: "1.0rem" }}>
              {formatDate(project.startDate)} — {formatDate(project.endDate)}
            </div>
          </div>
          <p className="text-dark mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {project.description}
          </p>
          {project.url && (
            <p className="mb-0">
              <a
                href={project.url}
                className="text-primary text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.url}
              </a>
            </p>
          )}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="list-unstyled ps-4">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );

  // Education Section
  const Education = ({ education }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Education" />
      {education.map((edu, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <SubSectionTitle subSectionTitle={edu.institution} />
            <div className="text-muted fst-italic" style={{ fontSize: "1.0rem" }}>
              {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
            </div>
          </div>
          <p className="fst-italic mb-0" style={{ fontSize: "1.1rem" }}>
            {edu.studyType} in {edu.area}
          </p>
          {edu.score && (
            <p className="text-dark mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
              GPA: {edu.score}
            </p>
          )}
          {edu.courses && edu.courses.length > 0 && (
            <ul className="list-unstyled ps-4">
              {edu.courses.map((course, i) => (
                <li key={i} className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
                  {course}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );

  // Awards Section
  const Awards = ({ awards }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Awards" />
      {awards.map((award, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <SubSectionTitle subSectionTitle={award.title} />
            <div className="text-muted fst-italic" style={{ fontSize: "1.0rem" }}>
              {formatDate(award.date)}
            </div>
          </div>
          <p className="fst-italic mb-0" style={{ fontSize: "1.1rem" }}>
            {award.awarder}
          </p>
          <p className="text-dark mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {award.summary}
          </p>
        </div>
      ))}
    </section>
  );

  // Languages Section
  const Languages = ({ languages }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Languages" />
      {languages.map((lang, index) => (
        <div key={index} className="d-flex align-items-baseline mb-0 px-2">
          <div className="fw-bold text-dark me-2" style={{ fontSize: "1.1rem" }}>
            {lang.language}:
          </div>
          <div className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {lang.fluency}
          </div>
        </div>
      ))}
    </section>
  );

  // Skills Section
  const Skills = ({ skills }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Skills" />
      {skills.map((skill, index) => (
        <div key={index} className="d-flex align-items-baseline mb-2 px-2">
          <div className="fw-bold text-dark me-2" style={{ fontSize: "1.1rem" }}>
            {skill.name}:
          </div>
          <div className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {skill.keywords && skill.keywords.join(", ")}
          </div>
        </div>
      ))}
    </section>
  );

  // Interests Section
  const Interests = ({ interests }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Interests" />
      {interests.map((interest, index) => (
        <div key={index} className="d-flex align-items-baseline mb-0 px-2">
          <div className="fw-bold text-dark me-2" style={{ fontSize: "1.1rem" }}>
            {interest.name}:
          </div>
          <div className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {interest.keywords && interest.keywords.join(", ")}
          </div>
        </div>
      ))}
    </section>
  );

  // References Section
  const References = ({ references }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="References" />
      {references.map((ref, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="fw-bold text-dark" style={{ fontSize: "1.1rem" }}>
            {ref.name}
          </div>
          <p className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {ref.reference}
          </p>
        </div>
      ))}
    </section>
  );

  // Certificates Section
  const Certificates = ({ certificates }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Certificates" />
      {certificates.map((cert, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <SubSectionTitle subSectionTitle={cert.name} />
            <div className="text-muted fst-italic" style={{ fontSize: "1.0rem" }}>
              {formatDate(cert.date)}
            </div>
          </div>
          <p className="text-muted fst-italic mb-0 " style={{ fontSize: "1.1rem" }}>
            {cert.issuer}
          </p>
          {cert.url && (
            <p className="mb-0">
              <a
                href={cert.url}
                className="text-primary text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.url}
              </a>
            </p>
          )}
        </div>
      ))}
    </section>
  );

  // Publications Section
  const Publications = ({ publications }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Publications" />
      {publications.map((pub, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="fw-bold text-dark" style={{ fontSize: "1.1rem" }}>
            {pub.name}
          </div>
          <p className="text-muted fst-italic mb-0" style={{ fontSize: "1.1rem" }}>
            {pub.publisher}
          </p>
          <p className="text-muted" style={{ fontSize: "1.0rem" }}>
            {formatDate(pub.releaseDate)}
          </p>
          <p className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {pub.summary}
          </p>
          {pub.url && (
            <p className="mb-0">
              <a
                href={pub.url}
                className="text-primary text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {pub.url}
              </a>
            </p>
          )}
        </div>
      ))}
    </section>
  );

  // Volunteer Section
  const Volunteer = ({ volunteer }) => (
    <section className="mb-4">
      <SectionTitle sectionTitle="Volunteer Experience" />
      {volunteer.map((vol, index) => (
        <div key={index} className="mb-3 px-2">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <SubSectionTitle subSectionTitle={vol.position} />
            <div className="text-muted fst-italic" style={{ fontSize: "1.0rem" }}>
              {formatDate(vol.startDate)} — {formatDate(vol.endDate)}
            </div>
          </div>
          <p className="fst-italic mb-0" style={{ fontSize: "1.1rem" }}>
            {vol.organization}
            {vol.url && (
              <a
                href={vol.url}
                className="text-primary text-decoration-none ms-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {vol.url}
              </a>
            )}
          </p>
          <p className="text-dark mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
            {vol.summary}
          </p>
          {vol.highlights && vol.highlights.length > 0 && (
            <ul className="list-unstyled ps-4">
              {vol.highlights.map((highlight, i) => (
                <li key={i} className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );

  // Custom CSS
  const customStyles = `
    body {
      font-family: "Latin Modern", "Lora", "Times New Roman", serif;
      font-size: 11px;
      background: #fff;
      color: #111;
    }
    h1.display-3 {
      font-size: 3rem;
      font-weight: 600;
    }
    h2.h2 {
      font-size: 1.65rem;
      font-weight: 600;
    }
    p, li {
      font-size: 1.0rem;
      line-height: 1.5rem;
    }
    .text-muted {
      color: #555 !important;
    }
    a.text-primary {
      color: #007bff !important;
      text-decoration: none;
    }
    a.text-primary:hover {
      color: #0056b3 !important;
    }
    li {
      list-style-type: square;
    }
    .container {
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="container bg-white py-5">
        <Basics basics={data.basics} />
        <div>
          {data.work && data.work.length > 0 && <Work work={data.work} />}
          {data.volunteer && data.volunteer.length > 0 && <Volunteer volunteer={data.volunteer} />}
          {data.projects && data.projects.length > 0 && <Projects projects={data.projects} />}
          {data.education && data.education.length > 0 && <Education education={data.education} />}
          {data.awards && data.awards.length > 0 && <Awards awards={data.awards} />}
          {data.certificates && data.certificates.length > 0 && <Certificates certificates={data.certificates} />}
          {data.publications && data.publications.length > 0 && <Publications publications={data.publications} />}
          {data.skills && data.skills.length > 0 && <Skills skills={data.skills} />}
          {data.languages && data.languages.length > 0 && <Languages languages={data.languages} />}
          {data.interests && data.interests.length > 0 && <Interests interests={data.interests} />}
          {data.references && data.references.length > 0 && <References references={data.references} />}
        </div>
      </div>
    </>
  );
};

export default Resume;
