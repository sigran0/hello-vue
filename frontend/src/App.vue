
<template>
  <div class="container">
    <div id="app">
      <NaviBar></NaviBar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NaviBar from '@/components/NavigationBar'

export default {
  name: 'App',
  data () {
    return {
      hello: 'world'
    }
  },
  components: {
    NaviBar
  }
}
</script>
