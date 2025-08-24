import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent = (
    <Modal onClose={hideModalHandler}>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={onAuthorChangeHandler}
      />
    </Modal>
  );
  //   if (modalIsVisible) {
  //     modalContent = (
  //       <Modal onClose={hideModalHandler}>
  //         <NewPost
  //           onBodyChange={bodyChangeHandler}
  //           onAuthorChange={onAuthorChangeHandler}
  //         />
  //       </Modal>
  //     );
  //   }

  return (
    <>
      {modalIsVisible && modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="rue" body="test2" />
      </ul>
    </>
  );
}

export default PostsList;
