import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGlobe,
  faPhone,
  faUser
} from '@fortawesome/free-solid-svg-icons';

// utils
import { checkKeyValue } from '../../utils';

const ContactUserStyles = {
  cont: { textAlign: 'center' },
  header: { textDecoration: 'underline' },
  buttonCont: { display: 'flex', justifyContent: 'space-evenly' },
  button: {
    backgroundColor: '#0071bc',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '7.5px 10px',
    border: 'none'
  },
  buttonSelected: {
    backgroundColor: '#f99514',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '7.5px 10px',
    border: 'none'
  },
  info: {}
};

function ContactUser(props) {
  const { user } = props;

  const [hoverContact, selectContactInfo] = React.useState('username');

  const getContactInfo = key => {
    switch (key) {
      case 'website':
        return user.website;

      case 'email':
        return user.email;

      case 'phone':
        return user.phone;

      default:
        return user.username;
    }
  };

  const buttons = {
    username: faUser,
    email: faEnvelope,
    website: faGlobe,
    phone: faPhone
  };

  const buttonComponents = Object.entries(buttons)
    .filter(([key]) => checkKeyValue(user, key) !== null)
    .map(([key, icon]) => (
      <button
        key={key}
        type="button"
        data-testid={
          hoverContact === key ? `${key}-buttonSelected` : `${key}-button`
        }
        onClick={() => selectContactInfo(key)}
        style={
          hoverContact === key
            ? ContactUserStyles.buttonSelected
            : ContactUserStyles.button
        }
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    ));

  return buttonComponents.length > 0 ? (
    <div style={ContactUserStyles.cont}>
      <h3 style={ContactUserStyles.header}>Contact Info</h3>
      <div style={ContactUserStyles.buttonCont}>{buttonComponents}</div>
      <p style={ContactUserStyles.info}>{getContactInfo(hoverContact)}</p>
    </div>
  ) : (
    ''
  );
}

ContactUser.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ContactUser;
