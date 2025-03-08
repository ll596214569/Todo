# TODO.cef

本目录下存放cef相关文件，

- cef 子目录中存放的是代码相关依赖，包含库文件以及头文件,太大了传的是压缩文件，即cef.zip
- Run64 子目录中存放的是程序运行相关，需要与exe放在同级目录下,太大了传的是压缩文件，即Run64.zip
- Example 子目录中存放的一个MFC使用cef的简单实例，编译器为VS2019（v142），windows系统（Windows 10 专业版，19045.5371）
- test 子目录中存放的是测试代码，来自于CEF源码中带的cefsimple工程，将其中的simple_handler_win.cc 文件中的代码移到了 simple_handler.cc中，其他几个文件无改动；

cef编译文档位于 doc\Cef编译中；
Example编写文档位于 doc\CefExample中；