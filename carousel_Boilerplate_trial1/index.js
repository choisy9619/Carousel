const showing_class = "showing";
  const firstslide = document.querySelector(".slide:nth-child(1)");
  const lastslide = document.querySelector(".slide:nth-child(5)");
  const left_btn = document.querySelector(".left");
  const right_btn = document.querySelector(".right");

  function right_move(){
    const currentslide = document.querySelector(".showing");
    if (currentslide) {
    const nextslide = currentslide.nextElementSibling;
      currentslide.classList.remove(showing_class);
      if(nextslide !== left_btn){
        nextslide.classList.add(showing_class);
      }
      else{
        firstslide.classList.add(showing_class);
      }
    }
  }
  function left_move(){
    const currentslide = document.querySelector(".showing");
    if (currentslide){
    const prevslide = currentslide.previousElementSibling;
      currentslide.classList.remove(showing_class);
      if(prevslide){
        prevslide.classList.add(showing_class);
      }
      else{
        lastslide.classList.add(showing_class);
      }
    }
  }

  left_btn.addEventListener('click', left_move);
  right_btn.addEventListener('click', right_move);