import NavBarStyle from "../styles/NavBarStyle.module.css";

const Footer = () => {

    return (
        <footer className={NavBarStyle.footerCard}>
        <p className={NavBarStyle.footerText}>Empowerd by digital ocean</p>

        <div className={NavBarStyle.footerHelpCointiner}>
          <a href="#" className={NavBarStyle.footerHelpText}>
            Submit Feedback
          </a>
          <a href="#" className={NavBarStyle.footerHelpText}>
            Mission
          </a>
          <a href="#" className={NavBarStyle.footerHelpText}>
            Support
          </a>
          <a href="#" className={NavBarStyle.footerHelpText}>
            {" "}
            Resources
          </a>
          <a href="#" className={NavBarStyle.footerHelpText}>
            {" "}
            
          </a>
        </div>
      </footer>
    )
}

export default Footer;