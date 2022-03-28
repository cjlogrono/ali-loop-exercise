import React from 'react';
import PropTypes from 'prop-types';

// utils
import { checkKeyValue } from '../../utils';

const UserInfoStyles = {
  cont: { textAlign: 'center' },
  mainDiv: {
    backgroundColor: '#f99514',
    padding: '5px 0px',
    color: 'white'
  },
  name: { margin: 0 },
  company: { margin: 0 },
  bs: { margin: 0, fontSize: '14px' },
  catchPhrase: {
    margin: 0,
    backgroundColor: '#0071bc',
    color: 'white',
    padding: '10px 0px'
  }
};

function UserInfo(props) {
  const { user } = props;

  return (
    <div style={UserInfoStyles.cont}>
      <div style={UserInfoStyles.mainDiv}>
        <h1 style={UserInfoStyles.name}>
          {checkKeyValue(user, 'name') || 'No name'}
        </h1>
        {'company' in user && (
          <>
            {checkKeyValue(user.company, 'name') !== null && (
              <h3 style={UserInfoStyles.company}>{user.company.name}</h3>
            )}
            {checkKeyValue(user.company, 'bs') !== null && (
              <p style={UserInfoStyles.bs}>{user.company.bs}</p>
            )}
          </>
        )}
      </div>
      {'company' in user && checkKeyValue(user.company, 'bs') !== null && (
        <h4 style={UserInfoStyles.catchPhrase}>
          {`"${user.company.catchPhrase}"`}
        </h4>
      )}
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};
export default UserInfo;
