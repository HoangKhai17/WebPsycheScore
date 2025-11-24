import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../config";

const Header = () => {
	const [headerData, setHeaderData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(API_ENDPOINTS.header);
				const jsonData = await response.json();
				// Assuming the relevant data is in the 'acf' field, similar to App.jsx
				setHeaderData(jsonData.acf);
			} catch (error) {
				console.error("Lỗi khi fetch dữ liệu header:", error);
			}
		}

		fetchData();
	}, []); // Empty dependency array means this effect runs once on mount

	const logoUrl = headerData?.header_data?.hd_logo?.url;
	const open_app = headerData?.header_data?.open_app?.url;

	return (
		<header id="header">
			<div id="sticky-header" className="menu-area transparent-header">
				<div className="container custom-container">
					<div className="row">
						<div className="col-12">
							<div className="menu-wrap">
								<nav className="menu-nav">
									<div className="logo">
										<a href="/">
											<img
												src={logoUrl}
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
												<a href="#contact" className="section-link">
													Contact
												</a>
											</li>
										</ul>
									</div>
									<div className="header-action">
										<ul className="list-wrap">
											<li className="header-login">
												<a href={open_app}>
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
										<a href="/">
											<img src={logoUrl || "/img/logo/logo.png"} alt="Logo" />
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
	);
};

export default Header;
