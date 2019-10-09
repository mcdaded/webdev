<template>
  <q-page class="padding">
    <div class="q-pa-xs justify-center items-center wrap">
      <div class="row">
        <div class="col-12">
          <mint-toolbar />
        </div>
      </div>
      <div class="q-pa-xl row justify-around items-top">
        <div class="col-3" style="border-style: dotted;">
          <accounts-panel />
        </div>
        <div class="col-5" style="border-style: dotted;">
          <div class="column" style="height: 500px">
            <div class="col" style="border-style: dotted;">
              <bills-panel />
            </div>
            <div class="col" style="border-style: dotted;">
              <offers-panel />
            </div>
          </div>
        </div>
        <div class="col-4">
          <chat-panel />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import MintToolbar from "../components/MintToolbar.vue";
import AccountsPanel from "../components/AccountsPanel.vue";
import ChatPanel from "../components/ChatPanel.vue";
import BillsPanel from "../components/BillsPanel.vue";
import OffersPanel from "../components/OffersPanel.vue";

export default {
  name: "PageIndex",
  components: {
    MintToolbar,
    AccountsPanel,
    BillsPanel,
    OffersPanel,
    ChatPanel
  }
};
</script>
