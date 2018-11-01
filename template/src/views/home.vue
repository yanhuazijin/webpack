<template>
  <main id="home" class="view" role="main">
    <div class="heading">
      <img class="VxTitle" src="../../build/logo.png"/>
      <p>面向金融场景的前端快速开发平台，提供从前端设计、界面构建、快速开发、测试上线一揽子解决方案。</p>
    </div>

    <ui-button @click="handleClick">点我</ui-button>
  </main>
</template>

<script>
  import { Button, Toast } from 'vx-mobile'

  export default {
    name: 'home-view',
    components: {
      [Button.name]: Button
    },
    methods: {
      handleClick() {
        //Toast.info('不错哟~');
        this.$router.push("fundList");
        // 全局引入时
        // this.$toast.info('不错哟~')
      }
    }
  }
</script>

<style>
	.VxTitle{
		width: 40%;
		height: 40%;
	}
  .heading {
    text-align: center;
    margin-bottom: 48px;
  }
  .heading h1 {
    color: #333;
    line-height: 1.15;
    font-size: 64px;
    margin-bottom: 32px;
  }
  .heading h1 span {
    position: relative;
  }
  .heading h1 span::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 8px;
    width: 100%;
    height: 20px;
    background: #ecf6ff;
  }
  .heading p {
    font-size: 32px;
    color: #666;
    line-height: 56px;
  }
</style>
