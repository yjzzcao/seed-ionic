## Ionic seed

An Ionic project seed 

already use:

* gulp
* less
* temlateCache
* transparent statusbar

will use:

* sass replace less
* JS compression technology

### 初始化plugin

在`www/lib`目录下获取自定义插件(plugin)git地址：

    https://github.com/yjzzcao/cordova-plugin-statusbar-transparent.git

然后初始化插件

    ionic state restore

### 重新生成hooks

在MAC下面，在添加完plugins之后进行添加platform始终会报错 （Windows下面暂时没有这个问题）

    Ionic Add Platform EACCES Error

解决办法

    ionic hooks add

### 使用gulp

* install

    npm install

* using

    gulp

### 项目启动

    gulp              # 生成最新的 css 和 template
    gulp watch        # 启动gulp
    ionic serve       # 启动ionic调试

### 项目编译

    gulp                      # 生成最新的 css 和 template
    ionic build android/ios   # 编译Android、iOS
