<template>
    <ul class="non-bullet">
	<li>
	    <b-button pill class="ficonbutton">
		<b-icon icon="folder" class="p-1 foldericons" variant="light"></b-icon>
	    </b-button>
	</li>
	<li>
	    <b-button pill class="ficonbutton">
		<b-icon icon="star" class="p-1 foldericons" variant="light"></b-icon>
	    </b-button>
	</li>
	<li>
	    <b-button pill class="ficonbutton">
		<b-icon icon="document-text" class="p-1 foldericons" variant="light"></b-icon>
	    </b-button>
	</li>
	<li>
	    <b-button pill class="ficonbutton">
		<b-icon icon="tag" class="p-1 foldericons" variant="light"></b-icon>
	    </b-button>
	</li>
    </ul>
</template>

<script>
 import { Button, BIcon } from 'bootstrap-vue'
 export default {
     name: 'FolderList',
     components: {
	 BIcon,
     },
     data() {
	 return {
	 }
     },
 }
</script>

<style>
 .non-bullet {
     padding-top: 60px;
     margin-left: -50px;
 }
 ul.non-bullet li {
     list-style-type: none;
 }

 .foldericons {
     width: 40px;
     height:40px;
 }
 .ficonbutton{
     margin-top: 10px;
 }
</style>
