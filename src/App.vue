<template>
  <div id="app">
    <el-container  class="container" direction="vertical">
      <headerNav></headerNav>
      <el-container>
       <!-- <el-aside width="28%">
          <sider-nav></sider-nav>
        </el-aside>-->
        <el-main>
            <router-view/>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>


<script>
  import Header from './components/nav/Header'
  import Sider from './components/nav/Sider'
  import Base from "./components/Base";
  export default {
    name: 'App',
    components: {
      Base,
      headerNav: Header,
      siderNav: Sider
    }
  }
</script>


<style>
  .el-header, .el-footer {

    text-align: center;
    line-height: 30px;
  }

  .el-aside {
    text-align: center;
    line-height: 200px;
  }

  .el-main {
 /* background-color: #E9EEF3;*/
  text-align: center;
   /* line-height: 160px;*/
  }

 /* body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }*/
</style>

