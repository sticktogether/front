<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

body {
  background: #EEEEEE;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  //min-height: 100vh;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  //background-color: aquamarine;      
}


</style>
