# XEvent

[![NPM](https://img.shields.io/npm/v/io.eframework.unite.utility?label=NPM&logo=npm)](https://www.npmjs.com/package/io.eframework.unite.utility)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-Explore-blue)](https://deepwiki.com/eframework-io/Unite.Utility)
[![Discord](https://img.shields.io/discord/1422114598835851286?label=Discord&logo=discord)](https://discord.gg/XMPx2wXSz3)

提供了轻量级的事件管理器，支持多重监听、单次及泛型回调和批量通知等功能。

## 功能特性

- 事件管理：提供完整的事件注册、注销和通知机制
- 单次回调：可注册执行一次后自动注销的事件回调

## 使用手册

### 1. 管理器

1. 创建管理器

    ```typescript
    // 创建允许多回调的事件管理器（默认模式）
    const eventManager = new XEvent.Manager();

    // 创建单回调模式的事件管理器
    const singleManager = new XEvent.Manager(false);
    ```

2. 查询事件

    ```typescript
    // 获取特定事件的所有回调
    const callbacks = eventManager.Get(1001);
    if (callbacks) {
        console.log(`事件1001有${callbacks.length}个回调`);
    }
    ```

2. 清除所有事件

    ```typescript
    // 清除管理器中的所有事件注册
    eventManager.UnregisterAll();
    ```

### 2. 注册与注销

1. 注册事件回调

    ```typescript
    // 注册普通事件
    eventManager.Register(1001, (data) => {
        console.log('收到事件:', data);
    });

    // 注册一次性事件（触发一次后自动注销）
    eventManager.Register(1002, (data) => {
        console.log('这个回调只会执行一次:', data);
    }, true);
    ```

2. 注销事件回调

    ```typescript
    // 定义回调函数
    const callback = (data) => {
        console.log('收到事件:', data);
    };

    // 注册事件
    eventManager.Register(1001, callback);

    // 注销特定回调
    eventManager.Unregister(1001, callback);

    // 注销事件的所有回调
    eventManager.Unregister(1001);
    ```

### 3. 事件通知

1. 触发事件

    ```typescript
    // 触发事件并传递多个参数
    eventManager.Notify(1002, 'action', 123, { detail: 'info' });
    ```

## 常见问题

更多问题，请查阅[问题反馈](../CONTRIBUTING.md#问题反馈)。

## 项目信息

- [更新记录](../CHANGELOG.md)
- [贡献指南](../CONTRIBUTING.md)
- [许可协议](../LICENSE)
