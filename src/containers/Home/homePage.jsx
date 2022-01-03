import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";

const HomePage = ({ getProducts, productsList }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productsList.length ? (
            productsList.map((product) => {
              return (
                <Col key={product.id} style={{ marginBottom: "20px" }}>
                  <Card style={{ width: "18rem" }}>
                    <div style={{ textAlign: "center", padding: "15px 0 0 0" }}>
                      <img
                        src={product.image}
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title
                        className="text-truncate"
                        style={{ maxWidth: "200px" }}
                      >
                        {product.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          textOverflow: "ellipsis",
                          wordWrap: "break-word",
                          overflow: "hidden",
                          maxHeight: "100px",
                          overflow: "hidden",
                        }}
                      >
                        {product.description}
                      </Card.Text>
                      <Link
                        className="btn btn-primary"
                        style={{ color: "#ffffff", textDecoration: "none" }}
                        to={`/detail/${product.id}`}
                      >
                        Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <p>...loading</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
