import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:3000/api/v1/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.blogs);
      setData(res.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      {data.length === 0 ? (
        <p>No blogs found or loading...</p>
      ) : (
        <ul>
          {data.map((blog: any) => (
            <>
              <li key={blog.id}>
                <div>
                  <img src={blog.banner.url} height={blog.banner.height} width={blog.banner.width}/>
                </div>
                <div>{blog.title}</div>
                <div>{blog.content}</div>
                <div></div>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
