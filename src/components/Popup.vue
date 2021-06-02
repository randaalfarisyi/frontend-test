<template>
<div>
  <div class="container">
      <h2>Pop Up</h2>
      <section class="" id="popup">
	<div class="hero-content">
		<a href="#" id="button" class="button">Open Me</a>
        <a href="#" id="button1" class="button">Large Modal</a>
        <a href="#" id="button2" class="button">Small Modal</a>
	</div>
</section>
      
  </div>
  <div class="bg-modal">
	<div class="modal-contents">

		<div class="close">+</div>
		<form action="" style="margin:75px">
			<input type="text" placeholder="Name">
			<input type="email" placeholder="E-Mail">
			<a href="#" class="button">Submit</a>
		</form>

	</div>
</div>
<div class="bg-modal-1">
	<div class="modal-contents-1">

		<div class="close-1">+</div>
		<h3>This is Large Modal</h3>

	</div>
</div>
<div class="bg-modal-2">
	<div class="modal-contents-2">

		<div class="close-2">+</div>
		<h3>This is Small Modal</h3>

	</div>
</div>
<br><br>
</div>

</template>

<script>
export default {
    mounted() {
        document.getElementById('button').addEventListener("click", function() {
            /* eslint-disable no-mixed-spaces-and-tabs */
	        document.querySelector('.bg-modal').style.display = "flex";
        });

        document.querySelector('.close').addEventListener("click", function() {
            /* eslint-disable no-mixed-spaces-and-tabs */
	        document.querySelector('.bg-modal').style.display = "none";
        });

        document.getElementById('button1').addEventListener("click", function() {
            /* eslint-disable no-mixed-spaces-and-tabs */
	        document.querySelector('.bg-modal-1').style.display = "flex";
        });

        document.querySelector('.close-1').addEventListener("click", function() {
            /* eslint-disable no-mixed-spaces-and-tabs */
	        document.querySelector('.bg-modal-1').style.display = "none";
        });

        document.getElementById('button2').addEventListener("click", function() {
            /* eslint-disable no-mixed-spaces-and-tabs */
	        document.querySelector('.bg-modal-2').style.display = "flex";
        });

        document.querySelector('.close-2').addEventListener("click", function() {
            /* eslint-disable no-mixed-spaces-and-tabs */
	        document.querySelector('.bg-modal-2').style.display = "none";
        });
    }
}
</script>

<style lang="scss" scoped>
$blue: #1686d9;

h1, h3 {
	color: white;
	font-weight: 400;
}

header {
	display: flex;
	padding: 0 15px;
	max-width: 800px;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	img {
		width: 30px;
	}
}

ul {
	list-style: none;
}

li {
	display: inline;
	padding: 6px;
	a {
		text-decoration: none;
		color: black;
		&:hover {
			text-decoration: underline;
		}
	}
}

.hero {

	background-size: cover;
	height: 420px;
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}

.button {
	background-color: $blue;
	border: 2px solid white;
	border-radius: 30px;
	text-decoration: none;
	padding: 10px 28px;
	color: white;
	margin-top: 10px;
	display: inline-block;
	&:hover {
		background-color: white;
		color: $blue;
		border: 2px solid $blue;
	}
}

.card-container {
	max-width: 800px;
	margin: 50px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.card {
	height: 300px;
	width: 230px;
	border: 1px solid darkgray;
	border-radius: 3px;
	margin: 10px;
}

.bg-modal {
	background-color: rgba(0, 0, 0, 0.8);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: none;
	justify-content: center;
	align-items: center;
}
.bg-modal-1 {
	background-color: rgba(185, 185, 185, 0.5);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: none;
	justify-content: center;
	align-items: center;
    
}
.bg-modal-2 {
	background-color: rgba(34, 34, 34, 0.5);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: none;
	justify-content: center;
	align-items: center;
    
}

.modal-contents {
	height: 400px;
	width: 600px;
	background-color: white;
	text-align: center;
	padding: 20px;
	position: relative;
	border-radius: 4px;
    animation-name: example;
    animation-duration: 2s;
}
.modal-contents-1 {
	height: 600px;
	width: 1000px;
	background-color: rgb(10, 10, 10);
	text-align: center;
	padding: 20px;
	position: relative;
	border-radius: 4px;
    animation-name: example-1;
    animation-duration: 2s;
    
}
.modal-contents-2 {
	height: 200px;
	width: 400px;
	background-color: white;
	text-align: center;
	padding: 20px;
	position: relative;
	border-radius: 4px;
    animation-name: example-2;
    animation-duration: 2s;
    h3{
        color: #000 !important;
    }
    
}
@keyframes example-1 {
  
    from {background-color: rgb(255, 255, 255);}
  to {background-color: rgb(10, 10, 10);}
}

@keyframes example-2 {
  from {height: 100px; width: 200px;}
  to {
    height: 200px;
	width: 400px;
    }
}
@keyframes example
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
input {
	margin: 15px auto;
	display: block;
	width: 50%;
	padding: 8px;
	border: 1px solid gray;
}

.close, .close-1, .close-2 {
	position: absolute;
	top: 0;
	right: 10px;
	font-size: 42px;
	color: #333;
	transform: rotate(45deg);
	cursor: pointer;
	&:hover {
		color: #666;
	}
}
</style>