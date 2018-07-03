import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

const Resume = props => {
  return (
    <div className="resume-wrapper">
      <div className="container-fluid">
        <div className="row main clearfix">
          <nav className="floating-nav js-floating-nav">
            <ul className="list-unstyled">
              <li>
                <a href="#about">
                  <i className="fa fa-user" />
                  About
                </a>
              </li>
              <li>
                <a href="#work-experience">
                  <i className="fa fa-building" />
                  Work Experience
                </a>
              </li>
              <li />
              <li>
                <a href="#education">
                  <i className="fa fa-mortar-board" />
                  Education
                </a>
              </li>
              <li>
                <a href="#awards">
                  <i className="fa fa-trophy" />
                  Awards
                </a>
              </li>
              <li>
                <a href="#volunteer-work">
                  <i className="fa fa-child" />
                  Volunteer Work
                </a>
              </li>
              <li>
                <a href="#interests">
                  <i className="fa fa-heart" />
                  Interests
                </a>
              </li>
            </ul>
          </nav>
          <section className="col-xs-12 col-md-3 card-wrapper profile-card-wrapper affix">
            <div className="card profile-card">
              <span className="profile-pic-container">
                <div className="profile-pic">
                  <img
                    className="media-object img-circle center-block"
                    data-src="holder.js/100x100"
                    alt="Wahid Shafique"
                    src="https://media.licdn.com/dms/image/C4E03AQF4xgSZTjx8ig/profile-displayphoto-shrink_200_200/0?e=1530748800&amp;v=beta&amp;t=923k-SUCL59Z8Kaaix7ggz-DyaWtQM4F3YtOnSbP8_o"
                  />
                </div>
                <div className="name-and-profession">
                  <h3 className="text-center text-bolder name">
                    {" "}
                    Wahid Shafique
                  </h3>
                  <h5 className="text-muted text-center">Programmer</h5>
                </div>
              </span>
              <hr />
              <div className="contact-details clearfix">
                <div className="detail">
                  <span className="icon">
                    <i className="fa fa-lg fa-location-arrow" />
                  </span>
                  <span className="info">Toronto, Ontario, CA</span>
                </div>
                <div className="detail">
                  <span className="icon">
                    <i className="fa fa-lg fa-phone" />
                  </span>
                  <span className="info">(647) 783-2943</span>
                </div>
                <div className="detail">
                  <span className="icon">
                    <i className="fa fa-lg fa-envelope" />
                  </span>
                  <span className="info">
                    <a
                      href="/cdn-cgi/l/email-protection#5439311423353c3d307a373b"
                      className="link-disguise"
                    >
                      <span
                        className="__cf_email__"
                        data-cfemail="a3cec6e3d4c2cbcac78dc0cc"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </span>
                </div>
                <div className="detail">
                  <span className="icon" title="Languages I speak">
                    <i className="fa fa-lg fa-language" />
                  </span>
                  <span className="info">English</span>
                </div>
              </div>
              <hr />
              <div className="social-links text-center">
                <a
                  className="fa fa-linkedin fa-2x social-link link-linkedin"
                  href="https://www.linkedin.com/in/wahid-shafique-971ab279/"
                  target="_blank"
                />
                <a
                  className="fa fa-github fa-2x social-link link-github"
                  href="https://github.com/wahidshafique"
                  target="_blank"
                />
              </div>
            </div>
          </section>
          <section className="col-md-9 card-wrapper pull-right">
            <div className="card background-card">
              <div className="background-details">
                <div className="detail" id="about">
                  <div className="icon">
                    <i className="fa fa-lg fa-user" />
                  </div>
                  <div className="info">
                    <h4 className="title text-uppercase">About</h4>
                    <div className="content">
                      I am a game programming graduate based in Toronto with a
                      focus on web development. I am open to new and versatile
                      roles and always willing to learn!
                    </div>
                  </div>
                </div>
                <div className="detail" id="work-experience">
                  <div className="icon">
                    <i className="fa fa-lg fa-building" />
                    {/* <span className="mobile-title">Work Experience</span> */}
                  </div>
                  <div className="info">
                    <h4 className="title text-uppercase">Work Experience</h4>
                    <ul className="list-unstyled">
                      <li className="card card-nested clearfix">
                        <div className="content has-sidebar">
                          <div className="work-details">
                            <p className="clear-margin-sm">
                              <strong>Web and Mobile Programmer</strong>,&nbsp;Rich
                              Media
                            </p>
                            <p className="text-muted visible-xs visible-sm">
                              <small>
                                <span className="space-right">
                                  Aug, 2017 - Present
                                </span>
                                <span>
                                  <i className="fa fa-clock-o icon-left" />
                                  8 months
                                </span>
                              </small>
                            </p>
                            <p>
                              Working as a web and mobile programmer for a
                              digital agency.
                            </p>
                            <ul>
                              <li>
                                {" "}
                                Developed and completed various projects for
                                clients, specifically microsites and internal
                                tooling
                              </li>
                              <li>
                                {" "}
                                Working with angular 1, 2, and recently, 5,
                                Jquery, as well as html and sass{" "}
                              </li>
                              <li>
                                {" "}
                                Leveraging AMD design patterns and require js
                                modules{" "}
                              </li>
                              <li>
                                {" "}
                                Working on a react frontend interface for
                                in-house bug tracking{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                          <p>
                            <strong>Joined:</strong>&nbsp; Aug, 2017
                          </p>
                          <p>
                            <span className="label label-success">
                              Currently Working
                            </span>
                          </p>
                          <p>
                            <i className="fa fa-clock-o icon-left" />
                            {props.curWork()} months
                          </p>
                        </div>
                      </li>
                      <li className="card card-nested clearfix">
                        <div className="content has-sidebar">
                          <div className="work-details">
                            <p className="clear-margin-sm">
                              <strong>Web Developer</strong>,&nbsp;George Brown
                              College
                            </p>
                            <p className="text-muted visible-xs visible-sm">
                              <small>
                                <span className="space-right">
                                  Aug, 2016 - Sep, 2017
                                </span>
                                <span>
                                  <i className="fa fa-clock-o icon-left" />
                                  1 year 1 month
                                </span>
                              </small>
                            </p>
                            <p>
                              Used the MEAN stack to develop a web application
                              for connecting students with disabilities to a
                              larger support network.
                            </p>
                            <ul>
                              <li>
                                {" "}
                                Worked with both frontend and backend team to
                                deliver the platform{" "}
                              </li>
                              <li>
                                {" "}
                                Managed AWS server and security for latter half
                                of project{" "}
                              </li>
                              <li>
                                {" "}
                                Used largely angular 1, protractor, html and
                                sass{" "}
                              </li>
                              <li> Used MEAN stack </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                          <p>
                            <strong>Joined:</strong>&nbsp; Aug, 2016
                          </p>
                          <p>
                            <strong>Left:</strong>&nbsp; Sep, 2017
                          </p>
                          <p>
                            <i className="fa fa-clock-o icon-left" />
                            1 year 1 month
                          </p>
                        </div>
                      </li>
                      <li className="card card-nested clearfix">
                        <div className="content has-sidebar">
                          <div className="work-details">
                            <p className="clear-margin-sm">
                              <strong>Web Developer</strong>,&nbsp;WorkTango
                              Inc.
                            </p>
                            <p className="text-muted visible-xs visible-sm">
                              <small>
                                <span className="space-right">
                                  Mar, 2016 - May, 2016
                                </span>
                                <span>
                                  <i className="fa fa-clock-o icon-left" />
                                  2 months
                                </span>
                              </small>
                            </p>
                            <p>Frontend development</p>
                            <ul>
                              <li>
                                {" "}
                                Worked on various frontend sections of an HR
                                application{" "}
                              </li>
                              <li> Used Agile methodology </li>
                              <li> Used sass and jade (pug) </li>
                              <li>
                                {" "}
                                Completed responsive sections of the site in its
                                early stages{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                          <p>
                            <strong>Joined:</strong>&nbsp; Mar, 2016
                          </p>
                          <p>
                            <strong>Left:</strong>&nbsp; May, 2016
                          </p>
                          <p>
                            <i className="fa fa-clock-o icon-left" />
                            2 months
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="detail" id="education">
                  <div className="icon">
                    <i className="fa fa-lg fa-mortar-board" />
                    {/* <span className="mobile-title">Education</span> */}
                  </div>
                  <div className="info">
                    <h4 className="title text-uppercase">Education</h4>
                    <div className="">
                      <ul className="list-unstyled">
                        <li className="card card-nested">
                          <div className="content has-sidebar">
                            <p className="clear-margin-sm">
                              <strong>
                                Game Programming, Advanced Diploma
                              </strong>,&nbsp; George Brown College
                            </p>
                            <p className="visible-xs visible-sm text-muted">
                              <small>Sep, 2014 - Apr, 2017</small>
                            </p>
                            <i>3.9 GPA</i>
                            <div className="space-top labels">
                              <span className="label label-keyword">
                                GAME1011 | Object Oriented Programming
                              </span>
                              <span className="label label-keyword">
                                GAME2001 | Data Structures and Algorithms
                              </span>
                              <span className="label label-keyword">
                                GAME1003 | Web Game Development
                              </span>
                            </div>
                          </div>
                          <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                            <p>
                              <strong>Started:</strong>&nbsp; Sep, 2014
                            </p>
                            <p>
                              <strong>Completion:</strong>&nbsp; Apr, 2017
                            </p>
                          </div>
                        </li>
                        <li className="card card-nested">
                          <div className="content has-sidebar">
                            <p className="clear-margin-sm">
                              <strong>English Literature , Bachelor</strong>,&nbsp;
                              Ryerson University
                            </p>
                            <p className="visible-xs visible-sm text-muted">
                              <small>Sep, 2012 - Jan, 2014</small>
                            </p>
                            <i />
                            <div className="space-top labels">
                              <span className="label label-keyword">
                                EID100 | Digital Skills and Innovation for the
                                Global Economy
                              </span>
                              <span className="label label-keyword">
                                PCS182 | Life in the Milky Way Galaxy
                              </span>
                              <span className="label label-keyword">
                                SSH105 | Critical Thinking
                              </span>
                            </div>
                          </div>
                          <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                            <p>
                              <strong>Started:</strong>&nbsp; Sep, 2012
                            </p>
                            <p>
                              <strong>Completion:</strong>&nbsp; Jan, 2014
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="detail" id="awards">
                  <div className="icon">
                    <i className="fa fa-lg fa-trophy" />
                    {/* <span className="mobile-title">Awards</span> */}
                  </div>
                  <div className="info">
                    <h4 className="title text-uppercase">Awards</h4>
                    <div className="">
                      <ul className="list-unstyled">
                        <li className="card card-nested">
                          <div className="content has-sidebar">
                            <p className="clear-margin-sm">
                              <strong>Student Association Award</strong>,&nbsp;
                              George Brown College Student Association
                            </p>
                            <p className="visible-xs visible-sm text-muted">
                              <small>Awarded on: Mar 11, 2016</small>
                            </p>
                            <p className="clear-margin">
                              {" "}
                              Awarded for excellence in academic and extra
                              curricular activity{" "}
                            </p>
                          </div>
                          <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                            <p>
                              <strong>Awarded on:</strong>&nbsp; Mar 11, 2016
                            </p>
                          </div>
                        </li>
                        <li className="card card-nested">
                          <div className="content has-sidebar">
                            <p className="clear-margin-sm">
                              <strong>Van Raissis Award</strong>,&nbsp; Center
                              for Arts, Design and Information Technology
                            </p>
                            <p className="visible-xs visible-sm text-muted">
                              <small>Awarded on: Apr 01, 2017</small>
                            </p>
                            <p className="clear-margin">
                              {" "}
                              Awarded for innovation and success in chosen
                              program{" "}
                            </p>
                          </div>
                          <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                            <p>
                              <strong>Awarded on:</strong>&nbsp; Apr 01, 2017
                            </p>
                          </div>
                        </li>
                        <li className="card card-nested">
                          <div className="content has-sidebar">
                            <p className="clear-margin-sm">
                              <strong>Deans Honor List</strong>,&nbsp; George
                              Brown College
                            </p>
                            {/* <p className="visible-xs visible-sm text-muted">
                              <small>Awarded on:</small>
                            </p> */}
                            <p className="clear-margin">
                              {" "}
                              [Multiple] Awarded each consecutive year for
                              maintaining above 3.5 GPA{" "}
                            </p>
                          </div>
                          {/* <div className="sidebar text-muted text-center hidden-xs hidden-sm">
                            <p>
                              <strong>Awarded on:</strong>&nbsp;
                            </p>
                          </div> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="detail" id="volunteer-work">
                  <div className="icon">
                    <i className="fa fa-lg fa-child" />
                    {/* <span className="mobile-title">Volunteer Work</span> */}
                  </div>
                  <div className="info">
                    <h4 className="title text-uppercase">Volunteer Work</h4>
                    <div className="">
                      <ul className="list-unstyled">
                        <li className="card card-nested">
                          <div className="content has-sidebar">
                            <p className="clear-margin-sm">
                              <strong>Programmer</strong>,&nbsp; Ruckus Games
                            </p>
                            <p className="visible-xs visible-sm text-muted">
                              <small>Sep, 2015 - Jun, 2016</small>
                            </p>
                            <p>
                              Helped the core teams to produce minigames in
                              Unity
                            </p>
                            <ul>
                              <li>
                                {" "}
                                Drafted multiple prototypes of minigames in
                                Unity{" "}
                              </li>
                              <li>
                                {" "}
                                Using Unity I scripted out various game
                                components for team to use{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sidebar hidden-xs hidden-sm text-muted text-center">
                            <p>
                              <strong>Since:</strong>&nbsp; Sep, 2015
                            </p>
                            <p>
                              <strong>Until:</strong>&nbsp; Jun, 2016
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="detail" id="interests">
                  <div className="icon">
                    <i className="fa fa-lg fa-heart" />
                    {/* <span className="mobile-title">Interests</span> */}
                  </div>
                  <div className="info">
                    <h4 className="title text-uppercase">Interests</h4>
                    <div className="">
                      <ul className="list-unstyled">
                        <li className="card card-nested">
                          <p>
                            <strong>Game Development</strong>
                          </p>
                          <div className="space-top labels">
                            <span className="label label-keyword">Unity</span>
                            <span className="label label-keyword">Unreal</span>
                          </div>
                        </li>
                        <li className="card card-nested">
                          <p>
                            <strong>Video Editing | Multimedia </strong>
                          </p>
                          <div className="space-top labels">
                            <span className="label label-keyword">
                              Premiere Pro
                            </span>
                            <span className="label label-keyword">
                              Photoshop
                            </span>
                            <span className="label label-keyword">P5.js</span>
                          </div>
                        </li>
                        <li className="card card-nested">
                          <p>
                            <strong>Making!</strong>
                          </p>
                          <div className="space-top labels">
                            <span className="label label-keyword">Arduino</span>
                            <span className="label label-keyword">Rpi</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// FeatureGrid.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       text: PropTypes.string,
//     })
//   ),
// }

export default Resume;
