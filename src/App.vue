<template>
  <div id="app">
    <Flexcards />
  </div>
</template>

<script>

import  Flexcards from '@/components/Flexcards'
export default {
  name: 'App',
  components: {
    Flexcards
  }
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

</style>
