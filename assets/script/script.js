    const
      range = document.getElementById('range'),
      tooltip = document.getElementById('tooltip'),
      setValue = () => {
        const
          newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
          newPosition = 16 - (newValue * 0.32);
        tooltip.innerHTML = `<span class="d-flex align-items-center">${range.value} <img class="ms-1" src="./assets/images/redcar.png" alt=""></span>`;
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
      };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
