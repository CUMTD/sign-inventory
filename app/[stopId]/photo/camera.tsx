// import * as React from 'react';
// import { PureComponent, MouseEvent } from 'react';

// interface Props {
// 	photoCallback: (image: string) => void;
// 	initialData: string;
// }

// interface State {
// 	current: string;
// 	shoot: boolean;
// }

// export class Camera extends PureComponent<Props, State> {
// 	private static readonly constraints: MediaStreamConstraints = {
// 		video: {
// 			advanced: [
// 				{
// 					facingMode: 'environment',
// 					width: 2048,
// 					height: 1536,
// 				},
// 			],
// 		},
// 		audio: false,
// 	};

// 	private video: HTMLVideoElement | undefined;
// 	private canvas: HTMLCanvasElement | undefined;
// 	private canvasContext: CanvasRenderingContext2D | undefined;

// 	constructor(props: Props, context: any) {
// 		super(props, context);

// 		let current: string = '';
// 		if (this.props.initialData && this.props.initialData.length > 0) {
// 			current = `data:image/jpeg;base64,${this.props.initialData}`;
// 		}

// 		this.state = {
// 			current,
// 			shoot: current == null,
// 		};
// 	}

// 	public async componentDidMount(): Promise<void> {
// 		this.canvasContext = this.canvas.getContext('2d');

// 		const media: MediaStream = await navigator.mediaDevices.getUserMedia(Camera.constraints);
// 		this.video.srcObject = media;

// 		const mediaTrackSettings: MediaTrackSettings = media.getVideoTracks()[0].getSettings();
// 		this.canvasContext.canvas.width = mediaTrackSettings.width;
// 		this.canvasContext.canvas.height = mediaTrackSettings.height;

// 		this.canvas.height = this.canvas.width / mediaTrackSettings.aspectRatio;
// 	}

// 	public render(): JSX.Element {
// 		return (
// 			<div className="camera">
// 				<canvas ref={(canvas: HTMLCanvasElement) => (this.canvas = canvas)} />

// 				<video
// 					ref={(video: HTMLVideoElement) => (this.video = video)}
// 					autoPlay={true}
// 					className={this.state.shoot ? 'show' : 'hide'}
// 				/>
// 				<img src={this.state.current} className={this.state.shoot ? 'hide' : 'show'} />
// 				<div className="buttons">{this.renderButtons()}</div>
// 			</div>
// 		);
// 	}

// 	private renderButtons: () => JSX.Element = () => {
// 		if (this.state.shoot) {
// 			return (
// 				<button className="btn btn-warning" onClick={this.capture}>
// 					Capture
// 				</button>
// 			);
// 		}
// 		let words: string = 'Take Picture';
// 		if (this.state.current) {
// 			words = 'Replace Picture';
// 		}
// 		return (
// 			<button className="btn btn-warning" onClick={() => this.setState({ ...this.state, shoot: true })}>
// 				{words}
// 			</button>
// 		);
// 	};

// 	private capture: (event: MouseEvent<HTMLButtonElement>) => void = (event: MouseEvent<HTMLButtonElement>) => {
// 		event.preventDefault();
// 		this.canvasContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
// 		const dataUri: string = this.canvas.toDataURL('image/jpeg');
// 		this.props.photoCallback(dataUri);
// 		this.setState({ ...this.state, current: dataUri, shoot: false });
// 	};
// }
