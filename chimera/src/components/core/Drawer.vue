<template>
  <v-navigation-drawer v-model="drawer" app class="grey darken-4" :mini-variant.sync="mini" mini-variant-width="70" permanent>
    <v-list dense color="transparent">
      <v-list-item class="mb-4">
        <v-list-item-avatar color="#80deea">
          <v-img :src="require('@/assets/chimera.png')" />
        </v-list-item-avatar>
        <v-list-item-title class="title">Chimera</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <template v-for="(item, i) in items">
        <v-list-item v-if="!item.spacer" :key="`tile-${i}`" :to="item.to" :value="item.value" color="grey" exact v-on="item.click && { 'click': item.click }">
          <v-list-item-avatar>
            <v-icon style="color: inherit" v-text="item.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
        <v-divider v-else :key="`divider-${i}`" class="my-4 info" style="opacity: 0.22" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  name: 'CoreDrawer',
  data () {
    return {
      mini: true
    }
  },
  computed: {
    ...mapState('downloads', {
      downloadDrawer: 'drawer'
    }),
    drawer: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return [
        {
          icon: 'mdi-view-grid',
          text: 'Applications',
          to: '/library/false'
        },
        {
          icon: 'mdi-thought-bubble-outline',
          text: 'Freckles',
          to: '/freckles/0d765fcf-118f-4122-8f03-f5f9ba74e7fa'
        },
        // {
        //   icon: 'mdi-image-multiple-outline',
        //   text: 'Agents of Anarchy',
        //   to: '/projectKanban/QmmorebigfAgentsOfAnarchyhash'
        // },
        {
          icon: 'mdi-newspaper',
          text: 'News',
          to: '/news'
        },
        {
          icon: 'mdi-head-cog-outline',
          text: 'Settings',
          to: '/settings'
        },
        { spacer: true },
        {
          icon: 'mdi-plus-box-multiple-outline',
          text: 'Parts',
          to: '/parts'
        },
        // {
        //   icon: 'mdi-fire',
        //   text: 'Parts Store',
        //   to: '/store'
        // },
        {
          icon: 'mdi-source-pull',
          text: 'CRISPR',
          to: '/projects'
        }
      ]
    }
  },

  methods: {
    ...mapMutations('app', ['setDrawer']),
    ...mapMutations('downloads', {
      toggleDownloadDrawer: 'toggleDrawer'
    })
  }
}
</script>
