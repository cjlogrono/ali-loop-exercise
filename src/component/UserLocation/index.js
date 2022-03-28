import React from 'react';
import PropTypes from 'prop-types';

// utils
import { checkKeyValue } from '../../utils';

const UserLocationStyles = {
  cont: { textAlign: 'center' },
  header: { textDecoration: 'underline' },
  street: { marginBottom: 0 },
  city: { marginTop: 0 },
  link: { textTransform: 'uppercase' }
};

function UserLocation(props) {
  const { user } = props;

  return 'address' in user && checkKeyValue(user.address, 'street') !== null ? (
    <div style={UserLocationStyles.cont}>
      <h3 style={UserLocationStyles.header}>Location</h3>
      <p style={UserLocationStyles.street}>
        {`${user.address.street} `}
        {checkKeyValue(user.address, 'suite') !== null && user.address.suite}
      </p>
      {checkKeyValue(user.address, 'city') !== null &&
        checkKeyValue(user.address, 'zipcode') !== null && (
          <p style={UserLocationStyles.city}>
            {`${user.address.city}, ${user.address.zipcode}`}
          </p>
        )}
      {'geo' in user.address &&
        checkKeyValue(user.address.geo, 'lat') !== null &&
        checkKeyValue(user.address.geo, 'lng') !== null && (
          <a
            style={UserLocationStyles.link}
            target="_blank"
            rel="noreferrer"
            href={`http://maps.google.com/maps?q=${user.address.geo.lat}.${
              user.address.geo.lng
            }`}
          >
            see in google maps
          </a>
        )}
    </div>
  ) : (
    ''
  );
}

UserLocation.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

export default UserLocation;
