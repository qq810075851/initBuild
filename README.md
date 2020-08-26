# bargaining

#### 介绍
女王美砍价模块

#### 软件架构
软件架构说明
* common 通用信息
	* model 定义应用通用模型
	* u-charts 图表统计
* page 页面路由
	* course 课程
		* course-center 课程中心
		* course-info 课程详情
		* course-search 课程搜索
	* punch-the-clock 打卡
		* punch-the-clock-history 打卡历史记录
		* punch-the-clock-index 打卡主页
		* pun-the-clock-edit 新建打卡
		* upload-file 上传文件-音视频、图片
	* tutor 导师
		* tutor-info 导师详情
		* tutor-list 导师列表
		* tutor-search 导师搜索
		* offline-consultation 线下咨询
	* user 用户个人中心
		* edit-user 编辑用户信息
		* my 我的个人中心
* static 静态资源
	* image 页面使用的图片文件
	* tabbar-image 底部导航栏图片文件
* utils 工具类
	* pipe 管道过滤
	* service 服务


#### 安装教程

1.  npm install 安装所需依赖

#### 使用说明

1.  点击运行 > 运行到浏览器
2.  上线打包 > 发行 > 网站-H5手机版