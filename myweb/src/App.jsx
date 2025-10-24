import { useEffect } from 'react';
import "./App.css";

function App() {

  useEffect(() => {
    // Tải script 'main.js' của theme sau khi React render xong
    const script = document.createElement('script');
    script.src = '../public/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    // Dọn dẹp script khi component bị hủy
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
      {/* Preloader */}

      {/* Scroll-top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      {/* Scroll-top-end*/}

      {/* header-area */}
      <header id="header">
        <div id="sticky-header" className="menu-area transparent-header">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <a href="index-2.html">
                        <img
                          src="/img/logo/logo.png"
                          alt="Logo"
                          style={{ width: "180px" }}
                        />
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active">
                          <a href="#header" className="section-link">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#feature" className="section-link">
                            Feature
                          </a>
                        </li>
                        <li>
                          <a href="#roadMap" className="section-link">
                            RoadMap
                          </a>
                        </li>
                        <li>
                          <a href="#team" className="section-link">
                            Team
                          </a>
                        </li>

                        <li>
                          <a href="#contacct">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-login">
                          <a href="#">
                            Open App<i className="fas fa-coins"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-nav-toggler">
                      <i className="fas fa-bars"></i>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                      <a href="index-2.html">
                        <img src="/img/logo/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="menu-outer">
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop"></div>
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}

      {/* main-area */}
      <main>
        {/* banner-area */}
        <section
          className="banner-area banner-bg"
          data-background="/img/banner/banner_bg.png"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="banner-content text-center">
                  <h2 className="title">
                    Discover the Next Big Opportunity: <br />
                    <span>Psyche Score</span>
                  </h2>
                  <p>
                    A new smart block chain based marketplace for trading
                    digital
                    <br />
                    goods & assets according. A new smart block chain based
                    marketplace for trading digital
                    <br />A new smart block chain based marketplace for trading
                    digital
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-scroll-down">
            <a href="#contribution" className="section-link">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="banner-shape-wrap">
            <img
              src="/img/banner/banner_shape01.png"
              alt=""
              className="leftToRight"
            />
            <img
              src="/img/banner/banner_shape02.png"
              alt=""
              className="alltuchtopdown"
            />
          </div>
        </section>
        {/* banner-area-end */}

        {/* features-area */}
        <section id="feature" className="features-area pt-140 pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-70">
                  <h2 className="title">PsycheScore Features</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="features-item">
                  <div className="features-content">
                    <h2 className="title">
                      <a href="#!">Mobile Payment Make Easy</a>
                    </h2>
                    <p>
                      Add new, trending and rare artwork to your collection.
                    </p>
                  </div>
                  <div className="features-img">
                    <img src="/img/images/features_img01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-item">
                  <div className="features-content">
                    <h2 className="title">
                      <a href="#!">Lifetime Free Transaction</a>
                    </h2>
                    <p>
                      Add new, trending and rare artwork to your collection.
                    </p>
                  </div>
                  <div className="features-img">
                    <img src="/img/images/features_img02.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-item">
                  <div className="features-content">
                    <h2 className="title">
                      <a href="#!">
                        Protect the <br />
                        Identity
                      </a>
                    </h2>
                    <p>
                      Add new, trending and rare artwork to your collection.
                    </p>
                  </div>
                  <div className="features-img">
                    <img src="/img/images/features_img03.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-item">
                  <div className="features-content">
                    <h2 className="title">
                      <a href="#!">Security & Control Over Money</a>
                    </h2>
                    <p>
                      Add new, trending and rare artwork to your collection.
                    </p>
                  </div>
                  <div className="features-img">
                    <img src="/img/images/features_img04.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features-area-end */}

        {/* features-area */}
        <section
          className="features-area-two features-bg"
          data-background="/img/bg/features_bg.png"
        >
          <div className="container">
            <div className="features-inner-wrap">
              <div className="features-item-wrap">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="features-item-two">
                      <div className="features-img-two">
                        <img
                          src="/img/images/features_two_img01.png"
                          alt=""
                        />
                      </div>
                      <div className="features-content-two">
                        <h2 className="title">Lifetime free and transaction</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="features-item-two">
                      <div className="features-img-two">
                        <img
                          src="/img/images/features_two_img02.png"
                          alt=""
                        />
                      </div>
                      <div className="features-content-two">
                        <h2 className="title">Security & Control over money</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="features-item-two">
                      <div className="features-img-two">
                        <img
                          src="/img/images/features_two_img03.png"
                          alt=""
                        />
                      </div>
                      <div className="features-content-two">
                        <h2 className="title">Mobile Payment Make Easy</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title section-title-two text-center">
                    <h2 className="title">
                      The World's 1st ICO Platform That Offers Rewards
                      <img src="/img/images/title_img01.jpg" alt="" /> is
                      a groundbreaking platform that revolutionizes the way
                      <img src="/img/images/title_img02.jpg" alt="" />
                      Initial Coin Offerings are conducted
                    </h2>
                  </div>
                </div>
              </div>
              <div className="features-line-shape"></div>
            </div>
          </div>
          <div className="features-shape-wrap">
            <img
              src="/img/images/features_shape01.png"
              alt=""
              className="alltuchtopdown"
            />
            <img
              src="/img/images/features_shape02.png"
              alt=""
              className="leftToRight"
            />
          </div>
        </section>
        {/* features-area-end */}

        {/* roadMap-area */}
        <section id="roadMap" className="roadmap-area pt-140">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="section-title text-center mb-70">
                  <h2 className="title">Our Roadmap</h2>
                </div>
              </div>
            </div>
            <div className="row roadMap-active">
              <div className="col-lg-4">
                <div className="roadmap-item">
                  <span className="roadmap-title">End of Q4 2021</span>
                  <div className="roadmap-content">
                    <h4 className="title">
                      <span className="dot"></span>Research
                    </h4>
                    <p>
                      SubQuery Builders/Grants Program SQT Network contract
                      internal MVP Coordinator and client SDK implementations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="roadmap-item">
                  <span className="roadmap-title">End of Q4 2021</span>
                  <div className="roadmap-content">
                    <h4 className="title">
                      <span className="dot"></span>App Beta Test
                    </h4>
                    <p>
                      SubQuery Builders/Grants Program SQT Network contract
                      internal MVP Coordinator and client SDK implementations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="roadmap-item">
                  <span className="roadmap-title">End of Q4 2021</span>
                  <div className="roadmap-content">
                    <h4 className="title">
                      <span className="dot"></span>Token Test
                    </h4>
                    <p>
                      SubQuery Builders/Grants Program SQT Network contract
                      internal MVP Coordinator and client SDK implementations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="roadmap-item">
                  <span className="roadmap-title">End of Q4 2021</span>
                  <div className="roadmap-content">
                    <h4 className="title">
                      <span className="dot"></span>Alpha Test
                    </h4>
                    <p>
                      SubQuery Builders/Grants Program SQT Network contract
                      internal MVP Coordinator and client SDK implementations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="roadmap-item">
                  <span className="roadmap-title">End of Q4 2021</span>
                  <div className="roadmap-content">
                    <h4 className="title">
                      <span className="dot"></span>Concept
                    </h4>
                    <p>
                      SubQuery Builders/Grants Program SQT Network contract
                      internal MVP Coordinator and client SDK implementations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end roadMap-area */}

        {/* team-area */}
        <section
          className="team-area team-bg"
          data-background="/img/bg/team_bg.png"
        >
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <div className="section-title text-center mb-50">
                  <h2 className="title">Our Team</h2>
                </div>
              </div>
            </div>
            <div className="team-item-wrap">
              <div className="row team-active g-0">
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img01.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Đức Châu</h2>
                      <span>CEO</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img02.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Trí Lê</h2>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img03.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Quốc Trung</h2>
                      <span>Technology Officer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img04.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Hoàng Khải</h2>
                      <span>Financial Officer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img05.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Văn Hưng</h2>
                      <span>Head of Blockchain</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img06.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Huy Anh</h2>
                      <span>Product Designer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img07.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Tường Vy</h2>
                      <span>Visual Designer</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="/img/team/team_img08.png" alt="" />
                      <a href="#" className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="team-content">
                      <h2 className="title">Bảo Phúc</h2>
                      <span>Legal & DPO</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="read-more-btn text-center mt-70">
							<a href="contact.html" className="btn">All Team Member</a>
						</div> */}
            </div>
          </div>
        </section>
        {/* end team-area */}

        {/* faq-area */}
        <section className="faq-area">
          <div className="container">
            <div className="faq-inner-wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-70">
                    <h2 className="title">Ask Quick Question</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="faq-wrap">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item active">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What is PsycheScore ?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              LessAccounting is 100% web-based, meaning it can
                              be accessed from anywhere and there’s no software
                              to install on your computer. You can easily use
                              LessAccounting on your iPhone or any Android
                              mobile device with our cloud accounting.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What is the ICO?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              LessAccounting is 100% web-based, meaning it can
                              be accessed from anywhere and there’s no software
                              to install on your computer. You can easily use
                              LessAccounting on your iPhone or any Android
                              mobile device with our cloud accounting.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How can I connect API with my Current Site
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              LessAccounting is 100% web-based, meaning it can
                              be accessed from anywhere and there’s no software
                              to install on your computer. You can easily use
                              LessAccounting on your iPhone or any Android
                              mobile device with our cloud accounting.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            What is the Payment Mathod
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              LessAccounting is 100% web-based, meaning it can
                              be accessed from anywhere and there’s no software
                              to install on your computer. You can easily use
                              LessAccounting on your iPhone or any Android
                              mobile device with our cloud accounting.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            What makes Less Accounting better than the rest?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              LessAccounting is 100% web-based, meaning it can
                              be accessed from anywhere and there’s no software
                              to install on your computer. You can easily use
                              LessAccounting on your iPhone or any Android
                              mobile device with our cloud accounting.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end faq-area */}

        {/* brand-area */}
        <div className="brand-area">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="brand-title text-center">
                  <h6 className="title">Our top Partner</h6>
                </div>
              </div>
            </div>
            <div className="brand-item-wrap">
              <div className="row g-0 brand-active">
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img01.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img02.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img03.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img04.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img05.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img06.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img07.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img src="/img/brand/brand_img04.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}

        {/* document-area */}
        <section className="document-area">
          <div className="container">
            <div className="document-inner-wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-60 mt-60">
                    <h2 className="title">Have Any Questions?</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="document-form-wrap">
                    <h4 className="title">Get In Touch Now</h4>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                      </div>
                      <div className="form-grp">
                        <textarea
                          name="message"
                          placeholder="Enter you message....."
                        ></textarea>
                      </div>
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="document-wrap">
                    <h4 className="title">Read Documents</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <span className="icon">
                            <i className="fas fa-file-pdf"></i>
                          </span>
                          Whitepaper
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon">
                            <i className="fas fa-file-pdf"></i>
                          </span>
                          Token Sale Terms
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon">
                            <i className="fas fa-file-pdf"></i>
                          </span>
                          Presentation
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon">
                            <i className="fas fa-file-pdf"></i>
                          </span>
                          Lightpaper
                        </a>
                      </li>
                    </ul>
                    <a href="#" className="btn">
                      Download All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="document-shape">
            <img
              src="/img/images/document_shape.png"
              alt=""
              className="alltuchtopdown"
            />
          </div>
        </section>
        {/* document-area-end */}
      </main>
      {/* main-area-end */}

      {/* footer-area */}
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/img/bg/footer_bg.png"
        >
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Usefull Links</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                          <a href="contact.html">How it Works</a>
                        </li>
                        <li>
                          <a href="contact.html">Create</a>
                        </li>
                        <li>
                          <a href="contact.html">Explore</a>
                        </li>
                        <li>
                          <a href="contact.html">Terms & Services</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">SOLUTIONS</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <a href="contact.html">Token Suite</a>
                        </li>
                        <li>
                          <a href="contact.html">Ecosystem</a>
                        </li>
                        <li>
                          <a href="contact.html">Investment</a>
                        </li>
                        <li>
                          <a href="contact.html">Portal</a>
                        </li>
                        <li>
                          <a href="contact.html">Tokenization</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                  <div className="footer-widget">
                    <h4 className="fw-title">Usefull Links</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <a href="contact.html">Help Center</a>
                        </li>
                        <li>
                          <a href="contact.html">Partners</a>
                        </li>
                        <li>
                          <a href="contact.html">Suggestions</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact.html">Newsletters</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-8">
                  <div className="footer-widget">
                    <h4 className="fw-title">Subscribe Newsletter</h4>
                    <div className="footer-newsletter">
                      <p>
                        Exerci tation ullamcorper suscipit lobortis nisl aliquip
                        ex ea commodo
                      </p>
                      <form action="#">
                        <input type="text" placeholder="Info@gmail.com" />
                        <button type="submit">
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text">
                    <p>Copyright © 2025 BBOTech. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-shape-wrap">
            <img
              src="/img/images/footer_shape01.png"
              alt=""
              className="alltuchtopdown"
            />
            <img
              src="/img/images/footer_shape02.png"
              alt=""
              className="leftToRight"
            />
          </div>
        </div>
      </footer>
      {/* footer-area-end */}
    </>
  );
}

export default App;
