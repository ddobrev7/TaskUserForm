import Login from "./Login";

function App() {
  return (
    <div data-testid="main-div-container">
      <div data-testid="image-container" className="image-container" >
        <img className="background-image" src="./images/7b374967eec7e7d48ef6c2dc0709100c_noLogin.png" />
        <Login />
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <div className="group13">
        <div className="group14">
          <div className="ellipse1"></div>
          <div className="group1">
            <p className="name">Mohammed Jawed</p>
            <p className="handle">@thisuix571</p>
          </div>
        </div>
        <p className="email">thisuix571@gmail.com</p>
      </div>
      </div>
    </div>
  );
}

export default App;
