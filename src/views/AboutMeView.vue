<template>
  <main class="flex-grow pt-20">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-bold animate-fade-in font-lobster mb-6">À Propos de Moi</h1>
    </div>

    <!-- First section - Image on right -->
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left"
    >
      <div class="md:w-3/4">
        <p class="text-lg mb-4">
          Je suis <span class="font-semibold">Jean-Auryel Akinotcho</span>, alias
          <span class="font-semibold">JA</span>. Développeur web passionné de basketball, je crée
          pour vous des expériences numériques modernes et performantes.
        </p>
        <p class="text-lg mb-4">
          Vous avez peut-être vu mon parcours académique et il est possible que vous vous demandiez
          : pourquoi diable est-il dans le développement web ?
        </p>
      </div>
      <img
        src="../components/assets/img/JA_basketball_picture.png"
        alt="About Me Image"
        class="w-full md:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-8 animate-fade-in"
      />
    </div>

    <!-- Second section - Image on left -->
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-8"
    >
      <img
        src="../components/assets/img/JA_lightbulb_picture.png"
        alt="Career Change Image"
        class="w-full md:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8 animate-fade-in"
      />
      <div class="md:w-3/4">
        <p class="text-lg mb-4">
          Eh bien, je n'ai jamais réussi à m'épanouir dans l'industrie agroalimentaire, même si
          j'étais plutôt compétent. Je n'avais aucune motivation pour ce type de métier et je n'ai
          pas pu trouver une école qui m'accepte afin de poursuivre mes études car mes diplômes
          viennent de l'étranger. Cependant, j'ai toujours eu cette curiosité pour l'informatique et
          les sites web, une envie insatiable d'en apprendre davantage. C'est alors que je me suis
          posé la question :
          <span class="italic">"Et si c'était ça que tu cherchais vraiment ?"</span>
        </p>
      </div>
    </div>

    <!-- Third section - Image on right -->
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-8"
    >
      <div class="md:w-3/4">
        <p class="text-lg mb-4">
          Au-delà de ma passion pour la technologie, j'ai aussi la chance d'avoir une épouse
          formidable, un petit garçon de 3 ans à la malice incroyable et une adorable petite fille
          de 4 mois. Je me suis rendu compte que je n'avais pas assez de stabilité pour m'occuper
          d'eux, leur offrir sécurité et confort. J'ai donc pris les choses en main et décidé de
          suivre cette voie, non seulement pour moi, mais aussi et surtout pour eux.
        </p>
      </div>
      <img
        src="../components/assets/img/JA_family_picture_2.png"
        alt="Family Image"
        class="w-full md:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-8 animate-fade-in"
      />
    </div>

    <!-- Fourth section - Image below -->
    <div class="container mx-auto mt-8">
      <div class="md:w-full text-center md:text-left">
        <p class="text-lg mb-8">
          C'est à partir de là que j'ai eu le déclic et que j'ai décidé de faire ce qui me passionne
          au lieu de ce à quoi je suis bon à l'école. J'ai donc commencé à apprendre le
          développement web en autodidacte, à suivre des tutoriels, à lire des articles, à
          pratiquer, à me former. Puis j'ai par la suite intégré l'ESICAD de Toulouse où je me forme
          actuellement. J'ai découvert alors un monde fascinant, un univers infini de possibilités
          et de créativité et je sais aujourd'hui que
          <span class="font-semibold font-lobster"> j'ai trouvé ma voie. </span>
        </p>
      </div>
      <img
        src="../components/assets/img/JA_path_picture.png"
        alt="Passion for Web Image"
        class="w-2/3 mx-auto rounded-lg shadow-lg animate-fade-in"
      />
    </div>
  </main>
</template>
