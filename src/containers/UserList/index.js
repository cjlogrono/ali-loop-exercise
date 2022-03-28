import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { selectUser } from '../../actions';

// utils
import { checkKeyValue } from '../../utils';

// components
import UserRow from '../../component/UserRow';

const userListStyles = {
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
  input: {
    height: '50px',
    width: 'calc(100% - 5px)',
    border: 'none',
    margin: 0,
    padding: 0,
    paddingLeft: '5px',
    fontSize: '18px'
  }
};

function UserList(props) {
  const { users } = props;

  const [filterText, handleFilter] = React.useState('');

  const handleClick = user => props.selectUser(user);

  const userList = users
    .filter(u => {
      const name =
        checkKeyValue(u, 'name') ||
        checkKeyValue(u, 'username') ||
        checkKeyValue(u, 'email') ||
        ('company' in u && checkKeyValue(u.company, 'name')) ||
        checkKeyValue(u, 'website');
      return name.toLowerCase().indexOf(filterText.trim().toLowerCase()) > -1;
    })
    .map((user, index) => (
      <UserRow
        handler={() => handleClick(user)}
        key={`${user.username}-${user.id}`}
        user={user}
        evenRow={index % 2 === 0}
      />
    ));

  return (
    <div>
      <h2 style={userListStyles.header}>User List</h2>
      <input
        style={userListStyles.input}
        value={filterText}
        placeholder="Filter users..."
        onChange={e => {
          handleFilter(e.target.value);
        }}
        data-testid="user-filter"
      />
      {userList}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapActionsToProps = {
  selectUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserList);
