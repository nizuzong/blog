---
title: flutter组件
date: 2021-08-23
tags: flutter组件
categories: 
 - flutter组件
---
---

## Container组件

| 名称 | 功能 |
| ---- | ---- |
| alignment | ```topCenter```：顶部居中对齐```topLeft```：顶部左对齐```topRight```：顶部右对齐```center```：水平垂直居中对齐```centerLeft```：垂直居中水平居左对齐```centerRight```：垂直居中水平居右对齐```bottomCenter```底部居中对齐```bottomLeft```：底部居左对齐```bottomRight```：底部居右对齐 |
| decoration | BoxDecoration装饰器 |
| margin | ```margin```属性是表示```Container```与外部其他组件的距离。```EdgeInsets.all(20.0)``` | 
| padding | ```padding```就是```Container```的内边距，指```Container```边缘与```Child```之间的距离```padding:EdgeInsets.all(10.0)``` |
| transform | 让```Container```容易进行一些旋转之类的 ```transform:Matrix4.rotationZ(0.2)``` |
| height | 容器高度 |
| width | 容器宽度 |
| child | 容器子元素 |

## Text组件

|  名称   | 功能  |
|  ----  | ----  |
| textAlign  | 文本对齐方式（center居中，```left```左对齐，```right```右对齐，```justify```两端对齐） |
| textDirection  | 文本方向（ltr从左至右，rtl从右至左） |
| overflow  | 文字超出屏幕之后的处理方式（```clip```裁剪，```fade```渐隐，```ellipsis```省略号） |
| textScaleFactor  | 字体显示倍率 |
| maxLines  | 文字显示最大行数 |
| style  | 字体的样式设置 |

__TextStyle__

| 名称 | 功能 |
| ---- | ---- |
| decoration | 文字装饰线（```none```没有线，```lineThrough```删除线，```overline```上划线，```underline```下划线） |
| decorationColor | 文字装饰线颜色 |
| decorationStyle | 文字装饰线风格（```dashed```,```dotted```虚线，```double```两根线，```solid```一根实线，```wavy```波浪线）|
| wordSpacing | 单词间隙（如果是负值，会让单词变得更紧凑) |
| letterSpacing | 字母间隙（如果是负值，会让字母变得更紧凑）|
| fontStyle | 文字样式（```italic```斜体，```normal```正常体） |
| fontSize | 文字大小 |
| color | 文字颜色 |
| fontWeight | 字体粗细（```bold```粗体，```normal```正常体） |

## Image组件
+ Image.asset，本地图片
+ Image.network，远程图片

__Image组件的常用属性__
|  名称   | 类型  | 说明 |
|  ----  | ----  | ---- |
| alignment | Alignment | 图片的对齐方式 |
| color和colorBlendMode |  | 设置图片的背景颜色，通常和```colorBlendMode```配合一起使用，这样可以是图片颜色和背景色混合。上面的图片就是进行了颜色的混合，绿色背景和图片红色的混合 |
| fit | BoxFit | ```fit```属性用来控制图片的拉伸和挤压，这都是根据父容器来的。```BoxFit.fill```:全图显示，图片会被拉伸，并充满父容器。```BoxFit.contain```:全图显示，显示原比例，可能会有空隙。```BoxFit.cover```：显示可能拉伸，可能裁切，充满（图片要充满整个容器，还不变形）```BoxFit.fitWidth```：宽度充满（横向充满），显示可能拉伸，可能裁切。```BoxFit.fitHeight```：高度充满（竖向充满）,显示可能拉伸，可能裁切。```BoxFit.scaleDown```：效果和```contain```差不多，但是此属性不允许显示超过源图片大小，可小不可大。|
| repeat | 平铺 | ```ImageRepeat.repeat```:横向和纵向都进行重复，直到铺满整个画布。```ImageRepeat.repeatX```:横向重复，纵向不重复。```ImageRepeat.repeatY```：纵向重复，横向不重复。 |
| width |  | 宽度一般结合```ClipOval```才能看到效果 |
| height |  | 高度一般结合```ClipOval```才能看到效果 |


## ListView

__列表参数__
|  名称   | 类型  | 说明 |
|  ----  | ----  | ---- |
| scrollDirection | Axis | ```Axis.horizontal```水平列表```Axis.vertical```垂直列表 |
| padding | EdgeInsetsGeometry | 内边距 |
| resolve | bool | 组件反向排序 |
| children | List | 列表元素 |

__基础列表__
```dart
ListTile(
  leading: Icon(Icons.shopping_cart, color: Colors.yellow),
  trailing: Icon(Icons.shopping_cart,color: Colors.amber,size: 40,),
    title: Text(
      '这是测试组件',
      style: TextStyle(color: Colors.deepOrange),
    ),
      subtitle: Text('林深时见鹿'),
    ),
      ListTile(
        leading: Image.network('https://img2.baidu.com/it/u=2571759023,2351002417&fm=26&fmt=auto&gp=0.jpg'),
        title: Text('这是测试组件'),
        subtitle: Text('林深时见鹿'),
      ),
      ListTile(
        leading: Icon(Icons.shopping_cart),
        title: Text('这是测试组件'),
        subtitle: Text('林深时见鹿'),
      ),
      ListTile(
        leading: Icon(Icons.shopping_cart),
        title: Text('这是测试组件'),
        subtitle: Text('林深时见鹿'),
    ),
  ],
)
```
__水平列表__
```dart
Container(
              height: 100,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: [
                  Container(
                    width: 180.0,
                    height: 180.0,
                    color: Colors.deepOrange,
                    child: ListView(
                      children: [
                        Image.network(
                            'https://img0.baidu.com/it/u=3016898859,3631141633&fm=26&fmt=auto&gp=0.jpg'),
                      ],
                    ),
                  ),
                  Container(
                    width: 180.0,
                    height: 180.0,
                    color: Colors.amber,
                  ),
                  Container(
                    width: 180.0,
                    height: 180.0,
                    color: Colors.grey,
                  ),
                  Container(
                    width: 180.0,
                    height: 180.0,
                    color: Colors.blue,
                  ),
                  Container(
                    width: 180.0,
                    height: 180.0,
                    color: Colors.blueAccent,
                  ),
                ],
              ),
            )
```
## 动态列表
```dart
class HomeContent extends StatelessWidget {
  List list = new List();
  HomeContent({Key key}) : super(key: key) {
    for (var i = 1; i < 20; i++) {
      list.add('林深见了$i条鹿');
    }
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: list.length,
      itemBuilder: (context, index) {
        return ListTile(
          leading: Icon(Icons.account_circle),
          title: Text('${list[index]}'),
        );
      },
    );
  }
}
```

## GridView组件

1. 可以通过```GridView.count```实现网格布局
2. 通过```GridView.builder```实现网格布局

__常用属性：__

|  名称   | 类型  | 说明 |
|  ----  | ----  | ---- |
| scrollDirection | Axis | 滚动方法 |
| padding | EdgeInsetsGeometry | 内边距 |
| resolve | bool | 组件反向排序 |
| crossAxisSpacing | double | 水平子```Widget```之间间距 |
| mainAxisSpacing | double | 垂直子```Widget```之间间距 |
| crossAxisCount | int | 一行的```Widget```数量 |
| childAspectRatio | double | 子```Widget```宽高比例 |
| children |  | [] |
| gridDelegate | ```SliverGridDelegateWithFix``` ```edCrossAxisCount```（常用）```SliverGridDelegateWithMax``` ```CrossAxisExtent``` | 控制布局主要用在```GridView.builder```里面 |
