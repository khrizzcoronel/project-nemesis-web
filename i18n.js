const LANG = {
  es: {
    nav: { jugar: 'Jugar', historia: 'Historia', personajes: 'Personajes', tecnico: 'Técnico', galeria: 'Galería', trivia: 'Trivia' },
    hero: {
      badge: 'VERSIÓN BETA',
      title: 'PROJECT<br>NEMESIS',
      subtitle: 'Un juego de pelea 2D con IA que aprende de ti',
      cta_play: 'JUGAR AHORA',
      cta_more: 'CONOCER MÁS',
      tech: ['Phaser 4', 'Vite', 'JavaScript', 'WebGL']
    },
    jugar: {
      label: 'SECCIÓN 01',
      title: 'JUGAR AHORA',
      desc: 'Versión beta. Nemesis está lista. ¿Tú lo estás?',
      badge_sub: 'El juego se encuentra en desarrollo activo. Algunas características visuales son provisionales.',
      fullscreen: '⛶ Pantalla completa',
      reload: '↻ Reiniciar',
      controls_title: 'Controles',
      controls: [
        { key: 'W', label: 'Saltar' }, { key: 'A', label: 'Izquierda' }, { key: 'D', label: 'Derecha' },
        { key: 'J', label: 'Ataque rápido' }, { key: 'K', label: 'Ataque especial' }, { key: 'S', label: 'Bloquear' }
      ]
    },
    historia: {
      label: 'SECCIÓN 02',
      title: 'HISTORIA',
      p1: 'El mundo fue condenado a un bucle eterno. El Lich desató un caos sin fin, atrapando a todos los habitantes en un ciclo interminable de destrucción.',
      p2: 'Pero en las sombras del loop, algo comenzó a despertar. Nemesis no es un enemigo común. Observa. Estudia. Aprende.',
      p3: 'Cada golpe que le asestas, cada combo que ejecutas, cada estrategia que empleas — Nemesis lo registra todo. Combate tras combate, se vuelve más inteligente, más impredecible, más peligrosa.',
      emphasis: 'La dificultad no viene de estadísticas infladas. Viene del comportamiento. Nemesis te superará porque te conoce.'
    },
    personajes: {
      label: 'SECCIÓN 03',
      title: 'PERSONAJES',
      player: {
        name: 'EL GUERRERO',
        role: 'Protagonista',
        desc: 'Un guerrero decidido a romper el bucle. Controlado por el jugador, su fuerza radica en la adaptabilidad y la estrategia humana.',
        stats: { hp: 'HP', speed: 'Velocidad', atk: 'Daño rápido', spec: 'Daño especial' }
      },
      nemesis: {
        name: 'NEMESIS',
        role: 'IA Adaptativa',
        desc: 'Una inteligencia artificial que evoluciona. Cada derrota la vuelve más fuerte. Cada victoria tuya la hace más cautelosa. Nunca lucha igual dos veces.',
        berserk_title: 'Ataques exclusivos (Berserk)',
        berserk: [
          { name: 'Crimson Impaler', desc: 'Dash letal a distancia' },
          { name: 'Neuro Storm', desc: 'Ráfaga de 5 golpes en melé' },
          { name: 'Synaptic Collapse', desc: 'AoE que rompe bloqueo' }
        ]
      }
    },
    tecnicas: {
      label: 'SECCIÓN 04',
      title: 'CARACTERÍSTICAS TÉCNICAS',
      cards: [
        { icon: 'psychology', title: 'IA Adaptativa Multi-Capa', desc: 'Nemesis te estudia como un ajedrecista estudia a su oponente. 10 subsistemas trabajan en conjunto para detectar patrones, predecir combos y evolucionar su estrategia en tiempo real.', tooltip: 'NemesisBrain.js + 9 subsistemas' },
        { icon: 'dataset', title: 'Arquitectura Data-Driven', desc: 'Los personajes se configuran en archivos de datos, no en código. Cambia el daño, la velocidad o los ataques sin tocar una línea de lógica. Como editar la ficha de un personaje de rol.', tooltip: 'CharacterFactory + Data Catalogs' },
        { icon: 'sports_martial_arts', title: 'Motor de Combate', desc: 'Sistema profesional de hitbox y hurtbox con detección de impacto precisa. Incluye ventanas de cancelación, coyote time (100ms de tolerancia) y jump buffer para que los controles se sientan fluidos y justos.', tooltip: 'CombatSystem + HitboxController' },
        { icon: 'local_fire_department', title: 'Ciclo Berserk', desc: 'Cuando Nemesis está al borde de la derrota, entra en furia: 12 segundos de poder bruto con ataques especiales. Luego sufre fatiga y debe recargar. Un ciclo de riesgo y recompensa.', tooltip: 'BerserkRuntime.js' },
        { icon: 'science', title: 'Estados Alterados', desc: 'Buffs y debuffs con reglas claras: algunos se reemplazan, otros se refrescan, otros se acumulan. Como pociones en un RPG, pero con prioridades y lógica matemática.', tooltip: 'StatusEffectRuntime.js' },
        { icon: 'storage', title: 'Persistencia Inteligente', desc: 'Nemesis recuerda todo lo que aprendió de ti entre partidas. Su memoria se guarda en el navegador, con validación automática para evitar corrupción de datos.', tooltip: 'SaveManager + LocalStorage' }
      ]
    },
    techtools: {
      label: 'SECCIÓN 05',
      title: 'TECNOLOGÍAS Y HERRAMIENTAS',
      desc: 'El stack técnico que hace posible Project Nemesis',
      tools: [
        { title: 'Phaser 4', desc: 'Motor de juego 2D con renderizado WebGL. Gestiona físicas, sprites, audio y escenas.', iconSrc: 'assets/icons/tech/phaser.svg' },
        { title: 'Vite', desc: 'Bundler ultrarrápido. Builds en segundos con hot-reload en desarrollo.', iconSrc: 'assets/icons/tech/vite.svg' },
        { title: 'JavaScript ES Modules', desc: 'Código modular y organizado. Cada sistema es un archivo independiente.', iconSrc: 'assets/icons/tech/javascript.svg' },
        { title: 'Node.js', desc: 'Entorno de ejecución para las herramientas de build y los tests automatizados.', iconSrc: 'assets/icons/tech/nodejs.svg' },
        { title: 'LocalStorage API', desc: 'Persistencia en el navegador. Nemesis guarda su progreso sin necesidad de servidor.', iconSrc: 'assets/icons/tech/localstorage.svg' },
        { title: 'Pixel Art', desc: 'Estilo visual retro. Sprites dibujados a mano con paletas limitadas y resolución fija.', iconSrc: 'assets/icons/tech/pixelart.svg' }
      ]
    },
    algoritmos: {
      label: 'SECCIÓN 06',
      title: 'ALGORITMOS DESTACADOS',
      items: [
        {
          num: '01', title: 'PatternDetector — Clasificación de Perfiles',
          desc: 'Analiza el comportamiento del jugador en tiempo real y lo clasifica en perfiles tácticos: agresivo, defensivo, equilibrado, impredecible. Nemesis ajusta su estrategia base según el perfil detectado.',
          tags: [
            { label: 'Entrada', code: 'Acciones del jugador (últimos 5 segundos)' },
            { label: 'Salida', code: 'Perfil táctico + confianza (0-1)' }
          ]
        },
        {
          num: '02', title: 'FrustrationRegulator — Balance Dinámico',
          desc: 'Si el jugador pierde repetidamente, Nemesis se contiene para mantener la experiencia desafiante pero justa.',
          table: { headers: ['Derrotas', '0-1', '2', '3', '4+'], values: ['Intensidad', '1.0', '0.7', '0.5', '0.35'] }
        },
        {
          num: '03', title: 'AdaptiveMomentum — Ventana Deslizante',
          desc: 'Monitorea las últimas 40 acciones del jugador. Si detecta abuso de una táctica, Nemesis incrementa su probabilidad de contraatacar o esquivar.',
          tags: [
            { label: 'Umbral', code: 'momentum > 0.6 → IA prioriza defensa', highlight: true },
            { label: 'Decaimiento', code: '-40% entre rondas para no castigar permanentemente' }
          ]
        },
        {
          num: '04', title: 'StatusEffect — Políticas de Stack',
          desc: 'Tres reglas de acumulación para buffs y debuffs que determinan cómo se combinan los efectos de estado.',
          policies: [
            { name: 'Replace', desc: 'El nuevo efecto reemplaza al existente solo si su prioridad es mayor o igual.' },
            { name: 'Refresh', desc: 'Reinicia la duración del efecto existente. Los modificadores no se acumulan.' },
            { name: 'Stack', desc: 'Cada aplicación agrega una nueva instancia. Los modificadores se multiplican.' }
          ]
        }
      ]
    },
    estado: {
      label: 'SECCIÓN 07',
      title: 'ESTADO DEL DESARROLLO',
      progress_label: 'Progreso general',
      items: [
        { icon: '✅', title: 'Core Engine', desc: 'Phaser 4 + Arcade Physics', status: 'done' },
        { icon: '✅', title: 'Sistema de Combate', desc: 'Hitbox/Hurtbox, cooldowns, iframes', status: 'done' },
        { icon: '✅', title: 'IA Adaptativa', desc: '10 subsistemas completos', status: 'done' },
        { icon: '✅', title: 'Arquitectura Data-Driven', desc: 'Catálogos inmutables v9', status: 'done' },
        { icon: '✅', title: 'Sistema Berserk', desc: 'Ciclo completo + fatiga', status: 'done' },
        { icon: '✅', title: 'Sistema de Audio', desc: 'Música dinámica, SFX contextual', status: 'done' },
        { icon: '✅', title: 'Persistencia', desc: 'SaveManager + LocalStorage', status: 'done' },
        { icon: '🔄', title: 'Historia y Narrativa', desc: 'Lore en expansión', status: 'wip' },
        { icon: '🔄', title: 'Spritesheets Reales', desc: 'Animaciones pixel-art en producción', status: 'wip' },
        { icon: '⬜', title: 'Modos de Juego', desc: 'Supervivencia, entrenamiento', status: 'pending' },
        { icon: '⬜', title: 'Multijugador', desc: 'No planificado', status: 'pending' }
      ]
    },
    galeria: {
      label: 'SECCIÓN 08',
      title: 'GALERÍA DE PERSONAJES',
      desc: 'Explora las animaciones y diseños de los personajes del juego.',
      tabs: ['Player', 'Nemesis', 'Diseños'],
      player: [
        { src: 'assets/player/player-idle.gif', label: 'Reposo' },
        { src: 'assets/player/player-walk.gif', label: 'Caminar' },
        { src: 'assets/player/player-jump.gif', label: 'Salto' }
      ],
      nemesis: [
        { src: 'assets/nemesis/nemesis-walk.gif', label: 'Caminar' },
        { src: 'assets/nemesis/nemesis-attack.gif', label: 'Ataque' },
        { src: 'assets/nemesis/nemesis-jump.gif', label: 'Salto' }
      ],
      designs: [
        { src: 'assets/nemesis/nemesis-berserk.png', label: 'Nemesis Berserk' },
        { src: 'assets/nemesis/rayo-orbital.png', label: 'Rayo Orbital' },
        { src: 'assets/player/player-base.png', label: 'Diseño del Guerrero' }
      ]
    },
    roadmap: {
      label: 'SECCIÓN 09',
      title: 'ROADMAP',
      items: [
        { date: 'Abr 2026', title: 'Core Engine', desc: 'Phaser 4, físicas, entidades base.', done: true },
        { date: 'May 2026', title: 'IA Adaptativa + Combate', desc: 'Sistema de IA, hitboxes, ciclo Berserk.', done: true },
        { date: 'Jun 2026', title: 'Beta v1.0', desc: 'Audio, persistencia, balance, versión jugable.', done: true },
        { date: 'Jul 2026', title: 'Historia y Narrativa', desc: 'Incorporación del lore completo al juego.', done: false, current: true },
        { date: 'Ago 2026', title: 'Spritesheets Finales', desc: 'Reemplazar placeholders por arte definitivo.', done: false },
        { date: 'Sep 2026', title: 'Modos de Juego', desc: 'Supervivencia y entrenamiento.', done: false },
        { date: 'Q4 2026', title: 'Lanzamiento Estable', desc: 'Versión 1.0 completa.', done: false }
      ]
    },
    changelog: {
      label: 'SECCIÓN 10',
      title: 'CHANGELOG',
      items: [
        {
          version: 'v1.0.0-beta', date: 'Junio 2026',
          changes: [
            'Sistema de audio completo: música dinámica + SFX contextual',
            'FrustrationRegulator y AdaptiveMomentumSystem implementados',
            'Mejoras en detección de combos y predicción de IA',
            'Corrección de bugs en ciclo Berserk y estados alterados',
            'Optimización de Object Pooling para rendimiento',
            'Persistencia completa con validación de datos'
          ]
        },
        {
          version: 'v0.9.0-alpha', date: 'Mayo 2026',
          changes: [
            'Sistema Berserk con ciclo completo: activación, frenesí, fatiga, cooldown',
            '3 ataques exclusivos: Crimson Impaler, Neuro Storm, Synaptic Collapse',
            'StatusEffectRuntime con políticas replace, refresh y stack',
            'SaveManager con exportación/importación para depuración',
            'Arquitectura Data-Driven v9 con validación automatizada'
          ]
        },
        {
          version: 'v0.5.0-prealpha', date: 'Abril 2026',
          changes: [
            'Core Engine funcional con Phaser 4 y Arcade Physics',
            'IA Adaptativa con 8 maestrías y perfiles tácticos',
            'Sistema de combate básico con detección de impacto',
            'Renderizado provisional con rectángulos y tintes de color'
          ]
        }
      ]
    },
    trivia: {
      label: 'SECCIÓN 11',
      title: 'TRIVIA',
      desc: 'Pon a prueba cuánto sabes sobre Project Nemesis',
      start_btn: 'COMENZAR',
      prev: '◀ Anterior',
      next: 'Siguiente ▶',
      finish: 'Ver resultado ▶',
      retry: 'REINTENTAR',
      results: {
        master: { icon: '🏆', title: '¡Maestro de Nemesis!', msg: 'Conoces el juego mejor que la propia IA.' },
        warrior: { icon: '⚔️', title: 'Guerrero Experimentado', msg: 'Tienes un buen conocimiento táctico de Project Nemesis.' },
        learner: { icon: '📖', title: 'Aprendiz', msg: 'Sabes lo básico, pero aún te queda por descubrir.' },
        novice: { icon: '🍼', title: 'Novato', msg: 'Vuelve a leer la página y desafía a Nemesis de nuevo.' }
      },
      score_label: 'Puntuación',
      errors_title: 'Repaso de errores',
      your_answer: 'Tu respuesta:',
      correct_answer: 'Correcta:',
      start_text: '10 preguntas sobre el juego, la IA, los algoritmos y la historia.'
    },
    community: {
      label: 'SECCIÓN 12',
      title: 'COMUNIDAD Y REDES',
      desc: 'Sigue el desarrollo, contribuye al código y sé parte de Project Nemesis.',
      repo_desc: 'Repositorio oficial del proyecto. Código abierto, contribuciones bienvenidas.',
      twitter_desc: 'Sigue el desarrollo en tiempo real y sé el primero en enterarte de novedades.',
      email_desc: '¿Preguntas, sugerencias o solo quieres saludar? Escríbenos.',
      invite: '¿Quieres contribuir?',
      invite_desc: 'Project Nemesis es un proyecto abierto. Si eres desarrollador, diseñador o entusiasta de los juegos de pelea, tu ayuda es bienvenida.',
      invite_cta: 'CONTRIBUIR EN GITHUB'
    },
    footer: {
      tech: 'Hecho con',
      powered: 'Powered by Vercel'
    },
    theme: { light: 'Modo claro', dark: 'Modo oscuro' },
    lang: { es: 'ES', en: 'EN' }
  },

  en: {
    nav: { jugar: 'Play', historia: 'Story', personajes: 'Characters', tecnico: 'Tech', galeria: 'Gallery', trivia: 'Trivia' },
    hero: {
      badge: '🛠 BETA / PRELIMINARY VERSION',
      title: 'PROJECT<br>NEMESIS',
      subtitle: 'A 2D fighting game with AI that learns from you',
      cta_play: 'PLAY NOW',
      cta_more: 'LEARN MORE',
      tech: ['Phaser 4', 'Vite', 'JavaScript', 'WebGL']
    },
    jugar: {
      label: 'SECTION 01',
      title: 'PLAY NOW',
      desc: 'Beta/preliminary version. Nemesis is ready. Are you?',
      badge: 'PRELIMINARY VERSION',
      badge_sub: 'The game is in active development. Some visual features are provisional.',
      fullscreen: '⛶ Fullscreen',
      reload: '↻ Reload',
      controls_title: 'Controls',
      controls: [
        { key: 'W', label: 'Jump' }, { key: 'A', label: 'Left' }, { key: 'D', label: 'Right' },
        { key: 'J', label: 'Quick attack' }, { key: 'K', label: 'Special attack' }, { key: 'S', label: 'Block' }
      ]
    },
    historia: {
      label: 'SECTION 02',
      title: 'STORY',
      p1: 'The world was condemned to an eternal loop. The Lich unleashed endless chaos, trapping all inhabitants in an unending cycle of destruction.',
      p2: 'But in the shadows of the loop, something began to awaken. Nemesis is no ordinary enemy. It watches. It studies. It learns.',
      p3: 'Every blow you land, every combo you execute, every strategy you employ — Nemesis records it all. Fight after fight, it grows smarter, more unpredictable, more dangerous.',
      emphasis: 'Difficulty comes from behavior, not inflated stats. Nemesis will defeat you because it knows you.'
    },
    personajes: {
      label: 'SECTION 03',
      title: 'CHARACTERS',
      player: {
        name: 'THE WARRIOR',
        role: 'Protagonist',
        desc: 'A warrior determined to break the loop. Controlled by the player, their strength lies in adaptability and human strategy.',
        stats: { hp: 'HP', speed: 'Speed', atk: 'Quick damage', spec: 'Special damage' }
      },
      nemesis: {
        name: 'NEMESIS',
        role: 'Adaptive AI',
        desc: 'An artificial intelligence that evolves. Each defeat makes it stronger. Each victory makes it more cautious. It never fights the same way twice.',
        berserk_title: 'Exclusive Attacks (Berserk)',
        berserk: [
          { name: 'Crimson Impaler', desc: 'Lethal dash from distance' },
          { name: 'Neuro Storm', desc: '5-hit melee barrage' },
          { name: 'Synaptic Collapse', desc: 'AoE that breaks blocking' }
        ]
      }
    },
    tecnicas: {
      label: 'SECTION 04',
      title: 'TECHNICAL FEATURES',
      cards: [
        { icon: 'psychology', title: 'Multi-Layer Adaptive AI', desc: 'Nemesis studies you like a chess player studies their opponent. 10 subsystems work together to detect patterns, predict combos, and evolve strategy in real time.', tooltip: 'NemesisBrain.js + 9 subsystems' },
        { icon: 'dataset', title: 'Data-Driven Architecture', desc: 'Characters are configured in data files, not code. Change damage, speed, or attacks without touching a single line of logic. Like editing a character sheet in a TTRPG.', tooltip: 'CharacterFactory + Data Catalogs' },
        { icon: 'sports_martial_arts', title: 'Combat Engine', desc: 'Professional hitbox/hurtbox system with precise collision detection. Includes cancel windows, coyote time (100ms tolerance), and jump buffer for fluid, fair controls.', tooltip: 'CombatSystem + HitboxController' },
        { icon: 'local_fire_department', title: 'Berserk Cycle', desc: 'When Nemesis is on the brink of defeat, it enters a fury: 12 seconds of raw power with special attacks. Then it suffers fatigue and must recharge. A risk-reward cycle.', tooltip: 'BerserkRuntime.js' },
        { icon: 'science', title: 'Status Effects', desc: 'Buffs and debuffs with clear rules: some replace, some refresh, some stack. Like potions in an RPG, but with priorities and mathematical logic.', tooltip: 'StatusEffectRuntime.js' },
        { icon: 'storage', title: 'Smart Persistence', desc: 'Nemesis remembers everything it learned from you between sessions. Its memory is saved in the browser with auto-validation to prevent data corruption.', tooltip: 'SaveManager + LocalStorage' }
      ]
    },
    techtools: {
      label: 'SECTION 05',
      title: 'TECHNOLOGIES & TOOLS',
      desc: 'The technical stack behind Project Nemesis',
      tools: [
        { title: 'Phaser 4', desc: '2D game engine with WebGL rendering. Manages physics, sprites, audio, and scenes.', iconSrc: 'assets/icons/tech/phaser.svg' },
        { title: 'Vite', desc: 'Ultra-fast bundler. Builds in seconds with hot-reload during development.', iconSrc: 'assets/icons/tech/vite.svg' },
        { title: 'JavaScript ES Modules', desc: 'Modular, organized code. Each system is an independent file.', iconSrc: 'assets/icons/tech/javascript.svg' },
        { title: 'Node.js', desc: 'Runtime for build tools and automated tests.', iconSrc: 'assets/icons/tech/nodejs.svg' },
        { title: 'LocalStorage API', desc: 'Browser persistence. Nemesis saves its progress without needing a server.', iconSrc: 'assets/icons/tech/localstorage.svg' },
        { title: 'Pixel Art', desc: 'Retro visual style. Hand-drawn sprites with limited palettes and fixed resolution.', iconSrc: 'assets/icons/tech/pixelart.svg' }
      ]
    },
    algoritmos: {
      label: 'SECTION 06',
      title: 'FEATURED ALGORITHMS',
      items: [
        {
          num: '01', title: 'PatternDetector — Profile Classification',
          desc: 'Analyzes player behavior in real time and classifies it into tactical profiles: aggressive, defensive, balanced, unpredictable. Nemesis adjusts its base strategy based on the detected profile.',
          tags: [
            { label: 'Input', code: 'Player actions (last 5 seconds)' },
            { label: 'Output', code: 'Tactical profile + confidence (0-1)' }
          ]
        },
        {
          num: '02', title: 'FrustrationRegulator — Dynamic Balance',
          desc: 'If the player loses repeatedly, Nemesis holds back to keep the experience challenging but fair.',
          table: { headers: ['Losses', '0-1', '2', '3', '4+'], values: ['Intensity', '1.0', '0.7', '0.5', '0.35'] }
        },
        {
          num: '03', title: 'AdaptiveMomentum — Sliding Window',
          desc: 'Monitors the last 40 player actions. If it detects tactic abuse, Nemesis increases its chance to counter or dodge.',
          tags: [
            { label: 'Threshold', code: 'momentum > 0.6 → AI prioritizes defense', highlight: true },
            { label: 'Decay', code: '-40% between rounds to avoid permanent punishment' }
          ]
        },
        {
          num: '04', title: 'StatusEffect — Stack Policies',
          desc: 'Three accumulation rules for buffs and debuffs that determine how status effects combine.',
          policies: [
            { name: 'Replace', desc: 'New effect replaces existing one only if its priority is higher or equal.' },
            { name: 'Refresh', desc: 'Resets the duration of the existing effect. Modifiers do not stack.' },
            { name: 'Stack', desc: 'Each application adds a new instance. Modifiers multiply together.' }
          ]
        }
      ]
    },
    estado: {
      label: 'SECTION 07',
      title: 'DEVELOPMENT STATUS',
      progress_label: 'Overall progress',
      items: [
        { icon: '✅', title: 'Core Engine', desc: 'Phaser 4 + Arcade Physics', status: 'done' },
        { icon: '✅', title: 'Combat System', desc: 'Hitbox/Hurtbox, cooldowns, iframes', status: 'done' },
        { icon: '✅', title: 'Adaptive AI', desc: '10 complete subsystems', status: 'done' },
        { icon: '✅', title: 'Data-Driven Architecture', desc: 'Immutable catalogs v9', status: 'done' },
        { icon: '✅', title: 'Berserk System', desc: 'Full cycle + fatigue', status: 'done' },
        { icon: '✅', title: 'Audio System', desc: 'Dynamic music, contextual SFX', status: 'done' },
        { icon: '✅', title: 'Persistence', desc: 'SaveManager + LocalStorage', status: 'done' },
        { icon: '🔄', title: 'Story & Narrative', desc: 'Expanding lore', status: 'wip' },
        { icon: '🔄', title: 'Final Spritesheets', desc: 'Pixel-art animations in production', status: 'wip' },
        { icon: '⬜', title: 'Game Modes', desc: 'Survival, training', status: 'pending' },
        { icon: '⬜', title: 'Multiplayer', desc: 'Not planned', status: 'pending' }
      ]
    },
    galeria: {
      label: 'SECTION 08',
      title: 'CHARACTER GALLERY',
      desc: 'Explore the animations and designs of the game characters.',
      tabs: ['Player', 'Nemesis', 'Designs'],
      player: [
        { src: 'assets/player/player-idle.gif', label: 'Idle' },
        { src: 'assets/player/player-walk.gif', label: 'Walk' },
        { src: 'assets/player/player-jump.gif', label: 'Jump' },
        { src: 'assets/player/player-attack.png', label: 'Attack' }
      ],
      nemesis: [
        { src: 'assets/nemesis/nemesis-walk.gif', label: 'Walk' },
        { src: 'assets/nemesis/nemesis-attack.gif', label: 'Attack' },
        { src: 'assets/nemesis/nemesis-jump.gif', label: 'Jump' },
        { src: 'assets/nemesis/nemesis-transform-berserk.png', label: 'Berserk Transform' },
        { src: 'assets/nemesis/nemesis-berserk-idle.png', label: 'Berserk Idle' },
        { src: 'assets/nemesis/nemesis-berserk-attack.png', label: 'Berserk Attack' },
        { src: 'assets/nemesis/nemesis-berserk-special1.png', label: 'Berserk Special 1' },
        { src: 'assets/nemesis/nemesis-berserk-special2.png', label: 'Berserk Special 2' }
      ],
      designs: [
        { src: 'assets/nemesis/nemesis-berserk.png', label: 'Nemesis Berserk' },
        { src: 'assets/nemesis/nemesis-final-form.png', label: 'Final Form' },
        { src: 'assets/nemesis/rayo-orbital.png', label: 'Orbital Ray' },
        { src: 'assets/player/player-base.png', label: 'Warrior Design' }
      ]
    },
    roadmap: {
      label: 'SECTION 09',
      title: 'ROADMAP',
      items: [
        { date: 'Apr 2026', title: 'Core Engine', desc: 'Phaser 4, physics, base entities.', done: true },
        { date: 'May 2026', title: 'Adaptive AI + Combat', desc: 'AI system, hitboxes, Berserk cycle.', done: true },
        { date: 'Jun 2026', title: 'Beta v1.0', desc: 'Audio, persistence, balance, playable version.', done: true },
        { date: 'Jul 2026', title: 'Story & Narrative', desc: 'Full lore integration into the game.', done: false, current: true },
        { date: 'Aug 2026', title: 'Final Spritesheets', desc: 'Replace placeholders with final art.', done: false },
        { date: 'Sep 2026', title: 'Game Modes', desc: 'Survival and training modes.', done: false },
        { date: 'Q4 2026', title: 'Stable Release', desc: 'Complete version 1.0.', done: false }
      ]
    },
    changelog: {
      label: 'SECTION 10',
      title: 'CHANGELOG',
      items: [
        {
          version: 'v1.0.0-beta', date: 'June 2026',
          changes: [
            'Complete audio system: dynamic music + contextual SFX',
            'FrustrationRegulator and AdaptiveMomentumSystem implemented',
            'Improved combo detection and AI prediction',
            'Bug fixes in Berserk cycle and status effects',
            'Object Pooling optimization for performance',
            'Full persistence with data validation'
          ]
        },
        {
          version: 'v0.9.0-alpha', date: 'May 2026',
          changes: [
            'Berserk system with full cycle: activation, frenzy, fatigue, cooldown',
            '3 exclusive attacks: Crimson Impaler, Neuro Storm, Synaptic Collapse',
            'StatusEffectRuntime with replace, refresh, and stack policies',
            'SaveManager with export/import for debugging',
            'Data-Driven Architecture v9 with automated validation'
          ]
        },
        {
          version: 'v0.5.0-prealpha', date: 'April 2026',
          changes: [
            'Core Engine with Phaser 4 and Arcade Physics',
            'Adaptive AI with 8 masteries and tactical profiles',
            'Basic combat system with hit detection',
            'Provisional rendering with colored rectangles'
          ]
        }
      ]
    },
    trivia: {
      label: 'SECTION 11',
      title: 'TRIVIA',
      desc: 'Test how much you know about Project Nemesis',
      start_btn: 'START',
      prev: '◀ Previous',
      next: 'Next ▶',
      finish: 'View result ▶',
      retry: 'RETRY',
      results: {
        master: { icon: '🏆', title: 'Nemesis Master!', msg: 'You know the game better than the AI itself.' },
        warrior: { icon: '⚔️', title: 'Experienced Warrior', msg: 'You have good tactical knowledge of Project Nemesis.' },
        learner: { icon: '📖', title: 'Learner', msg: 'You know the basics, but there is more to discover.' },
        novice: { icon: '🍼', title: 'Novice', msg: 'Re-read the page and challenge Nemesis again.' }
      },
      score_label: 'Score',
      errors_title: 'Error review',
      your_answer: 'Your answer:',
      correct_answer: 'Correct:',
      start_text: '10 questions about the game, AI, algorithms, and story.'
    },
    community: {
      label: 'SECTION 12',
      title: 'COMMUNITY & SOCIAL',
      desc: 'Follow development, contribute to the code, and be part of Project Nemesis.',
      repo_desc: 'Official project repository. Open source, contributions welcome.',
      twitter_desc: 'Follow development in real time and be the first to know about updates.',
      email_desc: 'Questions, suggestions, or just want to say hi? Write to us.',
      invite: 'Want to contribute?',
      invite_desc: 'Project Nemesis is an open project. If you are a developer, designer, or fighting game enthusiast, your help is welcome.',
      invite_cta: 'CONTRIBUTE ON GITHUB'
    },
    footer: {
      tech: 'Made with',
      powered: 'Powered by Vercel'
    },
    theme: { light: 'Light mode', dark: 'Dark mode' },
    lang: { es: 'ES', en: 'EN' }
  }
};
