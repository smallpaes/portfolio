(function () {
  const projects = [
    {
      title: 'Nextmeal',
      image: './img/projects/nextmeal.png',
      imageAlt: 'Nextmeal Project Cover Photo',
      description: 'A functional Google Chrome Extension that helps users readily generate placeholder images and find the right royalty-free images with accessible links of all sizes listed on a report that can be copied and used right away!',
      badgeCaption: 'Nextmeal',
      links: {
        github: 'https://github.com/smallpaes/nextmeal',
        heroku: 'https://nextmeal.herokuapp.com/#/',
        medium: 'http://tiny.cc/kd1zgz'
      },
      accomplishments: [
        'Built with Vue, Vuex, Vue Router',
        'Create maps using Google Maps API',
        'Chart.js for data visualization',
        'Using Axios, RESTful API',
        'Connect to third party payment APIs',
        'Node, Express, MySQL',
      ]
    },
    {
      title: 'Placeholder Image Helper',
      image: './img/projects/chrome-extension-cover.jpeg',
      imageAlt: 'Chrome Extension Project Cover Photo',
      description: 'A functional Google Chrome Extension that helps users readily generate placeholder images and find the right royalty-free images with accessible links of all sizes listed on a report that can be copied and used right away!',
      badgeCaption: 'Chrome Extension',
      links: {
        github: 'https://github.com/smallpaes/find-placeholder-image',
        chrome: 'https://bit.ly/306Wp7b',
        medium: 'https://bit.ly/2GN6q1F'
      },
      accomplishments: [
        'Chrome Extension form scratch',
        'Published to Chrome Web Store',
        'Built with Bootstrap 4.3',
        'Using Javascript ES6'
      ]
    },
    {
      title: 'Expense Tracker',
      image: './img/projects/expense-tracker.png',
      imageAlt: 'Expense Tracker Project Cover Photo',
      description: 'A practical web application built with Node.js, Express, and MongoDB for you to readily record, view, and manage your expense with an account: Create, view, edit, delete, filter expenses are as easy as pie',
      badgeCaption: 'Node.js & Express',
      links: {
        github: 'https://github.com/smallpaes/expense-tracker',
        heroku: 'https://boiling-beach-19178.herokuapp.com/',
        medium: 'https://bit.ly/2M679Q3'
      },
      accomplishments: [
        'Express Handlebars & Bootstrap',
        'MongoDB & Mongoose',
        'Passport Authentication',
        'Front-end & Back-end validation',
        'CSRF Protection',
        'Password reset & Mailing feature'
      ]
    },
    {
      title: 'Todo List',
      image: './img/projects/todo-list.png',
      imageAlt: 'Expense Tracker Project Cover Photo',
      description: 'A practical web application built with Node.js, Express, and MySQL for you to readily record, view, and manage your tasks with an account: Create, view, edit, delete, filter, and sort expenses are as easy as pie',
      badgeCaption: 'Node.js & Express',
      links: {
        github: 'https://github.com/smallpaes/todo-list',
        medium: 'https://bit.ly/2yIrimi'
      },
      accomplishments: [
        'Express Handlebars & Bootstrap',
        'MySQL & Sequelize',
        'Passport Authentication',
        'Front-end & Back-end validation',
        'CSRF Protection',
        'Animate.css',
      ]
    }
  ]

  const blogPosts = [
    {
      name: '全端美食預定平台',
      link: 'http://tiny.cc/2vxzgz',
      image: './img/about-me/about-me-1.jpeg'
    },
    {
      name: '轉職心路歷程',
      link: 'http://tiny.cc/atxzgz',
      image:'./img/about-me/about-me-2.jpg"'
    },
    {
      name: '分享前端技能養成',
      link: 'https://bit.ly/2Oxf8ax',
      image: './img/about-me/about-me-3.jpg'
    },
    {
      name: '展開轉職工程師之路',
      link: 'http://tiny.cc/iq2zgz',
      image: './img/about-me/about-me-4.jpg'
    }
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }
    nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
            <a href="${post.link}" target="_blank">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  ${post.name}
                </span>
              </div>
            </a>
          </div>
        </div>
      `
    })
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }

  // Handle learn more section animation
  function animateLearnMore() {
    const learnMoreOffsetHeight = document.getElementById('more-info').offsetTop
    if (window.pageYOffset + window.innerHeight <= learnMoreOffsetHeight) { return }
    const buttons = document.querySelectorAll('.learn-more-link a')
    const animations = ['animated', 'bounceIn', 'slow']
    learnMoreAnimated = true
    buttons.forEach(button => button.classList.add(...animations))
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    showFloatingActionButton()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()