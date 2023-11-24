import "./Header.css";
function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img
          alt="hospital name"
          src="https://files.jotform.com/jufs/denizulasan/form_files/Asset%2031.63a1cf328f09a6.27536634.svg?md5=JubZin5lIFBtpWHXeYEbmw&expires=1700573622"
        />
      </div>
      <div className="hosp-info">
        <ul className="address-list-info">
          <li id="address-main">ACME CARE Hospital</li>
          <li className="address-line">123 Maple Street, Houston, TX, 77002</li>
          <li className="address-line">helpdesk@acmecare.com</li>
          <li className="address-line">www.acmecare.com</li>
          <li className="address-line">845-686-0124</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
