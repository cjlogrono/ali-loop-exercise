import React from 'react';
import PropTypes from 'prop-types';

// utils
import { checkKeyValue } from '../../utils';

const userRowStyles = {
  container: {
    padding: '7.5px 10px',
    margin: '10px 0px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  },
  name: {
    margin: 0,
    fontWeight: 600
  },
  avatar: {
    padding: '10px 12.5px',
    textTransform: 'uppercase',
    backgroundColor: '#0071bc',
    color: 'white',
    marginRight: '10px',
    borderRadius: '50%'
  }
};

function UserRow(props) {
  const { user, evenRow, handler } = props;

  const [hover, toggleHover] = React.useState(false);

  let background = '#f9faf9';
  if (hover) {
    background = '#f99514';
  } else if (evenRow) {
    background = '#F3F6F4';
  }

  const name =
    checkKeyValue(user, 'name') ||
    checkKeyValue(user, 'username') ||
    checkKeyValue(user, 'email') ||
    ('company' in user && checkKeyValue(user.company, 'name')) ||
    checkKeyValue(user, 'website');

  return (
    <div
      style={{
        ...userRowStyles.container,
        backgroundColor: background,
        cursor: hover && 'pointer'
      }}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      onClick={() => handler()}
      onKeyDown={() => handler()}
      role="button"
      tabIndex={0}
      data-testid={hover ? 'user-row-hover' : 'user-row'}
    >
      <div style={userRowStyles.avatar}>{name[0]}</div>
      <h3 style={userRowStyles.name}>{name}</h3>
    </div>
  );
}

UserRow.propTypes = {
  evenRow: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  handler: PropTypes.func.isRequired
};

export default UserRow;
