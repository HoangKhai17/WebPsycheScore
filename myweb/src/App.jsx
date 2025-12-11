import React, { useState, useEffect } from "react";
import "./App.css";
import { API_ENDPOINTS } from "./config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
const API_URL = API_ENDPOINTS.home_page;

function App() {
	const [pageData, setPageData] = useState(null);
	const [loading, setLoading] = useState(true);
	//useEffect để fetch data
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(API_URL);
				const jsonData = await response.json();

				// Lưu trường 'acf' vào state
				setPageData(jsonData.acf);
			} catch (error) {
				console.error("Lỗi khi fetch dữ liệu:", error);
			} finally {
				// Dù thành công hay thất bại, cũng dừng loading
				setLoading(false);
			}
		}

		fetchData();
	}, []); // [] rỗng nghĩa là chỉ chạy 1 lần

	useEffect(() => {
		// Don't run script until data is loaded
		if (loading) {
			return;
		}
		// Tải script 'main.js' của theme sau khi React render xong
		const script = document.createElement("script");
		script.src = "/js/main.js";
		script.async = true;
		document.body.appendChild(script);

		// Dọn dẹp script khi component bị hủy
		return () => {
			// Check if script is still in body to avoid errors
			if (document.body.contains(script)) {
				document.body.removeChild(script);
			}
		};
	}, [loading]); // Re-run when loading state changes

	return (
		<>
			{/* <Preloader /> */}
			<ScrollToTop />
			<Header />

			{/* main-area */}
			<main>
				{pageData && (
					<>
						{/* banner-area */}
						<section
							className="banner-area banner-bg"
							data-background="/img/banner/banner_bg.png"
						>
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="banner-content text-center">
											<h2
												className="title"
												dangerouslySetInnerHTML={{
													__html: pageData.section_1.title,
												}}
											/>
											<div>
												<div
													dangerouslySetInnerHTML={{
														__html: pageData.section_1.subtitle,
													}}
												></div>
											</div>
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
									src={pageData.section_1.img_left.url}
									alt="Banner Shape Left"
									className="leftToRight"
								/>{" "}
								<img
									src={pageData.section_1.img_right.url}
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
											<h2
												className="title"
												dangerouslySetInnerHTML={{
													__html: pageData.section_2.title,
												}}
											></h2>
										</div>
									</div>
								</div>
								<div className="row">
									{pageData.section_2.list_value &&
										pageData.section_2.list_value.map((item, index) => (
											<div className="col-lg-6" key={index}>
												<div className="features-item">
													<div className="features-content">
														<h2 className="title">
															<a href="#!">{item.name}</a>
														</h2>
														<p>{item.content}</p>
													</div>
													<div className="features-img">
														<img src={item.icon.url} alt={item.name} />
													</div>
												</div>
											</div>
										))}
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
											{pageData.section_3.list_value &&
												pageData.section_3.list_value.map((item, index) => (
													<div className="col-lg-4 col-md-6" key={index}>
														<div className="features-item-two">
															<div className="features-img-two">
																<img src={item.icon.url} alt="" />
															</div>
															<div className="features-content-two">
																<h2 className="title">{item.name}</h2>
															</div>
														</div>
													</div>
												))}
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="section-title section-title-two text-center">
												<h2
													className="title"
													dangerouslySetInnerHTML={{
														__html: pageData.section_3.title,
													}}
												></h2>
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
											<h2
												className="title"
												dangerouslySetInnerHTML={{
													__html: pageData.section_4.title,
												}}
											></h2>
										</div>
									</div>
								</div>
								<div className="row roadMap-active">
									{pageData.section_4.list_value &&
										pageData.section_4.list_value.map((item, index) => (
											<div className="col-lg-4" key={index}>
												<div className="roadmap-item">
													<span className="roadmap-title">{item.phase}</span>
													<div className="roadmap-content">
														<h4 className="title">
															<span className="dot"></span>
															{item.name_phase}
														</h4>
														<div
															dangerouslySetInnerHTML={{
																__html: item.content,
															}}
														></div>
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						</section>
						{/* end roadMap-area */}

						{/* team-area */}
						<section
							id="team"
							className="team-area team-bg"
							data-background="/img/bg/team_bg.png"
						>
							<div className="container-fluid p-0">
								<div className="row g-0">
									<div className="col-12">
										<div className="section-title text-center mb-50">
											<h2
												className="title"
												dangerouslySetInnerHTML={{
													__html: pageData.section_5.title,
												}}
											></h2>
										</div>
									</div>
								</div>
								<div className="team-item-wrap">
									<div className="row team-active g-0">
										{pageData.section_5.list_value &&
											pageData.section_5.list_value.map((item, index) => (
												<div className="col" key={index}>
													<div className="team-item">
														<div className="team-thumb">
															<img src={item.avt.url} alt="" />
															<a
																href={item.linkedin.url}
																className="team-social"
																target="_blank"
															>
																<i className="fab fa-linkedin-in"></i>
															</a>
														</div>
														<div className="team-content">
															<h2 className="title">{item.name}</h2>
															<span>{item.postion}</span>
														</div>
													</div>
												</div>
											))}
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
												<h2
													className="title"
													dangerouslySetInnerHTML={{
														__html: pageData.section_6.title,
													}}
												></h2>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="faq-wrap">
												<div className="accordion" id="accordionExample">
													{pageData.section_6.list_value &&
														pageData.section_6.list_value.map((item, index) => {
															const isActive = index === 0; // item đầu tiên
															const collapseId = `collapse-${index}`;
															const headingId = `heading-${index}`;

															return (
																<div
																	className={`accordion-item ${
																		isActive ? "active" : ""
																	}`}
																	key={index}
																>
																	<h2
																		className="accordion-header"
																		id={headingId}
																	>
																		<button
																			className={`accordion-button ${
																				!isActive ? "collapsed" : ""
																			}`}
																			type="button"
																			data-bs-toggle="collapse"
																			data-bs-target={`#${collapseId}`}
																			aria-expanded={isActive}
																			aria-controls={collapseId}
																		>
																			{item.question}
																		</button>
																	</h2>

																	<div
																		id={collapseId}
																		className={`accordion-collapse collapse ${
																			isActive ? "show" : ""
																		}`}
																		aria-labelledby={headingId}
																		data-bs-parent="#accordionExample"
																	>
																		<div
																			className="accordion-body"
																			dangerouslySetInnerHTML={{
																				__html: item.answer,
																			}}
																		></div>
																	</div>
																</div>
															);
														})}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						{/* end faq-area */}

						{/* brand-area */}
						{/* <div className="brand-area">
							<div className="container-fluid p-0">
								<div className="row g-0">
									<div className="col-lg-12">
										<div className="brand-title text-center">
											<h6
												className="title"
												dangerouslySetInnerHTML={{
													__html: pageData.section_7.title,
												}}
											></h6>
										</div>
									</div>
								</div>
								<div className="brand-item-wrap">
									<div className="row g-0 brand-active">
										{pageData.section_7.list_value &&
											pageData.section_7.list_value.map((item, index) => (
												<div className="col-12" key={index}>
													<div className="brand-item">
														<img src={item.logo.url} alt="" />
													</div>
												</div>
											))}
									</div>
								</div>
							</div>
						</div> */}
						{/* brand-area-end */}

						{/* document-area */}
						<section  id="contact" className="document-area" >
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
														<a href="https://github.com/ADA-BAMBOO/PsycheScore">
															<span className="icon">
																<i className="fas fa-file-pdf"></i>
															</span>
															Github
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
					</>
				)}
			</main>
			{/* main-area-end */}

			<Footer />
		</>
	);
}

export default App;
