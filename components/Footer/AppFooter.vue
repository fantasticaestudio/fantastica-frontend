<template>
  <footer class="sticky bottom-0 bg-blue text-lilac-light">
    <div class="container flex flex-col justify-between gap-4 min-h-[90svh] max-h-svh  py-16">
      <div class="flex flex-col gap-4 w-full font-bold font-header text-md lg:text-lg">
        <FooterInfoItem link="mailto:info@fantasticaestudio.com" text="info@fantasticaestudio.com" />
        <FooterInfoItem link="https://wa.me/+34694279187" text="694 27 91 87" />
        <FooterInfoItem link="https://maps.app.goo.gl/ZSRCt5ePRK2fqcqHA" text="Málaga" />
      </div>
      <div class="flex flex-wrap justify-between items-center gap-5">
        <div class="flex flex-wrap flex-1 justify-between items-end">
          <div class="flex flex-col gap-2 font-header">
            <h4 class="text-xl">
              activa el modo
            </h4>
            <h3 class="text-4xl text-purple font-bold">
              Fantástica
            </h3>
          </div>
          <SocialIcons />
        </div>
        <div class="flex flex-wrap justify-between gap-2 w-full 2xl:pb-0 border-t-1 pt-4 border-t-lilac-light md:flex-col md:justify-center md:items-center">
          <div class="w-fit flex-auto">
            Web diseñada y desarrollada por Fantasticaestudio
          </div>
          <div class="flex flex-auto justify-between gap-8 md:m-0 max-w-2xs">
            <!--             <a class="hover:text-orange" href="/politica-de-privacidad">Política de Privacidad</a>
            <a class="hover:text-orange" href="/aviso-legal">Aviso Legal</a> -->
            <a class="hover:text-orange" href="/">Política de Privacidad</a>
            <a class="hover:text-orange" href="/">Aviso Legal</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
