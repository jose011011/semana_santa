<script>
    function inicio() {
      document.getElementById('contenido').innerHTML = `
        <h1 class="text-center text-info">Semana Santa en Bolivia</h1>
        <p class="text-center">Bienvenido al sitio oficial de Semana Santa en Bolivia. Explora tradiciones, historia, recetas y turismo.</p>
      `;
    }

    function historia() {
      document.getElementById('contenido').innerHTML = `
        <h2 class="text-center text-info">Historia</h2>
        <p class="text-center">La Semana Santa en Bolivia tiene profundas raíces culturales y religiosas...</p>
      `;
    }

    function tradiciones() {
      document.getElementById('contenido').innerHTML = `
        <h2 class="text-center text-info">Tradiciones</h2>
        <p class="text-center">Las tradiciones incluyen procesiones, viacrucis, representaciones teatrales y más...</p>
      `;
    }

    function receta() {
      document.getElementById('contenido').innerHTML = `
        <h2 class="text-center text-info">Recetas</h2>
        <p class="text-center">Durante la Semana Santa se preparan platos típicos como el pescado a la parrilla, sopa de papalisa...</p>
      `;
    }

    function turismo() {
      document.getElementById('contenido').innerHTML = `
        <h2 class="text-center text-info">Turismo</h2>
        <p class="text-center">Visita lugares emblemáticos como Copacabana, Tarija, y otros destinos religiosos...</p>
      `;
    }

    // Cargar contenido inicial
    window.onload = inicio;
  </script>




















<body>


  <!-- NAVBAR -->


  <!-- MAIN -->
  <main>
    <!-- CAROUSEL DE DEPARTAMENTOS -->
    <div id="carouselTurismo" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <!-- SLIDE EXAMPLE -->
        <div class="carousel-item active">
          <img src="img/turismo/beni.jpg" class="d-block w-100" alt="Beni">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <h5>Beni</h5>
            <p>Rico en biodiversidad y cultura, ideal para el ecoturismo en Semana Santa.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="img/turismo/chuquisaca.jpg" class="d-block w-100" alt="Chuquisaca">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <h5>Chuquisaca</h5>
            <p>Sucre, la ciudad blanca, brilla con procesiones coloniales y tradiciones vivas.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="img/turismo/cochabamba.jpg" class="d-block w-100" alt="Cochabamba">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <h5>Cochabamba</h5>
            <p>La Llajta celebra con sabor y fe entre platos tradicionales y misas solemnes.</p>
          </div>
        </div>

        <!-- Agrega aquí los demás departamentos -->
        <!-- Usa el mismo formato para: la_paz, oruro, pando, potosi, santa cruz, tarija -->

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselTurismo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselTurismo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </main>

  <!-- FOOTER -->


</body>