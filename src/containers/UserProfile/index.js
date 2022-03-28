import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { unselectUser } from '../../actions';

// containers
import UserInfo from '../../component/UserInfo';
import ContactUser from '../../component/ContactUser';
import UserLocation from '../../component/UserLocation';

const userProfileStyles = {
  header: {
    textAlign: 'center',
    backgroundColor: '#2e3192',
    color: 'white',
    padding: '10px 0px',
    margin: 0,
    fontWeight: 800,
    position: 'sticky',
    top: 0
  },
  horizontalLine: {
    width: '94%',
    marginLeft: '3%',
    borderBottom: '1px solid black'
  },
  buttonCont: {
    marginTop: '50px',
    textAlign: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '14px',
    padding: '7.5px 10px',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '1px 1px black'
  }
};

function UserProfile(props) {
  const { user } = props;

  return (
    <div>
      <h2 style={userProfileStyles.header}>User Profile</h2>
      <UserInfo user={user} />
      <ContactUser user={user} />
      <div style={userProfileStyles.horizontalLine} />
      <UserLocation user={user} />
      <div style={userProfileStyles.buttonCont}>
        <button
          style={userProfileStyles.button}
          type="button"
          data-testid="back-button"
          onClick={() => props.unselectUser()}
        >
          Back
        </button>
      </div>
    </div>
  );
}

UserProfile.defaultProps = {
  user: null
};

UserProfile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  unselectUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.selectedUser
  };
};

const mapActionsToProps = {
  unselectUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserProfile);
