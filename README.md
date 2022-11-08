# 个人笔记

## 需求
   - 基于Markdown
   - 支持本地图片引用，不需要外部图床
   - 博客和笔记一体，可结构化组织文档
   - 可以自由定制
   - 社区活跃度高

## hugo+docsy

最开始使用的是hexo的[Matery](https://github.com/blinkfox/hexo-theme-matery)模板，基本上可以支持日常博客书写，虽然有category和tag功能，但是不具有结构化功能，另外定制也不够自由。

还考虑过使用vuepress的[Hope](https://vuepress-theme-hope.github.io/v2/zh/)模板，虽然功能上支持文档和博客并存，集成了[Waline](https://waline.js.org/)评论插件，但是定制性比较差，不够直观。

另外一个选择还有集大成为一体的[Vanblog](https://vanblog.mereith.com/)，功能比较全，但是写文章还需要依赖后台web写，比较适合新手。

挑来挑去，最终选择了hugo+docsy

[Hugo](https://gohugo.io/)基于go开发，稳定，速度快，支持page bundle，自己可以根据需要定制，活跃度也很高。

[Docsy](https://www.docsy.dev/docs/)支持文档，结构化组织内容，还支持博客功能，定制度很高，活跃度也高，而且是[Google](https://github.com/google/docsy)御用的文档生成器。

## 部署

内容+静态页面生成有了，剩下的就是如何部署了。

部署最大的问题有2个

1. 如何解决CI+CD问题，这个可以通过GitHub的action解决
2. 如何解决https证书和静态文件服务的问题，这个可以使用[Caddy](https://caddyserver.com/v2)解决
3. 本来还需要解决图床问题，之前的解决方案是自己搭建了[Minio](https://min.io/)来做图床，现在其实不再需要了。
4. [PicGo](https://molunerfinn.com/PicGo/)+Minio其实是很好的图床方案，配合cdn加速，非常适合个人使用。