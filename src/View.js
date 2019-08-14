import React, {Component} from 'react';

class View extends Component {
  render() {
    
    var {className,activeView,viewName,children} = this.props;

    return (
      <div className={ viewName==activeView  ? className + ' view active': className + ' view'}>
        {children}
      </div>      
    );
  }
}

export default View;
