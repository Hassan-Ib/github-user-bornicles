const PxToEm = (px) => {
  // 16px === 1em
  // px === 16 * whatever px supplied
  const toEm = 16 * px;

  return `${toEm}em`;
};

const theme = {
  mediaScreen: {
    lessThan698: PxToEm(698),
    lessThan768: PxToEm(768),
  },
};

export default theme;
