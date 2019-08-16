
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { login } from '../Publics/redux/actions/login';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  userAdd = () => {
    this.state.user.push({
      email: this.state.email,
      password: this.state.password
    });
    this.add()
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }
  add = async () => {
    await this.props.dispatch(login(this.state.user[0]))
      .then(() => {
        swal({
          title: "Login",
          text: "Login Success",
          icon: "success",
          button: "OK"
        }).then(() => {
          window.location.href = '/book';
        })
      })
      .catch(() => {
        swal({
          title: "Login Failed",
          text: "Email Or Password Wrong !!!",
          icon: "warning",
          buttons: "OK"
        })
      })
  }

  render() {

    return (
      <Container style={{ paddingTop: '100px' }}>
        <h2 style={{ color: 'white' }}>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label style={{ color: 'white' }}>Email</Label>
              <Input
                type="email"
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label style={{ color: 'white' }}>Password</Label>
              <Input
                type="password"
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                id="examplePassword"
                placeholder="*******"
              />
            </FormGroup>
          </Col>
          <Button class="buttonSave" onClick={this.userAdd.bind(this)} style={{ backgroundColor: 'white', color: 'black' }}>Sign In</Button>
          <br />
          <span>Not register yet, <Link to="/user/register">register now</Link></span>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Login);