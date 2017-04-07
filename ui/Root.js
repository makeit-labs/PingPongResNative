import React from 'react';
import { connect } from 'react-redux';
// import Container from './container';
// import Login from './login';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import subscribeToSocketEvents from '../hlpp/subscribeToSocketEvents';




export class Root extends React.Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.subscribeToSocketEvents(this.props.currentUser.id);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world!</Text>
      </View>
    );
  }
}

Root.propTypes = {
  currentUser: React.PropTypes.object,
  subscribeToSocketEvents: React.PropTypes.func.isRequired,
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

function mapDispatchToProps(dispatch) {
  return {
    subscribeToSocketEvents: (id) => subscribeToSocketEvents(dispatch, id),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
