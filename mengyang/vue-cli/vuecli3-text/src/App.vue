<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/page1">Page1</router-link>|
      <router-link to="/page2">Page2</router-link>|
      <router-link to="/page3">Page3</router-link>|
      <router-link to="/aboutpage">别名</router-link>|
      <router-link to="/backhome">返回首页</router-link>|
      <span @click="goPage1">编程式导航-page1</span>|
      <span @click="goBack">返回</span>｜
      <span @click="goFoward">向前</span>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    goPage1() {
      this.$router.push("/page1");
    },
    goBack() {
      this.$router.go(-1);
    },
    goFoward() {
      this.$router.go(1);
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
