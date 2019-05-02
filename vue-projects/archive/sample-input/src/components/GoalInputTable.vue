<template>
  <div class="goal-input-table">
    <sui-table celled>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Header</sui-table-header-cell>
          <sui-table-header-cell>Header</sui-table-header-cell>
          <sui-table-header-cell>Header</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <sui-table-row>
          <sui-table-cell>
            <sui-label ribbon>First</sui-label>
          </sui-table-cell>
          <sui-table-cell><sui-input placeholder="Search..."/></sui-table-cell>
          <sui-table-cell>Cell</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>Cell</sui-table-cell>
          <sui-table-cell>Cell</sui-table-cell>
          <sui-table-cell>Cell</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>Cell</sui-table-cell>
          <sui-table-cell>Cell</sui-table-cell>
          <sui-table-cell>Cell</sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
export default {
  name: "goal-input-table"
};
</script>
