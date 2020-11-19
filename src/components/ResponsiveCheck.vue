<template>
	<div id="two-way-binding" class="wrapper">
		<input type="text" v-model="siteURL" />
		<p>You are viewing this site: {{ siteURL }} responsive</p>
		
		<div>
			<iframe :src="siteURL" class="iphone-4 screen"></iframe>
		</div>

		<div>
			<iframe :src="siteURL" class="tablet screen"></iframe>
		</div>

		<div>
			<iframe :src="siteURL" class="laptop screen"></iframe>
		</div>

		<div>
			<iframe :src="siteURL" class="desktop screen"></iframe>
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
	width: 375px;
	height: 812px;
	border: none;
 
}

.tablet {
	background-image: '../assets/tablet.png'; 
	width: 768px;
	height: 1024px;
	border: none;
}

.laptop {
	background-image: '../assets/iphone-5.png';
	width: 1024px;
	height: 640px;
	border: none;
}

.desktop {
	background-image: '../assets/desktop.png'; 
	width: 1920px;
	height: 1080px;
	border: none;

}

.wrapper {
	font-family: sans-serif;
}

</style>