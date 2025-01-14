import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await data.json();
      setUsers(result);  // Set the data to the state after it has been fetched
      setLoading(false);  // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);  // Set loading to false even if an error occurs
    }
  };

  useEffect(() => {
    fetchData(); // Calling the fetchData function inside useEffect
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <>
      <Navbar />
      <div className="dataresult">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Card users={users} /> // Passing the users to Card component as a prop
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
