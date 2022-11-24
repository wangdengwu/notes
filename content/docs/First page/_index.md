---
title: "模板范文"
linkTitle: "第一篇"
tags: ["start"]
author: 王登武
weight: 1
description: >
  这是一篇模板范文，用来演示如何写文章，都有哪些特性可以使用，以便需要时参考。
---

{{% pageinfo %}}
这里使用了pageinfo标签，可以重点强调一些内容。
{{% /pageinfo %}}

## 第1级标题

第1级标题建议从`##`开始

## Markdown演示

### 列表

列表可以加粗显示:

* **第一**: 第一个

* **第二**: 第二个

* **第三*斜体*也可以**: 还可以使用斜体

1. 有序列表1
2. 有序列表2
3. 有序列表3

- [x] 待办完成
- [x] 待办完成
- [ ] 待办未完成

* 层级列表
  * 第2层
  * 第2层
  * 第2层
* 层级列表
  * 第2层
  * 第2层
  * 第2层
  * 第2层

### 链接

链接示例

* [自己动手写解释器](https://lox.dengwu.wang/dedication.html): 对https://craftinginterpreters.com/dedication.html的中文翻译
* [Spock翻译](https://spockframework.cn/): 对官方https://spockframework.org/的中文翻译

### 引用
> 这是引用
>
> 引用的内容会变成灰色的字体
>
> 样式会和正文不太一样，引用也可以紧接着Header

### 代码块

```
这是代码块，可以标注不同的语言
```

`单行代码`

```java
class Test {}
```

### 表格

| 表头1 | 表头2 |
|-----|-----|
| 第一列 | 第2列 |
| 第一列 | 第2列 |
| 第1列 | 第2列 |

### 分割线

----------------

这是分割线

----------------

### 表单样式

姓名
: 老王

性别
: 男

----------------

### 图片

小图片会直接显示原始大小

![](small.png)

大图会缩放显示

![](big.png)
_The photo above of the Spruce Picea abies shoot with foliage buds: Bjørn Erik Pedersen, CC-BY-SA._

### 提醒

{{< alert >}} 这是默认提醒样式 {{< /alert >}}
{{< alert title="标题" >}} 这个提醒有标题 {{< /alert >}}
{{% alert title="标题" %}}这个提醒有标题和*Markdown*{{% /alert %}}
{{< alert color="success" >}}这个是success样式{{< /alert >}}
{{< alert color="warning" >}}这个是warning样式{{< /alert >}}
{{< alert color="warning" title="Warning" >}}这个是有标题的warning样式{{< /alert >}}

### Shortcodes

Page Block相关的shortcodes就不演示了，主要用于独立页面，比如首页_index.html就有

alert和pageinfo之前也介绍过了

支持iframe

Tabbed panes

{{< tabpane text=true right=true >}}
{{% tab header="**标题**:" disabled=true /%}}
{{% tab header="小图"%}}
![small](small.png)

_Welcome!_
{{% /tab %}}
{{% tab header="大图"%}}
![big](big.png)
**Karibu sana!**
{{% /tab %}}
{{< /tabpane >}}

Card panes

{{< cardpane >}}
{{< card-code header="**Java 5**" lang="java" >}}
File[] hiddenFiles = new File("directory_name")
    .listFiles(new FileFilter() {
        public boolean accept(File file) {
            return file.isHidden();
        }
    });
{{< /card-code >}}
{{< card-code header="**Java 8, Lambda expression**" lang="java">}}
File[] hiddenFiles = new File("directory_name")
    .listFiles(File::isHidden);
{{< /card-code >}}
{{< /cardpane >}}

Card code

{{< card-code header="**C**" lang="C" >}}
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  puts("Hello World!");
  return EXIT_SUCCESS;
}
{{< /card-code >}}

------

{{< card header="**Header**: specified via named parameter `Header`" title="**Card title**: specified via named parameter `title`" subtitle="**Card subtitle**: specified via named parameter `subtitle`" footer="**Footer**: specified via named parameter `footer`" >}}
**Content**: inner content of the shortcode, this may be formatted text, images, videos, … . If the extension of your page file equals `.md`, markdown format is expected, otherwise, your content will be treated as plain HTML.
{{< /card >}}

### readfile

{{% readfile "reuse.md" %}}

引用代码

{{< readfile file="reuse.java" code="true" lang="java" >}}
