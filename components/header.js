class FuserHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#music">Music</a>
                    <a href="#storm-track-list">Storm - Track List</a>
                    <a href="#press-kit">Press Kit</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('fuser-header', FuserHeader);
