<template>
  <div>
      <vue-mermaid
	  v-bind:nodes=data
	  type='graph TB'
	  @nodeClick='editNode'
	  v-bind:config='config'>
      </vue-mermaid>
  </div>
</template>

<script>
 import VueMermaid from 'vue-mermaid';
 export default {
     name: 'MermaidEditor',
     data: function () {
	 return {
	     config: {
		 theme: 'default',
		 startOnLoad: !1,
		 securityLevel: 'loose',
	     },
	 }
     },
     methods: {
	 commitChange(newValue) {
	     this.$emit('mermaidUpdate', newValue);
	 },
	 editNode(nodeId) {
             this.$emit('editNode');
         },
     },
     props: [
	 'data',
     ],
 }
</script>


