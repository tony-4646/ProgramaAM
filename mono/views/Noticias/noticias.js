$().ready(
  () => {
    carga_noticias()
  }
);

var carga_noticias = () => {
  $.get("https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=725d1d067847be7152cc2d6a29d57fab"),
    (lista_noticias) => {
      lista_noticias = JSON.parse(lista_noticias);
      $.each(lista_noticias.articles, (index, noticia) => {
        html += `
          <div class="card">
    <div class="title">${noticia.title}</div>
    <div class="icon"></div>
    <div class="content">
        <p>${noticia.description}</p>
        <a href="${noticia.url}" target="_blank">Leer más...</a>
    </div>
</div>`
      });
      $('#Contenido_Noticias').html(html);
    }
}