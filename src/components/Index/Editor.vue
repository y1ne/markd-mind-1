<template>
    <div class="editor-container text-left rounded">
	<b-tabs content-class="pills">	    
	    <b-tab v-for='file in availableFileData'
		   v-bind:title='file.title'
		   v-bind:key='file.id'>
		<MDItem v-bind:structure='structure' />
	    </b-tab>
	</b-tabs>
	<div id="overlay" v-show="modalVisible">
            <div id="overlay-content">
		<input v-model='modalInputText' type='text' />
		<button v-on:click='closeModal()'>Close</button>
            </div>
	    <b-button v-on:click="clickCreateNodeButton()">new node</b-button>
	</div>
	<b-button v-on:click='openModal()'>new node</b-button>
    </div>
</template>

<script>
 import MDItem from './Editor/MDItem' 
 export default {
     name: 'Editor',
     components: {
	 MDItem,
     },     
     data: function() {
	 return {
	     current: "init",
	     structure: [],
	     modalVisible: false,
	     modalInputText: "",
	 }
     },
     method: {
	 renewStructure(data) {
	     this.structure = data;
	 },
	 addDataInStructure(data){
	     const length = this.structure.length;
	     this.structure.push({
		 id: length + 1,
		 text: this.InputTest,
		 editable: true
	     });
	 },
	 openModal() {
             this.modalVisible = true;
         },
         closeModal() {
             this.modalVisible = false;
         },
     },
     mounted: function(){
	 this.structure = [
		 { id: '1', text: 'A', link: '---', next: ['2'], editable: true },
		 { id: '2', text: 'B', edgeType: 'circle', next: ['3'] },
		 { id: '3', text: 'C', next: ['4', '6'] },
		 { id: '4', text: 'D', next: ['5'] },
		 { id: '5', text: 'E' },
		 { id: '6', text: 'F' },
		 { id: '7', text: 'G', next: ['8', '9'] },
		 { id: '8', text: 'H' },
		 { id: '9', text: 'I' },
	     ];
     },
     props: [
	 'availableFileData',
     ],
 }
</script>

<style>
 .editor-container {
     background-color: #343A40;
     height: 80vh;
 }
  .v-md-container {
     height: 80vh;
 }

 .nav-tabs {
     border-bottom: none;
 }
 .tabs {
     height: 100%;
 }
 .tab-content {
     height: 100%;
 }
 .tab-pane {
     height: 100%;
 }

 #overlay {
     z-index: 10;
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.5);
     display: flex;
     align-items: center;
     justify-content: center;
 }
 #overlay-content {
     z-index: 2;
     width: 50%;
     padding: 1em;
     background: #fff;
 }

 
</style>
