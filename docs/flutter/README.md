---
title: flutter
date: 2021-08-16
tags: flutter
categories: 
 - flutter
---
---
# flutter

## 状态组件
```dart
StatelessWidget // 无状态组件 

StatefulWidget // 有状态组件
```
# flutter插件地址
```dart
https://pub.dev.com
```
# 快捷键
```text
1. 快速创建Widget：在dart文件中输入stf或stl出现提示后按回车即可  
1. 快速修复：command + .  
1. 自动生成构造函数：选中 final 参数，快捷键：option + 回车  
1. 添加父组件、变为子组件、删除子组件：option+回车  
1. 万能的搜索：双击shift  
1. 查看最近打开的文件：command + E  
1. 重命名：fn+shift+f6  
1. 查看当前类结构：command + fn + f12  
1. 查看源码：将光标放到要查看源码的类名或方法名上，长按command 然后的点击  
1. 查看类的子类：选中要查看的类，然后：command + B 或 option + command + B  
1. 将代码更新到模拟器上：选中模拟器然后 command + R  
1. 导入类的快捷键：将光标放在要导入类的上面，然后按 option + enter  
1. 前进后退：当跟踪代码的时候，经常跳转到其他类，后退快捷键：option+command+方向左键，前进快捷键：option+command+方向右键  
1. 全局搜索：command + shift + F  
1. 全局替换：command + shift + R  
1. 查找引用： option + shift + F7  
```
# flutter Chip
```dart
Chip(
  avatar: Icon(Icons.photo),
  label: Text('林深时见鹿')
)
```
## 分割线
```dart
Divider()
```
### 简单使用
```dart
body: Container(
          decoration: BoxDecoration(color: Colors.white),
          alignment: Alignment.center,
          child: Column(
            children: [
              Text(
                'i am text',
                style: textStyle,
              ),
              Icon(
                Icons.android,
                size: 50,
                color: Colors.amber,
              ),
              CloseButton(),
              BackButton(),
              Chip(avatar: Icon(Icons.photo), label: Text('林深时见鹿')),
              Divider(
                  color: Colors.deepOrange,
                  height: 10,
                  indent: 10,
                  endIndent: 10),
              Card(
                color: Colors.amberAccent,
                margin: EdgeInsets.all(10),
                elevation: 5,
                child: Container(
                  padding: EdgeInsets.all(10),
                  child: Text(
                    '我叫林深时见鹿',
                    style: textStyle,
                  ),
                ),
              ),
              AlertDialog(
                title: Text('流年是大帅比'),
                content: Text('流年是大帅比'),
              )
            ],
          ),
        ),
      ),
```
## StatefulWidget有状态组件
#### 常用组件
```dart
// 材料设计app组件 通常放在页面的根节点 
MaterialApp
// 内置了布局组件
Scaffold
// app顶部导航栏
AppBar
// app底部导航栏
BottomNavigationBar
// 刷新指示器
RefreshIndicator
// 图片组件
Image
// 输入框
TextField

PageView


import 'package:flutter/material.dart';

class StatefulGroup extends StatefulWidget {
  @override
  _StatefulGroupState createState() => _StatefulGroupState();
}

class _StatefulGroupState extends State<StatefulGroup> {
  int _currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    TextStyle textStyle = TextStyle(fontSize: 20);
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('论述'),
        ),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home, color: Colors.grey),
                activeIcon: Icon(
                  Icons.home,
                  color: Colors.deepOrange,
                ),
                title: Text('首页')),
            BottomNavigationBarItem(
                icon: Icon(Icons.list, color: Colors.grey),
                activeIcon: Icon(
                  Icons.list,
                  color: Colors.deepOrange,
                ),
                title: Text('列表')),
          ],
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: Text('点我'),
        ),
        body: _currentIndex == 0
            ? RefreshIndicator(
                child: ListView(
                  children: [
                    Container(
                      decoration: BoxDecoration(color: Colors.white),
                      alignment: Alignment.center,
                      child: Column(
                        children: [
                          Image.network(
                            'https://img2.baidu.com/it/u=2537426187,1713205820&fm=26&fmt=auto&gp=0.jpg',
                            width: 100,
                            height: 100,
                          ),
                          TextField(
                            decoration: InputDecoration(
                                contentPadding: EdgeInsets.fromLTRB(5, 0, 0, 0),
                                hintText: '请输入',
                                hintStyle: TextStyle(fontSize: 15)),
                          ),
                          Container(
                            height: 100,
                            margin: EdgeInsets.only(top: 10),
                            decoration:
                                BoxDecoration(color: Colors.lightBlueAccent),
                            child: PageView(
                              children: [
                                _item('page1', Colors.deepOrange),
                                _item('page2', Colors.green),
                                _item('page3', Colors.greenAccent),
                                _item('page4', Colors.redAccent),
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
                onRefresh: _handleRefresh)
            : Text('我是列表'),
      ),
    );
  }

  Future<Null> _handleRefresh() async {
    await Future.delayed(Duration(milliseconds: 200));
    return null;
  }

  _item(String title, Color color) {
    return Container(
      alignment: Alignment.center,
      decoration: BoxDecoration(color: color),
      child: Text(
        title,
        style: TextStyle(fontSize: 22, color: Colors.white),
      ),
    );
  }
}

```

## 如何在flutter进行布局开发
```dart
/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company:
 * @Author: 林深
 * @Date: 2021-08-16 20:50:46
 * @LastEditors: 林深
 * @LastEditTime: 2021-08-16 21:42:07
 */
import 'package:flutter/material.dart';

// void main() {
//   runApp(StateFullGroupPage());
// }

class FlutterLayoutPage extends StatefulWidget {
  @override
  _FlutterLayoutPageState createState() => _FlutterLayoutPageState();
}

class _FlutterLayoutPageState extends State<FlutterLayoutPage> {
  int _currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    TextStyle textStyle = TextStyle(fontSize: 20);
    return MaterialApp(
      title: '如何在flutter进行布局开发',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('如何在flutter进行布局开发'),
        ),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home, color: Colors.grey),
                activeIcon: Icon(
                  Icons.home,
                  color: Colors.deepOrange,
                ),
                title: Text('首页')),
            BottomNavigationBarItem(
                icon: Icon(Icons.list, color: Colors.grey),
                activeIcon: Icon(
                  Icons.list,
                  color: Colors.deepOrange,
                ),
                title: Text('列表')),
          ],
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: Text('点我'),
        ),
        body: _currentIndex == 0
            ? RefreshIndicator(
                child: ListView(
                  children: [
                    Container(
                      decoration: BoxDecoration(color: Colors.white),
                      alignment: Alignment.center,
                      child: Column(
                        children: [
                          Row(
                            children: [
                              ClipOval(
                                child: SizedBox(
                                  height: 100,
                                  width: 100,
                                  child: Image.network(
                                      'https://img2.baidu.com/it/u=2537426187,1713205820&fm=26&fmt=auto&gp=0.jpg'),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.all(10),
                                child: ClipRRect(
                                    // 圆角
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(10)),
                                    child: Opacity(
                                      opacity: 0.6,
                                      child: Image.network(
                                        'https://img2.baidu.com/it/u=2537426187,1713205820&fm=26&fmt=auto&gp=0.jpg',
                                        width: 100,
                                        height: 100,
                                      ),
                                    )),
                              )
                            ],
                          ),
                          Container(
                              height: 100,
                              margin: EdgeInsets.all(10),
                              // decoration:
                              //     BoxDecoration(color: Colors.lightBlueAccent),
                              child: PhysicalModel(
                                color: Colors.transparent,
                                borderRadius:
                                    BorderRadius.all(Radius.circular(10)),
                                clipBehavior: Clip.antiAlias, // 抗锯齿
                                child: PageView(
                                  children: [
                                    _item('page1', Colors.deepOrange),
                                    _item('page2', Colors.green),
                                    _item('page3', Colors.greenAccent),
                                    _item('page4', Colors.redAccent),
                                  ],
                                ),
                              ))
                        ],
                      ),
                    ),
                    Column(
                      children: [
                        FractionallySizedBox(
                          widthFactor: 1,
                          alignment: Alignment.center,
                          child: Container(
                            decoration: BoxDecoration(color: Colors.deepOrange),
                            child: Text('宽度撑满'),
                          ),
                        )
                      ],
                    ),
                    Stack(
                      children: [
                        Image.network(
                          'https://img2.baidu.com/it/u=2537426187,1713205820&fm=26&fmt=auto&gp=0.jpg',
                          width: 100,
                          height: 100,
                        ),
                        Positioned(
                          left: 0,
                          bottom: 0,
                          child: Image.network(
                            'https://img2.baidu.com/it/u=2537426187,1713205820&fm=26&fmt=auto&gp=0.jpg',
                            width: 36,
                            height: 36,
                          ),
                        )
                      ],
                    ),
                    Wrap(
                      spacing: 8,
                      runSpacing: 6,
                      // 创建一个wrap布局，从左向右排列，会自动换行
                      children: [
                        _chip('flutter'),
                        _chip('学习'),
                        _chip('过程'),
                        _chip('flutter'),
                        _chip('学习'),
                        _chip('过程')
                      ],
                    )
                  ],
                ),
                onRefresh: _handleRefresh)
            : Column(
                children: [
                  Text('林深'),
                  Expanded(
                      child: Container(
                    decoration: BoxDecoration(color: Colors.red),
                    child: Text('拉升填满高度'),
                  ))
                ],
              ),
      ),
    );
  }

  Future<Null> _handleRefresh() async {
    await Future.delayed(Duration(milliseconds: 200));
    return null;
  }

  _item(String title, Color color) {
    return Container(
      alignment: Alignment.center,
      decoration: BoxDecoration(color: color),
      child: Text(
        title,
        style: TextStyle(fontSize: 22, color: Colors.white),
      ),
    );
  }

  _chip(String label) {
    return Chip(
      label: Text(label),
      avatar: CircleAvatar(
        backgroundColor: Colors.blue.shade900,
        child: Text(
          label.substring(0, 1),
          style: TextStyle(fontSize: 10),
        ),
      ),
    );
  }
}

```
## 如何创建和使用flutter路由和导航
```dart
/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company:
 * @Author: 林深
 * @Date: 2021-08-16 20:50:46
 * @LastEditors: 林深
 * @LastEditTime: 2021-08-16 21:42:07
 */
import 'package:flutter/material.dart';
import 'package:flutter_color_plugin/flutter_color_plugin.dart';
import 'package:study_app/statefull_group_page.dart';

import 'flutter_layout_page.dart';
import 'less_group_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: Text('如何创建和使用flutter路由和导航'),
          ),
          body: RouterNavigator(),
        ),
        routes: <String, WidgetBuilder>{
          'less': (BuildContext context) => LessGroupPage(),
          'ful': (BuildContext context) => StatefulGroup(),
          'layout': (BuildContext context) => FlutterLayoutPage(),
        });
  }
}

class RouterNavigator extends StatefulWidget {
  RouterNavigator({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _RouterNavigator createState() => _RouterNavigator();
}

class _RouterNavigator extends State<RouterNavigator> {
  bool byName = false;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          SwitchListTile(
              title: Text('${byName ? '' : '不'}通过路由名跳转'),
              value: byName,
              onChanged: (value) {
                setState(() {
                  byName = value;
                });
              }),
          _item('林深1', LessGroupPage(), 'less'),
          _item('林深2', StatefulGroup(), 'ful'),
          _item('林深3', FlutterLayoutPage(), 'layout'),
        ],
      ),
    );
  }

  _item(String title, page, String routeName) {
    return Container(
      child: RaisedButton(
        onPressed: () {
          if (byName) {
            Navigator.pushNamed(context, routeName);
          } else {
            Navigator.push(
                context, MaterialPageRoute(builder: (context) => page));
          }
        },
        child: Text(title),
      ),
    );
  }
}

```
## 如何检测用户手势以及点击事件
```dart
import 'package:flutter/material.dart';

class GesturePage extends StatefulWidget {
  @override
  _GesturePageState createState() => _GesturePageState();
}

class _GesturePageState extends State<GesturePage> {
  String printString = '';
  double moveX = 0, moveY = 0;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('如何检测用户手势以及点击事件'),
          leading: GestureDetector(
            onTap: () {
              Navigator.pop(context);
            },
            child: Icon(Icons.arrow_back_ios),
          ),
        ),
        body: FractionallySizedBox(
          widthFactor: 1,
          child: Stack(
            children: [
              Column(
                children: [
                  GestureDetector(
                    onTap: () => _printMessage('点击'),
                    onDoubleTap: () => _printMessage('双击'),
                    onLongPress: () => _printMessage('长按'),
                    onTapCancel: () => _printMessage('取消点击'),
                    onTapUp: (e) => _printMessage('手指松开'),
                    onTapDown: (e) => _printMessage('手指按下'),
                    child: Container(
                      padding: EdgeInsets.all(60),
                      decoration: BoxDecoration(color: Colors.red),
                      child: Text(
                        '点我',
                        style: TextStyle(fontSize: 36, color: Colors.white),
                      ),
                    ),
                  ),
                  Text(printString)
                ],
              ),
              Positioned(
                left: moveX,
                top: moveY,
                child: GestureDetector(
                  onPanUpdate: (e) => _deMove(e),
                  child: Container(
                    width: 72,
                    height: 72,
                    decoration: BoxDecoration(
                        color: Colors.amberAccent,
                        borderRadius: BorderRadius.circular(36)),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  _printMessage(String msg) {
    setState(() {
      printString += ' ,$msg';
    });
  }

  _deMove(DragUpdateDetails e) {
    setState(() {
      moveY += e.delta.dy;
      moveX += e.delta.dx;
    });
  }
}

```

## 如何打开第三方应用
```dart

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class LauncherPage extends StatefulWidget {
  @override
  _LauncherPageState createState() => _LauncherPageState();
}

const _url = 'http://ruochencn.com/';

class _LauncherPageState extends State<LauncherPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text('如何打开第三方应用'),
          leading: GestureDetector(
            onTap: () {
              Navigator.pop(context);
            },
            child: Icon(Icons.arrow_back_ios),
          )),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            RaisedButton(
              onPressed: () => _launchURL(),
              child: Text('打开浏览器'),
            ),
            RaisedButton(
              onPressed: () => _openMap(),
              child: Text('打开地图'),
            ),
          ],
        ),
      ),
    );
  }

  void _launchURL() async => await canLaunch(_url)
      ? await launch(_url)
      : throw 'Could not launch $_url';
  void _openMap() async {
    const url = 'http://maps.apple.com/?ll=52.32,4.917';
    await launch(url);
  }
}

```

## flutter生命周期函数

__初始化时期__
+ createState
+ initState

__更新期间__
+ didChangeDependencies
+ build
+ didUpdateWidget

__销毁期__
+ deactivate+
+ dispose
```dart
import 'package:flutter/material.dart';

// 1.初始化时期
// createState、initState
// 2.更新期间
// didChangeDependencies、build、didUpdateWidget
// 3.销毁期
// deactivate、dispose
class FlutterWidgetLifecycel extends StatefulWidget {
  // 当我们构建一个新的StatefulWidget时，这个会立即调用createState();
  // 并且这个方法必须被覆盖
  @override
  _FlutterWidgetLifecycelState createState() => _FlutterWidgetLifecycelState();
}

class _FlutterWidgetLifecycelState extends State<FlutterWidgetLifecycel> {
  int _count = 0;
  // 这是创建widget时调用的除构造方法外的第一个方法
  // 这个方法中通常会做一些初始化工作，比如channel的初始化，监听器的初始化等
  @override
  void initState() {
    print('---initState---');
    super.initState();
  }

  // 当依赖的State对象改变时会调用
  // a.在第一次构建widget时，在initState()之后立即调用此方法
  // b.如果的StatefulWidget依赖 于InheritedWidget,那么当当前state所依赖于InheritedWidget中的变量改变时会在此调用它
  // InheritedWidget可以高效的将数据在Widget树中向下传递、共享
  @override
  void didChangeDependencies() {
    print('---didChangeDependencies---');
    super.didChangeDependencies();
  }
  
  // 这是一个必须实现的方法，在这里实现你要呈现的页面内容
  // 它会在didChangeDependencies()之后立即调用
  // 另外当调用setState后也会在此调用该方法
  @override
  Widget build(BuildContext context) {
    print('---build---');
    return Scaffold(
      appBar: AppBar(
        title: Text('生命周期'),
        leading: BackButton(),
      ),
      body: Center(
          child: Column(
        children: [
          RaisedButton(
            onPressed: () {
              setState(() {
                _count += 1;
              });
            },
            child: Text(
              '点我',
              style: TextStyle(fontSize: 26),
            ),
          ),
          Text(_count.toString())
        ],
      )),
    );
  }
  // 这是一个不常用到的生命周期方法，当父组件需要重新绘制时才会调用
  // 该方法会携带一个oldWidget参数，可以将其与当前的widget进行对比 以便执行一些额外的逻辑
  @override
  void didUpdateWidget(covariant FlutterWidgetLifecycel oldWidget) {
    print('---didUpdateWidget---');
    super.didUpdateWidget(oldWidget);
  }
  // 很少使用，在组件被移除时调用在dispose之前调用
  @override
  void deactivate() {
    print('---deactivate---');
    super.deactivate();
  }
  // 通常，组件被销毁时调用
  // 通常在该方法中执行一些资源的释放工作，比如监听器的卸载，channel的销毁等
  @override
  void dispose() {
    print('---dispose---');
    // TODO: implement dispose
    super.dispose();
  }
}

```
## 如何获取flutter应用的生命周期
```dart
/*
 * @Description: 不要在该奋斗的年纪选择去偷懒，只有度过一段连自己都被感动了的日子，才会变成那个最好的自己
 * @version: 0.0.1
 * @Company: 快乐青年
 * @Author: 李凯
 * @Date: 2021-08-21 16:42:49
 * @LastEditors: 李凯
 * @LastEditTime: 2021-08-21 16:57:39
 */

import 'package:flutter/material.dart';


// widgetsBindingObserver:是一个widget绑定观察器，通过它我们可以监听应用的生命周期你、语言等变化
class AppLifecycel extends StatefulWidget {
  AppLifecycel({Key key}) : super(key: key);

  @override
  _AppLifecycelState createState() => _AppLifecycelState();
}

class _AppLifecycelState extends State<AppLifecycel> with WidgetsBindingObserver {
  @override
  void initState() {
    WidgetsBinding.instance.addObserver(this);
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Container(
       child: Scaffold(
         appBar: AppBar(
            title: Text('flutter应用生命周期'),
            leading: BackButton(),
          ),
          body: Container(
            child: Text('flutter应用生命周期'),
          ),
       ),
    );
  }
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    print('state=$state');
    if (state == AppLifecycleState.paused) {
      print('app进入后台');
    } else if (state == AppLifecycleState.resumed){
      print('app进入前台');
    } else if (state == AppLifecycleState.inactive) {
      print('来电话');
    }
  }
  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }
}
```

## flutter 如何修改主题
```dart
/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company:
 * @Author: 林深
 * @Date: 2021-08-16 20:50:46
 * @LastEditors: 李凯
 * @LastEditTime: 2021-08-21 17:12:26
 */
import 'package:flutter/material.dart';
import 'package:study_app/app_lifecycel.dart';
import 'package:study_app/gesture_page.dart';
import 'package:study_app/launcher_page.dart';
import 'package:study_app/statefull_group_page.dart';

import 'flutter_layout_page.dart';
import 'flutter_widget_lifecycel.dart';
import 'less_group_page.dart';

void main() {
  runApp(DynamicTheme());
}
class DynamicTheme extends StatefulWidget {
  @override
  _DynamicThemeState createState() => _DynamicThemeState();
}

class _DynamicThemeState extends State<DynamicTheme> {
  Brightness _brightness = Brightness.light;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          brightness: _brightness,
          primarySwatch: Colors.blue,
          // visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: Text('如何创建和使用flutter路由和导航'),
          ),
          body: Column(
            children: [
              RaisedButton(
                onPressed: () {
                setState(() {
                  if (_brightness == Brightness.dark) {
                    _brightness = Brightness.light;
                  } else {
                    _brightness = Brightness.dark;
                  }
                });
              },
                child: Text('切换主题'),
              ),
              RouterNavigator()
            ],
          ),
        ),
        routes: <String, WidgetBuilder>{
          'less': (BuildContext context) => LessGroupPage(),
          'ful': (BuildContext context) => StatefulGroup(),
          'layout': (BuildContext context) => FlutterLayoutPage(),
          'GesturePage': (BuildContext context) => GesturePage(),
          'LauncherPage': (BuildContext context) => LauncherPage(),
          'FlutterWidgetLifecycel': (BuildContext context) => FlutterWidgetLifecycel(),
          'AppLifecycel': (BuildContext context) => AppLifecycel(),
        });
  }
}

class RouterNavigator extends StatefulWidget {
  RouterNavigator({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _RouterNavigator createState() => _RouterNavigator();
}

class _RouterNavigator extends State<RouterNavigator> {
  bool byName = false;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          SwitchListTile(
              title: Text('${byName ? '' : '不'}通过路由名跳转'),
              value: byName,
              onChanged: (value) {
                setState(() {
                  byName = value;
                });
              }),
          _item('林深1', LessGroupPage(), 'less'),
          _item('林深2', StatefulGroup(), 'ful'),
          _item('林深3', FlutterLayoutPage(), 'layout'),
          _item('GesturePage', GesturePage(), 'GesturePage'),
          _item('LauncherPage', LauncherPage(), 'LauncherPage'),
          _item('FlutterWidgetLifecycel', FlutterWidgetLifecycel(), 'FlutterWidgetLifecycel'),
          _item('AppLifecycel', AppLifecycel(), 'AppLifecycel'),
        ],
      ),
    );
  }

  _item(String title, page, String routeName) {
    return Container(
      child: RaisedButton(
        onPressed: () {
          if (byName) {
            Navigator.pushNamed(context, routeName);
          } else {
            Navigator.push(
                context, MaterialPageRoute(builder: (context) => page));
          }
        },
        child: Text(title),
      ),
    );
  }
}

```
