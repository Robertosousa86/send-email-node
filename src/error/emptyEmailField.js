const emptyEmailField = (res, error) => {
  return res.status(400).json({
    error: error.message,
    message: 'O campo email deve ser preenchido.',
  });
};

module.exports = emptyEmailField;
