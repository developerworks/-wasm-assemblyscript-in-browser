# 项目说明 Description

简要概括的说明了项目的基本上手过程, 包括一些常用的工具使用方法

How to run wasm with assemblyscript in browser, the process of run wasm in browser.

## 创建项目,安装依赖 Create project, install deps

```shell
mkdir tmp && cd tmp
npm init -y
npm install -E assemblyscript
npx asinit .
```

## 开发用 Web 服务器 Dev Web Server support localhost `https`

使用 `Caddy` 作为开发服务器, 零配置的 `HTTPS` 支持, 方便 HTTPS 的开发和测试环境使用

Use `Caddy` as dev web server, zero `HTTPS` config, just for dev env

下载静态编译的可执行程序, 并放置到 `$PATH` 中

Download static runnable program into your `$PATH`

https://caddyserver.com/download

在 `Caddyfile` 所在目录运行

Run caddy in a folder that `Caddyfile` located in

```shell
caddy run
```

## AssemblyScript 传递字符串的问题 Problem about passing string type to WASM from assemblyscript

默认情况下, `AssemblyScript` 只能像 `WASM` 模块传递数字类型的, 
比如 `u8`, `u16`, `u32`, `i8`, `i16`, `i32` 等数据类型. 编译结果 `WASM`
并没有导出 `debug.js`/`release.js` 用到的运行时辅助函数, 
需要加 `--exportRuntime` 选项导出, 否则会出现如下错误:

By default, `AssemblyScript` just support number data types such as  `u8`, `u16`, `u32`, `i8`, `i16`, `i32`,
The result wasm file of compile was not export the helper function that `debug.js/release.js` needed, so we need 
add `--exportRuntime` compiler options, if not, the error will be reported in browser:

```shell
debug.js:41 Uncaught TypeError: exports.__new is not a function
    at __lowerString (debug.js:41:25)
    at sha1 (debug.js:22:11)
    at (index):9:21
```

因此默认的编译命令需要修改:

Change default npm command to add `--exportRuntime` option:

```shell
# 默认
asc assembly/index.ts --target debug
# 修改后
asc assembly/index.ts --target debug --exportRuntime
```

命令可以在 `package.json` 的 `scripts` 增加, 方便重复执行.

## Hash 函数库的使用 Add as-hmac-sha2 npm package for test wasm with assemblyscript

```shell
# 安装
npm install -E as-hmac-sha2 
```

## Git 主分支名称

`Github` 主分支由默认的 `master` 改为 `main`, 
初始化 `Git` 代码库之前执行如下命令设置默认主分支名称

Github master brunch name from `master` changed to `main`, set default branch name when `git init`

```shell
git config --global init.defaultBranch main
```

## 运行 Run the example

```shell
# 1. Download caddy to path
# 2. start web server
npm start
# 3. stop web server
npm stop
```