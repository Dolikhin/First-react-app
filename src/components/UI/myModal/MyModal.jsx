import React from "react";
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

  const rootclasses = [classes.myModal]
  if(visible) {
    rootclasses.push(classes.active);
  }

  return (
    <div className={rootclasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
    </div>
  </div>
  );
}

export default MyModal;