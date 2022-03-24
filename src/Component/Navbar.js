import ProfileMenu from "../Reuseable/ProfileMenu";

const Navbar = () => {
  return (
    <>
      {/* <nav
        class="navbar navbar-expand-lg p-0"
        style={{ background: "#f0e6ff", border: "white 2px solid" }}
      >
        <div class="container-fluid d-flex">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <div class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll row">
              <img src="/images/logo.jpg" alt="" className="logo-img" />

              <p className="main-heading m-0">Preal school,Mayiladuthurai </p>
            </div>
            <div class="d-flex">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </nav> */}
      <nav
        class="navbar navbar-expand-md  py-2 "
        style={{ background: "#f0e6ff", border: "white 2px solid" }}
      >
        <img src="/images/logo.jpg" alt="" className="logo-img mx-2" />
        <p className="main-heading m-0">Preal school,Mayiladuthurai </p>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="collapsibleNavbar"
          style={{ justifyContent: "end" }}
        >
          <ProfileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
