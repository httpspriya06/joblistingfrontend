import "./header.css";

function header() {
  return (
    <div className="navbar">
      <div className="title">Jobfinder</div>
      <div className="btn">
        <button>Login</button>

        <button>Register</button>
      </div>
    </div>
  );
}
export default header;
