import { Event } from '../types';
// @ts-ignore
import _mergeRanges from 'merge-ranges';
import { compareAsc } from 'date-fns';
import uuid from 'uuid/v4';

export function mergeRanges(event: [Date, Date][]): [Date, Date][] {
  return _mergeRanges([...event].map(d => d.map(c => new Date(c))));
}

export function mergeEvents(event1: Event, event2?: Event | null): Event {
  const ranges = [...event1, ...(event2 || [])].map(range => range.value);

  const merged = mergeRanges(ranges).sort((range1, range2) =>
    compareAsc(range1[0], range2[0])
  );

  return merged.map(value => ({ value, id: uuid() }));
}
