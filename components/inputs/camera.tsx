/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useMemo, useRef, useState, MouseEvent, useLayoutEffect } from 'react';
import assertUnreachable from '@helpers/assertUnreachable';
import classes from './camera.module.css';
import { Button, Stack } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useRecoilState } from 'recoil';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';

interface CameraProps {
	initialData: string | null;
	photoCallback: (content: string) => void;
}

const constraints: MediaStreamConstraints = {
	video: {
		advanced: [
			{
				facingMode: 'environment',
				width: 2048,
				height: 1536,
			},
		],
	},
	audio: false,
};

export default function Camera({ initialData, photoCallback }: CameraProps) {
	const [data, setData] = useRecoilState(modifiedDataState);

	const [initialImg, setinitialImg] = useState<boolean>(true);

	const dataImage = useMemo(() => {
		if (!initialData) {
			return null;
		}

		if (initialData.startsWith('data:image/jpeg;base64,')) {
			return initialData;
		}

		return `data:image/jpeg;base64,${initialData}`;
	}, [initialData]);

	const [isShooting, setIsShooting] = useState(dataImage === null);

	const buttonWords: 'Capture' | 'Take New Photo' | 'Take Picture' = useMemo(() => {
		if (isShooting) {
			return 'Capture';
		}
		if (dataImage) {
			return 'Take New Photo';
		}
		return 'Take Picture';
	}, [isShooting, dataImage]);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const context2d = useRef<CanvasRenderingContext2D>();

	useEffect(() => {
		setIsShooting(dataImage === null);

		if (!initialImg) {
			setData((currentData) => {
				if (currentData === null) {
					return null;
				}

				return {
					...currentData,
					content: dataImage ?? '',
				};
			});
		}
	}, [dataImage, initialImg, setData]);

	useLayoutEffect(() => {
		async function setupCamera() {
			const media = await navigator.mediaDevices.getUserMedia(constraints);
			const mediaTrackSettings: MediaTrackSettings = media.getVideoTracks()[0].getSettings();

			if (videoRef.current) {
				videoRef.current.srcObject = media;
			} else {
				console.error('Video ref empty.', { videoRef: videoRef.current });
			}

			if (canvasRef.current) {
				const context = canvasRef.current.getContext('2d');

				if (context) {
					context.canvas.width = mediaTrackSettings.width ?? 1;
					context.canvas.height = mediaTrackSettings.height ?? 1;
					canvasRef.current.height = mediaTrackSettings.height ?? 1;
					context2d.current = context;
				} else {
					console.error('context empty', { context });
				}
			} else {
				console.error('Canvas ref empty.', { canvasRef: canvasRef.current });
			}
		}
		setupCamera();
	}, []);

	function buttonClick(event: MouseEvent<HTMLButtonElement>) {
		setinitialImg(false);
		event.preventDefault();

		switch (buttonWords) {
			case 'Capture':
				if (context2d.current && videoRef.current && canvasRef.current) {
					context2d.current.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
					const dataUri = canvasRef.current.toDataURL('image/jpeg');

					photoCallback(dataUri);
					setIsShooting(false);
				} else {
					console.error('Capture click failed.', {
						context2d: context2d.current,
						videoRef: videoRef.current,
						canvasRef: canvasRef.current,
					});
				}
				break;
			case 'Take New Photo':
			case 'Take Picture':
				setIsShooting(true);
				break;
			default:
				assertUnreachable(buttonWords);
		}
	}

	return (
		<Stack gap={1}>
			<div>
				<Button
					onClick={buttonClick}
					variant="contained"
					type="button"
					startIcon={buttonWords === 'Capture' ? <CameraAltIcon /> : <RefreshIcon />}
				>
					{buttonWords}
				</Button>
			</div>
			<canvas ref={canvasRef} className={classes.canvas} />
			<video
				className={classes.video}
				autoPlay={true}
				style={{ display: isShooting ? 'block' : 'none' }}
				ref={videoRef}
			/>
			<img
				className={classes.img}
				src={dataImage ?? ''}
				alt="user generated photo"
				style={{ display: isShooting ? 'none' : 'block' }}
			/>
		</Stack>
	);
}
