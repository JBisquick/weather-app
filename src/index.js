import { loadPage } from './controller';
import './style.css';

const searchButton = document.querySelector('.search');

searchButton.addEventListener('click', loadPage);
