import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

const errorScreenStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100%'
  },
  row: {
    width: '100%'
  },
  text: {
    margin: 0,
    color: 'red',
    fontWeight: 600
  },
  icon: {
    fontSize: '32px',
    color: 'red'
  }
};

function ErrorScreen() {
  return (
    <div style={errorScreenStyles.container}>
      <FontAwesomeIcon
        icon={faBomb}
        style={errorScreenStyles.icon}
        data-testid="error-icon"
      />
      <h3 style={errorScreenStyles.text}>
        Error fetching users... try again later.
      </h3>
    </div>
  );
}

export default ErrorScreen;
