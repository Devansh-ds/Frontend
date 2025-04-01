const newYears = `1 Jan 2026`;

function countDown() {
  const currentDate = new Date();
  const newYeardate = new Date(newYears);

  const seconds = (newYeardate - currentDate) * 1000;
  const days = Math.floor(seconds / 3600 / 24);

  console.log(newYeardate - currentDate);
}

setInterval(countDown, 1000);

countDown();
