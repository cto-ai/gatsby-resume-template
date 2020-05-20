import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email} · </a>
            {config.address} · {config.phone}
          </div>
          <p className="lead mb-5">{config.bio}</p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {config.experienceList.map((experience) => {
            const { title, company, description, period } = experience;
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">{company}</div>
                  <p>{description}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          {config.educationList.map((education) => {
            const {
              institution,
              qualification,
              description,
              period,
            } = education;
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{institution}</h3>
                  <div className="subheading mb-3">{qualification}</div>
                  <div>{description}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            {config.langTools.map((education) => {
              const { iconClass } = education;
              return (
                <li className="list-inline-item">
                  <i className={`fab ${iconClass}`}></i>
                </li>
              );
            })}
          </ul>

          <div className="subheading mb-3">Other skills</div>
          <ul className="fa-ul mb-0">
            {config.skills.map((skill) => {
              return (
                <li>
                  <i className="fa-li fa fa-check"></i>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>
          {config.portfolio.introParagraphs.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}

          <div className="mb-5"></div>

          {config.portfolio.items.map((item) => {
            const { name, description, url } = item;
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <div className="subheading mb-3">{name}</div>
                  <div>{description}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary portfolio-icons">
                    <a key={url} href={url}>
                      <i className={`fab fa-git-alt`}></i>
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications & Awards</h2>
          <ul className="fa-ul mb-0">
            {config.certifications.map((certification) => {
              return (
                <li>
                  <i className="fa-li fa fa-award text-warning"></i>
                  {certification}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
    <div className="container w-100">
      <p className="text-center">
        <small className="d-lg-none d-xl-none">
          Generated with the{' '}
          <a href={`${config.footerUrl}`} className="">
            Ops Platform
          </a>
        </small>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
