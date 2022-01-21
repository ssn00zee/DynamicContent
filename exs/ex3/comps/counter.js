var count_template = document.createElement("template"); 
count_template.innerHTML = `
<style>
body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
</head>
<body>
<style>
#counter {
    background-color: salmon;
    display: flex;

}

#counter > button {
    width: 60px;
    height: 60px;
    background-color: forestgreen;
    border: none;
    border-radius: 5px;
    margin: 5px;
}

#counter > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>

<div id="bar"></div>

<div id="counter">
<button>-</button>
<div>1</div>
<button>+</button>
</div>`;

class TheCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(count_template.content.cloneNode(true));
        this.shadowRoot.querySelector("id_but").onclick = () => this.inc();
        this.shadowRoot.querySelector("#d_but").onclick = () => this.dec();
    }

    dec(){
        this.num = this.num -1;
        this.shadowRoot.querySelector(#number).innerText = this.num;
        this.shadowRoot.querySelector().style.width = this.num; 
    }

}

customElements.define("button-masher", TheCounter);