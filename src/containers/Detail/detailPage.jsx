import { useEffect } from "react";
import { Link } from "react-router-dom";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

const DetailPage = ({
	fetchProductDetails,
	productDetails,
	cleanupProductDetails,
}) => {
	// product id
	const id = window.location.pathname.split("/")[2];
	useEffect(() => {
		fetchProductDetails(id);
		return () => {
			cleanupProductDetails();
		};
	}, [id]);

	return (
		<div>
			<Container>
				{productDetails && Object.keys(productDetails).length === 0 ? (
					<p>... loading</p>
				) : (
					<Row>
						<Col>
							<img
								src={productDetails.image}
								alt=""
								style={{ maxWidth: "70%" }}
							/>
						</Col>
						<Col>
							<h2>{productDetails.title}</h2>
							<p>{productDetails.description}</p>
							<p>Price: ${productDetails.price}</p>
							<Link
								className="btn btn-primary"
								to="/"
								style={{ color: "#ffffff", textDecoration: "none" }}>
								Back
							</Link>
						</Col>
					</Row>
				)}
			</Container>
		</div>
	);
};

export default DetailPage;
