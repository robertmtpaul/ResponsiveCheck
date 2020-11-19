<template>
	<div id="two-way-binding" class="wrapper">
		<input type="text" v-model="siteURL" />
		<p>You are viewing this site: {{ siteURL }} responsive</p>
		
		<div class="iphone-4 screen">
			<iframe :src="siteURL"></iframe>
		</div>
		<div class="laptop screen">
			<iframe :src="siteURL"></iframe>
		</div>
		<div class="tablet screen">
			<iframe :src="siteURL"></iframe>
		</div>
		<div class="iphone-5 screen">
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

.screen {
	border: 1px solid #eee;
	border-radius: 2px;
	padding: 20px 30px;
	margin-top: 1em;
	margin-bottom: 40px;
	user-select: none;
	overflow-x: auto;
}

/* .iphone-X {
	background-image: '../assets/iphone-X.png'; 
} */

.iphone-4 {
	background-image: '../assets/iphone-4.png'; 
}

.laptop {
	background-image: '../assets/iphone-5.png'; 
}

.desktop {
	background-image: '../assets/desktop.png'; 
}



.wrapper {
	font-family: sans-serif;
}

iframe {
	width: 375px;
	height: 812px;
	border: none;
}
</style>