import template from './header.template';
import './header.css';

class Header {
  static draw() {
    const target = document.body;
    target.insertAdjacentHTML('beforeend', template);
  }
}

export default Header;
