# 14.3 表单及验证支持
在Web开发中对于这样的一个流程可能很眼熟：

- 打开一个网页显示出表单。
- 用户填写并提交了表单。
- 如果用户提交了一些无效的信息，或者可能漏掉了一个必填项，表单将会连同用户的数据和错误问题的描述信息返回。
- 用户再次填写，继续上一步过程，直到提交了一个有效的表单。

在接收端，脚本必须：

- 检查用户递交的表单数据。
- 验证数据是否为正确的类型，合适的标准。例如，如果一个用户名被提交，它必须被验证是否只包含了允许的字符。它必须有一个最小长度，不能超过最大长度。用户名不能与已存在的他人用户名重复，甚至是一个保留字等。
- 过滤数据并清理不安全字符，保证逻辑处理中接收的数据是安全的。
- 如果需要，预格式化数据（数据需要清除空白或者经过HTML编码等等。）
- 准备好数据，插入数据库。

尽管上面的过程并不是很复杂，但是通常情况下需要编写很多代码，而且为了显示错误信息，在网页中经常要使用多种不同的控制结构。创建表单验证虽简单，实施起来实在枯燥无味。

## 表单和验证
对于开发者来说，一般开发过程都是相当复杂，而且大多是在重复一样的工作。假设一个场景项目中忽然需要增加一个表单数据，那么局部代码的整个流程都需要修改。我们知道Go里面struct是常用的一个数据结构，因此beego的form采用了struct来处理表单信息。

首先定义一个开发Web应用时相对应的struct，一个字段对应一个form元素，通过struct的tag来定义相应的元素信息和验证信息，如下所示：
```Go

type User struct{
	Username 	string 	`form:text,valid:required`
	Nickname 	string 	`form:text,valid:required`
	Age			int 	`form:text,valid:required|numeric`
	Email 		string 	`form:text,valid:required|valid_email`
	Introduce 	string 	`form:textarea`
}
```
定义好struct之后接下来在controller中这样操作
```Go

func (this *AddController) Get() {
	this.Data["form"] = beego.Form(&User{})
	this.Layout = "admin/layout.html"
	this.TplNames = "admin/add.tpl"
}		
```
在模板中这样显示表单
```html

<h1>New Blog Post</h1>
<form action="" method="post">
{{.form.render()}}
</form>
```
上面我们定义好了整个的第一步，从struct到显示表单的过程，接下来就是用户填写信息，服务器端接收数据然后验证，最后插入数据库。
```Go

func (this *AddController) Post() {
	var user User
	form := this.GetInput(&user)
	if !form.Validates() {
		return
	}
	models.UserInsert(&user)
	this.Ctx.Redirect(302, "/admin/index")
}		
```
## 表单类型

以下列表列出来了对应的form元素信息：

| 名称 | 参数 | 功能描述 |
| - | - | - |
| **text** | No | textbox输入框 |
| **button** | No | 按钮 |
| **checkbox** | No | 多选择框 |
| **dropdown** | No | 下拉选择框 |
| **file** | No | 文件上传 |
| **hidden** | No | 隐藏元素 |
| **password** | No | 密码输入框 |
| **radio** | No | 单选框 |
| **textarea** | No | 文本输入框 |
## 表单验证		

以下列表将列出可被使用的原生规则

| 规则 | 参数 | 描述 | 举例 |
| - | - | - | - |
| **required** | No | 如果元素为空，则返回FALSE | &nbsp; |
| **matches** | Yes | 如果表单元素的值与参数中对应的表单字段的值不相等，则返回FALSE | matches[form_item] |
| **is_unique** | Yes | 如果表单元素的值与指定数据表栏位有重复，则返回False（译者注：比如is_unique[User.Email]，那么验证类会去查找User表中Email栏位有没有与表单元素一样的值，如存重复，则返回false，这样开发者就不必另写Callback验证代码。） | is_unique[table.field] |
| **min_length** | Yes | 如果表单元素值的字符长度少于参数中定义的数字，则返回FALSE | min_length[6] |
| **max_length** | Yes | 如果表单元素值的字符长度大于参数中定义的数字，则返回FALSE | max_length[12] |
| **exact_length** | Yes | 如果表单元素值的字符长度与参数中定义的数字不符，则返回FALSE | exact_length[8] |
| **greater_than** | Yes | 如果表单元素值是非数字类型，或小于参数定义的值，则返回FALSE | greater_than[8] |
| **less_than** | Yes | 如果表单元素值是非数字类型，或大于参数定义的值，则返回FALSE | less_than[8] |
| **alpha** | No | 如果表单元素值中包含除字母以外的其他字符，则返回FALSE | &nbsp; |
| **alpha_numeric** | No | 如果表单元素值中包含除字母和数字以外的其他字符，则返回FALSE | &nbsp; |
| **alpha_dash** | No | 如果表单元素值中包含除字母/数字/下划线/破折号以外的其他字符，则返回FALSE | &nbsp; |
| **numeric** | No | 如果表单元素值中包含除数字以外的字符，则返回 FALSE | &nbsp; |
| **integer** | No | 如果表单元素中包含除整数以外的字符，则返回FALSE | &nbsp; |
| **decimal** | Yes | 如果表单元素中输入（非小数）不完整的值，则返回FALSE | &nbsp; |
| **is_natural** | No | 如果表单元素值中包含了非自然数的其他数值 （其他数值不包括零），则返回FALSE。自然数形如：0,1,2,3....等等。 | &nbsp; |
| **is_natural_no_zero** | No | 如果表单元素值包含了非自然数的其他数值 （其他数值包括零），则返回FALSE。非零的自然数：1,2,3.....等等。 | &nbsp; |
| **valid_email** | No | 如果表单元素值包含不合法的email地址，则返回FALSE | &nbsp; |
| **valid_emails** | No | 如果表单元素值中任何一个值包含不合法的email地址（地址之间用英文逗号分割），则返回FALSE。 | &nbsp; |
| **valid_ip** | No | 如果表单元素的值不是一个合法的IP地址，则返回FALSE。 | &nbsp; |
| **valid_base64** | No | 如果表单元素的值包含除了base64 编码字符之外的其他字符，则返回FALSE。 | &nbsp; |
