import template from './casts.template';
import './casts.css';

class Casts {
  static draw() {
    const parent = document.body.getElementsByTagName('main')[0];
    const target = parent.getElementsByClassName('casts')[0];
    target.insertAdjacentHTML('beforeend', template);
  }
}

export default Casts;
