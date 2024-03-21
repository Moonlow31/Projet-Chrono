const cards = document.querySelector(".cards");

//function strings creation de slide carrousel//

/*caroussel*/
(function () {
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const $slides = document.querySelectorAll('.slide');
    // Initialisation du slide courant à 0
    let currentSlide = 0;
    // Fonction pour afficher un slide spécifique en utilisant un index
    function slideTo(index) {
        // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
        currentSlide = index >= 5 || index < 1 ? 0 : index;
        // Boucle sur tous les éléments de type "slide" pour les déplacer
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
    }
    // Ajout d'un écouteur d'événement "click" sur le bouton "next" et "prev" pour faire défiler les slides
    prev.addEventListener('click', () => slideTo(--currentSlide));
    next.addEventListener('click', () => slideTo(++currentSlide));
})();



//function strings creation de carte//
function card(img, title, desc, quote, startcolor, endcolor) {
    const newCard = `
    <article class="card-container"style="background: linear-gradient(73deg, ${startcolor}, ${endcolor});">
    <button class="close-button">&#x274C;</button>
    <img src="${img}" class="card-img" alt="${title}">
        <h2>${title}</h2>
        <div class="description"> 
            <p>
               ${desc}
            </p>
            <blockquote class="quote">
                ${quote}
            </blockquote>
        </div>
    </article>
    `

    return newCard;
}


// tableau=création de carte
const arrayCard = [
    //card1 prehistoire
    {
        src: "./assets/imageCard/prehistoricmen.jpg",
        title: "l'Homme préhistorique",
        desc: "L'homme de Cro-Magnon était un individu préhistorique plein de surprises ! Imaginez un être robuste, aux sourcils proéminents et à la pilosité faciale sauvage, mais avec un sens de l'humour étonnamment vif. Il aurait probablement charmé ses compagnons de chasse en imitant les animaux de la savane d'une manière hilarante, ou peut-être en inventant des jeux ridiculement simples mais incroyablement divertissants avec des pierres et des bâtons. Ses rires résonneraient dans les cavernes, créant une ambiance chaleureuse et joyeuse même au cœur de l'âge de pierre. Ses pitreries pourraient même avoir été un moyen de renforcer les liens sociaux au sein de sa tribu, apportant un équilibre essentiel à la dureté de la vie quotidienne. Et qui sait, peut-être qu'il aurait également été le premier à inventer les premières blagues préhistoriques!.",
        quote: "Les premiers hommes qui ont habité la terre étaient bien à plaindre; ils étaient presque nus, ils n'avaient pas d'outils et ils devaient se défendre contre les bêtes féroces. - Voltaire",
        startcolor: "rgba(240,120,0,1) 0%",
        endcolor: "rgba(227,156,27,1) 100%"
    },
    //card2 age du bronze
    {
        src: "./assets/imageCard/homme du bronze.jpg",
        title: "Homme du bronze",
        desc: "L'homme de l'âge du bronze, un véritable bricoleur avant l'heure, maniait le métal avec autant d'adresse qu'un enfant manipulant de la pâte à modeler. Armé de ses ustensiles en bronze, il se lançait dans des batailles épiques contre la rouille et les ennemis du métal. Son quotidien était ponctué de chants métalliques, tels des concerts improvisés avec ses instruments de forge. Son ambition ? Transformer tout ce qui croisait son chemin en une œuvre d'art métallique, que ce soit une épée ou une simple cuiller. Il était l'artisan de son temps, démontrant que même l'âge du bronze pouvait briller d'humour et de créativité.",
        quote: "Entre la dureté du fer et la douceur de l'âge du bronze, réside la beauté de l'histoire forgée dans les flammes de l'innovation.",
        startcolor: "rgba(227,156,27,1) 0%",
        endcolor: " rgba(224,179,29,1)"
    },
    //card3 age du fer
    {
        src: "./assets/imageCard/agedufer.jpg",
        title: "L'âge du fer",
        desc: "À l'âge du fer, les coiffeurs étaient aussi rares que les rasoirs. Se réveiller avec une coupe de cheveux sauvage était la norme. Les fêtes étaient éclairées par des torches, mais les gens se plaignaient toujours de la mode flammes vacillantes. Les métaux précieux n'étaient que des cailloux brillants, jusqu'à ce que quelqu'un découvre le fer. Les pannes de courant étaient un mythe, à moins qu'une tribu rivale ne coupe vos fils électriques. Les repas étaient simples : viande grillée et racines, avec une garniture de sarcasmes. On disait souvent que quelqu'un avait un caractère en fer, surtout après une nuit de fête. Les armes étaient si lourdes que les batailles se transformaient parfois en concours de haltérophilie. Et pourtant, malgré les défis, c'était l'âge où tout semblait être possible, même si cela impliquait de traîner un chariot sur des routes cahoteuses.",
        quote: "À l'âge du fer, on n'avait pas besoin de régime, la chasse aux mammouths était notre salle de sport !",
        startcolor: "rgba(224,179,29,1)0%",
        endcolor: "rgba(224,194,94,1) 100%"
    },
    //card4 antiquité 
    {
        src: "./assets/imageCard/antiquité.jpg",
        title: "L'Antiquité",
        desc: "L'Antiquité, c'était un peu comme la première saison d'une série à succès : des dieux en toge qui régnaient depuis l'Olympe, des empereurs qui se prenaient pour des divinités, et des guerres pour conquérir des territoires qui faisaient plus de bruit qu'une dispute de voisins pour une haie mal taillée. Les gens s'entassaient dans des arènes pour regarder des gladiateurs se battre en espérant que ça finisse mieux que leurs propres querelles de famille. Les philosophes se prenaient tellement au sérieux qu'ils passaient plus de temps à réfléchir à la signification de la vie qu'à la vivre. Et n'oublions pas les Romains, qui ont construit des routes si droites qu'elles rendaient jaloux même les conducteurs les plus pointilleux de nos jours. En bref, l'Antiquité était un mix entre Game of Thrones et The Real Housewives, avec une dose de sagesse et beaucoup de vin.",
        quote: "Quand on voit le nombre de statues érigées à leur gloire, on se demande si les empereurs romains n étaient pas les premiers à inventer le selfie en marbre.",
        startcolor: "rgba(224,194,94,1)0%",
        endcolor: "rgba(224,203,29,1) 100%"
    },
    //card5 moyenage 
    {
        src: "./assets/imageCard/moyenage.jpg",
        title: "Le Moyen age",
        desc: "L'homme du Moyen Âge, tel un chevalier sans son destrier, naviguait entre des châteaux aussi nombreux que les boulangeries de nos jours. Avec ses armures épaisses, il se préparait pour des batailles qui semblaient parfois plus proches de tournois de pelote que de guerres. Son quotidien était rythmé par les claquements de sabots sur les pavés, les troubadours en quête d'auditoire et les odeurs envoûtantes de fumée et de boue. Entre deux affrontements, il trouvait refuge dans des tavernes aux noms aussi colorés que leurs boissons, échangeant des histoires aussi exagérées que ses épées. Dans ce monde de seigneurs et de serfs, l'homme médiéval jonglait entre honneur et humour, souvent avec un clin d'œil malicieux.",
        quote: "Dans les ombres du Moyen Âge, l'homme tisse sa destinée entre les fils de l'épée et les fils du savoir, jonglant entre les tourments de la guerre et les lueurs de la connaissance.",
        startcolor: " rgba(224,203,29,1) 0%",
        endcolor: "rgba(223,230,37,1) 100%",
    },
    //card6 l'homme moderne

    {
        src: "./assets/imageCard/modernmen.jpg",
        title: "L'homme moderne",
        desc: "L'homme moderne, habillé de ses jeans et de son café à emporter, jongle entre les notifications de son smartphone et les réunions ennuyeuses. Son habitat, un sanctuaire high-tech, ressemble plus à une salle de contrôle spatiale qu'à un simple foyer. Il se déplace dans des machines rugissantes, naviguant habilement entre les embouteillages urbains comme un pilote de course. Son régime alimentaire est un équilibre délicat entre fast-food et salades superfood, tentant de concilier plaisir et santé. Il communique davantage avec des emojis qu'avec des mots, réduisant parfois les conversations complexes à des LOLs et des GIFs. Malgré tout, l'homme moderne trouve toujours le temps de rire de lui-même et de ses péripéties dans ce monde numérique déconcertant.",
        quote: "L'homme moderne : capable de commander une pizza avec son téléphone, mais incapable de trouver la télécommande pour changer de chaîne.",
        startcolor: "rgba(223,230,37,1) 0%",
        endcolor: "  rgba(241,242,0,1) 100%"
    },
    //card7 l'homme 2.0
    {
        src: "./assets/imageCard/l'homme2.0t.png",
        title: "L'homme 2.0",
        desc: "L'homme du futur, aussi connecté qu'un réseau Wi-Fi, jongle entre réalité virtuelle et intelligence artificielle, comme un danseur de tango avec des robots. Sa maison ressemble plus à un vaisseau spatial qu'à un domicile terrestre, avec des gadgets futuristes à chaque coin. Sa nourriture est fabriquée en laboratoire, mais il rêve toujours de hamburgers volants et de pizzas téléportées. Ses conversations avec les drones et les androïdes sont ponctuées de blagues algorithmiques et de mèmes holographiques. Malgré le règne des machines, l'homme 2.0 reste maître de son destin, jonglant avec des lignes de code et des circuits électriques. Il a survécu à l'attaque des machines grâce à sa compréhension et maîtrise des langages informatiques. La première phrase qu'il apprit au robot fut :",
        quote: "caaavvvaaaa, t'inquiète frérot.",
        startcolor: " rgba(241,242,0,1) 0%",
        endcolor: " rgba(157,255,0,1) 100%"
    }]

arrayCard.forEach(cardInfo => {
    cards.innerHTML += card(cardInfo.src, cardInfo.title, cardInfo.desc, cardInfo.quote, cardInfo.startcolor, cardInfo.endcolor);
});


//click caroussel-card
const carouselItems = document.querySelectorAll('.slide');

document.querySelector('.card-container').style.display = 'block';

carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        document.querySelectorAll('.card-container').forEach(card => {
            card.style.display = 'none';
        });

        document.querySelectorAll('.card-container')[index].style.display = 'block';
    });
});
document.querySelectorAll('.card-container').forEach(card => {
    card.style.display = 'none';
});

/* croix fermeture cartes*/
const closeButton = document.querySelectorAll('.close-button');

closeButton.forEach(button => {
    button.addEventListener('click', () => {
      
        button.closest('.card-container').style.display = 'none';
    });
});
//function strings creation de lignes de frise
function frise(img, title, desc, startcolor, endcolor) {
    const newLine = `<img src=${img} class ="friseImage" alt=${title}>
    <li style="background: linear-gradient(73deg,${startcolor},${endcolor});>
        <article class="timeline-content">
            <img src=${img} class ="friseImage2" alt=${title}>
           <h2>${title}</h2>
            <p>${desc}</p>
        </article>
    </li> 
    `
    return newLine;
};

const lines = document.querySelector(".chronoLines");



// tableau=création de ligne de frise
const arrayLines = [
    //line1 prehistoire

    {src:"./assets/imagefrise/prehistoire.jpg",
    title:"Préhistoire",
    desc:"La préhistoire, c'est comme un grand spectacle de stand-up comique où les dinosaures jouent les vedettes avec leurs blagues cinglantes. Les hommes des cavernes, eux, essaient de rivaliser en jonglant avec des pierres et en essayant de domestiquer les mammouths pour des numéros hilarants. C'est une époque où les repas consistent à essayer de cuire des aliments sans provoquer d'incendies, et où les premiers artistes préhistoriques tentent désespérément de dessiner sur des murs en essayant de garder leurs mains propres. C'est aussi le temps où l'homme a inventé les premiers outils, probablement pour essayer de réparer les pots cassés après des soirées préhistoriques trop animées. En bref, la préhistoire, c'est comme un sketch continu où même les plus grands moments historiques sont imprégnés d'une touche de folie et de fantaisie.", 
    startcolor:"rgba(240,120,0,1) 0%",
    endcolor:"rgba(227,156,27,1) 100%"},
    //line2 age du bronze
    {src:"./assets/imagefrise/bronze.jpg",
    title:"L'Âge du Bronze",
    desc:"L'Âge du Bronze, c'est un peu comme une fête costumée géante où tout le monde se prend pour un héros mythique. Les guerriers se baladent avec des épées étincelantes, mais se plaignent quand même que leur armure est trop lourde pour danser. Les rois se disputent pour des territoires en lançant des défis de force plutôt que des pétitions. Pendant ce temps, les artisans créent des chefs-d'œuvre en bronze, tout en se demandant si quelqu'un va un jour apprécier leur travail autant que leur mère. Les dieux, eux, assistent à tout ce spectacle en se demandant s'ils devraient intervenir ou juste prendre du pop-corn divin. En résumé, l'Âge du Bronze, c'est un mélange hilarant de bravoure, de vanité et de métal brillant, le tout servi avec une bonne dose d'épopée et de farce.",
    startcolor:"rgba(227,156,27,1) 0%",
    endcolor:" rgba(224,179,29,1)"},

   
    //line3 age du fer
    {
        src: "./assets/imagefrise/fer.jpg",
        title: "L'âge du fer",
        desc: "L'Âge du Fer, c'est comme une grande compétition de recyclage où tout le monde essaie de créer la meilleure arme à partir de tout ce qui traîne. Les guerriers se battent avec des épées rouillées et des boucliers qui semblent avoir été fabriqués par leurs enfants. Les rois, eux, tentent de dominer le monde avec des chaises de fer massives, car les trônes en bois ont été démodés par les termites. Pendant ce temps, les agriculteurs inventent de nouvelles façons ingénieuses de labourer les champs avec des charrues qui ressemblent plus à des brouettes bricolées. Les dieux, de leur côté, observent le chaos avec amusement, se demandant si c'est vraiment ce qu'ils avaient prévu en donnant le feu aux humains. En somme, l'Âge du Fer, c'est une farce métallique où même les héros ont du mal à se sortir du pétrin avec style.",
        startcolor: "rgba(224,179,29,1)0%",
        endcolor: "rgba(224,194,94,1) 100%"
    },
    //line4 antiquité 
    {
        src: "./assets/imagefrise/antiquité.jpg",
        title: "L'Antiquité",
        desc: "L'Antiquité, c'est comme une immense comédie musicale où les dieux de l'Olympe jouent les stars capricieuses et les mortels tentent désespérément de suivre le rythme. Les empereurs se disputent le pouvoir en lançant des discours pompeux pendant que les sénateurs font des siestes discrètes. Les philosophes passent leur temps à se poser des questions existentielles sans jamais trouver de réponses claires, tandis que les gladiateurs jonglent entre la lutte pour leur survie et les contrats publicitaires pour des sandales. Les architectes construisent des temples somptueux pour les dieux, espérant secrètement qu'ils leur accorderont une place gratuite dans l'Olympe. En résumé, l'Antiquité, c'est une comédie théâtrale où le tragique et le comique se mêlent dans un enchevêtrement de drames divins et de farces humaines.",
        startcolor: "rgba(224,194,94,1)0%",
        endcolor: "rgba(224,203,29,1) 100%"
    },
    //line5 moyen age 
    {
        src: "./assets/imagefrise/moyenage.jpg",
        title: "Le Moyen age",
        desc: "Le Moyen Âge, c'est un peu comme une partie de jeu de rôle grandeur nature où tout le monde essaie de se débrouiller avec des costumes de chevaliers qui grattent et des châteaux pas si forts que ça. Les rois passent leur temps à se chamailler pour des terres où poussent plus d'herbes que de trésors, tandis que les princesses s'ennuient ferme en attendant leur preux chevalier, qui finit toujours par se perdre dans la forêt. Les moines, quant à eux, essaient de garder leur calme dans des monastères qui ressemblent plus à des clubs de tricot qu'à des sanctuaires sacrés. Les médecins pratiquent des saignées pour tout et n'importe quoi, affirmant que cela soigne tout, sauf peut-être l'intelligence. En somme, le Moyen Âge, c'est un joyeux mélange de quêtes improbables, de châteaux en carton-pâte et de remèdes farfelus qui donnent envie de rire autant que de pleurer.",
        startcolor: "rgba(224,203,29,1) 0%",
        endcolor: "rgba(223,230,37,1) 100%"
    },
    //line6 l'homme moderne

    {src:"./assets/imagefrise/moderne.jpg",
    title:"Epoque Moderne", 
    desc:"Aujourd'hui, c'est comme une émission de télé-réalité où tout le monde est accro à leurs écrans, mais personne ne sait vraiment ce qu'ils regardent. Les politiciens se lancent dans des débats dignes de séries comiques, avec des promesses plus exagérées que les scénarios de sitcoms. Pendant ce temps, les influenceurs tentent désespérément de rendre leurs vies aussi parfaites que des filtres Instagram, même si dans la vraie vie, c'est plus proche d'une sitcom des années 90. Les scientifiques jonglent entre la lutte contre les maladies et la création de gadgets qui rendent nos vies plus faciles mais aussi plus étranges. Et nous, les gens normaux, essayons simplement de comprendre ce qui se passe dans ce monde où même les chats ont leur propre chaîne YouTube. En bref, l'âge actuel, c'est comme une série télé qui essaie de mélanger drame, comédie et science-fiction, mais finit par ressembler à un épisode de La Guerre des Boutons en version numérique.",
    startcolor:"rgba(223,230,37,1) 0%",
    endcolor:"  rgba(241,242,0,1) 100%"},
    //line7 l'homme 2.0
    {src:"./assets/imagefrise/hommedufutur.jpg",
    title:"Le Futur",
    desc:"Dans le futur, les voitures volantes seront monnaie courante, mais le code de la route restera un mystère pour la plupart des conducteurs. Les robots domestiques feront tout, sauf comprendre les instructions simples comme ramasse tes chaussettes. Les hologrammes remplaceront les conférences ennuyeuses, mais il y aura toujours quelqu'un pour poser des questions stupides à l'IA. Les voyages dans le temps seront possibles, mais les gens iront juste pour récupérer des recettes de pizza vintage. Les extraterrestres finiront par nous rendre visite, mais juste pour demander des conseils sur la façon de gérer leur propre planète en désordre. En résumé, le futur sera un mélange hilarant de technologie de pointe, de malentendus intergalactiques et de pizza froide dans l'espace.",
    startcolor:" rgba(241,242,0,1) 0%",
    endcolor:" rgba(157,255,0,1) 100%"}];
    
arrayLines.forEach(lineInfo => {
    lines.innerHTML += frise(lineInfo.src, lineInfo.title, lineInfo.desc, lineInfo.startcolor,lineInfo.endcolor);
});
  
  
