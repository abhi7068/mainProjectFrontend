import { Button, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddCategoryForm from '../../molecules/AddCategoryForm';
import { addCategory } from '../../services/categoryServices';
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

class AddCategory extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      open: false,
    };
    this.onModelChange = this.onModelChange.bind(this);
    this.submitCategory = this.submitCategory.bind(this);
  }

  onModelChange(e) {
    const value = e.target.value;
    this.setState({
      title: value,
      disabled: false,
    });
  }

  submitCategory() {
    addCategory(this.state.title).then(
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
          <CardHeader title="ADD CATEGORY" />

          <CardContent>
            <AddCategoryForm onModelChange={this.onModelChange} value="" />
          </CardContent>
          <CardContent>
            <Button
              data-testid="button"
              disabled={this.state.disabled}
              onClick={this.submitCategory}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
AddCategory.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(withStyles(styles)(AddCategory));
