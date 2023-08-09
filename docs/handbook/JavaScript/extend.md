## 继承

### 一、原型链继承

每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针，那么，假如我们让原型对象等于另一个类型的实例，结果会是怎么样呢？显然，此时的原型对象将包含一个指向另一个原型的指针，相应的，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条  

继承思想：利用原型让一个引用类型继承另一个引用类型的属性和方法  

核心：子类的原型等于父类的实例  

原型链继承的缺点：  
1.包含引用类型值的原型，该值会被所有实例共享，修改则会影响到其他的实例  
2.在创建子类型的实例时，不能向超类型的构造函数中传递参数 

```js
// 原型链继承
function SuperType() {
    this.propetry = true
}
SuperType.prototype.getSuperValue = function() {
    return this.propetry
}
function SubType() {
    this.subPropety = false
}

// 继承了SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
    return this.subPropetype
}

var instance = new SubType()
console.log(instance.getSuperValue())   //true
```
### 一、借用构造函数继承

在子类型的构造函数的内部调用超类型构造函数，通过 apply，call 方法实现

优点： 可以在在类型构造函数中向超类型构造函数传递参数  

缺点：方法都在构造函数中定义，即定义了很多功能相同的函数，函数复用无从谈起  

```js
// 原型链继承
function SuperType(name) {
    this.name = name
}
function SubType() {
    // 继承了SuperType,同时还传递了参数
    SuperType.call(this, 'elvis')
    // 设置示例的属性
    this.age = 20
}

var instance = new SubType()
console.log(instance..name)   // elvis
console.log(instance..age)   // 20
```

### 三、组合使用原型链和构造函数继承

使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承，这样，既能通过在原型上定义方法实现函数的复用，又能够保证每个实例有自己的属性。即每个实例都会有自己一份实例属性的副本，但同时又共享者对方法的引用，最大限度的节省了内存，另外，这种混成模式还支持向构造函数传递参数。  

缺点：无论什么情况下，都会调用两次超类型构造函数，一次是在创建子类型原型的时候，一次是在子类型构造函数内部  

```js
// 组合继承
function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function() {
    console.log(this.name)
}

function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

SubType.prototype = new SuperType() // 继承方法
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

var instance1 = new SubType('elvis', 20)
instance1.colors.push('black')

console.log(instance1.colors)  // ['red', 'blue', 'green', 'black']
instance1.sayName() // elvis
instance1.sayAge() // 20

var instance2 = new SubType('xixi', 22)

console.log(instance2.colors)  // ['red', 'blue', 'green']
instance2.sayName() // xixi
instance2.sayAge() // 22
```

### 四、原型式继承

借助原型，可以基于已有的对象创建新的对象，同时还不必因此创建自定义类型  

注意:  
ECMAScript5 通过新增 Object.create（）方法规范了原型式继承，这个方法接收两个参数：一个用作新对象原型的对象，另一个为新对象定义额外属性的对象（可选参数）。  
在只传入一个参数的情况下，Object.create（）与 object（）的行为相同。  

```js
// 原型式继承
function object(o) {
    function F() {
        F.prototype = o
    }
    return new F()
}
```

### 五、寄生式继承

创建一个仅用于封装继承过程的函数，该函数内部以某种方式来增强对象，最后再像真的是它做了所有工作一样返回对象。  

缺点：使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，这一点与构造函数模式类似。  
```js
// 寄生式继承
function createAnother(original) {
    var clone = Object(original)
    clone.sayHi = function() {
        console.log('hi hi')
    }
    return clone
}
```

### 六、寄生组合式继承

不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已，本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。  

优点：解决了组合使用原型链和构造函数继承两次调用超类型构造函数的缺点。   
```js
// 寄生组合式继承
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype) // 创建对象
    prototype.constructor = subType // 增强对象
    subType.prototype = prototype // 指定对象
}

function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function() {
    console.log(this.name)
}

function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function() {
    console.log(this.age)
}
```