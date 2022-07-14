import React from "react";

export class PlayAudio extends React.Component {
    state = {
        audio: new Audio(this.props.link),
        playing: false
    }

    play = () => {
        this.state.playing ? this.state.audio.pause() : this.state.audio.play()
        this.setState({
            playing: !this.state.playing
        })
    }

    render() {

        return (
            <section>
                <button onClick={this.play}>Play</button>
            </section>
        )
    }
}