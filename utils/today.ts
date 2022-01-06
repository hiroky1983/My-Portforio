export const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = ("0" + today.getDate()).slice(-2);
  const YMD = `${year}年${month}月${date}日`;
  return YMD;
};

export const experienceTime = (startYear: number, startMonth: number) => {
  const nowDate = new Date();
  const startDate = new Date(startYear, startMonth - 1);

  const diff = nowDate.getTime() - startDate.getTime();
  const getDate = diff / (1000 * 60 * 60 * 24);
  const DAYS_PER_MONTH = 365 / 12;
  const expYear = Math.floor(getDate / 365);
  const expMonth = Math.floor((getDate - 365 * expYear) / DAYS_PER_MONTH);

  const expTime =
    expYear === 0 ? `${expMonth}ヶ月` : `${expYear}年${expMonth}ヶ月`;

  return expTime;
};
