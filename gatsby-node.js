const Promise = require('bluebird');

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    if (page.path === '/user/') {
      page.matchPath = '/user/:id';
      createPage(page);
    }
    resolve();
  });
};
