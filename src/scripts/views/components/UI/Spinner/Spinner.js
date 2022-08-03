const spinner = (type) => {
  const styles = ['lds-ring'];
  switch (type) {
    case 'form':
      styles.push('lds-ring-form');
      break;
    default:
      styles.push('lds-ring-default');
      break;
  }

  return `<div class="${styles.join(' ')}"><div></div><div></div><div></div><div></div></div>`;
};

export default spinner;
