module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "for-direction":"error",//强制 “for” 循环中更新子句的计数器朝着正确的方向移动
        "getter-return":"error",//强制在 getter 属性中出现一个 return 语句
        "no-await-in-loop":"error",//禁止在循环中 出现 await
        "no-compare-neg-zer":"error",//禁止与 -0 进行比较
        "no-cond-assign":[//禁止在条件语句中出现赋值操作符
        "error",
        "always"
        ],
        "no-console":[//禁用 console
        "error"
    //      { "allow": ["warn", "error"] }
        ],
        "no-constant-condition":"error",//禁止在条件中使用常量表达式
        "no-control-regex":"error",//禁止在正则表达式中使用控制字符
        "no-debugger":"error",//禁用 debugger
        "no-dupe-args":"error",//禁止在 function 定义中出现重复的参数
        "no-dupe-keys":"error",//禁止在对象字面量中出现重复的键
        "no-duplicate-case":"error",//禁止重复 case 标签
        "no-empty":"error",//禁止空块语句
        "no-empty-character-class":"error",//禁止在正则表达式中出现空字符集
        "no-ex-assign":"error",//禁止对 catch 子句中的异常重新赋值
        "no-extra-boolean-cast":"error",//禁止不必要的布尔类型转换
        "no-extra-parens":"error",//禁止冗余的括号
        "no-extra-semi":"error",//禁用不必要的分号
        "no-func-assign":"error",//禁止对 function 声明重新赋值
        "no-inner-declarations":"error",//禁止在嵌套的语句块中出现变量或 function 声明
        "no-invalid-regexp":"error",//禁止在 RegExp 构造函数中出现无效的正则表达式
        "no-irregular-whitespace":"error",//禁止不规则的空白
        "no-obj-calls":"error",//禁止将全局对象当作函数进行调用
        "no-prototype-builtins":"error",//禁止直接使用 Object.prototypes 的内置属性
        "no-regex-spaces":"error",//禁止正则表达式字面量中出现多个空格
        "no-sparse-arrays": "error",//禁用稀疏数组
        "no-template-curly-in-string":"error",//禁止在常规字符串中出现模板字面量占位符语法
        "no-unexpected-multiline":"error",//禁止使用令人困惑的多行表达式
        "no-unreachable":"error",//禁止在 return、throw、continue 和 break 语句后出现不可达代码
        "no-unsafe-finally":"error",//禁止在 finally 语句块中出现控制流语句
        "no-unsafe-negation":"error",//禁止对关系运算符的左操作数使用否定操作符
        "use-isnan":"error",//要求调用 isNaN()检查 NaN
        "valid-jsdoc":"error",//强制使用有效的 JSDoc 注释
        "valid-typeof":"error",//强制 typeof 表达式与有效的字符串进行比较
        /**
        **最佳实践
        **/
        "accessor-pairs":"error",//强制getter/setter成对出现在对象中
        "array-callback-return":"error",//强制数组方法的回调函数中有 return 语句
        "block-scoped-var":"error",//把 var 语句看作是在块级作用域范围之内
        "class-methods-use-this":"error",//强制类方法使用 this
        "complexity":"error"//限制圈复杂度
    }
};