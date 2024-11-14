class FuserPressKit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="press-kit" class="press-kit">
                <h2>Press Kit</h2>
                <div>
                    <h3>About your Project</h3>
                    <p>Your project description</p>
                    <h3>Sample Video</h3>
                    <video controls width="300">
                        <source src="sample-video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <h3>Sample Track</h3>
                    <audio controls>
                        <source src="sample-track.mp3" type="audio/mp3">
                        Your browser does not support the audio element.
                    </audio>
                    <h3>Press Photos</h3>
                    <img src="press-photo1.jpg" alt="Press Photo 1" width="300">
                    <img src="press-photo2.jpg" alt="Press Photo 2" width="300">
                    <form>
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                        <textarea placeholder="Message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        `;
    }
}

customElements.define('fuser-press-kit', FuserPressKit);
