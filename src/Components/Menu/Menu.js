import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
const Menu = () => {
  const [data, setData] = useState([]);
  const addCart = (id) => {
    const url = "http://localhost:5000/api/cart";
    const params = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        food_id: id,
        user_id: 2,
      }),
    };
    axios(url, params)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const fetchData = () => {
    const url = "http://localhost:5000/api/foods";
    const params = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(url, params)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="menu">
        {data.map((x) => {
          return (
            <Card className="card">
              <Card.Img variant="top" src={x.food_image} />
              <Badge bg="secondary">Huge Discounts</Badge>
              <Card.Body>
                <Card.Title>{x.food_name}</Card.Title>
                <Card.Text>Price {x.food_price}/-</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    addCart(x.food_id);
                  }}
                >
                  Add to cart
                </Button>
              </Card.Body>
              <Card.Text>
                <div className="ratings">
                  {x.ratings}
                  <i class="fa fa-star rating-color"></i>
                </div>
              </Card.Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
