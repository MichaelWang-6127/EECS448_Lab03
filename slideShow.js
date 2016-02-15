  function Next()
  {
    var fruitImage = document.getElementById("fruitImageId");
    if(fruitImage.src.match("apple.jpg"))
    {

      fruitImage.src = "banana.jpg";
    }
    else if(fruitImage.src.match("banana.jpg"))
    {
      fruitImage.src = "grape.jpg";
    }
    else if(fruitImage.src.match("grape.jpg"))
    {
      fruitImage.src = "lemon.jpg";
    }
    else if(fruitImage.src.match("lemon.jpg"))
    {
      fruitImage.src = "orange.jpg";
    }
    else if(fruitImage.src.match("orange.jpg"))
    {
      fruitImage.src = "apple.jpg";
    }
  }

  function Prev()
  {
    var fruitImage = document.getElementById("fruitImageId");
    if(fruitImage.src.match("apple.jpg"))
    {
      fruitImage.src = "orange.jpg";
    }
    else if(fruitImage.src.match("orange.jpg"))
    {
      fruitImage.src = "lemon.jpg";
    }
    else if(fruitImage.src.match("lemon.jpg"))
    {
      fruitImage.src = "grape.jpg";
    }
    else if(fruitImage.src.match("grape.jpg"))
    {
      fruitImage.src = "banana.jpg";
    }
    else if(fruitImage.src.match("banana.jpg"))
    {
      fruitImage.src = "apple.jpg";
    }
  }
