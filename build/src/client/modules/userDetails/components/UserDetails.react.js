import React from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from '../reducer.js';
import { changeName } from '../actions.js';

const UserDetails = ({ name, changeName }) => (
  <div onClick={() => {changeName()}}>
    {name}
  </div>
)

const mapStateToProps = (state) => ({
  name: getUserDetails(state)
});

const mapDispatchToProps = ({
  changeName
})
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
