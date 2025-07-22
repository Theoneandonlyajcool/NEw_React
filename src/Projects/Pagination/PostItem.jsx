const PostItem = (props) => {
  const { post } = props;
  return (
    <div className="rounded-lg overflow-clip  relative shadow-lg m-2 ">
      <img src={post.image} alt="image" className="w-64 h-64 object-cover " />
      <div className="absolute top-0 right-0 m-2 bg-gray-900/70 px-2 py-1 rounded-lg">
        <i className="fa-regular fa-heart mr-1 text-rose-300"></i>
        {post.likes}
      </div>
    </div>
  );
};

export default PostItem;
