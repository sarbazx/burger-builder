import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    loading: false,
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Taskhyn Maksim',
        address: {
          street: 'Street',
          zipCode: '23445',
          country: 'Turkey',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false })
        this.props.history.push('/');
      })
      .catch((error) => this.setState({ loading: false }));
  }

  render() {
    let form = (<form>
      <input className={classes.Input} type="text" name="name" placeholder="Your name" />
      <input className={classes.Input} type="email" name="email" placeholder="Your email" />
      <input className={classes.Input} type="text" name="street" placeholder="Street" />
      <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
