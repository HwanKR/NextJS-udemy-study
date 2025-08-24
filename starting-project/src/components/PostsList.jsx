import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent = (
    <Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
    </Modal>
  );

  return (
    <>
      {isPosting && modalContent}
      <ul className={classes.posts}>
        <Post author="rue" body="test2" />
      </ul>
    </>
  );
}

export default PostsList;
