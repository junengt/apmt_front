export const returnTime = (time) => {
  const rightNow = Date.now();
  const gap = rightNow - time;
  const gapSecond = Math.floor(gap / 1000);
  const gapMinute = Math.floor(gapSecond / 60);
  const gapHour = Math.floor(gapMinute / 60);
  const gapDay = Math.floor(gapHour / 24);

  if (gapSecond < 60) return `${gapSecond}초`;
  if (gapMinute < 60) return `${gapMinute}분`;
  if (gapHour < 24) return `${gapHour}시간`;
  return `${gapDay}일`;
};
