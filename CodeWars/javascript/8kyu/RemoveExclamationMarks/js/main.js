function removeExclamationMarks(s) {
    return s.split('').filter((el) => el!=='!').join('');
  }