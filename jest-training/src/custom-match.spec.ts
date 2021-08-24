import './custom-match1'
import './custom-match'

import moment from 'moment';

test("Another custom matcher", () => {
    expect(4).toGandalf();
  });

  test("T1: Different moments in life: check could fail", () => {
    const moment1 = moment().utc();
    const moment2 = moment();

    expect(moment1).not.toBeSameMoment(moment2);
  });

  test("even and odd numbers", () => {
    //expect(100).toBeDivisibleBy(2);
    //expect(101).not.toBeDivisibleBy(2);
  });
