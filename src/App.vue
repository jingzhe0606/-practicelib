<template>
  <div>
    <p>{{msg}}</p>
    <Test />
  </div>
</template>
<script>
import Test from './test.jsx'
export default {
  name: 'App',
  data(){
    return {
      msg: 'Hello world'
    }
  },
  components:{
    Test
  }
}
</script>