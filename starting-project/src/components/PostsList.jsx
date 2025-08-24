// import Post from './Post';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <>
      <ul className={classes.posts}>
        <Post author="hwan" body="test1" />
        <Post author="rue" body="test2" />
      </ul>
    </>
  );
}

export default PostsList;
