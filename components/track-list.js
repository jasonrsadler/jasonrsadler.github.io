class FuserTrackList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="storm-track-list" class="track-list">
                <h2>Storm - Track List</h2>
                <ol>
                    <li>Wanted To</li>
                    <li>Resentment</li>
                    <li>The Blinds</li>
                    <li>The Boat Forgotten</li>
                    <li>Semblance</li>
                    <li>Broken</li>
                    <li>Plea</li>
                    <li>Memorias Veteris Domus</li>
                    <li>Guide</li>
                    <li>Pandora</li>
                    <li>Perfection</li>
                    <li>Rebellion</li>
                    <li>River of Rapture</li>
                    <li>Rundown</li>
                </ol>
            </section>
        `;
    }
}

customElements.define('fuser-track-list', FuserTrackList);
