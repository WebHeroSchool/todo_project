import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';


class InputItem extends React.Component {
  state = {
    inputValue: '',
    isEmpty: false,
    isRepeat: false
  };
  onButtonClick = () => {
    let { onClickAdd, items } = this.props;
    let isRepeat = false;
    items.forEach((item) => {
      if(item.value === this.state.inputValue){
        isRepeat = true;
      }
    });
    if(this.state.inputValue === '' || isRepeat) {
      this.setState({
        isEmpty: true,
      });
      setTimeout(() => {
        this.setState({
          isEmpty: false,
        });
      }, 1500);
    } else {
      this.setState({
        inputValue: '',
        isEmpty: false,
        isRepeat: false,
      });
      onClickAdd(this.state.inputValue);
    }
  };

  render() {
    const { isEmpty, isRepeat } = this.state;
    return (
      <div className={styles.inputWrap}>
      <div className={
        classnames({
        [styles.input_style]: true,
        [styles.wrap__errorempty]: isEmpty,
        [styles.wrap__errorrepeat]: isRepeat
      })}>
   <TextField
   className={styles.inputField}
          id="outlined-full-width"
          label="Задача"
          style={{ margin: 0 }}
          placeholder="Введите задачу"
          fullWidth
          value={this.state.inputValue.toUpperCase()}
          onChange={event => this.setState({inputValue:event.target.value})}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
        <Button variant="contained" 
        color="primary"
        fullWidth
        onClick={this.onButtonClick}>
        Добавить Задачу
      </Button>
        </div>
        );
  }
}



export default InputItem;