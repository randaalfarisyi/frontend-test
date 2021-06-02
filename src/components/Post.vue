<template>
<div class="container">
    <h2>Text Search</h2><br>
    <input type="text" id="search" placeholder="Search...">
    <p class="besar">Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] "Turtle" may either refer to the order as a whole, or to particular turtles which make up a form taxon that is not monophyletic.

The order Chelonii or Testudines includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[4] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the many species alive today, some are highly endangered.[5]

Like all other extant reptiles, turtles are ectotherms their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water.

Like other amniotes (reptiles, dinosaurs, birds, and mammals), they breathe air and do not lay eggs underwater, although many species live in or around water. The largest turtles are aquatic.</p>
</div>
</template>


<script>
import $ from "jquery";

export default {
    mounted() {
        $(document).ready(function(){
            $("#search").keyup(function(){
                console.log($(this).val())
                searchHighlight($(this).val());
            });


        });

        function searchHighlight(searchText)
        {
            if(searchText)
            {
                var content = $(".besar").text();
                var searchExp = new RegExp(searchText, "igs");
                var matches = content.match(searchExp);
                if(matches)
                {
                    $('.besar').html(content.replace(searchExp, function(match){
                        return "<span style='background: yellow !important;font-weight: bold !important;color:black'>" + match + "</span>";
                    }));
                }
            }
        }
    }
}
</script>
<style scoped>
    .highlight{
        background: yellow !important;
        font-weight: bold !important;
    }
</style>