<template>
	<div id="two-way-binding" class="demo">
		<input type="text" v-model="siteURL" />
		<p>You are viewing this site: {{ siteURL }} responsive</p>
		
		<div class="iphone">
			<iframe :src="siteURL"></iframe>
		</div>

	</div>
</template>

<script name="ResponsiveCheck">
export default {
	data() {
		return {
			siteURL: 'https://4040creative.com.au/',
		};
	},
};
</script>


<style scoped>

.iphone {
	background-image: '../assets/iphone-5.png'; 
	font-family: sans-serif;
	border: 1px solid #eee;
	border-radius: 2px;
	padding: 20px 30px;
	margin-top: 1em;
	margin-bottom: 40px;
	user-select: none;
	overflow-x: auto;
}

.demo {
	font-family: sans-serif;
}

iframe {
	width: 375px;
	height: 812px;
	border: none;
}
</style>