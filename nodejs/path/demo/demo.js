const path = require('path');

let filepath = "C:\\temp\\myfile.html";

/*
* 默认basename,视操作系统使用对应的风格
* */
var result = path.basename(filepath);
console.log("path.basename result:",result);

/*
* 在任意系统上使用windows文件路径获得一致结果
* */
var result = path.win32.basename(filepath);
console.log('path.win32.basename result:',result);

/*
* 在任意系统上使用posix文件路径获得一致结果
* */
filepath = "C:/temp/myfile.html";
var result = path.posix.basename(filepath);
console.log('path.posix.basename result:',result);

/*
* path.delimiter提供平台特定的定界符
* */
{
    const filepath = process.env.PATH;
    console.log("filepath--->",filepath);
    console.log("path.delimiter--->",filepath.split(path.delimiter));
}

/*
* path.dirname返回目录名
* */
{
    const filepath = "C:\\temp\\myfile.html";
    console.log("path.dirname--->",path.dirname(filepath));
}

/*
* path.extname 返回path的扩展名
* */
{
    const filepath = "C:\\temp\\myfile.html";
    console.log("path.extname--->",path.extname(filepath));
}

/*
* path.format 从对象返回路径字符串,与path.parse相反
* */
{
    const filepath = path.format({
        root: '\\ignored',
        dir: '\\home\\user\\dir',
        name: 'file',
        ext: '.txt'
    })
    console.log("path.format--->",filepath)
}

/*
* path.isAbsolute检测绝对路径
* */
{
    console.log('path.isAbsolute("\\foo\\bar")',path.isAbsolute("\foo\bar"));
    console.log('path.isAbsolute("foo\\bar")',path.isAbsolute("foo\bar"));
}

/*
* path.join 根据参数片段,规范化生成路径
* */
{
    console.log("path.join('\\\\foo','bar','baz\\\\asdf','quux','..'",path.join('\\foo','bar','baz\\asdf','quux','..'))
}

/*
* 规范化给定的路径 normalize
* */
{
    const filepath = "C:\\temp\\..\\myfile.html";
    console.log("path.normalize--->",path.normalize(filepath))
}

/*
* 解析路径,返回一个对象 path.parse
* */
{
    const filepath = "C:\\temp\\myfile.html";
    console.log(path.parse(filepath));
}

/*
* path.relative(from, to) 根据给定路径返回from到to的相对路径
* */
{
    const filepath1 = "C:\\temp";
    const filepath2 = "C:\\foo";
    console.log("path.relative(from, to)", path.relative(filepath1, filepath2));
}

/*
* path.resolve 将路径和路径片段的序列解析为绝对路径
* */
{
    console.log("path.resolve('/路径1/路径2', './路径3')--->",path.resolve('/路径1/路径2', './路径3'))
}

/*
* path.sep平台特定的路径分割符
* */
{
    console.log("'foo/bar/baz'.split(path.sep)--->",'foo\\bar\\baz'.split(path.sep))
}

/*
* path.toNamespacedPath 返回给定 path 的等效名称空间前缀路径
* */
{
    const filepath1 = "D:\\temp";
    console.log(path.toNamespacedPath(filepath1));
}