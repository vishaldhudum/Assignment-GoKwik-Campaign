import React from 'react';

import Layout from '../containers/Layout'
import PhoneNumberForm from '../containers/PhoneNumberForm'
import FAQ from '../containers/FAQ'

function App() {

  const initialState = {
    phoneNumber: '',
    validated: false,
    error: false,
    submitted: false
  }

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    if (localStorage.getItem('phoneNumber')) {
      setState({ ...state, submitted: true });
    }
  }, []);

  const handleChange = (event) => {
    const re = /^[0-9]{1,10}$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setState({
        ...state,
        phoneNumber: event.target.value,
        validated: event.target.value.length === 10,
        error: false
      });
    }
  }

  const handleSubmit = () => {
    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (regex.test(state.phoneNumber)) {
      localStorage.setItem('phoneNumber', state.phoneNumber);
      setState({ ...state, submitted: true });
    } else {
      setState({ ...state, error: true });
    }
  }

  const clearStorage = () => {
    if (localStorage.getItem('phoneNumber')) {
      localStorage.removeItem('phoneNumber');
      setState(initialState);
    }
  }

  return (
    <Layout
      clearStorage={clearStorage}
    >
      {
        !state.submitted
          ? <PhoneNumberForm
            phoneNumber={state.phoneNumber}
            validated={state.validated}
            error={state.error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          : <FAQ />
      }
    </Layout>
  );
}

export default App;
