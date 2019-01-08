import template from './battlefield.template';
import './battlefield.css';
import getRandomName from '../../interactive/nameGenerator/nameGenerator';
import getRandomEnemy from '../../interactive/characterGenerator/characterGenerator';
import Health from '../health/health';
import Score from '../../interactive/score/score';

class Battlefield {
  static draw() {
    const target = document.body.getElementsByTagName('header')[0];
    target.insertAdjacentHTML('afterend', template);
    document.querySelector('#heroName').innerText = document.querySelector('#userName').value;
    Health.drawMonster();
    Battlefield.newMonster();
  }

  static newMonster() {
    Health.fullMonsterHealth();
    document.querySelector('.monsterBlock .pers').innerHTML = ('');
    document.querySelector('#monsterName').innerText = getRandomName();
    const enemyArray = getRandomEnemy();
    for (let item = 0; item < enemyArray.length; item += 1) {
      document.querySelector('.monsterBlock>.pers').innerHTML += enemyArray[item];
    }
    Score.changeScore();
  }
}

export default Battlefield;
