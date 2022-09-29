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
  mailTemplate: '<head><base target="_blank"/></head><body><div style="width: 530px;margin: 20px auto 0;height: auto;"><form><div style="background: white;width: 95%;max-width: 800px;margin: auto auto;border-radius: 5px;border:#6fcc66 1px solid;overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);"><img style="width:100%;overflow: hidden;"src="https://gejiba.com/view.php/4f0b416473cba677444a5c69625b8008.webp"/><div style="padding: 5px 20px;"><br><div><h3 style="text-decoration: none; color: #8fbc8f;">{{parent.nick}}，见信安：</h3></div><div id="letter"style="overflow:auto;height:width:100%;display:block;word-break: break-all;word-wrap: break-word;"><p>您在<a style="text-decoration: none;color: #8fbc8f"target="_blank"href="{{site.postUrl}} display: inline-block;">{{site.name}}</a>上发表的评论:</p><div style="border- bottom: #ddd 1px solid; border - left: #ddd 1px solid; padding - bottom: 20px; background - color: #eee; margin: 15px 0px; padding - left: 20px; padding - right: 20px; border - top: #ddd 1px solid; border - right: #ddd 1px solid; padding - top: 20px;">{{parent.comment|safe}}</div><p>收到了来自{{self.nick}}的回复：</p><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;">{{self.comment|safe}}</div></div><br><div style="text-align: center;"><a style="text-transform: uppercase;text-decoration: none;font-size: 14px;border: 1px solid #8fbc8f;border-radius: 32px;color: #6fcc66;padding: 10px;display: inline-block;margin: 10px auto 0;background-color: #6fcc6638;"target="_blank"href="{{site.postUrl}}">请您签收~</a></div><br><p style="font-size: 12px;text-align: center;color: #999;">CC竭诚为您服务！<br>©2020-present<a style="text-decoration:none; color:#8fbc8f"href="{{site.url}}">{{site.name}}</a></p></div></div></form></div></body>',
  mailTemplateAdmin: '<head><base target="_blank"/></head><body><div style="width: 530px;margin: 20px auto 0;height: auto;"><form><div style="background: white;width: 95%;max-width: 800px;margin: auto auto;border-radius: 5px;border:#6fcc66 1px solid;overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);"><img style="width:100%;overflow: hidden;"src="https://gejiba.com/view.php/4f0b416473cba677444a5c69625b8008.webp"/><div style="padding: 5px 20px;"><br><div><h3 style="text-decoration: none; color: #8fbc8f;">CC，见信安：</h3></div><div id="letter"style="overflow:auto;height:width:100%;display:block;word-break: break-all;word-wrap: break-word;"><p><a style="text-decoration: none;color: #8fbc8f"target="_blank"href="{{site.postUrl}} display: inline-block;">{{site.name}}</a>收到了新的留言:</p><div style="border - bottom: #ddd 1px solid; border - left: #ddd 1px solid; padding - bottom: 20px; background - color: #eee; margin: 15px 0px; padding - left: 20px; padding - right: 20px; border - top: #ddd 1px solid; border - right: #ddd 1px solid; padding - top: 20px;">{{self.comment|safe}}</div></div><p>评论者邮箱: {{self.mail}}</p><p>评论者网址: {{self.link}}</p><p>浏览器: {{self.browser}}</p><p>操作系统: {{self.os}}</p><p>IP归属地: {{self.addr}}</p><br><div style="text-align: center;"><a style="text-transform: uppercase;text-decoration: none;font-size: 14px;border: 1px solid #8fbc8f;border-radius: 32px;color: #6fcc66;padding: 10px;display: inline-block;margin: 10px auto 0;background-color: #6fcc6638;"target="_blank"href="{{site.postUrl}}">前往审核或回复~</a></div><br><p style="font-size: 12px;text-align: center;color: #999;">继续努力鸭！<br>©2020-present<a style="text-decoration:none; color:#8fbc8f"href="{{site.url}}">{{site.name}}</a></p></div></div></form></div></body>'
});
