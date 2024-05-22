import Posts from "./RepPosts";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import { ScrollArea } from "@radix-ui/themes";

const Feed = () => {
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
      <ScrollArea type="always" scrollbars="vertical" style={{ height:"100dvh" }}>
      {feed.map((post) => (
        <Posts post={post} />
      ))}
      </ScrollArea>
    </div>

  );
};

export default Feed;
