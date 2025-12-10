import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../config";

const Footer = () => {
	const [footerData, setFooterData] = useState(null);

	useEffect(() => {
			async function fetchData() {
				try {
					const response = await fetch(API_ENDPOINTS.footer);
					const jsonData = await response.json();
					// Assuming the relevant data is in the 'acf' field, similar to App.jsx
					setFooterData(jsonData.acf);
				} catch (error) {
					console.error("Lỗi khi fetch dữ liệu header:", error);
				}
			}
	
			fetchData();
		}, []); 

		const copyright = footerData?.footer_data?.copyright;
		const menu_name_1 = footerData?.footer_data?.menu_name_1;
		const menu_name_2 = footerData?.footer_data?.menu_name_2;
		const menu_name_3 = footerData?.footer_data?.menu_name_3;
		const menu_content_3 = footerData?.footer_data?.menu_content_3;
		const menu_1 = footerData?.footer_data?.menu_1;
		const menu_2 = footerData?.footer_data?.menu_2;

	return (
		<footer>
			<div
				className="footer-area footer-bg"
				data-background="/img/bg/footer_bg.png"
			>
				<div className="container">
					<div className="footer-top">
						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
								<div className="footer-widget">
									<h4 className="fw-title"
									dangerouslySetInnerHTML={{
													__html: menu_name_1,
												}}
									>

									</h4>
									<div className="footer-link">
										<ul className="list-wrap">
                                            {/* LẶP DỮ LIỆU CHO MENU 1 */}
                                            {Array.isArray(menu_1) && menu_1.map((item, index) => (
                                                <li key={index}>
                                                    {/* Giả sử các trường trong Repeater là 'name' và 'link' */}
                                                    <a href={item.link.url}>{item.name}</a>
                                                </li>
                                            ))}
                                        </ul>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
								<div className="footer-widget">
									<h4 className="fw-title"
										dangerouslySetInnerHTML={{
													__html: menu_name_2,
												}}
									></h4>
									<div className="footer-link">
										<ul className="list-wrap">
                                            {/* LẶP DỮ LIỆU CHO MENU 2 */}
                                            {Array.isArray(menu_2) && menu_2.map((item, index) => (
                                                <li key={index}>
                                                    {/* Giả sử các trường trong Repeater là 'name' và 'link' */}
                                                    <a href={item.link.url}>{item.name}</a>
                                                </li>
                                            ))}
                                        </ul>
									</div>
								</div>
							</div>
							
							<div className="col-xl-4 col-lg-4 col-sm-8">
								<div className="footer-widget">
									<h4 className="fw-title"
										dangerouslySetInnerHTML={{
													__html: menu_name_3,
												}}
									></h4>
									<div className="footer-newsletter">
										<p 
											dangerouslySetInnerHTML={{
													__html: menu_content_3,
												}}
										>
										
										</p>
										<form action="#">
											<input type="text" placeholder="info@bbotech.vn" />
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
									<p
									dangerouslySetInnerHTML={{
													__html: copyright,
												}}
									></p>
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
	);
};

export default Footer;
