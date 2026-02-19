import './Header.css'

function Header() {
  return (
    <header id="header">
      <div id="contacts-badge">
        <span>Contacts</span>
      </div>
      <div id="header-links">
        <a href="https://www.linkedin.com/in/luis-montenegro-b32702380/">
          <img src="https://raw.githubusercontent.com/LuigiMonti/CV/Entregable7/Entregables/LI-In-Bug.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/LuigiMonti/" target="_blank">
          <img src="https://raw.githubusercontent.com/LuigiMonti/CV/Entregable7/Entregables/GitHub_Invertocat_Black.png" alt="GitHub" />
        </a>
        <a href="mailto:luismn@ufm.edu">
          <img src="https://raw.githubusercontent.com/LuigiMonti/CV/Entregable7/Entregables/gmail-seeklogo.png" alt="Gmail" />
        </a>
      </div>
    </header>
  )
}

export default Header