import { useState } from "react";
import "../styles/campeones.css";
import shanumi from "../styles/imgs/Personajes/shanumi.avif";
import Materiales from "../styles/imgs/Personajes/materiales.avif";
import Sadic from "../styles/imgs/Personajes/SADic.avif";
import venom from "../styles/imgs/Personajes/venom.avif";
import Aka from "../styles/imgs/Personajes/Aka.avif";
import Ao from "../styles/imgs/Personajes/Ao.avif";
import Alice from "../styles/imgs/Personajes/alice.avif";
import Azazel from "../styles/imgs/Personajes/azazel.avif";
import Titiritero from "../styles/imgs/Personajes/titiritero.avif";
import Mesheti from "../styles/imgs/Personajes/Mesheti.avif";
import Cryomancer from "../styles/imgs/Personajes/Cryomancer.avif";
import Yorm from "../styles/imgs/Personajes/Yorm.avif";
import Kogane from "../styles/imgs/Personajes/Kogane.avif";
import Shiro from "../styles/imgs/Personajes/Shiro.avif";
import hachaDeHierro from "../styles/imgs/Habilidades/Hacha de hierro.avif";
import pielDeConejo from "../styles/imgs/Habilidades/Piel de conejo.avif";
import slime from "../styles/imgs/Habilidades/slime.avif";
import soporte from "../styles/imgs/Habilidades/soporte.avif";
import ironSword from "../styles/imgs/Habilidades/ironSword.avif";
import trigo from "../styles/imgs/Habilidades/trigo.avif";
import tijeras from "../styles/imgs/Habilidades/tijeras.avif";
import goldSword from "../styles/imgs/Habilidades/goldSword.avif";
import reloj from "../styles/imgs/Habilidades/reloj.avif";
import etiqueta from "../styles/imgs/Habilidades/etiqueta.avif";
import palo from "../styles/imgs/Habilidades/palo.avif";
import telaraña from "../styles/imgs/Habilidades/telaraña.avif";
import pocion from "../styles/imgs/Habilidades/pocionGif.gif";
import hazada from "../styles/imgs/Habilidades/hazada.avif";
import wither from "../styles/imgs/Habilidades/wither.avif";
import stoneSword from "../styles/imgs/Habilidades/stoneSword.avif";
import magicBow from "../styles/imgs/Habilidades/magicBow.avif";
import canya from "../styles/imgs/Habilidades/canya.avif";
import redstone from "../styles/imgs/Habilidades/redstone.avif";
import azucar from "../styles/imgs/Habilidades/azucar.avif";
import hielo from "../styles/imgs/Habilidades/hielo.avif";
import cuarzo from "../styles/imgs/Habilidades/cuarzo.avif";
import agua from "../styles/imgs/Habilidades/agua.avif";

const personajes = [
  {
    imagen: shanumi,
    nombre: "Titan",
    tipo: "Tanques",
    dificultad: "Media",
    historia: `Después de la muerte de sus padres, una familia noble la acogió.

Esta familia, sabiendo la desgracia que le llevo a la niña a estar con ellos, quisieron que se entrenara en combates cuerpo a cuerpo para que no le sucediera nada horrible.

Sin embargo, por mucho entrenamiento, la niña, no conseguía combatir como una gran luchadora, y por tanto, decidió entrenar por su cuenta, ya no cuerpo a cuerpo si no a distancia.

Como es de esperar, en el pueblo en el que vivía, no permitían tener armas a los niños. Por tanto, nuestra niña, cogió piedras y una caña y se fabricó su propia arma. 

Después de que sus nuevos padres fallecieran brutalmente asesinados, decidió que se volvería una gran luchadora para, simplemente, vengarlos.

Pero en el momento de la matanza, se dió cuenta que la venganza que había logrado matando al asesino de sus padres había sido esencial para darse cuenta de que lo suyo era matar.`,
    habilidades: [
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Materiales,
    nombre: "Materialist",
    tipo: "Luchadora",
    dificultad: "Baja",
    historia: `Se podría decir que esta chica adolescenete tuvo una infancia normal y corriente y nunca tuvo ningún tipo de problema respecto a lo que le rodeaba.
    Pero cuenta su historia que volviendo a casa sola, después de una noche de fiesta, se cayó en una alcantarilla y se desmayó del impacto.
    Al despertar estaba en la cama de un hospital, había pasado 3 meses en coma y su familia se alegraba de verla volver a hablar.
    Un día, volviendo a casa, se encontró una hacha envuelta en un trocito de cuero. Observandolo bien se dió cuenta que esta hacha y ese trocito de cuero tenían algo raro a su alrededor. Al coger el cuero apereció un muro delante suya y al coger el hacha la atravesó.
    Desde entonces pasa de pared en pared atrapando criminales con su hacha y su cuero. O por lo menos, eso es lo que nos dice ella, nosotros no podemos observar esas herramientas. ¿Estará loca?`,
    habilidades: [
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: venom,
    nombre: "Venom",
    tipo: "Tirador",
    dificultad: "Media",
    historia: `Se pasó muchos años de su vida estudiando cosas que no le agradaban, por eso, en el momento de elegir, eligió estudiar a los animales, más concretamente aquellos que desprendían veneno de su cuerpo para defenderse. Le apasionaba ese tipo de animales.

    Un día, como otro cualquiera, se ofreció a hacer un trabajo sobre el veneno en humanos. Se desquició tanto en ese trabajo que quiso saber lo que se siente al poder desprender veneno de su cuerpo.
    
    Comenzó ha hacer experimentos con veneno en su sangre, y extrañamente no falleció. Es más, ansiaba sentir el placer del veneno recorriendo cada una de las venas que le componían.
    
    Gracias a esta éxtasis que sentía con el veneno, comenzó a querer compartir este placer con el resto del mundo.
    
    Desde entonces, envenena a todas sus presas, los humanos.`,
    habilidades: [
      {
        nombre: "Bomba de veneno",
        icono: slime,
        descripcion: "",
      },
      {
        nombre: "Trampa de pies",
        icono: soporte,
        descripcion: "",
      },
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Sadic,
    nombre: "SADic",
    tipo: "Asesino",
    dificultad: "Media-Alta",
    historia: `Un niño normal y corriente, excepto por el bullying y el maltrato en casa. Se sentía solo y abandonado frente a un mundo de mierda lleno de peligros, o al menos lo que el pensaba.

    Pero su sufrimiento no termina allí. Un día al volver hacia casa, con todas las pocas ganas, se encontró con unos matones que le atacaron. 
    
    El pobre niño con heridas y llorando en una esquina, atrajo la atención de un hombre aparentemente amable que le ofreció cobijo en su casa. Consecutivamente a esto, nada mas entrar por la puerta, el hombre se intentó aprovechar del niño malherido.
    
    Entre llantos y suplicas se apoderó de un cuchillo y atravesó el cuello de su agresor.
    
    Entre tristeza y decepción frente a la poca esperanza que le quedaba de la humanidad, decidió exterminarla. Y como consecuencia hacer sufrir a cada una de las personas casi tanto como le hicieron sufrir a él, ya que igual que él no puede sufrir nadie.`,
    habilidades: [
      {
        nombre: "Basico",
        icono: ironSword,
        descripcion: "",
      },
      {
        nombre: "Asesinato sombra",
        icono: trigo,
        descripcion: "",
      },
      {
        nombre: "Desarmar",
        icono: tijeras,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Mesheti,
    nombre: "Meseti",
    tipo: "Luchador",
    dificultad: "Baja",
    historia: `Era un soldado del antiguo Egipto que cumplía ordenes de nuestra faraona.

    En el momento de la muerte de esta, le tocó morir enterrado junto a ella por el hecho de ser protector y amigo de la gran emperatriz.
    
    Por una extraña circunstancia, la faraona volvió a la vida, pero con un inconveniente, no podía salir de la esfinge que la custodiaba. Por tanto, decidió revivir a su amigo y guerrero Mesheti otorgándole sus propios poderes.
    
    Ahora él lucha por la orden de su emperatriz de ganar el torneo para conseguir el premio que otorgan, un deseo. 
    
    Su faraona le ordenó que el deseo que pidiera fuera su liberación para poder conquistar el nuevo mundo. Aunque él tenía otros planes.
    
    Incapaz de deshacerse de la orden de la emperatriz, en el momento del deseo pediría la libertad, pero con un pequeño cambio, su libertad propia al ancla que tenía junto a la faraona.`,
    habilidades: [
      {
        nombre: "Basico",
        icono: goldSword,
        descripcion: "",
      },
      {
        nombre: "Carcel",
        icono: reloj,
        descripcion: "",
      },
      {
        nombre: "Cambio",
        icono: etiqueta,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Titiritero,
    nombre: "El titiritero", //otero otero ti ti ti
    tipo: "Mago",
    dificultad: "Alta",
    historia: `Después de la trágica muerte de su primer hijo decidió enterrarle.

    El día del entierro se le acercó alguien extraño que le ofreció un libro. Esta persona le dijo "Esto te ayudará con tu dolor" y consecutivamente desapareció.
    
    La portada parecía un simple libro de autoestima, pero en el interior se observaban páginas y páginas de algo llamado necromancia.
    
    Decidido a recuperar a su hijo, comenzó con los preparativos del ritual. Pero le faltaba un ingrediente esencial, la sangre de un hij@.
    
    Se acostó con su nueva pareja, y pasando los años tuvieron un hijo, que posteriormente sería utilizado para finalizar el ritual.
    
    Cuando el niño ya era suficientemente mayor, fue asesinado por su padre.
    
    Por fin, después de tantos años de espera, el padre resucitó a su hijo, pero no todo había salido según lo planeado. Lo que volvió de entre los muertos ya no era su hijo.
    
    Avergonzado de las dos muertes de sus hijos, utilizaba a su hijo como títere para dar caza al que le dio el libro.
    
    `,
    habilidades: [
      {
        nombre: "Basico",
        icono: palo,
        descripcion: "",
      },
      {
        nombre: "Titere",
        icono: telaraña,
        descripcion: "",
      },
      {
        nombre: "Pociones",
        icono: pocion,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Azazel,
    nombre: "Azazel",
    tipo: "Luchador",
    dificultad: "Baja",
    historia: `Un ser sin historia el color de su piel lo dice todo`,
    habilidades: [
      {
        nombre: "Basico",
        icono: palo,
        descripcion: "",
      },
      {
        nombre: "Craneo del destino",
        icono: wither,
        descripcion: "",
      },
      {
        nombre: "Pociones",
        icono: pocion,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Alice,
    nombre: "Alice",
    tipo: "Asesina Luchadora Tiradora",
    dificultad: "Media",
    historia: `Criada en la liga de asesinos, tras años de tortura y combate, logra ser una gran asesina.

    El único inconveniente, el próximo amor de su vida, alguien que experimenta una velocidad extremadamente grande.
    
    Un día como otro cualquiera, en un momento dado aparece un enemigo que se hacia llamar Hermes. 
    
    Este personaje secuestró a su pareja y se la llevo a otro espacio temporal.
    
    Alice, tras haber intentado capturarlo y no lograrlo, se ve obligada a participar en el torneo para ganar, porque sabe que va a ganar.
    
    Su motivación es el deseo de volver a encontrarse con el amor de su vida y, obviamente, de matar a su captor.`,
    habilidades: [
      {
        nombre: "Basico",
        icono: stoneSword,
        descripcion: "",
      },
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Marca de teletransporte",
        icono: canya,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Aka,
    nombre: "Aka",
    tipo: "Tirador",
    dificultad: "Baja",
    historia: ` `,
    habilidades: [
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Marca de teletransporte",
        icono: canya,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Ao,
    nombre: "Ao",
    tipo: "Tirador",
    dificultad: "Baja",
    historia: ` `,
    habilidades: [
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Marca de teletransporte",
        icono: canya,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Kogane,
    nombre: "Kogane",
    tipo: "Tirador",
    dificultad: "Baja",
    historia: ` `,
    habilidades: [
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Marca de teletransporte",
        icono: canya,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Shiro,
    nombre: "Shiro",
    tipo: "Tirador",
    dificultad: "Baja",
    historia: ` `,
    habilidades: [
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Basico",
        icono: magicBow,
        descripcion: "",
      },
      {
        nombre: "Marca de teletransporte",
        icono: canya,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Yorm,
    nombre: "Yorm",
    tipo: "Tanque",
    dificultad: "Media",
    historia: ` `,
    habilidades: [
      {
        nombre: "Basico & Terremto",
        icono: hachaDeHierro,
        descripcion: "",
      },
      {
        nombre: "Forma Gigante",
        icono: redstone,
        descripcion: "",
      },
      {
        nombre: "Marca de teletransporte",
        icono: canya,
        descripcion: "",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "",
      },
    ],
  },
  {
    imagen: Cryomancer,
    nombre: "Cryomancer",
    tipo: "Mago",
    dificultad: "Alta",
    historia: `Nathan era un niño del reino de StormFrost que vivía con su padres y su hermana pequeña.

    Un día decidió salir a la calle con su hermana para jugar. Ambos se alejaron más de lo debido de casa y se encontraron con el acecho de una tormenta de nieve inesperada.
    
    Nathan cogió a su hermana y se introdujeron en un pequeño agujero que conducía a una cueva.
    
    Asustados por no poder salir por donde entraron decidieron avanzar para ver si encontraban alguna salida.Por desgracia, no encontraron ninguna salida pero por el camino se toparon con un pequeño estanque de agua del que salia vapor.
    
    Muertos del frío que les rodeaba, Nathan decidió acercarse al agua, pero antes de poder poner una dedo dentro de ella, comenzó a brillar y su hermana, Aylen, por miedo de que le sucediera algo horrible, lo apartó de un empujón y se cayó al agua.
    
    Nathan vio como el agua atrapaba a su hermana y del impacto contra el suelo se desmayó. Al día siguiente se despertó en su cama, pudo salvarse de aquella terrorífica tormenta, pero al rescatarle nadie vio indicios de ningún estanque y su hermana ya no estaba.
    
    Desde entonces, Nathan, tiene habilidades asombrosas con el agua y el frío. Aunque estas habilidades las usa en gran parte para encontrar a aquella hermana que perdió ese día de tormenta.`,
    habilidades: [
      {
        nombre: "Basico & Bloque de hielo",
        icono: azucar,
        descripcion: "",
      },
      {
        nombre: "Llamada al frio",
        icono: hielo,
        descripcion: "",
      },
      {
        nombre: "Mano congelante",
        icono: cuarzo,
        descripcion: "",
      },
      {
        nombre: "Curacion bajo cero",
        icono: agua,
        descripcion: "",
      },
    ],
  },
];

export default function Campeones({ selectCampeon }) {
  const [filtro, setFiltro] = useState("todos");

  const clases = [
    "todos",
    "tanques",
    "tiradores",
    "magos",
    "asesinos",
    "luchadores",
  ];
  const clases2 = ["todos", "tanque", "tirador", "mag", "asesin", "luchador"];

  const handleClick = (clase) => {
    setFiltro(clases2[clase]);
  };

  const filtrarPersonajes = personajes.filter(
    (p) => filtro === "todos" || p.tipo.toLowerCase().includes(filtro)
  );

  return (
    <>
      <div className="container-champion-clases">
        {clases.map((clase) => (
          <button
            key={clase}
            className={`top-menu-button ${filtro === clase ? "selected" : ""}`}
            onClick={() => handleClick(clases.indexOf(clase))}
          >
            {clase.charAt(0).toUpperCase() + clase.slice(1)}
          </button>
        ))}
      </div>

      <div className="campeones-section">
        <h1>Campeones</h1>
        <hr />
        <div className="campeones-container">
          <ul>
            {filtrarPersonajes.map((p, index) => (
              <li
                key={index}
                data-clase={p.tipo.toLowerCase()}
                onClick={() => selectCampeon(p)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    marginBottom: "0.5rem",
                  }}
                />
                <h2>{p.nombre}</h2>
                <p>Tipo: {p.tipo}</p>
                <p>Dificultad: {p.dificultad}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
