module.exports = [
  {
    text: '教程',
    children: [
      { text: '教程', link: '/' }
    ]
  },
  {
    text: 'Go环境配置',
    children: [
      { text: 'Go环境配置', link: '/setup/go-env' },
      { text: '安装Go', link: '/setup/startup' },
      { text: 'GOPATH 与工作空间', link: '/setup/workspace' },
      { text: 'Go 命令', link: '/setup/command' },
      { text: 'Go开发工具', link: '/setup/devtools' },
      { text: '小结', link: '/setup/summary' }
    ]
  },
  {
    text: 'Go语言基础',
    children: [
      { text: 'Go语言基础', link: '/basic/basic' },
      { text: '你好，Go', link: '/basic/hello' },
      { text: 'Go基础', link: '/basic/go-basic' },
      { text: '流程和函数', link: '/basic/flow' },
      { text: 'struct', link: '/basic/struct' },
      { text: '面向对象', link: '/basic/oo' },
      { text: 'interface', link: '/basic/interface' },
      { text: '并发', link: '/basic/goroutine' },
      { text: '小结', link: '/basic/summary' }
    ]
  },
  {
    text: 'Web基础',
    children: [
      { text: 'Web基础', link: '/web/web-basic' },
      { text: 'web工作方式', link: '/web/web-work-way' },
      { text: 'Go搭建一个简单的web服务', link: '/web/startup-web-server' },
      { text: 'Go如何使得web工作', link: '/web/web-works' },
      { text: 'Go的http包详解', link: '/web/http' },
      { text: '小结', link: '/web/summary' },
    ]
  },
  {
    text: '表单',
    children: [
      { text: '表单', link: '/form/form' },
      { text: '处理表单的输入', link: '/form/form-input' },
      { text: '验证表单的输入', link: '/form/form-validate' },
      { text: '预防跨站脚本', link: '/form/cors' },
      { text: '防止多次递交表单', link: '/form/prevent-submit' },
      { text: '处理文件上传', link: '/form/fileupload' },
      { text: '小结', link: '/form/summary' }
    ]
  },
  {
    text: '访问数据库',
    children: [
      { text: '访问数据库', link: '/database/access-database' },
      { text: 'database/sql接口', link: '/database/sql-interface' },
      { text: '使用MySQL数据库', link: '/database/use-mysql' },
      { text: '使用SQLite数据库', link: '/database/use-sqllite' },
      { text: '使用PostgreSQL数据库', link: '/database/use-postgresql' },
      { text: '使用Beego orm库进行ORM开发', link: '/database/use-beego-orm' },
      { text: 'NOSQL数据库操作', link: '/database/nosql' }
    ]
  },
  {
    text: 'session和数据存储',
    children: [
      { text: 'session和数据存储', link: '/session/session' },
      { text: 'session和cookie', link: '/session/cookie' },
      { text: 'Go如何使用session', link: '/session/how-to-use-session' },
      { text: 'session存储', link: '/session/session-store' },
      { text: '预防session劫持', link: '/session/session-hijack' },
      { text: '小结', link: '/session/summary' }
    ]
  },
  {
    text: '文本文件处理',
    children: [
      { text: '文本文件处理', link: '/text/file-handle' },
      { text: 'XML处理', link: '/text/xml-process' },
      { text: 'JSON处理', link: '/text/json-process' },
      { text: '正则处理', link: '/text/regexp-process' },
      { text: '模板处理', link: '/text/template-process' },
      { text: '文件操作', link: '/text/file-handle' },
      { text: '字符串处理', link: '/text/string-process' },
      { text: '小结', link: '/text/summary' }
    ]
  },
  {
    text: 'Web服务',
    children: [
      { text: 'Web服务', link: '/server/web-server' },
      { text: 'Socket编程', link: '/server/socket-program' },
      { text: 'WebSocket', link: '/server/websocket' },
      { text: 'REST', link: '/server/restful' },
      { text: 'RPC', link: '/server/rpc' },
      { text: '小结', link: '/server/summary' }
    ]
  },
  {
    text: '安全与加密',
    children: [
      { text: '安全与加密', link: '/secure/secure-encrypt' },
      { text: '预防CSRF攻击', link: '/secure/guard-csrf' },
      { text: '确保输入过滤', link: '/secure/filter-data' },
      { text: '避免XSS攻击', link: '/secure/xss' },
      { text: '避免SQL注入', link: '/secure/sql-inject' },
      { text: '存储密码', link: '/secure/store-pwd' },
      { text: '加密和解密数据', link: '/secure/encry-decry' },
      { text: '小结', link: '/secure/summary' }
    ]
  },
  {
    text: '国际化和本地化',
    children: [
      { text: '国际化和本地化', link: '/i18n/i18n' },
      { text: '设置默认地区', link: '/i18n/locale' },
      { text: '本地化资源', link: '/i18n/locale-resource' },
      { text: '国际化站点', link: '/i18n/i18n-site' },
      { text: '小结', link: '/i18n/summary' }
    ]
  },
  {
    text: '错误处理，调试和测试',
    children: [
      { text: '错误处理，调试和测试', link: '/error/debug-test' },
      { text: '错误处理', link: '/error/error' },
      { text: '使用GDB调试', link: '/error/gdb-debug' },
      { text: 'Go怎么写测试用例', link: '/error/how-to-write-unit' },
      { text: '小结', link: '/error/summary' }
    ]
  },
  {
    text: '部署与维护',
    children: [
      { text: '部署与维护', link: '/deploy/deploy' },
      { text: '应用日志', link: '/deploy/logger' },
      { text: '网站错误处理', link: '/deploy/error-process' },
      { text: '应用部署', link: '/deploy/app-deploy' },
      { text: '备份和恢复', link: '/deploy/backup-recover' },
      { text: '小结', link: '/deploy/summary' }
    ]
  },
  {
    text: '如何设计一个Web框架',
    children: [
      { text: '如何设计一个Web框架', link: '/how/web-framework' },
      { text: '项目规划', link: '/how/program-plan' },
      { text: '自定义路由器设计', link: '/how/http-router' },
      { text: 'controller设计', link: '/how/controller' },
      { text: '日志和配置设计', link: '/how/logger-design' },
      { text: '实现博客的增删改', link: '/how/crud' },
      { text: '小结', link: '/how/summary' }
    ]
  },
  {
    text: '扩展Web框架',
    children: [
      { text: '扩展Web框架', link: '/extension/web-framework-extension' },
      { text: '静态文件支持', link: '/extension/static-file' },
      { text: 'Session支持', link: '/extension/session-support' },
      { text: '表单支持', link: '/extension/form-validate-support' },
      { text: '用户认证', link: '/extension/user-auth' },
      { text: '多语言支持', link: '/extension/i18n-support' },
      { text: 'pprof支持', link: '/extension/pprof' },
      { text: '小结', link: '/extension/summary' }
    ]
  }
]
