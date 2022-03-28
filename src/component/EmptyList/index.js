import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const emptyScreenStyles = {
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
    color: 'orange',
    fontWeight: 600
  },
  icon: {
    fontSize: '32px',
    color: 'orange'
  }
};

function EmptyList() {
  return (
    <div style={emptyScreenStyles.container}>
      <FontAwesomeIcon
        icon={faExclamation}
        style={emptyScreenStyles.icon}
        data-testid="empty-icon"
      />
      <h3 style={emptyScreenStyles.text}>
        No users available... try again later.
      </h3>
    </div>
  );
}

export default EmptyList;
