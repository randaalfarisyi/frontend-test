<template>
  <div class="container">
      
  <section id="rotate">
    <h2>Image Rotator</h2><br><br><br>
  <div class="row">
    <div class="rotateLogo col-sm">
      <h2>Goku</h2>
      <h4>Ultra Insting Goku</h4>
      <br><br>
      <img class="rotating" alt="Vue logo" src="../assets/goku.jpg">
    </div>
    <div class="rotateLogo col-sm">
      <h2>Luffy</h2>
      <h4>Haki Gear 5?</h4>
      <br><br>
      <img class="rotating" alt="Vue logo" src="../assets/luffy.jpg">
    </div>
    <div class="rotateLogo col-sm">
      <h2>Naruto</h2>
      <h4>Sage Mode</h4>
      <br><br>
      <img class="rotating" alt="Vue logo" src="../assets/naruto.jpg">
    </div>
  </div>
  </section>
  <br><br><br><br>
 <!-- <section id="tabbed">
      <br><br><br><br>
    <h1>Tabbed Content</h1><br><br>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Tab 1" active>
            <b-card-text>Gingerbread muffin gummies gingerbread macaroon. Lollipop candy applicake toffee faworki. Bear claw topping jelly toffee toffee powder tiramisu candy chupa chups. Chupa chups dragee icing applicake chupa chups dessert. Croissant jelly faworki marzipan tootsie roll marshmallow. Marshmallow toffee sweet roll fruitcake.</b-card-text>
          </b-tab>
          <b-tab title="Tab 2">
            <b-card-text>Chocolate faworki croissant brownie halvah macaroon gummi bears wypas. Chupa chups icing gummies pudding dessert carrot cake. Cupcake jelly beans sweet roll icing ice cream apple pie tootsie roll gummi bears marzipan. Brownie gummies chupa chups pie. Cupcake jujubes topping.</b-card-text>
          </b-tab>
          <b-tab title="Tab 3">
            <b-card-text>Cheesecake jelly beans ice cream lollipop sweet pastry. Chupa chups dessert cheesecake sesame snaps. Cookie ice cream candy canes pastry cake muffin. Icing chocolate sweet gummi bears powder oat cake oat cake lemon drops.</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <br><br><br><br>
  </section>-->
   
  </div>
</template>

<script>
export default {
  name: 'Tes',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


@keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
@-webkit-keyframes rotating
{
    from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 3s ease-in-out infinite;
    -moz-animation: rotating 3s ease-in-out infinite;
    -ms-animation: rotating 3s ease-in-out infinite;
    -o-animation: rotating 3s ease-in-out infinite;
    animation: rotating 3s ease-in-out infinite;
    }
</style>
