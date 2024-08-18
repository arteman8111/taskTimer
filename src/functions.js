import { 
  PAGE_TIMELINE, 
  PAGE_ACTIVITIES, 
  PAGE_PROGRESS,
  HOURS_IN_DAY 
} from './constants'

// Функция для хранения состояния кэша для отрисовки нужной страницы
export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE].includes(hash)) {
    return hash
  } else {
    window.location.hash = PAGE_TIMELINE
  }
  return PAGE_TIMELINE
}

export function generateTimeLineItems() {
  let timeLineItems = [];
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({['hour']:hour});
    // Можно и так timeLineItems.push({hour});
  }
  return timeLineItems;
}