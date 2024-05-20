import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardsdata from "../components/CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Modal from "react-bootstrap/Modal";

const Cards = () => {
  const [data, setdata] = useState(cardsdata);
  const [show, setShow] = useState(false);
const [currentItem, setCurrentItem] = useState(null);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
const handleShow = (item) => {
  setCurrentItem(item);
  setShow(true);
};
  const send = (e) => {
    dispatch(ADD(e));
    handleShow(e);
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <h3 className="text-center">Add to cart details</h3>
        {data.map((element, id) => {
          return (
            <Card className="col-md-3 mx-2 mt-5 border-0">
              <Card.Img variant="top" src={element.imgdata} style={{height:"200px"}}/>
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  {element.address}
                  <p className="text-left">price :₹{element.price}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => send(element)}>Add to cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Item Added to Cart</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {currentItem && (
      <>
        <h5>{currentItem.rname}</h5>
        <p>Price: ₹{currentItem.price}</p>
        <p>{currentItem.address}</p>
      </>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
};

export default Cards;
