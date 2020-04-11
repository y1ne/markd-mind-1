<template>
    <b-row class="form-group" style="height:100%">
	<b-col cols="6" class="tab-editor-part rounded">
	    <markdown-editor
		class="rounded"
  		toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen"
		buttonClass="btn btn-outline-success"
		v-bind:options="options"
	    	v-model="value">
	    </markdown-editor>
	</b-col>
	<b-col cols="6" class="tab-mermaid-part rounded">
	    <MermaidEditor v-bind:data=structure
	    @mermaidUpdate="mermaidUpdate" />
	</b-col>
    </b-row>
</template>

<script>
 import 'v-markdown-editor/dist/v-markdown-editor.css'
 import Vue from 'vue'
 import Editor from 'v-markdown-editor'
 import MermaidEditor from './MermaidEditor'
 Vue.use(Editor)
 export default {
     name: 'Editor',
     components: {
	 Editor,
	 MermaidEditor,
     },
     mounted: function(){
	 this.value = "aaaaa";
     },
     methods: {
	 mermaidUpdate(event){
	     this.structure = event.target.value;
	     this.$emit('input', event.target.value);
	 },
	 editNode(nodeId){
	     this.$emit('openModal');
	     //this.data[nodeId - 1].text = this.InputTest;
	 },
     },
     data: function() {
	 return {
	     value: "",
	     options: {
                 lineNumbers: true,
		 styleActiveLine: true,
		 styleSelectedText: true,
		 lineWrapping: true,
		 indentWithTabs: true,
		 tabSize: 2,
		 indentUnit: 2
             },
	 }
     },
     props: [
	 'structure'
     ],
 }
</script>

<style>
 .editor-content {
     height: 100%;
 }
 #editor{
     height: 100%;
 }
 #editor .quill-editor {
     height: 100%;
 }
 #editor .quill-editor .ql-container {
     height: 100%;
 }

 h2 {
     display: block;
     font-size: 1.5em;
     margin-block-start: 0.83em;
     margin-block-end: 0.83em;
     margin-inline-start: 0px;
     margin-inline-end: 0px;
     font-weight: bold;
 }
 .tab-editor-part {
     height: 100%;
 }
 .tab-mermaid-part {
     padding: 20px;
     background-color: white;
     height: 100%;
 }

</style>
