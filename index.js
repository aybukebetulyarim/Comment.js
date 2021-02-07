import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment.js';
import faker from 'faker';
import ApprovalCard from './approvalCard.js';
//Componentları oluşturdum.
const App = () => {
  return (
    <div className="ui comments" style = {{
      paddingTop: '10px',
      paddingLeft: '10px',
    }}>
      <ApprovalCard>
        <Comment name = 'Aybüke Betül Yarım'
                 timeAgo ='2'
                 star ='5'
                 comment = "Merhaba React"
                 avatar = {faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <Comment name = 'Esra Şahin'
                 timeAgo ='1'
                 star ='4'
                 avatar = {faker.image.avatar()}
                 comment = "Merhaba React!!"/>
      </ApprovalCard>

      <ApprovalCard>
        <Comment name = 'Dilza Demir'
                 timeAgo ='1'
                 star ='4'
                 avatar = {faker.image.avatar()}
                 comment = "Hello React!"/>
      </ApprovalCard>
    </div>
  );
}
//Componentları aldım ve gösterdim.
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
