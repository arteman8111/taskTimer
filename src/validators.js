import { button_types, HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from "./constants";

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type){
    return button_types.includes(type)
}

export function isTimelineItemValid({ hour }) {
    return isHourValid(hour);
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value);
}

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid)
}

export function validateActivities(activites){
    return activites.every(isActivityValid);
}

function isSelectOptionValid({ value, label }) {
    return isNumber(value) && isNotEmptyString(label);
}

export function isHourValid(hour){
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isActivityValid(activity){
    return isNotEmptyString(activity)
}

function isNotEmptyString(value){
    return isString(value) && value.length > 0
}

function isBetween(value, start, end) {
    return value >= start && value <= end;
}

function isNumber(value) {
    return typeof value === 'number';
}

function isString(value) {
    return typeof value === 'string';
}

function isNull(value) {
    return value === null;
}

export function isUndefined(value) {
    return value === undefined;
}