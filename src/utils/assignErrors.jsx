const assignErrors = (mutation) => {
  Object.assign(mutation, {
    errors: mutation.error?.response?.data?.errors || {},
  });
};

export default assignErrors;
