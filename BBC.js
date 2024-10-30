class RelativeTime extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
        setInterval(() => this.render(), 1000);
    }
    static get observedAttributes() {
        return ['time'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    render() {
        const timeValue = this.getAttribute('time');
        const time = timeValue ? new Date(timeValue).getTime() : Date.now();
        const now = Date.now();
        const diff = now - time;
        const seconds = Math.floor(diff / 1000) || 1;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        let aux = '...';
        if (years >= 1) {
            aux = `Hace ${years} año${years > 1 ? 's' : ''}`;
        } else if (months >= 1) {
            aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`;
        } else if (days >= 1) {
            aux = `Hace ${days} día${days > 1 ? 's' : ''}`;
        } else if (hours >= 1) {
            aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
        } else if (minutes >= 1) {
            aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
        } else {
            aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`;
        }
        this.textContent = aux;
    }
}
customElements.define('relative-time', RelativeTime);

// Definición de datos de artículos
const articles = [
  {
      "id": 1,
      "image": "https://cdn.kqed.org/wp-content/uploads/sites/35/2024/10/GettyImages-1347890261-1020x680.jpg",
      "title": "Climate Activists Push for Carbon Tax With Measure GG, But Critics Warn it Could Backfire",
      "description": "Grassroots climate activists argue a tax on gas use in large buildings will help all of Berkeley kick fossil fuels. But many politicians, businesses, and nonprofits, even those that work on climate, don’t think Measure GG is the policy to get there.",
      "date": "2023-10-17T11:00:16Z",
      "category": "Climate"
  },
  {
      "id": 2,
      "image": "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-2170862982_413c33-e1729160290535.jpg?resize=1200,600",
      "title": "Musk’s empire risks being targeted by EU for potential X fines",
      "description": "The EU may target Elon Musk’s broader business empire for X fines, potentially including revenue from SpaceX and Neuralink to increase penalties.",
      "date": "2024-09-17T10:32:45Z",
      "category": "Business"
  },
  {
      "id": 3,
      "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1729160267/autoexpress/2024/10/Omode E5 first UK drive.jpg",
      "title": "Omoda E5 in Noble trim - pictures",
      "description": "Pictures of the electric Omode E5 SUV being driven on UK roads. Pictures taken by Auto Express senior photographer Pete Gibson",
      "date": "2024-10-15T10:30:56Z",
      "category": "Automobile"
  },
  {
      "id": 4,
      "image": "https://cdn.mos.cms.futurecdn.net/6xqynicLzH6sSskfiNyWoT-1200-80.jpg",
      "title": "Renault, Alpine and Citroën help the 2024 Paris Motor Show return to form",
      "description": "Explore the most delectable debuts at the Paris Motor Show 2024 – or Mondial de l'Auto – including designs from France's big car makers and niche machines from around the world",
      "date": "2024-10-13T10:25:24Z",
      "category": "Automobile"
  },
  {
      "id": 5,
      "image": "https://www.computerworld.com/wp-content/uploads/2024/10/3567767-0-90640600-1729160617-IDG-Germany-Intel-September-News.jpg?quality=50&strip=all&w=1024",
      "title": "Chinese cybersecurity association urges review of Intel products",
      "description": "The Cybersecurity Association of China (CSAC) has urged a security review of Intel products sold in the country, claiming the US semiconductor firm poses ongoing threats to China’s national security and interests.",
      "date": "2024-10-01T10:22:56Z",
      "category": "Business"
  },
  {
      "id": 16,
      "image": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F373bb633-e69e-42b0-b47d-028167d3b3be.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
      "title": "Biden Seeks to Reassure Voters Amidst Economic Concerns",
      "description": "President Biden addresses economic concerns as he campaigns for a second term, emphasizing job growth and inflation control.",
      "date": "2024-10-26T08:15:00Z",
      "category": "US Election"
  },
  {
      "id": 17,
      "image": "https://static01.nyt.com/images/2021/07/03/us/politics/03trump1/merlin_189960393_a33538ef-c98c-456a-b2b4-02e7c5d202a5-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      "title": "Trump Holds Rally in Florida, Focuses on Immigration and Economy",
      "description": "Former President Donald Trump held a massive rally in Florida, promising to secure the border and revitalize the economy.",
      "date": "2024-10-25T12:30:00Z",
      "category": "US Election"
  },
  {
      "id": 18,
      "image": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ix7CBWO6U5kg/v0/-1x-1.webp",
      "title": "Kamala Harris Appeals to Young Voters in Key Swing States",
      "description": "Vice President Harris targets young voters with promises of student debt relief and climate action in swing states.",
      "date": "2024-10-24T14:00:00Z",
      "category": "US Election"
  },
  {
      "id": 19,
      "image": "https://d.newsweek.com/en/full/2477161/harris-trumps-policies-7-key-issues.png?w=1600&h=900&q=88&f=ca3e8e0777613124741b8efe2a52c6a1",
      "title": "Presidential Debate Highlights Key Issues on Foreign Policy and Healthcare",
      "description": "Candidates sparred over foreign policy and healthcare reform in a heated debate, drawing sharp contrasts between their platforms.",
      "date": "2024-10-23T20:00:00Z",
      "category": "US Election"
  },
  {
      "id": 22,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqWdXf5_pQQx2BZklhuUNSfoMCkR99FOkBQ&s",
      "title": "Swing States Become Battlegrounds in Final Weeks of Campaign",
      "description": "Candidates intensify efforts in swing states as the race tightens, with both sides looking to secure crucial electoral votes.",
      "date": "2024-10-20T15:30:00Z",
      "category": "US Election"
  },
  {
      "id": 35,
      "image": "https://www.estrelladigital.es/wp-content/uploads/2024/07/@EURO2024.jpg",
      "title": "Dramática Final de la Copa Europea con Gol de Último Minuto",
      "description": "El equipo de Barcelona se coronó campeón tras un gol en los últimos segundos, en un partido que mantuvo a los fanáticos al borde de sus asientos.",
      "date": "2024-10-29T20:45:00Z",
      "category": "sports"
  },
  {
      "id": 36,
      "image": "https://fotografias.larazon.es/clipping/cmsimages02/2024/10/13/AFC84EE2-4EFA-425D-9BA8-9B11CCA1FA3B/98.jpg?crop=1920,1080,x0,y128&width=1900&height=1069&optimize=low&format=webply",
      "title": "Corredora Keniana Rompe Récord Mundial en la Maratón de Nueva York",
      "description": "Con un tiempo impresionante, la corredora keniana superó el récord mundial, llevando la carrera a otro nivel de exigencia y resistencia.",
      "date": "2024-10-28T09:00:00Z",
      "category": "sports"
  },
  {
      "id": 37,
      "image": "https://imagenes.noticiasrcn.com/ImgNoticias/styles/530xauto/s3/noticias/kobebryant281013.jpg?w=480",
      "title": "Estrella de la NBA Regresa a las Canchas Tras Lesión de Rodilla",
      "description": "La figura de los Lakers, recuperada de su lesión, volvió con una actuación estelar, anotando 35 puntos en su primer partido de la temporada.",
      "date": "2024-10-27T18:30:00Z",
      "category": "sports"
  },
  {
      "id": 38,
      "image": "https://fotografias.antena3.com/clipping/cmsimages01/2023/01/28/9F91BBB9-89BE-493C-B39F-D82E03F604D0/aryna-sabalenka-levanta-trofeo-open-australia-2023_98.jpg?crop=3301,1857,x0,y19&width=1900&height=1069&optimize=low&format=webply",
      "title": "Histórico: Jugadora de 17 Años Gana su Primer Grand Slam en Wimbledon",
      "description": "La joven promesa del tenis internacional venció a la favorita en una final de Wimbledon inolvidable, convirtiéndose en la campeona más joven en décadas.",
      "date": "2024-10-26T16:00:00Z",
      "category": "sports"
  },
  {
      "id": 39,
      "image": "https://media.vogue.mx/photos/62939ebb7b2bff8a2e7d242e/master/w_1600%2Cc_limit/checo-perez-gran-premio-de-monaco.jpg",
      "title": "Piloto Mexicano Gana el Gran Premio de Mónaco en la Fórmula 1",
      "description": "El piloto sorprendió al mundo al conseguir su primera victoria en Mónaco, en una carrera llena de giros inesperados y adelantamientos.",
      "date": "2024-10-25T13:45:00Z",
      "category": "sports"
  },
  {
      "id": 40,
      "image": "https://cdn.sortiraparis.com/images/80/105179/1015367-etienne-dinet-passions-algeriennes-l-exposition-qui-nous-fait-voyager-a-l-ima-photos-img20240129102221.jpg",
      "title": "Exposición de Arte Moderno en París Atrae a Miles de Visitantes",
      "description": "La muestra anual de arte moderno presenta obras innovadoras de artistas internacionales, cautivando a miles de visitantes en el centro de París.",
      "date": "2024-10-29T09:00:00Z",
      "category": "Culture"
  },
  {
    "id": 41,
    "image": "https://bilbaomuseoa.eus/media/2021/12/exposicion-paris-y-los-surrealistas.jpg",
    "title": "Exposición de Surrealismo Despierta la Curiosidad del Público en París",
    "description": "Artistas surrealistas de todo el mundo han reunido obras impactantes en una exposición que explora lo irracional y los sueños, atrayendo a un público diverso en París.",
    "date": "2024-10-28T14:00:00Z",
    "category": "Art"
},
{
    "id": 42,
    "image": "https://www.gaytravel4u.com/wp-content/uploads/2021/07/Berlin-Festival-of-Lights-6.jpg",
    "title": "Instalaciones de Arte Lumínico Deslumbran en el Corazón de Berlín",
    "description": "Un espectáculo de instalaciones artísticas con luz se apodera de las calles de Berlín, creando una atmósfera mágica que ha fascinado tanto a locales como a turistas.",
    "date": "2024-10-27T19:30:00Z",
    "category": "Art"
},
{
    "id": 43,
    "image": "https://img.freepik.com/foto-gratis/hermosa-figura-romana-tallada_23-2149413142.jpg",
    "title": "Esculturas Modulares Impresionan en la Bienal de Venecia",
    "description": "Escultores contemporáneos presentan piezas modulares que permiten la interacción del público en la Bienal de Venecia, una de las citas más esperadas del año.",
    "date": "2024-10-26T12:00:00Z",
    "category": "Art"
},
{
    "id": 44,
    "image": "https://www.futuroprossimo.it/wp-content/uploads/2023/12/v1_txt2img_76c80ff7-bb08-4a52-9d92-f56a53afd82f-1.png",
    "title": "El Arte Digital Revoluciona la Feria Internacional de Nueva York",
    "description": "Artistas digitales presentan sus últimas creaciones en una feria que destaca por fusionar tecnología y arte, atrayendo a expertos y aficionados de todo el mundo.",
    "date": "2024-10-25T10:00:00Z",
    "category": "Art"
},
{
    "id": 45,
    "image": "https://www.lavanguardia.com/andro4all/hero/2023/12/robot-de-tesla-optimus-gen-2.png?width=768&aspect_ratio=16:9&format=nowebp",
    "title": "Nuevas Tecnologías Robóticas Revolucionan la Industria en Tokio",
    "description": "La feria internacional de robótica en Tokio presenta avances impresionantes en automatización industrial, con robots más precisos y eficientes que nunca.",
    "date": "2024-10-30T11:00:00Z",
    "category": "Innovation"
},
{
    "id": 46,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrihcznfXs9hSDj61KQT_Jp2Zf76Tql0z0pw&s",
    "title": "Innovación en Energía Renovable Impulsa la Sostenibilidad en Berlín",
    "description": "Una conferencia en Berlín destaca los últimos avances en energía renovable, incluyendo tecnologías para mejorar la eficiencia de los paneles solares y el almacenamiento de energía.",
    "date": "2024-10-29T15:00:00Z",
    "category": "Innovation"
},
{
    "id": 47,
    "image": "https://mediatek-marketing.transforms.svdcdn.com/production/posts/MediaTek-IA-2023.jpg?w=2048&h=1075&q=80&auto=format&fit=crop&dm=1688130337&s=3b56535c28f441a34db9455d64444cb7",
    "title": "La Inteligencia Artificial Transforma el Futuro de la Medicina en Londres",
    "description": "Expertos en IA muestran nuevas aplicaciones para diagnósticos médicos más rápidos y precisos, marcando un hito en la medicina moderna durante un evento en Londres.",
    "date": "2024-10-28T13:30:00Z",
    "category": "Innovation"
},
{
    "id": 48,
    "image": "https://media.licdn.com/dms/image/v2/C4E12AQE2LDKc-MULfw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1586237082626?e=2147483647&v=beta&t=bV_iyAbn5lHvw069VyqpIdvL3f2SCRixwVfSVnimeak",
    "title": "Vehículos Autónomos Protagonizan el Futuro del Transporte en Silicon Valley",
    "description": "Las últimas pruebas de coches autónomos demuestran avances en seguridad y eficiencia, dejando claro que el futuro del transporte está cada vez más cerca.",
    "date": "2024-10-27T09:00:00Z",
    "category": "Innovation"
},
{
    "id": 49,
    "image": "https://formacad.es/wp-content/uploads/2023/07/tecnologia-equipamiento-laboratorio-azul-generado-ia-min-1024x585.jpg",
    "title": "Impresión 3D Revoluciona la Construcción Sostenible en Dubái",
    "description": "Un nuevo proyecto en Dubái utiliza la impresión 3D para construir estructuras sostenibles y reducir el impacto ambiental en la construcción tradicional.",
    "date": "2024-10-26T16:00:00Z",
    "category": "Innovation"
},
{
    "id": 50,
    "image": "https://www.corbataslester.com/magazine/wp-content/uploads/2023/04/viajes-en-tren-de-lujo-.jpg",
    "title": "El Tren de Lujo Que Redefine el Turismo en los Alpes Suizos",
    "description": "Un nuevo tren de lujo ofrece un viaje inolvidable a través de los Alpes suizos, con vistas espectaculares, gastronomía gourmet y una experiencia de primera clase.",
    "date": "2024-10-29T10:00:00Z",
    "category": "Travel"
},
{
    "id": 51,
    "image": "https://www.oneair.es/wp-content/uploads/2023/09/aviones-electricos.jpg",
    "title": "Aviones Eléctricos: El Futuro del Transporte Aéreo Sostenible Despega en Noruega",
    "description": "Noruega lidera el cambio hacia vuelos sostenibles con el lanzamiento de aviones eléctricos para rutas cortas, revolucionando el turismo ecológico.",
    "date": "2024-10-28T12:00:00Z",
    "category": "Travel"
},
{
    "id": 52,
    "image": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/traveler.es_.jpg",
    "title": "Inauguran el Primer Hotel Submarino del Mundo en las Maldivas",
    "description": "Las Maldivas sorprenden al mundo con un hotel submarino que permite a los huéspedes disfrutar de una experiencia única rodeada por la vida marina en un entorno de lujo.",
    "date": "2024-10-27T17:00:00Z",
    "category": "Travel"
},
{
    "id": 53,
    "image": "https://rutasdeafrica.es/wp-content/uploads/2019/05/bd9db43d-8be5-4550-a8a0-6f3d5ac3999a.jpg",
    "title": "Nuevas Rutas de Aventura en África Atraen a los Amantes del Ecoturismo",
    "description": "Agencias de viaje lanzan emocionantes rutas de aventura en el corazón de África, combinando safaris, senderismo y experiencias culturales para los viajeros más intrépidos.",
    "date": "2024-10-26T09:30:00Z",
    "category": "Travel"
},
{
    "id": 54,
    "image": "https://ecologismos.com/wp-content/2017/06/Ecoship.jpg",
    "title": "Los Cruceros Ecológicos Ganan Popularidad en el Mediterráneo",
    "description": "Nuevos cruceros ecológicos con energías limpias están cambiando la forma de viajar por el Mediterráneo, ofreciendo experiencias de lujo con un enfoque sostenible.",
    "date": "2024-10-25T14:00:00Z",
    "category": "Travel"
},
{
    "id": 55,
    "image": "https://azadaverde.org/wp-content/uploads/2023/08/Que-es-la-reforestacion.jpg",
    "title": "Iniciativa de Reforestación en el Amazonas Supera Expectativas",
    "description": "Un ambicioso proyecto de reforestación en el Amazonas ha plantado más de un millón de árboles en solo seis meses, contribuyendo a la lucha contra el cambio climático.",
    "date": "2024-10-30T08:00:00Z",
    "category": "Earth"
},
{
    "id": 56,
    "image": "https://estaticos-cdn.prensaiberica.es/clip/a26c442a-70c2-475e-abb9-b963a00641fd_16-9-aspect-ratio_default_0.jpg",
    "title": "Las 'Mareas Verdes' Afectan Ecosistemas Costeros en el Sudeste Asiático",
    "description": "Un fenómeno de algas invasivas conocido como 'mareas verdes' está afectando a las costas del Sudeste Asiático, alterando el equilibrio ecológico de la región y preocupando a los expertos.",
    "date": "2024-10-29T13:00:00Z",
    "category": "Earth"
},
{
    "id": 57,
    "image": "https://content.nationalgeographic.com.es/medio/2018/12/06/terminal-de-salida-de-un-glaciar-en-el-oeste-de-groenlandia_4a01784f_570x380.jpg",
    "title": "El Deshielo de los Polos Alcanza Nuevos Récords en 2024",
    "description": "Nuevos estudios muestran que el deshielo en los polos ha alcanzado niveles alarmantes este año, generando un aumento en el nivel del mar que amenaza a las comunidades costeras.",
    "date": "2024-10-28T10:30:00Z",
    "category": "Earth"
},
{
    "id": 58,
    "image": "https://imagenes.20minutos.es/files/image_640_480/uploads/imagenes/2023/04/27/fotografia-parque-nacional-serengueti.jpeg",
    "title": "Reservas Naturales en África Crecen para Proteger la Biodiversidad",
    "description": "Nuevas áreas protegidas en África están siendo establecidas para preservar especies en peligro de extinción, fortaleciendo los esfuerzos de conservación en el continente.",
    "date": "2024-10-27T12:00:00Z",
    "category": "Earth"
},
{
    "id": 59,
    "image": "https://www.europarl.europa.eu/resources/library/images/20181008PHT15277/20181008PHT15277_original.jpg",
    "title": "Proyecto Internacional Limpia Toneladas de Plástico en los Océanos",
    "description": "Una colaboración global ha retirado más de 100 toneladas de plástico de los océanos este año, en un esfuerzo continuo por salvar la vida marina y reducir la contaminación.",
    "date": "2024-10-26T16:00:00Z",
    "category": "Earth"
},
{
    "id": 60,
    "image": "https://img.freepik.com/fotos-premium/vibrante-escena-festival-cultural-indigena_1168612-399137.jpg",
    "title": "Festival de Cultura Indígena en México Rescata Tradiciones Ancestrales",
    "description": "Un festival en México celebra las tradiciones indígenas con danzas, gastronomía y rituales antiguos, conectando a nuevas generaciones con su herencia cultural.",
    "date": "2024-10-30T11:00:00Z",
    "category": "Culture"
},
{
    "id": 61,
    "image": "https://media-front.elmostrador.cl/2014/11/Manifiesto-Artes-de-Calle-700x455.jpg",
    "title": "Teatro Callejero en Buenos Aires Atrae a Miles con Obras Sociales",
    "description": "El teatro callejero en Buenos Aires está transformando espacios públicos en escenarios abiertos, ofreciendo al público obras que abordan temas sociales y políticos.",
    "date": "2024-10-29T18:00:00Z",
    "category": "Culture"
},
{
    "id": 62,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtx2RwKTYNsOGrfEIm1YVDky6C92IbVz1NA&s",
    "title": "Exposición en París Celebra la Influencia de la Cultura Asiática en el Arte Contemporáneo",
    "description": "Una nueva exposición en París muestra cómo la cultura asiática ha influido profundamente en el arte contemporáneo, con obras que exploran la fusión de tradiciones y modernidad.",
    "date": "2024-10-28T09:00:00Z",
    "category": "Culture"
},
{
    "id": 63,
    "image": "https://www.blubale.com/images/blogPages/ceilidh/ceilidh-bagpipe@2.webp",
    "title": "Festival de Música Tradicional en Escocia Revive Ritmos Celtas",
    "description": "Músicos de todo el mundo se reúnen en Escocia para celebrar y revivir la música celta, atrayendo a miles de visitantes interesados en las raíces de esta rica tradición musical.",
    "date": "2024-10-27T14:00:00Z",
    "category": "Culture"
},
{
    "id": 64,
    "image": "https://images.ecestaticos.com/NybNMXF1QYl3M1facouUpSNwtQM=/126x0:2145x1513/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F54e%2F1ff%2F37e%2F54e1ff37e5f5ac09f9b1bd58c810833d.jpg",
    "title": "Celebraciones del Día de Muertos en México Alcanzan Nuevas Dimensiones",
    "description": "El Día de Muertos en México sigue creciendo como una de las celebraciones culturales más importantes, combinando arte, música y rituales que honran a los difuntos en un despliegue colorido y emotivo.",
    "date": "2024-10-26T20:00:00Z",
    "category": "Culture"
},
{
    "id": 65,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV5jZ9uwzyeCnlZSDvyqdKOwWohbkoLjkFQ&s",
    "title": "Startups Tecnológicas Deslumbran en la Conferencia de Innovación en Silicon Valley",
    "description": "Las startups más prometedoras presentaron nuevas soluciones tecnológicas durante una conferencia en Silicon Valley, atrayendo a inversores y expertos de todo el mundo.",
    "date": "2024-10-30T09:00:00Z",
    "category": "Business"
},
{
    "id": 66,
    "image": "https://www.santander.com/content/dam/santander-com/es/stories/contenido-stories/2021/educacionfinanciera/im-storie-guia-para-saber-que-son-las-criptomonedas-3.jpg",
    "title": "El Crecimiento del Mercado Cripto en América Latina Llama la Atención de Inversores",
    "description": "América Latina ha emergido como una de las regiones de mayor crecimiento en el uso de criptomonedas, con nuevos proyectos atrayendo la atención de inversores internacionales.",
    "date": "2024-10-29T12:30:00Z",
    "category": "Business"
},
{
    "id": 67,
    "image": "https://revistamercado.do/wp-content/uploads/2024/09/Marcas-de-lujo-ma%CC%81s-valiosas-copy.jpg",
    "title": "Marcas de Lujo Europeas Apuestan por la Expansión en el Mercado Asiático",
    "description": "Grandes firmas de lujo europeas están aumentando su presencia en Asia, lanzando nuevas boutiques y productos exclusivos para satisfacer la creciente demanda de consumidores en la región.",
    "date": "2024-10-28T10:00:00Z",
    "category": "Business"
}


];


// Definición de <custom-search>
class CustomSearch extends HTMLElement {
    constructor() {
        super();
        this.articles = articles;
    }

    connectedCallback() {
        const dialogBtn = this.querySelector('.dialog-search');
        const closeBtn = this.querySelector('.close-btn');
        const dialog = this.querySelector('dialog');
        dialogBtn.addEventListener('click', () => dialog.showModal());
        closeBtn.addEventListener('click', () => dialog.close());
        const siteSearch = this.querySelector('#site-search');
        siteSearch.addEventListener('input', (event) => this.search(event));
        this.renderResults('');
    }

    search(event) {
        event.preventDefault();
        const term = event.target.value;
        this.renderResults(term);
    }

    renderResults(term = '') {
        const searchResults = this.querySelector('#search-results');
        searchResults.innerHTML = '';
        const filteredArticles = this.articles
            .filter(article => article.title.toLowerCase().includes(term.toLowerCase()));

        const template = this.querySelector('template').content;
        filteredArticles.forEach(article => {
            const li = template.querySelector('li').cloneNode(true);
            li.querySelector('.card .item-image').src = article.image;
            li.querySelector('.card .item-description').textContent = article.description;
            li.querySelector('relative-time').setAttribute('time', article.date);
            const titleLink = li.querySelector('.card .item-title a');
            titleLink.textContent = article.title;
            titleLink.href = `article.html?id=${article.id}`;
            searchResults.appendChild(li);
        });
    }
}
customElements.define('custom-search', CustomSearch);

// Definición de <custom-article>
class CustomArticle extends HTMLElement {
    constructor() {
        super();
        this.articleId = new URLSearchParams(window.location.search).get('id');
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const article = articles.find(article => article.id == this.articleId);
        if (article) {
            this.querySelector('h1').textContent = article.title;
            this.querySelector('p').textContent = article.description;
            this.querySelector('img').src = article.image;
            this.querySelector('relative-time').setAttribute('time', article.date);
        } else {
            this.innerHTML = '<p>Artículo no encontrado</p>';
        }
    }
}
customElements.define('custom-article', CustomArticle);



// Función para renderizar artículos en página principal
function renderNews() {
  const containers = [
      document.querySelector('.item-contenedor1'),
      document.querySelector('.item-contenedor2'),
      document.querySelector('.item-contenedor3')
  ];

  // Detectar la categoría según la página actual
  let category;
  const currentPath = window.location.pathname;
  if (currentPath.includes('us.html')) {
      category = "US Election";
  } else if (currentPath.includes('innovation.html')) {
      category = "Innovation";
  } else if (currentPath.includes('sports.html')) {
      category = "sports";
  } else if(currentPath.includes('business.html')) {
      category = "Business" 
  } 
  else if(currentPath.includes('culture.html')) {
    category = "Culture" 
}
else if(currentPath.includes('innovation.html')) {
  category = "Innovation" 

}else if(currentPath.includes('art.html')){
category = "Art"

}else if(currentPath.includes('Us.html')){
category = "US Election"
}else if(currentPath.includes('travel.html')){
category = "Travel"
}
else if(currentPath.includes('earth.html')){
    category = "Earth"
    }else{
    category = null //paginas sin filtro
  }

  // Filtrar artículos solo si hay una categoría definida
  const filteredArticles = category ? articles.filter(article => article.category === category) : articles;

  // Distribuir los artículos filtrados en los contenedores
  filteredArticles.forEach((article, index) => {
      const container = containers[index % containers.length];
      const link = document.createElement('a');
      link.href = `article.html?id=${article.id}`;
      link.classList.add('item');

      const itemDiv = document.createElement('div');
      const img = document.createElement('img');
      img.src = article.image;
      img.alt = article.title;
      img.style.width = '100%';
      img.style.borderRadius = '10px';
      itemDiv.appendChild(img);

      const title = document.createElement('h3');
      title.textContent = article.title;
      itemDiv.appendChild(title);

      const description = document.createElement('p');
      description.textContent = article.description;
      itemDiv.appendChild(description);

      link.appendChild(itemDiv);
      container.appendChild(link);
  });
}

// ejecutar la fun para sacar las noticias
document.addEventListener('DOMContentLoaded', renderNews);



//sacar la barra lateral
const toggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
function toggleSidebar() {
    sidebar.classList.toggle('active');
}
toggleButton.addEventListener('click', toggleSidebar);
document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});