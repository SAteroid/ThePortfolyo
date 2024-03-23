import "./img/thumbnail.ico"
import "./css/plugins/bootstrap.min.css"
import "./css/plugins/font-awesome.min.css"
import "./css/plugins/swiper.min.css"
import "./css/plugins/fancybox.min.css"
import "./css/style.css"


import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((res) => {
        const userData = res.data.user; // Extract user data
        setUserData(userData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {userData && (
        <div>
          <div className="art-app">
            {/* mobile top bar */}
            <div className="art-mobile-top-bar" />
            {/* app wrapper */}
            <div className="art-app-wrapper">
              {/* app container end */}
              <div className="art-app-container">
                {/* info bar */}
                <div className="art-info-bar">
                  {/* menu bar frame */}
                  <div className="art-info-bar-frame">
                    {/* info bar header */}
                    <div className="art-info-bar-header">
                      {/* info bar button */}
                      <a className="art-info-bar-btn" href="#.">
                        {/* icon */}
                        <i className="fas fa-ellipsis-v" />
                      </a>
                      {/* info bar button end */}
                    </div>
                    {/* info bar header end */}
                    {/* info bar header */}
                    <div className="art-header">
                      {/* avatar */}
                      <div className="art-avatar">
                        <a
                          data-fancybox="avatar"
                          href={userData.avatar}
                          className="art-avatar-curtain"
                        >
                          <img src={userData.avatar} alt="avatar" />
                          <i className="fas fa-expand" />
                        </a>
                        {/* available */}
                        <div className="art-lamp-light">
                          {/* add class 'art-not-available' if not available*/}
                          <div className={`art-available-lamp ${userData.available ? '' : 'art-not-available'}`} />
                        </div>
                      </div>
                      {/* avatar end */}
                      {/* name */}
                      <h5 className="art-name mb-10">
                        <a href="/home.html">{userData.about.name}</a>
                      </h5>
                      {/* post */}
                      <div className="art-sm-text">
                        {userData.about.title} <br />
                        {userData.about.profession}
                      </div>
                    </div>
                    {/* info bar header end */}
                    {/* scroll frame */}
                    <div id="scrollbar2" className="art-scroll-frame">
                      {/* info bar about */}
                      <div className="art-table p-15-15">
                        {/* about text */}
                        <ul>
                          {/* country */}
                          <li>
                            <h6>Residence:</h6>
                            <span>{userData.about.residence}</span>
                          </li>
                          {/* city */}
                          <li>
                            <h6>City:</h6>
                            <span>{userData.about.city}</span>
                          </li>
                          {/* age */}
                          <li>
                            <h6>Age:</h6>
                            <span>{userData.about.age}</span>
                          </li>
                        </ul>
                      </div>
                      {/* info bar about end */}
                      {/* divider */}
                      <div className="art-ls-divider" />
                      {/* language skills */}
                      <div className="art-lang-skills p-30-15">
                        {/* skill */}
                        {userData.blogPosts && userData.blogPosts.map((post, index) => (
                          <div key={index} className="art-lang-skills-item">
                            <div id={`circleprog${index + 1}`} className="art-cirkle-progress" />
                            {/* title */}
                            {/* <h6>{language.name}</h6> */}
                          </div>
                        ))}
                        {/* skill end */}
                      </div>
                      {/* language skills end */}
                      {/* divider */}
                      <div className="art-ls-divider" />
                      {/* hard skills */}
                      <div className="art-hard-skills p-30-15">
                        {/* skill */}
                        {userData.skills.programming.map((skill, index) => (
                          <div key={index} className="art-hard-skills-item">
                            <div className="art-skill-heading">
                              {/* title */}
                              <h6>{skill.name}</h6>
                            </div>
                            {/* progressbar frame */}
                            <div className="art-line-progress">
                              {/* progressbar */}
                              <div id={`lineprog${index + 1}`} />
                            </div>
                            {/* progressbar frame end */}
                          </div>
                        ))}
                        {/* skill end */}
                      </div>
                      {/* language skills end */}
                      {/* divider */}
                      <div className="art-ls-divider" />
                      {/* knowledge list */}
                      <ul className="art-knowledge-list p-15-0">
                        {/* list item */}
                        {userData.skills.others.map((knowledge, index) => (
                          <li key={index}>{knowledge}</li>
                        ))}
                        {/* list item */}
                      </ul>
                      {/* knowledge list end */}
                      {/* divider */}
                      <div className="art-ls-divider" />
                      {/* links frame */}
                      <div className="art-links-frame p-15-15">
                        {/* download cv button */}
                        <a href={userData.cv} className="art-link" download>
                          Download cv <i className="fas fa-download" />
                        </a>
                      </div>
                      {/* links frame end */}
                    </div>
                    {/* scroll frame end */}
                  </div>
                  {/* menu bar frame end */}
                </div>
                {/* info bar end */}
                {/* content */}
                <div className="art-content">
                  {/* container */}
                  <div className="container-fluid">
                    {/* row */}
                    <div className="row">
                      {/* col */}
                      <div className="col-12">
                        {/* page title */}
                        <div className="art-subtitle">
                          <span>Blog</span>
                        </div>
                        {/* page title end */}
                      </div>
                      {/* col end */}
                    </div>
                    {/* row end */}
                    {/* row */}
                    <div className="row">
                      {/* col */}
                      <div className="col-lg-12">
                        {/* slider container */}
                        <div className="art-slider-container">
                          {/* slider wrapper */}
                          <div className="swiper-wrapper">
                            {/* slides */}
                            {userData.blogPosts.map((post, index) => (
                              <div key={index} className="swiper-slide">
                                {/* blog post card */}
                                <div className="art-a art-blog-card">
                                  {/* post cover */}
                                  <a href={post.link} className="art-port-cover">
                                    {/* img */}
                                    <img src={post.coverImage} alt="blog post" />
                                  </a>
                                  {/* post cover end */}
                                  {/* post description */}
                                  <div className="art-post-description">
                                    {/* title */}
                                    <a href={post.link}>
                                      <h5 className="mb-15">{post.title}</h5>
                                    </a>
                                    {/* text */}
                                    <div className="mb-15">{post.description}</div>
                                    {/* link */}
                                    <a href={post.link} className="art-link art-color-link art-w-chevron">
                                      Read more
                                    </a>
                                  </div>
                                  {/* post description end */}
                                </div>
                                </div>
                            ))}
                            {/* slides end */}
                          </div>
                          {/* slider wrapper end */}
                        </div>
                        {/* slider container end */}
                      </div>
                      {/* col end */}
                    </div>
                    {/* row end */}
                  </div>
                  {/* container end */}
                  {/* container */}
                  <div className="container-fluid">
                    {/* row */}
                    <div className="row">
                      {/* col */}
                      <div className="col-6 col-lg-3">
                        {/* brand */}
                        <img className="art-brand" src="img/brands/1.png" alt="brand" />
                      </div>
                      {/* col end */}
                      {/* col */}
                      <div className="col-6 col-lg-3">
                        {/* brand */}
                        <img className="art-brand" src="img/brands/2.png" alt="brand" />
                      </div>
                      {/* col end */}
                      {/* col */}
                      <div className="col-6 col-lg-3">
                        {/* brand */}
                        <img className="art-brand" src="img/brands/3.png" alt="brand" />
                      </div>
                      {/* col end */}
                      {/* col */}
                      <div className="col-6 col-lg-3">
                        {/* brand */}
                        <img className="art-brand" src="img/brands/1.png" alt="brand" />
                      </div>
                      {/* col end */}
                    </div>
                    {/* row end */}
                  </div>
                  {/* container end */}
                  {/* container */}
                  <div className="container-fluid">
                    {/* footer */}
                    <footer>
                      {/* copyright */}
                      <div className="art-copy">© 2020 Artur Carter</div>
                      {/* author ( Please! Do not delete it. You are awesome! :) */}
                      <div>
                        Template author:&nbsp;{" "}
                        <a href="https://themeforest.net/user/millerdigitaldesign" target="_blank">
                          Nazar Miller
                        </a>
                      </div>
                    </footer>
                    {/* footer end */}
                  </div>
                  {/* container end */}
                </div>
                {/* content end */}
                {/* menu bar */}
                <div className="art-menu-bar">
                  {/* menu bar frame */}
                  <div className="art-menu-bar-frame">
                    {/* menu bar header */}
                    <div className="art-menu-bar-header">
                      {/* menu bar button */}
                      <a className="art-menu-bar-btn" href="#.">
                        {/* icon */}
                        <span />
                      </a>
                      {/* menu bar button end */}
                    </div>
                    {/* menu bar header end */}
                    {/* current page title */}
                    <div className="art-current-page" />
                    {/* current page title end */}
                    {/* scroll frame */}
                    <div className="art-scroll-frame">
                      {/* menu */}
                      <nav id="swupMenu">
                        {/* menu list */}
                        <ul className="main-menu">
                          {/* menu item */}
                          <li className="menu-item">
                            <a href="/home.html">Home</a>
                          </li>
                          {/* menu item */}
                          <li className="menu-item menu-item-has-children">
                            <a href="#.">Portfolio</a>
                            {/* sub menu */}
                            <ul className="sub-menu">
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/portfolio-2-col.html">2 column</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/portfolio-3-col.html">3 column</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/portfolio-2-col-masonry.html">2 column masonry</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/portfolio-3-col-masonry.html">3 column masonry</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/portfolio-single.html">Single project</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/portfolio-single-2.html">Single project 2</a>
                              </li>
                            </ul>
                            {/* sub menu end */}
                          </li>
                          {/* menu item */}
                          <li className="menu-item">
                            <a href="/history.html">History</a>
                          </li>
                          {/* menu item */}
                          <li className="menu-item">
                            <a href="/contact.html">Contact</a>
                          </li>
                          {/* menu item */}
                          <li className="menu-item menu-item-has-children current-menu-item">
                            <a href="#.">Blog</a>
                            {/* sub menu */}
                            <ul className="sub-menu">
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/blog-2-col.html">2 column</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/blog-3-col.html">3 column</a>
                              </li>
                              {/* lvl 2 nav link */}
                              <li className="menu-item">
                                <a href="/blog-post.html">Publication</a>
                              </li>
                            </ul>
                            {/* sub menu end */}
                          </li>
                          {/* menu item */}
                          <li className="menu-item">
                            <a href="onepage.html" target="_blank">
                              Onepage
                            </a>
                          </li>
                        </ul>
                        {/* menu list end */}
                      </nav>
                      {/* menu end */}
                      {/* language change */}
                      <ul className="art-language-change">
                        {/* language item */}
                        <li>
                          <a href="#.">FR</a>
                        </li>
                        {/* language item */}
                        <li className="art-active-lang">
                          <a href="#.">EN</a>
                        </li>
                      </ul>
                      {/* language change end */}
                    </div>
                    {/* scroll frame end */}
                  </div>
                  {/* menu bar frame */}
                </div>
                {/* menu bar end */}
              </div>
              {/* app container end */}
            </div>
            {/* app wrapper end */}
            {/* preloader */}
            <div className="art-preloader">
              {/* preloader content */}
              <div className="art-preloader-content">
                {/* title */}
                <h4>Artur Carter</h4>
                {/* progressbar */}
                <div id="preloader" className="art-preloader-load" />
              </div>
              {/* preloader content end */}
            </div>
            {/* preloader end */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
