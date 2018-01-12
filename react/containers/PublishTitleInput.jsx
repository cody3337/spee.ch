import React from 'react';
import {updateMetadata} from '../actions/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  constructor (props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput (e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.props.onMetadataChange(name, value);
  }
  render () {
    return (
      <input type="text" id="publish-title" className="input-text text--large input-text--full-width" name="title" placeholder="Give your post a title..." onChange={this.handleInput} value={this.props.title}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.metadata.title,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMetadataChange: (name, value) => {
      dispatch(updateMetadata(name, value));
    },
  };
}

TitleInput.propTypes = {
  title           : PropTypes.string.isRequired,
  onMetadataChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleInput);
