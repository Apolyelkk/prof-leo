document.addEventListener("keydown", function (event) {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
  
    // Check for developer tools shortcuts
    if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      (event.key === "C" || event.key === "c") ||
      (event.ctrlKey || event.metaKey) &&
      (event.key === "U" || event.key === "u") ||
      (event.key === "F12" || event.key === "f12") ||
      (event.key === "i" || event.key === "I")
    ) {
      showPopup(overlay, popup);
      checkDevTools(); // Check for developer tools after popup
      event.preventDefault();
    }
  });
  
  function showPopup(overlay, popup) {
    if (!popup.style.display || popup.style.display === "none") {
      overlay.style.display = "block";
      popup.style.display = "block";
  
      setTimeout(function () {
        popup.style.display = "none";
        overlay.style.display = "none";
      }, 5000); // Hide the popup after 5 seconds
    }
  }

    // Função para verificar o tamanho da janela do navegador
    function checkWindowResize() {
        // Se o tamanho da janela do navegador for maior que um determinado limite (indicando a abertura das ferramentas do desenvolvedor)
        if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
            // Redirecionar para o YouTube
            window.location.href = 'https://www.youtube.com/';
        }
    }

    // Verificar o tamanho da janela do navegador a cada 100 milissegundos
    setInterval(checkWindowResize, 100);
