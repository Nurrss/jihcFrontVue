<template>
  <!-- <div class="container mb-4 rounded-3">
    <div class="container-fluid py-5">
      <div class="mb-5">
        <h1 class="display-5 fw-bold mb-5">{{ $t("ProfessionH1") }}</h1>
        <p class="mb-3">
          {{ $t("ProfessionP1") }}
        </p>
        <p class="mb-3">
          {{ $t("ProfessionP2") }}
        </p>

        <h4 class="mb-3">{{ $t("ProfessionH2") }}</h4>
        <li>{{ $t("ProfessionLi1") }}</li>
        <li>{{ $t("ProfessionLi2") }}</li>
        <li>{{ $t("ProfessionLi3") }}</li>
        <li>{{ $t("ProfessionLi4") }}</li>

        <button
          type="button"
          class="btn btn-primary float-end rounded-4 px-5 py-2"
        >
          {{ $t("ProfessionBtn1") }}
        </button>
        <p>{{ $t("ProfessionP3") }}</p>
      </div>
      <div>
        <h1 class="display-5 fw-bold mb-5">{{ $t("ProfessionH3") }}</h1>
        <p class="mb-3">
          {{ $t("ProfessionP4") }}
        </p>
        <p class="mb-3">
          {{ $t("ProfessionP5") }}
        </p>

        <h4 class="mb-3">{{ $t("ProfessionH4") }}</h4>
        <li>{{ $t("ProfessionLi1") }}</li>
        <li>{{ $t("ProfessionLi2") }}</li>
        <li>{{ $t("ProfessionLi3") }}</li>
        <li>{{ $t("ProfessionLi4") }}</li>

        <button
          type="button"
          class="btn btn-primary float-end rounded-4 px-5 py-2"
        >
          {{ $t("ProfessionBtn1") }}
        </button>
        <p>{{ $t("ProfessionP6") }}</p>
      </div>
    </div>
  </div> -->

  <div class="container py-5" id="featured-3">
    <h4 class="pb-2 fw-bold" style="color: #0077ff">
      ОБЩАЯ СТРУКТУРА ОБРАЗОВАНИЯ В КОЛЛЕДЖЕ
    </h4>
    <div class="row pb-5 g-4 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div
          class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2"
        ></div>
        <h5 class="fw-bold text-body-emphasis">1 КУРС</h5>
        <p>
          Завершение школьной программы, где точные предметы преподаются на
          английском языке, интенсивное освоение английского языка, углубление в
          математику и получение основ турецкого языка.
        </p>
      </div>
      <div class="feature col">
        <div
          class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2"
        ></div>
        <h5 class="fw-bold text-body-emphasis">2 КУРС</h5>
        <p>
          Изучение профессиональных и специальных предметов на английском языке.
        </p>
      </div>
      <div class="feature col">
        <div
          class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2"
        ></div>
        <h5 class="fw-bold text-body-emphasis">3 КУРС</h5>
        <p>
          Продолжение изучения профессиональных и специальных предметов на
          английском языке и прохождение практики на производстве для
          практического применения освоенных дисциплин.
        </p>
      </div>
    </div>
    <h4 class="pb-2 fw-bold" style="color: #0077ff">
      ЯЗЫКОВАЯ КАРТА ВСЕГО ПРОЦЕССА ОБУЧЕНИЯ В КОЛЛЕДЖЕ
    </h4>
    <div
      class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-start"
    >
      <div class="list-group">
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/kz_flag.png" alt="" class="" />
          <div
            class="d-flex gap-2 w-100 justify-content-center align-self-center"
          >
            <div>
              <h6 class="mb-0 fw-bold">
                20% <span style="color: #0077ff">НА</span> КАЗАХСКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/ru_flag.png" alt="twbs" class="flex-shrink-0" />
          <div
            class="d-flex gap-2 w-100 justify-content-center align-self-center"
          >
            <div>
              <h6 class="mb-0 fw-bold">
                5% <span style="color: #0077ff">НА</span> РУССКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/tu_flag.png" alt="twbs" class="flex-shrink-0" />
          <div
            class="d-flex gap-2 w-100 justify-content-center align-self-center"
          >
            <div>
              <h6 class="mb-0 fw-bold">
                5% <span style="color: #0077ff">НА</span> ТУРЕЦКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex gap-3 py-3" aria-current="true">
          <img src="../assets/eng_flag.png" alt="twbs" class="flex-shrink-0" />
          <div class="d-flex w-100 justify-content-center align-self-center">
            <div>
              <h6 class="mb-0 fw-bold">
                70% <span style="color: #0077ff">НА</span> АНГЛИЙСКОМ
                <span style="color: #0077ff">ЯЗЫКЕ</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h4 class="pb-2 fw-bold">INFORMATION TECHNOLOGY</h4>
    <h5>
      Современные технологии сейчас везде и они ежедневно меняют мир и влияют на
      нашу жизнь. Комплексный и специализированный подход к IT означает, что вы
      получаете широкий выбор и прекрасные перспективы.
      <span style="color: #0077ff"
        >Наши партнеры - это фирмы, которые имеют крепкие позиции на
        казахстанском рынке информационных технологий.</span
      >
    </h5>

    <div class="row g-5 py-5">
      <div class="col-md-6">
        <h5>МЫ ОХВАТЫВАЕМ МНОГИЕ СФЕРЫ IT</h5>

        <ol class="list-group list-group-unstyled">
          <li class="list-group-item border-0">
            &#8226; Программирование (Java, Python)
          </li>
          <li class="list-group-item border-0">
            &#8226; Разработка приложений (Application development)
          </li>
          <li class="list-group-item border-0">
            &#8226; Графический дизайн (Graphic Design)
          </li>
          <li class="list-group-item border-0">
            &#8226; Менеджмент в IT (IT Management)
          </li>
        </ol>
      </div>
      <div class="col-md-6">
        <h5 style="color: #0077ff">СМОЖЕШЬ СТАТЬ</h5>

        <ol class="list-group list-group-unstyled">
          <li class="list-group-item border-0">
            &#8226; Программистом (<span style="color: #0077ff"
              >Java, Python</span
            >)
          </li>
          <li class="list-group-item border-0">
            &#8226; Разработчиком сайтов (<span style="color: #0077ff"
              >Full Stack</span
            >)
          </li>
          <li class="list-group-item border-0">
            &#8226; Дизайнером (<span style="color: #0077ff"
              >Graphic, UX/UI, 3D</span
            >)
          </li>
          <li class="list-group-item border-0">
            &#8226; Руководителем проекта (<span style="color: #0077ff"
              >Project Manager</span
            >)
          </li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <h6>
          ПРОДОЛЖИТЕЛЬНОСТЬ ОБУЧЕНИЯ
          <span style="color: #0077ff">2 года и 10 месяцев</span><br /><br />
          СТОИМОСТЬ ОБУЧЕНИЯ <span style="color: #0077ff">Грант</span> (отбор
          ведется строго смотря на аттестат за 9 класс) <br /><br />
          СТИПЕНДИЯ И СКИДКИ для грантового отделения
          <span style="color: #0077ff">от 32,000 KZT</span> ежемесячно
          выплачивается
          <span style="color: #0077ff">каждому студенту</span> если нет оценок
          ниже B-
        </h6>
      </div>
      <div class="col-md-4">
        <button
          class="btn btn-primary float-end rounded-4 px-5 py-2 mt-3"
          style="background-color: #0077ff"
        >
          Подробнее
        </button>
      </div>
    </div>
    <!-- #00805E -->
    <h4 class="pb-2 fw-bold pt-5">ACCOUNTING</h4>
    <h5>
      Программа по бухгалтерскому учету нацелена на подготовку специалистов,
      обладающих теоретическими знаниями в области
      <span style="color: #00805e">учета и финансов</span>, владеющих
      международными стандартами финансовой отчетности, а также
      профессиональными компетенциями и техническими навыками, необходимыми для
      работы на
      <span style="color: #00805e">международном и локальном</span> рынке труда.
      <br /><br />
      Профессиональные преподаватели и практики делают нашу программу
      прикладной, обеспечивая
      <span style="color: #00805e">высокий уровень трудоустройства</span>
      выпускников. Стандарты международной сертификации
      <span style="color: #00805e"
        >АССА (Ассоциация дипломированных сертифицированных бухгалтеров)</span
      >
      направляют нашу программу быть актуальной и емкой в полном соответствии с
      современными реалиями рынка труда.
    </h5>
    <div class="d-flex gap-3 pt-3">
      <img src="..//assets/ACCA.png" alt="" />
      <img
        src="..//assets/1C.png
     "
        alt=""
      />
    </div>
    <div class="col-md-6">
      <h5 style="color: #00805e" class="pt-3">СМОЖЕШЬ СТАТЬ</h5>

      <ol class="list-group list-group-unstyled">
        <li class="list-group-item border-0">&#8226; Бухгалтером</li>
        <li class="list-group-item border-0">&#8226; Менеджером</li>
        <li class="list-group-item border-0">&#8226; Аналитиком</li>
        <li class="list-group-item border-0">&#8226; Финансистом</li>
      </ol>
    </div>

    <div class="row pt-4">
      <div class="col-md-8">
        <h6>
          <span style="color: #00805e">СТОИМОСТЬ ОБУЧЕНИЯ</span> 645,000 тенге
          за 1 академический год (платное отделение, гранты не предоставляются)
          <br /><br />
          <span style="color: #00805e">СКИДКИ</span> Лучшие 5 студентов в своей
          группе после 1 семестра получают скидки от 10 до 20% от стоимости
          обучения
        </h6>
      </div>
      <div class="col-md-4">
        <button
          class="btn btn-primary float-end rounded-4 px-5 py-2 mt-3"
          style="background-color: #0077ff"
        >
          Подробнее
        </button>
      </div>
    </div>

    <h4 class="pb-2 fw-bold pt-5">TEACHER TRAINING (MATHEMATICS)</h4>
    <h5>
      Программа направлена на формирование
      <span style="color: #ff9100"
        >комплексной фундаментальной теоретической подготовки</span
      >
      в <span style="color: #ff9100">педагогике</span> и
      <span style="color: #ff9100"
        >методологическом современном аппарате обучения, углубление
        теоретических и практических знаний студентов по педагогике и
        психологии, методологии, интеграции</span
      >
      с другими отраслями науки, освоение современных концептов обучения
      математики и методах и формах
      <span style="color: #ff9100">научного познания</span>. Обязательным
      является скрупулезное изучение математической науки для углубленного
      понимания и знания предмета математики. <br /><br />
      Подготовка педагогических кадров с
      <span style="color: #ff9100">английским языком</span> обучения, способных
      осуществлять и оптимизировать профессиональную деятельность в условиях
      трехъязычия в соответствии с технологией
      <span style="color: #ff9100"
        >интегрированного предметно-языкового обучения,
        ценностно-ориентированного воспитания</span
      >
      и современным
      <span style="color: #ff9100">методам обучения математики</span>.
      ПРОДОЛЖИТЕЛЬНОСТЬ ОБУЧЕНИЯ
      <span style="color: #ff9100">3 года и 10 месяцев</span>
    </h5>
    <div class="row pt-4">
      <div class="col-md-8">
        <h6>
          СТОИМОСТЬ ОБУЧЕНИЯ Грант (отбор ведется строго смотря на аттестат за 9
          класс)
          <br /><br />
          СТИПЕНДИЯ И СКИДКИ для грантового отделения от
          <span style="color: #ff9100">32,000 KZT</span> ежемесячно
          выплачивается
          <span style="color: #ff9100">каждому студенту</span> если нет оценок
          ниже B-
        </h6>
      </div>
      <div class="col-md-4">
        <button
          class="btn btn-primary float-end rounded-4 px-5 py-2 mt-3"
          style="background-color: #0077ff"
        >
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
