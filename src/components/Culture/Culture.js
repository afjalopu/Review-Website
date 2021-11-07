import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import "./Culture.css";

const Culture = () => {
  return (
    // Contact List with the Oraganization
    <div className="contacts container my-4">
      <div className="contact">
        <h1>Keep in Touch</h1>
        <div>
          <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Your Name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button class="btn btn-warning">Submit</Button>{" "}
          </Form>
        </div>
      </div>
      <div className="contact">
        <h3 className="address">Address</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>43 castle road 517 district, kiyev port south Canada.</td>
            </tr>
            <tr>
              <td>email@yourmail.com</td>
            </tr>
            <tr>
              <td>+ 0123 3456 7890</td>
            </tr>
            <tr>
              <td>+ 0123 3456 7890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Culture;
