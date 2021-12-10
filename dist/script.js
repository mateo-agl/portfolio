const { Motion, spring } = ReactMotion,
nav = ["About Me", "Portfolio", "Contact"],
contact = [
{ link: "https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon: "bi bi-linkedin" },
{ link: "https://github.com/mateo-agl", icon: "bi bi-github" },
{ link: "https://www.freecodecamp.org/mateo-aguilar", icon: "fa fa-free-code-camp" },
{ link: "https://codepen.io/mateoagl", icon: "fa fa-codepen" }],

penLink = "https://codepen.io/mateoagl/",
thmbLink = "https://raw.githubusercontent.com/mateo-agl/images/main/",
replitLink = "https://replit.com/@mateo-agl/",
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
{ repl: "metricimpconverter?v=1", name: "Metric/Imperial converter" },
{ repl: "issuetracker?v=1", name: "Issue Tracker" },
{ repl: "library?v=1", name: "Library" },
{ repl: "stockchecker?v=1", name: "Stock Checker" },
{ repl: "messageboard?v=1", name: "Message Board" }],

portfolio = apps.map(
a => ({
  appLink: a.pen ? penLink + "full/" + a.pen : replitLink + a.repl,
  codeLink: a.pen ? penLink + "pen/" + a.pen : gitHubLink + a.repl.slice(0, -4),
  thumbnail: thmbLink + a.name.toLowerCase().replace(/\W/g, "-") + "-thumbnail.png",
  name: a.name }));



const App = () => {
  const [data, setData] = React.useState({ nav, portfolio, contact, slide: "" });
  React.useEffect(() => {
    const html = document.firstElementChild;
    data.slide === "Portfolio" || window.innerHeight < 295 ?
    html.setAttribute('style', 'overflow-y: auto') :
    html.setAttribute('style', 'overflow-y: hidden');
  });
  return /*#__PURE__*/(
    React.createElement("div", { id: "container", className: "container-fluid text-center" }, /*#__PURE__*/
    React.createElement(Motion, { defaultStyle: { opacity: 0 }, style: { opacity: spring(1) } },

    (style) => /*#__PURE__*/
    React.createElement("div", { style: style }, /*#__PURE__*/
    React.createElement(Navbar, { data: data, setData: setData }), /*#__PURE__*/
    React.createElement(Welcome, null))), /*#__PURE__*/



    React.createElement(About, { data: data, setData: setData }), /*#__PURE__*/
    React.createElement(Portfolio, { portfolio: data.portfolio }), /*#__PURE__*/
    React.createElement(Contact, { contact: data.contact })));


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
React.createElement("li", {
  className: "nav-item",
  onClick: () => {
    props.data.slide = n;
    props.setData({ ...props.data });
  } }, /*#__PURE__*/
React.createElement("a", { href: "#section-" + (i + 2), className: "nav-link p-3" }, n)))))));









const Welcome = () => /*#__PURE__*/
React.createElement("section", { id: "section-1", className: "row vh-100 vw-100 align-items-center position-absolute" }, /*#__PURE__*/
React.createElement("div", { className: "col" }, /*#__PURE__*/
React.createElement("h1", null, "Hello, I'm Mateo, a Full Stack Web Developer.")));




const About = (props) => /*#__PURE__*/
React.createElement("section", { id: "section-2", className: "row vh-100 align-items-center position-absolute" }, /*#__PURE__*/
React.createElement("div", { className: "col" }, /*#__PURE__*/
React.createElement("h2", null, "About me..."), /*#__PURE__*/
React.createElement("p", null, "I started to learn about web development since last year, watching videos, reading technical pages and learning from freeCodeCamp courses. I have a good manage of JavaScript, HTML and CSS. I also have experience with frameworks like React, Redux, jQuery, Sass and Bootstrap.")));




const Portfolio = props => {
  [state, setState] = React.useState({ hover: false, key: "" });
  return /*#__PURE__*/(
    React.createElement("section", { id: "section-3", className: "row position-absolute" }, /*#__PURE__*/
    React.createElement("div", { className: "col mt-5" }, /*#__PURE__*/
    React.createElement("div", { className: "row m-4 justify-content-center" },

    props.portfolio.map(
    (p, i) => /*#__PURE__*/
    React.createElement("div", { className: "col-sm-3 m-2 p-0 position-relative project" }, /*#__PURE__*/
    React.createElement("div", {
      className: "w-100 h-100 position-absolute border",
      onMouseEnter: () => setState({ hover: true, key: i }),
      onMouseLeave: () => setState({ hover: false, key: "" }) }, /*#__PURE__*/
    React.createElement(Motion, {
      key: i,
      defaultStyle: { scale: 0 },
      style: { scale: state.hover && i === state.key ? spring(1) : spring(0) } },

    ({ scale }) => /*#__PURE__*/
    React.createElement("div", { className: "position-absolute top-50 start-50 translate-middle" }, /*#__PURE__*/
    React.createElement("a", {
      className: "btn btn-light border rounded-circle my-auto mx-2",
      style: { transform: `scale(${scale})` },
      href: p.appLink,
      target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { className: "bi bi-fullscreen fs-2" })), /*#__PURE__*/

    React.createElement("a", {
      className: "btn btn-light border rounded-circle my-auto mx-2",
      style: { transform: `scale(${scale})` },
      href: p.codeLink,
      target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { className: "bi bi-code-slash fs-2" }))))), /*#__PURE__*/





    React.createElement("img", { src: p.thumbnail, className: "img-fluid border-bottom", alt: p.name + " thumbnail" }), /*#__PURE__*/
    React.createElement("h5", { className: "my-1" }, p.name)))))));







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

    then(response => {
      window.alert("Mail sent");
    }).
    catch(err => {
      window.alert("Failed to send mail");
    });
  };

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return /*#__PURE__*/(
    React.createElement("section", {
      id: "section-4",
      className: "row vw-100 vh-100 align-items-center position-absolute" }, /*#__PURE__*/
    React.createElement("div", { className: "col my-5 px-5 py-3" }, /*#__PURE__*/
    React.createElement("h2", null, "Contact Me"),

    props.contact.map(
    (b) => /*#__PURE__*/
    React.createElement("a", { className: "contact-links", href: b.link, target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { className: b.icon + " fs-2 mx-1" }))), /*#__PURE__*/



    React.createElement("form", { className: "container-sm", onSubmit: onSubmit }, /*#__PURE__*/
    React.createElement("div", { className: "row justify-content-between" }, /*#__PURE__*/
    React.createElement("div", { className: "col-xl-1 col-xl-3" }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "form-control",
      name: "from_name",
      placeholder: "Name",
      value: toSend.from_name,
      onChange: handleChange,
      maxLength: "100",
      required: true })), /*#__PURE__*/

    React.createElement("div", { className: "col-xl-1 col-xl-3" }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "form-control",
      name: "subject",
      placeholder: "Subject",
      value: toSend.subject,
      onChange: handleChange,
      maxLength: "200",
      required: true })), /*#__PURE__*/

    React.createElement("div", { className: "col-xl-1 col-xl-3" }, /*#__PURE__*/
    React.createElement("input", {
      type: "email",
      className: "form-control",
      name: "reply_to",
      placeholder: "Email",
      value: toSend.reply_to,
      onChange: handleChange,
      maxLength: "200",
      required: true }))), /*#__PURE__*/


    React.createElement("textarea", {
      className: "form-control",
      name: "message",
      placeholder: "Message",
      value: toSend.message,
      onChange: handleChange,
      required: true }), /*#__PURE__*/
    React.createElement("button", { type: "submit", className: "btn btn-light border" }, "Submit")))));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));