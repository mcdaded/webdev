<template>
  <div class="about">
    <header class="about-header">
      <p>This is an about page</p>
    </header>
    <div class="about-box-content">
      <p>This is where text would go</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: row;
  padding: 0px;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
}

.about-header {
  position: absolute;
  width: 100vw;
  height: 48px;
  left: 0px;
  top: 0px;
  background: #82a5ff;
}
.about-box-content {
  position: absolute;
  width: 745px;
  height: 576px;
  left: calc(50% - 745px / 2 - 0.5px);
  top: 70px;
  /* gray-9 */
  background: #ebeef4;
}
</style>
