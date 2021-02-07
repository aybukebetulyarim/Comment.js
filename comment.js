import React from 'react';


const Comment = (props) => {
  const { name, timeAgo, star, comment, avatar} = props;
  //const name = props.name;
  //const timeAgo = props.timeAgo;
  //const star = props.star;
  //const comment = props.comment;
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt= 'avatar' src={avatar} />
      </a>
      <div className="content">
        <a className="author" href="/">{name}</a>
        <div className="metadata">
          <div className="date">{timeAgo} days ago </div>
          <div className="rating">
            <i className="star icon"></i>
            {star} fav
          </div>
        </div>
        <div className="text">
          {comment}
        </div>
      </div>
    </div>
  );
}
export default Comment
