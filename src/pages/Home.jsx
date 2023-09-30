import coverImage from "../assets/cover.png"

const Home = () => {
  return (
    <div className="alert alert-info" role="alert">
      <img src="/images/profile.png" width="150px" alt="Avatar" />
      <h1>Jane Doe</h1>
      <p>Hello my name is Jane Doe, I'am a Fullstack Web Developper</p>
      <img src={coverImage} style={{ width: "100%" }} />
    </div>
  );
}

export default Home;