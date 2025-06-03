<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900">
    <header class="px-6 py-4 lg:px-8 sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm">
      <nav class="flex items-center justify-between">
        <div class="text-white text-xl font-bold"></div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#services" class="text-white hover:text-orange-400 transition-colors">{{ $t('nav.services') }}</a>
          <a href="#about" class="text-white hover:text-orange-400 transition-colors">{{ $t('nav.about') }}</a>
          <a href="#skills" class="text-white hover:text-orange-400 transition-colors">{{ $t('nav.skills') }}</a>
          <a href="#projects" class="text-white hover:text-orange-400 transition-colors">{{ $t('nav.projects') }}</a>
          <a href="#contact" class="text-white hover:text-orange-400 transition-colors">{{ $t('nav.contact') }}</a>
        </div>
        <div class="flex items-center space-x-2 ml-auto md:ml-4">
          <button @click="changeLanguage('pt')"
            :class="{ 'text-orange-400 font-semibold': locale === 'pt', 'text-white': locale !== 'pt' }"
            class="hover:text-orange-400 transition-colors text-sm px-2 py-1">PT</button>
          <span class="text-slate-500">|</span>
          <button @click="changeLanguage('en')"
            :class="{ 'text-orange-400 font-semibold': locale === 'en', 'text-white': locale !== 'en' }"
            class="hover:text-orange-400 transition-colors text-sm px-2 py-1">EN</button>
        </div>
        <button class="md:hidden text-white ml-4">
          <Menu class="w-6 h-6" />
        </button>
      </nav>
    </header>

    <section class="px-6 py-16 lg:px-8 lg:py-24">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-6xl font-bold text-white">
              {{ $t('hero.greeting') }} <span class="text-orange-400">{{ $t('hero.name') }}</span> 😁 </h1>
            <p class="text-gray-300 text-lg leading-relaxed max-w-lg">
              {{ $t('hero.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                {{ $t('hero.hireMe') }}
              </button>
              <button
                class="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Download class="w-4 h-4" />
                {{ $t('hero.downloadCV') }}
              </button>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 p-1">
                <div class="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img src="/src/assets/img/foto.jpg" :alt="$t('hero.profileAlt')" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="px-6 py-16 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-12">{{ $t('services.title') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-400/50 transition-colors">
            <div class="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Code class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-orange-400 mb-4">{{ $t('services.webDevelopment') }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ $t('services.webDevelopmentDesc') }}
            </p>
          </div>
          <div
            class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-400/50 transition-colors">
            <div class="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Smartphone class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-orange-400 mb-4">{{ $t('services.mobileDevelopment') }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ $t('services.mobileDevelopmentDesc') }}
            </p>
          </div>

          <div
            class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-400/50 transition-colors">
            <div class="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Wrench class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-orange-400 mb-4">{{ $t('services.technicalSkills') }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ $t('services.technicalSkillsDesc') }}
            </p>
          </div>

          <div
            class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-400/50 transition-colors">
            <div class="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <Bot class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-orange-400 mb-4">{{ $t('services.automationTools') }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ $t('services.automationToolsDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 lg:px-8">
      <div id="skills" class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-12">{{ $t('skillsSection.my') }} <span
                class="text-orange-400">{{ $t('skillsSection.highlightedSkills') }}</span></h2>
            <div class="space-y-6 max-w-3xl">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-white">{{ $t('skillsSection.python') }}</span>
                  <span class="text-orange-400">90%</span>
                </div>
                <div class="h-2 bg-slate-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style="width: 90%">
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-white">{{ $t('skillsSection.flutter') }}</span>
                  <span class="text-orange-400">85%</span>
                </div>
                <div class="h-2 bg-slate-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style="width: 85%">
                  </div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-white">{{ $t('skillsSection.vuejs') }}</span>
                  <span class="text-orange-400">80%</span>
                </div>
                <div class="h-2 bg-slate-700 rounded-full">
                  <div class="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style="width: 80%">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="about">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-12">{{ $t('skillsSection.more') }} <span
                class="text-orange-400">{{ $t('skillsSection.highlightedAbout') }}</span> {{ $t('skillsSection.me') }}
            </h2>
            <p class="text-gray-300 mb-8 leading-relaxed">
              {{ $t('skillsSection.aboutMeDesc') }}
            </p>

            <div class="grid grid-cols-3 gap-4 mt-8">
              <div class="text-center">
                <div class="text-orange-400 text-2xl font-bold">+7</div>
                <div class="text-gray-300 text-sm">{{ $t('skillsSection.yearsExperience') }}</div>
              </div>
              <div class="text-center">
                <div class="text-orange-400 text-2xl font-bold">+35</div>
                <div class="text-gray-300 text-sm">{{ $t('skillsSection.satisfiedClients') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="projects" class="px-6 py-16 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white">{{ $t('projectsSection.titlePart1') }} <span
              class="text-orange-400">{{ $t('projectsSection.titlePart2Orange') }}</span></h2>
          <div class="flex gap-2">
            <button class="px-3 py-1 text-sm bg-slate-800 text-white rounded hover:bg-orange-400 transition-colors">
              {{ $t('projectsSection.filterWeb') }}
            </button>
            <button class="px-3 py-1 text-sm bg-slate-800 text-white rounded hover:bg-orange-400 transition-colors">
              {{ $t('projectsSection.filterMobile') }}
            </button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group">
            <div class="h-48 overflow-hidden">
              <img src="/src/assets/img/photo-1556742049-0cfed4f6a45d.jpeg" :alt="$t('projectsSection.project1Alt')"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-white font-bold text-xl mb-2">{{ $t('projectsSection.project1Title') }}</h3>
              <p class="text-gray-300 mb-4">{{ $t('projectsSection.project1Desc') }}</p>
              <div class="flex justify-between items-center">
                <span class="text-orange-400">{{ $t('projectsSection.project1Category') }}</span>
                <a href="#" class="text-white hover:text-orange-400 transition-colors">
                  <ExternalLink class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group">
            <div class="h-48 overflow-hidden">
              <img src="/src/assets/img/photo-1512941937669-90a1b58e7e9c.jpeg?w=400&h=200&fit=crop"
                :alt="$t('projectsSection.project2Alt')"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-white font-bold text-xl mb-2">{{ $t('projectsSection.project2Title') }}</h3>
              <p class="text-gray-300 mb-4">{{ $t('projectsSection.project2Desc') }}</p>
              <div class="flex justify-between items-center">
                <span class="text-orange-400">{{ $t('projectsSection.project2Category') }}</span>
                <a href="https://app.spectra.tec.br/" class="text-white hover:text-orange-400 transition-colors">
                  <ExternalLink class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group">
            <div class="h-48 overflow-hidden">
              <img src="/src/assets/img/dfsf446h564hghhdh4g6hfd.png" :alt="$t('projectsSection.project3Alt')"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-white font-bold text-xl mb-2">{{ $t('projectsSection.project3Title') }}</h3>
              <p class="text-gray-300 mb-4">{{ $t('projectsSection.project3Desc') }}</p>
              <div class="flex justify-between items-center">
                <span class="text-orange-400">{{ $t('projectsSection.project3Category') }}</span>
                <a href="https://www.linkedin.com/posts/gustavojuliao_ia-python-activity-6924723278565548032-Mcmk?utm_source=share&utm_medium=member_desktop"
                  class="text-white hover:text-orange-400 transition-colors">
                  <ExternalLink class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="px-6 py-16 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-12">{{ $t('contactSection.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin class="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 class="text-white font-bold text-lg mb-1">{{ $t('contactSection.location') }}</h3>
                <p class="text-gray-300">{{ $t('contactSection.locationDetail') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail class="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 class="text-white font-bold text-lg mb-1">{{ $t('contactSection.email') }}</h3>
                <p class="text-gray-300">gustavojuliao1999@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone class="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 class="text-white font-bold text-lg mb-1">{{ $t('contactSection.phone') }}</h3>
                <p class="text-gray-300">{{ $t('contactSection.phoneDetail') }}</p>
              </div>
            </div>

            <div class="flex gap-4 mt-8">
              <a href="https://wa.me/5581992338229"
                class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 h-5" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,4.0791 1.11869,7.88588 2.98438,11.20898l-2.94727,10.52148c-0.09582,0.34262 -0.00241,0.71035 0.24531,0.96571c0.24772,0.25536 0.61244,0.35989 0.95781,0.27452l10.9707,-2.71875c3.22369,1.72098 6.88165,2.74805 10.78906,2.74805c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-3.72198,0 -7.20788,-0.97037 -10.23828,-2.66602c-0.22164,-0.12385 -0.48208,-0.15876 -0.72852,-0.09766l-9.60742,2.38086l2.57617,-9.19141c0.07449,-0.26248 0.03851,-0.54399 -0.09961,-0.7793c-1.84166,-3.12289 -2.90234,-6.75638 -2.90234,-10.64648c0,-11.60953 9.39047,-21 21,-21zM16.64258,13c-0.64104,0 -1.55653,0.23849 -2.30859,1.04883c-0.45172,0.48672 -2.33398,2.32068 -2.33398,5.54492c0,3.36152 2.33139,6.2621 2.61328,6.63477h0.00195v0.00195c-0.02674,-0.03514 0.3578,0.52172 0.87109,1.18945c0.5133,0.66773 1.23108,1.54472 2.13281,2.49414c1.80347,1.89885 4.33914,4.09336 7.48633,5.43555c1.44932,0.61717 2.59271,0.98981 3.45898,1.26172c1.60539,0.5041 3.06762,0.42747 4.16602,0.26563c0.82216,-0.12108 1.72641,-0.51584 2.62109,-1.08203c0.89469,-0.56619 1.77153,-1.2702 2.1582,-2.33984c0.27701,-0.76683 0.41783,-1.47548 0.46875,-2.05859c0.02546,-0.29156 0.02869,-0.54888 0.00977,-0.78711c-0.01897,-0.23823 0.0013,-0.42071 -0.2207,-0.78516c-0.46557,-0.76441 -0.99283,-0.78437 -1.54297,-1.05664c-0.30567,-0.15128 -1.17595,-0.57625 -2.04883,-0.99219c-0.8719,-0.41547 -1.62686,-0.78344 -2.0918,-0.94922c-0.29375,-0.10568 -0.65243,-0.25782 -1.16992,-0.19922c-0.51749,0.0586 -1.0286,0.43198 -1.32617,0.87305c-0.28205,0.41807 -1.4175,1.75835 -1.76367,2.15234c-0.0046,-0.0028 0.02544,0.01104 -0.11133,-0.05664c-0.42813,-0.21189 -0.95173,-0.39205 -1.72656,-0.80078c-0.77483,-0.40873 -1.74407,-1.01229 -2.80469,-1.94727v-0.00195c-1.57861,-1.38975 -2.68437,-3.1346 -3.0332,-3.7207c0.0235,-0.02796 -0.00279,0.0059 0.04687,-0.04297l0.00195,-0.00195c0.35652,-0.35115 0.67247,-0.77056 0.93945,-1.07812c0.37854,-0.43609 0.54559,-0.82052 0.72656,-1.17969c0.36067,-0.71583 0.15985,-1.50352 -0.04883,-1.91797v-0.00195c0.01441,0.02867 -0.11288,-0.25219 -0.25,-0.57617c-0.13751,-0.32491 -0.31279,-0.74613 -0.5,-1.19531c-0.37442,-0.89836 -0.79243,-1.90595 -1.04102,-2.49609v-0.00195c-0.29285,-0.69513 -0.68904,-1.1959 -1.20703,-1.4375c-0.51799,-0.2416 -0.97563,-0.17291 -0.99414,-0.17383h-0.00195c-0.36964,-0.01705 -0.77527,-0.02148 -1.17773,-0.02148zM16.64258,15c0.38554,0 0.76564,0.0047 1.08398,0.01953c0.32749,0.01632 0.30712,0.01766 0.24414,-0.01172c-0.06399,-0.02984 0.02283,-0.03953 0.20898,0.40234c0.24341,0.57785 0.66348,1.58909 1.03906,2.49023c0.18779,0.45057 0.36354,0.87343 0.50391,1.20508c0.14036,0.33165 0.21642,0.51683 0.30469,0.69336v0.00195l0.00195,0.00195c0.08654,0.17075 0.07889,0.06143 0.04883,0.12109c-0.21103,0.41883 -0.23966,0.52166 -0.45312,0.76758c-0.32502,0.37443 -0.65655,0.792 -0.83203,0.96484c-0.15353,0.15082 -0.43055,0.38578 -0.60352,0.8457c-0.17323,0.46063 -0.09238,1.09262 0.18555,1.56445c0.37003,0.62819 1.58941,2.6129 3.48438,4.28125c1.19338,1.05202 2.30519,1.74828 3.19336,2.2168c0.88817,0.46852 1.61157,0.74215 1.77344,0.82227c0.38438,0.19023 0.80448,0.33795 1.29297,0.2793c0.48849,-0.05865 0.90964,-0.35504 1.17773,-0.6582l0.00195,-0.00195c0.3568,-0.40451 1.41702,-1.61513 1.92578,-2.36133c0.02156,0.0076 0.0145,0.0017 0.18359,0.0625v0.00195h0.00195c0.0772,0.02749 1.04413,0.46028 1.90625,0.87109c0.86212,0.41081 1.73716,0.8378 2.02148,0.97852c0.41033,0.20308 0.60422,0.33529 0.6543,0.33594c0.00338,0.08798 0.0068,0.18333 -0.00586,0.32813c-0.03507,0.40164 -0.14243,0.95757 -0.35742,1.55273c-0.10532,0.29136 -0.65389,0.89227 -1.3457,1.33008c-0.69181,0.43781 -1.53386,0.74705 -1.8457,0.79297c-0.9376,0.13815 -2.05083,0.18859 -3.27344,-0.19531c-0.84773,-0.26609 -1.90476,-0.61053 -3.27344,-1.19336c-2.77581,-1.18381 -5.13503,-3.19825 -6.82031,-4.97266c-0.84264,-0.8872 -1.51775,-1.71309 -1.99805,-2.33789c-0.4794,-0.62364 -0.68874,-0.94816 -0.86328,-1.17773l-0.00195,-0.00195c-0.30983,-0.40973 -2.20703,-3.04868 -2.20703,-5.42578c0,-2.51576 1.1685,-3.50231 1.80078,-4.18359c0.33194,-0.35766 0.69484,-0.41016 0.8418,-0.41016z">
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="https://t.me/gustavojuliao"
                class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 h-5" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M25,2c-12.69071,0 -23,10.3093 -23,23c0,12.6907 10.30929,23 23,23c12.69071,0 23,-10.3093 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60983,0 21,9.39017 21,21c0,11.60983 -9.39017,21 -21,21c-11.60983,0 -21,-9.39017 -21,-21c0,-11.60982 9.39017,-21 21,-21zM34.08789,14.03516c-0.684,0 -1.45256,0.15842 -2.35156,0.48242c-1.396,0.503 -17.81559,7.47458 -19.68359,8.26758c-1.068,0.454 -3.05664,1.2985 -3.05664,3.3125c0,1.335 0.78227,2.28984 2.32227,2.83984c0.828,0.295 2.79455,0.89108 3.93555,1.20508c0.484,0.133 0.99834,0.20117 1.52734,0.20117c1.035,0 2.07658,-0.25789 2.89258,-0.71289c-0.007,0.168 -0.00242,0.33781 0.01758,0.50781c0.123,1.05 0.77047,2.03758 1.73047,2.64258c0.628,0.396 5.75744,3.83291 6.52344,4.37891c1.076,0.769 2.2655,1.17578 3.4375,1.17578c2.24,0 2.99152,-2.31283 3.35352,-3.42383c0.525,-1.613 2.49089,-14.72997 2.71289,-17.04297c0.151,-1.585 -0.50958,-2.89019 -1.76758,-3.49219c-0.471,-0.227 -1.00875,-0.3418 -1.59375,-0.3418zM34.08789,16.03516c0.275,0 0.52052,0.04548 0.72852,0.14648c0.473,0.227 0.71363,0.73305 0.64063,1.49805c-0.242,2.523 -2.20309,15.32928 -2.62109,16.61328c-0.358,1.098 -0.73512,2.04297 -1.45313,2.04297c-0.718,0 -1.50239,-0.25169 -2.27539,-0.80469c-0.773,-0.552 -5.90614,-3.99436 -6.61914,-4.44336c-0.625,-0.394 -1.28647,-1.37617 -0.35547,-2.32617c0.767,-0.782 6.58503,-6.42878 7.08203,-6.92578c0.37,-0.371 0.19698,-0.81836 -0.16602,-0.81836c-0.125,0 -0.27469,0.05269 -0.42969,0.17969c-0.608,0.497 -9.08436,6.169 -9.81836,6.625c-0.486,0.302 -1.23853,0.51953 -2.01953,0.51953c-0.333,0 -0.67014,-0.03991 -0.99414,-0.12891c-1.128,-0.311 -3.03692,-0.89016 -3.79492,-1.16016c-0.729,-0.26 -0.99414,-0.50908 -0.99414,-0.95508c0,-0.634 0.89489,-1.07166 1.83789,-1.47266c0.996,-0.423 18.23012,-7.74156 19.57812,-8.22656c0.624,-0.226 1.19483,-0.36328 1.67383,-0.36328z">
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="https://www.instagram.com/_gustavo_juliao/"
                class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                <Instagram class="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/gustavojuliao/"
                class="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                <Linkedin class="w-5 h-5" />
              </a>
            </div>
          </div>

          <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-white mb-2">{{ $t('contactSection.formName') }}</label>
                <input type="text" id="name"
                  class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
                  :placeholder="$t('contactSection.formNamePlaceholder')" />
              </div>

              <div>
                <label for="email" class="block text-white mb-2">{{ $t('contactSection.formEmail') }}</label>
                <input type="email" id="email"
                  class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
                  :placeholder="$t('contactSection.formEmailPlaceholder')" />
              </div>

              <div>
                <label for="message" class="block text-white mb-2">{{ $t('contactSection.formMessage') }}</label>
                <textarea id="message" rows="5"
                  class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
                  :placeholder="$t('contactSection.formMessagePlaceholder')"></textarea>
              </div>

              <button type="submit"
                class="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors w-full">
                {{ $t('contactSection.sendMessage') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="px-6 py-8 lg:px-8 border-t border-slate-700">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="text-white text-xl font-bold mb-4 md:mb-0"></div>
        <div class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} {{ $t('footer.rightsReserved') }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {
  Menu,
  Download,
  Code,
  Wrench,
  Bot,
  Smartphone,
  Mail,
  ExternalLink,
  MapPin,
  Instagram,
  Linkedin,
  Phone,
} from 'lucide-vue-next';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
// import { onMounted } from 'vue'; // Apenas se for carregar o idioma aqui ao invés de em main.js

const { locale } = useI18n();



const changeLanguage = (lang) => {
  if (locale.value !== lang && (lang === 'pt' || lang === 'en')) {
    locale.value = lang;
    if (typeof localStorage !== 'undefined') { // Verificação para ambientes sem localStorage (ex: build SSR)
        localStorage.setItem('userLanguage', lang);
    }
  }
};

// Opcional: Se você configurou o idioma inicial SOMENTE em main.js, esta parte onMounted não é estritamente necessária aqui.
// Se quiser garantir que o componente reaja a mudanças externas ou tenha um fallback local:
onMounted(() => {
  const savedLang = localStorage.getItem('userLanguage');
  const browserLang = navigator.language.split('-')[0];
  // Define o idioma inicial baseado no localStorage, depois no navegador, e por último 'pt'
  const initialLang = savedLang || ((browserLang === 'pt' || browserLang === 'en') ? browserLang : 'pt');
  if (initialLang && (initialLang === 'pt' || initialLang === 'en')) {
    if (locale.value !== initialLang) { // Só muda se for diferente do que já foi setado (ex: por main.js)
      locale.value = initialLang;
    }
  }
});
</script>