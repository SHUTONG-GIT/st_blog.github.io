**vue中使用v-for循环动态加载图片(:src)失败的解决方法**
原创Moai国王 最后发布于2019-11-24 13:07:27 阅读数 337  已收藏
展开
在vue中使用v-for循环动态加载图片，如果img的src为url链接地址时，图片可以显示出来；但是一旦换成本地静态图片资源，加载就出现了问题，图片碎裂，无法加载。

使用url链接时，图片正常动态加载：

```
<template>
	<van-swipe class="goods-swipe" :autoplay="3000">
		<van-swipe-item v-for="thumb in goods.thumbs" :key="thumb">
			<img :src="thumb" alt="apple"/>  //图片可以动态加载
		</van-swipe-item>
	</van-swipe>
</template>

<script>
export default{

}
data() {
	return {
		goods: {
			thumbs: [
				'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
				'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
			]
		}
	};
},
</script>
```

当在目录文件夹assets文件中创建了一个images文件夹，并放置两个图片后，在代码中使用图片相对路径地址，出现无法加载图片的问题：

```
<template>
	<van-swipe class="goods-swipe" :autoplay="3000">
		<van-swipe-item v-for="thumb in goods.thumbs" :key="thumb">
			<img :src="thumb" alt="apple"/>  //图片可以动态加载
		</van-swipe-item>
	</van-swipe>
</template>

<script>
export default{

}
data() {
	return {
		goods: {
			thumbs: [
				'../../assets/images/apple1.jpg',
				'../../assets/images/apple1.jpg'
			]
		}
	};
},
</script>

```

经过多方寻找答案之后，终于找到了解决方法：
1、在引入图片路径的时候使用require方式引入图片；
2、使用ES6的import方式引入图片。

template中组件不变，修改script中data中的数据，如下：

```
//require方式

<script>
export default{
	data() {
		return {
			goods: {
				thumbs: [
					require('../../assets/images/apple1.jpg'),
					require('../../assets/images/apple1.jpg')
				]
			}
		};
	},
}
</script>

//import方式

<script>
import apple1 from '../../assets/images/apple1.jpg';
import apple2 from '../../assets/images/apple2.jpg';

export default{
	data() {
		return {
			goods: {
				thumbs: [apple1, apple2]
			}
		};
	},
}
</script>
```


转载自：https://blog.csdn.net/ThisEqualThis/article/details/103222369
