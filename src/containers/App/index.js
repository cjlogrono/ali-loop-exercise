import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { fetchUsers } from '../../actions';

// containers
const Error = lazy(() => import('../../component/ErrorScreen'));
const Loading = lazy(() => import('../../component/LoadingScreen'));
const EmptyList = lazy(() => import('../../component/EmptyList'));
const UserList = lazy(() => import('../UserList'));
const UserProfile = lazy(() => import('../UserProfile'));

const appStyles = {
  width: '320px',
  marginLeft: 'calc(50% - 160px)',
  minHeight: '100vh',
  backgroundColor: '#f3f6f4'
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { loading, error, userSelected, users } = this.props;

    let component = <Loading />;

    if (!loading) {
      component = users.length > 0 ? <UserList /> : <EmptyList />;
    }

    if (error) {
      component = <Error />;
    }

    if (userSelected) {
      component = <UserProfile />;
    }

    return (
      <div style={appStyles}>
        <Suspense fallback={<Loading />}>{component}</Suspense>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  userSelected: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
    userSelected: state.selectedUser !== null
  };
};

const mapActionsToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
