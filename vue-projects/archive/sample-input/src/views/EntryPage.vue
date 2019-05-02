<template>
  <div class="goal-entry">
    <h1>Goals</h1>
    <sui-grid :columns="1">
      <sui-grid-row>
        <sui-grid :columns="3">
          <sui-grid-column>
            <sui-button primary>Enter Goals</sui-button>
          </sui-grid-column>
          <sui-grid-column>
            <sui-button v-on:click="addColumn" secondary>Add Column</sui-button>
          </sui-grid-column>
          <sui-grid-column>
            <sui-button v-on:click="addRow" secondary>Add Row</sui-button>
          </sui-grid-column>
        </sui-grid>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column>
          <sui-table celled>
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell
                  v-for="row in items"
                  v-bind:key="row.title"
                >
                  <sui-input :placeholder="row.title" />
                </sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell v-for="row in items" v-bind:key="row.title">
                  <sui-input :placeholder="row.title" />
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
      items: [{ id: 1, title: "Home" }, { id: 2, title: "Test" }]
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
