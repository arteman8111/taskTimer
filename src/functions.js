import {
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR
} from './constants'
import { isPageValid } from './validators';

// Функция для хранения состояния кэша для отрисовки нужной страницы
export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)){
    return page
  }

  return PAGE_TIMELINE
}

export function generateTimeLineItems() {
  let timeLineItems = [];
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({ ['hour']: hour });
    // Можно и так timeLineItems.push({hour});
  }
  return timeLineItems;
}

export function generateActivitySelectOptions(activities){
  return activities.map((label, value) => ({label, value}))
}