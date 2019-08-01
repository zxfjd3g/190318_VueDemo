<template>
  <div>
    <div>click {{count}} times, count is {{evenOrOdd2}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {

    /* computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    }, */
    computed: {
      ...mapState(['count']), // {'count': () => this.$store.state['count']}
      ...mapGetters({
        evenOrOdd2: 'evenOrOdd'
      }) // {'evenOrOdd2': () => this.$store.getters['evenOrOdd']}
    },

    /* 
      const arr = [1, 2]
      const obj = [...arr]
      const obj = {m: 1, n: 2}
      const obj2 = {...obj}
    */

    /* methods: {
      increment () {
        console.log('---')
        this.$store.commit('INCREMENT')
      },
      decrement () {
        this.$store.commit('DECREMENT')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },
    }, */
    methods: {
      ...mapMutations({
        increment: 'INCREMENT',
        decrement: 'DECREMENT',
      }),
      ...mapActions(['incrementIfOdd', 'incrementAsync'])
    }
  }
</script>

<style scoped>
 
</style>
