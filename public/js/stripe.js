/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51JEhEHSAjlLPehmKyEFfbkEe01SZGOMXxVEy8GUFJDsIz2YjrtclHRilDCv4zqEgGc4S6dS1uod0m1urTo7WfjKJ00UYVQfm6K');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
