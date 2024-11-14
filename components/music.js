class FuserMusic extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="music">
                <h2>Music</h2>
                <div class="album">
                    <h3>Storm</h3>
                    <p>AVAILABLE FEBRUARY 25, 2025 (PRE-ORDER DECEMBER 17, 2024)</p>
                    <p>Brace yourself for the raw intensity of Fuser's debut album, "Storm." This collection of tracks is a powerful journey through the turbulence of life, blending...</p>
                </div>
                <div class="album">
                    <h3>The Blinds</h3>
                    <p>AVAILABLE NOVEMBER 12, 2024</p>
                    <p>Get ready to feel the new power of Fuser's latest release, "The Blinds." This album is a dark, tragic tribute to a friend lost in a car crash...</p>
                    <div>
                        <label>Your opinion of "The Blinds"?</label>
                        <input type="radio" name="opinion" value="love it"> Love it
                        <input type="radio" name="opinion" value="it's ok"> It's ok
                        <input type="radio" name="opinion" value="not for me"> Not for me
                        <button>Vote</button>
                        <button>View Results</button>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('fuser-music', FuserMusic);
