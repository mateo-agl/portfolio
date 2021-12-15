const { Motion, spring } = ReactMotion,
nav = ["Home", "About Me", "What I do", "Portfolio", "Contact"],
contact = [
{ link: "https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon: "bi bi-linkedin" },
{ link: "https://github.com/mateo-agl", icon: "bi bi-github" },
{ link: "https://www.freecodecamp.org/mateo-aguilar", icon: "fa fa-free-code-camp" },
{ link: "https://codepen.io/mateoagl", icon: "fa fa-codepen" }],

penLink = "https://codepen.io/mateoagl/",
thmbLink = "https://raw.githubusercontent.com/mateo-agl/images/main/",
replitLink = ".mateo-agl.repl.co",
gitHubLink = "https://github.com/mateo-agl/",
apps = [
{ pen: "GRmaeNj", name: "Heat Map" },
{ pen: "rNweqVw", name: "Choropleth Map" },
{ pen: "gORLEyP", name: "Tree Map" },
{ pen: "oNWeYOa", name: "Bar Chart" },
{ pen: "MWmrmRg", name: "Scatter Plot" },
{ pen: "LYWjPLN", name: "Pomodoro Clock" },
{ pen: "QWpyrWN", name: "Javascript Calculator" },
{ pen: "MWpgBzZ", name: "Drum Machine" },
{ pen: "KKaLBKb", name: "Markdown Previewer" },
{ repl: "metricimpconverter", name: "Metric/Imperial converter" },
{ repl: "issuetracker", name: "Issue Tracker" },
{ repl: "library", name: "Library" },
{ repl: "stockchecker", name: "Stock Checker" },
{ repl: "messageboard", name: "Message Board" }],

portfolio = apps.map(
a => ({
  appLink: a.pen ? penLink + "full/" + a.pen : "https://" + a.repl + replitLink,
  codeLink: a.pen ? penLink + "pen/" + a.pen : gitHubLink + a.repl,
  thumbnail: thmbLink + a.name.toLowerCase().replace(/\W/g, "-") + "-thumbnail.png",
  name: a.name }));



const App = () => {
  const [data, setData] = React.useState({ nav, portfolio, contact, slide: "" });
  return /*#__PURE__*/(
    React.createElement(Motion, { defaultStyle: { opacity: 0 }, style: { opacity: spring(1) } },

    (style) => /*#__PURE__*/
    React.createElement("div", { className: "d-flex justify-content-center text-center", style: style }, /*#__PURE__*/
    React.createElement(Navbar, { data: data, setData: setData }), /*#__PURE__*/
    React.createElement("div", { className: "col-md-8 mx-4" }, /*#__PURE__*/
    React.createElement(Welcome, null), /*#__PURE__*/
    React.createElement(About, { data: data, setData: setData }), /*#__PURE__*/
    React.createElement(WhatIDo, null), /*#__PURE__*/
    React.createElement(Portfolio, { portfolio: data.portfolio }), /*#__PURE__*/
    React.createElement(Contact, { contact: data.contact })))));





};

const Navbar = (props) => /*#__PURE__*/
React.createElement("nav", { className: "navbar navbar-expand-lg row p-0 w-100 position-fixed" }, /*#__PURE__*/
React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
React.createElement("button", {
  class: "navbar-toggler border ms-auto my-2",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarNav",
  "aria-controls": "navbarNav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation" }, /*#__PURE__*/
React.createElement("i", { className: "bi bi-list fs-2" })), /*#__PURE__*/

React.createElement("div", { className: "collapse navbar-collapse justify-content-end", id: "navbarNav" }, /*#__PURE__*/
React.createElement("ul", { className: "navbar-nav" },

props.data.nav.map(
(n, i) => /*#__PURE__*/
React.createElement("li", { className: "nav-item" }, /*#__PURE__*/
React.createElement("a", { href: "#section-" + (i + 1), className: "nav-link p-3" }, n)))))));









const Welcome = () => /*#__PURE__*/
React.createElement("section", { id: "section-1", className: "row vh-100 align-items-center" }, /*#__PURE__*/
React.createElement("h1", null, "Hello, I'm Mateo, a Full Stack Web Developer."));



const About = (props) => /*#__PURE__*/
React.createElement("section", { id: "section-2", className: "row vh-100 align-items-center" }, /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h2", null, "About me..."), /*#__PURE__*/
React.createElement("p", null, "I was introduced to programming in highschool and started to learn about web development more than a year ago, making courses and searching about popular languages and frameworks, using them in my personal projects. In a work environment i'm very independent and organized, i compromise with the team, like to participate and learn quick. I also like planning, organize, improve something done, learning and do new things.")));




const WhatIDo = (props) => /*#__PURE__*/
React.createElement("section", { id: "section-3", className: "row min-vh-100 align-items-center" }, /*#__PURE__*/
React.createElement("div", { className: "card-group" }, /*#__PURE__*/
React.createElement("div", { className: "card" }, /*#__PURE__*/
React.createElement("div", { className: "card-body" }, /*#__PURE__*/
React.createElement("i", { className: "bi bi-server fs-1" }), /*#__PURE__*/
React.createElement("h2", { className: "card-title" }, "Back End"), /*#__PURE__*/
React.createElement("p", { className: "card-text" }, "I setup and manage servers and databases. Can handle data and also create RESTful APIs microservices.")), /*#__PURE__*/

React.createElement("div", { className: "card-body" }, /*#__PURE__*/
React.createElement("i", { className: "bi bi-window fs-1" }), /*#__PURE__*/
React.createElement("h2", { className: "card-title" }, "Front End"), /*#__PURE__*/
React.createElement("p", { className: "card-text" }, "I build website structures and present data in the form of charts, graphs, and maps. Can add styles and animations, make them responsive and add interactivity."))), /*#__PURE__*/


React.createElement("div", { className: "card" }, /*#__PURE__*/
React.createElement("div", { className: "card-body" }, /*#__PURE__*/
React.createElement("h2", { className: "card-title" }, "Technologies and tools I use:"), /*#__PURE__*/
React.createElement("ul", { className: "p-0" }, /*#__PURE__*/
React.createElement("li", null, "Javascript"), /*#__PURE__*/
React.createElement("li", null, "HTML"), /*#__PURE__*/
React.createElement("li", null, "CSS"), /*#__PURE__*/
React.createElement("li", null, "React"), /*#__PURE__*/
React.createElement("li", null, "Redux"), /*#__PURE__*/
React.createElement("li", null, "Bootstrap"), /*#__PURE__*/
React.createElement("li", null, "D3"), /*#__PURE__*/
React.createElement("li", null, "Sass"), /*#__PURE__*/
React.createElement("li", null, "Nodejs"), /*#__PURE__*/
React.createElement("li", null, "Express"), /*#__PURE__*/
React.createElement("li", null, "MongoDB"), /*#__PURE__*/
React.createElement("li", null, "Mongoose"), /*#__PURE__*/
React.createElement("li", null, "Chai"), /*#__PURE__*/
React.createElement("li", null, "Mocha"), /*#__PURE__*/
React.createElement("li", null, "Helmetjs"), /*#__PURE__*/
React.createElement("li", null, "GitHub"), /*#__PURE__*/
React.createElement("li", null, "NPM"))))));







const Portfolio = props => {
  [state, setState] = React.useState({ hover: false, key: "" });
  return /*#__PURE__*/(
    React.createElement("section", { id: "section-4", className: "row pt-5 justify-content-center" }, /*#__PURE__*/
    React.createElement("h2", { className: "mt-2" }, "My work"),

    props.portfolio.map(
    (p, i) => /*#__PURE__*/
    React.createElement("div", { className: "col-xl-4 p-0 m-3 position-relative border" }, /*#__PURE__*/
    React.createElement(Motion, {
      key: i,
      defaultStyle: { opacity: 0 },
      style: { opacity: state.hover && i === state.key ? spring(0.85) : spring(0) } },

    (style) => /*#__PURE__*/
    React.createElement("div", {
      className: "d-flex position-relative",
      onMouseEnter: () => setState({ hover: true, key: i }),
      onMouseLeave: () => setState({ hover: false, key: "" }) }, /*#__PURE__*/
    React.createElement("div", { className: "d-flex flex-column w-100 h-100 thmbnail-hover position-absolute justify-content-center align-items-center", style: style }, /*#__PURE__*/
    React.createElement("h3", { className: "project-name" }, p.name), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", {
      className: "btn btn-secondary border rounded-circle mx-2",
      href: p.appLink,
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "Visit Website",
      target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { class: "bi bi-chevron-right fs-3" })), /*#__PURE__*/

    React.createElement("a", {
      className: "btn btn-secondary border rounded-circle mx-2",
      href: p.codeLink,
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "See Code",
      target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { className: "bi bi-code-slash fs-3" })))), /*#__PURE__*/



    React.createElement("img", { src: p.thumbnail, className: "img-fluid", alt: p.name + " thumbnail" })))))));








};

const Contact = props => {
  const [toSend, setToSend] = React.useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '' });


  const onSubmit = e => {
    e.preventDefault();
    emailjs.send(
    'service_osecgz9',
    'template_hugptro',
    toSend,
    'user_LJGGYMoZAiXX9QAcZO4cw').

    then(response => window.alert("Mail sent")).
    catch(err => window.alert("Failed to send mail"));
  };

  const handleChange = e => setToSend({ ...toSend, [e.target.name]: e.target.value });
  return /*#__PURE__*/(
    React.createElement("section", {
      id: "section-5",
      className: "row vh-100 align-items-center" }, /*#__PURE__*/
    React.createElement("div", { className: "col w-75 my-5 py-3" }, /*#__PURE__*/
    React.createElement("h2", null, "Contact Me"),

    props.contact.map(
    (b) => /*#__PURE__*/
    React.createElement("a", { className: "contact-links", href: b.link, target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { className: b.icon + " fs-2 mx-1" }))), /*#__PURE__*/



    React.createElement("form", { style: { maxWidth: "500px" }, className: "d-flex flex-column mx-auto", onSubmit: onSubmit }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "form-control my-1",
      name: "from_name",
      placeholder: "Name",
      value: toSend.from_name,
      onChange: handleChange,
      maxLength: "100",
      required: true }), /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "form-control my-1",
      name: "subject",
      placeholder: "Subject",
      value: toSend.subject,
      onChange: handleChange,
      maxLength: "200",
      required: true }), /*#__PURE__*/
    React.createElement("input", {
      type: "email",
      className: "form-control my-1",
      name: "reply_to",
      placeholder: "Email",
      value: toSend.reply_to,
      onChange: handleChange,
      maxLength: "200",
      required: true }), /*#__PURE__*/
    React.createElement("textarea", {
      className: "form-control my-1",
      name: "message",
      placeholder: "Message",
      value: toSend.message,
      onChange: handleChange,
      required: true }), /*#__PURE__*/
    React.createElement("button", { type: "submit", className: "btn btn-light border mx-auto" }, "Submit")))));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});