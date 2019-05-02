<template>
  <div class="goal-input">
    <h1>Goals</h1>
    <sui-grid :columns="3">
      <sui-grid-row>
        <sui-grid-column>
          <sui-input placeholder="Search..." />
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column>
          <sui-button primary>Enter Goals</sui-button>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
  name: "goal-input"
};
</script>
