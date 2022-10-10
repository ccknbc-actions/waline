const Waline= require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    '习近平',
    '毛泽东',
    '快递',
    '空包',
    '代发',
    '单号'
  ],
  disallowIPList: [
    '220.173.125.83',
    '222.83.150.92'
  ],
  secureDomains: [
    'ccknbc.vercel.app',
    'vercel.blog.ccknbc.cc',
    'waline.ccknbc.ml',
    'waline.ccknbc.cc',
    'ccknbc.netlify.app',
    'netlify.blog.ccknbc.cc',
    'ccknbc.bitbucket.io',
    'ccknbc.pages.dev',
    'cloudflare.blog.ccknbc.cc',
    'ccknbc.gitlab.io',
    'gitlab.blog.ccknbc.cc',
    'ccknbc.github.io',
    'github.blog.ccknbc.cc',
    'ccknbc.gitee.io',
    'blog.ccknbc.cc',
    'kotodama.yunyoujun.cn',
    'kotodama.elpsy.cn'
  ],
  mailSubject: '{{parent.nick}}，您在 {{site.name}} 上发表的评论,收到了来自 {{self.nick}} 的回复',
  mailSubjectAdmin: '{{site.name}} 上收到了来自 {{self.nick}} 的留言',
  mailTemplate: '<div style="padding:2em 10%;color:#b3b3b1;width:420px;margin:0 auto;font-size:14px";><p style="text-align:center;">Hi，<span style="color:#3eae5f">{{parent.nick}}</span></p><p style="font-size:13px;text-align:center;">有人回复了您在<strong style="font-weight:bold">{{site.name}}</strong>上的评论</p><hr style="width:64px;border:0;border-bottom:1px solid #e5e5e5;margin:24px auto;"><div style="color:#333;overflow:hidden;"><p style="display:inline-block;float:left;"><span style="color:#3eae5f;font-weight:bold">您</span><span>说：</span></p>{{parent.comment|safe}}</div><div style="color:#333;overflow:hidden;"><p style="display:inline-block;float:left;"><span style="color:#3eae5f;font-weight:bold">{{self.nick}}</span><span>说：</span></p>{{self.comment|safe}}</div><p><a style="color:#ffffff;text-decoration:none;display:inline-block;min-height:28px;line-height:28px;padding:0 13px;outline:0;background:#3eae5f;font-size:13px;text-align:center;font-weight:400;border:0;border-radius:999em"href="{{self.url}}#post-comment"target="_blank">点击查看</a></p><hr style="width:64px;border:0;border-bottom:1px solid #e5e5e5;margin:24px auto;"><p><a style="display:block;color:#b3b3b1;text-decoration:none;text-align:center;"href="{{site.url}}"target="_blank">{{site.name}}</a></p></div>',
  mailTemplateAdmin: '<div style="line-height:24px;font-size:13px;"><p><span style="color:#3eae5f">{{self.nick}}</span>说：</p><p>{{self.comment|safe}}</p><p><a style="color:#ffffff;text-decoration:none;display:inline-block;min-height:28px;line-height:28px;padding:0 13px;outline:0;background:#3eae5f;font-size:13px;text-align:center;font-weight:400;border:0;border-radius:999em"href="{{self.url}}#post-comment"target="_blank">点击查看</a></p></div>'
});
