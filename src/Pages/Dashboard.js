import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="row  m-0">
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-9 col-lg-10 p-0">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
