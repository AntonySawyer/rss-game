import template from './health.template';
import './health.css';

class Health {
  static parent() {
    return document.body.getElementsByTagName('main')[0];
  }

  static drawHero() {
    const targetHero = Health.parent().getElementsByClassName('heroBlock')[0];
    targetHero.insertAdjacentHTML('afterbegin', template);
  }

  static drawMonster() {
    const targetMonster = Health.parent().getElementsByClassName('monsterBlock')[0];
    targetMonster.insertAdjacentHTML('afterbegin', template);
  }

  static fullMonsterHealth() {
    document.querySelector('.monsterBlock>#currentHealthBar').value = 100;
    document.querySelector('.monsterBlock>#currentHealth').innerText = 100;
  }
}

export default Health;
