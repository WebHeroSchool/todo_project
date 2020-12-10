import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };
  onButtonClick = () => {
        this.props.onClickAdd(this.state.inputValue.toUpperCase());
    this.setState({
      inputValue: ''
    });
  }
  render() {
    const condition = this.props.hasError;
    let formHelperText;
    if (condition) {
      formHelperText = 'Поле ввода не может быть пустым'
    } else {
      formHelperText = ''
    } 
    return (<div className={styles.inputWrap}>
   <TextField
   className={styles.inputField}
          id="outlined-full-width"
          label="Задание"
          style={{ margin: 0 }}
          placeholder="Введите тему для изучения"
          fullWidth
          value={this.state.inputValue.toUpperCase()}
          onChange={event => this.setState({inputValue:event.target.value})}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <div className={styles.warning}>
         {formHelperText}
        </div>
        <Button 
        variant="contained" 
        color="primary"
        fullWidth
        onClick={this.onButtonClick}>
        Добавить Задание
      </Button>
        </div>
        );
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;