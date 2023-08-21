import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="part1">
          <div className="container2">
            <img src="logo.png" alt="Logo" width="30%" height="30%" />
          </div>
          <div className="container3">
            <nav>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Why Us</a>
            </nav>
          </div>
          <div className="container4">
            <button className="btn">Let’s Talk</button>
          </div>
          <div className="container1">
            <h1>Your Trusted IT Support Partner</h1>
            <p> Welcome to Disionix where we deliver top-notch technical support
            services tailored to meet your needs. From software troubleshooting
            to network optimization, our dedicated team of experts is here to
            resolve your IT...</p>
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="part2">
          <div className="pt2_container1">
            <img src="Rectangle 3.png" alt="Photo 1" className="photo1" />
            <img src="Rectangle 4.png" alt="Photo 2" className="photo2" />
          </div>
          <div className="pt2_container2">
            <h2>About US</h2>
            <h1>Welcome To Disionix</h1>
            <p>At Disionix, we are dedicated to being your trusted IT support partner. With a passion for technology and a commitment to exceptional customer service, we take pride in simplifying your technical challenges so you can focus on what matters most - your business.</p>
            <p>Since our establishment in [Year of Establishment], we have been on a relentless mission to deliver efficient and reliable IT support services to businesses and individuals alike.</p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="etc-text">
            <h1>Our Services</h1>
            <h2>Special Digital Services</h2>
        </div>
        <div className="part3">

          <div className="pt3_container1">
            <img src="Rectangle 5.png" className="pt3_photo1" />
            <h1>Oftware Troubleshooting and Support</h1>
            <p>Is your software acting up? Our team of experienced technicians is here to diagnose and resolve software-related issues efficiently.</p>
          </div>
          <div className="pt3_container2">
            <img src="Rectangle 8.png" className="pt3_photo2" />
            <h1>Hardware Assistance and Repairs</h1>
            <p>From desktops to laptops, printers to routers, our hardware experts can handle it all. Whether you need assistance with setup, maintenance, or troubleshooting, </p>
          </div>
          <div className="pt3_container3">
            <img src="Rectangle 7.png" className="pt3_photo3" />
            <h1>Network Setup and Optimization</h1>
            <p>Get your business connected with our expert network setup and optimization services. We'll design a secure and efficient network that suits your needs, </p>
          </div>
        </div>

        <div className="part4">
          <div className="pt4_container1">
              <h1>Why Us</h1>
              <h2>We Are Working With 15 Years Exprieence</h2>
              <p>Choosing the right IT support provider is crucial for businesses and individuals looking for reliable technical assistance. To persuade potential clients to choose your company, you need to highlight the unique value and advantages you offer. Below are some compelling reasons why clients should choose your IT company</p>
              <div className="pt4_inside_container1">
                <div className="rectangle1">
                  <div className="rect1_inner">
                    <div className="svgContainer">
                      <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                        <circle opacity="0.5" cx="18" cy="18" r="18" fill="#D9D9D9"/>
                      </svg>
                      <svg className="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="gray">
                      <path d="M4.03047 4.92422C3.82852 4.97148 3.95742 4.96289 3.78984 4.98438C3.07227 5.13906 3.60508 5.27656 4.03047 4.92422ZM16.6504 5.21211C16.702 5.17773 16.8824 5.00156 16.3195 4.82969C16.3539 5.00586 16.2035 4.98867 16.2035 5.0875C16.6203 5.46563 16.7922 6.12305 17.325 6.26055C17.4281 5.78789 16.8523 5.55586 16.6504 5.21211ZM3.64805 4.78672C3.7125 5.16914 4.00039 4.38281 4.00469 4.10352C3.89297 4.16797 3.78125 4.23242 3.66523 4.28398C3.93594 4.42148 3.69961 4.56758 3.40742 4.78672C2.81445 5.52578 3.96172 4.21094 3.64805 4.78672ZM11 0C4.92422 0 0 4.92422 0 11C0 17.0715 4.92422 22 11 22C17.0758 22 22 17.0715 22 11C22 4.92422 17.0758 0 11 0ZM11.2922 3.68672L11.3438 3.70391C11.1375 3.97031 12.418 4.74805 11.4984 4.8125C10.6391 5.05742 11.8594 4.58906 11.1934 4.6707C11.5457 4.18086 10.9141 4.17227 11.2922 3.68672ZM6.07578 4.39141C5.76641 4.13359 4.79531 4.74375 5.13477 4.59766C5.97695 4.2668 5.19063 4.63203 5.38828 5.02734C5.20781 5.40117 5.32812 4.65781 4.88125 5.10039C4.55898 5.17344 3.76836 5.90391 3.86719 5.68047C3.84141 6.02852 2.92617 6.44102 2.80156 7.02109C2.50078 7.82461 2.72852 6.99102 2.67266 6.67734C2.24297 6.13164 1.46094 7.60117 1.69297 8.18125C2.08398 7.49375 2.05391 8.1082 1.77031 8.41328C2.0582 8.9418 1.5082 9.6293 2.05391 10.0203C2.29453 10.0762 2.77578 9.2125 2.56523 10.1105C2.71133 9.33281 2.96914 10.2953 3.38594 10.0805C3.41172 10.4887 3.66523 10.2996 3.72109 10.7937C4.41719 10.7422 5.05313 11.9195 4.22383 12.143C4.34844 12.1086 4.59336 12.3277 4.87695 12.1602C5.3582 12.5426 6.62578 12.5898 6.66016 13.5352C5.78789 13.952 6.44531 15.0949 5.68906 15.5031C4.82109 15.3742 5.39258 16.573 5.02734 16.4355C5.17344 17.2992 4.15078 16.3238 4.54609 16.8008C5.27227 17.2477 4.22813 17.1574 4.55469 17.484C4.18945 17.4066 4.78242 18.1629 4.88125 18.4422C5.40547 19.293 4.43008 18.2531 4.14219 17.9695C3.86719 17.4195 3.21836 16.3668 3.03789 15.5031C2.93477 14.2484 1.96367 13.4062 1.74023 12.1816C1.5168 11.4984 2.35469 10.4027 1.90352 10.0203C1.5125 9.71523 1.67148 8.67109 1.43945 8.12109C2.01953 5.60742 3.86289 3.48906 6.07578 2.23438C5.84805 2.40195 7.37773 1.80039 7.20156 1.94648C7.1543 2.05391 8.09531 1.53828 8.6625 1.46094C8.60234 1.46953 7.18867 1.97656 7.57969 1.90781C6.97383 2.2043 7.51953 2.03672 7.82031 1.88633C7.21875 2.32891 6.75469 2.2043 6.07148 2.59531C5.38398 2.77578 5.52578 3.48906 5.03594 3.8457C5.32383 3.89727 6.0457 3.10234 6.4668 2.82305C7.43359 2.35469 5.97695 3.67383 6.89648 3.10664C6.58711 3.39453 6.65156 3.8543 6.4625 3.9832C6.36797 3.95742 6.83633 4.20664 6.07578 4.39141ZM7.57969 2.41484C7.48086 2.54805 7.34336 2.83594 7.26172 2.65977C7.15 2.71563 7.10703 2.95625 6.89648 2.76289C7.02109 2.67266 7.15 2.45781 6.90508 2.59102C7.0168 2.4707 8.01367 2.13125 7.95781 2.00234C8.13398 1.89062 8.1168 1.83477 7.91484 1.90352C7.81172 1.86914 8.15977 1.57695 8.62383 1.53828C8.68828 1.53828 8.71406 1.58125 8.59805 1.56836C7.89766 1.7832 8.19844 1.72305 8.67109 1.56836C8.49063 1.67148 8.36602 1.70156 8.33594 1.74883C8.80859 1.57695 8.31016 1.87344 8.41758 1.85195C8.28437 1.9207 8.43906 1.94219 8.18125 2.04102C8.22852 2.00234 7.76016 2.32031 8.03945 2.22578C7.76875 2.48359 7.64844 2.48789 7.57969 2.41484ZM7.99219 3.0293C8.00078 2.6168 8.59375 2.35469 8.5207 2.3332C9.25117 1.98945 8.26719 2.34609 8.84297 2.03672C9.05781 2.01523 9.51328 1.32773 10.1449 1.28477C10.841 1.07422 10.5187 1.29766 11.0344 1.1L10.9312 1.18594C10.841 1.19883 10.9527 1.35781 10.6262 1.59844C10.5918 1.97227 10.0031 1.80039 10.2953 2.2C10.1063 1.9293 9.82266 2.19141 10.1793 2.21719C9.79687 2.50937 8.90742 2.56094 8.48203 3.04648C8.20703 3.4418 7.95352 3.31719 7.99219 3.0293ZM11.0473 4.4043C10.7551 5.10898 10.4715 4.30117 10.9871 4.17227C11.116 4.24102 11.1676 4.2625 11.0473 4.4043ZM9.94727 2.99492C9.86133 2.67695 9.93008 2.84453 10.4414 2.69414C10.7937 2.94766 10.1277 3.11523 9.94727 2.99492ZM17.948 15.6063C17.5441 14.9102 18.4379 14.2656 18.7387 13.6812C18.7 14.3645 18.6141 15.0391 17.948 15.6063ZM19.4691 7.65273C19.0309 7.68711 18.6355 7.79023 18.2402 7.54102C17.3293 6.54414 18.4078 8.6668 18.7086 7.79883C19.7914 8.21133 18.6914 9.99023 18.0082 9.80547C17.6258 8.98047 17.1531 8.07383 16.3195 7.66992C16.9598 8.37891 17.2777 9.25117 17.9652 9.89141C18.0125 10.7852 18.9191 9.56484 18.8633 10.2566C18.9492 11.4469 17.5184 12.1602 17.7676 13.3547C18.3004 14.4418 16.7406 14.6395 16.9168 15.6148C16.2895 16.3152 15.6191 17.2605 14.4934 17.1102C14.4934 16.5172 14.1926 16.0145 14.1238 15.4043C13.5137 14.6309 14.7684 13.8016 13.9906 12.9937C13.0926 12.7918 14.1754 11.5543 13.2516 11.6703C12.6973 11.116 11.8852 11.6531 11.0902 11.6574C10.0934 11.752 9.06641 10.4328 9.50898 9.50039C9.15664 8.5293 10.6262 8.2457 10.6648 7.39062C11.3695 6.80195 12.3707 6.875 13.3246 6.7375C13.2559 7.4207 13.9777 7.425 14.5234 7.65273C14.8285 6.91367 15.7781 7.77305 16.427 7.30469C16.6504 6.21328 15.7953 6.8707 15.3055 6.52266C14.7125 5.65469 16.573 6.07578 16.3797 5.62031C15.6578 5.61602 16.066 4.73086 15.5547 5.225C16.0145 5.30664 15.473 5.66758 15.4859 5.25508C14.7898 5.05313 15.4602 6.0457 15.1078 6.14023C14.5707 5.9168 14.8242 6.39375 14.8801 6.4668C14.648 6.96953 14.3645 5.72773 13.707 5.76211C13.0539 5.16484 13.4492 6.03281 14.0164 6.17461C13.8961 6.20898 14.0852 6.70313 13.9348 6.49258C13.4664 5.84805 12.577 5.41836 12.0484 6.20898C11.9926 6.94805 10.4887 7.15859 10.7293 6.29492C10.377 5.40117 11.8207 6.26914 11.6875 5.55586C10.7594 4.94141 11.941 5.13906 12.2547 4.56328C12.968 4.58477 12.2848 3.97891 12.6199 3.80273C12.5855 4.46016 13.1656 4.33555 13.6254 4.21094C13.5137 3.83281 13.9004 3.8457 13.6641 3.53203C14.7297 3.10664 12.852 3.72969 13.2301 2.79727C12.7703 2.4793 13.0367 3.49766 13.2301 3.60508C13.243 3.91875 12.9766 4.30547 12.6113 3.64805C12.0785 3.99609 12.1344 3.2957 12.1 3.36875C12.0398 3.09805 12.5039 3.08516 12.5082 2.6125C12.4695 2.31172 12.4781 2.15273 12.693 2.13555C12.7102 2.17852 13.5738 2.19141 13.8789 2.54805C13.0453 2.38047 13.7543 2.68555 14.1281 2.85742C13.7285 2.54375 14.2871 2.85742 13.9605 2.50078C14.0895 2.52656 13.6039 2.01094 14.1023 2.46211C13.8316 2.13984 14.6309 2.23438 14.1582 1.99375C14.85 2.18711 14.4418 2.01094 14.0336 1.83477C12.9078 1.16445 16.023 2.74141 14.7512 2.04102C15.5633 2.21719 13.0152 1.41367 14.1754 1.76602C13.7328 1.57266 14.1625 1.68008 14.5621 1.80469C13.8445 1.58125 12.7703 1.16445 12.8133 1.14727C13.0625 1.16445 13.3074 1.22031 13.5438 1.28906C14.2785 1.5082 13.3332 1.2375 13.5352 1.2418C16.0617 1.89062 18.2746 3.58359 19.6195 5.79648C19.9332 6.12734 20.7883 8.31445 20.3414 7.34336C20.5434 8.1168 20.5734 8.95039 20.6809 9.74102C20.4574 9.4918 20.2082 8.57227 19.9934 8.06094C19.9031 8.25859 19.8 7.78164 19.4691 7.65273Z" fill="#232323"/>
                      </svg>
                    </div>
                    <h3>Best Practice For Busniess</h3>
                  </div>
                 
                  <p className="tick-icon">Hardware Assistance</p>
                  <p className="tick-icon">Cybersecurity Solutions</p>
                  <p className="tick-icon">Managed IT Servicesy</p>
                  <button className="btn">Learn More</button>
                </div>
                <div className="rectangle2">
                  <div className="rect2_inner">
                    <div className="svgContainer">
                        <svg className="svg1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 36 36" fill="none">
                          <circle opacity="0.5" cx="18" cy="18" r="18" fill="#D9D9D9"/>
                        </svg>
                        <img src="Mask group.png" className="mask" />
                      </div>
                    <h3>Best Practice For Busniess</h3>
                  </div>
                  <p className="tick-icon">IT Consultation and Planning</p>
                  <p className="tick-icon">Data Backup and Recovery</p>
                  <p className="tick-icon">Remote Technical Support</p>
                  
                </div>
              </div>
          </div>
          <div className="pt4_container2">
              <img src="Rectangle 9.png" className="pt4_photo1" />
          </div>
        </div>
        <div className="part5">

          <h4>Testimonial</h4>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 50" fill="none">
            <path d="M27.3801 38.3062C27.3801 35.1895 26.5655 32.5758 24.9363 30.4543C23.7818 28.9952 22.2163 28.0354 20.2365 27.5785C18.2886 27.1252 16.447 27.0933 14.7824 27.4793C14.2157 24.1147 15.1365 20.5518 17.474 16.7764C19.8115 13.0045 22.8397 10.1641 26.5336 8.26579L20.9343 0.208496C18.1009 1.611 15.4093 3.38891 12.9301 5.5387C10.4155 7.6885 8.18425 10.1606 6.20092 12.955C4.21758 15.7493 2.73009 18.905 1.77384 22.482C0.817585 26.0591 0.551961 29.707 1.00884 33.4612C1.60384 38.4195 3.20467 42.3862 5.81134 45.3258C8.41446 48.3043 11.6622 49.7918 15.5438 49.7918C18.9615 49.7918 21.7984 48.7647 24.0438 46.6822C26.268 44.6422 27.373 41.8479 27.373 38.2956L27.3801 38.3062ZM59.6943 38.3062C59.6943 35.1895 58.8797 32.5758 57.2505 30.4543C56.0959 28.9668 54.5234 28.0035 52.5507 27.5608C50.5674 27.1216 48.7505 27.1004 47.0965 27.4829C46.5299 24.1537 47.4153 20.5766 49.7599 16.787C52.0974 13.0329 55.1184 10.1995 58.8124 8.28704L53.2272 0.208496C50.3938 1.611 47.7199 3.38891 45.223 5.5387C42.6855 7.72035 40.4319 10.2119 38.5151 12.955C36.5459 15.7529 35.0797 18.905 34.1234 22.482C33.1559 26.057 32.8948 29.7863 33.3549 33.4612C33.9428 38.4195 35.5365 42.3862 38.1361 45.3258C40.7322 48.2795 43.9693 49.7599 47.8509 49.7599C51.2757 49.7599 54.1126 48.7329 56.358 46.6539C58.5786 44.6139 59.6943 41.8195 59.6943 38.2672V38.3062Z" fill="#C4C4C4"/>
          </svg>
          <div className="pt5_container1">
            <div className="text-container1">
              <p>Je suis totalement séduit par l'engagement écologique de Boiséa. En tant que fervent défenseur de l'environnement, j'apprécie énormément leur approche éco-responsable. Les meubles Boiséa sont fabriqués à partir de matériaux durables, provenant de sources certifiées, et le modèle de pré-commande permet d'éviter le gaspillage et la surproduction. Je suis fier de posséder des meubles qui allient style, qualité et respect de la nature. Bravo à Boiséa pour leur contribution à un avenir plus durable</p>
            </div>
            <div className="text-container2">
              <p>Les meubles Boiséa sont tout simplement sublimes. Leur esthétique raffinée et intemporelle ajoute une touche d'élégance à mon salon. Chaque pièce raconte une histoire unique, et l'attention portée aux détails est tout simplement remarquable. Je recommande vivement Boiséa à tous ceux qui recherchent des meubles haut de gamme qui allient style, qualité et unicité</p>
            </div>
            <div className="text-container3">
              <p>J'ai récemment commandé un meuble de salon chez Boiséa et je suis absolument ravi de mon achat. La qualité de l'artisanat est tout simplement exceptionnelle. Chaque détail est soigneusement travaillé, ce qui confère au meuble une durabilité et une élégance incomparables. De plus, l'expérience de pré-commande a été fluide et le service client m'a offert une assistance personnalisée tout au long du processus. Boiséa est définitivement ma nouvelle référence en matière de mobilier de qualité</p>
            </div>
          </div>
          <div className="pt5_container2">
            <img src="Ellipse 5.png" className="ellipse5" />
            <div>
              <h5>Rimsha Awaan</h5>
              <h6>IT Manager</h6>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;