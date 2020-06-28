import React, { Component } from 'react';
import AddCategoryForm from '../../molecules/AddCategoryForm';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import {
  getCategoriesById,
  updateCategoriesById,
} from '../../services/categoryServices';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import MaterialButton from '../../atoms/MaterialButton';
import { withRouter } from 'react-router-dom';
import SnackBar from '../../atoms/SnackBar';
const styles = {
  root: {
    width: '300px',
    height: '300px',
    margin: '10% auto',
  },
  label: {
    textTransform: 'capitalize',
  },
  display: {
    margin: '5% ',
  },
};

class UpdateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      open: false,
      sendUpdateId: this.props.id,
      disabled: false,
    };
    this.onModelChange = this.onModelChange.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  onModelChange(e) {
    const value = e.target.value;
    this.setState({
      data: { ...this.state.data, title: value },
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //  const { dispatch } = this.props;
    if (prevState.sendUpdateId !== this.state.sendUpdateId) {
      getCategoriesById(this.state.sendUpdateId).then((res) => {
        this.setState({ data: res.data });
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    //
    if (props.id !== state.sendUpdateId) {
      return { sendUpdateId: this.props.id };
    }
    return null;
  }

  componentDidMount() {
    getCategoriesById(this.state.sendUpdateId).then((res) => {
      this.setState({ data: res.data });
    });
  }

  updateCategory() {
    updateCategoriesById(this.state.sendUpdateId, this.state.data).then(
      this.setState({
        open: true,
        disabled: true,
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.open && (
          <SnackBar path="/admin/listcategories" name="Category Saved" />
        )}
        <Card
          classes={{
            root: this.props.classes.root,
          }}
        >
          <CardHeader title="UPDATE CATEGORY" />

          <CardContent>
            <AddCategoryForm
              onModelChange={this.onModelChange}
              value={this.state.data}
            />
          </CardContent>
          <br />
          <MaterialButton
            data-testid="button"
            disabled={this.state.disabled}
            name="Submit"
            click={this.updateCategory}
          />
        </Card>
      </div>
    );
  }
}
UpdateCategory.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
  id: PropTypes.string,
  history: PropTypes.object,
};

export default withRouter(withStyles(styles)(UpdateCategory));
