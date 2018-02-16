/*
* Evento de click para llamar al botón de buscar
*/
$('#pokesearch').click(function() {
  // Rescatando el valor ingresado
  const pokemonName = $('pokemon-name').val();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    type: 'GET',
    datatype: 'json',
    success: function(results) {
      console.log(results);
    }
  }).done(response).fail(error);
  function response(data) {
    $('#pokemon-container').empty();
    const pakimonImg = data.sprites.front_default;
    const pakimonName = data.name;
    const pakimonNumber = data.order;
    const pakimonWeight = data.weight;
    const pakimonGeneration = data.generation;
    const pakimonAbbilities = data.abilities[0].ability.name;
    $('.info-modal').empty();
    $('#pokemon-container').append(`<img class="pakimon-imagen pakimon-img-modal" src="${pakimonImg}" data-toggle="modal" data-target="#myModal"><h3><strong>${pakimonName}</strong></h3>`);
    $('.info-modal').append(`<p>Peso: ${pakimonWeight}</p><p>Número: ${pakimonNumber}</p><p>Generacion: ${pakimonGeneration}</p><p>Habilidades: ${pakimonAbbilities}</p>`);
  }

  function error() {
    alert('Lo sentimos, ha ocurrido un error :(');
  }
});

