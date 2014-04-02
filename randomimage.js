<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript">
<script>
      var randomImage = {
        paths: [
          "http://lorempixel.com/400/400/cats/1",
          "http://lorempixel.com/400/400/cats/2",
          "http://lorempixel.com/400/400/cats/3",
		  "http://lorempixel.com/400/400/cats/4",
		  "http://lorempixel.com/400/400/cats/5",
        ],
        generate: function(){
          var path = randomImage.paths[Math.floor(Math.random()*randomImage.paths.length)];
          var img = new Image();
          img.src = path;
          $("a.random").html(img);
          $("a.random").attr("href", path);
        }
      }
      randomImage.generate();
</script>