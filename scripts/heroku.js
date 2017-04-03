var git = require('simple-git')();

git.add('./*')
  .commit('Commiting build to source control for deployment.')
  .push('heroku', 'master');
