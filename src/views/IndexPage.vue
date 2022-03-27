<template>
  <div>
    <a id="top" />
    <index-navbar />
    <section
      class="
        header
        flex flex-col
        lg:flex-row
        relative
        pt-16
        items-center
        flex
        h-screen
        max-h-860-px
      "
    >
      <div class="container mx-auto items-center justify-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-slate-600">
              Briac<br />Images, Montagne et Parapente
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-slate-500">
              18 ans, je suis passionné par l'image et par la montagne.
              <br />Depuis que j'en ai légalement le droit, je vole en solo.
              <a
                href="https://highcanfly.club"
                class="text-slate-600"
                target="_blank"
              >
                Ma pratique c'est le
                <span class="underline"> marcher-vol en parapente. </span>
              </a>
              J'ai envie de vous faire partager mes passions
            </p>
            <div class="mt-12">
              <a
                href="#mes_photos"
                class="
                  get-started
                  text-white
                  font-bold
                  px-6
                  py-4
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  bg-emerald-500
                  active:bg-emerald-600
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                Ma montagne
              </a>
              <a
                href="#diffuser"
                class="
                  github-star
                  ml-1
                  text-emerald-500
                  font-bold
                  px-6
                  py-4
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  bg-white
                  active:bg-sky-600
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                Vidéo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex m-8 mt-20 md:mt-36">
        <img
          :src="require('@/assets/img/briac-102.jpg')"
          @click="lightBox(require('@/assets/img/briac-102.jpg'))"
          class="rounded-lg shadow-lg"
        />
      </div>
    </section>

    <section class="mt-96 md:mt-48 md:mt-40 pb-40 relative bg-slate-100">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-slate-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <a id="mes_photos" />
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div class="justify-center flex flex-wrap relative">
              <div class="my-4 w-full lg:w-6/12 px-4">
                <div
                  class="bg-slate-200 shadow-lg rounded-lg text-center p-2 mt-8"
                >
                  <img
                    :src="require('@/assets/img/briac-th2-106.jpg')"
                    @click="lightBox(require('@/assets/img/briac-106.jpg'))"
                    class="w-full rounded-lg"
                  />
                  <p class="text-sm text-slate-700 mt-4 font-semibold">
                    le mont Blanc
                  </p>
                </div>
                <div
                  class="bg-slate-200 shadow-lg rounded-lg text-center p-2 mt-8"
                >
                  <img
                    :src="require('@/assets/img/briac-th2-105.jpg')"
                    @click="lightBox(require('@/assets/img/briac-105.jpg'))"
                    class="w-full rounded-lg"
                  />
                  <p class="text-sm text-slate-700 mt-4 font-semibold">
                    le dernier dôme de Miage
                  </p>
                </div>

                <div
                  class="bg-slate-200 shadow-lg rounded-lg text-center p-2 mt-8"
                >
                  <img
                    :src="require('@/assets/img/briac-th2-104.jpg')"
                    @click="lightBox(require('@/assets/img/briac-104.jpg'))"
                    class="w-full rounded-lg"
                  />
                  <p class="text-sm text-slate-700 mt-4 font-semibold">
                    la vallée des Contamines
                  </p>
                </div>
              </div>
              <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <div
                  class="bg-slate-200 shadow-lg rounded-lg text-center p-2 mt-8"
                >
                  <img
                    :src="require('@/assets/img/briac-th2-103.jpg')"
                    @click="lightBox(require('@/assets/img/briac-103.jpg'))"
                    class="w-full rounded-lg"
                  />
                  <p class="text-sm text-slate-700 mt-4 font-semibold">
                    combe d'Armancette
                  </p>
                </div>

                <div
                  class="bg-slate-200 shadow-lg rounded-lg text-center p-2 mt-8"
                >
                  <img
                    :src="require('@/assets/img/briac-th2-107.jpg')"
                    @click="lightBox(require('@/assets/img/briac-107.jpg'))"
                    class="w-full rounded-lg"
                  />
                  <p class="text-sm text-slate-700 mt-4 font-semibold">
                    séracs à la Jonction
                  </p>
                </div>

                <div
                  class="bg-slate-200 shadow-lg rounded-lg text-center p-2 mt-8"
                >
                  <img
                    :src="require('@/assets/img/briac-th2-108.jpg')"
                    @click="lightBox(require('@/assets/img/briac-108.jpg'))"
                    class="w-full rounded-lg"
                  />
                  <p class="text-sm text-slate-700 mt-4 font-semibold">
                    fœhn sur l'arrête des bosses
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div
              class="
                text-slate-500
                p-3
                text-center
                inline-flex
                items-center
                justify-center
                w-16
                h-16
                mb-6
                shadow-lg
                rounded-full
                bg-white
              "
            >
              <i class="fa-solid fa-person-hiking text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Images de montagne
            </h3>
            <p
              class="
                text-lg
                font-light
                leading-relaxed
                mt-4
                mb-4
                text-slate-600
              "
            >
              Les photos me permettent d'immortaliser des instants particuliers
              de mes pratiques sportives ou touristiques. Souvent il ne sera pas
              possible de revenir, il faut capter l'instant la lumière qui
              offrira la matière pour sublimer le souvenir.
            </p>

            <div class="block pb-6">
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                Photo
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                Alpinisme
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                Montagne
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                Alpes
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                Amis
              </span>
            </div>
          </div>
        </div>
      </div>
      <a id="communiquer" />
      <div class="container mx-auto overflow-hidden pb-20">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div
              class="
                text-slate-500
                p-3
                text-center
                inline-flex
                items-center
                justify-center
                w-16
                h-16
                mb-6
                shadow-lg
                rounded-full
                bg-white
              "
            >
              <i class="fa-solid fa-handshake text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Communiquer
            </h3>
            <p
              class="
                text-lg
                font-light
                leading-relaxed
                mt-4
                mb-4
                text-slate-600
              "
            >
              Aujourd'hui images et communication sont indissociables, réseaux
              sociaux, publicité… L'image est partout.
            </p>
            <div class="block pb-6">
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                réseaux
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                publicité
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                information
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                communication
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                enseignement
              </span>
              <span
                class="
                  text-xs
                  font-semibold
                  inline-block
                  py-1
                  px-2
                  uppercase
                  rounded-full
                  text-slate-500
                  bg-white
                  uppercase
                  last:mr-0
                  mr-2
                  mt-2
                "
              >
                presse
              </span>
            </div>
          </div>

          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
            <div
              class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"
            >
              <img
                alt="..."
                :src="require('@/assets/img/facebook.png')"
                class="
                  w-full
                  align-middle
                  rounded-lg
                  absolute
                  shadow-lg
                  max-w-100-px
                  left-145-px
                  -top-[15px]
                  z-3
                "
              />
              <img
                alt="..."
                :src="require('@/assets/img/briac-fb.jpg')"
                @click="lightBox(require('@/assets/img/briac-fb.jpg'))"
                class="
                  w-full
                  align-middle
                  rounded-lg
                  absolute
                  shadow-lg
                  max-w-210-px
                  left-260-px
                  -top-160-px
                "
              />
              <img
                alt="..."
                :src="require('@/assets/img/briac-insta.jpg')"
                @click="lightBox(require('@/assets/img/briac-insta.jpg'))"
                class="
                  w-full
                  align-middle
                  rounded-lg
                  absolute
                  shadow-lg
                  max-w-180-px
                  left-40-px
                  -top-225-px
                  z-2
                "
              />
              <img
                alt="..."
                :src="require('@/assets/img/briac-lr.jpg')"
                @click="lightBox(require('@/assets/img/briac-lr.jpg'))"
                class="
                  w-full
                  align-middle
                  rounded-2xl
                  absolute
                  shadow-2xl
                  max-w-200-px
                  -left-50-px
                  top-25-px
                "
              />
              <img
                alt="..."
                :src="require('@/assets/img/twitter.png')"
                @click="lightBox(require('@/assets/img/twitter.png'))"
                class="
                  w-full
                  align-middle
                  rounded
                  absolute
                  shadow-lg
                  max-w-580-px
                  -left-20-px
                  top-210-px
                "
              />
              <img
                alt="..."
                :src="require('@/assets/img/jaime.svg')"
                @click="lightBox(require('@/assets/img/jaime.svg'))"
                class="
                  w-full
                  align-middle
                  rounded-lg
                  absolute
                  shadow-xl
                  max-w-120-px
                  left-195-px
                  top-95-px
                "
              />
            </div>
          </div>
        </div>
      </div>
      <a id="traiter" />
      <div class="container mx-auto overflow-hidden mt-16 pt-32">
        <div class="flex flex-wrap items-center">
          <div
            class="
              w-10/12
              md:w-6/12
              lg:w-4/12
              px-12
              md:px-4
              mr-auto
              ml-auto
              -mt-32
            "
          >
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-white
                w-full
                mb-6
                shadow-lg
                rounded-lg
                bg-emerald-500
              "
            >
              <img
                alt="..."
                :src="require('@/assets/img/briac-th-101.jpg')"
                class="w-full align-middle rounded-t-lg"
                @click="lightBox(require('@/assets/img/briac-101.jpg'))"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Traitement de l'image
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Après avoir passé du temps dehors à capter de nouvelles
                  images, j'aime m'installer pour transformer ces souvenirs et
                  les préparer à une nouvelle vie multimédia.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-slate-500
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fa-solid fa-play"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Vidéo</h6>
                    <p class="mb-4 text-slate-500">
                      Montage sous Blackmagic DaVinci Resolve
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-slate-500
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fa-solid fa-camera"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Photos</h6>
                    <p class="mb-4 text-slate-500">
                      Développement sous Adobe Lightroom
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-slate-500
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fa-solid fa-video"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Prises de vues</h6>
                    <p class="mb-4 text-slate-500">
                      Blackmagic Pocket, Gopro, Panasonic GH-5, iPhone
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="
                        text-slate-500
                        p-3
                        text-center
                        inline-flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-5
                        shadow-lg
                        rounded-full
                        bg-white
                      "
                    >
                      <i class="fa-solid fa-box-archive"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Stockage</h6>
                    <p class="mb-4 text-slate-500">
                      Gestion des rushes et des négatifs numériques
                      multi-support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="diffuser" />
      <div class="container mx-auto px-4 pb-0 pt-48">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div class="md:pr-12">
              <div
                class="
                  text-slate-500
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  mb-6
                  shadow-lg
                  rounded-full
                  bg-white
                "
              >
                <i class="fa-solid fa-video text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">Images animées</h3>
              <p class="mt-4 text-lg leading-relaxed text-slate-500">
                C'est une autre forme d'image. Les moyens modernes permettent
                des prises de vues innovante. Ici le pilote accepte de porter
                une mini caméra. On peut alors utiliser ces séquences pour
                expliquer aux pilotes souhaitant faire un stage de pilotage en
                milieu aménagé. Comme ce stage se déroule. L'image a ici une
                valeur éducative pour dédramatiser l'évènement.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="
                          text-xs
                          font-semibold
                          inline-block
                          py-1
                          px-2
                          uppercase
                          rounded-full
                          text-slate-500
                          bg-slate-50
                          mr-3
                        "
                      >
                        <i class="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-slate-500">Prise de vue Gopro</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="
                          text-xs
                          font-semibold
                          inline-block
                          py-1
                          px-2
                          uppercase
                          rounded-full
                          text-slate-500
                          bg-slate-50
                          mr-3
                        "
                      >
                        <i class="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-slate-500">Prise de vue au sol</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="
                          text-xs
                          font-semibold
                          inline-block
                          py-1
                          px-2
                          uppercase
                          rounded-full
                          text-slate-500
                          bg-slate-50
                          mr-3
                        "
                      >
                        <i class="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-slate-500">Montage différé</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/692728254?h=ff2123effc"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              class="max-w-full rounded-lg shadow-xl px-2 py-1 vimeod"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 pb-32 pt-48">
        <div class="items-center flex flex-wrap">
                    <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/692730465?h=0f9a65bbe2"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              class="max-w-full rounded-lg shadow-xl px-2 py-1 vimeog"
            ></iframe>
          </div>
          <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div class="md:pr-12">
              <div
                class="
                  text-slate-500
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  mb-6
                  shadow-lg
                  rounded-full
                  bg-white
                "
              >
                <i class="fa-solid fa-video text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">Timelapse</h3>
              <p class="mt-4 text-lg leading-relaxed text-slate-500">
                Encore autre chose, voici un petit timelapse pour illustrer un devoir sur la digestion pour ma petite soeur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="justify-center text-center flex flex-wrap mt-24">
        <div class="w-full md:w-6/12 px-12 md:px-4">
          <h2 class="font-semibold text-4xl">Bientôt d'autres images</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
            Promis je vais faire le tri dans mes ressources. Dès que possible
            j'ajouterai ici d'autres images. À bientôt.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-600 overflow-hidden">
      <div class="container mx-auto pb-64">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div
              class="
                text-slate-500
                p-3
                text-center
                inline-flex
                items-center
                justify-center
                w-16
                h-16
                mb-6
                shadow-lg
                rounded-full
                bg-white
              "
            >
              <i class="fas fa-code-branch text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p
              class="
                text-lg
                font-light
                leading-relaxed
                mt-4
                mb-4
                text-slate-400
              "
            >
              Avec un peu d'aide j'ai mis en œuvre cette petite présentation…
              Elle est réalisée à partir de frameworks open source. Le moteur de
              base est propulsé par
              <a
                href="https://vuejs.org/"
                class="text-slate-300"
                target="_blank"
                >Vue3</a
              >, les styles sont organisés avec
              <a
                href="https://tailwindcss.com/"
                class="text-slate-300"
                target="_blank"
              >
                Tailwind CSS
              </a>
              la compatibilité multi-navigateurs est confiée à
              <a
                href="https://babeljs.io/"
                class="text-slate-300"
                target="_blank"
                >Babel 7</a
              >
              enfin la qualité du code est vérifié par
              <a
                href="https://eslint.org/"
                class="text-slate-300"
                target="_blank"
              >
                Eslint 8</a
              >
            </p>
            <p
              class="
                text-lg
                font-light
                leading-relaxed
                mt-0
                mb-4
                text-slate-400
              "
            >
              Alors pour s'intégrer dans cette démarche opensource j'ai laissé
              moi aussi le code en open source. L'ensemble du code est
              disponible sur GitHub
            </p>
            <a
              href="https://github.com/briacl/vue-briac"
              target="_blank"
              class="
                github-star
                mt-4
                inline-block
                text-white
                font-bold
                px-6
                py-4
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                bg-slate-700
                active:bg-slate-600
                uppercase
                text-sm
                shadow
                hover:shadow-lg
                ease-linear
                transition-all
                duration-150
              "
            >
              Github Star
            </a>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i
              class="
                fab
                fa-github
                text-slate-700 text-55
                absolute
                -top-150-px
                -right-100
                left-auto
                opacity-80
              "
            ></i>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 bg-slate-200 relative pt-32">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-slate-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto">
        <div
          class="
            flex flex-wrap
            justify-center
            bg-white
            shadow-xl
            rounded-lg
            -mt-64
            py-16
            px-12
            relative
            z-10
          "
        >
          <div class="w-full text-center lg:w-8/12">
            <p class="text-4xl text-center">
              <span role="img" aria-label="love"> 😍 </span>
            </p>
            <h3 class="font-semibold text-3xl">Vous aimez mon travail?</h3>
            <p class="text-slate-500 text-lg leading-relaxed mt-4 mb-4">
              Un petit encouragement fait toujours plaisir, laissez un j'aime
              sur les réseaux sociaux, mettez une étoile sur GitHub ou
              envoyez-moi un petit message.
            </p>
            <div class="sm:block flex flex-col mt-10">
              <a
                href="mailto:briac@briac.cf"
                class="
                  get-started
                  text-white
                  font-bold
                  px-6
                  py-4
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-2
                  bg-emerald-500
                  active:bg-emerald-600
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                Email
              </a>
              <a
                href="https://github.com/briacl/vue-briac"
                target="_blank"
                class="
                  github-star
                  sm:ml-1
                  text-white
                  font-bold
                  px-6
                  py-4
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  bg-slate-700
                  active:bg-slate-600
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                <i class="fab fa-github text-lg mr-1"></i>
                <span>Une étoile</span>
              </a>
              <a
                href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
                target="_blank"
                class="
                  github-star
                  sm:ml-1
                  text-white
                  font-bold
                  px-6
                  py-4
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  bg-blue-500
                  active:bg-slate-600
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
              >
                <i class="fab fa-facebook text-lg mr-1"></i>
                <span>Un like</span>
              </a>
            </div>
            <div class="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/FooterStandard.vue";

import * as basiclightbox from "basiclightbox";

export default {
  data() {
    return {};
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
  methods: {
    lightBox: (url) => {
      basiclightbox
        .create(`<img src="${url}" />`)
        .show(() => console.log(`lightbox ${url} now visible`));
    },
  },
};
</script>
<style>
.basicLightbox {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.01;
  transition: opacity 0.4s ease;
  z-index: 1000;
  will-change: opacity;
}
.basicLightbox--visible {
  opacity: 1;
}
.basicLightbox__placeholder {
  max-width: 100%;
  transform: scale(0.9);
  transition: transform 0.4s ease;
  z-index: 1;
  will-change: transform;
}
.basicLightbox__placeholder > iframe:first-child:last-child,
.basicLightbox__placeholder > img:first-child:last-child,
.basicLightbox__placeholder > video:first-child:last-child {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 95%;
  max-height: 95%;
  border-radius: 1rem;
}
.basicLightbox__placeholder > iframe:first-child:last-child,
.basicLightbox__placeholder > video:first-child:last-child {
  pointer-events: auto;
}
.basicLightbox__placeholder > img:first-child:last-child,
.basicLightbox__placeholder > video:first-child:last-child {
  width: auto;
  height: auto;
}
.basicLightbox--iframe .basicLightbox__placeholder,
.basicLightbox--img .basicLightbox__placeholder,
.basicLightbox--video .basicLightbox__placeholder {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.basicLightbox--visible .basicLightbox__placeholder {
  transform: scale(1);
}
@media (min-width: 1024px) {
    .vimeog {transform: scale(1) perspective(1040px) rotateY(11deg)
                  rotateX(2deg) rotate(2deg); }
}
@media (min-width: 1024px) {
    .vimeod {transform: scale(1) perspective(1040px) rotateY(-11deg)
                  rotateX(2deg) rotate(2deg); }
}
</style>