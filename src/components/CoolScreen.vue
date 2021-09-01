<template>
  <div>
    <a-layout>
      <a-button type="primary" block> Primary </a-button>
      <a-button block> Default </a-button>
      <a-button type="dashed" block> Dashed </a-button>
      <a-button type="danger" block> Danger </a-button>
      <a-button type="link" block> Link </a-button>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'CoolScreen'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
