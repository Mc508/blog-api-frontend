import Blogs from "@/components/main/Blogs";
import ProtectedRoute from "@/components/main/ProtectedRoute";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProtectedRoute>
        <Blogs />
      </ProtectedRoute>
    </div>
  );
};
export default Home;
