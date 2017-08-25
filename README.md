# 使用类注入

注入类的单例实例配置方法如下
`providers: [{ provide: MyService, useClass: MyService }]`
这种配置等价于(即使用NgModule注入)
`providers: [MyService]`

需要注意以下:

#### `provide`配置方法会接收两个键Key
#### 第一个：`provide`:键是这个类的别名.
#### 第二个：`useClass`:用来指出注入的类以及如何注入
这种方法注入的会每次创建同一个实例。

假如创建服务时需要传参数，需要改用工厂！
