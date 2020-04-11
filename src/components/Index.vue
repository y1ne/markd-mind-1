<template>
    <b-container class="text-center" fluid>
	<b-row><b-col><HeaderMenu /></b-col></b-row>
	<b-row class="mainField">
	    <b-col cols="1" class="fileArea rounded"><FolderList /></b-col>
	    <b-col cols="11" class="editorArea rounded">
		<Editor
		    :active-file=activeFile
		    :available-file-data=availableFileData
		/>
	    </b-col>
	</b-row>
	<b-row><b-col><FooterMenu /></b-col></b-row>
    </b-container>
</template>

<script>
 import HeaderMenu from './Menu/HeaderMenu'
 import FooterMenu from './Menu/FooterMenu'
 import FolderList from './Index/FolderList'
 import Editor from './Index/Editor'
 export default {
     name: 'Index',
     components: {
	 HeaderMenu, FooterMenu,
	 FolderList,
	 Editor,
     },
     data: function() {
	 return {
	     activeFile: [],
	     availableFileData: [
		 { id : "1", title : "tab1", content : "sam1" },
		 { id : "2", title : "tab2", content : "sam2" },
		 { id : "3", title : "tab3", content : "sam3" },
	     ],
	 }
     },
 }
</script>

<style>
 body {
     background-color: #343A40;
 }
 .mainField {
     height: 80vh;
 }
 .filterArea {
     background-color: yellow;
 }

</style>
