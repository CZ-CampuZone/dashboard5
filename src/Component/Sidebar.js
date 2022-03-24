const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h2 className="Logo py-3 text-center">Campuzone</h2>

        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <h5 className="heads">Dashboard</h5>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-columns mx-1"></i>
            <a href="/">Website Update</a>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-columns mx-1"></i>
            <a href="/">Admission</a>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-columns mx-1"></i>
            <a href="/">Approvals</a>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-sort-amount-down-alt mx-1"></i>
            <a href="/">Fee Management</a>
          </li>
          <li className="sidebar-li">
            <i class="far fa-calendar mx-1"></i>
            <a href="/">Calender</a>
          </li>
          <li className="sidebar-li">
            <i class="fal fa-table mx-1"></i>
            <a href="/">Time Table</a>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-solar-panel mx-1"></i>
            <a href="/">Lesson Plan</a>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-columns mx-1"></i>
            <a href="/">Attendance</a>
          </li>
          <li className="sidebar-li">
            <i class="fas fa-user mx-1"></i>
            <a href="/">Profile</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
