<template>
  <nav>
    <router-link to="/">地图</router-link> |
    <router-link to="/about">山水图</router-link> |
    <router-link to="/wordcloud">词云图</router-link> |
    <router-link to="/hotbar">热力直方图</router-link>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
