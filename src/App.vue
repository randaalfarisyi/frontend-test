<template>
  <div id="app">
    <h1>Frontend Coding Test</h1>
      <img alt="Vue logo" src="./assets/garda-logo.png">
      <br><br><br><br>
    <Popup></Popup><br>
    <Tes msg=""/><hr><br>
    <TabNav :tabs="['Tab 1', 'Tab 2', 'Tab 3']" :selected="selected" @selected="setSelected" >
      <br>
      <Tab :isSelected="selected === 'Tab 1'" >
        <h4>Gingerbread muffin gummies gingerbread macaroon. Lollipop candy applicake toffee faworki. Bear claw topping jelly toffee toffee powder tiramisu candy chupa chups. Chupa chups dragee icing applicake chupa chups dessert. Croissant jelly faworki marzipan tootsie roll marshmallow. Marshmallow toffee sweet roll fruitcake.</h4>
      </Tab>
      <Tab :isSelected="selected === 'Tab 2'" >
        <h4>Chocolate faworki croissant brownie halvah macaroon gummi bears wypas. Chupa chups icing gummies pudding dessert carrot cake. Cupcake jelly beans sweet roll icing ice cream apple pie tootsie roll gummi bears marzipan. Brownie gummies chupa chups pie. Cupcake jujubes topping.</h4>
      </Tab>
      <Tab :isSelected="selected === 'Tab 3'" >
        <h4>Cheesecake jelly beans ice cream lollipop sweet pastry. Chupa chups dessert cheesecake sesame snaps. Cookie ice cream candy canes pastry cake muffin. Icing chocolate sweet gummi bears powder oat cake oat cake lemon drops.</h4>
      </Tab>
    </TabNav><hr><br>
    <Post></Post><hr><br>
    
    <Tableex></Tableex><hr><br>

    <Mockup></Mockup>
    <router-view/>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Tes from './components/tes.vue';
import TabNav from './components/TabNav.vue';
import Tab from './components/Tab.vue';
import Post from './components/Post.vue';
import Tableex from './components/Table-example.vue';
import Popup from './components/Popup.vue';
import Mockup from './components/Mockup.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Tes,
    TabNav,
    Tab,
    Post,
    Tableex,
    Popup,
    Mockup,
  },
  data() {
    return {
      selected: 'Tab 1'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }
}
</script>

<style>
body{
  background: rgb(38,69,96);
  background: linear-gradient(250deg, rgba(38,69,96,1) 0%, rgba(20,82,172,1) 46%, rgba(0,212,255,1) 100%) !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1f1f1;
  margin-top: 60px;
  justify-content: center;
}
</style>
