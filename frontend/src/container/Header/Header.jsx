import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header" id="home">
      <p>Hello! 👋</p>
      <p>I'm <span className="name">Gajendra Rathore</span>, a design-minded full stack software engineer focused on building beautiful interfaces & experiences </p>
      <div className="get_in_touch">
        Get In Touch 👉
        <a href="mailto:gajendra.rathore.dev07@gmail.com">gajendra.rathore.dev07@gmail.com</a>
      </div>
    </div>
  )
}

export default Header