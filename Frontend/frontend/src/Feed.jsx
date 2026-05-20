import { useState,useEffect } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:3000/get-post")
    .then((response) => setPosts(response.data.post || []))
    .catch((error) => console.error(error));
}, []);

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Feed</h1>

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