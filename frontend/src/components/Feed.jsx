import Posts from "./RepPosts";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import Posts from "./RepPosts";

const Feed = () => {
  return <Posts></Posts>;
};
const [feed, setFeed] = useState([]);

useEffect(() => {
  const fetchFeed = async () => {
    const [fetchedFeed, feedError] = await getAllPosts();
    setFeed(fetchedFeed);
  };

  fetchFeed();
}, []);

console.log(feed);

return (
  <div>
    {feed.map((post) => (
      <Posts post={post} />
    ))}
    {/* {feed.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))} */}
  </div>
);

export default Feed;
