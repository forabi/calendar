import uuid from 'uuid/v4';
import { Event } from '../types';
// @ts-ignore
import _mergeRanges from 'merge-ranges';

export function mergeRanges(event: [Date, Date][]): [Date, Date][] {
  return _mergeRanges([...event].map(d => d.map(c => new Date(c))));
}

export function mergeEvents(event1: Event, event2: Event | null = []): Event {
  if (event2 === null) {
    return event1;
  }

  const values = [...event1, ...event2].map(range => range.value);
  const result = mergeRanges(values).map((value, i) => ({
    id: (event1[i] && event1[i].id) || (event2[i] && event2[i].id) || uuid(),
    value
  }));

  // console.log(result);

  return result;
}
