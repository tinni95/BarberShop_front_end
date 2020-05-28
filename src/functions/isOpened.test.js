import {isOpened} from './isOpened';

const Dates = [
  {
    "OpeningTime": "08:30:00.000",
    "CloseTime": "18:30:00.000",
    "DayOfTheWeek": "MONDAY"
  },
  {
    "OpeningTime": "08:30:00.000",
    "CloseTime": "18:30:00.000",
    "DayOfTheWeek": "WEDNESDAY"
  },
  {
    "OpeningTime": "08:30:00.000",
    "CloseTime": "18:30:00.000",
    "DayOfTheWeek": "THURSDAY"
  },
  {
    "OpeningTime": "08:30:00.000",
    "CloseTime": "18:30:00.000",
    "DayOfTheWeek": "FRIDAY"
  },
  {
    "OpeningTime": "08:30:00.000",
    "CloseTime": "18:30:00.000",
    "DayOfTheWeek": "SATURDAY"
  },
  {
    "OpeningTime": "08:30:00.000",
    "CloseTime": "18:30:00.000",
    "DayOfTheWeek": "SUNDAY"
  }
];


test('it works', () => {
  const opened = isOpened(Dates);
  expect(opened).toBeTruthy()
});
