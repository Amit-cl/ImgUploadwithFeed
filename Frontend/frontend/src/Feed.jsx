import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get-post")
      .then((response) => setPosts((response.data.post || []).reverse()))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Feed</h1>

        <Link
          to="/create-post"
          className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Create Post
        </Link>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="h-64 w-full object-cover"
              />

              <p className="p-4 text-lg font-medium text-gray-700">
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No posts yet</p>
      )}
    </section>
  );
}

export default Feed;