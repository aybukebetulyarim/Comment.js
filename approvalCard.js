import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content"/>
        <span className="left floated like">
          <button><i className="like icon"></i></button>
          Like
        </span>
        <span className="right floated star">
          <button><i className="star icon"></i></button>
          Favorite
        </span>
    </div>
  );
}
export default ApprovalCard;
