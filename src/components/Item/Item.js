import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

class Item extends React.Component {
//  componentDidMount () {
//    this.timerID = setInterval(() => console.log('interval'),1000);
//  }

//  componentWillUnmount () {
//    clearInterval(this.timerID);
//  }
  
  render () {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
<Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={() => onClickDone(id)}
      />
<IconButton className={styles.icon} 
        aria-label="delete" 
        color="primary">
        <DeleteIcon        
        onClick={() => onClickDelete(id)}
      />
      </IconButton>
{value}
</span>);
  }
}

Item.defaultProps = {
  isDone: false
  }

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};


	export default Item;

