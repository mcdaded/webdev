<template>
  <div class="goal-entry">
    <h1>Custom Goals</h1>
    <sui-grid :columns="1">
      <sui-grid-row>
        <sui-grid :columns="3">
          <sui-grid-column>
            <sui-button primary>Enter Goals</sui-button>
          </sui-grid-column>
          <sui-grid-column>
            <sui-button v-on:click="columnCount++">Add Column</sui-button>
          </sui-grid-column>
          <sui-grid-column>
            <sui-button v-on:click="rowCount++">Add Row</sui-button>
          </sui-grid-column>
        </sui-grid>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column :width="8">
          <sui-table celled>
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell v-for="i in columnCount" v-bind:key="i">
                  <sui-input style="width: 100%" />
                </sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="i in rowCount" v-bind:key="i">
                <sui-table-cell v-for="i in columnCount" v-bind:key="i">
                  <sui-input style="width: 100%" />
                </sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
  name: "goal-input",
  data() {
    return {
      items: [{ id: 1, title: "Home" }, { id: 2, title: "Test" }],
      rowCount: 1,
      columnCount: 2
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    addRow() {
      this.$store.dispatch("addRow");
    },
    addColumn() {
      // this.$store.dispatch("addColumn");
      this.items.append({ id: 99, title: "Goal" });
    }
  }
};
</script>
