import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';


const InputItem = () => (<div className={styles.inputWrap}>
   <TextField
   className={styles.inputField}
          id="outlined-full-width"
          label="Задание"
          style={{ margin: 0 }}
          placeholder="Введите тему для изучения"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>);
export default InputItem;