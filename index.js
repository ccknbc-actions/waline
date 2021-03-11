const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    '习近平',
    '毛泽东',
    '快递',
    '空包',
    '代发'
  ],
  disallowIPList: [
    '220.173.125.83'
  ],
  secureDomains: [
    'ccknbc.now.sh',
    'ccknbc.netlify.app',
    'ccknbc.pages.dev',
    'ccknbc.gitlab.io',
    'ccknbc.github.io',
    'ccknbc.gitee.io',
    'blog.ccknbc.cc'
  ]
});