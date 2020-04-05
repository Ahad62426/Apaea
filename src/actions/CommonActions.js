const error = error => ({
  type: 'ERROR',
  error,
});
const success = success => ({
  type: 'SUCCESS',
  data: success,
});

export {error, success};
