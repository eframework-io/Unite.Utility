# EFramework Utility for Unite

[![NPM](https://img.shields.io/npm/v/io.eframework.unite.utility?label=NPM&logo=npm)](https://www.npmjs.com/package/io.eframework.unite.utility)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-Explore-blue)](https://deepwiki.com/eframework-io/Unite.Utility)
[![Discord](https://img.shields.io/discord/1422114598835851286?label=Discord&logo=discord)](https://discord.gg/XMPx2wXSz3)

面向 Unite 平台的通用基础类库，提供了统一的 API 接口，确保在多平台环境下保持一致的运行结果。

## 功能特性

- [XCollect](docs/XCollect.md) 实现了数组/列表的增删改查、排序等功能，是一个实用的集合工具类。
- [XEnv](docs/XEnv.md) 提供了应用程序的环境管理，支持多平台及运行时环境识别等功能。
- [XEvent](docs/XEvent.md) 提供了轻量级的事件管理器，支持多重监听、单次及泛型回调和批量通知等功能。
- [XFile](docs/XFile.md) 实现了跨平台的文件管理系统，支持在不同运行环境下进行统一的文件和目录操作。
- [XLog](docs/XLog.md) 提供了一个遵循 RFC5424 标准的日志系统，支持多级别输出和内置堆栈追踪。
- [XObject](docs/XObject.md) 提供了对象操作工具集，支持类型判断、函数绑定、方法劫持等功能。
- [XString](docs/XString.md) 提供了字符串处理工具集，支持查找、替换、格式化以及编码转换等功能。
- [XTest](docs/XTest.md) 提供了轻量级测试框架，支持 Jest 集成和独立运行两种模式。
- [XTime](docs/XTime.md) 提供了时间处理工具函数集，支持日期格式化和时间戳转换等常用时间操作。
- [XUtility](docs/XUtility.md) 提供了一组通用工具函数集，支持可执行文件查找和随机数生成等常用操作。

### 平台支持

| Runtime/Platform | 🪟 Windows | 🐧 Linux | 🍎 macOS | 🤖 Android | 📱 iOS | 🌐 Browser |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Node | ✅ | ✅ | ✅ | 🚫 | 🚫 | 🚫 |
| Code | ✅ | ✅ | ✅ | 🚫 | 🚫 | 🚫 |
| Cocos | ✅ | 🛠️ | 🛠️ | 🛠️ | 🛠️ | 🛠️ |
| Unity | ✅ | 🛠️ | ✅ | ✅ | ✅ | 🛠️ |
| Unreal | 🛠️ | 🛠️ | 🛠️ | 🛠️ | 🛠️ | 🛠️ |
| Electron | 🛠️ | 🛠️ | 🛠️ | 🚫 | 🚫 | 🚫 |
| Dom | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🛠️ |
- ✅已支持  🛠️计划中  🚫不适用

## 常见问题

更多问题，请查阅[问题反馈](CONTRIBUTING.md#问题反馈)。

## 项目信息

- [更新记录](CHANGELOG.md)
- [贡献指南](CONTRIBUTING.md)
- [许可协议](LICENSE)