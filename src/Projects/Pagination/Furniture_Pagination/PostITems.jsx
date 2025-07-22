const PostItem = (props) => {
  const { posts } = props;
  return (
    <div>
      {/* Header */}

      <div className="flex my-6 bg-white text-black w-[33rem] rounded-xl overflow-clip">
        <div>
          <img
            src={posts.image}
            alt="image"
            className="w-[10rem] h-[10rem] object-cover"
          />
        </div>

        <div className=" py-4 px-4 flex flex-col  justify-between">
          <div className="font-semibold text-xl">{posts.name}</div>
          <div className="text-gray-500 text-base flex flex-wrap">
            {posts.about}
          </div>
          <div className=" flex justify-end ">
            <button className="bg-gradient-to-r from-blue-400 to-blue-700 py-2 px-4 rounded-xl text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
