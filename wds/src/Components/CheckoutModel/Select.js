import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
    open: false,
  }
};
  // handleChange = (event) => {
  //   this.setState({ Price: event.target.value });
  // };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    //destructuring object
    const { classes, value, controlChange } = this.props;
    // console.log(this.state.Price);
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Packages</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={value}
            onChange={controlChange}
            inputProps={{
              name: 'data',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={600}>Basic | 600$</MenuItem>
            <MenuItem value={800}>Super | 800$</MenuItem>
            <MenuItem value={1200}>Premium | 1200$</MenuItem>
          </Select>
        </FormControl>
      </form>
    )};
  }

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';

// const styles = theme => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing.unit * 2,
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//   },
// });

// class ControlledOpenSelect extends React.Component {
//   state = {
//     age: '',
//     open: false,
//   };

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <form autoComplete="off">
//         <Button className={classes.button} onClick={this.handleOpen}>
//           Open the select
//         </Button>
//         <FormControl className={classes.formControl}>
//           <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
//           <Select
//             open={this.state.open}
//             onClose={this.handleClose}
//             onOpen={this.handleOpen}
//             value={this.state.age}
//             onChange={this.handleChange}
//             inputProps={{
//               name: 'age',
//               id: 'demo-controlled-open-select',
//             }}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//         </FormControl>
//       </form>
//     );
//   }
// }

// ControlledOpenSelect.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ControlledOpenSelect);